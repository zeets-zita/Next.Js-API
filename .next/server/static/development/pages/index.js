module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle
  }, "About")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");


var layoutStyle = {
  backgroundImage: "url('../static/image.jpg') ",
  backgroundRepeat: 'no-repeat, repeat',
  backgroundSize: '1300px',
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  fontFamily: 'Century Gothic',
  letterSpacing: '2px',
  color: 'white',
  fontSize: '22px'
};

var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: layoutStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");




var countries = [{
  name: 'Afghanistan',
  id: 1
}, {
  name: 'Armenia',
  id: 2
}, {
  name: 'Azerbaijan',
  id: 4
}, {
  name: 'Bahrain',
  id: 5
}, {
  name: 'Bangladesh',
  id: 6
}, {
  name: 'Bhutan',
  id: 7
}, {
  name: 'Brunei ',
  id: 8
}, {
  name: 'Cambodia',
  id: 9
}, {
  name: 'China',
  id: 10
}, {
  name: 'Georgia',
  id: 11
}, {
  name: 'Hong Kong',
  id: 12
}, {
  name: 'India',
  id: 13
}, {
  name: 'Indonesia',
  id: 14
}, {
  name: 'Iran',
  id: 15
}, {
  name: 'Iraq',
  id: 16
}, {
  name: 'Israel',
  id: 17
}, {
  name: 'Japan',
  id: 18
}, {
  name: 'Jordan',
  id: 19
}, {
  name: 'Kazakhstan',
  id: 20
}, {
  name: 'Kuwait',
  id: 21
}, {
  name: 'Kyrgyzstan',
  id: 22
}, {
  name: 'Loa',
  id: 23
}, {
  name: 'Malaysia',
  id: 24
}, {
  name: 'Maldives',
  id: 25
}, {
  name: 'Mongolia',
  id: 26
}, {
  name: 'Myanmar',
  id: 27
}, {
  name: 'Nepal',
  id: 28
}, {
  name: 'Korea',
  id: 29
}, {
  name: 'Oman',
  id: 30
}, {
  name: 'Pakistan',
  id: 31
}, {
  name: 'Palestine',
  id: 32
}, {
  name: 'Philippines',
  id: 33
}, {
  name: 'Qatar',
  id: 34
}, {
  name: 'Russia',
  id: 35
}, {
  name: 'Saudi Arabia',
  id: 36
}, {
  name: 'Singapore',
  id: 37
}, {
  name: 'Korea(Republic of)',
  id: 38
}, {
  name: 'Sri Lanka',
  id: 39
}, {
  name: 'Syria',
  id: 40
}, {
  name: 'Taiwan',
  id: 41
}, {
  name: 'Tajikistan',
  id: 42
}, {
  name: 'Thailand',
  id: 43
}, {
  name: 'Timor-Leste',
  id: 44
}, {
  name: 'Turkey',
  id: 45
}, {
  name: 'Turkmenistan',
  id: 46
}, {
  name: 'United Arab Emirates',
  id: 47
}, {
  name: 'Uzbekistan',
  id: 48
}, {
  name: 'Vietnam',
  id: 49
}, {
  name: 'Yemen',
  id: 50
}];

