webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/isomorphic-unfetch/browser.js":
false,

/***/ "./node_modules/isomorphic-unfetch/node_modules/unfetch/dist/unfetch.mjs":
false,

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


function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  list-style: none;\n  margin: 40px 0;\n  a {\n    color: #343434;\n    font-weight: 200;\n    text-decoration: none;\n    font-size: 32px;\n    text-transform: capitalize;\n    &:focus {\n      color: #ff0000;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: #efefef;\n    width: 100%;\n    ul {\n      overflow-y: scroll;\n      height: 100vh;\n      padding: 0 100px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var CountriesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var Country = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li(_templateObject2());
var countries = [{
  name: 'italy',
  id: 1
}, {
  name: 'france',
  id: 2
}, {
  name: 'spain',
  id: 4
}, {
  name: 'portugal',
  id: 5
}, {
  name: 'mexico',
  id: 6
}, {
  name: 'greece',
  id: 7
}, {
  name: 'germany',
  id: 8
}, {
  name: 'japan',
  id: 9
}, {
  name: 'turkey',
  id: 10
}, {
  name: 'australia',
  id: 11
}, {
  name: 'korea',
  id: 12
}, {
  name: 'qatar',
  id: 13
}, {
  name: 'oman',
  id: 14
}];

var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CountriesWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, countries.map(function (_ref) {
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
//# sourceMappingURL=index.js.c8a27f4835fedac4ad25.hot-update.js.map