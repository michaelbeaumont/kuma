var ce=Object.defineProperty;var de=(a,o,n)=>o in a?ce(a,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[o]=n;var O=(a,o,n)=>(de(a,typeof o!="symbol"?o+"":o,n),n);import{d as oe,g as fe,f as me,r as te,o as u,i as P,w as b,S as ie,j as F,n as c,H as p,l as v,F as N,k as f,p as S,I as le,m as G,v as pe,K as $,a0 as ge,t as re,y as A,h as V,ah as ne,as as ve,at as ye,au as he,B as ae,av as be,aw as ke,z as _e,U as Se,D as we,G as Ce}from"./index-bc0f9b6f.js";import{A as Te}from"./AppCollection-8dbcef26.js";import{S as xe}from"./StatusBadge-6c2080f6.js";import{d as ze,a as Ie,c as De,C as Le}from"./dataplane-0a086c06.js";const Ae={key:0},Ne=oe({__name:"DataPlaneList",props:{total:{default:0},pageNumber:{},pageSize:{},items:{},error:{},gateways:{type:Boolean,default:!1},isSelectedRow:{type:[Function,null],default:null},summaryRouteName:{}},emits:["load-data","change"],setup(a,{emit:o}){const{t:n,formatIsoDate:T}=fe(),y=me(),e=a,i=o,w=y("use zones");function h(g){return g.map(r=>{var Q,B,D,U,t,l,d,L,Y,X;const m=r.mesh,x=r.name,s=((Q=r.dataplane.networking.gateway)==null?void 0:Q.type)||"STANDARD",C=["kuma.io/protocol","kuma.io/service","kuma.io/zone"],_=ze(r.dataplane).filter(k=>C.includes(k.label)),E=(B=_.find(k=>k.label==="kuma.io/service"))==null?void 0:B.value,Z=(D=_.find(k=>k.label==="kuma.io/protocol"))==null?void 0:D.value,M=(U=_.find(k=>k.label==="kuma.io/zone"))==null?void 0:U.value;let q;E!==void 0&&(q={name:"service-detail-view",params:{mesh:m,service:E}});let j;M!==void 0&&(j={name:"zone-cp-detail-view",params:{zone:M}});const{status:J}=Ie(r.dataplane,r.dataplaneInsight),K=((t=r.dataplaneInsight)==null?void 0:t.subscriptions)??[],W={dpVersion:null,version:null},z=K.reduce((k,H)=>{var ee;return{dpVersion:((ee=H.version)==null?void 0:ee.kumaDp.version)||k.dpVersion,version:H.version||k.version}},W),I={name:x,type:s,zone:{title:M??n("common.collection.none"),route:j},service:{title:E??n("common.collection.none"),route:q},protocol:Z??n("common.collection.none"),status:J,warnings:{version_mismatch:!1,cert_expired:!1},isGateway:((d=(l=r.dataplane)==null?void 0:l.networking)==null?void 0:d.gateway)!==void 0};if(z.version){const{kind:k}=De(z.version);k!==Le&&(I.warnings.version_mismatch=!0)}w&&z.dpVersion&&_.find(H=>H.label==="kuma.io/zone")&&typeof((L=z.version)==null?void 0:L.kumaDp.kumaCpCompatible)=="boolean"&&!z.version.kumaDp.kumaCpCompatible&&(I.warnings.version_mismatch=!0);const R=(X=(Y=r.dataplaneInsight)==null?void 0:Y.mTLS)==null?void 0:X.certificateExpirationTime;return R&&Date.now()>new Date(R).getTime()&&(I.warnings.cert_expired=!0),I})}return(g,r)=>{const m=te("RouterLink"),x=te("KTooltip");return u(),P(Te,{"empty-state-message":f(n)("common.emptyState.message",{type:e.gateways?"Gateways":"Data Plane Proxies"}),"empty-state-cta-to":f(n)(`data-planes.href.docs.${e.gateways?"gateway":"data_plane_proxy"}`),"empty-state-cta-text":f(n)("common.documentation"),headers:[{label:"Name",key:"name"},...e.gateways?[{label:"Type",key:"type"}]:[],{label:"Service",key:"service"},...e.gateways?[]:[{label:"Protocol",key:"protocol"}],...f(w)?[{label:"Zone",key:"zone"}]:[],{label:"Certificate Info",key:"certificate"},{label:"Status",key:"status"},{label:"Warnings",key:"warnings",hideLabel:!0},{label:"Details",key:"details",hideLabel:!0}],"page-number":e.pageNumber,"page-size":e.pageSize,total:e.total,items:e.items?h(e.items):void 0,error:e.error,"is-selected-row":e.isSelectedRow,onChange:r[0]||(r[0]=s=>i("change",s))},{toolbar:b(()=>[ie(g.$slots,"toolbar",{},void 0,!0)]),name:b(({row:s})=>[F(m,{to:{name:e.summaryRouteName,params:{mesh:s.mesh,dataPlane:s.name},query:{page:e.pageNumber,size:e.pageSize}}},{default:b(()=>[c(p(s.name),1)]),_:2},1032,["to"])]),service:b(({rowValue:s})=>[s.route?(u(),P(m,{key:0,to:s.route},{default:b(()=>[c(p(s.title),1)]),_:2},1032,["to"])):(u(),v(N,{key:1},[c(p(s.title),1)],64))]),zone:b(({rowValue:s})=>[s.route?(u(),P(m,{key:0,to:s.route},{default:b(()=>[c(p(s.title),1)]),_:2},1032,["to"])):(u(),v(N,{key:1},[c(p(s.title),1)],64))]),status:b(({rowValue:s})=>[s?(u(),P(xe,{key:0,status:s},null,8,["status"])):(u(),v(N,{key:1},[c(p(f(n)("common.collection.none")),1)],64))]),warnings:b(({row:s})=>[Object.values(s.warnings).some(C=>C)?(u(),P(x,{key:0},{content:b(()=>[S("ul",null,[(u(!0),v(N,null,le(s.warnings,(C,_)=>(u(),v(N,{key:_},[C?(u(),v("li",Ae,p(f(n)(`data-planes.components.data-plane-list.${_}`)),1)):G("",!0)],64))),128))])]),default:b(()=>[c(),F(pe,{class:"mr-1",size:f($),"hide-title":""},null,8,["size"])]),_:2},1024)):(u(),v(N,{key:1},[c(p(f(n)("common.collection.none")),1)],64))]),certificate:b(({row:s})=>{var C,_;return[c(p((_=(C=s.dataplaneInsight)==null?void 0:C.mTLS)!=null&&_.certificateExpirationTime?f(T)(new Date(s.dataplaneInsight.mTLS.certificateExpirationTime).toUTCString()):f(n)("data-planes.components.data-plane-list.certificate.none")),1)]}),details:b(({row:s})=>[F(m,{class:"details-link","data-testid":"details-link",to:{name:s.isGateway?"gateway-detail-view":"data-plane-detail-view",params:{dataPlane:s.name}}},{default:b(()=>[c(p(f(n)("common.collection.details_link"))+" ",1),F(f(ge),{display:"inline-block",decorative:"",size:f($)},null,8,["size"])]),_:2},1032,["to"])]),_:3},8,["empty-state-message","empty-state-cta-to","empty-state-cta-text","headers","page-number","page-size","total","items","error","is-selected-row"])}}});const st=re(Ne,[["__scopeId","data-v-fbd4e2b1"]]);function Fe(a,o,n){return Math.max(o,Math.min(a,n))}const Be=["ControlLeft","ControlRight","ShiftLeft","ShiftRight","AltLeft"];class Ee{constructor(o,n){O(this,"commands");O(this,"keyMap");O(this,"boundTriggerShortcuts");this.commands=n,this.keyMap=Object.fromEntries(Object.entries(o).map(([T,y])=>[T.toLowerCase(),y])),this.boundTriggerShortcuts=this.triggerShortcuts.bind(this)}registerListener(){document.addEventListener("keydown",this.boundTriggerShortcuts)}unRegisterListener(){document.removeEventListener("keydown",this.boundTriggerShortcuts)}triggerShortcuts(o){Me(o,this.keyMap,this.commands)}}function Me(a,o,n){const T=qe(a.code),y=[a.ctrlKey?"ctrl":"",a.shiftKey?"shift":"",a.altKey?"alt":"",T].filter(w=>w!=="").join("+"),e=o[y];if(!e)return;const i=n[e];i.isAllowedContext&&!i.isAllowedContext(a)||(i.shouldPreventDefaultAction&&a.preventDefault(),!(i.isDisabled&&i.isDisabled())&&i.trigger(a))}function qe(a){return Be.includes(a)?"":a.replace(/^Key/,"").toLowerCase()}function Pe(a,o){const n=" "+a,T=n.matchAll(/ ([-\s\w]+):\s*/g),y=[];for(const e of Array.from(T)){if(e.index===void 0)continue;const i=$e(e[1]);if(o.length>0&&!o.includes(i))throw new Error(`Unknown field “${i}”. Known fields: ${o.join(", ")}`);const w=e.index+e[0].length,h=n.substring(w);let g;if(/^\s*["']/.test(h)){const m=h.match(/['"](.*?)['"]/);if(m!==null)g=m[1];else throw new Error(`Quote mismatch for field “${i}”.`)}else{const m=h.indexOf(" "),x=m===-1?h.length:m;g=h.substring(0,x)}g!==""&&y.push([i,g])}return y}function $e(a){return a.trim().replace(/\s+/g,"-").replace(/-[a-z]/g,(o,n)=>n===0?o:o.substring(1).toUpperCase())}let se=0;const je=(a="unique")=>(se++,`${a}-${se}`),ue=a=>(we("data-v-9e2bf5f8"),a=a(),Ce(),a),Ke=ue(()=>S("span",{class:"visually-hidden"},"Focus filter",-1)),Re={class:"k-filter-icon"},Qe=["for"],Ue=["id","placeholder"],He={key:0,class:"k-suggestion-box","data-testid":"k-filter-bar-suggestion-box"},Oe={class:"k-suggestion-list"},Ve={key:0,class:"k-filter-bar-error"},Ge={key:0},Ze=["title","data-filter-field"],Je={class:"visually-hidden"},We=ue(()=>S("span",{class:"visually-hidden"},"Clear query",-1)),Ye=oe({__name:"KFilterBar",props:{id:{type:String,required:!1,default:()=>je("k-filter-bar")},fields:{type:Object,required:!0},placeholder:{type:String,required:!1,default:null},query:{type:String,required:!1,default:""}},emits:["fields-change"],setup(a,{emit:o}){const n=a,T=o,y=A(null),e=A(null),i=A(n.query),w=A([]),h=A(null),g=A(!1),r=A(-1),m=V(()=>Object.keys(n.fields)),x=V(()=>Object.entries(n.fields).slice(0,5).map(([t,l])=>({fieldName:t,...l}))),s=V(()=>m.value.length>0?`Filter by ${m.value.join(", ")}`:"Filter"),C=V(()=>n.placeholder??s.value);ne(()=>w.value,function(t,l){U(t,l)||(h.value=null,T("fields-change",{fields:t,query:i.value}))}),ne(()=>i.value,function(){i.value===""&&(h.value=null),g.value=!0});const _={Enter:"submitQuery",Escape:"closeSuggestionBox",ArrowDown:"jumpToNextSuggestion",ArrowUp:"jumpToPreviousSuggestion"},E={submitQuery:{trigger:q,isAllowedContext(t){return e.value!==null&&t.composedPath().includes(e.value)},shouldPreventDefaultAction:!0},jumpToNextSuggestion:{trigger:j,isAllowedContext(t){return e.value!==null&&t.composedPath().includes(e.value)},shouldPreventDefaultAction:!0},jumpToPreviousSuggestion:{trigger:J,isAllowedContext(t){return e.value!==null&&t.composedPath().includes(e.value)},shouldPreventDefaultAction:!0},closeSuggestionBox:{trigger:B,isAllowedContext(t){return y.value!==null&&t.composedPath().includes(y.value)}}};function Z(){const t=new Ee(_,E);_e(function(){t.registerListener()}),Se(function(){t.unRegisterListener()}),D(i.value)}Z();function M(t){const l=t.target;D(l.value)}function q(){if(e.value instanceof HTMLInputElement)if(r.value===-1)D(e.value.value),g.value=!1;else{const t=x.value[r.value].fieldName;t&&I(e.value,t)}}function j(){K(1)}function J(){K(-1)}function K(t){r.value=Fe(r.value+t,-1,x.value.length-1)}function W(){e.value instanceof HTMLInputElement&&e.value.focus()}function z(t){const d=t.currentTarget.getAttribute("data-filter-field");d&&e.value instanceof HTMLInputElement&&I(e.value,d)}function I(t,l){const d=i.value===""||i.value.endsWith(" ")?"":" ";i.value+=d+l+":",t.focus(),r.value=-1}function R(){i.value="",e.value instanceof HTMLInputElement&&(e.value.value="",e.value.focus(),D(""))}function Q(t){t.relatedTarget===null&&B(),y.value instanceof HTMLElement&&t.relatedTarget instanceof Node&&!y.value.contains(t.relatedTarget)&&B()}function B(){g.value=!1}function D(t){h.value=null;try{const l=Pe(t,m.value);l.sort((d,L)=>d[0].localeCompare(L[0])),w.value=l}catch(l){if(l instanceof Error)h.value=l,g.value=!0;else throw l}}function U(t,l){return JSON.stringify(t)===JSON.stringify(l)}return(t,l)=>(u(),v("div",{ref_key:"filterBar",ref:y,class:"k-filter-bar","data-testid":"k-filter-bar"},[S("button",{class:"k-focus-filter-input-button",title:"Focus filter",type:"button","data-testid":"k-filter-bar-focus-filter-input-button",onClick:W},[Ke,c(),S("span",Re,[F(f(ve),{decorative:"","data-testid":"k-filter-bar-filter-icon","hide-title":"",size:f($)},null,8,["size"])])]),c(),S("label",{for:`${n.id}-filter-bar-input`,class:"visually-hidden"},[ie(t.$slots,"default",{},()=>[c(p(s.value),1)],!0)],8,Qe),c(),ye(S("input",{id:`${n.id}-filter-bar-input`,ref_key:"filterInput",ref:e,"onUpdate:modelValue":l[0]||(l[0]=d=>i.value=d),class:"k-filter-bar-input",type:"text",placeholder:C.value,"data-testid":"k-filter-bar-filter-input",onFocus:l[1]||(l[1]=d=>g.value=!0),onBlur:Q,onChange:M},null,40,Ue),[[he,i.value]]),c(),g.value?(u(),v("div",He,[S("div",Oe,[h.value!==null?(u(),v("p",Ve,p(h.value.message),1)):(u(),v("button",{key:1,class:ae(["k-submit-query-button",{"k-submit-query-button-is-selected":r.value===-1}]),title:"Submit query",type:"button","data-testid":"k-filter-bar-submit-query-button",onClick:q},`
          Submit `+p(i.value),3)),c(),(u(!0),v(N,null,le(x.value,(d,L)=>(u(),v("div",{key:`${n.id}-${L}`,class:ae(["k-suggestion-list-item",{"k-suggestion-list-item-is-selected":r.value===L}])},[S("b",null,p(d.fieldName),1),d.description!==""?(u(),v("span",Ge,": "+p(d.description),1)):G("",!0),c(),S("button",{class:"k-apply-suggestion-button",title:`Add ${d.fieldName}:`,type:"button","data-filter-field":d.fieldName,"data-testid":"k-filter-bar-apply-suggestion-button",onClick:z},[S("span",Je,"Add "+p(d.fieldName)+":",1),c(),F(f(be),{decorative:"","hide-title":"",size:f($)},null,8,["size"])],8,Ze)],2))),128))])])):G("",!0),c(),i.value!==""?(u(),v("button",{key:1,class:"k-clear-query-button",title:"Clear query",type:"button","data-testid":"k-filter-bar-clear-query-button",onClick:R},[We,c(),F(f(ke),{decorative:"","hide-title":"",size:f($)},null,8,["size"])])):G("",!0)],512))}});const ot=re(Ye,[["__scopeId","data-v-9e2bf5f8"]]);export{st as D,ot as K};