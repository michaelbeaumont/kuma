(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["timeouts"],{bc9e:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"timeouts relative"},[a("DocumentationLink",{attrs:{href:t.docsURL}}),a("FrameSkeleton",[a("DataOverview",{attrs:{"page-size":t.pageSize,"has-error":t.hasError,"is-loading":t.isLoading,"empty-state":t.empty_state,"table-data":t.tableData,"table-data-is-empty":t.tableDataIsEmpty,next:t.next},on:{tableAction:t.tableAction,loadData:function(e){return t.loadData(e)}},scopedSlots:t._u([{key:"additionalControls",fn:function(){return[t.$route.query.ns?a("KButton",{staticClass:"back-button",attrs:{appearance:"primary",size:"small",to:{name:"timeouts"}}},[a("span",{staticClass:"custom-control-icon"},[t._v(" ← ")]),t._v(" View All ")]):t._e()]},proxy:!0}])}),!1===t.isEmpty?a("Tabs",{attrs:{"has-error":t.hasError,"is-loading":t.isLoading,tabs:t.tabs,"initial-tab-override":"overview"},scopedSlots:t._u([{key:"tabHeader",fn:function(){return[a("div",[a("h3",[t._v("Timeout: "+t._s(t.entity.name))])]),a("div",[a("EntityURLControl",{attrs:{name:t.entity.name,mesh:t.entity.mesh}})],1)]},proxy:!0},{key:"overview",fn:function(){return[a("LabelList",{attrs:{"has-error":t.entityHasError,"is-loading":t.entityIsLoading,"is-empty":t.entityIsEmpty}},[a("div",[a("ul",t._l(t.entity,(function(e,n){return a("li",{key:n},[a("h4",[t._v(t._s(n))]),a("p",[t._v(" "+t._s(e)+" ")])])})),0)])])]},proxy:!0},{key:"affected-dpps",fn:function(){return[a("PolicyConnections",{attrs:{mesh:t.rawEntity.mesh,"policy-name":t.rawEntity.name,"policy-type":"timeouts"}})]},proxy:!0},{key:"yaml",fn:function(){return[a("YamlView",{attrs:{"has-error":t.entityHasError,"is-loading":t.entityIsLoading,"is-empty":t.entityIsEmpty,content:t.rawEntity}})]},proxy:!0}],null,!1,1640349408)}):t._e()],1)],1)},i=[],s=(a("b0c0"),a("d3b7"),a("96cf"),a("c964")),r=a("f3f3"),o=a("2f62"),l=a("bc1e"),c=a("0f82"),y=a("1d3a"),m=a("6663"),u=a("1d10"),p=a("2778"),d=a("14eb"),h=a("251b"),f=a("ff9d"),b=a("0ada"),v=a("6524"),E=a("c6ec"),g={name:"Timeouts",metaInfo:{title:"Timeouts"},components:{EntityURLControl:m["a"],FrameSkeleton:u["a"],DataOverview:p["a"],Tabs:h["a"],YamlView:f["a"],LabelList:b["a"],PolicyConnections:d["a"],DocumentationLink:v["a"]},data:function(){return{isLoading:!0,isEmpty:!1,hasError:!1,entityIsLoading:!0,entityIsEmpty:!1,entityHasError:!1,tableDataIsEmpty:!1,empty_state:{title:"No Data",message:"There are no Timeouts present."},tableData:{headers:[{key:"actions",hideLabel:!0},{label:"Name",key:"name"},{label:"Mesh",key:"mesh"},{label:"Type",key:"type"}],data:[]},tabs:[{hash:"#overview",title:"Overview"},{hash:"#affected-dpps",title:"Affected DPPs"},{hash:"#yaml",title:"YAML"}],entity:{},rawEntity:{},pageSize:E["h"],next:null}},computed:Object(r["a"])(Object(r["a"])({},Object(o["c"])({version:"config/getVersion"})),{},{docsURL:function(){return"https://kuma.io/docs/".concat(this.version,"/policies/timeout/")}}),watch:{$route:function(t,e){this.init()}},beforeMount:function(){this.init()},methods:{init:function(){this.loadData()},tableAction:function(t){var e=t;this.getEntity(e)},loadData:function(){var t=arguments,e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,i,s,r,o,m,u,p;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:"0",e.isLoading=!0,i=e.$route.query.ns||null,s=e.$route.params.mesh||null,a.prev=4,a.next=7,Object(y["a"])({getSingleEntity:c["a"].getTimeout.bind(c["a"]),getAllEntities:c["a"].getAllTimeouts.bind(c["a"]),getAllEntitiesFromMesh:c["a"].getAllTimeoutsFromMesh.bind(c["a"]),mesh:s,query:i,size:e.pageSize,offset:n});case 7:r=a.sent,o=r.data,m=r.next,e.next=m,o.length?(e.tableData.data=o,e.tableDataIsEmpty=!1,e.isEmpty=!1,u=["type","name","mesh"],p=o[0],e.entity=Object(l["d"])(p,u),e.rawEntity=Object(l["j"])(p)):(e.tableData.data=[],e.tableDataIsEmpty=!0,e.isEmpty=!0,e.entityIsEmpty=!0),a.next=19;break;case 14:a.prev=14,a.t0=a["catch"](4),e.hasError=!0,e.isEmpty=!0,console.error(a.t0);case 19:return a.prev=19,e.isLoading=!1,e.entityIsLoading=!1,a.finish(19);case 23:case"end":return a.stop()}}),a,null,[[4,14,19,23]])})))()},getEntity:function(t){var e=this;this.entityIsLoading=!0,this.entityIsEmpty=!1,this.entityHasError=!1;var a=this.$route.params.mesh;if(t){var n="all"===a?t.mesh:a;return c["a"].getTimeout({mesh:n,name:t.name}).then((function(t){if(t){var a=["type","name","mesh"];e.entity=Object(l["d"])(t,a),e.rawEntity=Object(l["j"])(t)}else e.entity={},e.entityIsEmpty=!0})).catch((function(t){e.entityHasError=!0,console.error(t)})).finally((function(){setTimeout((function(){e.entityIsLoading=!1}),"500")}))}setTimeout((function(){e.entityIsEmpty=!0,e.entityIsLoading=!1}),"500")}}},w=g,L=a("2877"),k=Object(L["a"])(w,n,i,!1,null,null,null);e["default"]=k.exports}}]);