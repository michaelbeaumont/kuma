import{_ as d}from"./EnvoyData.vue_vue_type_script_setup_true_lang-95647c86.js";import{d as m,a as n,o as l,b as g,w as t,e as a,m as _,f as u}from"./index-3ddd0e9e.js";import"./index-fce48c05.js";import"./CodeBlock-56f65f8d.js";import"./uniqueId-90cc9b93.js";import"./ErrorBlock-2be9cd06.js";import"./TextWithCopyButton-4870eafb.js";import"./CopyButton-f0ea0e69.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-39d02562.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-4407ccd5.js";const B=m({__name:"ZoneIngressXdsConfigView",setup(f){return(x,h)=>{const s=n("RouteTitle"),r=n("KCard"),i=n("AppView"),p=n("RouteView");return l(),g(p,{name:"zone-ingress-xds-config-view",params:{zoneIngress:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:t(({route:e,t:c})=>[a(i,null,{title:t(()=>[_("h2",null,[a(s,{title:c("zone-ingresses.routes.item.navigation.zone-ingress-xds-config-view")},null,8,["title"])])]),default:t(()=>[u(),a(r,null,{default:t(()=>[a(d,{resource:"Zone",src:`/zone-ingresses/${e.params.zoneIngress}/data-path/xds`,query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},null,8,["src","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{B as default};