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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\nfunction Carousel() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentSlide = ref[0], setCurrentSlide = ref[1];\n    var slideRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(\"\");\n    var TOTAL_SLIDES = 2;\n    //   const slideI = () => {\n    //     let pos = 0;\n    //     setInterval(() => {\n    //       pos = (pos + 1) % 3;\n    //       let target = document.querySelector(`#img_div_${pos}`);\n    //       target?.classList.add(\"-ml-[100%]\");\n    //     }, 2000);\n    //   };\n    var nextSlide = function(input) {\n        if (input) {\n            setCurrentSlide(input);\n        }\n        if (currentSlide >= TOTAL_SLIDES) {\n            setCurrentSlide(0);\n        } else {\n            setCurrentSlide(currentSlide + 1);\n        }\n    };\n    var prevSlide = function() {\n        if (currentSlide === 0) {\n            setCurrentSlide(TOTAL_SLIDES);\n        } else {\n            setCurrentSlide(currentSlide - 1);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(currentSlide);\n        slideRef.current = \"-ml-[\".concat(100 * currentSlide, \"%]\");\n        console.log(slideRef);\n        var imgCon = document.querySelector(\"#img_container\");\n        imgCon === null || imgCon === void 0 ? void 0 : imgCon.classList.remove(\"-ml-[0%]\");\n        imgCon === null || imgCon === void 0 ? void 0 : imgCon.classList.remove(\"-ml-[100%]\");\n        imgCon === null || imgCon === void 0 ? void 0 : imgCon.classList.remove(\"-ml-[200%]\");\n        imgCon === null || imgCon === void 0 ? void 0 : imgCon.classList.remove(\"-ml-[300%]\");\n        imgCon === null || imgCon === void 0 ? void 0 : imgCon.classList.add(slideRef.current);\n    }, [\n        currentSlide\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" h-[45vh] overflow-hidden w-[100vw] max-h-[250px] min-h-[213px] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" overflow-hidden flex w-[300%] transition-all duration-1000\",\n                id: \"img_container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" h-[250px] w-[100%] \",\n                        id: \"img_div_1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://picsum.photos/1422/362?random=1\",\n                            className: \" h-full w-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" h-[250px] w-[100%] \",\n                        id: \"img_div_2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://picsum.photos/1422/362?random=2\",\n                            className: \" h-full w-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" h-[250px] w-[100%] \",\n                        id: \"img_div_3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://picsum.photos/1422/362?random=3\",\n                            className: \" h-full w-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between mx-5 space-x-8 relative bottom-36 opacity-60\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: prevSlide,\n                        className: \" bg-gray-400 border-solid px-2 py-5 hover:bg-white transition-all rounded-xl font-bold\",\n                        children: \"<\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: nextSlide,\n                        className: \" bg-gray-500 border-solid px-2 py-5 hover:bg-white transition-all rounded-xl font-bold\",\n                        children: \">\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" absolute top-[80%] left-1/2 -translate-x-1/2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" bg-gray-500 hover:bg-white\",\n                        children: \" asd\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" bg-gray-500 mx-4 hover:bg-white\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" bg-gray-500 hover:bg-white\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this));\n};\n_s(Carousel, \"5q7oD7AXiwo/LtZCiQOuiiTXOCM=\");\n_c = Carousel;\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBc0I7d0JBQUNDLEVBQUUsRUFBQyxDQUFXOzhHQUNqREMsQ0FBRzs0QkFDRkMsR0FBRyxFQUFDLENBQXlDOzRCQUM3Q0gsU0FBUyxFQUFDLENBQWdCOzs7Ozs7Ozs7OztnR0FHN0JELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFzQjt3QkFBQ0MsRUFBRSxFQUFDLENBQVc7OEdBQ2pEQyxDQUFHOzRCQUNGQyxHQUFHLEVBQUMsQ0FBeUM7NEJBQzdDSCxTQUFTLEVBQUMsQ0FBZ0I7Ozs7Ozs7Ozs7O2dHQUc3QkQsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQXNCO3dCQUFDQyxFQUFFLEVBQUMsQ0FBVzs4R0FDakRDLENBQUc7NEJBQ0ZDLEdBQUcsRUFBQyxDQUF5Qzs0QkFDN0NILFNBQVMsRUFBQyxDQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBSy9CRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBbUU7O2dHQUMvRUksQ0FBTTt3QkFDTEMsT0FBTyxFQUFFaEIsU0FBUzt3QkFDbEJXLFNBQVMsRUFBQyxDQUF5RjtrQ0FDcEcsQ0FFRDs7Ozs7O2dHQUNDSSxDQUFNO3dCQUNMQyxPQUFPLEVBQUVsQixTQUFTO3dCQUNsQmEsU0FBUyxFQUFDLENBQXdGO2tDQUNuRyxDQUVEOzs7Ozs7Ozs7Ozs7d0ZBRURELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUErQzs7Z0dBQzNESSxDQUFNO3dCQUFDSixTQUFTLEVBQUMsQ0FBNkI7a0NBQUMsQ0FBSTs7Ozs7O2dHQUNuREksQ0FBTTt3QkFBQ0osU0FBUyxFQUFDLENBQWtDOzs7Ozs7Z0dBQ25ESSxDQUFNO3dCQUFDSixTQUFTLEVBQUMsQ0FBNkI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl2RCxDQUFDO0dBN0Z1QmxCLFFBQVE7S0FBUkEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Nhcm91c2VsLnRzeD8zZTJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2Fyb3VzZWwoKSB7XHJcbiAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IHNsaWRlUmVmID0gdXNlUmVmKFwiXCIpO1xyXG5cclxuICBjb25zdCBUT1RBTF9TTElERVMgPSAyO1xyXG5cclxuICAvLyAgIGNvbnN0IHNsaWRlSSA9ICgpID0+IHtcclxuICAvLyAgICAgbGV0IHBvcyA9IDA7XHJcbiAgLy8gICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAvLyAgICAgICBwb3MgPSAocG9zICsgMSkgJSAzO1xyXG4gIC8vICAgICAgIGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjaW1nX2Rpdl8ke3Bvc31gKTtcclxuICAvLyAgICAgICB0YXJnZXQ/LmNsYXNzTGlzdC5hZGQoXCItbWwtWzEwMCVdXCIpO1xyXG4gIC8vICAgICB9LCAyMDAwKTtcclxuICAvLyAgIH07XHJcblxyXG4gIGNvbnN0IG5leHRTbGlkZSA9IChpbnB1dDogYW55KSA9PiB7XHJcbiAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgc2V0Q3VycmVudFNsaWRlKGlucHV0KTtcclxuICAgIH1cclxuICAgIGlmIChjdXJyZW50U2xpZGUgPj0gVE9UQUxfU0xJREVTKSB7XHJcbiAgICAgIHNldEN1cnJlbnRTbGlkZSgwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEN1cnJlbnRTbGlkZShjdXJyZW50U2xpZGUgKyAxKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBwcmV2U2xpZGUgPSAoKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudFNsaWRlID09PSAwKSB7XHJcbiAgICAgIHNldEN1cnJlbnRTbGlkZShUT1RBTF9TTElERVMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0Q3VycmVudFNsaWRlKGN1cnJlbnRTbGlkZSAtIDEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50U2xpZGUpO1xyXG4gICAgc2xpZGVSZWYuY3VycmVudCA9IGAtbWwtWyR7MTAwICogY3VycmVudFNsaWRlfSVdYDtcclxuICAgIGNvbnNvbGUubG9nKHNsaWRlUmVmKTtcclxuICAgIGxldCBpbWdDb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltZ19jb250YWluZXJcIik7XHJcbiAgICBpbWdDb24/LmNsYXNzTGlzdC5yZW1vdmUoXCItbWwtWzAlXVwiKTtcclxuICAgIGltZ0Nvbj8uY2xhc3NMaXN0LnJlbW92ZShcIi1tbC1bMTAwJV1cIik7XHJcbiAgICBpbWdDb24/LmNsYXNzTGlzdC5yZW1vdmUoXCItbWwtWzIwMCVdXCIpO1xyXG4gICAgaW1nQ29uPy5jbGFzc0xpc3QucmVtb3ZlKFwiLW1sLVszMDAlXVwiKTtcclxuICAgIGltZ0Nvbj8uY2xhc3NMaXN0LmFkZChzbGlkZVJlZi5jdXJyZW50KTtcclxuICB9LCBbY3VycmVudFNsaWRlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLVs0NXZoXSBvdmVyZmxvdy1oaWRkZW4gdy1bMTAwdnddIG1heC1oLVsyNTBweF0gbWluLWgtWzIxM3B4XSByZWxhdGl2ZSBsZWZ0LTEvMiByaWdodC0xLzIgLW1sLVs1MHZ3XSAtbXItWzUwdnddXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCIgb3ZlcmZsb3ctaGlkZGVuIGZsZXggdy1bMzAwJV0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTAwMFwiXHJcbiAgICAgICAgaWQ9XCJpbWdfY29udGFpbmVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGgtWzI1MHB4XSB3LVsxMDAlXSBcIiBpZD1cImltZ19kaXZfMVwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3BpY3N1bS5waG90b3MvMTQyMi8zNjI/cmFuZG9tPTFcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgaC1mdWxsIHctZnVsbFwiXHJcbiAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgaC1bMjUwcHhdIHctWzEwMCVdIFwiIGlkPVwiaW1nX2Rpdl8yXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xNDIyLzM2Mj9yYW5kb209MlwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBoLWZ1bGwgdy1mdWxsXCJcclxuICAgICAgICAgID48L2ltZz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLVsyNTBweF0gdy1bMTAwJV0gXCIgaWQ9XCJpbWdfZGl2XzNcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzE0MjIvMzYyP3JhbmRvbT0zXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGgtZnVsbCB3LWZ1bGxcIlxyXG4gICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbXgtNSBzcGFjZS14LTggcmVsYXRpdmUgYm90dG9tLTM2IG9wYWNpdHktNjBcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtwcmV2U2xpZGV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgYmctZ3JheS00MDAgYm9yZGVyLXNvbGlkIHB4LTIgcHktNSBob3ZlcjpiZy13aGl0ZSB0cmFuc2l0aW9uLWFsbCAgcm91bmRlZC14bCBmb250LWJvbGRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICZsdDtcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtuZXh0U2xpZGV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgYmctZ3JheS01MDAgYm9yZGVyLXNvbGlkIHB4LTIgcHktNSBob3ZlcjpiZy13aGl0ZSB0cmFuc2l0aW9uLWFsbCByb3VuZGVkLXhsIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgJmd0O1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYWJzb2x1dGUgdG9wLVs4MCVdIGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzJcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIiBiZy1ncmF5LTUwMCBob3ZlcjpiZy13aGl0ZVwiPiBhc2Q8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIiBiZy1ncmF5LTUwMCBteC00IGhvdmVyOmJnLXdoaXRlXCI+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgYmctZ3JheS01MDAgaG92ZXI6Ymctd2hpdGVcIj48L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkNhcm91c2VsIiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwic2xpZGVSZWYiLCJUT1RBTF9TTElERVMiLCJuZXh0U2xpZGUiLCJpbnB1dCIsInByZXZTbGlkZSIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50IiwiaW1nQ29uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJpbWciLCJzcmMiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Carousel.tsx\n");

/***/ })

});