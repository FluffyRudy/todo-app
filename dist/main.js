(()=>{"use strict";var n={479:(n,e,t)=>{t.d(e,{Z:()=>d});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"footer {\n    position: fixed;\n    bottom: 0;\n    width: 100vw;\n}\n\nfooter > p {\n    text-align: center;\n    color: #fff;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 1.2em;\n}",""]);const d=a},753:(n,e,t)=>{t.d(e,{Z:()=>p});var o=t(81),r=t.n(o),i=t(645),a=t.n(i),d=t(667),c=t.n(d),l=new URL(t(188),t.b),s=a()(r()),u=c()(l);s.push([n.id,`#header {\n    font-size: max(1.4em, min(3vw, 5vw));\n    font-size: 16px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    max-height: 200px;\n    width: 80vw;\n    margin: 2vh auto;\n    opacity: 1;\n    visibility: visible;\n    position: relative;\n    height: -webkit-max-content;\n    height: -moz-max-content;\n    height: max-content;\n}\n\n#header.invisible {\n    visibility: hidden;\n    opacity: 0;\n}\n\n#menu-button {\n    width: 58px;\n    height: 58px;\n    background-image: url(${u});\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;    \n    border: none;\n    background-color: transparent;\n    cursor: pointer;\n    z-index: 2;\n    opacity: 0.7;\n}\n\n\n#menu-button:focus {\n    opacity: 1;\n}\n\n#logo {\n    color: #fff;\n    font-size: 3vw;\n}\n\n#header-left-child, #header-right-child {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    gap: 2vw;\n}\n\n#search-bar, #search-button {\n    padding: 2vh 3vmax;\n    background-color: transparent;\n    outline: none;\n    border: 1px solid white;\n    border-radius: 20px;\n    color: #fff;\n    font-size: 1.2em;\n}\n\n#menu-bar {\n    z-index: 10;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: min(550px, 100vw);\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n#top-wrapper {\n    position: relative;\n    background: rgba(0, 0, 0, 0.4);\n    height: 150px;\n    line-height: 150px;\n}\n\n#menu-bar > ul {\n    margin-top: 6vh;\n    margin-left: 50%;\n    -webkit-transform: translateX(-80%);\n            transform: translateX(-80%);\n}\n\n#menu-bar > ul > li + li {\n    margin-top: 8vh;\n}\n\n#menu-bar > ul > li > button {\n    font-size: max(2.0em, min(2vw, 3vw));\n    font-family: monospace;\n}\n\n#menu-heading {\n    margin-top: 0;\n    font-size: max(45px, 2vmax);\n    letter-spacing: 1vw;\n    color: navajowhite;\n    margin-left: 2vw;\n}\n\n#menu-bar button {\n    background-color: transparent;\n    border: none;\n    color: #fff;\n    padding: 2vmax 2vmax;\n    border-radius: 1vmax;\n}\n\n#cancel-menu {\n    position: absolute;\n    top: 50%;\n    right: 0;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    font-size: 2em;\n    -webkit-transition: none;\n    transition: none;\n}\n\n#cancel-menu:hover {\n    background-color: red;\n    -webkit-transition: background-color 0.5s ease-in-out;\n    transition: background-color 0.5s ease-in-out;\n    border-radius: 1vmax;\n}\n\n#menu-bar > ul > li > button:hover {\n    background-color: lime;\n    -webkit-transition: background-color 0.5s linear;\n    transition: background-color 0.5s linear;\n    color: #000;\n}\n\n#menu-bar {\n    visibility: hidden;\n    opacity: 0;\n    -webkit-transition-property: visibility, opacity;\n    transition-property: visibility, opacity;\n    -webkit-transition-duration: 0.5s, 0.5s;\n            transition-duration: 0.5s, 0.5s;\n    -webkit-transition-timing-function: linear, linear;\n            transition-timing-function: linear, linear;\n}\n\n#menu-bar.visible {\n    visibility: visible;\n    opacity: 1;\n}\n\n@media only screen and (max-width: 800px) {\n    #header-left-child, #header-right-child {\n        display: block;\n    }\n\n    #header {\n        position: relative;\n        top: 0;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        margin-top: 0;\n    }\n\n    #menu-button {\n        position: fixed;\n        left: 0;\n        z-index: 8;\n        opacity: 0.5;\n    }\n\n    #menu-button:hover {\n        opacity: 1;\n    }\n\n    #logo {\n        font-size: 5vw;\n        margin: 0;\n    }\n\n    #search-bar, #search-button {\n        display: block;\n        margin: auto;\n        padding: 2vh 8vmax;\n    }\n\n    #search-button {\n        margin-top: 2vh;\n    }\n}`,""]);const p=s},883:(n,e,t)=>{t.d(e,{Z:()=>m});var o=t(81),r=t.n(o),i=t(645),a=t.n(i),d=t(667),c=t.n(d),l=new URL(t(463),t.b),s=new URL(t(916),t.b),u=a()(r()),p=c()(l),g=c()(s);u.push([n.id,`body {\n    margin: 0;\n    padding: 0;\n    background: hsla(205, 46%, 30%, 1);\n    background: -webkit-gradient(linear, left top, right top, from(hsla(205, 46%, 30%, 1)), to(hsla(260, 29%, 36%, 1)));\n    background: linear-gradient(90deg, hsla(205, 46%, 30%, 1) 0%, hsla(260, 29%, 36%, 1) 100%);\n    background: -webkit-linear-gradient(90deg, hsla(205, 46%, 30%, 1) 0%, hsla(260, 29%, 36%, 1) 100%);\n    width: 100vw;\n    min-height: 100vh;\n    font-size: 16px\n}\n\n#add-button {\n    position: fixed;\n    bottom: 2vh;\n    right: 2vw;\n    width: 150px;\n    height: 150px;\n    background-image: url(${p});\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n}\n\nbutton {\n    cursor: pointer;\n}\n\nul {\n    list-style-type: none;\n}\n\n#container {\n    margin-top: 3vh;\n    min-height: 80vh;\n}\n\n.todoui-wrapper {\n    width: 90vw;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: min(4vw, 40px);\n    background-color: rgba(255, 255, 255, 0.3);\n    border-radius: 3vmax;\n    margin: 6vh auto 0 auto;\n    position: relative;\n    color: #fff;\n}\n\n.todoui-wrapper:hover  #category-popup {\n    visibility: visible;\n    opacity: 1;\n}\n\n#todo-details {\n    background-color: rgba(0, 0, 0, 0.3);\n    font-size: min(4vw, 40px);\t\t\t\n    height: -webkit-fit-content;\t\t\t\n    height: -moz-fit-content;\t\t\t\n    height: fit-content;\n    border: 3px solid limegreen;\n    border-radius: 20px;\n    padding: 1vmax;\n    color: #fff;\n}\n\n#todo-details:hover {\n    background-color: rgba(0, 0, 0, 1);\n}\n\n#todo-status {\n    outline: transparent;\n    accent-color: lime;\n    -webkit-transform: scale(2.5);\n            transform: scale(2.5);\n}\n\n#todo-status:checked + p {\n    -webkit-text-decoration: line-through;\n    text-decoration: line-through;\n}\n\n#category-popup {\n    margin: 0 0;\n    position: absolute;\n    visibility: hidden;\n    -webkit-transform: translateY(-170%);\n            transform: translateY(-170%);\n    background-color: rgba(255, 255, 255, 0.1);\n    border-radius: 2vh;\n    padding: 0 1vmax;\n    -webkit-transition: all 0.5s ease;\n    transition: all 0.5s ease;\n    opacity: 0;\n    background-color: tomato;\n}\n\n#delete-todoui {\n    background-image: url(${g});\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    width: 5vmax;\n    height: 5vmax;\n    border-radius: 2.5vmax;\n    border: 1px solid lime;\n}\n\n#detail-info-box {\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    background-color: tomato;\n    color: #fff;\n    border-radius: 2vmax;\n    padding: 1vmax;\n    text-align: center;\n    font-size: 3vmax;\n    font-family: monospace;\n}\n\n#detail-info-box > *{\n    background-color: rgba(243, 85, 57, 0.829);\n    color: #fff;\n    padding: 1vmax;\n}\n`,""]);const m=u},185:(n,e,t)=>{t.d(e,{Z:()=>p});var o=t(81),r=t.n(o),i=t(645),a=t.n(i),d=t(667),c=t.n(d),l=new URL(t(463),t.b),s=a()(r()),u=c()(l);s.push([n.id,`#add-button {\n    position: fixed;\n    bottom: 2vh;\n    right: 2vw;\n    width: 150px;\n    height: 150px;\n    background-image: url(${u});\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    z-index: 20;\n}\n\ndialog {\n    background: rgba(0, 0, 0, 0.3);\n    padding: 5vmax 0;\n    border: none;\n    border-radius: 3vmax;\n}\n\nform {\n    width: min(600px, 100vw);\n    min-height: min(500px, 100vh);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\nform > input, form > textarea {\n    width: 80%;\n    padding: 2vmax 0;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    border-radius: 1vw;\n    border: none;\n    font-size: 1.4em;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    text-align: center;\n    margin-top: 1vh;\n} \n\ninput:focus, textarea:focus {\n    border: none;\n    outline: none;\n}\n\n#todo-label:focus:invalid {\n    border: 1px solid red;\n}\n\n#todo-label:focus:valid {\n    border: 1px solid lime;\n    outline: lime;\n}\n\n#cancel-todo {\n    display: block;\n    margin: auto;\n    background-color: rgba(255, 0, 0, 1);\n}\n\n#cancel-todo, #add-todo {\n   font-size: 1.5em;\n   width: 80%;\n   height: 80px;\n   border: none;\n   border-radius: 10px;\n   margin-top: 1vh;\n}\n\n#add-todo {\n    background-color: lime;\n}\n\n#todo-disc:focus {\n    text-align: left;\n}\n`,""]);const p=s},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);o&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],d=0;d<n.length;d++){var c=n[d],l=o.base?c[0]+o.base:c[0],s=i[l]||0,u="".concat(l," ").concat(s);i[l]=s+1;var p=t(u),g={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(g);else{var m=r(g,o);o.byIndex=d,e.splice(d,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function r(n,e){var t=e.domAPI(e);t.update(n);return function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var d=t(i[a]);e[d].references--}for(var c=o(n,r),l=0;l<i.length;l++){var s=t(i[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},463:(n,e,t)=>{n.exports=t.p+"aa4f4e6aa2ed0abaa0f8.svg"},188:(n,e,t)=>{n.exports=t.p+"8017d26d60b91874fb53.png"},916:(n,e,t)=>{n.exports=t.p+"29f2df16f996b1fd71a0.svg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),d=t(565),c=t.n(d),l=t(216),s=t.n(l),u=t(589),p=t.n(u),g=t(883),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=s();e()(g.Z,m);g.Z&&g.Z.locals&&g.Z.locals;var b=t(753),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=s();e()(b.Z,f);b.Z&&b.Z.locals&&b.Z.locals;function h(n,e,t=void 0,o=void 0){const r=document.createElement(n);return r.textContent=e,v(r,t,o),r}function v(n,e,t){e&&("class"===e?n.classList.add(t):n.setAttribute(e,t))}class y{static createButton(n,e=void 0,t=void 0){return h("button",n,e,t)}static createText(n,e=void 0,t=void 0){return h("p",n,e,t)}static createContainer(n=void 0,e=void 0){const t=document.createElement("div");return v(t,n,e),t}static createSearchBar(n=void 0,e=void 0){const t=document.createElement("input");return t.type="search",v(t,n,e),t}static createHeading(n,e,t=void 0,o=void 0){return h(n,e,t,o)}static createList(n,e=void 0,t=void 0){const o=document.createElement("ul");return v(o,e,t),n.forEach((n=>{const e=document.createElement("li"),t=y.createButton(n,"id",n.toLowerCase().replace(" ","-"));e.appendChild(t),o.appendChild(e)})),o}static createNavBar(n,e=void 0,t=void 0){const o=document.createElement("nav"),r=y.createList(n,"id","menubar-buttons");return v(o,e,t),o.appendChild(r),o}static createTodoUI(n){const e=y.createContainer("class","todoui-wrapper");e.setAttribute("todo-id",n.id);const t=document.createElement("input");t.type="checkbox",t.setAttribute("id","todo-status");const o=y.createText("Category: "+n.category,"id","category-popup");e.setAttribute("category",n.category);const r=y.createText(n.label,"id","todo-label"),i=y.createButton("Details","id","todo-details"),a=y.createButton("","id","delete-todoui");return e.appendChild(o),[t,r,i,a].forEach((n=>{e.appendChild(n)})),e}static createTodoInfoBox(n){const e=y.createContainer("id","detail-info-box"),t={Label:n.label,Category:n.category,Description:n.activity,"Creation date":n.creationDate,Deadline:n.deadline};for(let n in t)e.appendChild(y.createText(`${n}: ${t[n]}`));return e}}class x{static getObjStorage(){return JSON.parse(localStorage.getItem("todoObjStorage"))||{}}static addToStorage(n){const e=x.generateUniqueStorageId();n.setID(e);let t=x.getObjStorage();t.hasOwnProperty(n.category)||(t[n.category]=[]),t[n.category].push(n),localStorage.setItem("todoObjStorage",JSON.stringify(t))}static generateStorageId(n=2){return window.crypto.getRandomValues(new Uint32Array(n)).reduce(((n,e)=>n+e.toString(36)),"")}static generateUniqueStorageId(){let n=2,e=x.generateStorageId(n),t=1,o=x.getObjStorage();for(;o.hasOwnProperty(e);)e=x.generateStorageId(),t%10==0&&(n++,t=1),t++;return e}static removeTodoElem(n,e){let t=x.getObjStorage();const o=x.getElemByCatId(n,e);-1!=o&&(t[n].splice(o,1),t[n].length<1&&delete t[n],localStorage.setItem("todoObjStorage",JSON.stringify(t)))}static getElemByCatId(n,e){let t=x.getObjStorage();if(t.hasOwnProperty(n))for(let o=0;o<t[n].length;o++){if(t[n][o].id===e)return o}return-1}static getElemByCategory(n){let e=x.getObjStorage();return e.hasOwnProperty(n)?e[n]:null}static searchElement(n){const e=[],t=new RegExp(n,"i");let o=x.getObjStorage();for(let n in o){const o=x.getElemByCategory(n);if(null===o)return;for(let n of o)(t.test(n.label)||t.test(n.activity)||t.test(n.category))&&e.push(n)}return e}}function w(){document.getElementById("menu-bar").classList.toggle("visible"),document.getElementById("header").classList.toggle("invisible"),document.getElementById("add-button").classList.toggle("invisible")}function k(n){const e=document.getElementById("container"),t=n.target.getAttribute("id");for(;e.firstChild;)e.removeChild(e.firstChild);if("categorized"===t){const n=Object.keys(x.getObjStorage()).filter((n=>"all"!=n));for(let t of n){const n=x.getElemByCategory(t);for(let t of n)e.appendChild(y.createTodoUI(t))}}else if("uncatagorized"===t){const n=Object.keys(x.getObjStorage()).filter((n=>"all"===n));for(let t of n){const n=x.getElemByCategory(t);for(let t of n)e.appendChild(y.createTodoUI(t))}}else if("notes"===t){const n=Object.keys(x.getObjStorage());for(let t of n){const n=x.getElemByCategory(t);for(let t of n)e.appendChild(y.createTodoUI(t))}}}var E=t(479),C={};C.styleTagTransform=p(),C.setAttributes=c(),C.insert=a().bind(null,"head"),C.domAPI=r(),C.insertStyleElement=s();e()(E.Z,C);E.Z&&E.Z.locals&&E.Z.locals;var I=t(185),B={};B.styleTagTransform=p(),B.setAttributes=c(),B.insert=a().bind(null,"head"),B.domAPI=r(),B.insertStyleElement=s();e()(I.Z,B);I.Z&&I.Z.locals&&I.Z.locals;class S{constructor(n,e,t,o=null){var r;this.label=n,this.category=""===t.trim()?"all":t,this.activity=e,this.deadline=new Date(o).toLocaleDateString(),this.creationDate=`${(r=new Date).toLocaleTimeString()} : ${r.toLocaleDateString()}`,this.id=null}setID(n){this.id=n}}function T(){document.querySelector("dialog").showModal()}function z(n){n.preventDefault(),document.querySelector("dialog").close()}function j(n){const e=document.createElement("dialog");e.style.width="min(600px, 100vw)",e.style.backgroundColor="rgba(255, 0, 0, 0.5)",document.body.appendChild(e);const t=y.createText(n);t.style.fontSize="3em",t.style.fontFamily="monospace",t.style.color="white",t.style.textAlign="center",e.appendChild(t),e.showModal(),setTimeout((()=>{e.close()}),2e3)}function O(n){const e=function(){const n=document.getElementById("todo-label"),e=document.getElementById("category"),t=document.getElementById("todo-disc"),o=document.getElementById("todo-deadline");return[n.value,t.value,e.value,o.value]}(),t=new S(...e);return e[0].length<4?(n.preventDefault(),void j("Provide proper label")):e[1].length<4?(n.preventDefault(),void j("Provide proper description")):(x.addToStorage(t),function(n){document.getElementById("container").appendChild(y.createTodoUI(n))}(t),void z(n))}function L(){const n=document.getElementById("search-bar").value,e=x.searchElement(n);if(e.length>0){const n=document.getElementById("container");for(;n.firstChild;)n.removeChild(n.firstChild);for(let t of e)setTimeout((()=>{n.appendChild(y.createTodoUI(t))}),400)}else alert("not found")}function A(n){const e=n.target.parentNode,t=e.getAttribute("category"),o=e.getAttribute("todo-id");if("delete-todoui"==n.target.getAttribute("id"))x.removeTodoElem(t,o),e.remove();else if("todo-details"==n.target.getAttribute("id")){const e=y.createTodoInfoBox(x.getObjStorage()[t][x.getElemByCatId(t,o)]);document.getElementById("detail-info-box")||(document.getElementById("container").appendChild(e),n.target.onblur=()=>{document.getElementById("detail-info-box")&&document.getElementById("detail-info-box").remove()})}}const Z=document.getElementById("container");document.body.insertBefore(y.createButton("","id","add-button"),Z),document.body.insertBefore(function(){const n=document.createElement("header");n.setAttribute("id","header");const e=y.createContainer("id","header-left-child"),t=y.createContainer("id","header-right-child"),o=y.createButton("","id","menu-button"),r=y.createSearchBar("id","search-bar"),i=y.createButton("Search","id","search-button");return e.appendChild(o),e.appendChild(y.createText("Todo Free","id","logo")),t.appendChild(r),t.appendChild(i),n.appendChild(e),n.appendChild(t),n}(),Z),document.body.insertBefore(function(){const n=y.createNavBar(["Notes","Categorized","Uncatagorized"],"id","menu-bar"),e=y.createContainer("id","top-wrapper");return e.appendChild(y.createHeading("h1","Todo Free","id","menu-heading")),e.appendChild(y.createButton("X","id","cancel-menu")),n.insertBefore(e,n.firstChild),n}(),Z),document.body.appendChild(function(){const n=document.createElement("footer"),e=y.createText("Icons by https://icons8.com and https://icon-icons.com","id","footer-text");return n.appendChild(e),n}()),document.getElementById("menu-button").addEventListener("click",w),document.getElementById("cancel-menu").addEventListener("click",w),document.getElementById("menubar-buttons").addEventListener("click",k),document.getElementById("add-button").addEventListener("click",T),document.getElementById("add-todo").addEventListener("click",O),document.getElementById("cancel-todo").addEventListener("click",z),document.getElementById("search-button").addEventListener("click",L),document.getElementById("container").addEventListener("click",A)})()})();