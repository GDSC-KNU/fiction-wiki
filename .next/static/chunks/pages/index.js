/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./components/Carousel.tsx":
/*!*********************************!*\
  !*** ./components/Carousel.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\nfunction Carousel() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentSlide = ref[0], setCurrentSlide = ref[1];\n    var slideRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(\"\");\n    var TOTAL_SLIDES = 2;\n    //   const slideI = () => {\n    //     let pos = 0;\n    //     setInterval(() => {\n    //       pos = (pos + 1) % 4;\n    //       let target = document.querySelector(`#img_div_${pos}`);\n    //       target?.classList.add(\"-ml-[100%]\");\n    //     }, 2000);\n    //   };\n    var nextSlide = function() {\n        if (currentSlide >= TOTAL_SLIDES) {\n            setCurrentSlide(0);\n        } else {\n            setCurrentSlide(currentSlide + 1);\n        }\n    };\n    var prevSlide = function() {\n        if (currentSlide === 0) {\n            setCurrentSlide(TOTAL_SLIDES);\n        } else {\n            setCurrentSlide(currentSlide - 1);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(currentSlide);\n        slideRef.current = \"-ml-[\".concat(100 * currentSlide, \"%]\");\n        console.log(slideRef);\n        var imgCon = document.querySelector(\"#img_container\");\n        imgCon === null || imgCon === void 0 ? void 0 : imgCon.classList.remove(\"-ml-[0%]\");\n        imgCon === null || imgCon === void 0 ? void 0 : imgCon.classList.remove(\"-ml-[100%]\");\n        imgCon === null || imgCon === void 0 ? void 0 : imgCon.classList.remove(\"-ml-[200%]\");\n        imgCon === null || imgCon === void 0 ? void 0 : imgCon.classList.remove(\"-ml-[300%]\");\n        imgCon === null || imgCon === void 0 ? void 0 : imgCon.classList.add(slideRef.current);\n    }, [\n        currentSlide\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" h-[45vh] overflow-hidden w-[100%] max-h-[250px] min-h-[213px] !mx-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" overflow-hidden flex w-[300%] transition-all duration-1000\",\n                id: \"img_container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" h-[250px] w-[100%] \",\n                        id: \"img_div_1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://picsum.photos/1422/362?random=1\",\n                            className: \" h-full w-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" h-[250px] w-[100%] \",\n                        id: \"img_div_2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://picsum.photos/1422/362?random=2\",\n                            className: \" h-full w-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" h-[250px] w-[100%] \",\n                        id: \"img_div_3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://picsum.photos/1422/362?random=3\",\n                            className: \" h-full w-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between mx-5 space-x-8 relative bottom-36 opacity-60\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: prevSlide,\n                        className: \" bg-gray-400 border-solid px-2 py-5 hover:bg-white transition-all rounded-xl font-bold\",\n                        children: \"<\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: nextSlide,\n                        className: \" bg-gray-500 border-solid px-2 py-5 hover:bg-white transition-all rounded-xl font-bold\",\n                        children: \">\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this));\n};\n_s(Carousel, \"5q7oD7AXiwo/LtZCiQOuiiTXOCM=\");\n_c = Carousel;\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLEVBQUMsQ0FBZ0I7Ozs7Ozs7Ozs7O2dHQUc3QkQsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQXNCO3dCQUFDQyxFQUFFLEVBQUMsQ0FBVzs4R0FDakRDLENBQUc7NEJBQ0ZDLEdBQUcsRUFBQyxDQUF5Qzs0QkFDN0NILFNBQVMsRUFBQyxDQUFnQjs7Ozs7Ozs7Ozs7Z0dBRzdCRCxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBc0I7d0JBQUNDLEVBQUUsRUFBQyxDQUFXOzhHQUNqREMsQ0FBRzs0QkFDRkMsR0FBRyxFQUFDLENBQXlDOzRCQUM3Q0gsU0FBUyxFQUFDLENBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFLL0JELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFtRTs7Z0dBQy9FSSxDQUFNO3dCQUNMQyxPQUFPLEVBQUVoQixTQUFTO3dCQUNsQlcsU0FBUyxFQUFDLENBQXlGO2tDQUNwRyxDQUVEOzs7Ozs7Z0dBQ0NJLENBQU07d0JBQ0xDLE9BQU8sRUFBRWpCLFNBQVM7d0JBQ2xCWSxTQUFTLEVBQUMsQ0FBd0Y7a0NBQ25HLENBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlSLENBQUM7R0FyRnVCakIsUUFBUTtLQUFSQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2Fyb3VzZWwudHN4PzNlMmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJvdXNlbCgpIHtcclxuICBjb25zdCBbY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3Qgc2xpZGVSZWYgPSB1c2VSZWYoXCJcIik7XHJcblxyXG4gIGNvbnN0IFRPVEFMX1NMSURFUyA9IDI7XHJcblxyXG4gIC8vICAgY29uc3Qgc2xpZGVJID0gKCkgPT4ge1xyXG4gIC8vICAgICBsZXQgcG9zID0gMDtcclxuICAvLyAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gIC8vICAgICAgIHBvcyA9IChwb3MgKyAxKSAlIDQ7XHJcbiAgLy8gICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNpbWdfZGl2XyR7cG9zfWApO1xyXG4gIC8vICAgICAgIHRhcmdldD8uY2xhc3NMaXN0LmFkZChcIi1tbC1bMTAwJV1cIik7XHJcbiAgLy8gICAgIH0sIDIwMDApO1xyXG4gIC8vICAgfTtcclxuXHJcbiAgY29uc3QgbmV4dFNsaWRlID0gKCkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnRTbGlkZSA+PSBUT1RBTF9TTElERVMpIHtcclxuICAgICAgc2V0Q3VycmVudFNsaWRlKDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0Q3VycmVudFNsaWRlKGN1cnJlbnRTbGlkZSArIDEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByZXZTbGlkZSA9ICgpID0+IHtcclxuICAgIGlmIChjdXJyZW50U2xpZGUgPT09IDApIHtcclxuICAgICAgc2V0Q3VycmVudFNsaWRlKFRPVEFMX1NMSURFUyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRDdXJyZW50U2xpZGUoY3VycmVudFNsaWRlIC0gMSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTbGlkZSk7XHJcbiAgICBzbGlkZVJlZi5jdXJyZW50ID0gYC1tbC1bJHsxMDAgKiBjdXJyZW50U2xpZGV9JV1gO1xyXG4gICAgY29uc29sZS5sb2coc2xpZGVSZWYpO1xyXG4gICAgbGV0IGltZ0NvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1nX2NvbnRhaW5lclwiKTtcclxuICAgIGltZ0Nvbj8uY2xhc3NMaXN0LnJlbW92ZShcIi1tbC1bMCVdXCIpO1xyXG4gICAgaW1nQ29uPy5jbGFzc0xpc3QucmVtb3ZlKFwiLW1sLVsxMDAlXVwiKTtcclxuICAgIGltZ0Nvbj8uY2xhc3NMaXN0LnJlbW92ZShcIi1tbC1bMjAwJV1cIik7XHJcbiAgICBpbWdDb24/LmNsYXNzTGlzdC5yZW1vdmUoXCItbWwtWzMwMCVdXCIpO1xyXG4gICAgaW1nQ29uPy5jbGFzc0xpc3QuYWRkKHNsaWRlUmVmLmN1cnJlbnQpO1xyXG4gIH0sIFtjdXJyZW50U2xpZGVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIGgtWzQ1dmhdIG92ZXJmbG93LWhpZGRlbiB3LVsxMDAlXSBtYXgtaC1bMjUwcHhdIG1pbi1oLVsyMTNweF0gIW14LTBcIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIiBvdmVyZmxvdy1oaWRkZW4gZmxleCB3LVszMDAlXSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xMDAwXCJcclxuICAgICAgICBpZD1cImltZ19jb250YWluZXJcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgaC1bMjUwcHhdIHctWzEwMCVdIFwiIGlkPVwiaW1nX2Rpdl8xXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xNDIyLzM2Mj9yYW5kb209MVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBoLWZ1bGwgdy1mdWxsXCJcclxuICAgICAgICAgID48L2ltZz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLVsyNTBweF0gdy1bMTAwJV0gXCIgaWQ9XCJpbWdfZGl2XzJcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzE0MjIvMzYyP3JhbmRvbT0yXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGgtZnVsbCB3LWZ1bGxcIlxyXG4gICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGgtWzI1MHB4XSB3LVsxMDAlXSBcIiBpZD1cImltZ19kaXZfM1wiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3BpY3N1bS5waG90b3MvMTQyMi8zNjI/cmFuZG9tPTNcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgaC1mdWxsIHctZnVsbFwiXHJcbiAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBteC01IHNwYWNlLXgtOCByZWxhdGl2ZSBib3R0b20tMzYgb3BhY2l0eS02MFwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e3ByZXZTbGlkZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIiBiZy1ncmF5LTQwMCBib3JkZXItc29saWQgcHgtMiBweS01IGhvdmVyOmJnLXdoaXRlIHRyYW5zaXRpb24tYWxsICByb3VuZGVkLXhsIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgJmx0O1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e25leHRTbGlkZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIiBiZy1ncmF5LTUwMCBib3JkZXItc29saWQgcHgtMiBweS01IGhvdmVyOmJnLXdoaXRlIHRyYW5zaXRpb24tYWxsIHJvdW5kZWQteGwgZm9udC1ib2xkXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAmZ3Q7XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJDYXJvdXNlbCIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsInNsaWRlUmVmIiwiVE9UQUxfU0xJREVTIiwibmV4dFNsaWRlIiwicHJldlNsaWRlIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJpbWdDb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsImltZyIsInNyYyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Carousel.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Carousel */ \"./components/Carousel.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar Home = function() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Carousel__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\index.tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, _this),\n            \"It's Home Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \\\"de Finibus Bonorum et Malorum\\\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \\\"Lorem ipsum dolor sit amet..\\\", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \\\"de Finibus Bonorum et Malorum\\\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\index.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, _this));\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzZDOztBQUU3QyxHQUFLLENBQUNDLElBQUksR0FBYSxRQUN2QixHQUQ2QixDQUFDO0lBQzVCLE1BQU0sNkVBQ0hDLENBQUc7O3dGQUNERiw0REFBUTs7Ozs7WUFBRyxDQWlDZDs7Ozs7OztBQUVKLENBQUM7S0F0Q0tDLElBQUk7QUF3Q1YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJvdXNlbFwiO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPENhcm91c2VsIC8+XG4gICAgICBJdCdzIEhvbWUgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZ1xuICAgICAgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlclxuICAgICAgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kXG4gICAgICBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmVcbiAgICAgIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmdcbiAgICAgIGVzc2VudGlhbGx5IHVuY2hhbmdlZC4gSXQgd2FzIHBvcHVsYXJpc2VkIGluIHRoZSAxOTYwcyB3aXRoIHRoZSByZWxlYXNlIG9mXG4gICAgICBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcywgYW5kIG1vcmUgcmVjZW50bHkgd2l0aFxuICAgICAgZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZlxuICAgICAgTG9yZW0gSXBzdW0uIFdoeSBkbyB3ZSB1c2UgaXQ/IEl0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0IHRoYXQgYSByZWFkZXJcbiAgICAgIHdpbGwgYmUgZGlzdHJhY3RlZCBieSB0aGUgcmVhZGFibGUgY29udGVudCBvZiBhIHBhZ2Ugd2hlbiBsb29raW5nIGF0IGl0c1xuICAgICAgbGF5b3V0LiBUaGUgcG9pbnQgb2YgdXNpbmcgTG9yZW0gSXBzdW0gaXMgdGhhdCBpdCBoYXMgYSBtb3JlLW9yLWxlc3NcbiAgICAgIG5vcm1hbCBkaXN0cmlidXRpb24gb2YgbGV0dGVycywgYXMgb3Bwb3NlZCB0byB1c2luZyAnQ29udGVudCBoZXJlLCBjb250ZW50XG4gICAgICBoZXJlJywgbWFraW5nIGl0IGxvb2sgbGlrZSByZWFkYWJsZSBFbmdsaXNoLiBNYW55IGRlc2t0b3AgcHVibGlzaGluZ1xuICAgICAgcGFja2FnZXMgYW5kIHdlYiBwYWdlIGVkaXRvcnMgbm93IHVzZSBMb3JlbSBJcHN1bSBhcyB0aGVpciBkZWZhdWx0IG1vZGVsXG4gICAgICB0ZXh0LCBhbmQgYSBzZWFyY2ggZm9yICdsb3JlbSBpcHN1bScgd2lsbCB1bmNvdmVyIG1hbnkgd2ViIHNpdGVzIHN0aWxsIGluXG4gICAgICB0aGVpciBpbmZhbmN5LiBWYXJpb3VzIHZlcnNpb25zIGhhdmUgZXZvbHZlZCBvdmVyIHRoZSB5ZWFycywgc29tZXRpbWVzIGJ5XG4gICAgICBhY2NpZGVudCwgc29tZXRpbWVzIG9uIHB1cnBvc2UgKGluamVjdGVkIGh1bW91ciBhbmQgdGhlIGxpa2UpLiBXaGVyZSBkb2VzXG4gICAgICBpdCBjb21lIGZyb20/IENvbnRyYXJ5IHRvIHBvcHVsYXIgYmVsaWVmLCBMb3JlbSBJcHN1bSBpcyBub3Qgc2ltcGx5IHJhbmRvbVxuICAgICAgdGV4dC4gSXQgaGFzIHJvb3RzIGluIGEgcGllY2Ugb2YgY2xhc3NpY2FsIExhdGluIGxpdGVyYXR1cmUgZnJvbSA0NSBCQyxcbiAgICAgIG1ha2luZyBpdCBvdmVyIDIwMDAgeWVhcnMgb2xkLiBSaWNoYXJkIE1jQ2xpbnRvY2ssIGEgTGF0aW4gcHJvZmVzc29yIGF0XG4gICAgICBIYW1wZGVuLVN5ZG5leSBDb2xsZWdlIGluIFZpcmdpbmlhLCBsb29rZWQgdXAgb25lIG9mIHRoZSBtb3JlIG9ic2N1cmVcbiAgICAgIExhdGluIHdvcmRzLCBjb25zZWN0ZXR1ciwgZnJvbSBhIExvcmVtIElwc3VtIHBhc3NhZ2UsIGFuZCBnb2luZyB0aHJvdWdoXG4gICAgICB0aGUgY2l0ZXMgb2YgdGhlIHdvcmQgaW4gY2xhc3NpY2FsIGxpdGVyYXR1cmUsIGRpc2NvdmVyZWQgdGhlIHVuZG91YnRhYmxlXG4gICAgICBzb3VyY2UuIExvcmVtIElwc3VtIGNvbWVzIGZyb20gc2VjdGlvbnMgMS4xMC4zMiBhbmQgMS4xMC4zMyBvZiBcImRlIEZpbmlidXNcbiAgICAgIEJvbm9ydW0gZXQgTWFsb3J1bVwiIChUaGUgRXh0cmVtZXMgb2YgR29vZCBhbmQgRXZpbCkgYnkgQ2ljZXJvLCB3cml0dGVuIGluXG4gICAgICA0NSBCQy4gVGhpcyBib29rIGlzIGEgdHJlYXRpc2Ugb24gdGhlIHRoZW9yeSBvZiBldGhpY3MsIHZlcnkgcG9wdWxhclxuICAgICAgZHVyaW5nIHRoZSBSZW5haXNzYW5jZS4gVGhlIGZpcnN0IGxpbmUgb2YgTG9yZW0gSXBzdW0sIFwiTG9yZW0gaXBzdW0gZG9sb3JcbiAgICAgIHNpdCBhbWV0Li5cIiwgY29tZXMgZnJvbSBhIGxpbmUgaW4gc2VjdGlvbiAxLjEwLjMyLiBUaGUgc3RhbmRhcmQgY2h1bmsgb2ZcbiAgICAgIExvcmVtIElwc3VtIHVzZWQgc2luY2UgdGhlIDE1MDBzIGlzIHJlcHJvZHVjZWQgYmVsb3cgZm9yIHRob3NlIGludGVyZXN0ZWQuXG4gICAgICBTZWN0aW9ucyAxLjEwLjMyIGFuZCAxLjEwLjMzIGZyb20gXCJkZSBGaW5pYnVzIEJvbm9ydW0gZXQgTWFsb3J1bVwiIGJ5XG4gICAgICBDaWNlcm8gYXJlIGFsc28gcmVwcm9kdWNlZCBpbiB0aGVpciBleGFjdCBvcmlnaW5hbCBmb3JtLCBhY2NvbXBhbmllZCBieVxuICAgICAgRW5nbGlzaCB2ZXJzaW9ucyBmcm9tIHRoZSAxOTE0IHRyYW5zbGF0aW9uIGJ5IEguIFJhY2toYW0uXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIkNhcm91c2VsIiwiSG9tZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cmk448%5CDv_study%5Cfictiondbs_carrot_ver%5Cpages%5Cindex.tsx!":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cmk448%5CDv_study%5Cfictiondbs_carrot_ver%5Cpages%5Cindex.tsx! ***!
  \*****************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.tsx */ \"./pages/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/cGFnZT0lMkYmYWJzb2x1dGVQYWdlUGF0aD1DJTNBJTVDVXNlcnMlNUNtazQ0OCU1Q0R2X3N0dWR5JTVDZmljdGlvbmRic19jYXJyb3RfdmVyJTVDcGFnZXMlNUNpbmRleC50c3ghLmpzIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsNENBQW1CO0FBQzFDO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz81YTVhIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL1wiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cmk448%5CDv_study%5Cfictiondbs_carrot_ver%5Cpages%5Cindex.tsx!\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cmk448%5CDv_study%5Cfictiondbs_carrot_ver%5Cpages%5Cindex.tsx!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);