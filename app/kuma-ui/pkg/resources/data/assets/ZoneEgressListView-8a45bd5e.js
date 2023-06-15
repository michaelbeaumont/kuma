import{d as A,u as Z,s as o,w as V,O as I,o as w,a as O,b as z,i as l,e as p,h as k,l as f,P as x,f as S,g as B}from"./index-4a228570.js";import{_ as L}from"./ZoneEgressDetails.vue_vue_type_script_setup_true_lang-5b64ac5d.js";import{j as P,k as $,g as C,_ as q}from"./RouteView.vue_vue_type_script_setup_true_lang-108544bb.js";import{_ as F}from"./RouteTitle.vue_vue_type_script_setup_true_lang-f200205b.js";import{D as Q}from"./DataOverview-a199cff9.js";import{Q as v}from"./QueryParameter-70743f73.js";import"./DefinitionListItem-65d46c98.js";import"./EnvoyData-6995e7af.js";import"./kongponents.es-bba755ec.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-6ae11014.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-5627329c.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-7dc37402.js";import"./ErrorBlock-218205b0.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-69072399.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-92a9edf2.js";import"./TabsWidget-5a5519cc.js";import"./TextWithCopyButton-851c19a9.js";import"./TagList-c907bf5d.js";import"./StatusBadge-83ed8682.js";const R={class:"zoneegresses"},U={class:"kcard-stack"},j={class:"kcard-border"},G={key:0,class:"kcard-border"},de=A({__name:"ZoneEgressListView",props:{selectedZoneEgressName:{type:[String,null],required:!1,default:null},offset:{type:Number,required:!1,default:0}},setup(N){const i=N,g=P(),{t:_}=$(),T={title:"No Data",message:"There are no Zone Egresses present."},b=Z(),u=o(!0),c=o(null),n=o({headers:[{label:"Status",key:"status"},{label:"Name",key:"entity"}],data:[]}),r=o(null),y=o(null),E=o(i.offset);V(()=>b.params.mesh,function(){b.name==="zone-egress-list-view"&&m(0)}),m(i.offset);async function m(e){var a;E.value=e,v.set("offset",e>0?e:null),u.value=!0,c.value=null;const t=x;try{const{items:s,next:d}=await g.getAllZoneEgressOverviews({size:t,offset:e});y.value=d,n.value.data=D(s??[]),await h({name:i.selectedZoneEgressName??((a=n.value.data[0])==null?void 0:a.entity.name)})}catch(s){n.value.data=[],r.value=null,s instanceof Error?c.value=s:console.error(s)}finally{u.value=!1}}function D(e){return e.map(t=>{const{name:a}=t,s={name:"zone-egress-detail-view",params:{zoneEgress:a}},d=I(t.zoneEgressInsight??{});return{entity:t,detailViewRoute:s,status:d}})}async function h({name:e}){if(e===void 0){r.value=null,v.set("zoneEgress",null);return}try{r.value=await g.getZoneEgressOverview({name:e}),v.set("zoneEgress",e)}catch(t){console.error(t)}}return(e,t)=>(w(),O(q,null,{default:z(()=>[l(F,{title:p(_)("zone-egresses.routes.items.title")},null,8,["title"]),k(),l(C,{breadcrumbs:[{to:{name:"zone-egress-list-view"},text:p(_)("zone-egresses.routes.items.breadcrumbs")}]},{default:z(()=>{var a;return[f("div",R,[f("div",U,[f("div",j,[l(Q,{"selected-entity-name":(a=r.value)==null?void 0:a.name,"page-size":p(x),"is-loading":u.value,error:c.value,"empty-state":T,"table-data":n.value,"table-data-is-empty":n.value.data.length===0,next:y.value,"page-offset":E.value,onTableAction:h,onLoadData:m},null,8,["selected-entity-name","page-size","is-loading","error","table-data","table-data-is-empty","next","page-offset"])]),k(),r.value!==null?(w(),S("div",G,[l(L,{"zone-egress-overview":r.value},null,8,["zone-egress-overview"])])):B("",!0)])])]}),_:1},8,["breadcrumbs"])]),_:1}))}});export{de as default};