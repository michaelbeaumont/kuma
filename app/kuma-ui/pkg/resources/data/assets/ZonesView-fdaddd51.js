import{u as ne}from"./vue-router-573afc44.js";import{P as oe,_ as re,D as M}from"./kongponents.es-3df60cd6.js";import{f as G,k as f,d as R,e as ie,h as le,I as ue,u as ce}from"./store-ee651251.js";import{b as J}from"./constants-31fdaf55.js";import{Q as Y}from"./QueryParameter-70743f73.js";import{a as fe,A as pe}from"./AccordionItem-5cf952b5.js";import{_ as me}from"./CodeBlock.vue_vue_type_style_index_0_lang-23b6441e.js";import{D as ge}from"./DataOverview-5204a5c8.js";import{F as ve}from"./FrameSkeleton-256a9a83.js";import{_ as de}from"./LabelList.vue_vue_type_style_index_0_lang-d1feb263.js";import{_ as he}from"./MultizoneInfo.vue_vue_type_script_setup_true_lang-6a0aecb6.js";import{_ as ye,S as _e}from"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-6e6a5112.js";import{T as be}from"./TabsWidget-a4e2592f.js";import{_ as we}from"./WarningsWidget.vue_vue_type_script_setup_true_lang-05d0922e.js";import{d as ke,r as n,y as Se,_ as Ee,h as p,u as d,a as h,w as o,o as r,e as l,f as C,b as z,g as D,t as A,F as H,v as Q}from"./runtime-dom.esm-bundler-91b41870.js";import"./vuex.esm-bundler-df5bd11e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-87174ba5.js";import"./datadogLogEvents-4578cfa7.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-4047971f.js";import"./ErrorBlock-c2bb5142.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-d3176fee.js";import"./StatusBadge-81464ebd.js";import"./TagList-91d1133a.js";import"./index-427ec66a.js";const Ie={class:"zones"},Ce={class:"entity-heading"},ze={key:0},Ae={key:1},Ne={key:2},aa=ke({__name:"ZonesView",props:{selectedZoneName:{type:String,required:!1,default:null},offset:{type:Number,required:!1,default:0}},setup(U){const N=U,j={title:"No Data",message:"There are no Zones present."},V=[{hash:"#overview",title:"Overview"},{hash:"#insights",title:"Zone Insights"},{hash:"#config",title:"Config"},{hash:"#warnings",title:"Warnings"}],Z=ne(),O=ce(),y=n(!0),m=n(!1),b=n(null),w=n(!0),_=n(!1),k=n(!1),S=n(!1),E=n({headers:[{label:"Actions",key:"actions",hideLabel:!0},{label:"Status",key:"status"},{label:"Name",key:"name"},{label:"Zone CP Version",key:"zoneCpVersion"},{label:"Storage type",key:"storeType"},{label:"Ingress",key:"hasIngress"},{label:"Egress",key:"hasEgress"},{label:"Warnings",key:"warnings",hideLabel:!0}],data:[]}),g=n(null),L=n(null),I=n([]),B=n([]),T=n(null),x=n(N.offset),P=n(new Set),W=n(new Set);Se(()=>Z.params.mesh,function(){Z.name==="zones"&&(y.value=!0,m.value=!1,w.value=!0,_.value=!1,k.value=!1,S.value=!1,b.value=null,F(0))}),Ee(function(){F(N.offset)});function F(a){O.getters["config/getMulticlusterStatus"]&&$(a)}function K(){return I.value.length===0?V.filter(a=>a.hash!=="#warnings"):V}function X(a){var v;let s="-",t="",e=!0;(((v=a.zoneInsight)==null?void 0:v.subscriptions)??[]).forEach(c=>{if(c.version&&c.version.kumaCp){s=c.version.kumaCp.version;const{kumaCpGlobalCompatible:se=!0}=c.version.kumaCp;e=se,c.config&&(t=JSON.parse(c.config).store.type)}});const u=R(a.zoneInsight);return{...a,status:u,zoneCpVersion:s,storeType:t,hasIngress:P.value.has(a.name)?"Yes":"No",hasEgress:W.value.has(a.name)?"Yes":"No",withWarnings:!e}}function ee(a){const s=new Set;a.forEach(({zoneIngress:{zone:t}})=>{s.add(t)}),P.value=s}function ae(a){const s=new Set;a.forEach(({zoneEgress:{zone:t}})=>{s.add(t)}),W.value=s}async function $(a){x.value=a,Y.set("offset",a>0?a:null),y.value=!0,m.value=!1;const s=Z.query.ns||null,t=J;try{const[{data:e,next:i},{items:u},{items:v}]=await Promise.all([te(s,t,a),G(f.getAllZoneIngressOverviews.bind(f)),G(f.getAllZoneEgressOverviews.bind(f))]);L.value=i,e.length?(ee(u),ae(v),E.value.data=e.map(X),S.value=!1,m.value=!1,await q({name:N.selectedZoneName??e[0].name})):(E.value.data=[],S.value=!0,m.value=!0,_.value=!0)}catch(e){e instanceof Error?b.value=e:console.error(e),m.value=!0}finally{y.value=!1}}async function q({name:a}){var s;k.value=!1,w.value=!0,_.value=!1,I.value=[];try{const t=await f.getZoneOverview({name:a}),e=((s=t.zoneInsight)==null?void 0:s.subscriptions)??[],i=R(t.zoneInsight);if(g.value={...ie(t,["type","name"]),status:i,"Authentication Type":le(t)},Y.set("zone",a),B.value=Array.from(e).reverse(),e.length>0){const u=e[e.length-1],v=u.version.kumaCp.version||"-",{kumaCpGlobalCompatible:c=!0}=u.version.kumaCp;c||I.value.push({kind:ue,payload:{zoneCpVersion:v,globalCpVersion:O.getters["config/getVersion"]}}),u.config&&(T.value=JSON.stringify(JSON.parse(u.config),null,2))}}catch(t){console.error(t),g.value=null,k.value=!0,_.value=!0}finally{w.value=!1}}async function te(a,s,t){if(a)return{data:[await f.getZoneOverview({name:a},{size:s,offset:t})],next:null};{const{items:e,next:i}=await f.getAllZoneOverviews({size:s,offset:t});return{data:e??[],next:i}}}return(a,s)=>(r(),p("div",Ie,[d(O).getters["config/getMulticlusterStatus"]===!1?(r(),h(he,{key:0})):(r(),h(ve,{key:1},{default:o(()=>{var t;return[l(ge,{"selected-entity-name":(t=g.value)==null?void 0:t.name,"page-size":d(J),"is-loading":y.value,error:b.value,"empty-state":j,"table-data":E.value,"table-data-is-empty":S.value,"show-warnings":E.value.data.some(e=>e.withWarnings),next:L.value,"page-offset":x.value,onTableAction:q,onLoadData:$},{additionalControls:o(()=>[a.$route.query.ns?(r(),h(d(oe),{key:0,class:"back-button",appearance:"primary",icon:"arrowLeft",to:{name:"zones"}},{default:o(()=>[C(`
            View all
          `)]),_:1})):z("",!0)]),_:1},8,["selected-entity-name","page-size","is-loading","error","table-data","table-data-is-empty","show-warnings","next","page-offset"]),C(),m.value===!1&&g.value!==null?(r(),h(be,{key:0,"has-error":b.value!==null,"is-loading":y.value,tabs:K()},{tabHeader:o(()=>[D("h1",Ce,`
            Zone: `+A(g.value.name),1)]),overview:o(()=>[l(de,{"has-error":k.value,"is-loading":w.value,"is-empty":_.value},{default:o(()=>[D("div",null,[D("ul",null,[(r(!0),p(H,null,Q(g.value,(e,i)=>(r(),p("li",{key:i},[e?(r(),p("h4",ze,A(i),1)):z("",!0),C(),i==="status"?(r(),p("p",Ae,[l(d(re),{appearance:e==="Offline"?"danger":"success"},{default:o(()=>[C(A(e),1)]),_:2},1032,["appearance"])])):(r(),p("p",Ne,A(e),1))]))),128))])])]),_:1},8,["has-error","is-loading","is-empty"])]),insights:o(()=>[l(d(M),{"border-variant":"noBorder"},{body:o(()=>[l(fe,{"initially-open":0},{default:o(()=>[(r(!0),p(H,null,Q(B.value,(e,i)=>(r(),h(pe,{key:i},{"accordion-header":o(()=>[l(ye,{details:e},null,8,["details"])]),"accordion-content":o(()=>[l(_e,{details:e},null,8,["details"])]),_:2},1024))),128))]),_:1})]),_:1})]),config:o(()=>[T.value?(r(),h(d(M),{key:0,"border-variant":"noBorder"},{body:o(()=>[l(me,{id:"code-block-zone-config",language:"json",code:T.value,"is-searchable":"","query-key":"zone-config"},null,8,["code"])]),_:1})):z("",!0)]),warnings:o(()=>[l(we,{warnings:I.value},null,8,["warnings"])]),_:1},8,["has-error","is-loading","tabs"])):z("",!0)]}),_:1}))]))}});export{aa as default};
