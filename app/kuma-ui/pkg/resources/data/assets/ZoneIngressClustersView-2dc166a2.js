import{E as l}from"./EnvoyData-b9df63cd.js";import{d,a as t,o as m,b as u,w as n,e as s,p as g,f as _}from"./index-baa571c4.js";import"./index-52545d1d.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-2bcf6524.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-218784c7.js";import"./ErrorBlock-439da12c.js";import"./TextWithCopyButton-47107f36.js";import"./CopyButton-6c8cb7cc.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-ce954803.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-b011efe4.js";const B=d({__name:"ZoneIngressClustersView",setup(h){return(f,C)=>{const r=t("RouteTitle"),a=t("KCard"),i=t("AppView"),p=t("RouteView");return m(),u(p,{name:"zone-ingress-clusters-view",params:{zoneIngress:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:n(({route:e,t:c})=>[s(i,null,{title:n(()=>[g("h2",null,[s(r,{title:c("zone-ingresses.routes.item.navigation.zone-ingress-clusters-view")},null,8,["title"])])]),default:n(()=>[_(),s(a,null,{body:n(()=>[s(l,{resource:"Zone",src:`/zone-ingresses/${e.params.zoneIngress}/data-path/clusters`,query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter==="true","is-reg-exp-mode":e.params.codeRegExp==="true",onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},null,8,["src","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{B as default};