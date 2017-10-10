webpackJsonp([3],{

/***/ "./app/components/Print/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css__ = __webpack_require__("./app/components/Print/styles.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_css__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  text-align:center;\n'], ['\n  text-align:center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display:block;\n  text-align:center;\n  background:#5cbfdc;\n  color:#fff;\n  text-decoration:none;\n  border-radius:5px;\n  margin:1em;\n  padding:1em;\n  &:hover {\n    cursor:pointer;\n    background:#085FFF;\n  }\n'], ['\n  display:block;\n  text-align:center;\n  background:#5cbfdc;\n  color:#fff;\n  text-decoration:none;\n  border-radius:5px;\n  margin:1em;\n  padding:1em;\n  &:hover {\n    cursor:pointer;\n    background:#085FFF;\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
*
* Print
*
*/






var ImageContainer = __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject);
var PrintLink = __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].a(_templateObject2);

var print = function print() {
  window.print();
  setTimeout(function () {
    window.location.href = '/';
  }, 100);
};

var _ref = _jsx('div', {}, void 0, _jsx('div', {
  className: 'no-print'
}, void 0, _jsx(ImageContainer, {}, void 0, _jsx('img', {
  src: '/images/cookie-dough-detail.png',
  alt: 'Free Icecream'
}), _jsx('br', {}), _jsx('h1', {}, void 0, 'One free ice cream topping')), _jsx(ImageContainer, {}, void 0, _jsx('img', {
  src: '/images/barcode.png',
  alt: 'barcode'
})), _jsx(PrintLink, {
  onClick: print
}, void 0, 'Print')), _jsx('div', {
  className: 'token'
}, void 0, _jsx('div', {
  className: 'logo'
}, void 0, _jsx('img', {
  src: '/images/logo.svg',
  alt: 'logo'
})), _jsx('p', {}, void 0, 'Congratulations!! You have beaten our Tomato Trader Challenge. Head over to the Ben & Jerry\u2019s stall for a small peaceful reward with your ice cream and hopefully now you\u2019ll find it easier to negotiate the next challenge you face, like the strong women in the Democratic Republic of Congo'), _jsx(ImageContainer, {}, void 0, _jsx('img', {
  src: '/images/barcode.png',
  alt: 'barcode'
}))));

function Print() {

  return _ref;
}

/* harmony default export */ exports["default"] = Print;

/***/ },

/***/ "./app/components/Print/styles.css":
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./app/components/Print/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./styles.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ "./node_modules/css-loader/index.js!./app/components/Print/styles.css":
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "\n.token {\n\ttext-align: center;\t\n\tpadding:8px;\n\tdisplay: none;\n}\n\nimg {\n\tmax-width: 90%;\n}\n\n\n@media print {\n  .no-print {\n    display: none;\n\t}\n\t.token {\n\t\tdisplay: block;\n\t}\n}", ""]);

// exports


/***/ }

});