(()=>{"use strict";var e,t,n,a,o,d,i,c,s,r,l,p,u,m,h={426:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(81),o=n.n(a),d=n(645),i=n.n(d)()(o());i.push([e.id,".navBar {\n    display: flex;\n    justify-content: center;\n}\n\n.navBtn {\n    border: 1px solid black;\n    padding: 25px;\n    margin: 25px;\n    font-size: 25px;\n    transition: 0.3s;\n}\n\n.navBtn:hover {\n    background-color: blue;\n}\n\n.mainArea {\n    margin: 25px;\n    padding: 50px;\n    border: 1px solid black;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.headingText {\n    border: 1px solid black;\n    font-size: 30px;\n    text-align: center;\n    padding: 5px;\n}\n\n.infoDiv {\n    border: 2px solid black;\n    font-size: 20px;\n    margin-top: 25px;\n    padding: 5px;\n    width: 500px;\n    align-self: center;\n}\n\n.hoursDiv {\n    align-self: center;\n    border: 2px solid black;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 500px;\n    margin-top: 25px;\n    padding: 5px;\n    font-size: 20px;\n}\n\n.locationDiv {\n    align-self: center;\n    border: 2px solid black;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 500px;\n    margin-top: 25px;\n    padding: 5px;\n    font-size: 20px;\n}\n\n.menuChoice {\n    border: 1px solid black;\n    margin-top: 15px;\n    padding: 5px;\n    font-size: 25px;\n    text-align: center;\n    width: 300px;\n    align-self: center;\n}\n\n.choice {\n    border: 1px solid black;\n    width: 500px;\n    margin-top: 15px;\n    padding: 5px;\n    align-self: center;\n}\n\n.choiceName {\n    margin: 5px;\n    font-size: 23px;\n}\n\n.choiceText {\n    text-align: center;\n    font-size: 20px;\n    margin: 5px;\n}\n\n.choicePrice {\n    text-align: end;\n    font-size: 20px;\n}",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,d){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var r=0;r<e.length;r++){var l=[].concat(e[r]);a&&i[l[0]]||(void 0!==d&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=d),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var d={},i=[],c=0;c<e.length;c++){var s=e[c],r=a.base?s[0]+a.base:s[0],l=d[r]||0,p="".concat(r," ").concat(l);d[r]=l+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=o(m,a);a.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var d=a(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<d.length;i++){var c=n(d[i]);t[c].references--}for(var s=a(e,o),r=0;r<d.length;r++){var l=n(d[r]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}d=s}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var d=n.sourceMap;d&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},x={};function v(e){var t=x[e];if(void 0!==t)return t.exports;var n=x[e]={id:e,exports:{}};return h[e](n,n.exports,v),n.exports}v.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return v.d(t,{a:t}),t},v.d=(e,t)=>{for(var n in t)v.o(t,n)&&!v.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},v.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),v.nc=void 0,e=v(379),t=v.n(e),n=v(795),a=v.n(n),o=v(569),d=v.n(o),i=v(565),c=v.n(i),s=v(216),r=v.n(s),l=v(589),p=v.n(l),u=v(426),(m={}).styleTagTransform=p(),m.setAttributes=c(),m.insert=d().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=r(),t()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals,function(){const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("navBar");const n=document.createElement("div");n.classList.add("navBtn"),n.setAttribute("id","home"),n.textContent="Home",t.appendChild(n);const a=document.createElement("div");a.classList.add("navBtn"),a.setAttribute("id","menu"),a.textContent="Menu",t.appendChild(a);const o=document.createElement("div");o.classList.add("navBtn"),o.setAttribute("id","contact"),o.textContent="Contact Us",t.appendChild(o),e.appendChild(t)}(),function(){const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("mainArea");const n=document.createElement("div");n.classList.add("headingText"),n.textContent="The Robotic Restaurant",t.appendChild(n);const a=document.createElement("div");a.classList.add("infoDiv"),a.textContent="This is the most amazing experience ever! We have lot's of text for place holder, but We don't want to use it all here. If you interested, check other places! Lorem ipsum of sorts?",t.appendChild(a);const o=document.createElement("div");o.classList.add("hoursDiv");const d=document.createElement("div");d.textContent="Work hours",o.appendChild(d);const i=document.createElement("div");i.classList.add("hours"),i.textContent="Sunday: 1pm - 11pm",o.appendChild(i);const c=document.createElement("div");c.classList.add("hours"),c.textContent="Monday: 10am - 10pm",o.appendChild(c);const s=document.createElement("div");s.classList.add("hours"),s.textContent="Tuesday: 10am - 10pm",o.appendChild(s);const r=document.createElement("div");r.classList.add("hours"),r.textContent="Wednesday: 10am - 10pm",o.appendChild(r);const l=document.createElement("div");l.classList.add("hours"),l.textContent="Thursday: 10am - 10pm",o.appendChild(l);const p=document.createElement("div");p.classList.add("hours"),p.textContent="Friday: 10am - 10pm",o.appendChild(p);const u=document.createElement("div");u.classList.add("hours"),u.textContent="Saturday: 10am - 10pm",o.appendChild(u);const m=document.createElement("div");m.classList.add("locationDiv");const h=document.createElement("div");h.classList.add("locationText"),h.textContent="Location:",m.appendChild(h);const x=document.createElement("div");x.classList.add("locationLocation"),x.textContent="123 Street st., City city, Country",m.appendChild(x),t.appendChild(o),t.appendChild(m),e.appendChild(t)}(),document.getElementById("menu").addEventListener("click",(function(){const e=document.querySelector(".mainArea");for(;e.firstChild;)e.removeChild(e.firstChild);const t=document.createElement("div");t.classList.add("headingText"),t.textContent="Menu",e.appendChild(t);const n=document.createElement("div");n.classList.add("menuChoice"),n.textContent="Beverages",e.appendChild(n);const a=document.createElement("div");a.classList.add("choice");const o=document.createElement("div");o.classList.add("choiceName"),o.textContent="not a BEER";const d=document.createElement("div");d.classList.add("choiceText"),d.textContent="Some words about the drink that is not a beer";const i=document.createElement("div");i.classList.add("choicePrice"),i.textContent="3.5 eur",a.appendChild(o),a.appendChild(d),a.appendChild(i);const c=document.createElement("div");c.classList.add("choice");const s=document.createElement("div");s.classList.add("choiceName"),s.textContent="popular brand soda";const r=document.createElement("div");r.classList.add("choiceText"),r.textContent="Pepsi or Coke? Beer is much cheaper tough!";const l=document.createElement("div");l.classList.add("choicePrice"),l.textContent="5.5 eur",c.appendChild(s),c.appendChild(r),c.appendChild(l);const p=document.createElement("div");p.classList.add("menuChoice"),p.textContent="Dishes";const u=document.createElement("div");u.classList.add("choice");const m=document.createElement("div");m.classList.add("choiceName"),m.textContent="Ham and Cheese";const h=document.createElement("div");h.classList.add("choiceText"),h.textContent="Ham and cheese on your cheap paper plate. We ran out of bread";const x=document.createElement("div");x.classList.add("choicePrice"),x.textContent="9.5 eur",u.appendChild(m),u.appendChild(h),u.appendChild(x);const v=document.createElement("div");v.classList.add("choice");const f=document.createElement("div");f.classList.add("choiceName"),f.textContent="Sausage on a stick";const C=document.createElement("div");C.classList.add("choiceText"),C.textContent="It looks much worse than it sounds! Deal with it and then pay for it";const g=document.createElement("div");g.classList.add("choicePrice"),x.textContent="9.5 eur",v.appendChild(f),v.appendChild(C),v.appendChild(g),e.appendChild(a),e.appendChild(c),e.appendChild(p),e.appendChild(u),e.appendChild(v)}))})();