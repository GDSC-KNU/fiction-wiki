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

/***/ "./components/Search.tsx":
/*!*******************************!*\
  !*** ./components/Search.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_client_useSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @libs/client/useSearch */ \"./libs/client/useSearch.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction Search() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), search = ref[0], setSearch = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), input = ref1[0], setInput = ref1[1];\n    var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(\"\");\n    var handleInputChange = function(e) {\n        setInput(e.target.value);\n        inputRef.current = e.target.value;\n    };\n    var result = (0,_libs_client_useSearch__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(search).result;\n    if (result) console.log(result);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var timerId = setInterval(function() {\n            setSearch(inputRef.current);\n        }, 500);\n        return function() {\n            return clearInterval(timerId);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        className: \" appearance-none w-full px-3 py-2 border border-gray-300 rounded-3xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400\",\n        value: input,\n        onChange: handleInputChange,\n        placeholder: \"\\uAC80\\uC0C9\\uC5B4\\uB97C \\uC785\\uB825\\uD558\\uC138\\uC694\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Search.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n};\n_s(Search, \"jSwUm3zYOdJO1I4WdY5aSvdVgFo=\", false, function() {\n    return [\n        _libs_client_useSearch__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBK0M7QUFDWTs7QUFJNUMsU0FBU0ssTUFBTSxHQUFHOztJQUMvQixJQUE0QkQsR0FBa0IsR0FBbEJBLCtDQUFRLEVBQVUsRUFBdkNFLE1BQU0sR0FBZUYsR0FBa0IsR0FBakMsRUFBRUcsU0FBUyxHQUFJSCxHQUFrQixHQUF0QjtJQUN4QixJQUEwQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUEvQkksS0FBSyxHQUFjSixJQUFZLEdBQTFCLEVBQUVLLFFBQVEsR0FBSUwsSUFBWSxHQUFoQjtJQUN0QixJQUFNTSxRQUFRLEdBQUdQLDZDQUFNLENBQVMsRUFBRSxDQUFDO0lBRW5DLElBQU1RLGlCQUFpQixHQUFHLFNBQUNDLENBQXNDLEVBQUs7UUFDcEVILFFBQVEsQ0FBQ0csQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCSixRQUFRLENBQUNLLE9BQU8sR0FBR0gsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztLQUNuQztJQUVELElBQU0sTUFBUSxHQUFLZCxrRUFBUyxDQUFDTSxNQUFNLENBQUMsQ0FBNUJVLE1BQU07SUFFZCxJQUFJQSxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFNLENBQUMsQ0FBQztJQUVoQ2QsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBTWlCLE9BQU8sR0FBR0MsV0FBVyxDQUFDLFdBQU07WUFDaENiLFNBQVMsQ0FBQ0csUUFBUSxDQUFDSyxPQUFPLENBQUMsQ0FBQztTQUM3QixFQUFFLEdBQUcsQ0FBQztRQUNQLE9BQU87bUJBQU1NLGFBQWEsQ0FBQ0YsT0FBTyxDQUFDO1NBQUEsQ0FBQztLQUNyQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0UsOERBQUNYLE9BQUs7UUFDSmMsU0FBUyxFQUFDLGtLQUFrSztRQUM1S1IsS0FBSyxFQUFFTixLQUFLO1FBQ1plLFFBQVEsRUFBRVosaUJBQWlCO1FBQzNCYSxXQUFXLEVBQUMseURBQVk7Ozs7O1lBQ3hCLENBQ0Y7Q0FDSDtHQTdCdUJuQixNQUFNOztRQVVUTCw4REFBUzs7O0FBVk5LLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2gudHN4P2I5NmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNlYXJjaCBmcm9tIFwiQGxpYnMvY2xpZW50L3VzZVNlYXJjaFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiQGNvbXBvbmVudHMvSW5wdXRcIjtcclxuaW1wb3J0IHsgRmllbGRFcnJvcnMsIHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goKSB7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcclxuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPHN0cmluZz4oXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpbnB1dFJlZi5jdXJyZW50ID0gZS50YXJnZXQudmFsdWU7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgeyByZXN1bHQgfSA9IHVzZVNlYXJjaChzZWFyY2gpO1xyXG5cclxuICBpZiAocmVzdWx0KSBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGltZXJJZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgc2V0U2VhcmNoKGlucHV0UmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgNTAwKTtcclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHRpbWVySWQpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxpbnB1dFxyXG4gICAgICBjbGFzc05hbWU9XCIgYXBwZWFyYW5jZS1ub25lIHctZnVsbCBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLTN4bCBzaGFkb3ctc20gcGxhY2Vob2xkZXItZ3JheS00MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmx1ZS00MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNDAwXCJcclxuICAgICAgdmFsdWU9e2lucHV0fVxyXG4gICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgIHBsYWNlaG9sZGVyPVwi6rKA7IOJ7Ja066W8IOyeheugpe2VmOyEuOyalFwiXHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVNlYXJjaCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJTZWFyY2giLCJzZWFyY2giLCJzZXRTZWFyY2giLCJpbnB1dCIsInNldElucHV0IiwiaW5wdXRSZWYiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImN1cnJlbnQiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwidGltZXJJZCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImNsYXNzTmFtZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Search.tsx\n"));

/***/ })

});