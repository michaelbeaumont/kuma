import{d as C,l as R,V as x,a as c,o as f,b as w,w as o,f as d,t as D,m as p,q as N,e as r,C as S,x as I,y as g,a2 as B,_ as k}from"./index-ANwvg_A1.js";import{N as A}from"./NavTabs-4vsNq_Tj.js";const O=t=>(I("data-v-03904fc2"),t=t(),g(),t),P={class:"summary-title-wrapper"},T=O(()=>p("img",{"aria-hidden":"true",src:B},null,-1)),q={class:"summary-title"},$=C({__name:"DataPlaneOutboundSummaryView",props:{data:{}},setup(t){var l;const{t:v}=R(),V=x(),h=t,y=(((l=V.getRoutes().find(e=>e.name==="data-plane-outbound-summary-view"))==null?void 0:l.children)??[]).map(e=>{var n,a;const i=typeof e.name>"u"?(n=e.children)==null?void 0:n[0]:e,s=i.name,m=((a=i.meta)==null?void 0:a.module)??"";return{title:v(`data-planes.routes.item.navigation.${s}`),routeName:s,module:m}});return(e,i)=>{const s=c("DataCollection"),m=c("RouterView"),_=c("AppView"),n=c("RouteView");return f(),w(n,{name:"data-plane-outbound-summary-view",params:{service:""}},{default:o(({route:a})=>[r(_,null,{title:o(()=>[p("div",P,[T,d(),p("h2",q,D(a.params.service),1)])]),default:o(()=>[d(),r(A,{tabs:N(y)},null,8,["tabs"]),d(),r(m,null,{default:o(b=>[r(s,{items:h.data,predicate:u=>u.name===a.params.service,find:!0},{default:o(({items:u})=>[(f(),w(S(b.Component),{data:u[0]},null,8,["data"]))]),_:2},1032,["items","predicate"])]),_:2},1024)]),_:2},1024)]),_:1})}}}),F=k($,[["__scopeId","data-v-03904fc2"]]);export{F as default};
