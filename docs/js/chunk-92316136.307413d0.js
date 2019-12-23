(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-92316136"],{"0847":function(e,t,i){"use strict";t["a"]=function(e){if("suspended"===e.state&&"ontouchstart"in window){var t=function t(){e.resume().then((function(){document.body.removeEventListener("touchstart",t),document.body.removeEventListener("touchend",t)}))};document.body.addEventListener("touchstart",t,!1),document.body.addEventListener("touchend",t,!1)}}},"0a76":function(e,t,i){},"452c":function(e,t,i){e.exports=i.p+"media/Rainy_Day_Games.6e7525ec.mp3"},"4e65":function(e,t,i){"use strict";var n=i("0a76"),a=i.n(n);a.a},"5cb5":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"source"}},[i("h1",[e._v("Source")]),i("button",{on:{click:e.clickHandler}},[e._v(" Play / Pause ")]),i("button",{on:{click:e.reset}},[e._v(" Reset ")]),i("div",{attrs:{id:"config"}},[i("div",{staticClass:"audio-note"},[i("h3",[i("span",[e._v("音源：")]),i("select",{on:{change:function(t){e.sourceType=t.target.value}}},[i("option",{attrs:{value:"0"}},[e._v("振盪器")]),i("option",{attrs:{value:"1"}},[e._v("Audio Tag")]),i("option",{attrs:{value:"2"}},[e._v("麥克風")])])]),i("div",{directives:[{name:"show",rawName:"v-show",value:"0"===e.sourceType,expression:"sourceType==='0'"}]},[i("div",{staticClass:"item"},[i("label",{attrs:{for:"waveType"}},[e._v("type : "),i("span",[e._v(e._s(e.waveType))])]),i("select",{directives:[{name:"model",rawName:"v-model",value:e.waveType,expression:"waveType"}],attrs:{id:"waveType"},on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.waveType=t.target.multiple?i:i[0]},e.changeHandler]}},[i("option",{attrs:{value:"sine",selected:""}},[e._v("sine")]),i("option",{attrs:{value:"square"}},[e._v("square")]),i("option",{attrs:{value:"sawtooth"}},[e._v("sawtooth")]),i("option",{attrs:{value:"triangle"}},[e._v("triangle")])])]),i("div",{staticClass:"item"},[i("label",{attrs:{for:"frequency"}},[e._v("frequency : "),i("span",[e._v(e._s(e.frequency))])]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.frequency,expression:"frequency"}],attrs:{type:"range",min:"0",max:"4000",step:"1",id:"frequencyRange"},domProps:{value:e.frequency},on:{input:e.changeHandler,__r:function(t){e.frequency=t.target.value}}})]),i("div",{staticClass:"item"},[i("label",{attrs:{for:"detune"}},[e._v("detune : "),i("span",[e._v(e._s(e.detune))])]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.detune,expression:"detune"}],attrs:{type:"range",min:"-2000",max:"2000",step:"1",vid:"detuneRange"},domProps:{value:e.detune},on:{input:e.changeHandler,__r:function(t){e.detune=t.target.value}}})])]),i("div",{directives:[{name:"show",rawName:"v-show",value:"1"===e.sourceType,expression:"sourceType==='1'"}]},[e._m(0)]),i("div",{directives:[{name:"show",rawName:"v-show",value:"2"===e.sourceType,expression:"sourceType ==='2'"}]},[i("div",{staticClass:"item"},[e._v(e._s(e.micOutput))])])])])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"item"},[n("audio",{attrs:{id:"player",controls:"",preload:""}},[n("source",{attrs:{src:i("452c"),type:"audio/mp3"}})])])}],s=i("0847"),o={name:"Source",data:function(){var e=window.AudioContext||window.webkitAudioContext,t=new e,i=t.createGain();return{isPlaying:!1,sourceType:"0",source:null,audioCtx:t,gainNode:i,waveType:"sine",frequency:440,detune:0,audioSource:null,micStream:null,micOutput:[]}},methods:{clickHandler:function(){this.isPlaying?this.stop():this.play()},changeHandler:function(){this.setNoteConfig()},reset:function(){this.waveType="sine",this.frequency=440,this.detune=0,this.setNoteConfig()},play:function(){this.isPlaying=!0,this.gainNode.connect(this.audioCtx.destination)},stop:function(){this.isPlaying=!1,this.gainNode.disconnect(this.audioCtx.destination)},setNoteConfig:function(){"0"===this.sourceType&&(this.source.type=this.waveType,this.source.frequency.value=this.frequency,this.source.detune.value=this.detune)},getUserMic:function(e){var t=this;this.micStream=e,this.source=this.audioCtx.createMediaStreamSource(e);var i=this.audioCtx.createScriptProcessor(1024,1,1);i.onaudioprocess=function(e){for(var i=e.inputBuffer.getChannelData(0),n=e.outputBuffer.getChannelData(0),a=0;a<i.length;a++)n[a]=i[a];t.micOutput=n},this.source.connect(i),i.connect(this.gainNode)}},watch:{sourceType:{handler:function(e,t){switch(this.isPlaying&&this.stop(),this.source&&("0"===t?this.source.stop():"1"===t?document.querySelector("audio").pause():"2"===t&&this.micStream.getAudioTracks()[0].stop()),e){default:case"0":this.source=this.audioCtx.createOscillator(),this.source.start(),this.source.connect(this.gainNode);break;case"1":var i=document.querySelector("audio");i.play(),this.audioSource||(this.audioSource=this.audioCtx.createMediaElementSource(i)),this.source=this.audioSource,this.source.connect(this.gainNode);break;case"2":navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(this.getUserMic).catch((function(e){return console.log(e)}));break}},immediate:!0}},mounted:function(){Object(s["a"])(this.audioCtx),this.setNoteConfig()},beforeDestroy:function(){this.isPlaying&&this.gainNode.disconnect(this.audioCtx.destination),this.micStream&&this.micStream.getAudioTracks()[0].stop()}},r=o,u=(i("4e65"),i("2877")),c=Object(u["a"])(r,n,a,!1,null,"08d946d0",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-92316136.307413d0.js.map