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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\nfunction Carousel() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentSlide = ref[0], setCurrentSlide = ref[1];\n    var slideRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(\"\");\n    var TOTAL_SLIDES = 2;\n    //   const slideI = () => {\n    //     let pos = 0;\n    //     setInterval(() => {\n    //       pos = (pos + 1) % 3;\n    //       let target = document.querySelector(`#img_div_${pos}`);\n    //       target?.classList.add(\"-ml-[100%]\");\n    //     }, 2000);\n    //   };\n    var nextSlide = function() {\n        if (currentSlide >= TOTAL_SLIDES) {\n            setCurrentSlide(0);\n        } else {\n            setCurrentSlide(currentSlide + 1);\n        }\n    };\n    var changeSlide = function(index) {\n        setCurrentSlide(index);\n    };\n    var prevSlide = function() {\n        if (currentSlide === 0) {\n            setCurrentSlide(TOTAL_SLIDES);\n        } else {\n            setCurrentSlide(currentSlide - 1);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // slideRef.current = `-ml-[${100 * currentSlide}%]`;\n        var cur = \"-ml-[\".concat(100 * currentSlide, \"%]\");\n        console.log(cur);\n        console.log(currentSlide);\n        var imgCon = document.querySelector(\"#img_container\");\n        imgCon === null || imgCon === void 0 ? void 0 : imgCon.classList.remove(\"-ml-[0%]\");\n        imgCon === null || imgCon === void 0 ? void 0 : imgCon.classList.remove(\"-ml-[100%]\");\n        imgCon === null || imgCon === void 0 ? void 0 : imgCon.classList.remove(\"-ml-[200%]\");\n        imgCon === null || imgCon === void 0 ? void 0 : imgCon.classList.remove(\"-ml-[300%]\");\n        imgCon === null || imgCon === void 0 ? void 0 : imgCon.classList.add(cur);\n    }, [\n        currentSlide\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" h-[45vh] overflow-hidden w-[100vw] max-h-[250px] min-h-[213px] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" overflow-hidden flex w-[300%] transition-all duration-1000\",\n                id: \"img_container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" h-[250px] w-[100%] \",\n                        id: \"img_div_1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://picsum.photos/1422/362?random=1\",\n                            className: \" h-full w-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" h-[250px] w-[100%] \",\n                        id: \"img_div_2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://picsum.photos/1422/362?random=2\",\n                            className: \" h-full w-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" h-[250px] w-[100%] \",\n                        id: \"img_div_3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://picsum.photos/1422/362?random=3\",\n                            className: \" h-full w-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between mx-5 space-x-8 relative bottom-36 opacity-60\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: prevSlide,\n                        className: \" bg-black text-white hover:text-black border-solid px-2 py-5 hover:bg-white transition-all rounded-xl font-bold\",\n                        children: \"<\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: nextSlide,\n                        className: \" bg-black text-white hover:text-black border-solid px-2 py-5 hover:bg-white transition-all rounded-xl font-bold\",\n                        children: \">\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" absolute top-[85%] left-1/2 -translate-x-1/2 opacity-60\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function(e) {\n                            return changeSlide(0);\n                        },\n                        className: \" bg-black rounded-xl w-4 h-4 hover:bg-white transition-all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function(e) {\n                            return changeSlide(1);\n                        },\n                        className: \" bg-black rounded-xl w-4 h-4 mx-8 hover:bg-white transition-all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function(e) {\n                            return changeSlide(2);\n                        },\n                        className: \" bg-black rounded-xl w-4 h-4 hover:bg-white transition-all focus:bg-yellow-400\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this));\n};\n_s(Carousel, \"5q7oD7AXiwo/LtZCiQOuiiTXOCM=\");\n_c = Carousel;\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDOzt3QkFDN0JhLFNBQVMsRUFBQyxDQUFnRjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BHLENBQUM7R0F6R3VCbkIsUUFBUTtLQUFSQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2Fyb3VzZWwudHN4PzNlMmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJvdXNlbCgpIHtcclxuICBjb25zdCBbY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3Qgc2xpZGVSZWYgPSB1c2VSZWYoXCJcIik7XHJcblxyXG4gIGNvbnN0IFRPVEFMX1NMSURFUyA9IDI7XHJcblxyXG4gIC8vICAgY29uc3Qgc2xpZGVJID0gKCkgPT4ge1xyXG4gIC8vICAgICBsZXQgcG9zID0gMDtcclxuICAvLyAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gIC8vICAgICAgIHBvcyA9IChwb3MgKyAxKSAlIDM7XHJcbiAgLy8gICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNpbWdfZGl2XyR7cG9zfWApO1xyXG4gIC8vICAgICAgIHRhcmdldD8uY2xhc3NMaXN0LmFkZChcIi1tbC1bMTAwJV1cIik7XHJcbiAgLy8gICAgIH0sIDIwMDApO1xyXG4gIC8vICAgfTtcclxuXHJcbiAgY29uc3QgbmV4dFNsaWRlID0gKCkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnRTbGlkZSA+PSBUT1RBTF9TTElERVMpIHtcclxuICAgICAgc2V0Q3VycmVudFNsaWRlKDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0Q3VycmVudFNsaWRlKGN1cnJlbnRTbGlkZSArIDEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoYW5nZVNsaWRlID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIHNldEN1cnJlbnRTbGlkZShpbmRleCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcHJldlNsaWRlID0gKCkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnRTbGlkZSA9PT0gMCkge1xyXG4gICAgICBzZXRDdXJyZW50U2xpZGUoVE9UQUxfU0xJREVTKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEN1cnJlbnRTbGlkZShjdXJyZW50U2xpZGUgLSAxKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gc2xpZGVSZWYuY3VycmVudCA9IGAtbWwtWyR7MTAwICogY3VycmVudFNsaWRlfSVdYDtcclxuXHJcbiAgICBsZXQgY3VyID0gYC1tbC1bJHsxMDAgKiBjdXJyZW50U2xpZGV9JV1gO1xyXG4gICAgY29uc29sZS5sb2coY3VyKTtcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTbGlkZSk7XHJcbiAgICBsZXQgaW1nQ29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWdfY29udGFpbmVyXCIpO1xyXG4gICAgaW1nQ29uPy5jbGFzc0xpc3QucmVtb3ZlKFwiLW1sLVswJV1cIik7XHJcbiAgICBpbWdDb24/LmNsYXNzTGlzdC5yZW1vdmUoXCItbWwtWzEwMCVdXCIpO1xyXG4gICAgaW1nQ29uPy5jbGFzc0xpc3QucmVtb3ZlKFwiLW1sLVsyMDAlXVwiKTtcclxuICAgIGltZ0Nvbj8uY2xhc3NMaXN0LnJlbW92ZShcIi1tbC1bMzAwJV1cIik7XHJcbiAgICBpbWdDb24/LmNsYXNzTGlzdC5hZGQoY3VyKTtcclxuICB9LCBbY3VycmVudFNsaWRlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLVs0NXZoXSBvdmVyZmxvdy1oaWRkZW4gdy1bMTAwdnddIG1heC1oLVsyNTBweF0gbWluLWgtWzIxM3B4XSByZWxhdGl2ZSBsZWZ0LTEvMiByaWdodC0xLzIgLW1sLVs1MHZ3XSAtbXItWzUwdnddXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCIgb3ZlcmZsb3ctaGlkZGVuIGZsZXggdy1bMzAwJV0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTAwMFwiXHJcbiAgICAgICAgaWQ9XCJpbWdfY29udGFpbmVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGgtWzI1MHB4XSB3LVsxMDAlXSBcIiBpZD1cImltZ19kaXZfMVwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3BpY3N1bS5waG90b3MvMTQyMi8zNjI/cmFuZG9tPTFcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgaC1mdWxsIHctZnVsbFwiXHJcbiAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgaC1bMjUwcHhdIHctWzEwMCVdIFwiIGlkPVwiaW1nX2Rpdl8yXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xNDIyLzM2Mj9yYW5kb209MlwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBoLWZ1bGwgdy1mdWxsXCJcclxuICAgICAgICAgID48L2ltZz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLVsyNTBweF0gdy1bMTAwJV0gXCIgaWQ9XCJpbWdfZGl2XzNcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzE0MjIvMzYyP3JhbmRvbT0zXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGgtZnVsbCB3LWZ1bGxcIlxyXG4gICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbXgtNSBzcGFjZS14LTggcmVsYXRpdmUgYm90dG9tLTM2IG9wYWNpdHktNjBcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtwcmV2U2xpZGV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgYmctYmxhY2sgdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWJsYWNrIGJvcmRlci1zb2xpZCBweC0yIHB5LTUgaG92ZXI6Ymctd2hpdGUgdHJhbnNpdGlvbi1hbGwgIHJvdW5kZWQteGwgZm9udC1ib2xkXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAmbHQ7XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17bmV4dFNsaWRlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIGJnLWJsYWNrIHRleHQtd2hpdGUgaG92ZXI6dGV4dC1ibGFjayBib3JkZXItc29saWQgcHgtMiBweS01IGhvdmVyOmJnLXdoaXRlIHRyYW5zaXRpb24tYWxsIHJvdW5kZWQteGwgZm9udC1ib2xkXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAmZ3Q7XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBhYnNvbHV0ZSB0b3AtWzg1JV0gbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMiBvcGFjaXR5LTYwXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IGNoYW5nZVNsaWRlKDApfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIGJnLWJsYWNrIHJvdW5kZWQteGwgdy00IGgtNCBob3ZlcjpiZy13aGl0ZSB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBjaGFuZ2VTbGlkZSgxKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIiBiZy1ibGFjayByb3VuZGVkLXhsIHctNCBoLTQgbXgtOCBob3ZlcjpiZy13aGl0ZSB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBjaGFuZ2VTbGlkZSgyKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIiBiZy1ibGFjayByb3VuZGVkLXhsIHctNCBoLTQgaG92ZXI6Ymctd2hpdGUgdHJhbnNpdGlvbi1hbGwgZm9jdXM6YmcteWVsbG93LTQwMFwiXHJcbiAgICAgICAgPjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQ2Fyb3VzZWwiLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJzbGlkZVJlZiIsIlRPVEFMX1NMSURFUyIsIm5leHRTbGlkZSIsImNoYW5nZVNsaWRlIiwiaW5kZXgiLCJwcmV2U2xpZGUiLCJjdXIiLCJjb25zb2xlIiwibG9nIiwiaW1nQ29uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJpbWciLCJzcmMiLCJidXR0b24iLCJvbkNsaWNrIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Carousel.tsx\n");

/***/ })

});