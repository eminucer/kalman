(function(t){function e(e){for(var a,r,l=e[0],o=e[1],h=e[2],c=0,d=[];c<l.length;c++)r=l[c],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,h||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,l=1;l<i.length;l++){var o=i[l];0!==s[o]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var a={},s={app:0},n=[];function r(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=a,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/kalman/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var h=0;h<l.length;h++)e(l[h]);var u=o;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var a=i("64a9"),s=i.n(a);s.a},"0427":function(t,e,i){"use strict";var a=i("1643"),s=i.n(a);s.a},1643:function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var a=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Kalman")],1)},n=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",{staticClass:"title"},[t._v("Kalman Filter 2D demo")]),i("h3",{staticClass:"subtitle"},[t._v("Antonio Vivace, June 2019")]),i("mu-row",{staticClass:"stats",attrs:{gutter:""}},[i("mu-col",{staticStyle:{"padding-left":"15%","padding-right":"15%"},attrs:{sm:"12",md:"12",lg:"12",span:"12"}},[t._v("\nGreen points are artifically generated applying noise to the real input path according to the set covariance. This dirty path is then fed into the Kalman algorithm, which proceeds to clean it up. "),i("br"),t._v("Finally, the filtered path is shown in red. Check "),i("a",{attrs:{href:"https://courses.engr.illinois.edu/ece420/sp2017/UnderstandingKalmanFilter.pdf"}},[t._v("here")]),t._v(" for a detailed explanation of the intuition behind the this. "),i("br"),i("br"),t._v('Select "Mouse" as mode and then hover your mouse on the canvas to draw path yourself.')])],1),i("br"),i("br"),i("mu-row",{staticClass:"stats",attrs:{gutter:""}},[i("mu-col",{staticStyle:{"padding-left":"5%","padding-right":"2.5%",padding:"15px"},attrs:{sm:"12",md:"12",lg:"4",span:"12"}},[i("div",{staticClass:"grid-cell"},[i("mu-button",{attrs:{color:t.startBtnColor},on:{click:t.handleStartButton}},[i("mu-icon",{attrs:{value:t.startBtnIcon}}),t._v(t._s(t.startBtnText))],1),t._v(" \n\t\t\t\t\t"),i("mu-button",{attrs:{color:"red"},on:{click:t.init}},[i("mu-icon",{attrs:{value:"undo"}}),t._v(" Reset")],1),i("br"),i("br"),t._v("\n\n\t\t\t\t\tMode:\n\t\t\t\t\t"),i("mu-select",{on:{change:t.init},model:{value:t.mode,callback:function(e){t.mode=e},expression:"mode"}},t._l(t.options,(function(t,e){return i("mu-option",{key:t,attrs:{label:t,value:e}})})),1),i("br"),t._v("\n\t\t\t\t\t(Target) Frame Rate: "+t._s(t.framerate)+" FPS\n\t\t\t\t\t"),i("mu-slider",{staticClass:"slider",attrs:{type:"range",min:0,max:80,step:1,value:"50"},model:{value:t.framerate,callback:function(e){t.framerate=e},expression:"framerate"}}),t._v("\n\t\t\t\t\tTTL: "+t._s(t.ttl)+"\n\t\t\t\t\t"),i("mu-slider",{staticClass:"slider",attrs:{type:"range",min:0,max:200,step:1,value:"50"},model:{value:t.ttl,callback:function(e){t.ttl=e},expression:"ttl"}}),t._v("\n\t\t\t\t\tNoise covariance: "+t._s(t.sigma)+"\n\t\t\t\t\t"),i("mu-slider",{staticClass:"demo-slider",attrs:{min:0,max:t.width/3,step:1},model:{value:t.sigma,callback:function(e){t.sigma=e},expression:"sigma"}}),t._v("\n\t\t\t\t\tPrediction Steps : "+t._s(t.predSteps)+"\n\t\t\t\t\t"),i("mu-slider",{staticClass:"demo-slider",attrs:{min:1,max:50,step:1},model:{value:t.predSteps,callback:function(e){t.predSteps=e},expression:"predSteps"}}),i("mu-checkbox",{attrs:{label:"Real Path"},model:{value:t.drawReal,callback:function(e){t.drawReal=e},expression:"drawReal"}}),i("mu-checkbox",{attrs:{label:"Noisy"},model:{value:t.drawNoisy,callback:function(e){t.drawNoisy=e},expression:"drawNoisy"}}),i("mu-checkbox",{attrs:{label:"Noisy Path"},model:{value:t.drawNoisyTraj,callback:function(e){t.drawNoisyTraj=e},expression:"drawNoisyTraj"}}),i("mu-checkbox",{attrs:{label:"Filtered"},model:{value:t.drawFiltered,callback:function(e){t.drawFiltered=e},expression:"drawFiltered"}}),i("mu-checkbox",{attrs:{label:"Filtered Path"},model:{value:t.drawFilteredTraj,callback:function(e){t.drawFilteredTraj=e},expression:"drawFilteredTraj"}}),i("mu-checkbox",{attrs:{label:"Prediction"},model:{value:t.prediction,callback:function(e){t.prediction=e},expression:"prediction"}}),i("br"),i("br"),t._v("\n\t\t\t\t\tCanvas"),i("br"),t._v("\n\t\t\t\t\tWidth: "+t._s(t.width)+"px"),i("br"),t.showCanvasControls?i("mu-slider",{staticClass:"slider",attrs:{type:"range",min:0,max:1800,step:1,value:"75"},model:{value:t.widthC,callback:function(e){t.widthC=e},expression:"widthC"}}):t._e(),t._v("\n\t\t\t\t\tHeight: "+t._s(t.height)+"px"),i("br"),t.showCanvasControls?i("mu-slider",{staticClass:"slider",attrs:{type:"range",min:0,max:1e3,step:1,value:"75"},model:{value:t.height,callback:function(e){t.height=e},expression:"height"}}):t._e(),i("br"),t._v("\n\t\t\t\t\tstatus: "+t._s(t.status)),i("br"),i("code",[t._v(t._s(t.states.length))]),t._v(" states drawn."),i("br"),i("code",[t._v(t._s(Math.round(t.ms)))]),t._v(" ms per frame\n\t\t\t\t")],1)]),i("mu-col",{attrs:{sm:"12",md:"12",lg:"8",span:"12"}},[i("div",{staticClass:"grid-cell"},[i("canvas",{ref:"ccont",staticClass:"kalmandemo",attrs:{width:t.widthC,height:t.heightC},on:{mouseleave:t.mouseLeave,pointermove:t.mouseOver}})])])],1),i("br"),i("br"),i("br"),i("br"),i("br"),i("span",{staticClass:"stats"}),t._m(0)],1)},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("small",{staticStyle:{"font-size":"1rem"}},[i("p",[i("a",{staticStyle:{color:"#2c3e50"},attrs:{href:"https://github.com/avivace/kalman"}},[i("img",{staticStyle:{"vertical-align":"text-bottom"},attrs:{height:"24px",src:"https://akveo.github.io/eva-icons/outline/svg/github-outline.svg"}}),t._v(" Source Code")]),t._v(", "),i("a",{staticStyle:{color:"#2c3e50"},attrs:{href:"https://github.com/avivace/kalman#references-and-papers"}},[t._v(" references ")])])])}],o=(i("6c7b"),i("6b54"),i("d225")),h=i("b0b4"),u=i("bd86");(function(){function t(t,e){return isNaN(t)?e:t}Math.randomGaussian=function(e,i){if(e=t(e,0),i=t(i,1),void 0!==Math.randomGaussian.nextGaussian){var a=Math.randomGaussian.nextGaussian;return delete Math.randomGaussian.nextGaussian,a*i+e}var s,n,r,l;do{s=2*Math.random()-1,n=2*Math.random()-1,r=s*s+n*n}while(r>=1||0==r);return l=Math.sqrt(-2*Math.log(r)/r),Math.randomGaussian.nextGaussian=n*l,s*l*i+e},Math.getGaussianFunction=function(e,i,a){return e=t(e,0),i=t(i,1),a=t(a,1),function(t){return a*Math.pow(Math.E,-Math.pow(t-e,2)/(i*i*2))}}})();var c={data:function(){var t;return t={width:350,height:350,heightC:700,widthC:700,ctx:null,lastCalledTime:null,fps:0,framecount:0,status:"paused",states:[],framerate:60,lastPoint:null,A:null,B:null,H:null,Q:null,R:null},Object(u["a"])(t,"B",null),Object(u["a"])(t,"c",null),Object(u["a"])(t,"last",null),Object(u["a"])(t,"ms",0),Object(u["a"])(t,"mode",1),Object(u["a"])(t,"options",["Mouse","Square Path","1D","Random Path"]),Object(u["a"])(t,"realPoint",null),Object(u["a"])(t,"drawPhase",0),Object(u["a"])(t,"sigma",15),Object(u["a"])(t,"startBtnText","Start"),Object(u["a"])(t,"startBtnIcon","play_arrow"),Object(u["a"])(t,"startBtnColor","blue"),Object(u["a"])(t,"traj",!1),Object(u["a"])(t,"drawReal",!1),Object(u["a"])(t,"drawNoisy",!0),Object(u["a"])(t,"drawNoisyTraj",!1),Object(u["a"])(t,"drawFiltered",!0),Object(u["a"])(t,"drawFilteredTraj",!0),Object(u["a"])(t,"drawPrediction",!1),Object(u["a"])(t,"prediction",!1),Object(u["a"])(t,"predSteps",7),Object(u["a"])(t,"ttl",50),Object(u["a"])(t,"oldmov",null),Object(u["a"])(t,"oldoldmov",null),Object(u["a"])(t,"cscale",1),Object(u["a"])(t,"showCanvasControls",!1),t},mounted:function(){var t=this.$refs.ccont;this.ctx=t.getContext("2d",{alpha:!1}),this.ctx.scale(2,2),this.handleStartButton()},methods:{handleStartButton:function(){this.init(),this.frame(),this.showCanvasControls=!1,"paused"==this.status?(this.status="running",this.startBtnText="Pause",this.startBtnIcon="pause"):(this.status="paused",this.startBtnText="Start",this.startBtnIcon="play_arrow")},getRandomInt:function(t){return Math.floor(Math.random()*Math.floor(t))},mouseLeave:function(){},mouseOver:function(t){var e=this.$refs.ccont,i=e.getBoundingClientRect();this.clientX=t.clientX-i.left,this.clientY=t.clientY-i.top},init:function(){this.drawPhase=0,this.states=[],this.realPoint=null;var t=window.$M,e=window.$V;this.c=e([0,0,0,0]),this.A=t([[1,0,.2,0],[0,1,0,.2],[0,0,1,0],[0,0,0,1]]),this.B=t([[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]),this.H=t([[1,0,1,0],[0,1,0,1],[0,0,0,0],[0,0,0,0]]),this.Q=t([[0,0,0,0],[0,0,0,0],[0,0,.1,0],[0,0,0,.1]]),this.R=t([[this.sigma,0,0,0],[0,this.sigma,0,0],[0,0,this.sigma,0],[0,0,0,this.sigma]]),this.lastPoint=e([0,0,0,0]),this.last=t([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]),this.height=this.heightC/2,this.width=this.widthC/2,this.ctx.fillStyle="#37474f",this.ctx.fillRect(0,0,this.width,this.height),this.State=function(){function t(e,i,a){Object(o["a"])(this,t),this.realInput=e,this.noisyInput=i,this.kalmanPoint=a,this.dead=!1}return Object(h["a"])(t,[{key:"get",value:function(){return[this.noisyInput.x,this.noisyInput.y,this.noisyInput.ttl]}},{key:"getK",value:function(){return[this.kalmanPoint.x,this.kalmanPoint.y]}},{key:"displayReal",value:function(){this.realInput.display("#0d47a1")}},{key:"displayFiltered",value:function(){this.kalmanPoint.display("#dd2c00")}},{key:"displayNoisy",value:function(){this.noisyInput.display("#388e3c")}},{key:"displayPrediction",value:function(){}},{key:"update",value:function(){this.realInput.update(),this.noisyInput.update(),this.kalmanPoint.update(),0==this.realInput.ttl&&(this.dead=!0)}}]),t}();var i=this;this.Point=function(){function t(e,a,s){Object(o["a"])(this,t),this.x=e,this.y=a,this.ttl=i.ttl,this.ctx=s}return Object(h["a"])(t,[{key:"display",value:function(t){var e=Math.round(255*this.ttl/i.ttl).toString(16);this.ctx.beginPath(),this.ctx.arc(this.x,this.y,1.25,0,2*Math.PI),this.ctx.fillStyle=t+e,this.ctx.fill()}},{key:"update",value:function(){this.ttl--}}]),t}()},frame:function(){var t=performance.now();if("running"==this.status){var e=window.$V,i=this.ctx;this.ctx.fillStyle="#1f1f31",this.ctx.fillRect(0,0,this.width,this.height);var a=4;if(0==this.mode)this.realPoint=new this.Point(this.clientX/2,this.clientY/2,i);else if(1==this.mode)null==this.realPoint&&(this.realPoint=new this.Point(180,180,i)),0==this.drawPhase?(this.realPoint=new this.Point(this.realPoint.x+a,this.realPoint.y,i),this.realPoint.x>this.width-Math.round(this.width/5)&&(this.drawPhase=1)):1==this.drawPhase?(this.realPoint=new this.Point(this.realPoint.x,this.realPoint.y+a,i),this.realPoint.y>this.height-Math.round(this.height/5)&&(this.drawPhase=2)):2==this.drawPhase?(this.realPoint=new this.Point(this.realPoint.x-a,this.realPoint.y,i),this.realPoint.x<Math.round(this.width/5)&&(this.drawPhase=3)):3==this.drawPhase&&(this.realPoint=new this.Point(this.realPoint.x,this.realPoint.y-a,i),this.realPoint.y<Math.round(this.height/5)&&(this.drawPhase=0));else if(2==this.mode)null==this.realPoint?(this.realPoint=new this.Point(0,this.height/2,i),this.drawPhase=0):(this.realPoint=new this.Point(this.realPoint.x+5,this.realPoint.y,i),this.realPoint.x==this.width&&(this.realPoint.x=0,this.states=[],this.lastPoint=e([this.realPoint.x,this.realPoint.y,0,0])));else if(3==this.mode){null==this.realPoint&&(this.realPoint=new this.Point(this.width/2,this.height/2,i));var s=10;do{var n=Math.floor(4*Math.random());if(1==n)var r=this.realPoint.x+s,l=this.realPoint.y;else if(2==n)r=this.realPoint.x-s,l=this.realPoint.y;else if(3==n)r=this.realPoint.x,l=this.realPoint.y+s;else r=this.realPoint.x,l=this.realPoint.y-s}while(r>=this.width||r<=0||l>=this.height||l<=0||this.oldmov==n);this.oldmov=n,this.realPoint=new this.Point(r,l,i)}if(2!=this.mode)var o=Math.round(this.realPoint.x+Math.randomGaussian(0,this.sigma));else o=this.realPoint.x;var h=Math.round(this.realPoint.y+Math.randomGaussian(0,this.sigma)),u=new this.Point(o,h,i),c=o-this.lastPoint.elements[0],d=h-this.lastPoint.elements[1],p=e([o,h,c,d]),m=this.A.multiply(this.lastPoint).add(this.B.multiply(this.c)),f=this.A.multiply(this.last).multiply(this.A.transpose()).add(this.Q),v=this.H.multiply(f).multiply(this.H.transpose()).add(this.R),b=f.multiply(this.H.transpose()).multiply(v.inverse()),y=p.subtract(this.H.multiply(m));this.lastPoint=m.add(b.multiply(y)),this.last=window.Matrix.I(4).subtract(b.multiply(this.H)).multiply(f);var w=new this.Point(this.lastPoint.elements[0],this.lastPoint.elements[1],i);if(this.prediction)for(var P=this.lastPoint,g=this.predSteps,x=Array(),_=0;_<g;_++){P=this.A.multiply(P).add(this.B.multiply(this.c));var j=P.elements[0],k=P.elements[1];x.push(new this.Point(j,k,i))}this.states.push(new this.State(this.realPoint,u,w));for(var O=this.states.length-1;O>0;--O){var C=this.states[O];if(this.drawReal&&C.displayReal(),this.drawNoisy&&C.displayNoisy(),this.drawFiltered&&C.displayFiltered(),C.update(),O>1){var M=C.get(),S=Math.round(255*M[2]/this.ttl).toString(16);if(this.drawNoisyTraj){var T=this.states[O-1].get();i.strokeStyle="#229922"+S,i.lineWidth=1,i.beginPath(),i.moveTo(M[0],M[1]),i.lineTo(T[0],T[1]),i.stroke()}if(this.drawFilteredTraj){M=C.getK(),T=this.states[O-1].getK();i.strokeStyle="#993399"+S,i.lineWidth=1.5,i.beginPath(),i.moveTo(M[0],M[1]),i.lineTo(T[0],T[1]),i.stroke()}}C.dead&&this.states.splice(O,1)}if(this.prediction)for(_=0;_<x.length;_++)x[_].display("#ffffff")}this.lastCalledTime=performance.now();var F=performance.now()-t;this.ms=F,setTimeout(this.frame,1e3/this.framerate-F)}}},d=c,p=(i("0427"),i("2877")),m=Object(p["a"])(d,r,l,!1,null,"1be5230c",null),f=m.exports,v={name:"app",components:{Kalman:f}},b=v,y=(i("034f"),Object(p["a"])(b,s,n,!1,null,null,null)),w=y.exports,P=i("30f4");i("d6f6"),i("d1e7");a["a"].use(P["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(w)}}).$mount("#app")},"64a9":function(t,e,i){}});
//# sourceMappingURL=app.4ce08e57.js.map