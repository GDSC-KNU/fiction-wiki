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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction Carousel() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentSlide = ref[0], setCurrentSlide = ref[1];\n    var slideRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(\"\");\n    var TOTAL_SLIDES = 3;\n    //   const slideI = () => {\n    //     let pos = 0;\n    //     setInterval(() => {\n    //       pos = (pos + 1) % 4;\n    //       let target = document.querySelector(`#img_div_${pos}`);\n    //       target?.classList.add(\"-ml-[100%]\");\n    //     }, 2000);\n    //   };\n    var nextSlide = function() {\n        if (currentSlide >= TOTAL_SLIDES) {\n            setCurrentSlide(0);\n        } else {\n            setCurrentSlide(currentSlide + 1);\n        }\n    };\n    var prevSlide = function() {\n        if (currentSlide === 0) {\n            setCurrentSlide(TOTAL_SLIDES);\n        } else {\n            setCurrentSlide(currentSlide - 1);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(currentSlide);\n        slideRef.current = \"-ml-[\".concat(100 * currentSlide, \"%]\");\n        console.log(slideRef);\n        var imgDiv = document.querySelector(\"#img_div_1\");\n        imgDiv === null || imgDiv === void 0 ? void 0 : imgDiv.classList.add(slideRef.current);\n    }, [\n        currentSlide\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" h-[45vh] overflow-hidden w-[100%] \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" -ml-[150%] overflow-hidden flex w-[300%]\",\n                id: \"img_container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" h-[30vh] w-[100%] transition-all duration-1000\",\n                        id: \"img_div_1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://picsum.photos/1422/362?random=1\",\n                            className: \" h-full w-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" h-[30vh] w-[100%] transition-all duration-1000\",\n                        id: \"img_div_2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://picsum.photos/1422/362?random=2\",\n                            className: \" h-full w-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" h-[30vh] w-[100%] transition-all duration-1000\",\n                        id: \"img_div_3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://picsum.photos/1422/362?random=3\",\n                            className: \" h-full w-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" justify-end w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: prevSlide,\n                        className: \" bg-gray-400 border-solid px-5 py-5 hover:bg-red-400 transition-all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: nextSlide,\n                        className: \" bg-gray-500 border-solid px-5 py-5 hover:bg-red-400 transition-all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" bg-gray-600 border-solid px-5 py-5 hover:bg-red-400 transition-all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this));\n};\n_s(Carousel, \"5q7oD7AXiwo/LtZCiQOuiiTXOCM=\");\n_c = Carousel;\nvar a = 2;\nvar copiedA = a;\na = 3;\nconsole.log(a);\nconsole.log(copiedA);\nvar user = {\n    name: \"hyeonwook\",\n    urls: {\n        portfolio: \"www.github.com/kirschx\",\n        blog: \"http.blog.naver.com/hyeonwook\",\n        age: 27\n    }\n};\nvar user2 = _objectSpread({}, user);\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2xCVyxTQUFTLEVBQUMsQ0FBcUU7Ozs7OztnR0FFaEZJLENBQU07d0JBQUNKLFNBQVMsRUFBQyxDQUFxRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSS9GLENBQUM7R0F0RnVCaEIsUUFBUTtLQUFSQSxRQUFRO0FBd0ZoQyxHQUFHLENBQUNzQixDQUFDLEdBQUcsQ0FBQztBQUNULEdBQUcsQ0FBQ0MsT0FBTyxHQUFHRCxDQUFDO0FBRWZBLENBQUMsR0FBRyxDQUFDO0FBRUxmLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYyxDQUFDO0FBQ2JmLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZSxPQUFPO0FBRW5CLEdBQUcsQ0FBQ0MsSUFBSSxHQUFHLENBQUM7SUFDVkMsSUFBSSxFQUFFLENBQVc7SUFDakJDLElBQUksRUFBRSxDQUFDO1FBQ0xDLFNBQVMsRUFBRSxDQUF3QjtRQUNuQ0MsSUFBSSxFQUFFLENBQStCO1FBQ3JDQyxHQUFHLEVBQUUsRUFBRTtJQUNULENBQUM7QUFDSCxDQUFDO0FBRUQsR0FBRyxDQUFDQyxLQUFLLHFCQUFRTixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2Fyb3VzZWwudHN4PzNlMmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJvdXNlbCgpIHtcclxuICBjb25zdCBbY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3Qgc2xpZGVSZWYgPSB1c2VSZWYoXCJcIik7XHJcblxyXG4gIGNvbnN0IFRPVEFMX1NMSURFUyA9IDM7XHJcblxyXG4gIC8vICAgY29uc3Qgc2xpZGVJID0gKCkgPT4ge1xyXG4gIC8vICAgICBsZXQgcG9zID0gMDtcclxuICAvLyAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gIC8vICAgICAgIHBvcyA9IChwb3MgKyAxKSAlIDQ7XHJcbiAgLy8gICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNpbWdfZGl2XyR7cG9zfWApO1xyXG4gIC8vICAgICAgIHRhcmdldD8uY2xhc3NMaXN0LmFkZChcIi1tbC1bMTAwJV1cIik7XHJcbiAgLy8gICAgIH0sIDIwMDApO1xyXG4gIC8vICAgfTtcclxuXHJcbiAgY29uc3QgbmV4dFNsaWRlID0gKCkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnRTbGlkZSA+PSBUT1RBTF9TTElERVMpIHtcclxuICAgICAgc2V0Q3VycmVudFNsaWRlKDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0Q3VycmVudFNsaWRlKGN1cnJlbnRTbGlkZSArIDEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByZXZTbGlkZSA9ICgpID0+IHtcclxuICAgIGlmIChjdXJyZW50U2xpZGUgPT09IDApIHtcclxuICAgICAgc2V0Q3VycmVudFNsaWRlKFRPVEFMX1NMSURFUyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRDdXJyZW50U2xpZGUoY3VycmVudFNsaWRlIC0gMSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTbGlkZSk7XHJcbiAgICBzbGlkZVJlZi5jdXJyZW50ID0gYC1tbC1bJHsxMDAgKiBjdXJyZW50U2xpZGV9JV1gO1xyXG4gICAgY29uc29sZS5sb2coc2xpZGVSZWYpO1xyXG4gICAgbGV0IGltZ0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1nX2Rpdl8xXCIpO1xyXG4gICAgaW1nRGl2Py5jbGFzc0xpc3QuYWRkKHNsaWRlUmVmLmN1cnJlbnQpO1xyXG4gIH0sIFtjdXJyZW50U2xpZGVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIGgtWzQ1dmhdIG92ZXJmbG93LWhpZGRlbiB3LVsxMDAlXSBcIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIiAtbWwtWzE1MCVdIG92ZXJmbG93LWhpZGRlbiBmbGV4IHctWzMwMCVdXCJcclxuICAgICAgICBpZD1cImltZ19jb250YWluZXJcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIGgtWzMwdmhdIHctWzEwMCVdIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTEwMDBcIlxyXG4gICAgICAgICAgaWQ9XCJpbWdfZGl2XzFcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzE0MjIvMzYyP3JhbmRvbT0xXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGgtZnVsbCB3LWZ1bGxcIlxyXG4gICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIiBoLVszMHZoXSB3LVsxMDAlXSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xMDAwXCJcclxuICAgICAgICAgIGlkPVwiaW1nX2Rpdl8yXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xNDIyLzM2Mj9yYW5kb209MlwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBoLWZ1bGwgdy1mdWxsXCJcclxuICAgICAgICAgID48L2ltZz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgaC1bMzB2aF0gdy1bMTAwJV0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTAwMFwiXHJcbiAgICAgICAgICBpZD1cImltZ19kaXZfM1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3BpY3N1bS5waG90b3MvMTQyMi8zNjI/cmFuZG9tPTNcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgaC1mdWxsIHctZnVsbFwiXHJcbiAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBqdXN0aWZ5LWVuZCB3LWZ1bGxcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtwcmV2U2xpZGV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgYmctZ3JheS00MDAgYm9yZGVyLXNvbGlkIHB4LTUgcHktNSBob3ZlcjpiZy1yZWQtNDAwIHRyYW5zaXRpb24tYWxsXCJcclxuICAgICAgICA+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17bmV4dFNsaWRlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIGJnLWdyYXktNTAwIGJvcmRlci1zb2xpZCBweC01IHB5LTUgaG92ZXI6YmctcmVkLTQwMCB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiIGJnLWdyYXktNjAwIGJvcmRlci1zb2xpZCBweC01IHB5LTUgaG92ZXI6YmctcmVkLTQwMCB0cmFuc2l0aW9uLWFsbFwiPjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmxldCBhID0gMjtcclxubGV0IGNvcGllZEEgPSBhO1xyXG5cclxuYSA9IDM7XHJcblxyXG5jb25zb2xlLmxvZyhhKTtcclxuY29uc29sZS5sb2coY29waWVkQSk7XHJcblxyXG52YXIgdXNlciA9IHtcclxuICBuYW1lOiBcImh5ZW9ud29va1wiLFxyXG4gIHVybHM6IHtcclxuICAgIHBvcnRmb2xpbzogXCJ3d3cuZ2l0aHViLmNvbS9raXJzY2h4XCIsXHJcbiAgICBibG9nOiBcImh0dHAuYmxvZy5uYXZlci5jb20vaHllb253b29rXCIsXHJcbiAgICBhZ2U6IDI3LFxyXG4gIH0sXHJcbn07XHJcblxyXG5sZXQgdXNlcjIgPSB7IC4uLnVzZXIgfTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQ2Fyb3VzZWwiLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJzbGlkZVJlZiIsIlRPVEFMX1NMSURFUyIsIm5leHRTbGlkZSIsInByZXZTbGlkZSIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50IiwiaW1nRGl2IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJpbWciLCJzcmMiLCJidXR0b24iLCJvbkNsaWNrIiwiYSIsImNvcGllZEEiLCJ1c2VyIiwibmFtZSIsInVybHMiLCJwb3J0Zm9saW8iLCJibG9nIiwiYWdlIiwidXNlcjIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Carousel.tsx\n");

/***/ })

});