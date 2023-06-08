import{d as A,q as I,r,m as P,s as S,J as V,o as b,c as k,w,a as f,u as G,b as N}from"./index-271b6183.js";import{D as q}from"./DataPlaneList-e1bd9274.js";import{u as O,g as B,f as R,e as $}from"./RouteView.vue_vue_type_script_setup_true_lang-fadf0571.js";import{_ as z}from"./RouteTitle.vue_vue_type_script_setup_true_lang-1f8fd421.js";import{Q as m}from"./QueryParameter-70743f73.js";import"./kongponents.es-dc880404.js";import"./ContentWrapper-bedb19e3.js";import"./DataOverview-d4799d67.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-9d9f8054.js";import"./ErrorBlock-2e363ab2.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-c91f8087.js";import"./TagList-5e49a7a3.js";import"./StatusBadge-2721d158.js";import"./DefinitionListItem-cf681f64.js";import"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-cfdfffdc.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-ac8fa1e9.js";import"./TextWithCopyButton-3ab4305e.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-85609c66.js";import"./toYaml-4e00099e.js";const oe=A({__name:"DataPlaneListView",props:{selectedDppName:{type:String,required:!1,default:null},gatewayType:{type:String,required:!1,default:"true"},offset:{type:Number,required:!1,default:0},isGatewayView:{type:Boolean,required:!1,default:!1}},setup(v){const t=v,g=O(),{t:_}=B(),D={name:{description:"filter by name or parts of a name"},service:{description:"filter by “kuma.io/service” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},zone:{description:"filter by “kuma.io/zone” value"}},E={protocol:{description:"filter by “kuma.io/protocol” value"}},F={},i=I(),o=r([]),n=r(!0),d=r(null),p=r(null),y=r(t.offset),L=P(()=>({...D,...t.isGatewayView?F:E}));S(()=>i.params.mesh,function(){i.name!=="data-planes-list-view"&&i.name!=="gateways-list-view"||u(0)});function T(){const a=m.get("filterFields"),s=a!==null?JSON.parse(a):{};u(t.offset,{...s,gateway:t.gatewayType})}T();async function u(a,s={}){y.value=a,m.set("offset",a>0?a:null),m.set("gatewayType",s.gateway==="true"?"all":s.gateway),n.value=!0;const c=i.params.mesh,l=x(s,V,a,t.isGatewayView);try{const{items:e,next:h}=await g.getAllDataplaneOverviewsFromMesh({mesh:c},l);p.value=h,o.value=e??[]}catch(e){e instanceof Error?d.value=e:console.error(e),o.value=[],p.value=null}finally{n.value=!1}}function x(a,s,c,l){const e={...a,size:s,offset:c};return l&&(!("gateway"in e)||e.gateway==="false")?e.gateway="true":l||(e.gateway="false"),e}return(a,s)=>(b(),k($,null,{default:w(()=>[f(z,{title:G(_)(`${t.isGatewayView?"gateways":"data-planes"}.routes.items.title`)},null,8,["title"]),N(),f(R,null,{default:w(()=>[f(q,{"data-plane-overviews":o.value,"is-loading":n.value,error:d.value,"next-url":p.value,"page-offset":y.value,"selected-dpp-name":t.selectedDppName,"is-gateway-view":t.isGatewayView,"gateway-type":t.gatewayType,"dpp-filter-fields":L.value,onLoadData:u},null,8,["data-plane-overviews","is-loading","error","next-url","page-offset","selected-dpp-name","is-gateway-view","gateway-type","dpp-filter-fields"])]),_:1})]),_:1}))}});export{oe as default};
