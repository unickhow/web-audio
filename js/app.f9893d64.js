(function(e){function n(n){for(var r,a,c=n[0],i=n[1],d=n[2],s=0,l=[];s<c.length;s++)a=c[s],o[a]&&l.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(n);while(l.length)l.shift()();return u.push.apply(u,d||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,a=1;a<t.length;a++){var c=t[a];0!==o[c]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1b4dc157":"a845739d","chunk-36580d79":"5ac75a82","chunk-6431513e":"a9015093","chunk-67dadcda":"2631f787","chunk-9fc743fe":"b3687328","chunk-f2579ffe":"ec26fca3","chunk-fa648558":"48a0fec4","chunk-2d83da21":"29d3c7a1","chunk-3240e3da":"7aab3b0d","chunk-6b75dc12":"40e8de76"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-1b4dc157":1,"chunk-36580d79":1,"chunk-6431513e":1,"chunk-67dadcda":1,"chunk-9fc743fe":1,"chunk-f2579ffe":1,"chunk-2d83da21":1,"chunk-3240e3da":1,"chunk-6b75dc12":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise(function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-1b4dc157":"3c17e7cd","chunk-36580d79":"77cc7592","chunk-6431513e":"fb25be48","chunk-67dadcda":"84db9229","chunk-9fc743fe":"cff73c94","chunk-f2579ffe":"11c52038","chunk-fa648558":"31d6cfe0","chunk-2d83da21":"128cd3bf","chunk-3240e3da":"12dd2747","chunk-6b75dc12":"68da599b"}[e]+".css",a=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var c=o[u],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===r||d===a))return n()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){c=s[u],d=c.getAttribute("data-href");if(d===r||d===a)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.request=r,t(o)},l.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(l)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise(function(n,t){r=o[e]=[n,t]});n.push(r[2]=u);var d,s=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e),d=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");u.type=r,u.request=a,t[1](u)}o[e]=void 0}};var f=setTimeout(function(){d({type:"timeout",target:l})},12e4);l.onerror=l.onload=d,s.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/web-audio/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=n,d=d.slice();for(var l=0;l<d.length;l++)n(d[l]);var f=s;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},2310:function(e,n,t){},2856:function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{class:{show:e.isShow},attrs:{id:"mask"}}),t("div",{class:{show:e.isShow},attrs:{id:"menu"}},[t("Nav")],1),t("div",{attrs:{id:"content"}},[t("div",{attrs:{id:"menuTrigger"},on:{click:function(n){e.isShow=!e.isShow}}},[e._v(e._s(e.isShow?"<":">"))]),t("router-view")],1)])},o=[],u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[e._v("Main")]),t("router-link",{attrs:{to:"web-audio-api"}},[e._v("Web Audio Api")]),t("router-link",{attrs:{to:"guitar-tuner"}},[e._v("Guitar Tuner")]),t("router-link",{attrs:{to:"stereo-panner-node"}},[e._v("Stereo Panner Node")]),t("router-link",{attrs:{to:"panner-node"}},[e._v("Panner Node")]),t("router-link",{attrs:{to:"source"}},[e._v("Source")]),t("router-link",{attrs:{to:"analyser"}},[e._v("Analyser")]),t("router-link",{attrs:{to:"guitar-tuner-2.0"}},[e._v("Guitar Tuner 2.0")]),t("router-link",{attrs:{to:"voice-changer"}},[e._v("VoiceChanger")])],1)},c=[],i=(t("d79f"),t("2877")),d={},s=Object(i["a"])(d,u,c,!1,null,null,null);s.options.__file="Nav.vue";var l=s.exports,f={name:"App",components:{Nav:l},data:function(){return{isShow:!1}}},h=f,p=(t("5c0b"),Object(i["a"])(h,a,o,!1,null,null,null));p.options.__file="App.vue";var v=p.exports,m=t("8c4f"),b=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},k=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"index"}},[t("h1",[e._v(" Web Audio ")]),t("div",{staticClass:"content"},[t("div",[t("p",[e._v("如同一道好料理需要具備色、香、味，一個好網站除了好內容之外，也需要透過互動性更高的視覺、聽覺，來與內容相輔相成。")]),t("p",[e._v("本系列將從 Web Audio API 出發，以說明搭配範例，從實作中逐步認識 API 規格；並挑選數個主流、有趣的 Audio 相關套件，透過 JavaScript，玩轉聲音於程式的字裡行間。")]),t("p",[e._v("歡迎您與我一同踏上這趟旅程，讓我們於科技與藝術的交會處相逢，一起在音樂中肆意漫遊。")])]),t("img",{attrs:{src:"https://i.imgur.com/5oewowO.png"}}),t("p",[e._v("這個網站會呈現文章內提到的各種範例，讀者您可以參照文章任意賞玩。")]),t("p",[e._v("程式碼放在 "),t("a",{attrs:{href:"https://github.com/schaoss/web-audio"}},[e._v("Github")])]),t("p",[e._v("參賽文章在 "),t("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20111380/ironman/1783"}},[e._v("這裡")])])])])}],g={name:"index"},_=g,w=(t("b037"),Object(i["a"])(_,b,k,!1,null,"10e70bee",null));w.options.__file="Index.vue";var y=w.exports;r["a"].use(m["a"]);var S=new m["a"]({base:"/web-audio/",routes:[{path:"/",name:"index",component:y},{path:"/web-audio-api",name:"WebAudioApi",component:function(){return t.e("chunk-6431513e").then(t.bind(null,"1b17"))}},{path:"/guitar-tuner",name:"GuitarTuner",component:function(){return t.e("chunk-f2579ffe").then(t.bind(null,"0d6e"))}},{path:"/stereo-panner-node",name:"StereoPannerNode",component:function(){return t.e("chunk-67dadcda").then(t.bind(null,"7f1f"))}},{path:"/panner-node",name:"PannerNode",component:function(){return t.e("chunk-1b4dc157").then(t.bind(null,"5d39"))}},{path:"/source",name:"Source",component:function(){return t.e("chunk-36580d79").then(t.bind(null,"5cb5"))}},{path:"/analyser",name:"Analyser",component:function(){return Promise.all([t.e("chunk-fa648558"),t.e("chunk-2d83da21")]).then(t.bind(null,"707a"))}},{path:"/guitar-tuner-2.0",name:"GuitarTuner2.0",component:function(){return Promise.all([t.e("chunk-fa648558"),t.e("chunk-6b75dc12")]).then(t.bind(null,"1fe4"))}},{path:"/voice-changer",name:"VoiceChanger",component:function(){return Promise.all([t.e("chunk-fa648558"),t.e("chunk-3240e3da")]).then(t.bind(null,"0c2b"))}},{path:"/tone",name:"Tone",component:function(){return t.e("chunk-9fc743fe").then(t.bind(null,"941e"))}}]}),P=t("2f62");r["a"].use(P["a"]);var A=new P["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:S,store:A,render:function(e){return e(v)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var r=t("2856"),a=t.n(r);a.a},abaa:function(e,n,t){},b037:function(e,n,t){"use strict";var r=t("abaa"),a=t.n(r);a.a},d79f:function(e,n,t){"use strict";var r=t("2310"),a=t.n(r);a.a}});
//# sourceMappingURL=app.f9893d64.js.map