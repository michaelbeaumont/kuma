import{d as h,u as _,c as f,o as i,a as m,w as p,h as r,b as c,g as y,f as d}from"./index-0e7fcb41.js";import{_ as P}from"./PolicyDetails.vue_vue_type_script_setup_true_lang-47d003a3.js";import{f as b,k as x,g as N,_ as k}from"./RouteView.vue_vue_type_script_setup_true_lang-8a151e68.js";import{_ as w}from"./RouteTitle.vue_vue_type_script_setup_true_lang-012cd793.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-7cc29f3f.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-c7132f90.js";import"./kongponents.es-dc2561df.js";import"./ErrorBlock-84b0c984.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-1bca2b41.js";import"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-a744aac0.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-f436595d.js";import"./TextWithCopyButton-7778fd96.js";import"./toYaml-4e00099e.js";import"./TabsWidget-1cc3eef6.js";import"./QueryParameter-70743f73.js";const G=h({__name:"PolicyDetailView",props:{mesh:{},policyPath:{},policyName:{}},setup(l){const e=l,n=_(),t=b(),{t:a}=x(),o=f(()=>t.state.policyTypesByPath[e.policyPath]);u();function u(){t.dispatch("updatePageTitle",n.params.policy)}return(T,V)=>(i(),m(k,{module:"policies"},{default:p(({route:s})=>[r(w,{title:c(a)("policies.routes.item.title")},null,8,["title"]),y(),r(N,{breadcrumbs:[{to:{name:"policies-list-view",params:{mesh:s.params.mesh,policyPath:s.params.policyPath}},text:c(a)("policies.routes.item.breadcrumbs")}]},{default:p(()=>[o.value?(i(),m(P,{key:0,name:e.policyName,mesh:e.mesh,path:e.policyPath,type:o.value.name},null,8,["name","mesh","path","type"])):d("",!0)]),_:2},1032,["breadcrumbs"])]),_:1}))}});export{G as default};