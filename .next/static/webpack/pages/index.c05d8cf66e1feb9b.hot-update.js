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

/***/ "./components/Carousel.tsx":
/*!*********************************!*\
  !*** ./components/Carousel.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\nfunction Carousel() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentSlide = ref[0], setCurrentSlide = ref[1];\n    var slideRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var TOTAL_SLIDES = 3;\n    var slideI = function() {\n        var pos = 0;\n        setInterval(function() {\n            pos = (pos + 1) % 4;\n            var target = document.querySelector(\"#img_div_\".concat(pos));\n            target === null || target === void 0 ? void 0 : target.classList.add(\"-ml-[100%]\");\n        }, 2000);\n    };\n    var slide = function() {\n        var pos = 0;\n        setInterval(function() {\n            pos = (pos + 1) % 3;\n            var target = document.querySelector(\"#img_\".concat(pos));\n            target === null || target === void 0 ? void 0 : target.classList.add(\"-ml-[100%]\");\n        }, 3000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        slideI();\n    }, [\n        currentSlide\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" h-[45vh] overflow-hidden w-[100%] \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" overflow-hidden flex w-[300%]\",\n                id: \"img_container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" h-[30vh] w-[100%] transition-all duration-1000\",\n                        id: \"img_div_1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://picsum.photos/1422/362?random=1\",\n                            className: \" w-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" h-[30vh] w-[100%] transition-all duration-1000\",\n                        id: \"img_div_2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://picsum.photos/1422/362?random=2\",\n                            className: \" w-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" h-[30vh] w-[100%] transition-all duration-1000\",\n                        id: \"img_div_3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://picsum.photos/1422/362?random=3\",\n                            className: \" w-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" justify-end w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" bg-gray-400 border-solid px-5 py-5 hover:bg-red-400 transition-all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" bg-gray-500 border-solid px-5 py-5 hover:bg-red-400 transition-all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" bg-gray-600 border-solid px-5 py-5 hover:bg-red-400 transition-all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this));\n};\n_s(Carousel, \"5q7oD7AXiwo/LtZCiQOuiiTXOCM=\");\n_c = Carousel;\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Nhcm91c2VsLnRzeD8zZTJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2Fyb3VzZWwoKSB7XHJcbiAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IHNsaWRlUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBUT1RBTF9TTElERVMgPSAzO1xyXG5cclxuICBjb25zdCBzbGlkZUkgPSAoKSA9PiB7XHJcbiAgICBsZXQgcG9zID0gMDtcclxuICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgcG9zID0gKHBvcyArIDEpICUgNDtcclxuICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNpbWdfZGl2XyR7cG9zfWApO1xyXG4gICAgICB0YXJnZXQ/LmNsYXNzTGlzdC5hZGQoXCItbWwtWzEwMCVdXCIpO1xyXG4gICAgfSwgMjAwMCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2xpZGUgPSAoKSA9PiB7XHJcbiAgICBsZXQgcG9zID0gMDtcclxuICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgcG9zID0gKHBvcyArIDEpICUgMztcclxuICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNpbWdfJHtwb3N9YCk7XHJcbiAgICAgIHRhcmdldD8uY2xhc3NMaXN0LmFkZChcIi1tbC1bMTAwJV1cIik7XHJcbiAgICB9LCAzMDAwKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2xpZGVJKCk7XHJcbiAgfSwgW2N1cnJlbnRTbGlkZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgaC1bNDV2aF0gb3ZlcmZsb3ctaGlkZGVuIHctWzEwMCVdIFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBvdmVyZmxvdy1oaWRkZW4gZmxleCB3LVszMDAlXVwiIGlkPVwiaW1nX2NvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIiBoLVszMHZoXSB3LVsxMDAlXSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xMDAwXCJcclxuICAgICAgICAgIGlkPVwiaW1nX2Rpdl8xXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xNDIyLzM2Mj9yYW5kb209MVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LWZ1bGxcIlxyXG4gICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIiBoLVszMHZoXSB3LVsxMDAlXSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xMDAwXCJcclxuICAgICAgICAgIGlkPVwiaW1nX2Rpdl8yXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xNDIyLzM2Mj9yYW5kb209MlwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LWZ1bGxcIlxyXG4gICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIiBoLVszMHZoXSB3LVsxMDAlXSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xMDAwXCJcclxuICAgICAgICAgIGlkPVwiaW1nX2Rpdl8zXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xNDIyLzM2Mj9yYW5kb209M1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LWZ1bGxcIlxyXG4gICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIganVzdGlmeS1lbmQgdy1mdWxsXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgYmctZ3JheS00MDAgYm9yZGVyLXNvbGlkIHB4LTUgcHktNSBob3ZlcjpiZy1yZWQtNDAwIHRyYW5zaXRpb24tYWxsXCI+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgYmctZ3JheS01MDAgYm9yZGVyLXNvbGlkIHB4LTUgcHktNSBob3ZlcjpiZy1yZWQtNDAwIHRyYW5zaXRpb24tYWxsXCI+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgYmctZ3JheS02MDAgYm9yZGVyLXNvbGlkIHB4LTUgcHktNSBob3ZlcjpiZy1yZWQtNDAwIHRyYW5zaXRpb24tYWxsXCI+PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJDYXJvdXNlbCIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsInNsaWRlUmVmIiwiVE9UQUxfU0xJREVTIiwic2xpZGVJIiwicG9zIiwic2V0SW50ZXJ2YWwiLCJ0YXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJzbGlkZSIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiaW1nIiwic3JjIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Carousel.tsx\n");

/***/ })

});