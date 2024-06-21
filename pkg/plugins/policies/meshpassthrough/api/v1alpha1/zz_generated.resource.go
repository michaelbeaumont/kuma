// Generated by tools/policy-gen.
// Run "make generate" to update this file.

// nolint:whitespace
package v1alpha1

import (
	_ "embed"
	"errors"
	"fmt"

	"k8s.io/kube-openapi/pkg/validation/spec"
	"sigs.k8s.io/yaml"

	"github.com/kumahq/kuma/pkg/core/resources/model"
)

//go:embed schema.yaml
var rawSchema []byte

func init() {
	var schema spec.Schema
	if rawSchema != nil {
		if err := yaml.Unmarshal(rawSchema, &schema); err != nil {
			panic(err)
		}
	}
	rawSchema = nil
	MeshPassthroughResourceTypeDescriptor.Schema = &schema
}

const (
	MeshPassthroughType model.ResourceType = "MeshPassthrough"
)

var _ model.Resource = &MeshPassthroughResource{}

type MeshPassthroughResource struct {
	Meta model.ResourceMeta
	Spec *MeshPassthrough
}

func NewMeshPassthroughResource() *MeshPassthroughResource {
	return &MeshPassthroughResource{
		Spec: &MeshPassthrough{},
	}
}

func (t *MeshPassthroughResource) GetMeta() model.ResourceMeta {
	return t.Meta
}

func (t *MeshPassthroughResource) SetMeta(m model.ResourceMeta) {
	t.Meta = m
}

func (t *MeshPassthroughResource) GetSpec() model.ResourceSpec {
	return t.Spec
}

func (t *MeshPassthroughResource) SetSpec(spec model.ResourceSpec) error {
	protoType, ok := spec.(*MeshPassthrough)
	if !ok {
		return fmt.Errorf("invalid type %T for Spec", spec)
	} else {
		if protoType == nil {
			t.Spec = &MeshPassthrough{}
		} else {
			t.Spec = protoType
		}
		return nil
	}
}

func (t *MeshPassthroughResource) GetStatus() model.ResourceStatus {
	return nil
}

func (t *MeshPassthroughResource) SetStatus(_ model.ResourceStatus) error {
	return errors.New("status not supported")
}

func (t *MeshPassthroughResource) Descriptor() model.ResourceTypeDescriptor {
	return MeshPassthroughResourceTypeDescriptor
}

func (t *MeshPassthroughResource) Validate() error {
	if v, ok := interface{}(t).(interface{ validate() error }); !ok {
		return nil
	} else {
		return v.validate()
	}
}

var _ model.ResourceList = &MeshPassthroughResourceList{}

type MeshPassthroughResourceList struct {
	Items      []*MeshPassthroughResource
	Pagination model.Pagination
}

func (l *MeshPassthroughResourceList) GetItems() []model.Resource {
	res := make([]model.Resource, len(l.Items))
	for i, elem := range l.Items {
		res[i] = elem
	}
	return res
}

func (l *MeshPassthroughResourceList) GetItemType() model.ResourceType {
	return MeshPassthroughType
}

func (l *MeshPassthroughResourceList) NewItem() model.Resource {
	return NewMeshPassthroughResource()
}

func (l *MeshPassthroughResourceList) AddItem(r model.Resource) error {
	if trr, ok := r.(*MeshPassthroughResource); ok {
		l.Items = append(l.Items, trr)
		return nil
	} else {
		return model.ErrorInvalidItemType((*MeshPassthroughResource)(nil), r)
	}
}

func (l *MeshPassthroughResourceList) GetPagination() *model.Pagination {
	return &l.Pagination
}

func (l *MeshPassthroughResourceList) SetPagination(p model.Pagination) {
	l.Pagination = p
}

var MeshPassthroughResourceTypeDescriptor = model.ResourceTypeDescriptor{
	Name:                         MeshPassthroughType,
	Resource:                     NewMeshPassthroughResource(),
	ResourceList:                 &MeshPassthroughResourceList{},
	Scope:                        model.ScopeMesh,
	KDSFlags:                     model.GlobalToAllZonesFlag | model.ZoneToGlobalFlag,
	WsPath:                       "meshpassthroughs",
	KumactlArg:                   "meshpassthrough",
	KumactlListArg:               "meshpassthroughs",
	AllowToInspect:               true,
	IsPolicy:                     true,
	IsExperimental:               false,
	SingularDisplayName:          "Mesh Passthrough",
	PluralDisplayName:            "Mesh Passthroughs",
	IsPluginOriginated:           true,
	IsTargetRefBased:             true,
	HasToTargetRef:               false,
	HasFromTargetRef:             false,
	HasStatus:                    false,
	AllowedOnSystemNamespaceOnly: false,
}
