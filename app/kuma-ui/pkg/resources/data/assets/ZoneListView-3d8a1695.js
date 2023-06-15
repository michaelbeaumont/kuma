import{V as ee,d as te,T as ae}from"./kongponents.es-bba755ec.js";import{d as K,s as i,o as m,a as h,b as u,q as F,h as d,e as t,g as A,u as se,w as P,a1 as W,O as ne,i as _,l as x,f as U,P as Y,m as oe,t as O}from"./index-4a228570.js";import{_ as re}from"./MultizoneInfo.vue_vue_type_script_setup_true_lang-5a39f4b5.js";import{_ as le}from"./ZoneDetails.vue_vue_type_script_setup_true_lang-43028004.js";import{l as ie,k as ce,j as ue,f as de,g as me,_ as pe}from"./RouteView.vue_vue_type_script_setup_true_lang-108544bb.js";import{_ as fe}from"./RouteTitle.vue_vue_type_script_setup_true_lang-f200205b.js";import{D as ve}from"./DataOverview-a199cff9.js";import{Q as Z}from"./QueryParameter-70743f73.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-6ae11014.js";import"./DefinitionListItem-65d46c98.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-92a9edf2.js";import"./TabsWidget-5a5519cc.js";import"./ErrorBlock-218205b0.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-69072399.js";import"./TextWithCopyButton-851c19a9.js";import"./WarningsWidget.vue_vue_type_script_setup_true_lang-6d103a5a.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-7dc37402.js";import"./TagList-c907bf5d.js";import"./StatusBadge-83ed8682.js";const ge=K({__name:"DeleteResourceModal",props:{actionButtonText:{type:String,required:!1,default:"Yes, delete"},confirmationText:{type:String,required:!1,default:""},deleteFunction:{type:Function,required:!0},isVisible:{type:Boolean,required:!0},modalId:{type:String,required:!0},title:{type:String,required:!1,default:"Delete"}},emits:["cancel","delete"],setup(E,{emit:p}){const o=E,s=i(!1);async function r(){s.value=!1;try{await o.deleteFunction(),p("delete")}catch(f){console.error(f),s.value=!0}}return(f,y)=>(m(),h(t(te),{"action-button-text":o.actionButtonText,"confirmation-text":o.confirmationText,"is-visible":o.isVisible,"modal-id":o.modalId,title:o.title,type:"danger","data-testid":"delete-resource-modal",onCanceled:y[0]||(y[0]=T=>p("cancel")),onProceed:r},{"body-content":u(()=>[F(f.$slots,"body-content"),d(),s.value?(m(),h(t(ee),{key:0,class:"mt-4",appearance:"danger","is-dismissible":""},{alertMessage:u(()=>[F(f.$slots,"error")]),_:3})):A("",!0)]),_:3},8,["action-button-text","confirmation-text","is-visible","modal-id","title"]))}}),be={class:"zones"},ye={key:1,class:"kcard-stack"},_e={class:"kcard-border"},he={key:0,class:"kcard-border"},Be=K({__name:"ZoneListView",props:{selectedZoneName:{type:[String,null],required:!1,default:null},offset:{type:Number,required:!1,default:0}},setup(E){const p=E,o=ie(),{t:s}=ce(),r=ue(),f={title:"No Data",message:"There are no Zones present."},y=se(),T=de(),N=i(!0),z=i(!1),k=i(""),S=i(null),v=i({headers:[{label:"Status",key:"status"},{label:"Name",key:"entity"},{label:"Zone CP Version",key:"zoneCpVersion"},{label:"Storage type",key:"storeType"},{label:"Ingress",key:"hasIngress"},{label:"Egress",key:"hasEgress"},{label:"Warnings",key:"warnings",hideLabel:!0},{label:"Actions",key:"actions",hideLabel:!0}],data:[]}),g=i(null),M=i(null),V=i(p.offset);P(()=>y.params.mesh,function(){y.name==="zone-cp-list-view"&&w(0)}),P(()=>T.getters["config/getMulticlusterStatus"],function(e){e&&w(p.offset)},{immediate:!0});async function w(e){var n;V.value=e,Z.set("offset",e>0?e:null),N.value=!0,S.value=null;const c=Y;try{const[{items:l,next:I},{items:a},{items:D}]=await Promise.all([r.getAllZoneOverviews({size:c,offset:e}),W(r.getAllZoneIngressOverviews.bind(r)),W(r.getAllZoneEgressOverviews.bind(r))]);M.value=I,v.value.data=Q(l??[],a??[],D??[]),await q({name:p.selectedZoneName??((n=v.value.data[0])==null?void 0:n.entity.name)})}catch(l){g.value=null,v.value.data=[],l instanceof Error?S.value=l:console.error(l)}finally{N.value=!1}}function Q(e,c,n){const l=new Set(c.map(a=>a.zoneIngress.zone)),I=new Set(n.map(a=>a.zoneEgress.zone));return e.map(a=>{var B;const{name:D}=a,J={name:"zone-cp-detail-view",params:{zone:D}};let $="-",L="",R=!0;(((B=a.zoneInsight)==null?void 0:B.subscriptions)??[]).forEach(b=>{if(b.version&&b.version.kumaCp){$=b.version.kumaCp.version;const{kumaCpGlobalCompatible:X=!0}=b.version.kumaCp;R=X,b.config&&(L=JSON.parse(b.config).store.type)}});const H=ne(a.zoneInsight);return{entity:a,detailViewRoute:J,status:H,zoneCpVersion:$,storeType:L,hasIngress:l.has(a.name)?"Yes":"No",hasEgress:I.has(a.name)?"Yes":"No",withWarnings:!R}})}async function q({name:e}){if(e===void 0){g.value=null,Z.set("zone",null);return}try{g.value=await r.getZoneOverview({name:e}),Z.set("zone",e)}catch(c){console.error(c)}}async function G(){await r.deleteZone({name:k.value})}function C(e){var n;const c=((n=e==null?void 0:e.entity)==null?void 0:n.name)??(e==null?void 0:e.name)??"";z.value=!z.value,k.value=c}function j(){C(),w(0)}return(e,c)=>(m(),h(pe,null,{default:u(()=>[_(fe,{title:t(s)("zone-cps.routes.items.title")},null,8,["title"]),d(),_(me,{breadcrumbs:[{to:{name:"zone-cp-list-view"},text:t(s)("zone-cps.routes.items.breadcrumbs")}]},{default:u(()=>{var n;return[x("div",be,[t(T).getters["config/getMulticlusterStatus"]===!1?(m(),h(re,{key:0})):(m(),U("div",ye,[x("div",_e,[_(ve,{"selected-entity-name":(n=g.value)==null?void 0:n.name,"page-size":t(Y),"is-loading":N.value,error:S.value,"empty-state":f,"table-data":v.value,"table-data-is-empty":v.value.data.length===0,"show-warnings":v.value.data.some(l=>l.withWarnings),next:M.value,"page-offset":V.value,"show-delete-action":t(o)("KUMA_ZONE_CREATION_FLOW")==="enabled",onDeleteResource:C,onTableAction:q,onLoadData:w},oe({_:2},[t(o)("KUMA_ZONE_CREATION_FLOW")==="enabled"?{name:"additionalControls",fn:u(()=>[_(t(ae),{appearance:"creation",icon:"plus",to:{name:"zone-create-view"}},{default:u(()=>[d(`
                  Create Zone
                `)]),_:1})]),key:"0"}:void 0]),1032,["selected-entity-name","page-size","is-loading","error","table-data","table-data-is-empty","show-warnings","next","page-offset","show-delete-action"])]),d(),g.value!==null?(m(),U("div",he,[_(le,{"zone-overview":g.value},null,8,["zone-overview"])])):A("",!0)])),d(),z.value?(m(),h(ge,{key:2,"confirmation-text":k.value,"delete-function":G,"is-visible":z.value,"modal-id":"delete-zone-modal","action-button-text":t(s)("zones.delete.confirmModal.proceedText"),title:t(s)("zones.delete.confirmModal.title"),onCancel:C,onDelete:j},{"body-content":u(()=>[x("p",null,O(t(s)("zones.delete.confirmModal.text1",{zoneName:k.value})),1),d(),x("p",null,O(t(s)("zones.delete.confirmModal.text2")),1)]),error:u(()=>[d(O(t(s)("zones.delete.confirmModal.errorText")),1)]),_:1},8,["confirmation-text","is-visible","action-button-text","title"])):A("",!0)])]}),_:1},8,["breadcrumbs"])]),_:1}))}});export{Be as default};