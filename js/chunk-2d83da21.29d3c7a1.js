(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d83da21"],{3310:function(t,i,e){},"34ef":function(t,i,e){e("ec30")("Uint8",1,function(t){return function(i,e,n){return t(this,i,e,n)}})},"707a":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"analyser"}},[e("h1",[t._v("Analyser")]),e("button",{on:{click:t.clickHandler}},[t._v(" Play / Pause ")]),e("button",{on:{click:t.muteHandler}},[t._v(" "+t._s(t.isMute?"unmute":"mute")+" ")]),e("div",{attrs:{id:"config"}},[e("div",{staticClass:"audio-note"},[e("div",{staticClass:"result"},t._l(512,function(i){return e("div",{key:i,staticClass:"fftData",style:{height:t.fftArray[i-1]+2+"px"}})}))])])])},a=[],s=(e("34ef"),{name:"Analyser",data:function(){var t=window.AudioContext||window.webkitAudioContext,i=new t,e=i.createGain(),n=i.createAnalyser();return e.gain.value=1,n.fftSize=1024,n.connect(e),{isPlaying:!1,isMute:!1,source:null,audioCtx:i,gainNode:e,analyser:n,micStream:null,fftArray:new Uint8Array(n.fftSize)}},methods:{clickHandler:function(){this.isPlaying?this.stop():this.play()},muteHandler:function(){this.isMute?(this.isMute=!1,this.gainNode.gain.value=1):(this.isMute=!0,this.gainNode.gain.value=0)},play:function(){this.isPlaying=!0,this.gainNode.connect(this.audioCtx.destination),requestAnimationFrame(this.getFFTData)},stop:function(){this.isPlaying=!1,this.gainNode.disconnect(this.audioCtx.destination)},getUserMic:function(t){this.micStream=t,this.source=this.audioCtx.createMediaStreamSource(t),this.source.connect(this.analyser)},getFFTData:function(){this.fftArray=new Uint8Array(this.analyser.fftSize),this.analyser.getByteFrequencyData(this.fftArray),this.isPlaying&&requestAnimationFrame(this.getFFTData)}},mounted:function(){navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(this.getUserMic).catch(function(t){return console.log(t)})},beforeDestroy:function(){this.micStream&&this.micStream.getAudioTracks()[0].stop()}}),o=s,r=(e("e8bc"),e("2877")),c=Object(r["a"])(o,n,a,!1,null,"7214f976",null);c.options.__file="Analyser.vue";i["default"]=c.exports},e8bc:function(t,i,e){"use strict";var n=e("3310"),a=e.n(n);a.a}}]);
//# sourceMappingURL=chunk-2d83da21.29d3c7a1.js.map