(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["wizard-dataplane-kubernetes~wizard-dataplane-universal~wizard-mesh"],{"11fc":function(t,e,n){},"12d5":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"code-view"},[t.isReady?n("div",{staticClass:"code-view-content"},[t.isLoading||t.isEmpty?t._e():n("KCard",{attrs:{title:t.title,"border-variant":"noBorder"},scopedSlots:t._u([{key:"body",fn:function(){return[n("Prism",{staticClass:"code-block",attrs:{language:t.lang,code:t.codeContent}})]},proxy:!0},{key:"actions",fn:function(){return[t.content?n("KClipboardProvider",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.copyToClipboard;return[n("KPop",{attrs:{placement:"bottom"},scopedSlots:t._u([{key:"content",fn:function(){return[n("div",[n("p",[t._v("Entity copied to clipboard!")])])]},proxy:!0}],null,!0)},[n("KButton",{attrs:{appearance:"primary"},on:{click:function(){a(t.codeContent)}}},[t._v(" "+t._s(t.copyButtonText)+" ")])],1)]}}],null,!1,4222532487)}):t._e()]},proxy:!0}],null,!1,1362931160)})],1):t._e(),!0===t.loaders?n("div",[t.isLoading?n("KEmptyState",{attrs:{"cta-is-hidden":""},scopedSlots:t._u([{key:"title",fn:function(){return[n("div",{staticClass:"card-icon mb-3"},[n("KIcon",{attrs:{icon:"spinner",color:"rgba(0, 0, 0, 0.1)",size:"42"}})],1),t._v(" Data Loading... ")]},proxy:!0}],null,!1,3263214496)}):t._e(),t.isEmpty&&!t.isLoading?n("KEmptyState",{attrs:{"cta-is-hidden":""},scopedSlots:t._u([{key:"title",fn:function(){return[n("div",{staticClass:"card-icon mb-3"},[n("KIcon",{staticClass:"kong-icon--centered",attrs:{color:"var(--yellow-200)",icon:"warning","secondary-color":"var(--black-75)",size:"42"}})],1),t._v(" There is no data to display. ")]},proxy:!0}],null,!1,1612658095)}):t._e(),t.hasError?n("KEmptyState",{attrs:{"cta-is-hidden":""},scopedSlots:t._u([{key:"title",fn:function(){return[n("div",{staticClass:"card-icon mb-3"},[n("KIcon",{staticClass:"kong-icon--centered",attrs:{color:"var(--yellow-200)",icon:"warning","secondary-color":"var(--black-75)",size:"42"}})],1),t._v(" An error has occurred while trying to load this data. ")]},proxy:!0}],null,!1,822917942)}):t._e()],1):t._e()])},r=[],i=n("2ccf"),s=n.n(i),o={name:"CodeView",components:{Prism:s.a},props:{lang:{type:String,required:!0},copyButtonText:{type:String,default:"Copy to Clipboard"},title:{type:String,default:null},content:{type:String,default:null},loaders:{type:Boolean,default:!0},isLoading:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1}},computed:{isReady:function(){return!this.isEmpty&&!this.hasError&&!this.isLoading},codeContent:function(){var t=this.content;return t}}},c=o,l=(n("d279"),n("2877")),u=Object(l["a"])(c,a,r,!1,null,"01933b08",null);e["a"]=u.exports},"251b":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-container",attrs:{"data-testid":"tab-container"}},[t.$slots.tabHeader&&t.isReady?n("header",{staticClass:"tab__header"},[t._t("tabHeader")],2):t._e(),n("div",{staticClass:"tab__content-container"},[t.isReady?n("KTabs",{attrs:{tabs:t.tabs},on:{changed:function(e){return t.switchTab(e)}},scopedSlots:t._u([t._l(t.tabsSlots,(function(e){return{key:e,fn:function(){return[t._t(e)]},proxy:!0}})),{key:"warnings-anchor",fn:function(){return[n("span",{staticClass:"flex items-center with-warnings"},[n("KIcon",{staticClass:"mr-1",attrs:{color:"var(--yellow-400)",icon:"warning","secondary-color":"var(--black-75)",size:"16"}}),n("span",[t._v(" Warnings ")])],1)]},proxy:!0}],null,!0),model:{value:t.tabState,callback:function(e){t.tabState=e},expression:"tabState"}}):t._e(),!0===t.loaders?n("div",[t.isLoading?n("KEmptyState",{attrs:{"cta-is-hidden":""},scopedSlots:t._u([{key:"title",fn:function(){return[n("div",{staticClass:"card-icon mb-3"},[n("KIcon",{attrs:{icon:"spinner",color:"rgba(0, 0, 0, 0.1)",size:"42"}})],1),t._v(" Data Loading... ")]},proxy:!0}],null,!1,3263214496)}):t._e(),t.hasError?n("KEmptyState",{attrs:{"cta-is-hidden":""},scopedSlots:t._u([{key:"title",fn:function(){return[n("div",{staticClass:"card-icon mb-3"},[n("KIcon",{staticClass:"kong-icon--centered",attrs:{color:"var(--yellow-200)",icon:"warning","secondary-color":"var(--black-75)",size:"42"}})],1),t._v(" An error has occurred while trying to load this data. ")]},proxy:!0}],null,!1,822917942)}):t._e()],1):t._e()],1)])},r=[],i=(n("d81d"),n("ac1f"),n("5319"),n("027b")),s=n("75bb"),o=n("ad12"),c=n.n(o),l={name:"Tabs",components:{KEmptyState:c.a},props:{loaders:{type:Boolean,default:!0},isLoading:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},tabs:{type:Array,required:!0},hasBorder:{type:Boolean,default:!1},initialTabOverride:{type:String,default:null}},data:function(){return{tabState:this.initialTabOverride&&"#".concat(this.initialTabOverride)}},computed:{tabsSlots:function(){return this.tabs.map((function(t){return t.hash.replace("#","")}))},isReady:function(){return!1===this.loaders||!this.isEmpty&&!this.hasError&&!this.isLoading}},methods:{switchTab:function(t){i["a"].logger.info(s["a"].TABS_TAB_CHANGE,{data:{newTab:t}}),this.$emit("onTabChange",t)}}},u=l,d=(n("3be0"),n("f8f8"),n("2877")),p=Object(d["a"])(u,a,r,!1,null,"5f856b5a",null);e["a"]=p.exports},2791:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-line-wrapper"},[n("div",{staticClass:"form-line",class:{"has-equal-cols":t.equalCols}},[t.hideLabelCol?t._e():n("div",{staticClass:"form-line__col"},[n("label",{staticClass:"k-input-label",attrs:{for:t.forAttr}},[t._v(" "+t._s(t.title)+": ")])]),n("div",{staticClass:"form-line__col",class:{"is-inline":t.allInline,"is-shifted-right":t.shiftRight}},[t._t("default")],2)])])},r=[],i={name:"FormFragment",props:{title:{type:String,required:!1,default:null},forAttr:{type:String,required:!1,default:null},allInline:{type:Boolean,default:!1},hideLabelCol:{type:Boolean,default:!1},equalCols:{type:Boolean,default:!1},shiftRight:{type:Boolean,default:!1}}},s=i,o=(n("558e"),n("2877")),c=Object(o["a"])(s,a,r,!1,null,"757dc37d",null);e["a"]=c.exports},"3be0":function(t,e,n){"use strict";n("7b7d")},"4c4d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wizard-steps"},[n("div",{staticClass:"wizard-steps__content-wrapper"},[n("header",{staticClass:"wizard-steps__indicator"},[n("ul",{staticClass:"wizard-steps__indicator__controls",attrs:{role:"tablist","aria-label":"steptabs"}},t._l(t.steps,(function(e,a){return n("li",{key:e.slug,staticClass:"wizard-steps__indicator__item",class:{"is-complete":a<=t.start},attrs:{"aria-selected":t.step===e.slug?"true":"false","aria-controls":"wizard-steps__content__item--"+a}},[n("span",[t._v(" "+t._s(e.label)+" ")])])})),0)]),n("div",{staticClass:"wizard-steps__content"},[n("form",{ref:"wizardForm",attrs:{autocomplete:"off"}},t._l(t.steps,(function(e,a){return n("div",{key:e.slug,staticClass:"wizard-steps__content__item",attrs:{id:"wizard-steps__content__item--"+a,"aria-labelledby":"wizard-steps__content__item--"+a,role:"tabpanel",tabindex:"0"}},[t.step===e.slug?t._t(e.slug):t._e()],2)})),0)]),t.footerEnabled?n("footer",{staticClass:"wizard-steps__footer"},[n("KButton",{directives:[{name:"show",rawName:"v-show",value:!t.indexCanReverse,expression:"!indexCanReverse"}],attrs:{appearance:"secondary"},on:{click:t.goToPrevStep}},[t._v(" ‹ Previous ")]),n("KButton",{directives:[{name:"show",rawName:"v-show",value:!t.indexCanAdvance,expression:"!indexCanAdvance"}],attrs:{disabled:t.nextDisabled,appearance:"primary"},on:{click:t.goToNextStep}},[t._v(" Next › ")])],1):t._e()]),n("aside",{staticClass:"wizard-steps__sidebar"},[n("div",{staticClass:"wizard-steps__sidebar__content"},t._l(t.sidebarContent,(function(e,a){return n("div",{key:e.name,staticClass:"wizard-steps__sidebar__item",class:"wizard-steps__sidebar__item--"+a},[t._t(e.name)],2)})),0)])])},r=[],i=(n("4160"),n("159b"),n("fc11")),s=n("a026"),o=s["a"].extend({methods:{updateQuery:function(t,e){var n=this.$router,a=this.$route;a.query?n.push({query:Object.assign({},a.query,Object(i["a"])({},t,e))}).catch((function(){})):n.push({query:Object(i["a"])({},t,e)}).catch((function(){}))}}}),c={mixins:[o],props:{steps:{type:Array,default:function(){}},sidebarContent:{type:Array,required:!0,default:function(){}},footerEnabled:{type:Boolean,default:!0},nextDisabled:{type:Boolean,default:!0}},data:function(){return{start:0}},computed:{step:{get:function(){return this.steps[this.start].slug},set:function(t){return this.steps[t].slug}},indexCanAdvance:function(){return this.start>=this.steps.length-1},indexCanReverse:function(){return this.start<=0}},watch:{"$route.query.step":function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.start!==t&&(this.start=t,this.$emit("goToNextStep",t))}},mounted:function(){this.resetProcess(),this.setStartingStep()},methods:{goToStep:function(t){this.start=t,this.updateQuery("step",t),this.$emit("goToStep",this.step)},goToNextStep:function(){this.start++,this.updateQuery("step",this.start),this.$emit("goToNextStep",this.step)},goToPrevStep:function(){this.start--,this.updateQuery("step",this.start),this.$emit("goToPrevStep",this.step)},setStartingStep:function(){var t=this.$route.query.step;this.start=t||0},resetProcess:function(){this.start=0,this.goToStep(0),localStorage.removeItem("storedFormData");var t=this.$refs.wizardForm.querySelectorAll('input[type="text"]');t.forEach((function(t){t.setAttribute("value","")}))}}},l=c,u=(n("a1a1"),n("9b7d"),n("2877")),d=Object(u["a"])(l,a,r,!1,null,"0ffab7b9",null);e["a"]=d.exports},"558e":function(t,e,n){"use strict";n("11fc")},6113:function(t,e,n){},"62e5":function(t,e){var n;n=function(){function t(t,e){var n,a,r,i,s,o,c,l,u;null==e&&(e=""),r="",s=t.length,o=null,a=0,i=0;while(i<s){if(n=t.charAt(i),"\\"===n)r+=t.slice(i,+(i+1)+1||9e9),i++;else if("("===n)if(i<s-2)if(l=t.slice(i,+(i+2)+1||9e9),"(?:"===l)i+=2,r+=l;else if("(?<"===l){a++,i+=2,c="";while(i+1<s){if(u=t.charAt(i+1),">"===u){r+="(",i++,c.length>0&&(null==o&&(o={}),o[c]=a);break}c+=u,i++}}else r+=n,a++;else r+=n;else r+=n;i++}this.rawRegex=t,this.cleanedRegex=r,this.regex=new RegExp(this.cleanedRegex,"g"+e.replace("g","")),this.mapping=o}return t.prototype.regex=null,t.prototype.rawRegex=null,t.prototype.cleanedRegex=null,t.prototype.mapping=null,t.prototype.exec=function(t){var e,n,a,r;if(this.regex.lastIndex=0,n=this.regex.exec(t),null==n)return null;if(null!=this.mapping)for(a in r=this.mapping,r)e=r[a],n[a]=n[e];return n},t.prototype.test=function(t){return this.regex.lastIndex=0,this.regex.test(t)},t.prototype.replace=function(t,e){return this.regex.lastIndex=0,t.replace(this.regex,e)},t.prototype.replaceAll=function(t,e,n){var a;null==n&&(n=0),this.regex.lastIndex=0,a=0;while(this.regex.test(t)&&(0===n||a<n))this.regex.lastIndex=0,t=t.replace(this.regex,e),a++;return[t,a]},t}(),t.exports=n},"66d7":function(t,e,n){},"6d24":function(t,e,n){"use strict";n("6fb7")},"6d8a":function(t,e,n){var a,r;r=n("62e5"),a=function(){var t;function e(){}return e.LIST_ESCAPEES=["\\","\\\\",'\\"','"',"\0","","","","","","","","\b","\t","\n","\v","\f","\r","","","","","","","","","","","","","","","","","","",(t=String.fromCharCode)(133),t(160),t(8232),t(8233)],e.LIST_ESCAPED=["\\\\",'\\"','\\"','\\"',"\\0","\\x01","\\x02","\\x03","\\x04","\\x05","\\x06","\\a","\\b","\\t","\\n","\\v","\\f","\\r","\\x0e","\\x0f","\\x10","\\x11","\\x12","\\x13","\\x14","\\x15","\\x16","\\x17","\\x18","\\x19","\\x1a","\\e","\\x1c","\\x1d","\\x1e","\\x1f","\\N","\\_","\\L","\\P"],e.MAPPING_ESCAPEES_TO_ESCAPED=function(){var t,n,a,r;for(a={},t=n=0,r=e.LIST_ESCAPEES.length;0<=r?n<r:n>r;t=0<=r?++n:--n)a[e.LIST_ESCAPEES[t]]=e.LIST_ESCAPED[t];return a}(),e.PATTERN_CHARACTERS_TO_ESCAPE=new r("[\\x00-\\x1f]|Â|Â |â¨|â©"),e.PATTERN_MAPPING_ESCAPEES=new r(e.LIST_ESCAPEES.join("|").split("\\").join("\\\\")),e.PATTERN_SINGLE_QUOTING=new r("[\\s'\":{}[\\],&*#?]|^[-?|<>=!%@`]"),e.requiresDoubleQuoting=function(t){return this.PATTERN_CHARACTERS_TO_ESCAPE.test(t)},e.escapeWithDoubleQuotes=function(t){var e;return e=this.PATTERN_MAPPING_ESCAPEES.replace(t,function(t){return function(e){return t.MAPPING_ESCAPEES_TO_ESCAPED[e]}}(this)),'"'+e+'"'},e.requiresSingleQuoting=function(t){return this.PATTERN_SINGLE_QUOTING.test(t)},e.escapeWithSingleQuotes=function(t){return"'"+t.replace(/'/g,"''")+"'"},e}(),t.exports=a},"6fb7":function(t,e,n){},"753a":function(t,e,n){},"75bb":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a={PAGINATION_PREVIOUS_BUTTON_CLICKED:"pagination-previous-button-clicked",PAGINATION_NEXT_BUTTON_CLICKED:"pagination-next-button-clicked",SIDEBAR_ITEM_CLICKED:"sidebar-item-clicked",TABLE_REFRESH_BUTTON_CLICKED:"table-refresh-button-clicked",TABS_TAB_CHANGE:"tabs-tab-change",CREATE_MESH_CLICKED:"create-mesh-clicked",CREATE_DATA_PLANE_PROXY_CLICKED:"create-data-plane-proxy-clicked"}},7758:function(t,e,n){},"7b7d":function(t,e,n){},"98f9":function(t,e,n){"use strict";n("c11f")},"9a74":function(t,e,n){},"9b7d":function(t,e,n){"use strict";n("9a74")},a1a1:function(t,e,n){"use strict";n("7758")},a9e3:function(t,e,n){"use strict";var a=n("83ab"),r=n("da84"),i=n("94ca"),s=n("6eeb"),o=n("5135"),c=n("c6b6"),l=n("7156"),u=n("c04e"),d=n("d039"),p=n("7c73"),f=n("241c").f,h=n("06cf").f,_=n("9bf2").f,b=n("58a8").trim,g="Number",v=r[g],y=v.prototype,m=c(p(y))==g,E=function(t){var e,n,a,r,i,s,o,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=b(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+l}for(i=l.slice(2),s=i.length,o=0;o<s;o++)if(c=i.charCodeAt(o),c<48||c>r)return NaN;return parseInt(i,a)}return+l};if(i(g,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var S,C=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof C&&(m?d((function(){y.valueOf.call(n)})):c(n)!=g)?l(new v(E(e)),n,C):E(e)},x=a?f(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),T=0;x.length>T;T++)o(v,S=x[T])&&!o(C,S)&&_(C,S,h(v,S));C.prototype=y,y.constructor=C,s(r,g,C)}},c11f:function(t,e,n){},c3b5:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.shouldStart?n("div",{staticClass:"scanner"},[n("div",{staticClass:"scanner-content"},[n("KEmptyState",{attrs:{"cta-is-hidden":""},scopedSlots:t._u([{key:"title",fn:function(){return[t.isRunning?n("div",{staticClass:"card-icon mb-3"},[n("KIcon",{attrs:{icon:"spinner",color:"rgba(0, 0, 0, 0.1)",size:"42"}})],1):t._e(),t.isComplete&&!1===t.hasError&&!1===t.isRunning?n("div",{staticClass:"card-icon mb-3"},[n("IconSuccess")],1):t._e(),t.isRunning?t._t("loading-title"):t._e(),!1===t.isRunning?n("div",[t.hasError?t._t("error-title"):t._e(),t.isComplete&&!1===t.hasError?t._t("complete-title"):t._e()],2):t._e()]},proxy:!0},{key:"message",fn:function(){return[t.isRunning?t._t("loading-content"):t._e(),!1===t.isRunning?n("div",[t.hasError?t._t("error-content"):t._e(),t.isComplete&&!1===t.hasError?t._t("complete-content"):t._e()],2):t._e()]},proxy:!0}],null,!0)})],1)]):t._e()},r=[],i=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",{staticClass:"card-icon icon-success mb-3",attrs:{role:"img"}},[t._v(" ✓ ")])}),s=[],o={},c=o,l=(n("6d24"),n("2877")),u=Object(l["a"])(c,i,s,!1,null,"38718532",null),d=u.exports,p={name:"Scanner",components:{IconSuccess:d},props:{interval:{type:Number,required:!1,default:1e3},retries:{type:Number,required:!1,default:3600},shouldStart:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},loaderFunction:{type:Function,required:!0},canComplete:{type:Boolean,default:!1}},data:function(){return{i:0,isRunning:!1,isComplete:!1,intervalId:null}},watch:{shouldStart:function(t,e){t!==e&&!0===t&&this.runScanner()}},mounted:function(){!0===this.shouldStart&&this.runScanner()},beforeDestroy:function(){clearInterval(this.intervalId)},methods:{runScanner:function(){var t=this;this.isRunning=!0,this.isComplete=!1,this.intervalId=setInterval((function(){t.i++,t.loaderFunction(),t.i!==t.retries&&!0!==t.canComplete||(clearInterval(t.intervalId),t.isRunning=!1,t.isComplete=!0,t.$emit("hideSiblings",!0))}),this.interval)}}},f=p,h=(n("d929"),n("98f9"),Object(l["a"])(f,a,r,!1,null,"f8cafec6",null));e["a"]=h.exports},d279:function(t,e,n){"use strict";n("6113")},d929:function(t,e,n){"use strict";n("66d7")},e80b:function(t,e,n){var a=n("6d8a"),r="  ";function i(t){var e=typeof t;return t instanceof Array?"array":"string"==e?"string":"boolean"==e?"boolean":"number"==e?"number":"undefined"==e||null===t?"null":"hash"}function s(t,e){var n=i(t);switch(n){case"array":o(t,e);break;case"hash":c(t,e);break;case"string":u(t,e);break;case"null":e.push("null");break;case"number":e.push(t.toString());break;case"boolean":e.push(t?"true":"false");break}}function o(t,e){for(var n=0;n<t.length;n++){var a=t[n],i=[];s(a,i);for(var o=0;o<i.length;o++)e.push((0==o?"- ":r)+i[o])}}function c(t,e){for(var n in t){var a=[];if(t.hasOwnProperty(n)){var o=t[n];s(o,a);var c=i(o);if("string"==c||"null"==c||"number"==c||"boolean"==c)e.push(l(n)+": "+a[0]);else{e.push(l(n)+": ");for(var u=0;u<a.length;u++)e.push(r+a[u])}}}}function l(t){return t.match(/^[\w]+$/)?t:a.requiresDoubleQuoting(t)?a.escapeWithDoubleQuotes(t):a.requiresSingleQuoting(t)?a.escapeWithSingleQuotes(t):t}function u(t,e){e.push(l(t))}var d=function(t){"string"==typeof t&&(t=JSON.parse(t));var e=[];return s(t,e),e.join("\n")};t.exports=d},f8f8:function(t,e,n){"use strict";n("753a")}}]);