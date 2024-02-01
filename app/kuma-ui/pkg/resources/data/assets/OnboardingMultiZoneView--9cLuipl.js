import{L as O}from"./LoadingBox-IX6hvWaP.js";import{O as T,a as Z,b as I}from"./OnboardingPage-wV9ccrOe.js";import{d as V,N as k,B as u,O as N,a as p,o as a,b as A,w as i,e as c,f as e,m as t,c as l,p as B,x as C,y as L,_ as R}from"./index-ANwvg_A1.js";const S=r=>(C("data-v-6c023d87"),r=r(),L(),r),D=S(()=>t("p",{class:"mb-4 text-center"},`
            A zone requires both the zone control plane and zone ingress. On Kubernetes, you run a single command to create both resources. On Universal, you must create them separately.
          `,-1)),E={class:"mb-4 text-center"},G=["href"],K={class:"status-box mt-4"},M={key:0,class:"status--is-connected","data-testid":"zone-connected"},P={key:1,class:"status--is-disconnected","data-testid":"zone-disconnected"},U={class:"status-box mt-4"},q={key:0,class:"status--is-connected","data-testid":"zone-ingress-connected"},H={key:1,class:"status--is-disconnected","data-testid":"zone-ingress-disconnected"},j={key:0,class:"status-loading-box mt-4"},b=1e3,F=V({__name:"OnboardingMultiZoneView",setup(r){const m=k(),o=u(!1),s=u(!1),d=u(null),_=u(null);N(function(){v(),h()}),f(),g();async function f(){try{const{total:n}=await m.getZones();o.value=n>0}catch(n){o.value=!1,console.error(n)}finally{o.value||(v(),d.value=window.setTimeout(f,b))}}async function g(){try{const{total:n}=await m.getAllZoneIngressOverviews();s.value=n>0}catch(n){s.value=!1,console.error(n)}finally{s.value||(h(),_.value=window.setTimeout(g,b))}}function v(){d.value!==null&&window.clearTimeout(d.value)}function h(){_.value!==null&&window.clearTimeout(_.value)}return(n,J)=>{const y=p("RouteTitle"),x=p("AppView"),z=p("RouteView");return a(),A(z,{name:"onboarding-multi-zone-view"},{default:i(({t:w})=>[c(y,{title:w("onboarding.routes.multizone.title"),render:!1},null,8,["title"]),e(),c(x,null,{default:i(()=>[c(T,null,{header:i(()=>[c(Z,null,{title:i(()=>[e(`
              Add zones
            `)]),_:1})]),content:i(()=>[D,e(),t("p",E,[t("b",null,[e("See "),t("a",{href:w("onboarding.href.docs.install"),target:"_blank"},"the documentation for options to install",8,G),e(".")])]),e(),t("div",null,[t("p",K,[e(`
              Zone status:

              `),o.value?(a(),l("span",M,"Connected")):(a(),l("span",P,"Disconnected"))]),e(),t("p",U,[e(`
              Zone ingress status:

              `),s.value?(a(),l("span",q,"Connected")):(a(),l("span",H,"Disconnected"))]),e(),!s.value||!o.value?(a(),l("div",j,[c(O)])):B("",!0)])]),navigation:i(()=>[c(I,{"next-step":"onboarding-create-mesh-view","previous-step":"onboarding-configuration-types-view","should-allow-next":o.value&&s.value},null,8,["should-allow-next"])]),_:2},1024)]),_:2},1024)]),_:1})}}}),Y=R(F,[["__scopeId","data-v-6c023d87"]]);export{Y as default};
