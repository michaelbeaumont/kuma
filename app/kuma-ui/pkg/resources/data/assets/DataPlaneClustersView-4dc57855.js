import{E as d}from"./EnvoyData-778cfa3c.js";import{d as c,a as t,o as m,b as u,w as o,e as n,m as _,f as h}from"./index-bbd71513.js";import"./index-fce48c05.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-dba1cd37.js";import"./uniqueId-90cc9b93.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-6ca86ba2.js";import"./ErrorBlock-d87f5562.js";import"./TextWithCopyButton-a63dc99b.js";import"./CopyButton-83eb3594.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-ad740151.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-7d6086d0.js";const D=c({__name:"DataPlaneClustersView",setup(g){return(f,x)=>{const r=t("RouteTitle"),s=t("KCard"),p=t("AppView"),l=t("RouteView");return m(),u(l,{name:"data-plane-clusters-view",params:{mesh:"",dataPlane:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:o(({route:e,t:i})=>[n(p,null,{title:o(()=>[_("h2",null,[n(r,{title:i("data-planes.routes.item.navigation.data-plane-clusters-view")},null,8,["title"])])]),default:o(()=>[h(),n(s,null,{default:o(()=>[n(d,{resource:"Data Plane Proxy",src:`/meshes/${e.params.mesh}/dataplanes/${e.params.dataPlane}/data-path/clusters`,query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:a=>e.update({codeSearch:a}),onFilterModeChange:a=>e.update({codeFilter:a}),onRegExpModeChange:a=>e.update({codeRegExp:a})},null,8,["src","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{D as default};