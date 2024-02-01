import{a as tt,K as A}from"./index-FZCiQto1.js";import{_ as R,a as g,o,b as v,w as a,r as K,m as s,f as t,d as G,c as u,e as r,l as J,q as n,t as i,F as f,E as x,p as I,n as et,A as at,I as nt,X as C,Y as st,Z as ot,$ as it,S as lt,a0 as rt,a1 as H,C as dt,x as ct,y as ut}from"./index-ANwvg_A1.js";import{_ as pt}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-1kzDND26.js";import{S as _t}from"./StatusBadge-GuNRtPaI.js";import{S as ft}from"./SummaryView-O9z0R_ts.js";import{T as X}from"./TagList-0w37gz68.js";import{T as mt}from"./TextWithCopyButton-Ac0tj8q8.js";import{_ as vt}from"./SubscriptionList.vue_vue_type_script_setup_true_lang-7G7gqRFG.js";import"./CopyButton-XxMKSpD7.js";import"./AccordionList-gNVeK0Wr.js";const yt={},gt={class:"card"},ht={class:"title"},bt={class:"body"};function kt(c,e){const l=g("KCard");return o(),v(l,{class:"data-card"},{default:a(()=>[s("dl",null,[s("div",gt,[s("dt",ht,[K(c.$slots,"title",{},void 0,!0)]),t(),s("dd",bt,[K(c.$slots,"default",{},void 0,!0)])])])]),_:3})}const Q=R(yt,[["render",kt],["__scopeId","data-v-6e083223"]]),xt={class:"service-traffic"},wt={class:"actions"},$t=G({__name:"DataPlaneTraffic",setup(c){return(e,l)=>(o(),u("div",xt,[s("div",wt,[K(e.$slots,"actions",{},void 0,!0)]),t(),r(Q,{class:"header"},{title:a(()=>[K(e.$slots,"title",{},void 0,!0)]),_:3}),t(),K(e.$slots,"default",{},void 0,!0)]))}}),j=R($t,[["__scopeId","data-v-5bd1dbf9"]]),Bt=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],Tt=["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],St=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],Ct=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],W=(c,e,l)=>{let b=c;return typeof e=="string"||Array.isArray(e)?b=c.toLocaleString(e,l):(e===!0||l!==void 0)&&(b=c.toLocaleString(void 0,l)),b};function F(c,e){if(!Number.isFinite(c))throw new TypeError(`Expected a finite number, got ${typeof c}: ${c}`);e={bits:!1,binary:!1,space:!0,...e};const l=e.bits?e.binary?Ct:St:e.binary?Tt:Bt,b=e.space?" ":"";if(e.signed&&c===0)return` 0${b}${l[0]}`;const p=c<0,B=p?"-":e.signed?"+":"";p&&(c=-c);let h;if(e.minimumFractionDigits!==void 0&&(h={minimumFractionDigits:e.minimumFractionDigits}),e.maximumFractionDigits!==void 0&&(h={maximumFractionDigits:e.maximumFractionDigits,...h}),c<1){const D=W(c,e.locale,h);return B+D+b+l[0]}const w=Math.min(Math.floor(e.binary?Math.log(c)/Math.log(1024):Math.log10(c)/3),l.length-1);c/=(e.binary?1024:1e3)**w,h||(c=c.toPrecision(3));const E=W(Number(c),e.locale,h),T=l[w];return B+E+b+T}const It={class:"title"},Dt={key:0},Kt=G({__name:"ServiceTrafficCard",props:{protocol:{},traffic:{}},setup(c){const{t:e}=J(),l=c,b=p=>{const B=p.target;if(p.isTrusted&&B.nodeName.toLowerCase()!=="a"){const h=B.closest(".service-traffic-card, a");if(h){const w=h.nodeName.toLowerCase()==="a"?h:h.querySelector("a");w!==null&&"click"in w&&typeof w.click=="function"&&w.click()}}};return(p,B)=>{const h=g("KBadge"),w=g("KSkeletonBox");return o(),v(Q,{class:"service-traffic-card",onClick:b},{title:a(()=>[r(h,{appearance:l.protocol==="passthrough"?"success":"info"},{default:a(()=>[t(i(n(e)(`data-planes.components.service_traffic_card.protocol.${l.protocol}`,{},{defaultMessage:n(e)(`http.api.value.${l.protocol}`)})),1)]),_:1},8,["appearance"]),t(),s("div",It,[K(p.$slots,"default",{},void 0,!0)])]),default:a(()=>{var E,T,D,N,P,L,q,U,z;return[t(),l.traffic?(o(),u(f,{key:0},[l.traffic.name.length>0?(o(),u("dl",Dt,[l.protocol==="passthrough"?(o(!0),u(f,{key:0},x([["http","tcp"].reduce((m,V)=>{var k;const y="downstream";return Object.entries(((k=l.traffic)==null?void 0:k[V])||{}).reduce((S,[M,d])=>[`${y}_cx_tx_bytes_total`,`${y}_cx_rx_bytes_total`].includes(M)?{...S,[M]:d+(S[M]??0)}:S,m)},{})],(m,V)=>(o(),u(f,{key:V},[s("div",null,[s("dt",null,i(n(e)("data-planes.components.service_traffic_card.tx")),1),t(),s("dd",null,i(n(F)(m.downstream_cx_rx_bytes_total??0)),1)]),t(),s("div",null,[s("dt",null,i(n(e)("data-planes.components.service_traffic_card.rx")),1),t(),s("dd",null,i(n(F)(m.downstream_cx_tx_bytes_total??0)),1)])],64))),128)):l.protocol==="grpc"?(o(),u(f,{key:1},[s("div",null,[s("dt",null,i(n(e)("data-planes.components.service_traffic_card.grpc_success")),1),t(),s("dd",null,i(n(e)("common.formats.integer",{value:((E=l.traffic.grpc)==null?void 0:E.success)??0})),1)]),t(),s("div",null,[s("dt",null,i(n(e)("data-planes.components.service_traffic_card.grpc_failure")),1),t(),s("dd",null,i(n(e)("common.formats.integer",{value:((T=l.traffic.grpc)==null?void 0:T.failure)??0})),1)])],64)):l.protocol==="http"?(o(),u(f,{key:2},[(o(!0),u(f,null,x([((D=l.traffic.http)==null?void 0:D.downstream_rq_1xx)??0].filter(m=>m!==0),m=>(o(),u("div",{key:m},[s("dt",null,i(n(e)("data-planes.components.service_traffic_card.1xx")),1),t(),s("dd",null,i(n(e)("common.formats.integer",{value:m})),1)]))),128)),t(),s("div",null,[s("dt",null,i(n(e)("data-planes.components.service_traffic_card.2xx")),1),t(),s("dd",null,i(n(e)("common.formats.integer",{value:((N=l.traffic.http)==null?void 0:N.downstream_rq_2xx)??0})),1)]),t(),(o(!0),u(f,null,x([((P=l.traffic.http)==null?void 0:P.downstream_rq_3xx)??0].filter(m=>m!==0),m=>(o(),u("div",{key:m},[s("dt",null,i(n(e)("data-planes.components.service_traffic_card.3xx")),1),t(),s("dd",null,i(n(e)("common.formats.integer",{value:m})),1)]))),128)),t(),s("div",null,[s("dt",null,i(n(e)("data-planes.components.service_traffic_card.4xx")),1),t(),s("dd",null,i(n(e)("common.formats.integer",{value:((L=l.traffic.http)==null?void 0:L.downstream_rq_4xx)??0})),1)]),t(),s("div",null,[s("dt",null,i(n(e)("data-planes.components.service_traffic_card.5xx")),1),t(),s("dd",null,i(n(e)("common.formats.integer",{value:((q=l.traffic.http)==null?void 0:q.downstream_rq_5xx)??0})),1)])],64)):(o(),u(f,{key:3},[s("div",null,[s("dt",null,i(n(e)("data-planes.components.service_traffic_card.tx")),1),t(),s("dd",null,i(n(F)(((U=l.traffic.tcp)==null?void 0:U.downstream_cx_rx_bytes_total)??0)),1)]),t(),s("div",null,[s("dt",null,i(n(e)("data-planes.components.service_traffic_card.rx")),1),t(),s("dd",null,i(n(F)(((z=l.traffic.tcp)==null?void 0:z.downstream_cx_tx_bytes_total)??0)),1)])],64))])):I("",!0)],64)):(o(),v(w,{key:1,width:"10"}))]}),_:3})}}}),O=R(Kt,[["__scopeId","data-v-c99fad9b"]]),Et={class:"body"},Nt=G({__name:"ServiceTrafficGroup",props:{type:{}},setup(c){const e=c;return(l,b)=>{const p=g("KCard");return o(),v(p,{class:et(["service-traffic-group",`type-${e.type}`])},{default:a(()=>[s("div",Et,[K(l.$slots,"default",{},void 0,!0)])]),_:3},8,["class"])}}}),Y=R(Nt,[["__scopeId","data-v-baf4abf7"]]),Vt=c=>(ct("data-v-5a7bf611"),c=c(),ut(),c),Mt={"data-testid":"dataplane-warnings"},Rt=["data-testid","innerHTML"],Pt={key:0,"data-testid":"warning-stats-loading"},Lt={class:"stack","data-testid":"dataplane-details"},qt={class:"columns"},Ut={class:"status-with-reason"},zt={class:"columns"},At=Vt(()=>s("span",null,"Outbounds",-1)),Ft={"data-testid":"dataplane-mtls"},Gt={class:"columns"},Ot=["innerHTML"],Yt={key:1,"data-testid":"dataplane-subscriptions"},Zt=G({__name:"DataPlaneDetailView",props:{data:{}},setup(c){const{t:e,formatIsoDate:l}=J(),b=at(),p=c,B=nt(()=>p.data.warnings.concat(...p.data.isCertExpired?[{kind:"CERT_EXPIRED"}]:[]));return(h,w)=>{const E=g("KTooltip"),T=g("KCard"),D=g("RouterLink"),N=g("DataCollection"),P=g("KInputSwitch"),L=g("KButton"),q=g("RouterView"),U=g("KAlert"),z=g("AppView"),m=g("DataSource"),V=g("RouteView");return o(),v(V,{params:{mesh:"",dataPlane:"",inactive:!1},name:"data-plane-detail-view"},{default:a(({route:y})=>[r(m,{src:p.data.dataplaneType==="standard"?`/meshes/${y.params.mesh}/dataplanes/${y.params.dataPlane}/stats`:""},{default:a(({data:k,error:S,refresh:M})=>[r(z,null,H({default:a(()=>[t(),s("div",Lt,[r(T,null,{default:a(()=>[s("div",qt,[r(C,null,{title:a(()=>[t(i(n(e)("http.api.property.status")),1)]),body:a(()=>[s("div",Ut,[r(_t,{status:p.data.status},null,8,["status"]),t(),(o(!0),u(f,null,x([p.data.dataplane.networking.inbounds.filter(d=>!d.health.ready)],d=>(o(),u(f,{key:d},[d.length>0?(o(),v(E,{key:0,class:"reason-tooltip","position-fixed":""},{content:a(()=>[s("ul",null,[(o(!0),u(f,null,x(d,_=>(o(),u("li",{key:`${_.service}:${_.port}`},i(n(e)("data-planes.routes.item.unhealthy_inbound",{service:_.service,port:_.port})),1))),128))])]),default:a(()=>[r(n(st),{color:n(tt),size:n(A),"hide-title":""},null,8,["color","size"]),t()]),_:2},1024)):I("",!0)],64))),128))])]),_:1}),t(),r(C,null,{title:a(()=>[t(i(n(e)("data-planes.routes.item.last_updated")),1)]),body:a(()=>[t(i(n(l)(p.data.modificationTime)),1)]),_:1}),t(),p.data.dataplane.networking.gateway?(o(),u(f,{key:0},[r(C,null,{title:a(()=>[t(i(n(e)("http.api.property.tags")),1)]),body:a(()=>[r(X,{tags:p.data.dataplane.networking.gateway.tags},null,8,["tags"])]),_:1}),t(),r(C,null,{title:a(()=>[t(i(n(e)("http.api.property.address")),1)]),body:a(()=>[r(mt,{text:`${p.data.dataplane.networking.address}`},null,8,["text"])]),_:1})],64)):I("",!0)])]),_:1}),t(),p.data.dataplaneType==="standard"?(o(),v(T,{key:0,class:"traffic","data-testid":"dataplane-traffic"},{default:a(()=>[s("div",zt,[r(j,null,{title:a(()=>[r(n(ot),{display:"inline-block",decorative:"",size:n(A)},null,8,["size"]),t(`
                  Inbounds
                `)]),default:a(()=>[t(),r(Y,{type:"inbound"},{default:a(()=>[r(N,{items:p.data.dataplane.networking.inbounds},{default:a(({items:d})=>[(o(!0),u(f,null,x(d,_=>(o(),u(f,{key:`${_.port}`},[(o(!0),u(f,null,x([(k||{inbounds:[]}).inbounds.find($=>`${$.port}`==`${_.port}`)],$=>(o(),v(O,{key:$,protocol:_.protocol,traffic:typeof S>"u"?$:{name:"",protocol:_.protocol,port:`${_.port}`}},{default:a(()=>[r(D,{to:{name:(Z=>Z.includes("bound")?Z.replace("-outbound-","-inbound-"):"data-plane-inbound-summary-overview-view")(String(n(b).name)),params:{service:_.port},query:{inactive:y.params.inactive?null:void 0}}},{default:a(()=>[t(`
                            :`+i(_.port),1)]),_:2},1032,["to"]),t(),r(X,{tags:[{label:"kuma.io/service",value:_.tags["kuma.io/service"]}]},null,8,["tags"])]),_:2},1032,["protocol","traffic"]))),128))],64))),128))]),_:2},1032,["items"])]),_:2},1024)]),_:2},1024),t(),r(j,null,H({title:a(()=>[r(n(it),{display:"inline-block",decorative:"",size:n(A)},null,8,["size"]),t(),At]),default:a(()=>[t(),t(),typeof S>"u"?(o(),u(f,{key:0},[typeof k>"u"?(o(),v(pt,{key:0})):(o(),u(f,{key:1},[r(Y,{type:"passthrough"},{default:a(()=>[r(O,{protocol:"passthrough",traffic:k.passthrough},{default:a(()=>[t(`
                        Non mesh traffic
                      `)]),_:2},1032,["traffic"])]),_:2},1024),t(),r(N,{predicate:y.params.inactive?void 0:d=>{var _,$;return((d.protocol==="tcp"?(_=d.tcp)==null?void 0:_.downstream_cx_rx_bytes_total:($=d.http)==null?void 0:$.downstream_rq_total)??0)>0},items:k.outbounds},{default:a(({items:d})=>[d.length>0?(o(),v(Y,{key:0,type:"outbound","data-testid":"dataplane-outbounds"},{default:a(()=>[(o(!0),u(f,null,x(d,_=>(o(),v(O,{key:`${_.name}`,protocol:_.protocol,traffic:_},{default:a(()=>[r(D,{to:{name:($=>$.includes("bound")?$.replace("-inbound-","-outbound-"):"data-plane-outbound-summary-overview-view")(String(n(b).name)),params:{service:_.name},query:{inactive:y.params.inactive?null:void 0}}},{default:a(()=>[t(i(_.name),1)]),_:2},1032,["to"])]),_:2},1032,["protocol","traffic"]))),128))]),_:2},1024)):I("",!0)]),_:2},1032,["predicate","items"])],64))],64)):(o(),v(lt,{key:1}))]),_:2},[k?{name:"actions",fn:a(()=>[r(P,{modelValue:y.params.inactive,"onUpdate:modelValue":d=>y.params.inactive=d,"data-testid":"dataplane-outbounds-inactive-toggle"},{label:a(()=>[t(`
                      Show inactive
                    `)]),_:2},1032,["modelValue","onUpdate:modelValue"]),t(),r(L,{appearance:"primary",onClick:M},{default:a(()=>[r(n(rt),{size:n(A)},null,8,["size"]),t(`

                    Refresh
                  `)]),_:2},1032,["onClick"])]),key:"0"}:void 0]),1024)])]),_:2},1024)):I("",!0),t(),r(q,null,{default:a(d=>[d.route.name!==y.name?(o(),v(ft,{key:0,width:"670px",onClose:function(_){y.replace({name:"data-plane-detail-view",params:{mesh:y.params.mesh,dataPlane:y.params.dataPlane},query:{inactive:y.params.inactive?null:void 0}})}},{default:a(()=>[(o(),v(dt(d.Component),{data:String(d.route.name).includes("-inbound-")?p.data.dataplane.networking.inbounds||[]:(k==null?void 0:k.outbounds)||[]},null,8,["data"]))]),_:2},1032,["onClose"])):I("",!0)]),_:2},1024),t(),s("div",Ft,[s("h2",null,i(n(e)("data-planes.routes.item.mtls.title")),1),t(),p.data.dataplaneInsight.mTLS?(o(!0),u(f,{key:0},x([p.data.dataplaneInsight.mTLS],d=>(o(),v(T,{key:d,class:"mt-4"},{default:a(()=>[s("div",Gt,[r(C,null,{title:a(()=>[t(i(n(e)("data-planes.routes.item.mtls.expiration_time.title")),1)]),body:a(()=>[t(i(n(l)(d.certificateExpirationTime)),1)]),_:2},1024),t(),r(C,null,{title:a(()=>[t(i(n(e)("data-planes.routes.item.mtls.generation_time.title")),1)]),body:a(()=>[t(i(n(l)(d.lastCertificateRegeneration)),1)]),_:2},1024),t(),r(C,null,{title:a(()=>[t(i(n(e)("data-planes.routes.item.mtls.regenerations.title")),1)]),body:a(()=>[t(i(n(e)("common.formats.integer",{value:d.certificateRegenerations})),1)]),_:2},1024),t(),r(C,null,{title:a(()=>[t(i(n(e)("data-planes.routes.item.mtls.issued_backend.title")),1)]),body:a(()=>[t(i(d.issuedBackend),1)]),_:2},1024),t(),r(C,null,{title:a(()=>[t(i(n(e)("data-planes.routes.item.mtls.supported_backends.title")),1)]),body:a(()=>[s("ul",null,[(o(!0),u(f,null,x(d.supportedBackends,_=>(o(),u("li",{key:_},i(_),1))),128))])]),_:2},1024)])]),_:2},1024))),128)):(o(),v(U,{key:1,class:"mt-4",appearance:"warning"},{alertMessage:a(()=>[s("div",{innerHTML:n(e)("data-planes.routes.item.mtls.disabled")},null,8,Ot)]),_:1}))]),t(),p.data.dataplaneInsight.subscriptions.length>0?(o(),u("div",Yt,[s("h2",null,i(n(e)("data-planes.routes.item.subscriptions.title")),1),t(),r(T,{class:"mt-4"},{default:a(()=>[r(vt,{subscriptions:p.data.dataplaneInsight.subscriptions},null,8,["subscriptions"])]),_:1})])):I("",!0)])]),_:2},[B.value.length>0||S?{name:"notifications",fn:a(()=>[s("ul",Mt,[(o(!0),u(f,null,x(B.value,d=>(o(),u("li",{key:d.kind,"data-testid":`warning-${d.kind}`,innerHTML:n(e)(`common.warnings.${d.kind}`,d.payload)},null,8,Rt))),128)),t(),S?(o(),u("li",Pt,[t(`
              The below view is not enhanced with runtime stats (Error loading stats: `),s("strong",null,i(S.toString()),1),t(`)
            `)])):I("",!0)])]),key:"0"}:void 0]),1024)]),_:2},1032,["src"])]),_:1})}}}),se=R(Zt,[["__scopeId","data-v-5a7bf611"]]);export{se as default};
