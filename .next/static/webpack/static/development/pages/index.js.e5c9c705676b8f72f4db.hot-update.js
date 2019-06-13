webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  list-style: none;\n  margin: 40px 0;\n  a {\n    color: #343434;\n    font-weight: 200;\n    text-decoration: none;\n    font-size: 32px;\n    text-transform: capitalize;\n    &:focus {\n      color: #ff0000;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Country = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li(_templateObject());
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, countries.map(function (_ref) {
    var name = _ref.name,
        id = _ref.id;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Country, {
      key: id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      as: "/post/".concat(name),
      href: "/post?id=".concat(name)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, name)));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.e5c9c705676b8f72f4db.hot-update.js.map