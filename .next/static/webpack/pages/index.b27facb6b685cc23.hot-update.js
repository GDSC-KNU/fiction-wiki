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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\nfunction Carousel() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentSlide = ref[0], setCurrentSlide = ref[1];\n    var slideRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var TOTAL_SLIDES = 3;\n    var slide = function() {\n        var pos = 0;\n        setInterval(function() {\n            pos = (pos + 1) % 3;\n            var target = document.querySelector(\"#img_\".concat(pos));\n            target === null || target === void 0 ? void 0 : target.classList.add(\"\");\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {}, [\n        currentSlide\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" h-[45vh] overflow-hidden w-[60%] \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://source.unsplash.com/random/1\",\n                        className: \" ml[pos] h-[30vh] w-full\",\n                        id: \"img_1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://source.unsplash.com/random/2\",\n                        className: \" hidden w-0\",\n                        id: \"img_2\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://source.unsplash.com/random/3\",\n                        className: \" hidden w-0\",\n                        id: \"img_3\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" justify-center w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" bg-gray-400 border-solid px-5 py-5 hover:bg-red-400 transition-all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" bg-gray-500 border-solid px-5 py-5 hover:bg-red-400 transition-all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" bg-gray-600 border-solid px-5 py-5 hover:bg-red-400 transition-all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this));\n};\n_s(Carousel, \"5q7oD7AXiwo/LtZCiQOuiiTXOCM=\");\n_c = Carousel;\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nhcm91c2VsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1EOztBQUVwQyxRQUFRLENBQUNHLFFBQVEsR0FBRyxDQUFDOztJQUNsQyxHQUFLLENBQW1DSCxHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUEzQ0ksWUFBWSxHQUFxQkosR0FBVyxLQUE5QkssZUFBZSxHQUFJTCxHQUFXO0lBQ25ELEdBQUssQ0FBQ00sUUFBUSxHQUFHSiw2Q0FBTSxDQUFDLElBQUk7SUFFNUIsR0FBSyxDQUFDSyxZQUFZLEdBQUcsQ0FBQztJQUV0QixHQUFLLENBQUNDLEtBQUssR0FBRyxRQUFRLEdBQUYsQ0FBQztRQUNuQixHQUFHLENBQUNDLEdBQUcsR0FBRyxDQUFDO1FBQ1hDLFdBQVcsQ0FBQyxRQUFRLEdBQUYsQ0FBQztZQUNqQkQsR0FBRyxJQUFJQSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDbkIsR0FBRyxDQUFDRSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFFLENBQUssT0FBTSxPQUFKSixHQUFHO1lBQy9DRSxNQUFNLGFBQU5BLE1BQU0sS0FBTkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsTUFBTSxDQUFFRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxDQUFFO1FBQzFCLENBQUM7SUFDSCxDQUFDO0lBRURkLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUMsQ0FBQyxFQUFFLENBQUNHO1FBQUFBLFlBQVk7SUFBQSxDQUFDO0lBRWxDLE1BQU0sNkVBQ0hZLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQW9DOzt3RkFDaERELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFlOztnR0FDM0JDLENBQUc7d0JBQ0ZDLEdBQUcsRUFBQyxDQUFzQzt3QkFDMUNGLFNBQVMsRUFBQyxDQUEwQjt3QkFDcENHLEVBQUUsRUFBQyxDQUFPOzs7Ozs7Z0dBRVhGLENBQUc7d0JBQ0ZDLEdBQUcsRUFBQyxDQUFzQzt3QkFDMUNGLFNBQVMsRUFBQyxDQUFhO3dCQUN2QkcsRUFBRSxFQUFDLENBQU87Ozs7OztnR0FFWEYsQ0FBRzt3QkFDRkMsR0FBRyxFQUFDLENBQXNDO3dCQUMxQ0YsU0FBUyxFQUFDLENBQWE7d0JBQ3ZCRyxFQUFFLEVBQUMsQ0FBTzs7Ozs7Ozs7Ozs7O3dGQUdiSixDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBd0I7O2dHQUNwQ0ksQ0FBTTt3QkFBQ0osU0FBUyxFQUFDLENBQXFFOzs7Ozs7Z0dBQ3RGSSxDQUFNO3dCQUFDSixTQUFTLEVBQUMsQ0FBcUU7Ozs7OztnR0FDdEZJLENBQU07d0JBQUNKLFNBQVMsRUFBQyxDQUFxRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSS9GLENBQUM7R0EzQ3VCZCxRQUFRO0tBQVJBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC50c3g/M2UyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcm91c2VsKCkge1xyXG4gIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBzbGlkZVJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgVE9UQUxfU0xJREVTID0gMztcclxuXHJcbiAgY29uc3Qgc2xpZGUgPSAoKSA9PiB7XHJcbiAgICBsZXQgcG9zID0gMDtcclxuICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgcG9zID0gKHBvcyArIDEpICUgMztcclxuICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNpbWdfJHtwb3N9YCk7XHJcbiAgICAgIHRhcmdldD8uY2xhc3NMaXN0LmFkZChcIlwiKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7fSwgW2N1cnJlbnRTbGlkZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgaC1bNDV2aF0gb3ZlcmZsb3ctaGlkZGVuIHctWzYwJV0gXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiICBmbGV4IHctZnVsbFwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9yYW5kb20vMVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgbWxbcG9zXSBoLVszMHZoXSB3LWZ1bGxcIlxyXG4gICAgICAgICAgaWQ9XCJpbWdfMVwiXHJcbiAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9yYW5kb20vMlwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgaGlkZGVuIHctMFwiXHJcbiAgICAgICAgICBpZD1cImltZ18yXCJcclxuICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL3JhbmRvbS8zXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIiBoaWRkZW4gdy0wXCJcclxuICAgICAgICAgIGlkPVwiaW1nXzNcIlxyXG4gICAgICAgID48L2ltZz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGp1c3RpZnktY2VudGVyIHctZnVsbFwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiIGJnLWdyYXktNDAwIGJvcmRlci1zb2xpZCBweC01IHB5LTUgaG92ZXI6YmctcmVkLTQwMCB0cmFuc2l0aW9uLWFsbFwiPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiIGJnLWdyYXktNTAwIGJvcmRlci1zb2xpZCBweC01IHB5LTUgaG92ZXI6YmctcmVkLTQwMCB0cmFuc2l0aW9uLWFsbFwiPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiIGJnLWdyYXktNjAwIGJvcmRlci1zb2xpZCBweC01IHB5LTUgaG92ZXI6YmctcmVkLTQwMCB0cmFuc2l0aW9uLWFsbFwiPjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQ2Fyb3VzZWwiLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJzbGlkZVJlZiIsIlRPVEFMX1NMSURFUyIsInNsaWRlIiwicG9zIiwic2V0SW50ZXJ2YWwiLCJ0YXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJpZCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Carousel.tsx\n");

/***/ })

});