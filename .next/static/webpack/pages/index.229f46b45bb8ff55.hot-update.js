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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\nfunction Carousel() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentSlide = ref[0], setCurrentSlide = ref[1];\n    var slideRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(\"\");\n    var TOTAL_SLIDES = 2;\n    //   const slideI = () => {\n    //     let pos = 0;\n    //     setInterval(() => {\n    //       pos = (pos + 1) % 3;\n    //       let target = document.querySelector(`#img_div_${pos}`);\n    //       target?.classList.add(\"-ml-[100%]\");\n    //     }, 2000);\n    //   };\n    var nextSlide = function(input) {\n        if (input) {\n            setCurrentSlide(input);\n        }\n        if (currentSlide >= TOTAL_SLIDES) {\n            setCurrentSlide(0);\n        } else {\n            setCurrentSlide(currentSlide + 1);\n        }\n    };\n    var prevSlide = function() {\n        if (currentSlide === 0) {\n            setCurrentSlide(TOTAL_SLIDES);\n        } else {\n            setCurrentSlide(currentSlide - 1);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(currentSlide);\n        slideRef.current = \"-ml-[\".concat(100 * currentSlide, \"%]\");\n        console.log(slideRef);\n        var imgCon = document.querySelector(\"#img_container\");\n        imgCon === null || imgCon === void 0 ? void 0 : imgCon.classList.remove(\"-ml-[0%]\");\n        imgCon === null || imgCon === void 0 ? void 0 : imgCon.classList.remove(\"-ml-[100%]\");\n        imgCon === null || imgCon === void 0 ? void 0 : imgCon.classList.remove(\"-ml-[200%]\");\n        imgCon === null || imgCon === void 0 ? void 0 : imgCon.classList.remove(\"-ml-[300%]\");\n        imgCon === null || imgCon === void 0 ? void 0 : imgCon.classList.add(slideRef.current);\n    }, [\n        currentSlide\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" h-[45vh] overflow-hidden w-[100vw] max-h-[250px] min-h-[213px] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" overflow-hidden flex w-[300%] transition-all duration-1000\",\n                id: \"img_container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" h-[250px] w-[100%] \",\n                        id: \"img_div_1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://picsum.photos/1422/362?random=1\",\n                            className: \" h-full w-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" h-[250px] w-[100%] \",\n                        id: \"img_div_2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://picsum.photos/1422/362?random=2\",\n                            className: \" h-full w-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" h-[250px] w-[100%] \",\n                        id: \"img_div_3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://picsum.photos/1422/362?random=3\",\n                            className: \" h-full w-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between mx-5 space-x-8 relative bottom-36 opacity-60\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: prevSlide,\n                        className: \" bg-gray-400 border-solid px-2 py-5 hover:bg-white transition-all rounded-xl font-bold\",\n                        children: \"<\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: nextSlide,\n                        className: \" bg-gray-500 border-solid px-2 py-5 hover:bg-white transition-all rounded-xl font-bold\",\n                        children: \">\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" absolute top-[85a%] left-1/2 -translate-x-1/2 opacity-60\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" bg-black rounded-xl w-4 h-4 hover:bg-white transition-all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" bg-black rounded-xl w-4 h-4 mx-8 hover:bg-white transition-all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" bg-black rounded-xl w-4 h-4 hover:bg-white transition-all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this));\n};\n_s(Carousel, \"5q7oD7AXiwo/LtZCiQOuiiTXOCM=\");\n_c = Carousel;\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBc0I7d0JBQUNDLEVBQUUsRUFBQyxDQUFXOzhHQUNqREMsQ0FBRzs0QkFDRkMsR0FBRyxFQUFDLENBQXlDOzRCQUM3Q0gsU0FBUyxFQUFDLENBQWdCOzs7Ozs7Ozs7OztnR0FHN0JELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFzQjt3QkFBQ0MsRUFBRSxFQUFDLENBQVc7OEdBQ2pEQyxDQUFHOzRCQUNGQyxHQUFHLEVBQUMsQ0FBeUM7NEJBQzdDSCxTQUFTLEVBQUMsQ0FBZ0I7Ozs7Ozs7Ozs7O2dHQUc3QkQsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQXNCO3dCQUFDQyxFQUFFLEVBQUMsQ0FBVzs4R0FDakRDLENBQUc7NEJBQ0ZDLEdBQUcsRUFBQyxDQUF5Qzs0QkFDN0NILFNBQVMsRUFBQyxDQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBSy9CRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBbUU7O2dHQUMvRUksQ0FBTTt3QkFDTEMsT0FBTyxFQUFFaEIsU0FBUzt3QkFDbEJXLFNBQVMsRUFBQyxDQUF5RjtrQ0FDcEcsQ0FFRDs7Ozs7O2dHQUNDSSxDQUFNO3dCQUNMQyxPQUFPLEVBQUVsQixTQUFTO3dCQUNsQmEsU0FBUyxFQUFDLENBQXdGO2tDQUNuRyxDQUVEOzs7Ozs7Ozs7Ozs7d0ZBRURELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUEyRDs7Z0dBQ3ZFSSxDQUFNO3dCQUFDSixTQUFTLEVBQUMsQ0FBNEQ7Ozs7OztnR0FDN0VJLENBQU07d0JBQUNKLFNBQVMsRUFBQyxDQUFpRTs7Ozs7O2dHQUNsRkksQ0FBTTt3QkFBQ0osU0FBUyxFQUFDLENBQTREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdEYsQ0FBQztHQTdGdUJsQixRQUFRO0tBQVJBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC50c3g/M2UyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcm91c2VsKCkge1xyXG4gIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBzbGlkZVJlZiA9IHVzZVJlZihcIlwiKTtcclxuXHJcbiAgY29uc3QgVE9UQUxfU0xJREVTID0gMjtcclxuXHJcbiAgLy8gICBjb25zdCBzbGlkZUkgPSAoKSA9PiB7XHJcbiAgLy8gICAgIGxldCBwb3MgPSAwO1xyXG4gIC8vICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgLy8gICAgICAgcG9zID0gKHBvcyArIDEpICUgMztcclxuICAvLyAgICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2ltZ19kaXZfJHtwb3N9YCk7XHJcbiAgLy8gICAgICAgdGFyZ2V0Py5jbGFzc0xpc3QuYWRkKFwiLW1sLVsxMDAlXVwiKTtcclxuICAvLyAgICAgfSwgMjAwMCk7XHJcbiAgLy8gICB9O1xyXG5cclxuICBjb25zdCBuZXh0U2xpZGUgPSAoaW5wdXQ6IGFueSkgPT4ge1xyXG4gICAgaWYgKGlucHV0KSB7XHJcbiAgICAgIHNldEN1cnJlbnRTbGlkZShpbnB1dCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudFNsaWRlID49IFRPVEFMX1NMSURFUykge1xyXG4gICAgICBzZXRDdXJyZW50U2xpZGUoMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRDdXJyZW50U2xpZGUoY3VycmVudFNsaWRlICsgMSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcHJldlNsaWRlID0gKCkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnRTbGlkZSA9PT0gMCkge1xyXG4gICAgICBzZXRDdXJyZW50U2xpZGUoVE9UQUxfU0xJREVTKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEN1cnJlbnRTbGlkZShjdXJyZW50U2xpZGUgLSAxKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coY3VycmVudFNsaWRlKTtcclxuICAgIHNsaWRlUmVmLmN1cnJlbnQgPSBgLW1sLVskezEwMCAqIGN1cnJlbnRTbGlkZX0lXWA7XHJcbiAgICBjb25zb2xlLmxvZyhzbGlkZVJlZik7XHJcbiAgICBsZXQgaW1nQ29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWdfY29udGFpbmVyXCIpO1xyXG4gICAgaW1nQ29uPy5jbGFzc0xpc3QucmVtb3ZlKFwiLW1sLVswJV1cIik7XHJcbiAgICBpbWdDb24/LmNsYXNzTGlzdC5yZW1vdmUoXCItbWwtWzEwMCVdXCIpO1xyXG4gICAgaW1nQ29uPy5jbGFzc0xpc3QucmVtb3ZlKFwiLW1sLVsyMDAlXVwiKTtcclxuICAgIGltZ0Nvbj8uY2xhc3NMaXN0LnJlbW92ZShcIi1tbC1bMzAwJV1cIik7XHJcbiAgICBpbWdDb24/LmNsYXNzTGlzdC5hZGQoc2xpZGVSZWYuY3VycmVudCk7XHJcbiAgfSwgW2N1cnJlbnRTbGlkZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgaC1bNDV2aF0gb3ZlcmZsb3ctaGlkZGVuIHctWzEwMHZ3XSBtYXgtaC1bMjUwcHhdIG1pbi1oLVsyMTNweF0gcmVsYXRpdmUgbGVmdC0xLzIgcmlnaHQtMS8yIC1tbC1bNTB2d10gLW1yLVs1MHZ3XVwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiIG92ZXJmbG93LWhpZGRlbiBmbGV4IHctWzMwMCVdIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTEwMDBcIlxyXG4gICAgICAgIGlkPVwiaW1nX2NvbnRhaW5lclwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLVsyNTBweF0gdy1bMTAwJV0gXCIgaWQ9XCJpbWdfZGl2XzFcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzE0MjIvMzYyP3JhbmRvbT0xXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGgtZnVsbCB3LWZ1bGxcIlxyXG4gICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGgtWzI1MHB4XSB3LVsxMDAlXSBcIiBpZD1cImltZ19kaXZfMlwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3BpY3N1bS5waG90b3MvMTQyMi8zNjI/cmFuZG9tPTJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgaC1mdWxsIHctZnVsbFwiXHJcbiAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgaC1bMjUwcHhdIHctWzEwMCVdIFwiIGlkPVwiaW1nX2Rpdl8zXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xNDIyLzM2Mj9yYW5kb209M1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBoLWZ1bGwgdy1mdWxsXCJcclxuICAgICAgICAgID48L2ltZz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG14LTUgc3BhY2UteC04IHJlbGF0aXZlIGJvdHRvbS0zNiBvcGFjaXR5LTYwXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17cHJldlNsaWRlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIGJnLWdyYXktNDAwIGJvcmRlci1zb2xpZCBweC0yIHB5LTUgaG92ZXI6Ymctd2hpdGUgdHJhbnNpdGlvbi1hbGwgIHJvdW5kZWQteGwgZm9udC1ib2xkXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAmbHQ7XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17bmV4dFNsaWRlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIGJnLWdyYXktNTAwIGJvcmRlci1zb2xpZCBweC0yIHB5LTUgaG92ZXI6Ymctd2hpdGUgdHJhbnNpdGlvbi1hbGwgcm91bmRlZC14bCBmb250LWJvbGRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICZndDtcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGFic29sdXRlIHRvcC1bODVhJV0gbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMiBvcGFjaXR5LTYwXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgYmctYmxhY2sgcm91bmRlZC14bCB3LTQgaC00IGhvdmVyOmJnLXdoaXRlIHRyYW5zaXRpb24tYWxsXCI+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgYmctYmxhY2sgcm91bmRlZC14bCB3LTQgaC00IG14LTggaG92ZXI6Ymctd2hpdGUgdHJhbnNpdGlvbi1hbGxcIj48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIiBiZy1ibGFjayByb3VuZGVkLXhsIHctNCBoLTQgaG92ZXI6Ymctd2hpdGUgdHJhbnNpdGlvbi1hbGxcIj48L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkNhcm91c2VsIiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwic2xpZGVSZWYiLCJUT1RBTF9TTElERVMiLCJuZXh0U2xpZGUiLCJpbnB1dCIsInByZXZTbGlkZSIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50IiwiaW1nQ29uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJpbWciLCJzcmMiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Carousel.tsx\n");

/***/ })

});