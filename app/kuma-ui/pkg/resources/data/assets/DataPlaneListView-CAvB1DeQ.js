import{d as E,a as m,o as s,b as p,w as a,e as i,m as z,f as n,a1 as L,p as f,a2 as N,q as u,t as l,c as r,F as y,C as P,T as $,M as R,K as T,N as q,B as A,_ as F}from"./index-C4D0ozC7.js";import{A as O}from"./AppCollection-LpJvZ2cT.js";import{F as Z}from"./FilterBar-BebVFeZ8.js";import{S as U}from"./StatusBadge-B9vwANot.js";import{S as W}from"./SummaryView-Ckl84CHc.js";const X={key:0},j={key:1},M=E({__name:"DataPlaneListView",setup(G){return(H,J)=>{const C=m("RouteTitle"),k=m("XIcon"),w=m("KSelect"),_=m("RouterLink"),S=m("KTruncate"),x=m("KTooltip"),V=m("RouterView"),I=m("KCard"),K=m("AppView"),h=m("DataSource"),B=m("RouteView");return s(),p(h,{src:"/me"},{default:a(({data:b})=>[b?(s(),p(B,{key:0,name:"data-plane-list-view",params:{page:1,size:b.pageSize,dataplaneType:"all",s:"",mesh:"",dataPlane:""}},{default:a(({can:v,route:t,t:o})=>[i(h,{src:`/meshes/${t.params.mesh}/dataplanes/of/${t.params.dataplaneType}?page=${t.params.page}&size=${t.params.size}&search=${t.params.s}`},{default:a(({data:d,error:g})=>[i(K,null,{title:a(()=>[z("h2",null,[i(C,{title:o("data-planes.routes.items.title")},null,8,["title"])])]),default:a(()=>[n(),i(I,null,{default:a(()=>[g!==void 0?(s(),p(L,{key:0,error:g},null,8,["error"])):(s(),p(O,{key:1,class:"data-plane-collection","data-testid":"data-plane-collection","page-number":t.params.page,"page-size":t.params.size,headers:[{label:" ",key:"type"},{label:"Name",key:"name"},{label:"Namespace",key:"namespace"},...v("use zones")?[{label:"Zone",key:"zone"}]:[],{label:"Services",key:"services"},{label:"Certificate Info",key:"certificate"},{label:"Status",key:"status"},{label:"Warnings",key:"warnings",hideLabel:!0},{label:"Details",key:"details",hideLabel:!0}],items:d==null?void 0:d.items,total:d==null?void 0:d.total,error:g,"is-selected-row":e=>e.name===t.params.dataPlane,"summary-route-name":"service-data-plane-summary-view","empty-state-message":o("common.emptyState.message",{type:"Data Plane Proxies"}),"empty-state-cta-to":o("data-planes.href.docs.data_plane_proxy"),"empty-state-cta-text":o("common.documentation"),onChange:t.update},{toolbar:a(()=>[i(Z,{class:"data-plane-proxy-filter",placeholder:"service:backend",query:t.params.s,fields:{name:{description:"filter by name or parts of a name"},protocol:{description:"filter by “kuma.io/protocol” value"},service:{description:"filter by “kuma.io/service” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},...v("use zones")&&{zone:{description:"filter by “kuma.io/zone” value"}}},onChange:e=>t.update({...Object.fromEntries(e.entries())})},null,8,["query","fields","onChange"]),n(),i(w,{class:"filter-select",label:"Type",items:["all","standard","builtin","delegated"].map(e=>({value:e,label:o(`data-planes.type.${e}`),selected:e===t.params.dataplaneType})),onSelected:e=>t.update({dataplaneType:String(e.value)})},{"selected-item-template":a(({item:e})=>[e&&e.value!=="all"?(s(),p(k,{key:0,size:f(N),name:e.value},null,8,["size","name"])):u("",!0),n(" "+l(e==null?void 0:e.label),1)]),"item-template":a(({item:e})=>[e.value!=="all"?(s(),p(k,{key:0,name:e.value},null,8,["name"])):u("",!0),n(" "+l(e.label),1)]),_:2},1032,["items","onSelected"])]),type:a(({row:e})=>[i(k,{name:e.dataplaneType},{default:a(()=>[n(l(o(`data-planes.type.${e.dataplaneType}`)),1)]),_:2},1032,["name"])]),name:a(({row:e})=>[i(_,{"data-action":"",class:"name-link",title:e.name,to:{name:"data-plane-summary-view",params:{mesh:e.mesh,dataPlane:e.id},query:{page:t.params.page,size:t.params.size,s:t.params.s,dataplaneType:t.params.dataplaneType}}},{default:a(()=>[n(l(e.name),1)]),_:2},1032,["title","to"])]),namespace:a(({row:e})=>[n(l(e.namespace),1)]),services:a(({row:e})=>[e.services.length>0?(s(),p(S,{key:0,width:"auto"},{default:a(()=>[(s(!0),r(y,null,P(e.services,(c,D)=>(s(),r("div",{key:D},[i($,{text:c},{default:a(()=>[e.dataplaneType==="standard"?(s(),p(_,{key:0,to:{name:"service-detail-view",params:{service:c}}},{default:a(()=>[n(l(c),1)]),_:2},1032,["to"])):e.dataplaneType==="delegated"?(s(),p(_,{key:1,to:{name:"delegated-gateway-detail-view",params:{service:c}}},{default:a(()=>[n(l(c),1)]),_:2},1032,["to"])):(s(),r(y,{key:2},[n(l(c),1)],64))]),_:2},1032,["text"])]))),128))]),_:2},1024)):(s(),r(y,{key:1},[n(l(o("common.collection.none")),1)],64))]),zone:a(({row:e})=>[e.zone?(s(),p(_,{key:0,to:{name:"zone-cp-detail-view",params:{zone:e.zone}}},{default:a(()=>[n(l(e.zone),1)]),_:2},1032,["to"])):(s(),r(y,{key:1},[n(l(o("common.collection.none")),1)],64))]),certificate:a(({row:e})=>{var c;return[(c=e.dataplaneInsight.mTLS)!=null&&c.certificateExpirationTime?(s(),r(y,{key:0},[n(l(o("common.formats.datetime",{value:Date.parse(e.dataplaneInsight.mTLS.certificateExpirationTime)})),1)],64)):(s(),r(y,{key:1},[n(l(o("data-planes.components.data-plane-list.certificate.none")),1)],64))]}),status:a(({row:e})=>[i(U,{status:e.status},null,8,["status"])]),warnings:a(({row:e})=>[e.isCertExpired||e.warnings.length>0?(s(),p(x,{key:0},{content:a(()=>[z("ul",null,[e.warnings.length>0?(s(),r("li",X,l(o("data-planes.components.data-plane-list.version_mismatch")),1)):u("",!0),n(),e.isCertExpired?(s(),r("li",j,l(o("data-planes.components.data-plane-list.cert_expired")),1)):u("",!0)])]),default:a(()=>[n(),i(R,{class:"mr-1",size:f(T)},null,8,["size"])]),_:2},1024)):(s(),r(y,{key:1},[n(l(o("common.collection.none")),1)],64))]),details:a(({row:e})=>[i(_,{class:"details-link","data-testid":"details-link",to:{name:"data-plane-detail-view",params:{dataPlane:e.id}}},{default:a(()=>[n(l(o("common.collection.details_link"))+" ",1),i(f(q),{decorative:"",size:f(T)},null,8,["size"])]),_:2},1032,["to"])]),_:2},1032,["page-number","page-size","headers","items","total","error","is-selected-row","empty-state-message","empty-state-cta-to","empty-state-cta-text","onChange"])),n(),t.params.dataPlane?(s(),p(V,{key:2},{default:a(e=>[i(W,{onClose:c=>t.replace({name:t.name,params:{mesh:t.params.mesh},query:{page:t.params.page,size:t.params.size,s:t.params.s}})},{default:a(()=>[typeof d<"u"?(s(),p(A(e.Component),{key:0,items:d.items},null,8,["items"])):u("",!0)]),_:2},1032,["onClose"])]),_:2},1024)):u("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1032,["src"])]),_:2},1032,["params"])):u("",!0)]),_:1})}}}),se=F(M,[["__scopeId","data-v-9389d344"]]);export{se as default};