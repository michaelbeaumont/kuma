import{K as g}from"./index-fce48c05.js";import{d as x,a as t,o as r,b as n,w as o,e as s,m as i,f as l,l as m,a1 as y}from"./index-3ddd0e9e.js";import{C as R}from"./CodeBlock-56f65f8d.js";import{E as k}from"./ErrorBlock-2be9cd06.js";import{_ as w}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-4407ccd5.js";import"./uniqueId-90cc9b93.js";import"./TextWithCopyButton-4870eafb.js";import"./CopyButton-f0ea0e69.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-39d02562.js";const I=x({__name:"DataPlaneOutboundSummaryClustersView",setup(E){return(V,v)=>{const d=t("RouteTitle"),u=t("KButton"),_=t("DataSource"),f=t("AppView"),h=t("RouteView");return r(),n(h,{params:{codeSearch:"",codeFilter:!1,codeRegExp:!1,mesh:"",dataPlane:"",service:""},name:"data-plane-outbound-summary-clusters-view"},{default:o(({route:e})=>[s(f,null,{title:o(()=>[i("h3",null,[s(d,{title:"Clusters"})])]),default:o(()=>[l(),i("div",null,[s(_,{src:`/meshes/${e.params.mesh}/dataplanes/${e.params.dataPlane}/data-path/clusters`},{default:o(({data:c,error:p,refresh:C})=>[p?(r(),n(k,{key:0,error:p},null,8,["error"])):c===void 0?(r(),n(w,{key:1})):(r(),n(R,{key:2,language:"json",code:(()=>`${c.split(`
`).filter(a=>a.startsWith(`${e.params.service}::`)).map(a=>a.replace(`${e.params.service}::`,"")).join(`
`)}`)(),"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:a=>e.update({codeSearch:a}),onFilterModeChange:a=>e.update({codeFilter:a}),onRegExpModeChange:a=>e.update({codeRegExp:a})},{"primary-actions":o(()=>[s(u,{appearance:"primary",onClick:C},{default:o(()=>[s(m(y),{size:m(g)},null,8,["size"]),l(`
                Refresh
              `)]),_:2},1032,["onClick"])]),_:2},1032,["code","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"]))]),_:2},1032,["src"])])]),_:2},1024)]),_:1})}}});export{I as default};