(()=>{"use strict";var e={523:(e,t,n)=>{n.d(t,{A:()=>a});var i=n(601),o=n.n(i),r=n(314),s=n.n(r)()(o());s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Love+Light&family=Love+Ya+Like+A+Sister&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),s.push([e.id,'html, body {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\nheader{\n    background-color: navy;\n    color: gold;\n    text-align: center;\n    width: 100%;\n    font-family: "Love Ya Like A Sister", cursive;\n}\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: navy;\n    color: #eee;\n    margin-bottom: 4.5rem;\n}\n.hero{\n    width: 100%;\n    background-color: #fff;\n    color: #333;\n    text-align: center;\n    font-family: "Love Light", \'cursive\', \'sans-serif\';\n    font-size: 2rem;\n}\n.img{\n    width: 90%;\n    margin: 0 auto 2rem;\n}\nimg{\n    width: 100%;\n    display: block;\n}\n.message{\n    width: 90%;\n    font-size: 1.3rem;\n    font-family: "Poppins", sans-serif;\n    letter-spacing: .1rem;\n}\nbutton {\n    background-color: #5B49C7;\n    border-radius: 6px;\n    border: 0;\n    text-transform: uppercase;\n    font-size: 1.25rem;\n    cursor: pointer;\n    color: #FFFFFF;\n    padding: 1rem 1.5rem;\n    letter-spacing: 2px;\n    margin-bottom:.5rem;\n}\n#reward-button{\n    background-color: gold;\n    color: navy;\n}\nbutton:hover {\n    background-color: #40309c;\n}\n.reward{\n    font-family: \'Poppins\', sans-serif;\n    padding: 1rem;\n    font-size: 1.5rem;\n    color: gold;\n    display: none;\n}\n\n@media (min-width:450px) {\n    .hero{\n        font-size: 3.1rem;\n    }\n    .img{\n        width: 85%;\n    }\n    .message{\n        width: 80%;\n        font-size: 1.7rem;\n        line-height: 2.2rem;\n        font-family: "Poppins", sans-serif;\n        letter-spacing: .1rem;\n    }\n    .message h2{\n        font-size: 4rem;\n    }\n}\n\n@media (min-width:850px) {\n    .hero{\n        font-size: 3.3rem;\n    }\n    .img{\n        width: 60%;\n        max-width: 600px;\n    }\n    .message{\n        width: 70%;\n        font-size: 1.8rem;\n        line-height: 2.3rem;\n        font-family: "Poppins", sans-serif;\n        letter-spacing: .15rem;\n    }\n    .message h2{\n        font-size: 4rem;\n    }\n}',""]);const a=s},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(i)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);i&&s[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var r={},s=[],a=0;a<e.length;a++){var c=e[a],u=i.base?c[0]+i.base:c[0],d=r[u]||0,l="".concat(u," ").concat(d);r[u]=d+1;var h=n(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)t[h].references++,t[h].updater(f);else{var m=o(f,i);i.byIndex=a,t.splice(a,0,{identifier:l,updater:m,references:1})}s.push(l)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=i(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<r.length;s++){var a=n(r[s]);t[a].references--}for(var c=i(e,o),u=0;u<r.length;u++){var d=n(r[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=c}}},659:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,o&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={id:i,exports:{}};return e[i](r,r.exports,n),r.exports}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function s(e){return+e.replace(/px/,"")}function a(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=Math.random()*(t-e)+e;return Math.floor(i*Math.pow(10,n))/Math.pow(10,n)}function c(e){return e[a(0,e.length)]}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="/",n.nc=void 0;var u=["#fcf403","#62fc03","#f4fc03","#03e7fc","#03fca5","#a503fc","#fc03ad","#fc03c2"];function d(e){return Math.log(e)/Math.log(1920)}var l=function(){function e(t){i(this,e);var n=t.initialPosition,o=t.direction,r=t.confettiRadius,s=t.confettiColors,u=t.emojis,l=t.emojiSize,h=t.canvasWidth,f=a(.9,1.7,3)*d(h);this.confettiSpeed={x:f,y:f},this.finalConfettiSpeedX=a(.2,.6,3),this.rotationSpeed=u.length?.01:a(.03,.07,3)*d(h),this.dragForceCoefficient=a(5e-4,9e-4,6),this.radius={x:r,y:r},this.initialRadius=r,this.rotationAngle="left"===o?a(0,.2,3):a(-.2,0,3),this.emojiSize=l,this.emojiRotationAngle=a(0,2*Math.PI),this.radiusYUpdateDirection="down";var m="left"===o?a(82,15)*Math.PI/180:a(-15,-82)*Math.PI/180;this.absCos=Math.abs(Math.cos(m)),this.absSin=Math.abs(Math.sin(m));var p=a(-150,0),v={x:n.x+("left"===o?-p:p)*this.absCos,y:n.y-p*this.absSin};this.currentPosition=Object.assign({},v),this.initialPosition=Object.assign({},v),this.color=u.length?null:c(s),this.emoji=u.length?c(u):null,this.createdAt=(new Date).getTime(),this.direction=o}return r(e,[{key:"draw",value:function(e){var t=this.currentPosition,n=this.radius,i=this.color,o=this.emoji,r=this.rotationAngle,s=this.emojiRotationAngle,a=this.emojiSize,c=window.devicePixelRatio;i?(e.fillStyle=i,e.beginPath(),e.ellipse(t.x*c,t.y*c,n.x*c,n.y*c,r,0,2*Math.PI),e.fill()):o&&(e.font="".concat(a,"px serif"),e.save(),e.translate(c*t.x,c*t.y),e.rotate(s),e.textAlign="center",e.fillText(o,0,0),e.restore())}},{key:"updatePosition",value:function(e,t){var n=this.confettiSpeed,i=this.dragForceCoefficient,o=this.finalConfettiSpeedX,r=this.radiusYUpdateDirection,s=this.rotationSpeed,a=this.createdAt,c=this.direction,u=t-a;n.x>o&&(this.confettiSpeed.x-=i*e),this.currentPosition.x+=n.x*("left"===c?-this.absCos:this.absCos)*e,this.currentPosition.y=this.initialPosition.y-n.y*this.absSin*u+.00125*Math.pow(u,2)/2,this.rotationSpeed-=this.emoji?1e-4:1e-5*e,this.rotationSpeed<0&&(this.rotationSpeed=0),this.emoji?this.emojiRotationAngle+=this.rotationSpeed*e%(2*Math.PI):"down"===r?(this.radius.y-=e*s,this.radius.y<=0&&(this.radius.y=0,this.radiusYUpdateDirection="up")):(this.radius.y+=e*s,this.radius.y>=this.initialRadius&&(this.radius.y=this.initialRadius,this.radiusYUpdateDirection="down"))}},{key:"getIsVisibleOnCanvas",value:function(e){return this.currentPosition.y<e+100}}]),e}(),h=function(){function e(t){var n=this;i(this,e),this.canvasContext=t,this.shapes=[],this.promise=new Promise((function(e){return n.resolvePromise=e}))}return r(e,[{key:"getBatchCompletePromise",value:function(){return this.promise}},{key:"addShapes",value:function(){var e;(e=this.shapes).push.apply(e,arguments)}},{key:"complete",value:function(){var e;return!this.shapes.length&&(null===(e=this.resolvePromise)||void 0===e||e.call(this),!0)}},{key:"processShapes",value:function(e,t,n){var i=this,o=e.timeDelta,r=e.currentTime;this.shapes=this.shapes.filter((function(e){return e.updatePosition(o,r),e.draw(i.canvasContext),!n||e.getIsVisibleOnCanvas(t)}))}}]),e}();const f=function(){function e(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,e),this.activeConfettiBatches=[],this.canvas=n.canvas||((t=document.createElement("canvas")).style.position="fixed",t.style.width="100%",t.style.height="100%",t.style.top="0",t.style.left="0",t.style.zIndex="1000",t.style.pointerEvents="none",document.body.appendChild(t),t),this.canvasContext=this.canvas.getContext("2d"),this.requestAnimationFrameRequested=!1,this.lastUpdated=(new Date).getTime(),this.iterationIndex=0,this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}return r(e,[{key:"loop",value:function(){var e,t,n,i,o;this.requestAnimationFrameRequested=!1,e=this.canvas,t=window.devicePixelRatio,i=s((n=getComputedStyle(e)).getPropertyValue("width")),o=s(n.getPropertyValue("height")),e.setAttribute("width",(i*t).toString()),e.setAttribute("height",(o*t).toString());var r=(new Date).getTime(),a=r-this.lastUpdated,c=this.canvas.offsetHeight,u=this.iterationIndex%10==0;this.activeConfettiBatches=this.activeConfettiBatches.filter((function(e){return e.processShapes({timeDelta:a,currentTime:r},c,u),!u||!e.complete()})),this.iterationIndex++,this.queueAnimationFrameIfNeeded(r)}},{key:"queueAnimationFrameIfNeeded",value:function(e){this.requestAnimationFrameRequested||this.activeConfettiBatches.length<1||(this.requestAnimationFrameRequested=!0,this.lastUpdated=e||(new Date).getTime(),requestAnimationFrame(this.loop))}},{key:"addConfetti",value:function(){for(var e=function(e){var t=e.confettiRadius,n=void 0===t?6:t,i=e.confettiNumber,o=void 0===i?e.confettiesNumber||(e.emojis?40:250):i,r=e.confettiColors,s=void 0===r?u:r,a=e.emojis,c=void 0===a?e.emojies||[]:a,d=e.emojiSize,l=void 0===d?80:d;return e.emojies&&console.error("emojies argument is deprecated, please use emojis instead"),e.confettiesNumber&&console.error("confettiesNumber argument is deprecated, please use confettiNumber instead"),{confettiRadius:n,confettiNumber:o,confettiColors:s,emojis:c,emojiSize:l}}(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),t=e.confettiRadius,n=e.confettiNumber,i=e.confettiColors,o=e.emojis,r=e.emojiSize,s=this.canvas.getBoundingClientRect(),a=s.width,c=5*s.height/7,d={x:0,y:c},f={x:a,y:c},m=new h(this.canvasContext),p=0;p<n/2;p++){var v=new l({initialPosition:d,direction:"right",confettiRadius:t,confettiColors:i,confettiNumber:n,emojis:o,emojiSize:r,canvasWidth:a}),g=new l({initialPosition:f,direction:"left",confettiRadius:t,confettiColors:i,confettiNumber:n,emojis:o,emojiSize:r,canvasWidth:a});m.addShapes(v,g)}return this.activeConfettiBatches.push(m),this.queueAnimationFrameIfNeeded(),m.getBatchCompletePromise()}}]),e}();var m=n(72),p=n.n(m),v=n(825),g=n.n(v),y=n(659),b=n.n(y),x=n(56),w=n.n(x),C=n(540),S=n.n(C),P=n(113),j=n.n(P),A=n(523),M={};M.styleTagTransform=j(),M.setAttributes=w(),M.insert=b().bind(null,"head"),M.domAPI=g(),M.insertStyleElement=S(),p()(A.A,M),A.A&&A.A.locals&&A.A.locals;const k=n.p+"images/sucre.JPG";var I=document.createElement("img");I.src=k,I.alt="sucre",document.querySelector(".img").innerHTML="",document.querySelector(".img").appendChild(I);var R=new f,z=document.getElementById("reward-container");document.getElementById("celebrate-button").addEventListener("click",(function(){R.addConfetti({confettiRadius:4,confettiColors:["#FE486C","#1BCA8D","#AEBCCD"],confettiNumber:100,emojis:["🌐","💘❤","⚗️","☄️","🍻🎉","💍"],emojiSize:25})}),T),document.getElementById("reward-button").addEventListener("click",(function(){z.style.display="none",setTimeout((function(){return z.style.display="block"}),1e3),F.textContent=T()}));var F=document.getElementById("show-reward");function T(){return(3*Math.random()).toFixed(2)}})();