import{d as Q,O as W,D as B,r as p,o,m as z,w as e,b as s,k as V,e as a,l as I,z as H,P as J,c as u,F as f,Q as M,t as c,p as C,A as U,R as Y,s as b,T,S as ee,E as ne,q as te}from"./index-BRBWbknO.js";import{_ as oe}from"./DeleteResourceModal.vue_vue_type_script_setup_true_lang-B2xW3XmI.js";import{S as se}from"./SummaryView-CK1e_JHQ.js";const ae=["data-testid"],le=Q({__name:"ZoneListView",setup(ie){const R=W(),X=B({}),D=B({}),Z=k=>{const v="zoneIngress";X.value=k.items.reduce((d,r)=>{var g;const _=(g=r[v])==null?void 0:g.zone;if(typeof _<"u"){typeof d[_]>"u"&&(d[_]={online:[],offline:[]});const w=typeof r[`${v}Insight`].connectedSubscription<"u"?"online":"offline";d[_][w].push(r)}return d},{})},E=k=>{const v="zoneEgress";D.value=k.items.reduce((d,r)=>{var g;const _=(g=r[v])==null?void 0:g.zone;if(typeof _<"u"){typeof d[_]>"u"&&(d[_]={online:[],offline:[]});const w=typeof r[`${v}Insight`].connectedSubscription<"u"?"online":"offline";d[_][w].push(r)}return d},{})};async function K(k){await R.deleteZone({name:k})}return(k,v)=>{const d=p("RouteTitle"),r=p("DataSource"),_=p("KButton"),g=p("XTeleportTemplate"),w=p("XIcon"),S=p("XAction"),L=p("XDisclosure"),N=p("XActionGroup"),q=p("KCard"),G=p("RouterView"),F=p("AppView"),O=p("RouteView");return o(),z(r,{src:"/me"},{default:e(({data:$})=>[$?(o(),z(O,{key:0,name:"zone-cp-list-view",params:{page:1,size:$.pageSize,zone:""}},{default:e(({route:i,t:l,can:h,uri:P})=>[s(F,null,{title:e(()=>[V("h1",null,[s(d,{title:l("zone-cps.routes.items.title")},null,8,["title"])])]),default:e(()=>[a(),s(r,{src:P(I(H),"/zone-cps",{},{page:i.params.page,size:i.params.size})},{default:e(({data:m,error:x,refresh:j})=>[s(r,{src:"/zone-ingress-overviews?page=1&size=100",onChange:Z}),a(),s(r,{src:"/zone-egress-overviews?page=1&size=100",onChange:E}),a(),s(q,null,{default:e(()=>[x!==void 0?(o(),z(J,{key:0,error:x},null,8,["error"])):(o(),u(f,{key:1},[h("create zones")&&((m==null?void 0:m.items)??[]).length>0?(o(),z(g,{key:0,to:{name:"zone-cp-list-view-actions"}},{default:e(()=>[s(_,{appearance:"primary",to:{name:"zone-create-view"},"data-testid":"create-zone-link"},{default:e(()=>[s(I(M)),a(" "+c(l("zones.index.create")),1)]),_:2},1024)]),_:2},1024)):C("",!0),a(),s(U,{class:"zone-cp-collection","data-testid":"zone-cp-collection",headers:[{label:" ",key:"type"},{label:"Name",key:"name"},{label:"Zone CP Version",key:"zoneCpVersion"},{label:"Ingresses (online / total)",key:"ingress"},{label:"Egresses (online / total)",key:"egress"},{label:"Status",key:"state"},{label:"Warnings",key:"warnings",hideLabel:!0},{label:"Actions",key:"actions",hideLabel:!0}],"page-number":i.params.page,"page-size":i.params.size,total:m==null?void 0:m.total,items:m==null?void 0:m.items,error:x,"empty-state-title":h("create zones")?l("zone-cps.empty_state.title"):void 0,"empty-state-message":h("create zones")?l("zone-cps.empty_state.message"):void 0,"empty-state-cta-to":h("create zones")?{name:"zone-create-view"}:void 0,"empty-state-cta-text":h("create zones")?l("zones.index.create"):void 0,"is-selected-row":n=>n.name===i.params.zone,onChange:i.update},Y({type:e(({row:n})=>[(o(!0),u(f,null,b([["kubernetes","universal"].find(t=>t===n.zoneInsight.environment)??"kubernetes"],t=>(o(),z(w,{key:t,name:t},{default:e(()=>[a(c(l(`common.product.environment.${t}`)),1)]),_:2},1032,["name"]))),128))]),name:e(({row:n})=>[s(S,{"data-action":"",to:{name:"zone-cp-detail-view",params:{zone:n.name},query:{page:i.params.page,size:i.params.size}}},{default:e(()=>[a(c(n.name),1)]),_:2},1032,["to"])]),zoneCpVersion:e(({row:n})=>[a(c(I(T)(n.zoneInsight,"version.kumaCp.version",l("common.collection.none"))),1)]),ingress:e(({row:n})=>[(o(!0),u(f,null,b([X.value[n.name]||{online:[],offline:[]}],t=>(o(),u(f,null,[a(c(t.online.length)+" / "+c(t.online.length+t.offline.length),1)],64))),256))]),egress:e(({row:n})=>[(o(!0),u(f,null,b([D.value[n.name]||{online:[],offline:[]}],t=>(o(),u(f,null,[a(c(t.online.length)+" / "+c(t.online.length+t.offline.length),1)],64))),256))]),state:e(({row:n})=>[s(ee,{status:n.state},null,8,["status"])]),warnings:e(({row:n})=>[(o(!0),u(f,null,b([{version_mismatch:!I(T)(n.zoneInsight,"version.kumaCp.kumaCpGlobalCompatible","true"),store_memory:n.zoneInsight.store==="memory"}],t=>(o(),u(f,{key:`${t.version_mismatch}-${t.store_memory}`},[Object.values(t).some(y=>y)?(o(),z(w,{key:0,name:"warning","data-testid":"warning"},{default:e(()=>[V("ul",null,[(o(!0),u(f,null,b(t,(y,A)=>(o(),u(f,{key:A},[y?(o(),u("li",{key:0,"data-testid":`warning-${A}`},c(l(`zone-cps.list.${A}`)),9,ae)):C("",!0)],64))),128))])]),_:2},1024)):(o(),u(f,{key:1},[a(c(l("common.collection.none")),1)],64))],64))),128))]),_:2},[h("create zones")?{name:"actions",fn:e(({row:n})=>[s(N,null,{default:e(()=>[s(L,null,{default:e(({expanded:t,toggle:y})=>[s(S,{to:{name:"zone-cp-detail-view",params:{zone:n.name}}},{default:e(()=>[a(c(l("common.collection.actions.view")),1)]),_:2},1032,["to"]),a(),s(S,{appearance:"danger",onClick:y},{default:e(()=>[a(c(l("common.collection.actions.delete")),1)]),_:2},1032,["onClick"]),a(),s(g,{to:{name:"modal-layer"}},{default:e(()=>[t?(o(),z(oe,{key:0,"confirmation-text":n.name,"delete-function":()=>K(n.name),"is-visible":"","action-button-text":l("common.delete_modal.proceed_button"),title:l("common.delete_modal.title",{type:"Zone"}),"data-testid":"delete-zone-modal",onCancel:y,onDelete:()=>{y(),j()}},{default:e(()=>[V("p",null,c(l("common.delete_modal.text1",{type:"Zone",name:n.name})),1),a(),V("p",null,c(l("common.delete_modal.text2")),1)]),_:2},1032,["confirmation-text","delete-function","action-button-text","title","onCancel","onDelete"])):C("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),key:"0"}:void 0]),1032,["page-number","page-size","total","items","error","empty-state-title","empty-state-message","empty-state-cta-to","empty-state-cta-text","is-selected-row","onChange"])],64))]),_:2},1024),a(),i.params.zone?(o(),z(G,{key:0},{default:e(n=>[s(se,{onClose:t=>i.replace({name:"zone-cp-list-view",query:{page:i.params.page,size:i.params.size}})},{default:e(()=>[(o(),z(ne(n.Component),{name:i.params.zone,"zone-overview":m==null?void 0:m.items.find(t=>t.name===i.params.zone)},null,8,["name","zone-overview"]))]),_:2},1032,["onClose"])]),_:2},1024)):C("",!0)]),_:2},1032,["src"])]),_:2},1024)]),_:2},1032,["params"])):C("",!0)]),_:1})}}}),pe=te(le,[["__scopeId","data-v-74349603"]]);export{pe as default};