var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-4033159041"
  }, "Countries:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-4033159041"
  }, countries.map(function (_ref) {
    var name = _ref.name,
        id = _ref.id;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: id,
      className: "jsx-4033159041"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      as: "/post/".concat(name),
      href: "/post?id=".concat(name)
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-4033159041"
    }, name)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "4033159041",
    css: "li.jsx-4033159041{list-style:none;margin:8px 0;}a.jsx-4033159041{-webkit-text-decoration:none;text-decoration:none;color:white;}a.jsx-4033159041:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcemVldHNcXERlc2t0b3BcXFdlYiBEZXZlbG9wbWVudFxcRnVsbCBTdGFjayBXZWIgRGV2ZWxvcGVyXFxUYXNrOVxcTmV3IGZvbGRlclxcbmV4dC1jb3VudHJpZXMtXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUVjLEFBSW1CLEFBS0ssQUFLVCxZQUNkLElBVmUsYUFDZixxQkFJYyxZQUNkIiwiZmlsZSI6IkM6XFxVc2Vyc1xcemVldHNcXERlc2t0b3BcXFdlYiBEZXZlbG9wbWVudFxcRnVsbCBTdGFjayBXZWIgRGV2ZWxvcGVyXFxUYXNrOVxcTmV3IGZvbGRlclxcbmV4dC1jb3VudHJpZXMtXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0J1xyXG5cclxuXHJcbmNvbnN0IGNvdW50cmllcyA9IFtcclxuICB7bmFtZTogJ0FmZ2hhbmlzdGFuJywgaWQ6IDF9LFxyXG4gIHtuYW1lOiAnQXJtZW5pYScsIGlkOiAyfSxcclxuICB7bmFtZTogJ0F6ZXJiYWlqYW4nLCBpZDogNH0sXHJcbiAge25hbWU6ICdCYWhyYWluJywgaWQ6IDV9LFxyXG4gIHtuYW1lOiAnQmFuZ2xhZGVzaCcsIGlkOiA2fSxcclxuICB7bmFtZTogJ0JodXRhbicsIGlkOiA3fSxcclxuICB7bmFtZTogJ0JydW5laSAnLCBpZDogOH0sXHJcbiAge25hbWU6ICdDYW1ib2RpYScsIGlkOiA5fSxcclxuICB7bmFtZTogJ0NoaW5hJywgaWQ6IDEwfSxcclxuICB7bmFtZTogJ0dlb3JnaWEnLCBpZDogMTF9LFxyXG4gIHtuYW1lOiAnSG9uZyBLb25nJywgaWQ6IDEyfSxcclxuICB7bmFtZTogJ0luZGlhJywgaWQ6IDEzfSxcclxuICB7bmFtZTogJ0luZG9uZXNpYScsIGlkOiAxNH0sXHJcbiAge25hbWU6ICdJcmFuJywgaWQ6IDE1fSxcclxuICB7bmFtZTogJ0lyYXEnLCBpZDogMTZ9LFxyXG4gIHtuYW1lOiAnSXNyYWVsJywgaWQ6IDE3fSxcclxuICB7bmFtZTogJ0phcGFuJywgaWQ6IDE4fSxcclxuICB7bmFtZTogJ0pvcmRhbicsIGlkOiAxOX0sXHJcbiAge25hbWU6ICdLYXpha2hzdGFuJywgaWQ6IDIwfSxcclxuICB7bmFtZTogJ0t1d2FpdCcsIGlkOiAyMX0sXHJcbiAge25hbWU6ICdLeXJneXpzdGFuJywgaWQ6IDIyfSxcclxuICB7bmFtZTogJ0xvYScsIGlkOiAyM30sXHJcbiAge25hbWU6ICdNYWxheXNpYScsIGlkOiAyNH0sXHJcbiAge25hbWU6ICdNYWxkaXZlcycsIGlkOiAyNX0sXHJcbiAge25hbWU6ICdNb25nb2xpYScsIGlkOiAyNn0sXHJcbiAge25hbWU6ICdNeWFubWFyJywgaWQ6IDI3fSxcclxuICB7bmFtZTogJ05lcGFsJywgaWQ6IDI4fSxcclxuICB7bmFtZTogJ0tvcmVhJywgaWQ6IDI5fSxcclxuICB7bmFtZTogJ09tYW4nLCBpZDogMzB9LFxyXG4gIHtuYW1lOiAnUGFraXN0YW4nLCBpZDogMzF9LFxyXG4gIHtuYW1lOiAnUGFsZXN0aW5lJywgaWQ6IDMyfSxcclxuICB7bmFtZTogJ1BoaWxpcHBpbmVzJywgaWQ6IDMzfSxcclxuICB7bmFtZTogJ1FhdGFyJywgaWQ6IDM0fSxcclxuICB7bmFtZTogJ1J1c3NpYScsIGlkOiAzNX0sXHJcbiAge25hbWU6ICdTYXVkaSBBcmFiaWEnLCBpZDogMzZ9LFxyXG4gIHtuYW1lOiAnU2luZ2Fwb3JlJywgaWQ6IDM3fSxcclxuICB7bmFtZTogJ0tvcmVhKFJlcHVibGljIG9mKScsIGlkOiAzOH0sXHJcbiAge25hbWU6ICdTcmkgTGFua2EnLCBpZDogMzl9LFxyXG4gIHtuYW1lOiAnU3lyaWEnLCBpZDogNDB9LFxyXG4gIHtuYW1lOiAnVGFpd2FuJywgaWQ6IDQxfSxcclxuICB7bmFtZTogJ1RhamlraXN0YW4nLCBpZDogNDJ9LFxyXG4gIHtuYW1lOiAnVGhhaWxhbmQnLCBpZDogNDN9LFxyXG4gIHtuYW1lOiAnVGltb3ItTGVzdGUnLCBpZDogNDR9LFxyXG4gIHtuYW1lOiAnVHVya2V5JywgaWQ6IDQ1fSxcclxuICB7bmFtZTogJ1R1cmttZW5pc3RhbicsIGlkOiA0Nn0sXHJcbiAge25hbWU6ICdVbml0ZWQgQXJhYiBFbWlyYXRlcycsIGlkOiA0N30sXHJcbiAge25hbWU6ICdVemJla2lzdGFuJywgaWQ6IDQ4fSxcclxuICB7bmFtZTogJ1ZpZXRuYW0nLCBpZDogNDl9LFxyXG4gIHtuYW1lOiAnWWVtZW4nLCBpZDogNTB9XHJcbl1cclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4gKFxyXG4gIDxMYXlvdXQ+XHJcbiAgICA8aDE+Q291bnRyaWVzOjwvaDE+XHJcbiAgPHVsPlxyXG4gICAge2NvdW50cmllcy5tYXAoKHtuYW1lLCBpZH0pID0+IChcclxuICAgICAgPGxpIGtleT17aWR9PlxyXG4gICAgICAgIDxMaW5rIGFzPXtgL3Bvc3QvJHtuYW1lfWB9IGhyZWY9e2AvcG9zdD9pZD0ke25hbWV9YH0+XHJcbiAgICAgICAgICA8YT57bmFtZX08L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKSl9XHJcbiAgPC91bD5cclxuICA8c3R5bGUganN4PntgXHJcblxyXG5saSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW46IDhweCAwO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuYH08L3N0eWxlPlxyXG48L0xheW91dD5cclxuKVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4Il19 */\n/*@ sourceURL=C:\\Users\\zeets\\Desktop\\Web Development\\Full Stack Web Developer\\Task9\\New folder\\next-countries-\\pages\\index.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map