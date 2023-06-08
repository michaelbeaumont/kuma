import{d as V,q as $,r as n,s as I,R as B,o as i,c as k,w as x,a as l,u,b as N,e as T,f as D,J as E,g as L}from"./index-271b6183.js";import{_ as O}from"./MultizoneInfo.vue_vue_type_script_setup_true_lang-c0bb0111.js";import{_ as q}from"./ZoneIngressDetails.vue_vue_type_script_setup_true_lang-c63f71f5.js";import{u as C,g as M,b as P,f as R,e as F}from"./RouteView.vue_vue_type_script_setup_true_lang-fadf0571.js";import{_ as Q}from"./RouteTitle.vue_vue_type_script_setup_true_lang-1f8fd421.js";import{D as U}from"./DataOverview-d4799d67.js";import{Q as g}from"./QueryParameter-70743f73.js";import"./kongponents.es-dc880404.js";import"./AccordionList-83855548.js";import"./DefinitionListItem-cf681f64.js";import"./EnvoyData-dea8be3c.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-ac8fa1e9.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-85609c66.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-9d9f8054.js";import"./ErrorBlock-2e363ab2.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-c91f8087.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-380d7b6e.js";import"./TabsWidget-e239164d.js";import"./TextWithCopyButton-3ab4305e.js";import"./TagList-5e49a7a3.js";import"./StatusBadge-2721d158.js";const G={class:"zoneingresses"},J={key:1,class:"kcard-stack"},K={class:"kcard-border"},Y={key:0,class:"kcard-border"},_e=V({__name:"ZoneIngressListView",props:{selectedZoneIngressName:{type:[String,null],required:!1,default:null},offset:{type:Number,required:!1,default:0}},setup(S){const c=S,v=C(),{t:_}=M(),A={title:"No Data",message:"There are no Zone Ingresses present."},y=$(),b=P(),m=n(!0),d=n(null),o=n({headers:[{label:"Status",key:"status"},{label:"Name",key:"entity"}],data:[]}),r=n(null),w=n(null),h=n(c.offset);I(()=>y.params.mesh,function(){y.name==="zone-ingress-list-view"&&f(0)}),I(()=>b.getters["config/getMulticlusterStatus"],function(e){e&&f(c.offset)},{immediate:!0});async function f(e){var s;h.value=e,g.set("offset",e>0?e:null),m.value=!0,d.value=null;const t=E;try{const{items:a,next:p}=await v.getAllZoneIngressOverviews({size:t,offset:e});w.value=p,o.value.data=Z(a??[]),await z({name:c.selectedZoneIngressName??((s=o.value.data[0])==null?void 0:s.entity.name)})}catch(a){o.value.data=[],r.value=null,a instanceof Error?d.value=a:console.error(a)}finally{m.value=!1}}function Z(e){return e.map(t=>{const{name:s}=t,a={name:"zone-ingress-detail-view",params:{zoneIngress:s}},p=B(t.zoneIngressInsight??{});return{entity:t,detailViewRoute:a,status:p}})}async function z({name:e}){if(e===void 0){r.value=null,g.set("zoneIngress",null);return}try{r.value=await v.getZoneIngressOverview({name:e}),g.set("zoneIngress",e)}catch(t){console.error(t)}}return(e,t)=>(i(),k(F,null,{default:x(()=>[l(Q,{title:u(_)("zone-ingresses.routes.items.title")},null,8,["title"]),N(),l(R,{breadcrumbs:[{to:{name:"zone-ingress-list-view"},text:u(_)("zone-ingresses.routes.items.breadcrumbs")}]},{default:x(()=>{var s;return[T("div",G,[u(b).getters["config/getMulticlusterStatus"]===!1?(i(),k(O,{key:0})):(i(),D("div",J,[T("div",K,[l(U,{"selected-entity-name":(s=r.value)==null?void 0:s.name,"page-size":u(E),"is-loading":m.value,error:d.value,"empty-state":A,"table-data":o.value,"table-data-is-empty":o.value.data.length===0,next:w.value,"page-offset":h.value,onTableAction:z,onLoadData:f},null,8,["selected-entity-name","page-size","is-loading","error","table-data","table-data-is-empty","next","page-offset"])]),N(),r.value!==null?(i(),D("div",Y,[l(q,{"zone-ingress-overview":r.value},null,8,["zone-ingress-overview"])])):L("",!0)]))])]}),_:1},8,["breadcrumbs"])]),_:1}))}});export{_e as default};
