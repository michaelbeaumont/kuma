import{d as o,o as r,a as c,w as p,g as _,t as u,b as t,R as d}from"./index-9b66db49.js";import{g as i,f as l}from"./RouteView.vue_vue_type_script_setup_true_lang-89ed2586.js";const f=o({__name:"StatusBadge",props:{status:{type:String,required:!0}},setup(e){const a=e,s=i(),n={online:"success",offline:"danger",partially_degraded:"warning",not_available:"neutral"};return(g,m)=>(r(),c(t(d),{class:"status",appearance:n[a.status],"data-testid":"status-badge"},{default:p(()=>[_(u(t(s).t(`http.api.value.${a.status}`)),1)]),_:1},8,["appearance"]))}});const S=l(f,[["__scopeId","data-v-f2a9bce6"]]);export{S};
