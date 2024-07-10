package generator

import (
	"context"

	envoy_listener_v3 "github.com/envoyproxy/go-control-plane/envoy/config/listener/v3"

	core_xds "github.com/kumahq/kuma/pkg/core/xds"
	xds_context "github.com/kumahq/kuma/pkg/xds/context"
	envoy_listeners "github.com/kumahq/kuma/pkg/xds/envoy/listeners"
	"github.com/kumahq/kuma/pkg/xds/generator/zoneproxy"
)

const (
	IngressProxy = "ingress-proxy"

	// OriginIngress is a marker to indicate by which ProxyGenerator resources
	// were generated.
	OriginIngress = "ingress"
)

type IngressGenerator struct{}

func (i IngressGenerator) Generate(
	_ context.Context,
	_ *core_xds.ResourceSet,
	_ xds_context.Context,
	proxy *core_xds.Proxy,
) (*core_xds.ResourceSet, error) {
	resources := core_xds.NewResourceSet()

	networking := proxy.ZoneIngressProxy.ZoneIngressResource.Spec.GetNetworking()
	address, port := networking.GetAddress(), networking.GetPort()
	listenerBuilder := envoy_listeners.NewInboundListenerBuilder(proxy.APIVersion, address, port, core_xds.SocketAddressProtocolTCP).
		Configure(envoy_listeners.TLSInspector())

	for _, mr := range proxy.ZoneIngressProxy.MeshResourceList {
		meshName := mr.Mesh.GetMeta().GetName()

		services := zoneproxy.AddFilterChains(mr.AvailableServices, proxy.APIVersion, listenerBuilder, mr.Destinations, mr.EndpointMap)

		cdsResources, err := zoneproxy.GenerateCDS(mr.Destinations, services, proxy.APIVersion, meshName, OriginIngress)
		if err != nil {
			return nil, err
		}
		resources.Add(cdsResources...)

		edsResources, err := zoneproxy.GenerateEDS(services, mr.EndpointMap, proxy.APIVersion, meshName, OriginIngress)
		if err != nil {
			return nil, err
		}
		resources.Add(edsResources...)
	}

	listener, err := listenerBuilder.Build()
	if err != nil {
		return nil, err
	}
	if len(listener.(*envoy_listener_v3.Listener).FilterChains) > 0 {
		resources.Add(&core_xds.Resource{
			Name:     listener.GetName(),
			Origin:   OriginIngress,
			Resource: listener,
		})
	}

	return resources, nil
}
