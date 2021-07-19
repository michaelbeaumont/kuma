(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["wizard-mesh"],{1373:function(e,t,a){"use strict";a("99af");var n=a("e80b"),s=a.n(n);t["a"]={methods:{formatForCLI:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:'" | kumactl apply -f -',a='echo "',n=s()(e);return"".concat(a).concat(n).concat(t)}}}},"16a3":function(e,t,a){"use strict";var n=a("fc11"),s=a("f3f3"),i=a("a026");t["a"]=i["default"].extend({data:function(){return{storedData:[],storedVal:"",storedKey:""}},watch:{storedVal:function(){var e=JSON.stringify(this.storedData);localStorage.storedFormData=e}},mounted:function(){this.clearStorage()},methods:{updateStorage:function(e,t){this.storedVal=t||"",this.storedKey=e||"",this.storedData=Object(s["a"])(Object(s["a"])({},this.storedData),Object(n["a"])({},e,t)),this.$store.dispatch("updateWizardData",this.storedData),this.$emit("storageItemModified",t)},getStorageItem:function(e){var t=localStorage.storedFormData;return this.$emit("storageItemRetrieved",e),t&&t.length>0?JSON.parse(localStorage.storedFormData)[e]:null},clearStorage:function(){localStorage.removeItem("storedFormData"),this.$store.dispatch("updateWizardData",null)}}})},4190:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wizard"},[a("div",{staticClass:"wizard__content"},[a("StepSkeleton",{attrs:{steps:e.steps,"sidebar-content":e.sidebarContent,"footer-enabled":!1===e.hideScannerSiblings,"next-disabled":e.nextDisabled}},[a("template",{slot:"general"},[a("p",[e._v(" Welcome to the wizard for creating a new Mesh resource in "+e._s(e.$productName)+". We will be providing you with a few steps that will get you started. ")]),a("p",[e._v(" As you know, the "+e._s(e.$productName)+" GUI is read-only, so at the end of this wizard we will be generating the configuration that you can apply with either "),a("code",[e._v("kubectl")]),e._v(" (if you are running in Kubernetes mode) or "),a("code",[e._v("kumactl")]),e._v(" / API (if you are running in Universal mode). ")]),a("h3",[e._v(" To get started, please fill in the following information: ")]),a("KCard",{staticClass:"my-6 k-card--small",attrs:{title:"Mesh Information","has-shadow":""}},[a("template",{slot:"body"},[a("FormFragment",{attrs:{title:"Mesh name","for-attr":"mesh-name"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.validate.meshName,expression:"validate.meshName"}],staticClass:"k-input w-100",attrs:{id:"mesh-name",type:"text",placeholder:"your-mesh-name",required:""},domProps:{value:e.validate.meshName},on:{change:function(t){return e.updateStorage("meshName",t.target.value)},input:function(t){t.target.composing||e.$set(e.validate,"meshName",t.target.value)}}}),e.vmsg.meshName?a("KAlert",{attrs:{appearance:"danger",size:"small","alert-message":e.vmsg.meshName}}):e._e()],1),a("FormFragment",{attrs:{title:"Mutual TLS"}},[a("label",{staticClass:"k-input-label mx-2"},[a("input",{ref:"mtlsDisabled",staticClass:"k-input mr-2",attrs:{value:"disabled",name:"mtls",type:"radio"},domProps:{checked:!1===e.formConditions.mtlsEnabled},on:{change:function(t){e.updateStorage("meshMtls",!1),e.formConditions.mtlsEnabled=!1}}}),a("span",[e._v("Disabled")])]),a("label",{staticClass:"k-input-label mx-2"},[a("input",{staticClass:"k-input mr-2",attrs:{id:"mtls-enabled",value:"enabled",name:"mtls",type:"radio"},domProps:{checked:!0===e.formConditions.mtlsEnabled},on:{change:function(t){e.updateStorage("meshMtls",!0),e.updateStorage("meshCA","builtin"),e.formConditions.mtlsEnabled=!0}}}),a("span",[e._v("Enabled")])])]),!0===e.formConditions.mtlsEnabled?a("FormFragment",{attrs:{title:"Certificate name"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.validate.meshCAName,expression:"validate.meshCAName"}],staticClass:"k-input w-100",attrs:{id:"certificate-name",type:"text",placeholder:"your-certificate-name"},domProps:{value:e.validate.meshCAName},on:{change:function(t){return e.updateStorage("meshCAName",t.target.value)},input:function(t){t.target.composing||e.$set(e.validate,"meshCAName",t.target.value)}}})]):e._e(),!0===e.formConditions.mtlsEnabled?a("FormFragment",{attrs:{title:"Certificate Authority","for-attr":"certificate-authority"}},[a("select",{staticClass:"k-input w-100",attrs:{id:"certificate-authority",name:"certificate-authority"},on:{change:function(t){return e.updateStorage("meshCA",t.target.value)}}},[a("option",{attrs:{value:"builtin"},domProps:{selected:"builtin"===e.getStorageItem("meshCA")}},[e._v(" builtin ")]),a("option",{attrs:{value:"provided"},domProps:{selected:"provided"===e.getStorageItem("meshCA")}},[e._v(" provided ")]),a("option",{attrs:{value:"vault"},domProps:{selected:"vault"===e.getStorageItem("meshCA")}},[e._v(" vault ")])]),a("p",{staticClass:"help"},[e._v(" If you've enabled mTLS, you must select a CA. ")])]):e._e()],1)],2)],1),a("template",{slot:"logging"},[a("h3",[e._v(" Setup Logging ")]),a("p",[e._v(' You can setup as many logging backends as you need that you can later use to log traffic via the "TrafficLog" policy. In this wizard, we allow you to configure one backend, but you can add more manually if you wish. ')]),a("KCard",{staticClass:"my-6 k-card--small",attrs:{title:"Logging Configuration","has-shadow":""}},[a("template",{slot:"body"},[a("FormFragment",{attrs:{title:"Logging"}},[a("label",{staticClass:"k-input-label mx-2"},[a("input",{staticClass:"k-input mr-2",attrs:{id:"logging-disabled",value:"disabled",name:"logging",type:"radio"},domProps:{checked:!1===e.formConditions.loggingEnabled},on:{change:function(t){e.updateStorage("meshLoggingStatus",!1),e.formConditions.loggingEnabled=!1}}}),a("span",[e._v("Disabled")])]),a("label",{staticClass:"k-input-label mx-2"},[a("input",{staticClass:"k-input mr-2",attrs:{id:"logging-enabled",value:"enabled",name:"logging",type:"radio"},domProps:{checked:!0===e.formConditions.loggingEnabled},on:{change:function(t){e.updateStorage("meshLoggingStatus",!0),e.updateStorage("meshLoggingType","tcp"),e.formConditions.loggingEnabled=!0,e.formConditions.loggingType="tcp"}}}),a("span",[e._v("Enabled")])])]),!0===e.formConditions.loggingEnabled?a("FormFragment",{attrs:{title:"Backend name"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.validate.meshLoggingBackend,expression:"validate.meshLoggingBackend"}],staticClass:"k-input w-100",attrs:{id:"backend-name",type:"text",placeholder:"your-backend-name"},domProps:{value:e.validate.meshLoggingBackend},on:{change:function(t){return e.updateStorage("meshLoggingBackend",t.target.value)},input:function(t){t.target.composing||e.$set(e.validate,"meshLoggingBackend",t.target.value)}}})]):e._e(),!0===e.formConditions.loggingEnabled?a("div",[a("FormFragment",{attrs:{title:"Type"}},[a("select",{ref:"loggingTypeSelect",staticClass:"k-input w-100",attrs:{id:"logging-type",name:"logging-type"},on:{change:function(t){e.updateStorage("meshLoggingType",t.target.value),e.formConditions.loggingType=t.target.value}}},[a("option",{attrs:{value:"tcp"},domProps:{selected:"tcp"===e.getStorageItem("meshLoggingType")}},[e._v(" TCP ")]),a("option",{attrs:{value:"file"},domProps:{selected:"file"===e.getStorageItem("meshLoggingType")}},[e._v(" File ")])])]),"file"===e.formConditions.loggingType?a("FormFragment",{attrs:{title:"Path","for-attr":"backend-address"}},[a("input",{staticClass:"k-input w-100",attrs:{id:"backend-address",type:"text"},domProps:{value:e.getStorageItem("meshLoggingPath")},on:{change:function(t){return e.updateStorage("meshLoggingPath",t.target.value)}}})]):e._e(),"tcp"===e.formConditions.loggingType?a("FormFragment",{attrs:{title:"Address","for-attr":"backend-address"}},[a("input",{staticClass:"k-input w-100",attrs:{id:"backend-address",type:"text"},domProps:{value:e.getStorageItem("meshLoggingAddress")||"127.0.0.1:5000"},on:{change:function(t){return e.updateStorage("meshLoggingAddress",t.target.value)}}})]):e._e(),a("FormFragment",{attrs:{title:"Format","for-attr":"backend-format"}},[a("textarea",{staticClass:"k-input w-100 code-sample",attrs:{id:"backend-format",rows:"12"},on:{change:function(t){e.updateStorage("meshLoggingBackendFormat",t.target.value.trim())}}},[e._v(' { "start_time": "%START_TIME%", "source": "%KUMA_SOURCE_SERVICE%", "destination": "%KUMA_DESTINATION_SERVICE%", "source_address": "%KUMA_SOURCE_ADDRESS_WITHOUT_PORT%", "destination_address": "%UPSTREAM_HOST%", "duration_millis": "%DURATION%", "bytes_received": "%BYTES_RECEIVED%", "bytes_sent": "%BYTES_SENT%" } ')])])],1):e._e()],1)],2)],1),a("template",{slot:"tracing"},[a("h3",[e._v(" Setup Tracing ")]),a("p",[e._v(' You can setup as many tracing backends as you need that you can later use to log traffic via the "TrafficTrace" policy. In this wizard we allow you to configure one backend, but you can add more manually as you wish. ')]),a("KCard",{staticClass:"my-6 k-card--small",attrs:{title:"Tracing Configuration","has-shadow":""}},[a("template",{slot:"body"},[a("FormFragment",{attrs:{title:"Tracing"}},[a("label",{staticClass:"k-input-label mx-2"},[a("input",{staticClass:"k-input mr-2",attrs:{id:"tracing-disabled",value:"disabled",name:"tracing",type:"radio"},domProps:{checked:!1===e.formConditions.tracingEnabled},on:{change:function(t){e.updateStorage("meshTracingStatus",!1),e.formConditions.tracingEnabled=!1}}}),a("span",[e._v("Disabled")])]),a("label",{staticClass:"k-input-label mx-2"},[a("input",{staticClass:"k-input mr-2",attrs:{id:"tracing-enabled",value:"enabled",name:"tracing",type:"radio"},domProps:{checked:!0===e.formConditions.tracingEnabled},on:{change:function(t){e.updateStorage("meshTracingStatus",!0),e.updateStorage("meshTracingType","zipkin"),e.formConditions.tracingEnabled=!0}}}),a("span",[e._v("Enabled")])])]),!0===e.formConditions.tracingEnabled?a("FormFragment",{attrs:{title:"Backend name","for-attr":"tracing-backend-name"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.validate.meshTracingBackend,expression:"validate.meshTracingBackend"}],staticClass:"k-input w-100",attrs:{id:"tracing-backend-name",type:"text",placeholder:"your-tracing-backend-name"},domProps:{value:e.validate.meshTracingBackend},on:{change:function(t){return e.updateStorage("meshTracingBackend",t.target.value)},input:function(t){t.target.composing||e.$set(e.validate,"meshTracingBackend",t.target.value)}}})]):e._e(),!0===e.formConditions.tracingEnabled?a("FormFragment",{attrs:{title:"Type","for-attr":"tracing-type"}},[a("select",{staticClass:"k-input w-100",attrs:{id:"tracing-type",name:"tracing-type"},on:{change:function(t){return e.updateStorage("meshTracingType",t.target.value)}}},[a("option",{attrs:{value:"zipkin"},domProps:{selected:"zipkin"===e.getStorageItem("meshTracingType")}},[e._v(" Zipkin ")])])]):e._e(),!0===e.formConditions.tracingEnabled?a("FormFragment",{attrs:{title:"Sampling","for-attr":"tracing-sampling"}},[a("input",{staticClass:"k-input w-100",attrs:{id:"tracing-sampling",type:"number",step:"0.1",min:"0",max:"100"},domProps:{value:e.getStorageItem("meshTracingSampling")||99.9},on:{change:function(t){return e.updateStorage("meshTracingSampling",t.target.value)}}})]):e._e(),!0===e.formConditions.tracingEnabled?a("FormFragment",{attrs:{title:"URL","for-attr":"tracing-zipkin-url"}},[a("input",{staticClass:"k-input w-100",attrs:{id:"tracing-zipkin-url",type:"text",placeholder:"http://zipkin.url:1234"},domProps:{value:e.getStorageItem("meshTracingZipkinURL")},on:{change:function(t){return e.updateStorage("meshTracingZipkinURL",t.target.value)}}})]):e._e()],1)],2)],1),a("template",{slot:"metrics"},[a("h3",[e._v(" Setup Metrics ")]),a("p",[e._v(" You can expose metrics from every data-plane on a configurable path and port that a metrics service, like Prometheus, can use to fetch them. ")]),a("KCard",{staticClass:"my-6 k-card--small",attrs:{title:"Metrics Configuration","has-shadow":""}},[a("template",{slot:"body"},[a("FormFragment",{attrs:{title:"Metrics"}},[a("label",{staticClass:"k-input-label mx-2"},[a("input",{staticClass:"k-input mr-2",attrs:{id:"metrics-disabled",value:"disabled",name:"metrics",type:"radio"},domProps:{checked:!1===e.formConditions.metricsEnabled},on:{change:function(t){e.updateStorage("meshMetricsStatus",!1),e.formConditions.metricsEnabled=!1}}}),a("span",[e._v("Disabled")])]),a("label",{staticClass:"k-input-label mx-2"},[a("input",{staticClass:"k-input mr-2",attrs:{id:"metrics-enabled",value:"enabled",name:"metrics",type:"radio"},domProps:{checked:!0===e.formConditions.metricsEnabled},on:{change:function(t){e.updateStorage("meshMetricsStatus",!0),e.updateStorage("meshMetricsType","prometheus"),e.formConditions.metricsEnabled=!0}}}),a("span",[e._v("Enabled")])])]),!0===e.formConditions.metricsEnabled?a("FormFragment",{attrs:{title:"Backend name"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.validate.meshMetricsName,expression:"validate.meshMetricsName"}],staticClass:"k-input w-100",attrs:{id:"metrics-name",type:"text",placeholder:"your-metrics-backend-name"},domProps:{value:e.validate.meshMetricsName},on:{change:function(t){return e.updateStorage("meshMetricsName",t.target.value)},input:function(t){t.target.composing||e.$set(e.validate,"meshMetricsName",t.target.value)}}})]):e._e(),!0===e.formConditions.metricsEnabled?a("FormFragment",{attrs:{title:"Type","for-attr":"metrics-type"}},[a("select",{staticClass:"k-input w-100",attrs:{id:"metrics-type",name:"metrics-type"},on:{change:function(t){return e.updateStorage("meshMetricsType",t.target.value)}}},[a("option",{attrs:{value:"prometheus"},domProps:{selected:"prometheus"===e.getStorageItem("meshMetricsType")}},[e._v(" Prometheus ")])])]):e._e(),!0===e.formConditions.metricsEnabled?a("FormFragment",{attrs:{title:"Dataplane port","for-attr":"metrics-dataplane-port"}},[a("input",{staticClass:"k-input w-100",attrs:{id:"metrics-dataplane-port",type:"number",step:"1",min:"0",max:"65535",placeholder:"1234"},domProps:{value:e.getStorageItem("meshMetricsDataplanePort")||"5670"},on:{change:function(t){return e.updateStorage("meshMetricsDataplanePort",t.target.value)}}})]):e._e(),!0===e.formConditions.metricsEnabled?a("FormFragment",{attrs:{title:"Dataplane path","for-attr":"metrics-dataplane-path"}},[a("input",{staticClass:"k-input w-100",attrs:{id:"metrics-dataplane-path",type:"text"},domProps:{value:e.getStorageItem("meshMetricsDataplanePath")||"/metrics"},on:{change:function(t){return e.updateStorage("meshMetricsDataplanePath",t.target.value)}}})]):e._e()],1)],2)],1),a("template",{slot:"complete"},[e.codeOutput?a("div",[!1===e.hideScannerSiblings?a("div",[a("h3",[e._v(" Install a new Mesh ")]),a("p",[e._v(" Since the "+e._s(e.$productName)+" GUI is read-only mode to follow Ops best practices, please execute the following command in your shell to create the entity. "+e._s(e.$productName)+" will automatically detect when the new entity has been created. ")]),a("Tabs",{attrs:{loaders:!1,tabs:e.tabs,"has-border":!0,"initial-tab-override":e.environment}},[a("template",{slot:"kubernetes"},[a("CodeView",{attrs:{title:"Kubernetes","copy-button-text":"Copy Command to Clipboard",lang:"bash",content:e.codeOutput}})],1),a("template",{slot:"universal"},[a("CodeView",{attrs:{title:"Universal","copy-button-text":"Copy Command to Clipboard",lang:"bash",content:e.codeOutput}})],1)],2)],1):e._e(),a("Scanner",{attrs:{"loader-function":e.scanForEntity,"should-start":!0,"has-error":e.scanError,"can-complete":e.scanFound},on:{hideSiblings:e.hideSiblings}},[a("template",{slot:"loading-title"},[a("h3",[e._v("Searching…")])]),a("template",{slot:"loading-content"},[a("p",[e._v("We are looking for your mesh.")])]),a("template",{slot:"complete-title"},[a("h3",[e._v("Done!")])]),a("template",{slot:"complete-content"},[a("p",[e._v(" Your Mesh "),e.formData.meshName?a("strong",[e._v(e._s(e.formData.meshName))]):e._e(),e._v(" was found! ")]),a("p",[a("KButton",{attrs:{appearance:"primary",to:{name:"all-meshes"}}},[e._v(" See Meshes ")])],1)]),a("template",{slot:"error-title"},[a("h3",[e._v("Mesh not found")])]),a("template",{slot:"error-content"},[a("p",[e._v("We were unable to find your mesh.")])])],2)],1):a("KAlert",{attrs:{appearance:"danger"}},[a("template",{slot:"alertMessage"},[a("p",[e._v(" You haven't filled any data out yet! Please return to the first step and fill out your information. ")])])],2)],1),a("template",{slot:"mesh"},[a("h3",[e._v("Mesh")]),a("p",[e._v(" In "+e._s(e.title)+", a Mesh resource allows you to define an isolated environment for your data-planes and policies. It's isolated because the mTLS CA you choose can be different from the one configured for our Meshes. Ideally, you will have either a large Mesh with all the workloads, or one Mesh per application for better isolation. ")]),a("p",[a("a",{attrs:{href:"https://kuma.io/docs/"+e.version+"/policies/mesh/"+e.utm,target:"_blank"}},[e._v(" Learn More ")])])]),a("template",{slot:"did-you-know"},[a("h3",[e._v("Did You Know?")]),a("p",[e._v(" As you know, the GUI is read-only, but it will be providing instructions to create a new Mesh and verify everything worked well. ")])])],2)],1)])},s=[],i=(a("4de4"),a("4160"),a("b0c0"),a("4fad"),a("d3b7"),a("159b"),a("f3f3")),r=a("2f62"),o=(a("caad"),a("d81d"),a("13d5"),a("b64b"),a("2532"),a("fc11"));function l(e,t){return Object.keys(e).filter((function(e){return!t.includes(e)})).map((function(t){return Object.assign({},Object(o["a"])({},t,e[t]))})).reduce((function(e,t){return Object.assign(e,t)}),{})}var c=a("bc1e"),m=a("1373"),d=a("16a3"),g=a("2791"),u=a("251b"),p=a("4c4d"),h=a("12d5"),f=a("c3b5"),b=a("6c09"),v=a.n(b),y={name:"MeshWizard",metaInfo:{title:"Create a new Mesh"},components:{FormFragment:g["a"],Tabs:u["a"],StepSkeleton:p["a"],CodeView:h["a"],Scanner:f["a"]},mixins:[m["a"],d["a"]],data:function(){return{schema:v.a,steps:[{label:"General & Security",slug:"general"},{label:"Logging",slug:"logging"},{label:"Tracing",slug:"tracing"},{label:"Metrics",slug:"metrics"},{label:"Install",slug:"complete"}],tabs:[{hash:"#kubernetes",title:"Kubernetes"},{hash:"#universal",title:"Universal"}],sidebarContent:[{name:"mesh"},{name:"did-you-know"}],formConditions:{mtlsEnabled:!1,loggingEnabled:!1,tracingEnabled:!1,metricsEnabled:!1,loggingType:null},startScanner:!1,scanFound:!1,hideScannerSiblings:!1,scanError:!1,isComplete:!1,nextDisabled:!0,validate:{meshName:"",meshCAName:"",meshLoggingBackend:"",meshTracingBackend:"",meshMetricsName:""},vmsg:[],utm:"?utm_source=Kuma&utm_medium=Kuma-GUI"}},computed:Object(i["a"])(Object(i["a"])({},Object(r["c"])({title:"getTagline",version:"getVersion",environment:"getEnvironment",formData:"getStoredWizardData",selectedTab:"getSelectedTab"})),{},{getCleanMeshName:function(){var e=this.$store.getters.getStoredWizardData;return e?e.meshName:null},codeOutput:function(){var e=this,t=this.schema,a=Object.assign({},t),n=this.formData;if(n){var s=n.meshMtls||!1,r=n.meshLoggingStatus||!1,o=n.meshTracingStatus||!1,c=n.meshMetricsStatus||!1,m={mtls:s,logging:r,tracing:o,metrics:c},d=[];if(Object.entries(m).forEach((function(e){var t=e[1],a=e[0];t?d.filter((function(e){return e!==a})):d.push(a)})),s){a.mtls.enabled=!0;var g=a.mtls,u=this.formData.meshCA,p=this.formData.meshCAName;g.backends=[],g.enabledBackend=p,g.backends="provided"===u?[{name:p,type:u,conf:{cert:{secret:""},key:{secret:""}}}]:[{name:p,type:u}]}if(r){var h=a.logging.backends[0],f=h.format;h.conf={},h.name=n.meshLoggingBackend,h.type=n.meshLoggingType,h.format=n.meshLoggingBackendFormat||f,"tcp"===n.meshLoggingType?h.conf.address=n.meshLoggingAddress||"127.0.0.1:5000":"file"===n.meshLoggingType&&(h.conf.path=n.meshLoggingPath)}if(o){var b=a.tracing;b.backends[0].conf={},b.defaultBackend=n.meshTracingBackend,b.backends[0].type=n.meshTracingType||"zipkin",b.backends[0].name=n.meshTracingBackend,b.backends[0].conf.sampling=n.meshTracingSampling||100,b.backends[0].conf.url=n.meshTracingZipkinURL}if(c){var v=a.metrics;v.backends[0].conf={},v.enabledBackend=n.meshMetricsName,v.backends[0].type=n.meshMetricsType||"prometheus",v.backends[0].name=n.meshMetricsName,v.backends[0].conf.port=n.meshMetricsDataplanePort||5670,v.backends[0].conf.path=n.meshMetricsDataplanePath||"/metrics"}var y,k=l(a,d);y="#kubernetes"===this.selectedTab?{apiVersion:"kuma.io/v1alpha1",kind:"Mesh",metadata:{name:n.meshName},spec:k}:Object(i["a"])({type:"Mesh",name:n.meshName},k);var C=function(){return"#kubernetes"===e.selectedTab?e.formatForCLI(y,'" | kubectl apply -f -'):e.formatForCLI(y,'" | kumactl apply -f -')};return C()}}}),watch:{"validate.meshName":function(e){var t=Object(c["i"])(e);this.validate.meshName=t,this.validateMeshName(t)},"validate.meshCAName":function(e){this.validate.meshCAName=Object(c["i"])(e)},"validate.meshLoggingBackend":function(e){this.validate.meshLoggingBackend=Object(c["i"])(e)},"validate.meshTracingBackend":function(e){this.validate.meshTracingBackend=Object(c["i"])(e)},"validate.meshMetricsName":function(e){this.validate.meshMetricsName=Object(c["i"])(e)}},mounted:function(){this.$store.dispatch("updateSelectedTab","#".concat(this.environment))},methods:{hideSiblings:function(){this.hideScannerSiblings=!0},validateMeshName:function(e){e&&""!==e?(this.vmsg.meshName="",this.nextDisabled=!1):(this.vmsg.meshName="A Mesh name is required to proceed",this.nextDisabled=!0)},scanForEntity:function(){var e=this,t=this.$store.getters.getStoredWizardData.meshName;this.scanComplete=!1,this.scanError=!1,t&&this.$api.getMesh(t).then((function(t){t&&t.name.length>0?(e.isRunning=!0,e.scanFound=!0):e.scanError=!0})).catch((function(t){e.scanError=!0,console.error(t)})).finally((function(){e.scanComplete=!0}))}}},k=y,C=a("2877"),S=Object(C["a"])(k,n,s,!1,null,null,null);t["default"]=S.exports},"6c09":function(e,t,a){"use strict";e.exports={mtls:{enabledBackend:null,backends:[]},tracing:{defaultBackend:null,backends:[{name:null,type:null}]},logging:{backends:[{name:null,format:'{ "destination": "%KUMA_DESTINATION_SERVICE%", "destinationAddress": "%UPSTREAM_LOCAL_ADDRESS%", "source": "%KUMA_SOURCE_SERVICE%", "sourceAddress": "%KUMA_SOURCE_ADDRESS%", "bytesReceived": "%BYTES_RECEIVED%", "bytesSent": "%BYTES_SENT%"}',type:null}]},metrics:{enabledBackend:null,backends:[{name:null,type:null}]}}}}]);