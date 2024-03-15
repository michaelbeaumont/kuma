import{d as P,u as V,s as r,c as A,w as I,P as S,o as b,a as k,b as w,i as c,e as G,h as N}from"./index-3e91d6ff.js";import{D as O}from"./DataPlaneList-c00650aa.js";import{j as q,k as B,g as R,_ as $}from"./RouteView.vue_vue_type_script_setup_true_lang-4f1e634f.js";import{_ as z}from"./RouteTitle.vue_vue_type_script_setup_true_lang-c8f5e134.js";import{Q as f}from"./QueryParameter-70743f73.js";import"./kongponents.es-605260c0.js";import"./ContentWrapper-ae5c5230.js";import"./DataOverview-7f440d3d.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-e60ab842.js";import"./ErrorBlock-c00a9be3.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-f54a5cba.js";import"./TagList-337d8082.js";import"./StatusBadge-456f7f13.js";import"./DefinitionListItem-dd7f1ed7.js";import"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-ad3fe3ac.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-136398d6.js";import"./TextWithCopyButton-6362ddfe.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-5d8c7c2f.js";import"./toYaml-4e00099e.js";const oe=P({__name:"DataPlaneListView",props:{selectedDppName:{type:String,required:!1,default:null},gatewayType:{type:String,required:!1,default:"true"},offset:{type:Number,required:!1,default:0},isGatewayView:{type:Boolean,required:!1,default:!1}},setup(v){const a=v,g=q(),{t:_}=B(),D={name:{description:"filter by name or parts of a name"},service:{description:"filter by “kuma.io/service” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},zone:{description:"filter by “kuma.io/zone” value"}},E={protocol:{description:"filter by “kuma.io/protocol” value"}},F={},i=V(),o=r([]),n=r(!0),d=r(null),p=r(null),y=r(a.offset),L=A(()=>({...D,...a.isGatewayView?F:E}));I(()=>i.params.mesh,function(){i.name!=="data-planes-list-view"&&i.name!=="gateways-list-view"||u(0)});function T(){const t=f.get("filterFields"),s=t!==null?JSON.parse(t):{};u(a.offset,{...s,gateway:a.gatewayType})}T();async function u(t,s={}){y.value=t,f.set("offset",t>0?t:null),f.set("gatewayType",s.gateway==="true"?"all":s.gateway),n.value=!0;const m=i.params.mesh,l=h(s,S,t,a.isGatewayView);try{const{items:e,next:x}=await g.getAllDataplaneOverviewsFromMesh({mesh:m},l);p.value=x,o.value=e??[]}catch(e){e instanceof Error?d.value=e:console.error(e),o.value=[],p.value=null}finally{n.value=!1}}function h(t,s,m,l){const e={...t,size:s,offset:m};return l&&(!("gateway"in e)||e.gateway==="false")?e.gateway="true":l||(e.gateway="false"),e}return(t,s)=>(b(),k($,{module:a.isGatewayView?"gateways":"data-planes"},{default:w(()=>[c(z,{title:G(_)(`${a.isGatewayView?"gateways":"data-planes"}.routes.items.title`)},null,8,["title"]),N(),c(R,null,{default:w(()=>[c(O,{"data-plane-overviews":o.value,"is-loading":n.value,error:d.value,"next-url":p.value,"page-offset":y.value,"selected-dpp-name":a.selectedDppName,"is-gateway-view":a.isGatewayView,"gateway-type":a.gatewayType,"dpp-filter-fields":L.value,onLoadData:u},null,8,["data-plane-overviews","is-loading","error","next-url","page-offset","selected-dpp-name","is-gateway-view","gateway-type","dpp-filter-fields"])]),_:1})]),_:1},8,["module"]))}});export{oe as default};