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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\nfunction Carousel() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentSlide = ref[0], setCurrentSlide = ref[1];\n    var slideRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var TOTAL_SLIDES = 3;\n    var slideI = function() {\n        var pos = 0;\n        setInterval(function() {\n            pos = (pos + 1) % 4;\n            var target = document.querySelector(\"#img_div_\".concat(pos));\n            target === null || target === void 0 ? void 0 : target.classList.add(\"-ml-[100%]\");\n        }, 2000);\n    };\n    var nextSlide = function() {\n        if (currentSlide >= TOTAL_SLIDES) {\n            setCurrentSlide(0);\n        } else {\n            setCurrentSlide(currentSlide + 1);\n        }\n    };\n    var pervSlide = function() {\n        if (currentSlide === 0) {\n            setCurrentSlide(TOTAL_SLIDES);\n        } else {\n            setCurrentSlide(currentSlide + 1);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        slideI();\n    }, [\n        currentSlide\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" h-[45vh] overflow-hidden w-[100%] \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" overflow-hidden flex w-[300%]\",\n                id: \"img_container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" transition-all duration-1000\",\n                        id: \"img_div_1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://picsum.photos/1422/362?random=1\",\n                            className: \"w-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" transition-all duration-1000\",\n                        id: \"img_div_2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://picsum.photos/1422/362?random=2\",\n                            className: \"w-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" w-[100%] transition-all duration-1000\",\n                        id: \"img_div_3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://picsum.photos/1422/362?random=3\",\n                            className: \"w-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" justify-end w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" bg-gray-400 border-solid px-5 py-5 hover:bg-red-400 transition-all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" bg-gray-500 border-solid px-5 py-5 hover:bg-red-400 transition-all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" bg-gray-600 border-solid px-5 py-5 hover:bg-red-400 transition-all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this));\n};\n_s(Carousel, \"5q7oD7AXiwo/LtZCiQOuiiTXOCM=\");\n_c = Carousel;\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2Fyb3VzZWwudHN4PzNlMmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJvdXNlbCgpIHtcclxuICBjb25zdCBbY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3Qgc2xpZGVSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IFRPVEFMX1NMSURFUyA9IDM7XHJcblxyXG4gIGNvbnN0IHNsaWRlSSA9ICgpID0+IHtcclxuICAgIGxldCBwb3MgPSAwO1xyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBwb3MgPSAocG9zICsgMSkgJSA0O1xyXG4gICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2ltZ19kaXZfJHtwb3N9YCk7XHJcbiAgICAgIHRhcmdldD8uY2xhc3NMaXN0LmFkZChcIi1tbC1bMTAwJV1cIik7XHJcbiAgICB9LCAyMDAwKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBuZXh0U2xpZGUgPSAoKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudFNsaWRlID49IFRPVEFMX1NMSURFUykge1xyXG4gICAgICBzZXRDdXJyZW50U2xpZGUoMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRDdXJyZW50U2xpZGUoY3VycmVudFNsaWRlICsgMSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGVydlNsaWRlID0gKCkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnRTbGlkZSA9PT0gMCkge1xyXG4gICAgICBzZXRDdXJyZW50U2xpZGUoVE9UQUxfU0xJREVTKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEN1cnJlbnRTbGlkZShjdXJyZW50U2xpZGUgKyAxKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2xpZGVJKCk7XHJcbiAgfSwgW2N1cnJlbnRTbGlkZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgaC1bNDV2aF0gb3ZlcmZsb3ctaGlkZGVuIHctWzEwMCVdIFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBvdmVyZmxvdy1oaWRkZW4gZmxleCB3LVszMDAlXVwiIGlkPVwiaW1nX2NvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTEwMDBcIiBpZD1cImltZ19kaXZfMVwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3BpY3N1bS5waG90b3MvMTQyMi8zNjI/cmFuZG9tPTFcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTEwMDBcIiBpZD1cImltZ19kaXZfMlwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3BpY3N1bS5waG90b3MvMTQyMi8zNjI/cmFuZG9tPTJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctWzEwMCVdIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTEwMDBcIiBpZD1cImltZ19kaXZfM1wiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3BpY3N1bS5waG90b3MvMTQyMi8zNjI/cmFuZG9tPTNcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIganVzdGlmeS1lbmQgdy1mdWxsXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgYmctZ3JheS00MDAgYm9yZGVyLXNvbGlkIHB4LTUgcHktNSBob3ZlcjpiZy1yZWQtNDAwIHRyYW5zaXRpb24tYWxsXCI+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgYmctZ3JheS01MDAgYm9yZGVyLXNvbGlkIHB4LTUgcHktNSBob3ZlcjpiZy1yZWQtNDAwIHRyYW5zaXRpb24tYWxsXCI+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgYmctZ3JheS02MDAgYm9yZGVyLXNvbGlkIHB4LTUgcHktNSBob3ZlcjpiZy1yZWQtNDAwIHRyYW5zaXRpb24tYWxsXCI+PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJDYXJvdXNlbCIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsInNsaWRlUmVmIiwiVE9UQUxfU0xJREVTIiwic2xpZGVJIiwicG9zIiwic2V0SW50ZXJ2YWwiLCJ0YXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJuZXh0U2xpZGUiLCJwZXJ2U2xpZGUiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsImltZyIsInNyYyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Carousel.tsx\n");

/***/ })

});