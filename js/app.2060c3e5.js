(function(e){function n(n){for(var r,a,c=n[0],i=n[1],s=n[2],f=0,l=[];f<c.length;f++)a=c[f],o[a]&&l.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(n);while(l.length)l.shift()();return u.push.apply(u,s||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,a=1;a<t.length;a++){var c=t[a];0!==o[c]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-162656f4":"9a075ebe","chunk-2c2017d8":"dc884074","chunk-32b89c0a":"d7695c2d","chunk-46236a9a":"81cd4e69","chunk-1b54cf72":"a0eed0f8","chunk-b43f97d8":"d4ad8c13","chunk-581a165c":"1117ab08","chunk-1ecdf029":"6fd418e6","chunk-69462e73":"cfbb4467","chunk-dfcf7d22":"b1ac1db3","chunk-7e193c48":"f9c92649","chunk-81adfc14":"6baa0e8a"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-162656f4":1,"chunk-2c2017d8":1,"chunk-32b89c0a":1,"chunk-1b54cf72":1,"chunk-b43f97d8":1,"chunk-1ecdf029":1,"chunk-69462e73":1,"chunk-dfcf7d22":1,"chunk-7e193c48":1,"chunk-81adfc14":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise(function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-162656f4":"cab1fff0","chunk-2c2017d8":"d4ebcaa0","chunk-32b89c0a":"dc6b6cda","chunk-46236a9a":"31d6cfe0","chunk-1b54cf72":"7458e4f5","chunk-b43f97d8":"9b4089b5","chunk-581a165c":"31d6cfe0","chunk-1ecdf029":"84039da6","chunk-69462e73":"1eb35f3b","chunk-dfcf7d22":"8b460ea1","chunk-7e193c48":"15dcaac1","chunk-81adfc14":"355449fa"}[e]+".css",a=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var c=o[u],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===r||s===a))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){c=f[u],s=c.getAttribute("data-href");if(s===r||s===a)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.request=r,t(o)},l.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(l)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise(function(n,t){r=o[e]=[n,t]});n.push(r[2]=u);var s,f=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e),s=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");u.type=r,u.request=a,t[1](u)}o[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,f.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/web-audio/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var d=f;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},2310:function(e,n,t){},2856:function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{class:{show:e.isShow},attrs:{id:"mask"},on:{click:function(n){e.isShow=!e.isShow}}}),t("div",{class:{show:e.isShow},attrs:{id:"menu"}},[t("Nav",{nativeOn:{click:function(n){e.isShow=!1}}})],1),t("div",{attrs:{id:"content"}},[t("div",{attrs:{id:"menuTrigger"},on:{click:function(n){e.isShow=!e.isShow}}},[t("i",{class:{fas:!0,"fa-times":e.isShow,"fa-bars":!e.isShow}})]),t("router-view")],1)])},o=[],u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[e._v("Main")]),t("router-link",{attrs:{to:"web-audio-api"}},[e._v("Web Audio Api")]),t("router-link",{attrs:{to:"guitar-tuner"}},[e._v("Guitar Tuner")]),t("router-link",{attrs:{to:"stereo-panner-node"}},[e._v("Stereo Panner Node")]),t("router-link",{attrs:{to:"panner-node"}},[e._v("Panner Node")]),t("router-link",{attrs:{to:"source"}},[e._v("Source")]),t("router-link",{attrs:{to:"analyser"}},[e._v("Analyser")]),t("router-link",{attrs:{to:"guitar-tuner-2.0"}},[e._v("Guitar Tuner 2.0")]),t("router-link",{attrs:{to:"voice-changer"}},[e._v("VoiceChanger")]),t("router-link",{attrs:{to:"tone"}},[e._v("Tone")]),t("router-link",{attrs:{to:"sequencer"}},[e._v("Sequencer")])],1)},c=[],i=(t("d79f"),t("2877")),s={},f=Object(i["a"])(s,u,c,!1,null,null,null);f.options.__file="Nav.vue";var l=f.exports,d={name:"App",components:{Nav:l},data:function(){return{isShow:!1}}},h=d,p=(t("5c0b"),Object(i["a"])(h,a,o,!1,null,null,null));p.options.__file="App.vue";var b=p.exports,v=t("8c4f"),m=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},k=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"index"}},[t("h1",[e._v(" Web Audio ")]),t("div",{staticClass:"content"},[t("div",[t("p",[e._v("如同一道好料理需要具備色、香、味，一個好網站除了好內容之外，也需要透過互動性更高的視覺、聽覺，來與內容相輔相成。")]),t("p",[e._v("本系列將從 Web Audio API 出發，以說明搭配範例，從實作中逐步認識 API 規格；並挑選數個主流、有趣的 Audio 相關套件，透過 JavaScript，玩轉聲音於程式的字裡行間。")]),t("p",[e._v("歡迎您與我一同踏上這趟旅程，讓我們於科技與藝術的交會處相逢，一起在音樂中肆意漫遊。")])]),t("img",{attrs:{src:"https://i.imgur.com/5oewowO.png"}}),t("p",[e._v("這個網站會呈現文章內提到的各種範例，讀者您可以參照文章任意賞玩。")]),t("p",[e._v("程式碼放在 "),t("a",{attrs:{href:"https://github.com/schaoss/web-audio"}},[e._v("Github")])]),t("p",[e._v("參賽文章在 "),t("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20111380/ironman/1783"}},[e._v("這裡")])])])])}],g={name:"index"},_=g,w=(t("b037"),Object(i["a"])(_,m,k,!1,null,"10e70bee",null));w.options.__file="Index.vue";var y=w.exports;r["a"].use(v["a"]);var S=new v["a"]({base:"/web-audio/",routes:[{path:"/",name:"index",component:y},{path:"/web-audio-api",name:"WebAudioApi",component:function(){return t.e("chunk-7e193c48").then(t.bind(null,"1b17"))}},{path:"/guitar-tuner",name:"GuitarTuner",component:function(){return t.e("chunk-32b89c0a").then(t.bind(null,"0d6e"))}},{path:"/stereo-panner-node",name:"StereoPannerNode",component:function(){return t.e("chunk-2c2017d8").then(t.bind(null,"7f1f"))}},{path:"/panner-node",name:"PannerNode",component:function(){return t.e("chunk-81adfc14").then(t.bind(null,"5d39"))}},{path:"/source",name:"Source",component:function(){return t.e("chunk-162656f4").then(t.bind(null,"5cb5"))}},{path:"/analyser",name:"Analyser",component:function(){return Promise.all([t.e("chunk-581a165c"),t.e("chunk-69462e73")]).then(t.bind(null,"707a"))}},{path:"/guitar-tuner-2.0",name:"GuitarTuner2.0",component:function(){return Promise.all([t.e("chunk-581a165c"),t.e("chunk-dfcf7d22")]).then(t.bind(null,"1fe4"))}},{path:"/voice-changer",name:"VoiceChanger",component:function(){return Promise.all([t.e("chunk-581a165c"),t.e("chunk-1ecdf029")]).then(t.bind(null,"0c2b"))}},{path:"/tone",name:"Tone",component:function(){return Promise.all([t.e("chunk-46236a9a"),t.e("chunk-1b54cf72")]).then(t.bind(null,"941e"))}},{path:"/sequencer",name:"Sequencer",component:function(){return Promise.all([t.e("chunk-46236a9a"),t.e("chunk-b43f97d8")]).then(t.bind(null,"6072"))}}]}),P=t("2f62");r["a"].use(P["a"]);var A=new P["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:S,store:A,render:function(e){return e(b)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var r=t("2856"),a=t.n(r);a.a},abaa:function(e,n,t){},b037:function(e,n,t){"use strict";var r=t("abaa"),a=t.n(r);a.a},d79f:function(e,n,t){"use strict";var r=t("2310"),a=t.n(r);a.a}});
//# sourceMappingURL=app.2060c3e5.js.map