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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\nfunction Carousel() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentSlide = ref[0], setCurrentSlide = ref[1];\n    var slideRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(\"\");\n    var TOTAL_SLIDES = 2;\n    //   const slideI = () => {\n    //     let pos = 0;\n    //     setInterval(() => {\n    //       pos = (pos + 1) % 3;\n    //       let target = document.querySelector(`#img_div_${pos}`);\n    //       target?.classList.add(\"-ml-[100%]\");\n    //     }, 2000);\n    //   };\n    var nextSlide = function() {\n        if (currentSlide >= TOTAL_SLIDES) {\n            setCurrentSlide(0);\n        } else {\n            setCurrentSlide(currentSlide + 1);\n        }\n    };\n    var changeSlide = function(index) {\n        setCurrentSlide(index);\n    };\n    var prevSlide = function() {\n        if (currentSlide === 0) {\n            setCurrentSlide(TOTAL_SLIDES);\n        } else {\n            setCurrentSlide(currentSlide - 1);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // slideRef.current = `-ml-[${100 * currentSlide}%]`;\n        var cur = \"-ml-[\".concat(100 * currentSlide, \"%]\");\n        console.log(cur);\n        console.log(currentSlide);\n        var imgCon = document.querySelector(\"#img_container\");\n        imgCon === null || imgCon === void 0 ? void 0 : imgCon.classList.remove(\"-ml-[0%]\");\n        imgCon === null || imgCon === void 0 ? void 0 : imgCon.classList.remove(\"-ml-[100%]\");\n        imgCon === null || imgCon === void 0 ? void 0 : imgCon.classList.remove(\"-ml-[200%]\");\n        imgCon === null || imgCon === void 0 ? void 0 : imgCon.classList.remove(\"-ml-[300%]\");\n        imgCon === null || imgCon === void 0 ? void 0 : imgCon.classList.add(cur);\n        var indexBCon = document.querySelector(\"#indexButtonContainer\");\n        indexBCon === null || indexBCon === void 0 ? void 0 : indexBCon.children[currentSlide].classList.add(\"bg-yellow-200\");\n    }, [\n        currentSlide\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" h-[45vh] overflow-hidden w-[100vw] max-h-[250px] min-h-[213px] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" overflow-hidden flex w-[300%] transition-all duration-1000\",\n                id: \"img_container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" h-[250px] w-[100%] \",\n                        id: \"img_div_1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://picsum.photos/1422/362?random=1\",\n                            className: \" h-full w-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" h-[250px] w-[100%] \",\n                        id: \"img_div_2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://picsum.photos/1422/362?random=2\",\n                            className: \" h-full w-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" h-[250px] w-[100%] \",\n                        id: \"img_div_3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://picsum.photos/1422/362?random=3\",\n                            className: \" h-full w-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between mx-5 space-x-8 relative bottom-36 opacity-60\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: prevSlide,\n                        className: \" bg-black text-white hover:text-black border-solid px-2 py-5 hover:bg-white transition-all rounded-xl font-bold\",\n                        children: \"<\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: nextSlide,\n                        className: \" bg-black text-white hover:text-black border-solid px-2 py-5 hover:bg-white transition-all rounded-xl font-bold\",\n                        children: \">\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"indexButtonContainer\",\n                className: \" absolute top-[85%] left-1/2 -translate-x-1/2 opacity-60\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function(e) {\n                            return changeSlide(0);\n                        },\n                        className: \" bg-black rounded-xl w-4 h-4 hover:bg-white transition-all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function(e) {\n                            return changeSlide(1);\n                        },\n                        className: \" bg-black rounded-xl w-4 h-4 mx-8 hover:bg-white transition-all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function(e) {\n                            return changeSlide(2);\n                        },\n                        className: \" bg-black rounded-xl w-4 h-4 hover:bg-white transition-all \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this));\n};\n_s(Carousel, \"5q7oD7AXiwo/LtZCiQOuiiTXOCM=\");\n_c = Carousel;\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQzs7d0JBQzdCZSxTQUFTLEVBQUMsQ0FBNEQ7Ozs7OztnR0FFdkVJLENBQU07d0JBQ0xDLE9BQU8sRUFBRSxRQUFRLENBQVBDLENBQUM7NEJBQUtyQixNQUFNLENBQU5BLFdBQVcsQ0FBQyxDQUFDOzt3QkFDN0JlLFNBQVMsRUFBQyxDQUFpRTs7Ozs7O2dHQUU1RUksQ0FBTTt3QkFDTEMsT0FBTyxFQUFFLFFBQVEsQ0FBUEMsQ0FBQzs0QkFBS3JCLE1BQU0sQ0FBTkEsV0FBVyxDQUFDLENBQUM7O3dCQUM3QmUsU0FBUyxFQUFDLENBQTZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLakYsQ0FBQztHQS9HdUJyQixRQUFRO0tBQVJBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC50c3g/M2UyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcm91c2VsKCkge1xyXG4gIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBzbGlkZVJlZiA9IHVzZVJlZihcIlwiKTtcclxuXHJcbiAgY29uc3QgVE9UQUxfU0xJREVTID0gMjtcclxuXHJcbiAgLy8gICBjb25zdCBzbGlkZUkgPSAoKSA9PiB7XHJcbiAgLy8gICAgIGxldCBwb3MgPSAwO1xyXG4gIC8vICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgLy8gICAgICAgcG9zID0gKHBvcyArIDEpICUgMztcclxuICAvLyAgICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2ltZ19kaXZfJHtwb3N9YCk7XHJcbiAgLy8gICAgICAgdGFyZ2V0Py5jbGFzc0xpc3QuYWRkKFwiLW1sLVsxMDAlXVwiKTtcclxuICAvLyAgICAgfSwgMjAwMCk7XHJcbiAgLy8gICB9O1xyXG5cclxuICBjb25zdCBuZXh0U2xpZGUgPSAoKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudFNsaWRlID49IFRPVEFMX1NMSURFUykge1xyXG4gICAgICBzZXRDdXJyZW50U2xpZGUoMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRDdXJyZW50U2xpZGUoY3VycmVudFNsaWRlICsgMSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhbmdlU2xpZGUgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgc2V0Q3VycmVudFNsaWRlKGluZGV4KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwcmV2U2xpZGUgPSAoKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudFNsaWRlID09PSAwKSB7XHJcbiAgICAgIHNldEN1cnJlbnRTbGlkZShUT1RBTF9TTElERVMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0Q3VycmVudFNsaWRlKGN1cnJlbnRTbGlkZSAtIDEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBzbGlkZVJlZi5jdXJyZW50ID0gYC1tbC1bJHsxMDAgKiBjdXJyZW50U2xpZGV9JV1gO1xyXG5cclxuICAgIGxldCBjdXIgPSBgLW1sLVskezEwMCAqIGN1cnJlbnRTbGlkZX0lXWA7XHJcbiAgICBjb25zb2xlLmxvZyhjdXIpO1xyXG4gICAgY29uc29sZS5sb2coY3VycmVudFNsaWRlKTtcclxuICAgIGxldCBpbWdDb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltZ19jb250YWluZXJcIik7XHJcbiAgICBpbWdDb24/LmNsYXNzTGlzdC5yZW1vdmUoXCItbWwtWzAlXVwiKTtcclxuICAgIGltZ0Nvbj8uY2xhc3NMaXN0LnJlbW92ZShcIi1tbC1bMTAwJV1cIik7XHJcbiAgICBpbWdDb24/LmNsYXNzTGlzdC5yZW1vdmUoXCItbWwtWzIwMCVdXCIpO1xyXG4gICAgaW1nQ29uPy5jbGFzc0xpc3QucmVtb3ZlKFwiLW1sLVszMDAlXVwiKTtcclxuICAgIGltZ0Nvbj8uY2xhc3NMaXN0LmFkZChjdXIpO1xyXG5cclxuICAgIGxldCBpbmRleEJDb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luZGV4QnV0dG9uQ29udGFpbmVyXCIpO1xyXG4gICAgaW5kZXhCQ29uPy5jaGlsZHJlbltjdXJyZW50U2xpZGVdLmNsYXNzTGlzdC5hZGQoXCJiZy15ZWxsb3ctMjAwXCIpO1xyXG4gIH0sIFtjdXJyZW50U2xpZGVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIGgtWzQ1dmhdIG92ZXJmbG93LWhpZGRlbiB3LVsxMDB2d10gbWF4LWgtWzI1MHB4XSBtaW4taC1bMjEzcHhdIHJlbGF0aXZlIGxlZnQtMS8yIHJpZ2h0LTEvMiAtbWwtWzUwdnddIC1tci1bNTB2d11cIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIiBvdmVyZmxvdy1oaWRkZW4gZmxleCB3LVszMDAlXSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xMDAwXCJcclxuICAgICAgICBpZD1cImltZ19jb250YWluZXJcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgaC1bMjUwcHhdIHctWzEwMCVdIFwiIGlkPVwiaW1nX2Rpdl8xXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xNDIyLzM2Mj9yYW5kb209MVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBoLWZ1bGwgdy1mdWxsXCJcclxuICAgICAgICAgID48L2ltZz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLVsyNTBweF0gdy1bMTAwJV0gXCIgaWQ9XCJpbWdfZGl2XzJcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzE0MjIvMzYyP3JhbmRvbT0yXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGgtZnVsbCB3LWZ1bGxcIlxyXG4gICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGgtWzI1MHB4XSB3LVsxMDAlXSBcIiBpZD1cImltZ19kaXZfM1wiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3BpY3N1bS5waG90b3MvMTQyMi8zNjI/cmFuZG9tPTNcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgaC1mdWxsIHctZnVsbFwiXHJcbiAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBteC01IHNwYWNlLXgtOCByZWxhdGl2ZSBib3R0b20tMzYgb3BhY2l0eS02MFwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e3ByZXZTbGlkZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIiBiZy1ibGFjayB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtYmxhY2sgYm9yZGVyLXNvbGlkIHB4LTIgcHktNSBob3ZlcjpiZy13aGl0ZSB0cmFuc2l0aW9uLWFsbCAgcm91bmRlZC14bCBmb250LWJvbGRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICZsdDtcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtuZXh0U2xpZGV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgYmctYmxhY2sgdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWJsYWNrIGJvcmRlci1zb2xpZCBweC0yIHB5LTUgaG92ZXI6Ymctd2hpdGUgdHJhbnNpdGlvbi1hbGwgcm91bmRlZC14bCBmb250LWJvbGRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICZndDtcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBpZD1cImluZGV4QnV0dG9uQ29udGFpbmVyXCJcclxuICAgICAgICBjbGFzc05hbWU9XCIgYWJzb2x1dGUgdG9wLVs4NSVdIGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIgb3BhY2l0eS02MFwiXHJcbiAgICAgID5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlU2xpZGUoMCl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgYmctYmxhY2sgcm91bmRlZC14bCB3LTQgaC00IGhvdmVyOmJnLXdoaXRlIHRyYW5zaXRpb24tYWxsXCJcclxuICAgICAgICA+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IGNoYW5nZVNsaWRlKDEpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIGJnLWJsYWNrIHJvdW5kZWQteGwgdy00IGgtNCBteC04IGhvdmVyOmJnLXdoaXRlIHRyYW5zaXRpb24tYWxsXCJcclxuICAgICAgICA+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IGNoYW5nZVNsaWRlKDIpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIGJnLWJsYWNrIHJvdW5kZWQteGwgdy00IGgtNCBob3ZlcjpiZy13aGl0ZSB0cmFuc2l0aW9uLWFsbCBcIlxyXG4gICAgICAgID48L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkNhcm91c2VsIiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwic2xpZGVSZWYiLCJUT1RBTF9TTElERVMiLCJuZXh0U2xpZGUiLCJjaGFuZ2VTbGlkZSIsImluZGV4IiwicHJldlNsaWRlIiwiY3VyIiwiY29uc29sZSIsImxvZyIsImltZ0NvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImluZGV4QkNvbiIsImNoaWxkcmVuIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJpbWciLCJzcmMiLCJidXR0b24iLCJvbkNsaWNrIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Carousel.tsx\n");

/***/ })

});