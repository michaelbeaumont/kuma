import{d as x,r as t,o as r,m as l,w as e,b as a,l as D,aD as R,c as C,R as T,p as S,e as m,Q as k,s as A,t as X,E as y}from"./index-DftosqHq.js";const B={key:0},E=x({__name:"MeshServiceDetailTabsView",setup(L){return(N,$)=>{const _=t("RouteTitle"),p=t("XAction"),d=t("XTabs"),h=t("RouterView"),u=t("DataLoader"),v=t("AppView"),f=t("DataSource"),w=t("RouteView");return r(),l(w,{name:"mesh-service-detail-tabs-view",params:{mesh:"",service:""}},{default:e(({route:s,t:n,uri:b})=>[a(f,{src:b(D(R),"/meshes/:mesh/mesh-service/:name",{mesh:s.params.mesh,name:s.params.service})},{default:e(({data:c,error:V})=>[a(v,{docs:n("services.mesh-service.href.docs"),breadcrumbs:[{to:{name:"mesh-detail-view",params:{mesh:s.params.mesh}},text:s.params.mesh},{to:{name:"mesh-service-list-view",params:{mesh:s.params.mesh}},text:n("services.routes.mesh-service-list-view.title")}]},{title:e(()=>[c?(r(),C("h1",B,[a(T,{text:s.params.service},{default:e(()=>[a(_,{title:n("services.routes.item.title",{name:c.name})},null,8,["title"])]),_:2},1032,["text"])])):S("",!0)]),default:e(()=>[m(),a(u,{data:[c],errors:[V]},{default:e(()=>{var i;return[a(d,{selected:(i=s.child())==null?void 0:i.name},k({_:2},[A(s.children,({name:o})=>({name:`${o}-tab`,fn:e(()=>[a(p,{to:{name:o}},{default:e(()=>[m(X(n(`services.routes.item.navigation.${o}`)),1)]),_:2},1032,["to"])])}))]),1032,["selected"]),m(),a(h,null,{default:e(o=>[(r(),l(y(o.Component),{data:c},null,8,["data"]))]),_:2},1024)]}),_:2},1032,["data","errors"])]),_:2},1032,["docs","breadcrumbs"])]),_:2},1032,["src"])]),_:1})}}});export{E as default};