"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/categories.js":
/*!****************************************!*\
  !*** ./pages/components/categories.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _store_reducers_categories_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/reducers/categories.reducers */ \"./store/reducers/categories.reducers.js\");\n/* harmony import */ var _store_actions_categoriesAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/categoriesAction */ \"./store/actions/categoriesAction.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/tmrbk/Documents/reactSSR/client/pages/components/categories.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Catgories(_ref) {\n  _s();\n\n  var _this = this;\n\n  var getCategoriesAction = _ref.getCategoriesAction,\n      categories = _ref.categories;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    getCategoriesAction();\n  }, []);\n  var returnCategories = categories.map(function (categ) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"a\", {\n      className: \"list-item\",\n      href: \"\",\n      children: categ.name\n    }, \"categ-\" + categ.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 54\n    }, _this);\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, [categories]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: \"page-info\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"page-header\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h2\", {\n        children: \"\\u041A\\u0430\\u0442\\u0435\\u0433\\u043E\\u0440\\u0438\\u0438\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, this), returnCategories]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Catgories, \"3ubReDTFssvu4DHeldAg55cW/CI=\");\n\n_c = Catgories;\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getCategoriesAction: (0,redux__WEBPACK_IMPORTED_MODULE_5__.bindActionCreators)(_store_actions_categoriesAction__WEBPACK_IMPORTED_MODULE_3__.getCategories, dispatch)\n  };\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    categories: state.categReducers.categories\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(Catgories));\n\nvar _c;\n\n$RefreshReg$(_c, \"Catgories\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2NhdGVnb3JpZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU00sU0FBVCxPQUF1RDtFQUFBOztFQUFBOztFQUFBLElBQW5DQyxtQkFBbUMsUUFBbkNBLG1CQUFtQztFQUFBLElBQWJDLFVBQWEsUUFBYkEsVUFBYTtFQUNuRFAsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2xCTSxtQkFBbUI7RUFDbkIsQ0FGVyxFQUVSLEVBRlEsQ0FBVDtFQUdBLElBQUlFLGdCQUFnQixHQUFHRCxVQUFVLENBQUNFLEdBQVgsQ0FBZSxVQUFDQyxLQUFEO0lBQUEsb0JBQVc7TUFBRyxTQUFTLEVBQUMsV0FBYjtNQUFpRCxJQUFJLEVBQUMsRUFBdEQ7TUFBQSxVQUEwREEsS0FBSyxDQUFDQztJQUFoRSxHQUE4QixXQUFTRCxLQUFLLENBQUNFLEVBQTdDO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FBWDtFQUFBLENBQWYsQ0FBdkI7RUFFQVosZ0RBQVMsQ0FBQyxZQUFJLENBQ2IsQ0FEUSxFQUNOLENBQUNPLFVBQUQsQ0FETSxDQUFUO0VBRUEsb0JBQ0k7SUFBSyxTQUFTLEVBQUMsV0FBZjtJQUFBLHdCQUNJO01BQUssU0FBUyxFQUFDLGFBQWY7TUFBQSx1QkFDSTtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURKO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFESixFQUlJQyxnQkFKSjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFESjtBQVFIOztHQWhCUUg7O0tBQUFBOztBQWtCVCxJQUFNUSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFDLFFBQVE7RUFBQSxPQUFLO0lBQ3BDUixtQkFBbUIsRUFBRUoseURBQWtCLENBQUNFLDBFQUFELEVBQWlCVSxRQUFqQjtFQURILENBQUw7QUFBQSxDQUFuQzs7QUFHQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUs7RUFBQSxPQUFLO0lBQzlCVCxVQUFVLEVBQUVTLEtBQUssQ0FBQ2IsYUFBTixDQUFvQkk7RUFERixDQUFMO0FBQUEsQ0FBN0I7O0FBSUEsK0RBQWVOLG9EQUFPLENBQUNjLGVBQUQsRUFBbUJGLGtCQUFuQixDQUFQLENBQThDUixTQUE5QyxDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvY2F0ZWdvcmllcy5qcz83OTk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlICwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHtjYXRlZ1JlZHVjZXJzfSBmcm9tICcuLi8uLi9zdG9yZS9yZWR1Y2Vycy9jYXRlZ29yaWVzLnJlZHVjZXJzJ1xuaW1wb3J0IHtnZXRDYXRlZ29yaWVzfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL2NhdGVnb3JpZXNBY3Rpb24nXG5mdW5jdGlvbiBDYXRnb3JpZXMoe2dldENhdGVnb3JpZXNBY3Rpb24gLCBjYXRlZ29yaWVzfSkge1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Z2V0Q2F0ZWdvcmllc0FjdGlvbigpXG5cdH0gLCBbXSlcbiAgICBsZXQgcmV0dXJuQ2F0ZWdvcmllcyA9IGNhdGVnb3JpZXMubWFwKChjYXRlZykgPT4gPGEgY2xhc3NOYW1lPSdsaXN0LWl0ZW0nIGtleT17XCJjYXRlZy1cIitjYXRlZy5pZH0gaHJlZj1cIlwiPntjYXRlZy5uYW1lfTwvYT4pXG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICB9LCBbY2F0ZWdvcmllc10pXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaW5mb1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxoMj7QmtCw0YLQtdCz0L7RgNC40Lg8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIHtyZXR1cm5DYXRlZ29yaWVzfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICAgIGdldENhdGVnb3JpZXNBY3Rpb246IGJpbmRBY3Rpb25DcmVhdG9ycyhnZXRDYXRlZ29yaWVzICwgZGlzcGF0Y2gpXG59KVxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBjYXRlZ29yaWVzOiBzdGF0ZS5jYXRlZ1JlZHVjZXJzLmNhdGVnb3JpZXNcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzICwgbWFwRGlzcGF0Y2hUb1Byb3BzKShDYXRnb3JpZXMpO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY29ubmVjdCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImNhdGVnUmVkdWNlcnMiLCJnZXRDYXRlZ29yaWVzIiwiQ2F0Z29yaWVzIiwiZ2V0Q2F0ZWdvcmllc0FjdGlvbiIsImNhdGVnb3JpZXMiLCJyZXR1cm5DYXRlZ29yaWVzIiwibWFwIiwiY2F0ZWciLCJuYW1lIiwiaWQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/categories.js\n"));

/***/ })

});