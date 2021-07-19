(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["wizard-dataplane-universal"],{"259a":function(e,t,a){"use strict";a("c1f9")},"2ada":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wizard"},[a("div",{staticClass:"wizard__content"},[a("StepSkeleton",{attrs:{steps:e.steps,"sidebar-content":e.sidebarContent,"footer-enabled":!1===e.hideScannerSiblings,"next-disabled":e.nextDisabled}},[a("template",{slot:"general"},[a("h3",[e._v(" Create Universal Dataplane ")]),a("p",[e._v(" Welcome to the wizard to create a new Dataplane resource in "+e._s(e.title)+". We will be providing you with a few steps that will get you started. ")]),a("p",[e._v(" As you know, the "+e._s(e.$productName)+" GUI is read-only. ")]),a("h3",[e._v(" To get started, please select on what Mesh you would like to add the Dataplane: ")]),a("p",[e._v(" If you've got an existing Mesh that you would like to associate with your Dataplane, you can select it below, or create a new one using our Mesh Wizard. ")]),a("small",[e._v("Would you like to see instructions for Kubernetes? Use sidebar to change wizard!")]),a("KCard",{staticClass:"my-6",attrs:{"has-shadow":""}},[a("template",{slot:"body"},[a("FormFragment",{attrs:{title:"Choose a Mesh","for-attr":"dp-mesh","all-inline":""}},[a("div",[a("select",{directives:[{name:"model",rawName:"v-model",value:e.validate.meshName,expression:"validate.meshName"}],staticClass:"k-input w-100",attrs:{id:"dp-mesh","data-testid":"mesh-select"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.validate,"meshName",t.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""}},[e._v(" Select an existing Mesh… ")]),e._l(e.meshes.items,(function(t){return a("option",{key:t.name,domProps:{value:t.name}},[e._v(" "+e._s(t.name)+" ")])}))],2)]),a("div",[a("label",{staticClass:"k-input-label mr-4"},[e._v(" or ")]),a("KButton",{attrs:{to:{name:"create-mesh"},appearance:"primary"}},[e._v(" Create a new Mesh ")])],1)])],1)],2)],1),a("template",{slot:"topology"},[a("h3",[e._v(" Setup Dataplane Mode ")]),a("p",[e._v(" You can create a data plane for a service or a data plane for a Gateway. ")]),a("FormFragment",{attrs:{"all-inline":"","equal-cols":"","hide-label-col":"","shift-right":""}},[a("div",[a("label",{attrs:{for:"service-dataplane"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.validate.univDataplaneType,expression:"validate.univDataplaneType"}],staticClass:"k-input",attrs:{id:"service-dataplane",type:"radio",name:"dataplane-type",value:"dataplane-type-service",checked:""},domProps:{checked:e._q(e.validate.univDataplaneType,"dataplane-type-service")},on:{change:function(t){return e.$set(e.validate,"univDataplaneType","dataplane-type-service")}}}),a("span",[e._v(" Service Dataplane ")])]),a("label",{attrs:{for:"gateway-dataplane"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.validate.univDataplaneType,expression:"validate.univDataplaneType"}],staticClass:"k-input",attrs:{id:"gateway-dataplane",type:"radio",name:"dataplane-type",value:"dataplane-type-gateway"},domProps:{checked:e._q(e.validate.univDataplaneType,"dataplane-type-gateway")},on:{change:function(t){return e.$set(e.validate,"univDataplaneType","dataplane-type-gateway")}}}),a("span",[e._v(" Gateway Dataplane ")])])])]),a("FormFragment",{attrs:{"all-inline":"",title:"Service name","for-attr":"service-name"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.validate.univDataplaneServiceName,expression:"validate.univDataplaneServiceName"}],staticClass:"k-input w-100 mr-4",attrs:{id:"service-name","data-testid":"service-name",type:"text"},domProps:{value:e.validate.univDataplaneServiceName},on:{input:function(t){t.target.composing||e.$set(e.validate,"univDataplaneServiceName",t.target.value)}}})]),a("FormFragment",{attrs:{"all-inline":"",title:"Dataplane ID","for-attr":"dataplane-id"}},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.validate.univDataplaneId,expression:"validate.univDataplaneId"}],staticClass:"k-input w-100",attrs:{id:"dataplane-id",type:"text",disabled:e.validate.univDataplaneCustomIdDisabled},domProps:{value:e.validate.univDataplaneId},on:{input:function(t){t.target.composing||e.$set(e.validate,"univDataplaneId",t.target.value)}}})]),a("div",[a("KButton",{attrs:{appearance:"primary"},on:{click:function(t){e.validate.univDataplaneCustomIdDisabled=!1}}},[e._v(" Edit ")]),a("HelperTooltip",[e._v(" This is a unique ID for the Dataplane instance. ")])],1)])],1),a("template",{slot:"networking"},[a("h3",[e._v(" Networking ")]),a("p",[e._v(" It's time to now configure the networking settings so that the Dataplane can connect to the local service, and other data planes can consume your service. ")]),a("p",[a("strong",[e._v("All fields below are required to proceed.")])]),a("FormFragment",{attrs:{"all-inline":"",title:"Data Plane IP Address","for-attr":"network-address"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.validate.univDataplaneNetworkAddress,expression:"validate.univDataplaneNetworkAddress"}],staticClass:"k-input w-100",attrs:{id:"network-address",type:"text"},domProps:{value:e.validate.univDataplaneNetworkAddress},on:{input:function(t){t.target.composing||e.$set(e.validate,"univDataplaneNetworkAddress",t.target.value)}}}),a("HelperTooltip",[e._v(" The IP address that other services will use to consume this data plane. ")])],1),a("FormFragment",{attrs:{"all-inline":"","fill-first":"",title:"Data Plane Port","for-attr":"network-dataplane-port"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.validate.univDataplaneNetworkDPPort,expression:"validate.univDataplaneNetworkDPPort"}],staticClass:"k-input w-100",attrs:{id:"network-dataplane-port",type:"text"},domProps:{value:e.validate.univDataplaneNetworkDPPort},on:{input:function(t){t.target.composing||e.$set(e.validate,"univDataplaneNetworkDPPort",t.target.value)}}}),a("HelperTooltip",[e._v(" The data plane port (that other services will use to consume this service). ")])],1),a("FormFragment",{attrs:{"all-inline":"",title:"Service IP Address","for-attr":"network-service-address"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.validate.univDataplaneNetworkServiceAddress,expression:"validate.univDataplaneNetworkServiceAddress"}],staticClass:"k-input w-100",attrs:{id:"network-service-address",type:"text"},domProps:{value:e.validate.univDataplaneNetworkServiceAddress},on:{input:function(t){t.target.composing||e.$set(e.validate,"univDataplaneNetworkServiceAddress",t.target.value)}}}),a("HelperTooltip",[e._v(" The address where your service is listening on the machine. ")])],1),a("FormFragment",{attrs:{"all-inline":"",title:"Service Port","for-attr":"network-service-port"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.validate.univDataplaneNetworkServicePort,expression:"validate.univDataplaneNetworkServicePort"}],staticClass:"k-input w-100",attrs:{id:"network-service-port",type:"text"},domProps:{value:e.validate.univDataplaneNetworkServicePort},on:{input:function(t){t.target.composing||e.$set(e.validate,"univDataplaneNetworkServicePort",t.target.value)}}}),a("HelperTooltip",[e._v(" The port where your service is listening on the machine. ")])],1),a("FormFragment",{attrs:{"all-inline":"",title:"Protocol","for-attr":"network-dataplane-protocol"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.validate.univDataplaneNetworkProtocol,expression:"validate.univDataplaneNetworkProtocol"}],staticClass:"k-input w-100",attrs:{id:"network-dataplane-protocol",name:"network-dataplane-protocol"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.validate,"univDataplaneNetworkProtocol",t.target.multiple?a:a[0])}}},e._l(e.formFields.protocols,(function(t,n){return a("option",{key:n,domProps:{value:t,selected:e.validate.univDataplaneNetworkProtocol===t}},[e._v(" "+e._s(t)+" ")])})),0),a("HelperTooltip",[e._v(" The protocol of the service. ")])],1)],1),a("template",{slot:"complete"},[e.validate.meshName?a("div",[!1===e.hideScannerSiblings?a("div",[a("h3",[e._v(" Auto-Inject DPP ")]),a("p",[e._v(" It's time to first generate the credentials so that "+e._s(e.title)+" will allow the Dataplane to successfully authenticate itself with the control plane, and then finally install the Dataplane process (powered by Envoy). ")]),a("Tabs",{attrs:{loaders:!1,tabs:e.tabs,"has-border":!0,"initial-tab-override":"universal"}},[a("template",{slot:"universal"},[a("CodeView",{attrs:{title:"Generate Dataplane Token","copy-button-text":"Copy Command to Clipboard",lang:"bash",content:e.generateDpTokenCodeOutput}}),a("CodeView",{attrs:{title:"Start Dataplane Process","copy-button-text":"Copy Command to Clipboard",lang:"bash",content:e.startDpCodeOutput}})],1)],2)],1):e._e(),a("Scanner",{attrs:{"loader-function":e.scanForEntity,"should-start":!0,"has-error":e.scanError,"can-complete":e.scanFound},on:{hideSiblings:e.hideSiblings}},[a("template",{slot:"loading-title"},[a("h3",[e._v("Searching…")])]),a("template",{slot:"loading-content"},[a("p",[e._v("We are looking for your dataplane.")])]),a("template",{slot:"complete-title"},[a("h3",[e._v("Done!")])]),a("template",{slot:"complete-content"},[a("p",[e._v(" Your Dataplane "),e.validate.univDataplaneId?a("strong",[e._v(" "+e._s(e.validate.univDataplaneId)+" ")]):e._e(),e._v(" was found! ")]),a("p",[e._v(" Proceed to the next step where we will show you your new Dataplane. ")]),a("p",[a("KButton",{attrs:{appearance:"primary"},on:{click:e.compeleteDataPlaneSetup}},[e._v(" View Your Dataplane ")])],1)]),a("template",{slot:"error-title"},[a("h3",[e._v("Dataplane not found")])]),a("template",{slot:"error-content"},[a("p",[e._v("We were unable to find your dataplane.")])])],2)],1):a("KAlert",{attrs:{appearance:"danger"}},[a("template",{slot:"alertMessage"},[a("p",[e._v(" Please return to the first step and make sure to select an existing Mesh, or create a new one. ")])])],2)],1),a("template",{slot:"dataplane"},[a("h3",[e._v("Dataplane")]),a("p",[e._v(" In "+e._s(e.title)+", a Dataplane resource represents a data plane proxy running alongside one of your services. Data plane proxies can be added in any Mesh that you may have created, and in Kubernetes, they will be auto-injected by "+e._s(e.title)+". ")])]),a("template",{slot:"example"},[a("h3",[e._v("Example")]),a("p",[e._v(" Below is an example of a Dataplane resource output: ")]),a("code",[a("pre",[e._v("type: Dataplane\nmesh: default\nname: dp-echo-1\nnetworking:\n  address: 10.0.0.1\n  inbound:\n  - port: 10000\n    servicePort: 9000\n    tags:\n      kuma.io/service: echo")])])]),a("template",{slot:"switch"},[a("Switcher")],1)],2)],1)])},i=[],r=(a("99af"),a("b0c0"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("498a"),a("f3f3")),o=a("2f62"),l=a("885a"),s=a("e80b"),p=a.n(s),u=a("2791"),d=a("251b"),v=a("4c4d"),c=a("e108"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("KPop",{staticClass:"help-icon",attrs:{trigger:"hover"}},[a("a",[e._v("?")]),a("div",{attrs:{slot:"content"},slot:"content"},[e._t("default")],2)])},h=[],w={},g=w,D=a("2877"),k=Object(D["a"])(g,m,h,!1,null,null,null),f=k.exports,y=a("12d5"),b=a("c3b5"),_=a("7e44"),N=a.n(_),S={name:"DataplaneWizardUniversal",metaInfo:{title:"Create a new Dataplane on Universal"},components:{FormFragment:u["a"],Tabs:d["a"],StepSkeleton:v["a"],Switcher:c["a"],HelperTooltip:f,CodeView:y["a"],Scanner:b["a"]},data:function(){return{randString:Math.random().toString(36).substring(2,8),schema:N.a,steps:[{label:"General",slug:"general"},{label:"Topology",slug:"topology"},{label:"Networking",slug:"networking"},{label:"Install",slug:"complete"}],tabs:[{hash:"#universal",title:"Universal"}],sidebarContent:[{name:"dataplane"},{name:"example"},{name:"switch"}],startScanner:!1,scanFound:!1,hideScannerSiblings:!1,scanError:!1,isComplete:!1,validate:{meshName:"",univDataplaneType:"dataplane-type-service",univDataplaneServiceName:"",univDataplaneId:"",univDataplaneCustomIdDisabled:!0,univDataplaneNetworkAddress:null,univDataplaneNetworkServicePort:null,univDataplaneNetworkServiceAddress:"127.0.0.1",univDataplaneNetworkDPPort:null,univDataplaneNetworkProtocol:"tcp"},vmsg:[],formFields:{protocols:["tcp","http","grpc"]}}},computed:Object(r["a"])(Object(r["a"])({},Object(o["c"])({title:"getTagline",version:"getVersion",environment:"getEnvironment",formData:"getStoredWizardData",selectedTab:"getSelectedTab",meshes:"getMeshList"})),{},{getDataplaneSchema:function(){var e=Object.assign({},this.schema),t=this.validate,a=t.meshName,n=t.univDataplaneType,i=t.univDataplaneServiceName,r=t.univDataplaneId,o=t.univDataplaneNetworkAddress,l=t.univDataplaneNetworkServicePort,s=t.univDataplaneNetworkServiceAddress,p=t.univDataplaneNetworkDPPort,u=t.univDataplaneNetworkProtocol;if(a)return e.name=r,e.mesh=a,"dataplane-type-service"===n?(e.networking.gateway&&delete e.networking.gateway,e.networking={address:o,inbound:[{port:p,servicePort:l,serviceAddress:s,tags:{"kuma.io/service":i,"kuma.io/protocol":u}}]}):"dataplane-type-gateway"===n&&(e.networking.inbound&&delete e.networking.inbound,e.networking={address:o,gateway:{tags:{"kuma.io/service":i}}}),e},generateDpTokenCodeOutput:function(){var e=this.validate,t=(e.meshName,e.univDataplaneId),a="kumactl generate dataplane-token --name=".concat(t," > kuma-token-").concat(t);return a},startDpCodeOutput:function(){var e=this.validate.univDataplaneId,t="kuma-dp run \\\n      --cp-address=".concat(Object(l["b"])()," \\\n      --dataplane=",'"'.concat(p()(this.getDataplaneSchema),'"')," \\\n      --dataplane-token-file=kuma-token-").concat(e);return t},nextDisabled:function(){var e=this.validate,t=e.meshName,a=e.univDataplaneServiceName,n=e.univDataplaneId,i=e.univDataplaneNetworkAddress,r=e.univDataplaneNetworkServicePort,o=e.univDataplaneNetworkDPPort,l=e.univDataplaneNetworkProtocol;return!t.length||("1"===this.$route.query.step?!(a&&n):"2"===this.$route.query.step&&!(i&&r&&o&&l))}}),watch:{"validate.univDataplaneId":function(e){var t=e.replace(/[^a-zA-Z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim();this.validate.univDataplaneId=t},"validate.univDataplaneServiceName":function(e){var t=e.replace(/[^a-zA-Z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim(),a="".concat(e,"-").concat(this.randString).replace(/\s+/g,"-").replace(/-+/g,"-").trim();this.validate.univDataplaneServiceName=t,""===this.validate.univDataplaneServiceName?this.validate.univDataplaneId="":this.validate.univDataplaneId=a},"validate.univDataplaneNetworkServicePort":function(e){var t=e.replace(/[a-zA-Z]*$/g,"").trim();this.validate.univDataplaneNetworkServicePort=t},"validate.univDataplaneNetworkDPPort":function(e){var t=e.replace(/[a-zA-Z]*$/g,"").trim();this.validate.univDataplaneNetworkDPPort=t}},methods:{hideSiblings:function(){this.hideScannerSiblings=!0},scanForEntity:function(){var e=this,t=this.validate,a=t.meshName,n=t.univDataplaneId;this.scanComplete=!1,this.scanError=!1,a&&n&&this.$api.getDataplaneFromMesh(a,n).then((function(t){t&&t.name.length>0?(e.isRunning=!0,e.scanFound=!0):e.scanError=!0})).catch((function(t){e.scanError=!0,console.error(t)})).finally((function(){e.scanComplete=!0}))},compeleteDataPlaneSetup:function(){this.$store.dispatch("updateSelectedMesh",this.validate.meshName),localStorage.setItem("selectedMesh",this.validate.meshName),this.$router.push({name:"dataplanes",params:{mesh:this.validate.meshName}})}}},P=S,C=Object(D["a"])(P,n,i,!1,null,null,null);t["default"]=C.exports},"7e44":function(e,t,a){"use strict";e.exports={type:"Dataplane",mesh:null,name:null,networking:{}}},c1f9:function(e,t,a){},e108:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wizard-switcher"},[a("KEmptyState",{ref:"emptyState",staticClass:"my-6 wizard-empty-state",attrs:{"cta-is-hidden":"","is-error":!e.environment}},["kubernetes"===e.environment||"universal"===e.environment?a("template",{slot:"title"},[e._v(" Running on "),a("span",{staticClass:"env-name"},[e._v(e._s(e.environment))])]):e._e(),a("template",{slot:"message"},["kubernetes"===e.environment?a("div",[this.$route.name===e.wizardRoutes.kubernetes?a("div",[a("p",[e._v(" We have detected that you are running on a "),a("strong",[e._v("Kubernetes environment")]),e._v(", and we are going to be showing you instructions for Kubernetes unless you decide to visualize the instructions for Universal. ")]),a("p",[a("KButton",{attrs:{to:{name:e.wizardRoutes.universal},appearance:"primary"}},[e._v(" Switch to Universal instructions ")])],1)]):this.$route.name===e.wizardRoutes.universal?a("div",[a("p",[e._v(" We have detected that you are running on a "),a("strong",[e._v("Kubernetes environment")]),e._v(", but you are viewing instructions for Universal. ")]),a("p",[a("KButton",{attrs:{to:{name:e.wizardRoutes.kubernetes},appearance:"primary"}},[e._v(" Switch back to Kubernetes instructions ")])],1)]):e._e()]):"universal"===e.environment?a("div",[this.$route.name===e.wizardRoutes.kubernetes?a("div",[a("p",[e._v(" We have detected that you are running on a "),a("strong",[e._v("Universal environment")]),e._v(", but you are viewing instructions for Kubernetes. ")]),a("p",[a("KButton",{attrs:{to:{name:e.wizardRoutes.universal},appearance:"primary"}},[e._v(" Switch back to Universal instructions ")])],1)]):this.$route.name===e.wizardRoutes.universal?a("div",[a("p",[e._v(" We have detected that you are running on a "),a("strong",[e._v("Universal environment")]),e._v(", and we are going to be showing you instructions for Universal unless you decide to visualize the instructions for Kubernetes. ")]),a("p",[a("KButton",{attrs:{to:{name:e.wizardRoutes.kubernetes},appearance:"primary"}},[e._v(" Switch to Kubernetes instructions ")])],1)]):e._e()]):e._e()])],2)],1)},i=[],r=a("f3f3"),o=a("2f62"),l={name:"Switcher",data:function(){return{wizardRoutes:{kubernetes:"kubernetes-dataplane",universal:"universal-dataplane"}}},computed:Object(r["a"])(Object(r["a"])({},Object(o["c"])({environment:"getEnvironment"})),{},{instructionsCtaText:function(){return"universal"===this.environment?"Switch to Kubernetes instructions":"Switch to Universal instructions"},instructionsCtaRoute:function(){return"kubernetes"===this.environment?{name:"universal-dataplane"}:{name:"kubernetes-dataplane"}}})},s=l,p=(a("259a"),a("2877")),u=Object(p["a"])(s,n,i,!1,null,"74db9631",null);t["a"]=u.exports}}]);