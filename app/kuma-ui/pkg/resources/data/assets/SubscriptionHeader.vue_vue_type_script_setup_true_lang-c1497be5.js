import{d as A,ag as C,k as x,c as B,o as n,e as r,s as y,A as $,g as s,h as b,w as d,f as p,T as E,n as q,ah as N,a as f,b as c,t as u,F as T,v as D,x as V,X as j,p as H,q as P}from"./index-9b66db49.js";import{f as O,g as w}from"./RouteView.vue_vue_type_script_setup_true_lang-89ed2586.js";import{a as _,D as L}from"./DefinitionListItem-6334dc0d.js";const M=["aria-expanded"],F={key:0,class:"accordion-item-content","data-testid":"accordion-item-content"},X=A({__name:"AccordionItem",setup(t){const e=C("parentAccordion"),a=x(null),l=B(()=>e===void 0?!1:e.multipleOpen&&Array.isArray(e.active.value)&&a.value!==null?e.active.value.includes(a.value):a.value===e.active.value);e!==void 0&&(a.value=e.count.value++);function m(){l.value?h():k()}function h(){e!==void 0&&(e.multipleOpen&&Array.isArray(e.active.value)&&a.value!==null?e.active.value.splice(e.active.value.indexOf(a.value),1):e.active.value=null)}function k(){e!==void 0&&(e.multipleOpen&&Array.isArray(e.active.value)&&a.value!==null?e.active.value.push(a.value):e.active.value=a.value)}function o(i){i instanceof HTMLElement&&(i.style.height=`${i.scrollHeight}px`)}function v(i){i instanceof HTMLElement&&(i.style.height="auto")}return(i,I)=>(n(),r("li",{class:q(["accordion-item",{active:l.value}])},[y("button",{class:"accordion-item-header",type:"button","aria-expanded":l.value?"true":"false","data-testid":"accordion-item-button",onClick:m},[$(i.$slots,"accordion-header",{},void 0,!0)],8,M),s(),b(E,{name:"accordion",onEnter:o,onAfterEnter:v,onBeforeLeave:o},{default:d(()=>[l.value?(n(),r("div",F,[$(i.$slots,"accordion-content",{},void 0,!0)])):p("",!0)]),_:3})],2))}});const se=O(X,[["__scopeId","data-v-dfd99690"]]),z={class:"accordion-list"},G=A({__name:"AccordionList",props:{initiallyOpen:{type:[Number,Array],required:!1,default:null},multipleOpen:{type:Boolean,required:!1,default:!1}},setup(t){const e=t,a=x(0),l=x(e.initiallyOpen!==null?e.initiallyOpen:e.multipleOpen?[]:null);return N("parentAccordion",{multipleOpen:e.multipleOpen,active:l,count:a}),(m,h)=>(n(),r("ul",z,[$(m.$slots,"default",{},void 0,!0)]))}});const oe=O(G,[["__scopeId","data-v-53d92d22"]]),U=t=>(H("data-v-ab525cda"),t=t(),P(),t),J={key:0},K=U(()=>y("h5",{class:"overview-tertiary-title"},`
        General Information:
      `,-1)),Q={key:1,class:"columns mt-4",style:{"--columns":"4"}},R={key:0},W={class:"overview-tertiary-title"},Y=A({__name:"SubscriptionDetails",props:{details:{type:Object,required:!0},isDiscoverySubscription:{type:Boolean,default:!1}},setup(t){const e=t,{t:a,formatIsoDate:l}=w(),m=B(()=>{var v,i;let o;if(e.isDiscoverySubscription){const{lastUpdateTime:I,total:S,...g}=e.details.status;o=g}return(v=e.details.status)!=null&&v.stat&&(o=(i=e.details.status)==null?void 0:i.stat),o});function h(o){return o?parseInt(o,10).toLocaleString("en").toString():"0"}function k(o){return o==="--"?"error calculating":o}return(o,v)=>(n(),r("div",null,[t.details.globalInstanceId||t.details.controlPlaneInstanceId||t.details.connectTime||t.details.disconnectTime?(n(),r("div",J,[K,s(),b(L,null,{default:d(()=>[t.details.globalInstanceId?(n(),f(_,{key:0,term:c(a)("http.api.property.globalInstanceId")},{default:d(()=>[s(u(t.details.globalInstanceId),1)]),_:1},8,["term"])):p("",!0),s(),t.details.controlPlaneInstanceId?(n(),f(_,{key:1,term:c(a)("http.api.property.controlPlaneInstanceId")},{default:d(()=>[s(u(t.details.controlPlaneInstanceId),1)]),_:1},8,["term"])):p("",!0),s(),t.details.connectTime?(n(),f(_,{key:2,term:c(a)("http.api.property.connectTime")},{default:d(()=>[s(u(c(l)(t.details.connectTime)),1)]),_:1},8,["term"])):p("",!0),s(),t.details.disconnectTime?(n(),f(_,{key:3,term:c(a)("http.api.property.disconnectTime")},{default:d(()=>[s(u(c(l)(t.details.disconnectTime)),1)]),_:1},8,["term"])):p("",!0)]),_:1})])):p("",!0),s(),m.value?(n(),r("div",Q,[(n(!0),r(T,null,D(m.value,(i,I)=>(n(),r(T,{key:I},[Object.keys(i).length>0?(n(),r("div",R,[y("h6",W,u(c(a)(`http.api.property.${I}`))+`:
          `,1),s(),b(L,null,{default:d(()=>[(n(!0),r(T,null,D(i,(S,g)=>(n(),f(_,{key:g,term:c(a)(`http.api.property.${g}`)},{default:d(()=>[s(u(k(h(S))),1)]),_:2},1032,["term"]))),128))]),_:2},1024)])):p("",!0)],64))),128))])):(n(),f(c(j),{key:2,appearance:"info",class:"mt-4"},{alertIcon:d(()=>[b(c(V),{icon:"portal"})]),alertMessage:d(()=>[s(`
        There are no subscription statistics for `),y("strong",null,u(t.details.id),1)]),_:1}))]))}});const ce=O(Y,[["__scopeId","data-v-ab525cda"]]),Z={class:"text-lg font-medium"},ee={class:"color-green-500"},te={key:0,class:"ml-4 color-red-600"},re=A({__name:"SubscriptionHeader",props:{details:{type:Object,required:!0}},setup(t){const e=t,{formatIsoDate:a}=w();return(l,m)=>(n(),r("h4",Z,[y("span",ee,`
      Connect time: `+u(c(a)(e.details.connectTime)),1),s(),e.details.disconnectTime?(n(),r("span",te,`
      Disconnect time: `+u(c(a)(e.details.disconnectTime)),1)):p("",!0)]))}});export{se as A,ce as S,re as _,oe as a};
