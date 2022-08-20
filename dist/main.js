(()=>{"use strict";var e,n,t,a,o,r,i,d,s,c,l,p,u,m,f={426:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(81),o=t.n(a),r=t(645),i=t.n(r)()(o());i.push([e.id,".navBar {\n    display: flex;\n    justify-content: center;\n}\n\n.navBtn {\n    border: 1px solid black;\n    padding: 25px;\n    margin: 25px;\n    font-size: 25px;\n    transition: 0.3s;\n}\n\n.navBtn:hover {\n    background-color: blue;\n}\n\n.mainArea {\n    margin: 25px;\n    padding: 50px;\n    border: 1px solid black;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.headingText {\n    border: 1px solid black;\n    font-size: 30px;\n    text-align: center;\n    padding: 5px;\n}\n\n.infoDiv {\n    border: 2px solid black;\n    font-size: 20px;\n    margin-top: 25px;\n    padding: 5px;\n    width: 500px;\n    align-self: center;\n}\n\n.hoursDiv {\n    align-self: center;\n    border: 2px solid black;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 500px;\n    margin-top: 25px;\n    padding: 5px;\n    font-size: 20px;\n}\n\n.locationDiv {\n    align-self: center;\n    border: 2px solid black;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 500px;\n    margin-top: 25px;\n    padding: 5px;\n    font-size: 20px;\n}",""]);const d=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(i[s]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);a&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var r={},i=[],d=0;d<e.length;d++){var s=e[d],c=a.base?s[0]+a.base:s[0],l=r[c]||0,p="".concat(c," ").concat(l);r[c]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,a);a.byIndex=d,n.splice(d,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var d=t(r[i]);n[d].references--}for(var s=a(e,o),c=0;c<r.length;c++){var l=t(r[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=s}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},v={};function h(e){var n=v[e];if(void 0!==n)return n.exports;var t=v[e]={id:e,exports:{}};return f[e](t,t.exports,h),t.exports}h.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return h.d(n,{a:n}),n},h.d=(e,n)=>{for(var t in n)h.o(n,t)&&!h.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},h.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),h.nc=void 0,e=h(379),n=h.n(e),t=h(795),a=h.n(t),o=h(569),r=h.n(o),i=h(565),d=h.n(i),s=h(216),c=h.n(s),l=h(589),p=h.n(l),u=h(426),(m={}).styleTagTransform=p(),m.setAttributes=d(),m.insert=r().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=c(),n()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals,function(){const e=document.getElementById("content"),n=document.createElement("div");n.classList.add("navBar");const t=document.createElement("div");t.classList.add("navBtn"),t.textContent="Home",n.appendChild(t);const a=document.createElement("div");a.classList.add("navBtn"),a.textContent="Menu",n.appendChild(a);const o=document.createElement("div");o.classList.add("navBtn"),o.textContent="Contact Us",n.appendChild(o),e.appendChild(n)}(),function(){const e=document.getElementById("content"),n=document.createElement("div");n.classList.add("mainArea");const t=document.createElement("div");t.classList.add("headingText"),t.textContent="The Robotic Restaurant",n.appendChild(t);const a=document.createElement("div");a.classList.add("infoDiv"),a.textContent="This is the most amazing experience ever! We have lot's of text for place holder, but We don't want to use it all here. If you interested, check other places! Lorem ipsum of sorts?",n.appendChild(a);const o=document.createElement("div");o.classList.add("hoursDiv");const r=document.createElement("div");r.textContent="Work hours",o.appendChild(r);const i=document.createElement("div");i.classList.add("hours"),i.textContent="Sunday: 1pm - 11pm",o.appendChild(i);const d=document.createElement("div");d.classList.add("hours"),d.textContent="Monday: 10am - 10pm",o.appendChild(d);const s=document.createElement("div");s.classList.add("hours"),s.textContent="Tuesday: 10am - 10pm",o.appendChild(s);const c=document.createElement("div");c.classList.add("hours"),c.textContent="Wednesday: 10am - 10pm",o.appendChild(c);const l=document.createElement("div");l.classList.add("hours"),l.textContent="Thursday: 10am - 10pm",o.appendChild(l);const p=document.createElement("div");p.classList.add("hours"),p.textContent="Friday: 10am - 10pm",o.appendChild(p);const u=document.createElement("div");u.classList.add("hours"),u.textContent="Saturday: 10am - 10pm",o.appendChild(u);const m=document.createElement("div");m.classList.add("locationDiv");const f=document.createElement("div");f.classList.add("locationText"),f.textContent="Location:",m.appendChild(f);const v=document.createElement("div");v.classList.add("locationLocation"),v.textContent="123 Street st., City city, Country",m.appendChild(v),n.appendChild(o),n.appendChild(m),e.appendChild(n)}()})();