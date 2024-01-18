/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 479:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `footer {
    position: fixed;
    bottom: 0;
    width: 100vw;
}

footer > p {
    text-align: center;
    color: #fff;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.2em;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 753:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(188), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#header {
    font-size: max(1.4em, min(3vw, 5vw));
    font-size: 16px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    max-height: 200px;
    width: 80vw;
    margin: 2vh auto;
    opacity: 1;
    visibility: visible;
    position: relative;
    height: -webkit-max-content;
    height: -moz-max-content;
    height: max-content;
}

#header.invisible {
    visibility: hidden;
    opacity: 0;
}

#menu-button {
    width: 58px;
    height: 58px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;    
    border: none;
    background-color: transparent;
    cursor: pointer;
    z-index: 2;
    opacity: 0.7;
}


#menu-button:focus {
    opacity: 1;
}

#logo {
    color: #fff;
    font-size: 3vw;
}

#header-left-child, #header-right-child {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    gap: 2vw;
}

#search-bar, #search-button {
    padding: 2vh 3vmax;
    background-color: transparent;
    outline: none;
    border: 1px solid white;
    border-radius: 20px;
    color: #fff;
    font-size: 1.2em;
}

#menu-bar {
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    width: min(550px, 100vw);
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
}

#top-wrapper {
    position: relative;
    background: rgba(0, 0, 0, 0.4);
    height: 150px;
    line-height: 150px;
}

#menu-bar > ul {
    margin-top: 6vh;
    margin-left: 50%;
    -webkit-transform: translateX(-80%);
            transform: translateX(-80%);
}

#menu-bar > ul > li + li {
    margin-top: 8vh;
}

#menu-bar > ul > li > button {
    font-size: max(2.0em, min(2vw, 3vw));
    font-family: monospace;
}

#menu-heading {
    margin-top: 0;
    font-size: max(45px, 2vmax);
    letter-spacing: 1vw;
    color: navajowhite;
    margin-left: 2vw;
}

#menu-bar button {
    background-color: transparent;
    border: none;
    color: #fff;
    padding: 2vmax 2vmax;
    border-radius: 1vmax;
}

#cancel-menu {
    position: absolute;
    top: 50%;
    right: 0;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
    font-size: 2em;
    -webkit-transition: none;
    transition: none;
}

#cancel-menu:hover {
    background-color: red;
    -webkit-transition: background-color 0.5s ease-in-out;
    transition: background-color 0.5s ease-in-out;
    border-radius: 1vmax;
}

#menu-bar > ul > li > button:hover {
    background-color: navajowhite;
    -webkit-transition: background-color 0.5s linear;
    transition: background-color 0.5s linear;
    color: #000;
}

#menu-bar {
    visibility: hidden;
    opacity: 0;
    -webkit-transition-property: visibility, opacity;
    transition-property: visibility, opacity;
    -webkit-transition-duration: 0.5s, 0.5s;
            transition-duration: 0.5s, 0.5s;
    -webkit-transition-timing-function: linear, linear;
            transition-timing-function: linear, linear;
}

#menu-bar.visible {
    visibility: visible;
    opacity: 1;
}

@media only screen and (max-width: 800px) {
    #header-left-child, #header-right-child {
        display: block;
    }

    #header {
        position: relative;
        top: 0;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        margin-top: 0;
    }

    #menu-button {
        position: fixed;
        left: 0;
        z-index: 8;
        opacity: 0.5;
    }

    #menu-button:hover {
        opacity: 1;
    }

    #logo {
        font-size: 5vw;
        margin: 0;
    }

    #search-bar, #search-button {
        display: block;
        margin: auto;
        padding: 2vh 8vmax;
    }

    #search-button {
        margin-top: 2vh;
    }
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 883:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(463), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    margin: 0;
    padding: 0;
    background: hsla(205, 46%, 30%, 1);
    background: -webkit-gradient(linear, left top, right top, from(hsla(205, 46%, 30%, 1)), to(hsla(260, 29%, 36%, 1)));
    background: linear-gradient(90deg, hsla(205, 46%, 30%, 1) 0%, hsla(260, 29%, 36%, 1) 100%);
    background: -webkit-linear-gradient(90deg, hsla(205, 46%, 30%, 1) 0%, hsla(260, 29%, 36%, 1) 100%);
    width: 100vw;
    min-height: 100vh;
    font-size: 16px
}

#add-button {
    position: fixed;
    bottom: 2vh;
    right: 2vw;
    width: 150px;
    height: 150px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: transparent;
    border: none;
    cursor: pointer;
}

button {
    cursor: pointer;
}

ul {
    list-style-type: none;
}

#container {
    margin-top: 3vh;
    min-height: 80vh;
}

#todoui-wrapper {
    width: 90vw;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
        justify-content: space-around;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    font-size: min(4vw, 40px);
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 3vmax;
    margin: 5vh auto;
    position: relative;
    color: #fff;
}

#todoui-wrapper:hover  #category-popup {
    visibility: visible;
    z-index: 15;
}

#todo-details {
    background-color: transparent;
    font-size: min(4vw, 40px);			
    height: -webkit-fit-content;			
    height: -moz-fit-content;			
    height: fit-content;
    border: 3px solid limegreen;
    border-radius: 20px;
    padding: 1vmax;
    color: #fff;
}

#todo-status {
    outline: transparent;
    accent-color: lime;
    -webkit-transform: scale(2.5);
            transform: scale(2.5);
}

#category-popup {
    margin: 0 0;
    position: absolute;
    visibility: hidden;
    top: -3vh;
    background-color: rgba(255, 255, 255, 0.3);
}

`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 185:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(463), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#add-button {
    position: fixed;
    bottom: 2vh;
    right: 2vw;
    width: 150px;
    height: 150px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: transparent;
    border: none;
    cursor: pointer;
}

