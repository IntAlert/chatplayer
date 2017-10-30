webpackJsonp([2],{

/***/ "./app/containers/Demo/android-wrapper.png":
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "060b70f4ac8052687a01cdb26ebb3b86.png";

/***/ },

/***/ "./app/containers/Demo/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_css__ = __webpack_require__("./app/containers/Demo/styles.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__android_wrapper_png__ = __webpack_require__("./app/containers/Demo/android-wrapper.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__android_wrapper_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__android_wrapper_png__);
/* harmony export (binding) */ __webpack_require__.d(exports, "Demo", function() { return Demo; });
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  margin:0;\n  position:relative;\n'], ['\n  margin:0;\n  position:relative;\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/*
 *
 * Demo
 *
 */








var DemoContainer = __WEBPACK_IMPORTED_MODULE_2_styled_components__["a" /* default */].div(_templateObject);

var _ref = _jsx(DemoContainer, {}, void 0, _jsx('img', {
  alt: 'wrapper',
  src: __WEBPACK_IMPORTED_MODULE_4__android_wrapper_png___default.a,
  width: '337',
  height: '580'
}), _jsx('iframe', {
  src: '/',
  width: '248',
  height: '440',
  frameBorder: '0'
}));

var Demo = function (_React$Component) {
  _inherits(Demo, _React$Component);

  function Demo() {
    _classCallCheck(this, Demo);

    return _possibleConstructorReturn(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).apply(this, arguments));
  }

  _createClass(Demo, [{
    key: 'render',
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      return _ref;
    }
  }]);

  return Demo;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
}

/* harmony default export */ exports["default"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(null, mapDispatchToProps)(Demo);

/***/ },

/***/ "./app/containers/Demo/styles.css":
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./app/containers/Demo/styles.css");
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

/***/ "./node_modules/css-loader/index.js!./app/containers/Demo/styles.css":
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "img {\n\tposition: absolute;\n\tz-index: 0;\n\ttop:0;\n\tleft:0;\n}\n\niframe {\n\tposition: absolute;\n\tz-index: 1;\n\ttop:80px;\n\tleft:45px;\n}", ""]);

// exports


/***/ }

});