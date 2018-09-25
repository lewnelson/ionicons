/*! Built with http://stenciljs.com */
var t=this&&this.__generator||function(t,e){var n,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(t){r=[6,t],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}};DocsSite.loadBundle("9jntnwf0",["exports","./chunk-a980fdde.js"],function(e,n){var o=window.DocsSite.h,i=function(){function t(){this.isSticky=!1,this.query="",this.isSearchVisible=!1}return t.prototype.handleScroll=function(){requestAnimationFrame(this.checkScroll.bind(this))},t.prototype.handleResize=function(){var t=this;requestAnimationFrame(function(){window.innerWidth>768&&(t.el.querySelector("nav").style.display="",t.el.classList.remove("show-mobile-menu"),document.body.classList.remove("no-scroll"),t.isMobileMenuShown=!1)})},t.prototype.checkScroll=function(){var t=document.documentElement.scrollTop||document.body.scrollTop;this.isSticky=t>30},t.prototype.showNav=function(){if(!this.isMobileMenuShown){this.isMobileMenuShown=!0;var t=this.el.querySelector("nav");t.style.display="flex",setTimeout(function(){t.classList.add("show-mobile-menu"),document.body.classList.add("no-scroll")},1)}},t.prototype.hideNav=function(){if(this.isMobileMenuShown){this.isMobileMenuShown=!1;var t=this.el.querySelector("nav");t.classList.remove("show-mobile-menu"),setTimeout(function(){t.style.display="none",document.body.classList.remove("no-scroll")},300)}},t.prototype.render=function(){var t=this;return o("header",{class:(this.isSearchVisible?"visible-search":"")+" "+(this.isSticky?"overlay":"")},o("div",{class:"container"},o("div",{class:"logo"},o("stencil-route-link",{url:"/",exact:!0},o("svg",{width:"32px",height:"32px",viewBox:"0 0 32 32"},o("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},o("g",{id:"icon","fill-rule":"nonzero"},o("circle",{id:"circle",fill:"#EAEEF5",cx:"16",cy:"16",r:"16"}),o("circle",{id:"circle_copy",fill:"#B4C1D8",cx:"16",cy:"16",r:"11"}),o("circle",{id:"circle_copy_2",fill:"#647AA1",cx:"16",cy:"16",r:"6"}),o("circle",{id:"circle_copy_3",fill:"#647AA1",cx:"23.5",cy:"8.5",r:"2"})))),"Ionicons"),o("span",{class:"version"},this.version)),o("icon-search",{query:this.query,size:"small"}),o("nav",null,o("stencil-route-link",{class:"nav__item",url:"/",exact:!0,onClick:this.hideNav.bind(this)},"Icons"),o("stencil-route-link",{class:"nav__item",url:"/usage",onClick:function(){t.toggleHeaderSearch.emit("hide"),t.hideNav()}},"Usage"),o("a",{class:"nav__item",href:"https://github.com/ionic-team/ionicons"},"Github",o("svg",{width:"12px",height:"12px",viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},o("g",{transform:"translate(0,1)"},o("rect",{id:"bg",fill:"#e3e8f1",x:"0",y:"2",width:"9",height:"9",rx:"1.5"}),o("path",{d:"M9.18198052,1 L6.5,1 L6.5,0 L11,0 L11,1 L11,4.5 L10,4.5 L10,1.59619408 L4.02512627,7.57106781 L3.31801948,6.86396103 L9.18198052,1 Z",id:"arrow",fill:"#A4AEC3"})))),o("span",{class:"close",onClick:this.hideNav.bind(this)},o("i",{class:"ion ion-md-close"}))),o("a",{class:"btn sm-hide",href:"/ionicons.designerpack.zip"},o("svg",{width:"9px",height:"11px",viewBox:"0 0 9 11",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},o("g",null,o("rect",{id:"bg",fill:"#BAC3D1",x:"0",y:"9",width:"9",height:"2",rx:"1"}),o("path",{d:"M5,6.26776695 L7.26776695,4 L7.97487373,4.70710678 L4.70710678,7.97487373 L4.48743687,7.75520382 L4.26776695,7.97487373 L1,4.70710678 L1.70710678,4 L4,6.29289322 L4,0 L5,0 L5,6.26776695 Z",id:"arrow",fill:"#94A0B8"}))),"Designer pack"),o("span",{class:"more",onClick:this.showNav.bind(this)},o("i",{class:"ion ion-md-more"}))))},Object.defineProperty(t,"is",{get:function(){return"header-bar"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{el:{elementRef:!0},isMobileMenuShown:{state:!0},isSearchVisible:{type:Boolean,attr:"is-search-visible"},isSticky:{state:!0},query:{type:String,attr:"query"},version:{type:String,attr:"version"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"toggleHeaderSearch",method:"toggleHeaderSearch",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"window:scroll",method:"handleScroll",passive:!0},{name:"window:resize",method:"handleResize",passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"header-bar header{-webkit-transition:border .6s;transition:border .6s;position:fixed;width:100%;top:0;left:0;right:0;background:#fff;z-index:999;border-bottom:1px solid transparent;height:64px}header-bar header.overlay{border-bottom:1px solid rgba(0,0,0,.05)}header-bar .container,header-bar .logo,header-bar .logo a,header-bar nav{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}header-bar .logo,header-bar nav{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}header-bar nav{-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline}header-bar icon-search{-webkit-transition:opacity .5s;transition:opacity .5s;-webkit-box-flex:1;-ms-flex:1;flex:1;padding-left:60px;padding-right:60px;opacity:0;pointer-events:none}header-bar .visible-search icon-search{opacity:1;pointer-events:auto}header-bar .container{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-top:12px;padding-bottom:12px}header-bar .logo a{font-weight:700;font-size:16px;color:var(--color-shark)}header-bar .logo svg{margin-right:10px}header-bar .logo .version{margin-left:10px;font-size:10px;font-weight:600;color:var(--color-oslo-gray);background-color:var(--color-catskill-white);border-radius:4px;padding:1px 5px;position:relative;top:-2px}header-bar a{text-decoration:none}header-bar .nav__item+.nav__item,header-bar nav+.btn{margin-left:30px}header-bar .nav__item{font-size:13px;font-weight:600}header-bar .nav__item,header-bar .nav__item a{-webkit-transition:color .3s;transition:color .3s;color:var(--color-pale-sky)}header-bar .nav__item a:not(.link-active):hover,header-bar .nav__item:hover{color:var(--color-shark)}header-bar .nav__item .link-active{color:var(--color-heather);cursor:default}header-bar .nav__item svg{margin-left:6px}header-bar .nav__item:hover svg #arrow{-webkit-transform:translate(1px,-1px);transform:translate(1px,-1px)}header-bar .btn svg{margin-right:6px}header-bar .btn:hover svg #arrow{-webkit-transform:translate(0,1px);transform:translate(0,1px)}header-bar .more{padding:0 8px;font-size:28px;line-height:28px;color:var(--color-dodger-blue);cursor:pointer;display:none}header-bar nav span.close{display:none;font-size:28px}\@media screen and (max-width:992px){header-bar nav>*+*{margin-left:18px}header-bar icon-search{padding-left:30px;padding-right:30px}}\@media screen and (max-width:768px){header-bar .btn.sm-hide{display:none}header-bar .close,header-bar .more{cursor:pointer}header-bar .more{display:block}header-bar .nav__item+.nav__item,header-bar nav+.btn{margin-left:0;margin-top:30px}header-bar nav{-webkit-transition:opacity .3s;transition:opacity .3s;position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;z-index:99999;background-image:linear-gradient(-223deg,#363e49 0,#1c1e21 100%);-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0;display:none}header-bar nav .close{margin:0;position:absolute;top:14px;right:18px;color:#fff;cursor:pointer}header-bar .nav__item{-webkit-transition:-webkit-transform .4s;transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s;-webkit-transform:translateY(8px);transform:translateY(8px)}header-bar .nav__item,header-bar .nav__item a{font-size:28px;color:rgba(255,255,255,.9)}header-bar .nav__item .link-active{color:rgba(255,255,255,.3)}header-bar .nav__item a:not(.link-active):hover,header-bar .nav__item:hover{color:rgba(255,255,255,.9)}header-bar .nav__item svg #bg{opacity:.2}header-bar nav.show-mobile-menu{opacity:1}header-bar nav.show-mobile-menu .nav__item{-webkit-transform:translateY(0);transform:translateY(0)}header-bar nav.show-mobile-menu .close{display:block}header-bar icon-search{padding-left:20px;padding-right:15px}}\@media screen and (max-width:520px){header-bar .version{display:none}}"},enumerable:!0,configurable:!0}),t}(),r=function(){function e(){this.data={version:void 0,icons:[]},this.query="",this.isHeaderSearchVisible=!1}return e.prototype.handleScroll=function(){requestAnimationFrame(this.checkScroll.bind(this))},e.prototype.searchHandler=function(t){this.query=t.detail},e.prototype.toggleHandler=function(t){this.isHeaderSearchVisible="show"===t.detail},e.prototype.componentWillLoad=function(){this.loadData()},e.prototype.loadData=function(){return s(this,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return[4,fetch("/data.json")];case 1:return[4,t.sent().json()];case 2:return e=t.sent(),this.data=e,this.data.icons=e.icons.map(function(t){return t.icons=t.icons.reverse(),t.name=t.icons[0].split("-").slice(1).join("-"),t}),[2]}})})},e.prototype.checkScroll=function(){var t=document.querySelector("header .search-input"),e=document.querySelector("icon-list .search-input");if(e&&t){var n=t.querySelector("input"),o=e.querySelector("input");if(e.getBoundingClientRect().top<e.scrollHeight/2){if(this.isHeaderSearchVisible)return;this.isHeaderSearchVisible=!0,o===document.activeElement&&n.focus()}else{if(!this.isHeaderSearchVisible)return;this.isHeaderSearchVisible=!1,n===document.activeElement&&o.focus()}}},e.prototype.render=function(){return[o("header-bar",{version:this.data.version,query:this.query,isSearchVisible:this.isHeaderSearchVisible}),o("stencil-router",null,o("stencil-router-scroll-top",null,o("stencil-route-switch",{scrollTopOffset:0},o("stencil-route",{url:"/",component:"landing-page",exact:!0,componentProps:{query:this.query,data:this.data}}),o("stencil-route",{url:"/usage",component:"usage-page",componentProps:{data:this.data}}),o("stencil-route",{component:"notfound-page"}))))]},Object.defineProperty(e,"is",{get:function(){return"ionicons-site"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{data:{state:!0},isHeaderSearchVisible:{state:!0},query:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"window:scroll",method:"handleScroll",passive:!0},{name:"hasSearched",method:"searchHandler"},{name:"toggleHeaderSearch",method:"toggleHandler"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"stencil-router>div{height:100%}"},enumerable:!0,configurable:!0}),e}(),a=function(){function t(){this.group=null,this.groupMatch=null,this.componentUpdated=null,this.match=null,this.unsubscribe=function(){},this.componentProps={},this.exact=!1,this.routeRender=null,this.scrollTopOffset=null,this.scrollOnNextRender=!1,this.previousMatch=null}return t.prototype.computeMatch=function(){return this.previousMatch=this.match,this.group?this.groupMatch?this.match=n.matchPath(this.location.pathname,{path:this.url,exact:this.exact,strict:!0}):void 0:this.match=n.matchPath(this.location.pathname,{path:this.url,exact:this.exact,strict:!0})},t.prototype.componentDidUpdate=function(){var t=this;Promise.all(Array.from(this.el.children).map(function(t){return t.componentOnReady?t.componentOnReady():Promise.resolve(t)})).then(function(){"function"==typeof t.componentUpdated?t.componentUpdated({scrollTopOffset:t.scrollTopOffset}):t.match&&!n.matchesAreEqual(t.match,t.previousMatch)&&t.routeViewsUpdated({scrollTopOffset:t.scrollTopOffset})})},t.prototype.render=function(){if(!this.match)return null;var t=Object.assign({},this.componentProps,{history:this.history,match:this.match});return this.routeRender?this.routeRender(Object.assign({},t,{component:this.component})):this.component?o(this.component,Object.assign({},t)):void 0},Object.defineProperty(t,"is",{get:function(){return"stencil-route"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},componentUpdated:{type:"Any",attr:"component-updated"},el:{elementRef:!0},exact:{type:Boolean,attr:"exact"},group:{type:String,attr:"group"},groupMatch:{type:"Any",attr:"group-match"},history:{type:"Any",attr:"history"},historyType:{type:String,attr:"history-type"},location:{type:"Any",attr:"location",watchCallbacks:["computeMatch"]},match:{state:!0},routeRender:{type:"Any",attr:"route-render"},routeViewsUpdated:{type:"Any",attr:"route-views-updated"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"},url:{type:String,attr:"url"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"stencil-route.inactive{display:none}"},enumerable:!0,configurable:!0}),t}();n.ActiveRouter.injectProps(a,["location","history","historyType","routeViewsUpdated"]);var s=function(t,e,n,o){return new(n||(n=Promise))(function(i,r){function a(t){try{c(o.next(t))}catch(t){r(t)}}function s(t){try{c(o.throw(t))}catch(t){r(t)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,s)}c((o=o.apply(t,e||[])).next())})};var c=function(){function e(){this.group=window.crypto?([1e7].toString()+-1e3.toString()+-4e3.toString()+-8e3.toString()+-1e11.toString()).replace(/[018]/g,function(t){return(t^window.crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}):(1e17*Math.random()).toString().match(/.{4}/g).join("-"),this.scrollTopOffset=null,this.activeIndex=null}return e.prototype.componentWillLoad=function(){this.regenerateSubscribers(this.location)},e.prototype.regenerateSubscribers=function(e){return s(this,void 0,void 0,function(){var o,i=this;return t(this,function(t){return o=null,this.subscribers=Array.from(this.el.children).map(function(t,i){var r=n.matchPath(e.pathname,{path:t.url,exact:t.exact,strict:!0});return r&&null===o&&(o=i),{el:t,match:r}}),this.activeIndex===o?(this.subscribers[this.activeIndex].el.groupMatch=this.subscribers[this.activeIndex].match,[2]):(this.activeIndex=o,new Promise(function(t){var e=i.subscribers[i.activeIndex];e.el.scrollTopOffset=i.scrollTopOffset,e.el.group=i.group,e.el.groupMatch=e.match,e.el.componentUpdated=t}).then(function(t){i.queue.write(function(){i.subscribers.forEach(function(t,e){if(t.el.componentUpdated=null,e===i.activeIndex)return t.el.style.display=null;t.el.scrollTopOffset=i.scrollTopOffset,t.el.group=i.group,t.el.groupMatch=null,t.el.style.display="none"})}),i.routeViewsUpdated(Object.assign({scrollTopOffset:i.scrollTopOffset},t))}),[2])})})},e.prototype.render=function(){return o("slot",null)},Object.defineProperty(e,"is",{get:function(){return"stencil-route-switch"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{el:{elementRef:!0},group:{type:String,attr:"group",reflectToAttr:!0},location:{type:"Any",attr:"location",watchCallbacks:["regenerateSubscribers"]},queue:{context:"queue"},routeViewsUpdated:{type:"Any",attr:"route-views-updated"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"}}},enumerable:!0,configurable:!0}),e}();function l(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t||console.error.apply(console,e)}function u(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t||console.warn.apply(console,e)}n.ActiveRouter.injectProps(c,["location","routeViewsUpdated"]);var h=function(){var t,e=[];return{setPrompt:function(e){return u(null==t,"A history supports only one prompt at a time"),t=e,function(){t===e&&(t=null)}},confirmTransitionTo:function(e,n,o,i){if(null!=t){var r="function"==typeof t?t(e,n):t;"string"==typeof r?"function"==typeof o?o(r,i):(u(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),i(!0)):i(!1!==r)}else i(!0)},appendListener:function(t){var n=!0,o=function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];n&&t.apply(void 0,e)};return e.push(o),function(){n=!1,e=e.filter(function(t){return t!==o})}},notifyListeners:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];e.forEach(function(e){return e.apply(void 0,t)})}}},p=function(t){void 0===t&&(t="scrollPositions");var e=new Map;function o(t,o){if(e.set(t,o),n.storageAvailable("sessionStorage")){var i=[];e.forEach(function(t,e){i.push([e,t])}),window.sessionStorage.setItem("scrollPositions",JSON.stringify(i))}}return n.storageAvailable("sessionStorage")&&(e=window.sessionStorage.getItem(t)?new Map(JSON.parse(window.sessionStorage.getItem(t))):e),"scrollRestoration"in history&&(history.scrollRestoration="manual"),{set:o,get:function(t){return e.get(t)},has:function(t){return e.has(t)},capture:function(t){o(t,[window.scrollX,window.scrollY])}}},d=function(){try{return window.history.state||{}}catch(t){return{}}},f={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+n.stripLeadingSlash(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:n.stripLeadingSlash,decodePath:n.addLeadingSlash},slash:{encodePath:n.addLeadingSlash,decodePath:n.addLeadingSlash}},y=function(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)},g=function(t){var e=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,e>=0?e:0)+"#"+t)},m={browser:function(t){void 0===t&&(t={}),l(f.canUseDOM,"Browser history needs a DOM");var e=window.history,n=f.supportsHistory(),o=!f.supportsPopStateOnHashChange(),i=p(),r=t.forceRefresh,a=void 0!==r&&r,s=t.getUserConfirmation,c=void 0===s?y:s,f=t.__chunk_1,y=t.getConfirmation,g=t.keyLength,m=void 0===g?6:g,v=t.basename?f.stripTrailingSlash(f.addLeadingSlash(t.basename)):"",b=function(t){var e=(t=t||{}).key,n=t.state,o=window.location,i=o.pathname+o.search+o.hash;return u(!v||f.hasBasename(i,v),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+i+'" to begin with "'+v+'".'),v&&(i=f.stripBasename(i,v)),f.createLocation(i,n,e)},w=function(){return Math.random().toString(36).substr(2,m)},S=h(),P=function(t){i.capture(R.location.key),Object.assign(R,t),R.location.scrollPosition=i.get(R.location.key),R.length=e.length,S.notifyListeners(R.location,R.action)},O=function(t){f.isExtraneousPopstateEvent(t)||T(b(t.state))},x=function(){T(b(d()))},L=!1,T=function(t){L?(L=!1,P()):S.confirmTransitionTo(t,"POP",c,function(e){e?P({action:"POP",location:t}):k(t)})},k=function(t){var e=M.indexOf(R.location.key);-1===e&&(e=0);var n=M.indexOf(t.key);-1===n&&(n=0);var o=e-n;o&&(L=!0,H(o))},A=b(d()),M=[A.key],j=function(t){return v+f.createPath(t)},H=function(t){e.go(t)},E=0,U=function(t){1===(E+=t)?(f.addEventListener(window,"popstate",O),o&&f.addEventListener(window,"hashchange",x)):0===E&&(f.removeEventListener(window,"popstate",O),o&&f.removeEventListener(window,"hashchange",x))},q=!1,R={length:e.length,action:"POP",location:A,createHref:j,push:function(t,o){u(!("object"==typeof t&&void 0!==t.state&&void 0!==o),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");var i=f.createLocation(t,o,w(),R.location);S.confirmTransitionTo(i,"PUSH",c,function(t){if(t){var o=j(i),r=i.state;if(n)if(e.pushState({key:i.key,state:r},null,o),a)window.location.href=o;else{var s=M.indexOf(R.location.key),c=M.slice(0,-1===s?0:s+1);c.push(i.key),M=c,P({action:"PUSH",location:i})}else u(void 0===r,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=o}})},replace:function(t,o){u(!("object"==typeof t&&void 0!==t.state&&void 0!==o),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");var i=f.createLocation(t,o,w(),R.location);S.confirmTransitionTo(i,"REPLACE",c,function(t){if(t){var o=j(i),r=i.state;if(n)if(e.replaceState({key:i.key,state:r},null,o),a)window.location.replace(o);else{var s=M.indexOf(R.location.key);-1!==s&&(M[s]=i.key),P({action:"REPLACE",location:i})}else u(void 0===r,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(o)}})},go:H,goBack:function(){return H(-1)},goForward:function(){return H(1)},block:function(t){void 0===t&&(t="");var e=S.setPrompt(t);return q||(U(1),q=!0),function(){return q&&(q=!1,U(-1)),e()}},listen:function(t){var e=S.appendListener(t);return U(1),function(){U(-1),e()}}};return R},hash:function(t){void 0===t&&(t={}),l(r.canUseDOM,"Hash history needs a DOM");var e=window.history,n=r.supportsGoWithoutReloadUsingHash(),o=t.getUserConfirmation,i=void 0===o?a:o,r=t.__chunk_1,a=t.getConfirmation,s=t.hashType,c=void 0===s?"slash":s,p=t.basename?r.stripTrailingSlash(r.addLeadingSlash(t.basename)):"",d=f[c],m=d.encodePath,v=d.decodePath,b=function(){var t=v(y());return u(!p||r.hasBasename(t,p),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+p+'".'),p&&(t=r.stripBasename(t,p)),r.createLocation(t)},w=h(),S=function(t){Object.assign(R,t),R.length=e.length,w.notifyListeners(R.location,R.action)},P=!1,O=null,x=function(){var t=y(),e=m(t);if(t!==e)g(e);else{var n=b();if(!P&&r.locationsAreEqual(R.location,n))return;if(O===r.createPath(n))return;O=null,L(n)}},L=function(t){P?(P=!1,S()):w.confirmTransitionTo(t,"POP",i,function(e){e?S({action:"POP",location:t}):T(t)})},T=function(t){var e=j.lastIndexOf(r.createPath(R.location));-1===e&&(e=0);var n=j.lastIndexOf(r.createPath(t));-1===n&&(n=0);var o=e-n;o&&(P=!0,H(o))},k=y(),A=m(k);k!==A&&g(A);var M=b(),j=[r.createPath(M)],H=function(t){u(n,"Hash history go(n) causes a full page reload in this browser"),e.go(t)},E=0,U=function(t){1===(E+=t)?r.addEventListener(window,"hashchange",x):0===E&&r.removeEventListener(window,"hashchange",x)},q=!1,R={length:e.length,action:"POP",location:M,createHref:function(t){return"#"+m(p+r.createPath(t))},push:function(t,e){u(void 0===e,"Hash history cannot push state; it is ignored");var n=r.createLocation(t,void 0,void 0,R.location);w.confirmTransitionTo(n,"PUSH",i,function(t){if(t){var e=r.createPath(n),o=m(p+e);if(y()!==o){O=e,window.location.hash=o;var i=j.lastIndexOf(r.createPath(R.location)),a=j.slice(0,-1===i?0:i+1);a.push(e),j=a,S({action:"PUSH",location:n})}else u(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),S()}})},replace:function(t,e){u(void 0===e,"Hash history cannot replace state; it is ignored");var n=r.createLocation(t,void 0,void 0,R.location);w.confirmTransitionTo(n,"REPLACE",i,function(t){if(t){var e=r.createPath(n),o=m(p+e);y()!==o&&(O=e,g(o));var i=j.indexOf(r.createPath(R.location));-1!==i&&(j[i]=e),S({action:"REPLACE",location:n})}})},go:H,goBack:function(){return H(-1)},goForward:function(){return H(1)},block:function(t){void 0===t&&(t="");var e=w.setPrompt(t);return q||(U(1),q=!0),function(){return q&&(q=!1,U(-1)),e()}},listen:function(t){var e=w.appendListener(t);return U(1),function(){U(-1),e()}}};return R}},v=function(){function e(){var t=this;this.root="/",this.historyType="browser",this.titleSuffix="",this.scrollTopOffset=null,this.routeViewsUpdated=function(e){void 0===e&&(e={}),t.scrollTo(e.scrollTopOffset||t.scrollTopOffset)}}return e.prototype.componentWillLoad=function(){var e=this;this.history=m[this.historyType](),this.history.listen(function(n){return o=e,i=void 0,a=function(){return t(this,function(t){return n=this.getLocation(n),this.location=n,[2]})},new((r=void 0)||(r=Promise))(function(t,e){function n(t){try{c(a.next(t))}catch(t){e(t)}}function s(t){try{c(a.throw(t))}catch(t){e(t)}}function c(e){e.done?t(e.value):new r(function(t){t(e.value)}).then(n,s)}c((a=a.apply(o,i||[])).next())});var o,i,r,a}),this.location=this.getLocation(this.history.location)},e.prototype.scrollTo=function(t){var e=this;if(null!=t&&!this.isServer&&this.history)return this.queue.write("POP"===this.history.action&&null!=this.history.location.scrollPosition?function(){window.scrollTo(e.history.location.scrollPosition[0],e.history.location.scrollPosition[1])}:function(){window.scrollTo(0,t)})},e.prototype.getLocation=function(t){var e=0==t.pathname.indexOf(this.root)?"/"+t.pathname.slice(this.root.length):t.pathname;return Object.assign({},t,{pathname:e})},e.prototype.render=function(){return o(n.ActiveRouter.Provider,{state:{historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated}},o("slot",null))},Object.defineProperty(e,"is",{get:function(){return"stencil-router"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{history:{state:!0},historyType:{type:String,attr:"history-type"},isServer:{context:"isServer"},location:{state:!0},queue:{context:"queue"},root:{type:String,attr:"root"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"},titleSuffix:{type:String,attr:"title-suffix"}}},enumerable:!0,configurable:!0}),e}();e.HeaderBar=i,e.IoniconsSite=r,e.StencilRoute=a,e.StencilRouteSwitch=c,e.StencilRouter=v,Object.defineProperty(e,"__esModule",{value:!0})});