dialog {
    background: rgba(0, 0, 0, 0.3);
    padding: 5vmax 0;
    border: none;
    border-radius: 3vmax;
}

form {
    width: min(600px, 100vw);
    min-height: min(500px, 100vh);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -ms-flex-pack: distribute;
        justify-content: space-around;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}

form > input, form > textarea {
    width: 80%;
    padding: 2vmax 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border-radius: 1vw;
    border: none;
    font-size: 1.4em;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    text-align: center;
    margin-top: 1vh;
} 

input:focus, textarea:focus {
    border: none;
    outline: none;
}

#todo-label:focus:invalid {
    border: 1px solid red;
}

#todo-label:focus:valid {
    border: 1px solid lime;
    outline: lime;
}

#cancel-todo {
    display: block;
    margin: auto;
    background-color: rgba(255, 0, 0, 1);
}

#cancel-todo, #add-todo {
   font-size: 1.5em;
   width: 80%;
   height: 80px;
   border: none;
   border-radius: 10px;
   margin-top: 1vh;
}

#add-todo {
    background-color: lime;
}

#todo-disc:focus {
    text-align: left;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 667:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ 81:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 379:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 463:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa4f4e6aa2ed0abaa0f8.svg";

/***/ }),

/***/ 188:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8017d26d60b91874fb53.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles/main.css
var main = __webpack_require__(883);
;// CONCATENATED MODULE: ./src/styles/main.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(main/* default */.Z, options);




       /* harmony default export */ const styles_main = (main/* default */.Z && main/* default */.Z.locals ? main/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles/header.css
var header = __webpack_require__(753);
;// CONCATENATED MODULE: ./src/styles/header.css

      
      
      
      
      
      
      
      
      

var header_options = {};

header_options.styleTagTransform = (styleTagTransform_default());
header_options.setAttributes = (setAttributesWithoutAttributes_default());

      header_options.insert = insertBySelector_default().bind(null, "head");
    
header_options.domAPI = (styleDomAPI_default());
header_options.insertStyleElement = (insertStyleElement_default());

var header_update = injectStylesIntoStyleTag_default()(header/* default */.Z, header_options);




       /* harmony default export */ const styles_header = (header/* default */.Z && header/* default */.Z.locals ? header/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/share/widgets.js
function textContainedElem(type, text, attribute=undefined, value=undefined) {
    const elem = document.createElement(type);
    elem.textContent = text;
    setWidgetAttribute(elem, attribute, value);
    return elem;
}

function setWidgetAttribute(element, attribute, value) {
    if (attribute) {
        if (attribute === "class")
            element.classList.add(value);
        else
            element.setAttribute(attribute, value);
    }
}

class Widget {
    static createButton(text, attribute=undefined, value=undefined) {
        return textContainedElem("button", text, attribute, value);
    }

    static createText(text, attribute=undefined, value=undefined) {
        return textContainedElem("p", text, attribute, value);
    }

    static createContainer(attribute=undefined, value=undefined) {
        const container = document.createElement("div");
        setWidgetAttribute(container, attribute, value);
        return container;
    }

    static createSearchBar(attribute=undefined, value=undefined) {
        const elem = document.createElement("input");
        elem.type = "search";
        setWidgetAttribute(elem, attribute, value);
        return elem;
    }

    static createHeading(level, content, attribute=undefined, value=undefined) {
        const heading = textContainedElem(level, content, attribute, value);
        return heading;
    }

    static createList(listElements, type="ul") {
        const createAttribute = (text) => {
            return text.toLowerCase().replace(' ', '-');
        }
        const elemType = (type == "ol") ? "ol" : "ul";
        const ul = document.createElement(elemType);
        listElements.forEach(elem => {
            const listElem = document.createElement("li");
            const navBtn   = Widget.createButton(elem, "id", createAttribute(elem));
            listElem.appendChild(navBtn);
            ul.appendChild(listElem);
        })

        return ul;
    }

    static createNavBar(navItems, attribute=undefined, value=undefined) {
        const nav = document.createElement("nav");
        const navElems = Widget.createList(navItems);
        setWidgetAttribute(nav, attribute, value);
        nav.appendChild(navElems);
        return nav;
    }

    static createTodoUI(todoObj) {
        const wrapper = Widget.createContainer("id", "todoui-wrapper");
        wrapper.setAttribute("todo-id", todoObj.id);
        const status = document.createElement('input');
        status.type  = "checkbox";
        status.setAttribute("id", "todo-status");
        const category = Widget.createText("Category: " + todoObj.category, 'id', 'category-popup');
        const label  = Widget.createText(todoObj.label , "id", "todo-label");
        const details = Widget.createButton("Details", "id", "todo-details");
        
        wrapper.appendChild(category);
        [status, label, details]
            .forEach(elem => {
                wrapper.appendChild(elem);
            })

        return wrapper;
    }
}


;// CONCATENATED MODULE: ./src/components/header.js



function createHeader() {
    const header = document.createElement("header");
    header.setAttribute("id", "header");

    const container1 = Widget.createContainer("id", "header-left-child");
    const container2 = Widget.createContainer("id", "header-right-child");

    const menuButton = Widget.createButton("", "id", "menu-button");
    const searchBar  = Widget.createSearchBar("id", "search-bar");
    const sortButton = Widget.createButton("Search", "id", "search-button");

    container1.appendChild(menuButton);
    container1.appendChild(Widget.createText("Todo Free", "id", "logo"));
    container2.appendChild(searchBar);
    container2.appendChild(sortButton);

    header.appendChild(container1);
    header.appendChild(container2);

    return header;
}

function toggleMenu() {
    document.getElementById("menu-bar")
        .classList.toggle("visible");
    document.getElementById("header").classList.toggle("invisible");
    document.getElementById("add-button").classList.toggle("invisible");
}

function createMenu() {
    const navElemLabels = ["Notes", "Categorized", "Uncatagorized", "Trash"];
    const navElement    = Widget.createNavBar(navElemLabels, "id", "menu-bar");
    const headCancelContainer = Widget.createContainer("id", "top-wrapper");
    headCancelContainer.appendChild(createMenuHeading());
    headCancelContainer.appendChild(createMenuCancelButton());
    navElement.insertBefore(headCancelContainer, navElement.firstChild);
    return navElement;
}

function createMenuHeading() {
    return Widget.createHeading("h1", "Todo Free", "id", "menu-heading");
}

function createMenuCancelButton() {
    return Widget.createButton("X", "id", "cancel-menu");
}

function registerMenuEventListers() {
    document.getElementById("menu-button")
        .addEventListener('click', toggleMenu)
    document.getElementById("cancel-menu")
        .addEventListener('click', toggleMenu);
}
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles/footer.css
var footer = __webpack_require__(479);
;// CONCATENATED MODULE: ./src/styles/footer.css

      
      
      
      
      
      
      
      
      

var footer_options = {};

footer_options.styleTagTransform = (styleTagTransform_default());
footer_options.setAttributes = (setAttributesWithoutAttributes_default());

      footer_options.insert = insertBySelector_default().bind(null, "head");
    
footer_options.domAPI = (styleDomAPI_default());
footer_options.insertStyleElement = (insertStyleElement_default());

var footer_update = injectStylesIntoStyleTag_default()(footer/* default */.Z, footer_options);




       /* harmony default export */ const styles_footer = (footer/* default */.Z && footer/* default */.Z.locals ? footer/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/footer.js



function createFooter() {
    const footer = document.createElement('footer');
    const footerText = Widget.createText("Icons by https://icons8.com and https://icon-icons.com", "id", "footer-text");
    footer.appendChild(footerText)
    return footer;
}
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles/userInput.css
var userInput = __webpack_require__(185);
;// CONCATENATED MODULE: ./src/styles/userInput.css

      
      
      
      
      
      
      
      
      

var userInput_options = {};

userInput_options.styleTagTransform = (styleTagTransform_default());
userInput_options.setAttributes = (setAttributesWithoutAttributes_default());

      userInput_options.insert = insertBySelector_default().bind(null, "head");
    
userInput_options.domAPI = (styleDomAPI_default());
userInput_options.insertStyleElement = (insertStyleElement_default());

var userInput_update = injectStylesIntoStyleTag_default()(userInput/* default */.Z, userInput_options);




       /* harmony default export */ const styles_userInput = (userInput/* default */.Z && userInput/* default */.Z.locals ? userInput/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/lib/todo.js
class Todo {
    constructor(label, activity, category, deadline=null) {
        this.label = label;
        this.category = category.trim() === "" ? "all" : category; 
        this.activity = activity;
        this.deadline = deadline;
        this.creationDate = new Date();
        this.id = null;
    }           
    
    setID(id) {
        this.id = id;
    }
}


;// CONCATENATED MODULE: ./src/lib/storage.js
class Storage {
    static  todoCounter = 0;
    static todoObjstorage = {};

    static getObjStorage() {
        return Storage.todoObjstorage;
    }

    static addToStorage(value) {
        const id = Storage.generateUniqueStorageId();
        value.setID(id);
        if (Storage.todoObjstorage.hasOwnProperty(value.category)) {
            Storage.todoObjstorage[value.category].push(value);
        } else {
            Storage.todoObjstorage[value.category] = [];
            Storage.todoObjstorage[value.category].push(value);
        }
        console.log(this.todoObjstorage)
        Storage.todoCounter++;
    }

    static generateStorageId(iterableNum=2) {
        return window.crypto.getRandomValues(new Uint32Array(iterableNum))
            .reduce((uniqueID, ID) => {
                return uniqueID + ID.toString(36)
        }, "");
    }

    static generateUniqueStorageId() {
        let iterableNum = 2;
        let id = Storage.generateStorageId(iterableNum);
        let attempt = 1;
        while (Storage.todoObjstorage.hasOwnProperty(id)) {
            id = Storage.generateStorageId();
            if (attempt % 10 == 0) {
                iterableNum++;
                attempt = 1;
            }
            attempt++;
        }
        return id;
    }
}


;// CONCATENATED MODULE: ./src/components/input.js





function displayPopUp() {
    document.querySelector("dialog").showModal();
}

function closePopup(e) {
    e.preventDefault();
    document.querySelector("dialog").close();
}

function displayErrorPopup(erroMsg) {
    const popup = document.createElement("dialog");
    popup.style.width = "min(600px, 100vw)";
    popup.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    document.body.appendChild(popup);
    const popupContent = Widget.createText(erroMsg);
    popupContent.style.fontSize = "3em";
    popupContent.style.fontFamily = "monospace";
    popupContent.style.color = "white";
    popupContent.style.textAlign = "center";
    popup.appendChild(popupContent);
    popup.showModal();
    setTimeout(() => {
        popup.close()
    }, 2000);
}

function getUserInputs() {
    const label = document.getElementById("todo-label");
    const category = document.getElementById("category");
    const discription = document.getElementById("todo-disc");
    const deadline = document.getElementById("todo-deadline");
    return [
        label.value, 
        discription.value, 
        category.value,
        deadline.value
    ];
}

function addTodoUI(todoObj) {
    document.getElementById("container")
        .appendChild(Widget.createTodoUI(todoObj));
}

function addTodo(e) {
    const userInput = getUserInputs();
    const todoObj = new Todo(...userInput);
    if (userInput[0].length < 4) {
        e.preventDefault();
        displayErrorPopup("Provide proper label");
        return;
    } else if (userInput[1].length < 4) {
        e.preventDefault();
        displayErrorPopup("Provide proper description");
        return;
    }
    Storage.addToStorage(todoObj);
    addTodoUI(todoObj);
    closePopup(e);
}

function TodoAddButton() {
    return Widget.createButton("", "id", "add-button");
}

function registerUserInputListener() {
    document.getElementById("add-button")
        .addEventListener('click', displayPopUp);
    document.getElementById("add-todo")
        .addEventListener('click', addTodo);
    document.getElementById("cancel-todo")
        .addEventListener('click', closePopup);
}

;// CONCATENATED MODULE: ./src/index.js








const container = document.getElementById("container");

document.body.insertBefore(TodoAddButton(), container);
document.body.insertBefore(createHeader(), container)
document.body.insertBefore(createMenu(), container);
document.body.appendChild(createFooter());

registerMenuEventListers();
registerUserInputListener();
})();

/******/ })()
;