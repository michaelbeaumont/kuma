import{d as D,u as T,s,w as A,o as E,a as N,b as v,i as m,e as u,h as V,l as h,P as b}from"./index-3e91d6ff.js";import{k as M,j as S,g as L,_ as P}from"./RouteView.vue_vue_type_script_setup_true_lang-4f1e634f.js";import{_ as z}from"./RouteTitle.vue_vue_type_script_setup_true_lang-c8f5e134.js";import{D as B}from"./DataOverview-7f440d3d.js";import{Q as R}from"./QueryParameter-70743f73.js";import"./kongponents.es-605260c0.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-e60ab842.js";import"./ErrorBlock-c00a9be3.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-f54a5cba.js";import"./TagList-337d8082.js";import"./StatusBadge-456f7f13.js";const $={class:"kcard-stack"},q={class:"kcard-border"},H=D({__name:"MeshListView",props:{selectedMeshName:{type:[String,null],required:!1,default:null},offset:{type:Number,required:!1,default:0}},setup(g){const c=g,{t:r}=M(),y=S(),w={title:r("common.emptyState.title"),message:r("common.emptyState.message",{type:"Meshes"})},d=T(),l=s(!0),n=s(null),o=s({headers:[{label:"Name",key:"entity"}],data:[]}),f=s(null),p=s(c.offset);A(()=>d.params.mesh,function(){d.name==="mesh-list-view"&&i(0)}),x();function x(){i(c.offset)}async function i(e){p.value=e,R.set("offset",e>0?e:null),l.value=!0,n.value=null;const a=b;try{const{items:t,next:_}=await y.getAllMeshes({size:a,offset:e});f.value=_,o.value.data=k(t??[])}catch(t){o.value.data=[],t instanceof Error?n.value=t:console.error(t)}finally{l.value=!1}}function k(e){return e.map(a=>{const{name:t}=a;return{entity:a,detailViewRoute:{name:"mesh-detail-view",params:{mesh:t}}}})}return(e,a)=>(E(),N(P,null,{default:v(()=>[m(z,{title:u(r)("meshes.routes.items.title")},null,8,["title"]),V(),m(L,{breadcrumbs:[{to:{name:"mesh-list-view"},text:u(r)("meshes.routes.items.breadcrumbs")}]},{default:v(()=>[h("div",$,[h("div",q,[m(B,{"page-size":u(b),"is-loading":l.value,error:n.value,"empty-state":w,"table-data":o.value,"table-data-is-empty":o.value.data.length===0,next:f.value,"page-offset":p.value,onLoadData:i},null,8,["page-size","is-loading","error","table-data","table-data-is-empty","next","page-offset"])])])]),_:1},8,["breadcrumbs"])]),_:1}))}});export{H as default};