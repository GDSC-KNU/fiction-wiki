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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\nfunction Carousel() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentSlide = ref[0], setCurrentSlide = ref[1];\n    var slideRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var TOTAL_SLIDES = 3;\n    var slideI = function() {\n        // const wrap = document.querySelector(\"#img_container\");\n        // const target = wrap?.children[0];\n        // console.log(wrap?.children.length);\n        // console.log(target?.classList.add(\" w-[]\"));\n        // let length = wrap?.children.length;\n        var pos = 0;\n        setInterval(function() {\n            pos = (pos + 1) % 4;\n            var target = document.querySelector(\"#img_\".concat(pos));\n            target === null || target === void 0 ? void 0 : target.classList.add(\"-ml-[100%]\");\n        }, 2000);\n    };\n    var slide = function() {\n        var pos = 0;\n        setInterval(function() {\n            pos = (pos + 1) % 3;\n            var target = document.querySelector(\"#img_\".concat(pos));\n            target === null || target === void 0 ? void 0 : target.classList.add(\"-ml-[100%]\");\n        }, 3000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        slideI();\n    }, [\n        currentSlide\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" h-[45vh] overflow-hidden w-[100%] \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex w-[300%]\",\n                id: \"img_container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://source.unsplash.com/random/1\",\n                        className: \" h-[30vh] w-[100%] transition\",\n                        id: \"img_1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://source.unsplash.com/random/2\",\n                        className: \" h-[30vh] w-[100%] transition\",\n                        id: \"img_2\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://source.unsplash.com/random/3\",\n                        className: \" h-[30vh] w-[100%] transition\",\n                        id: \"img_3\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" justify-center w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" bg-gray-400 border-solid px-5 py-5 hover:bg-red-400 transition-all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" bg-gray-500 border-solid px-5 py-5 hover:bg-red-400 transition-all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" bg-gray-600 border-solid px-5 py-5 hover:bg-red-400 transition-all\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this));\n};\n_s(Carousel, \"5q7oD7AXiwo/LtZCiQOuiiTXOCM=\");\n_c = Carousel;\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nhcm91c2VsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1EOztBQUVwQyxRQUFRLENBQUNHLFFBQVEsR0FBRyxDQUFDOztJQUNsQyxHQUFLLENBQW1DSCxHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUEzQ0ksWUFBWSxHQUFxQkosR0FBVyxLQUE5QkssZUFBZSxHQUFJTCxHQUFXO0lBQ25ELEdBQUssQ0FBQ00sUUFBUSxHQUFHSiw2Q0FBTSxDQUFDLElBQUk7SUFFNUIsR0FBSyxDQUFDSyxZQUFZLEdBQUcsQ0FBQztJQUV0QixHQUFLLENBQUNDLE1BQU0sR0FBRyxRQUFRLEdBQUYsQ0FBQztRQUNwQixFQUF5RDtRQUN6RCxFQUFvQztRQUNwQyxFQUFzQztRQUN0QyxFQUErQztRQUMvQyxFQUFzQztRQUV0QyxHQUFHLENBQUNDLEdBQUcsR0FBRyxDQUFDO1FBQ1hDLFdBQVcsQ0FBQyxRQUFRLEdBQUYsQ0FBQztZQUNqQkQsR0FBRyxJQUFJQSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDbkIsR0FBRyxDQUFDRSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFFLENBQUssT0FBTSxPQUFKSixHQUFHO1lBQy9DRSxNQUFNLGFBQU5BLE1BQU0sS0FBTkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsTUFBTSxDQUFFRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxDQUFZO1FBQ3BDLENBQUMsRUFBRSxJQUFJO0lBQ1QsQ0FBQztJQUVELEdBQUssQ0FBQ0MsS0FBSyxHQUFHLFFBQVEsR0FBRixDQUFDO1FBQ25CLEdBQUcsQ0FBQ1AsR0FBRyxHQUFHLENBQUM7UUFDWEMsV0FBVyxDQUFDLFFBQVEsR0FBRixDQUFDO1lBQ2pCRCxHQUFHLElBQUlBLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztZQUNuQixHQUFHLENBQUNFLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUUsQ0FBSyxPQUFNLE9BQUpKLEdBQUc7WUFDL0NFLE1BQU0sYUFBTkEsTUFBTSxLQUFOQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxNQUFNLENBQUVHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLENBQVk7UUFDcEMsQ0FBQyxFQUFFLElBQUk7SUFDVCxDQUFDO0lBRURkLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDZk8sTUFBTTtJQUNSLENBQUMsRUFBRSxDQUFDSjtRQUFBQSxZQUFZO0lBQUEsQ0FBQztJQUVqQixNQUFNLDZFQUNIYSxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFxQzs7d0ZBQ2pERCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBZ0I7Z0JBQUNDLEVBQUUsRUFBQyxDQUFlOztnR0FDL0NDLENBQUc7d0JBQ0ZDLEdBQUcsRUFBQyxDQUFzQzt3QkFDMUNILFNBQVMsRUFBQyxDQUErQjt3QkFDekNDLEVBQUUsRUFBQyxDQUFPOzs7Ozs7Z0dBRVhDLENBQUc7d0JBQ0ZDLEdBQUcsRUFBQyxDQUFzQzt3QkFDMUNILFNBQVMsRUFBQyxDQUErQjt3QkFDekNDLEVBQUUsRUFBQyxDQUFPOzs7Ozs7Z0dBRVhDLENBQUc7d0JBQ0ZDLEdBQUcsRUFBQyxDQUFzQzt3QkFDMUNILFNBQVMsRUFBQyxDQUErQjt3QkFDekNDLEVBQUUsRUFBQyxDQUFPOzs7Ozs7Ozs7Ozs7d0ZBR2JGLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUF3Qjs7Z0dBQ3BDSSxDQUFNO3dCQUFDSixTQUFTLEVBQUMsQ0FBcUU7Ozs7OztnR0FDdEZJLENBQU07d0JBQUNKLFNBQVMsRUFBQyxDQUFxRTs7Ozs7O2dHQUN0RkksQ0FBTTt3QkFBQ0osU0FBUyxFQUFDLENBQXFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJL0YsQ0FBQztHQTVEdUJmLFFBQVE7S0FBUkEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Nhcm91c2VsLnRzeD8zZTJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2Fyb3VzZWwoKSB7XHJcbiAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IHNsaWRlUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBUT1RBTF9TTElERVMgPSAzO1xyXG5cclxuICBjb25zdCBzbGlkZUkgPSAoKSA9PiB7XHJcbiAgICAvLyBjb25zdCB3cmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWdfY29udGFpbmVyXCIpO1xyXG4gICAgLy8gY29uc3QgdGFyZ2V0ID0gd3JhcD8uY2hpbGRyZW5bMF07XHJcbiAgICAvLyBjb25zb2xlLmxvZyh3cmFwPy5jaGlsZHJlbi5sZW5ndGgpO1xyXG4gICAgLy8gY29uc29sZS5sb2codGFyZ2V0Py5jbGFzc0xpc3QuYWRkKFwiIHctW11cIikpO1xyXG4gICAgLy8gbGV0IGxlbmd0aCA9IHdyYXA/LmNoaWxkcmVuLmxlbmd0aDtcclxuXHJcbiAgICBsZXQgcG9zID0gMDtcclxuICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgcG9zID0gKHBvcyArIDEpICUgNDtcclxuICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNpbWdfJHtwb3N9YCk7XHJcbiAgICAgIHRhcmdldD8uY2xhc3NMaXN0LmFkZChcIi1tbC1bMTAwJV1cIik7XHJcbiAgICB9LCAyMDAwKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzbGlkZSA9ICgpID0+IHtcclxuICAgIGxldCBwb3MgPSAwO1xyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBwb3MgPSAocG9zICsgMSkgJSAzO1xyXG4gICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2ltZ18ke3Bvc31gKTtcclxuICAgICAgdGFyZ2V0Py5jbGFzc0xpc3QuYWRkKFwiLW1sLVsxMDAlXVwiKTtcclxuICAgIH0sIDMwMDApO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzbGlkZUkoKTtcclxuICB9LCBbY3VycmVudFNsaWRlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLVs0NXZoXSBvdmVyZmxvdy1oaWRkZW4gdy1bMTAwJV0gXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggdy1bMzAwJV1cIiBpZD1cImltZ19jb250YWluZXJcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vcmFuZG9tLzFcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIGgtWzMwdmhdIHctWzEwMCVdIHRyYW5zaXRpb25cIlxyXG4gICAgICAgICAgaWQ9XCJpbWdfMVwiXHJcbiAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9yYW5kb20vMlwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgaC1bMzB2aF0gdy1bMTAwJV0gdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICBpZD1cImltZ18yXCJcclxuICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL3JhbmRvbS8zXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIiBoLVszMHZoXSB3LVsxMDAlXSB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgIGlkPVwiaW1nXzNcIlxyXG4gICAgICAgID48L2ltZz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGp1c3RpZnktY2VudGVyIHctZnVsbFwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiIGJnLWdyYXktNDAwIGJvcmRlci1zb2xpZCBweC01IHB5LTUgaG92ZXI6YmctcmVkLTQwMCB0cmFuc2l0aW9uLWFsbFwiPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiIGJnLWdyYXktNTAwIGJvcmRlci1zb2xpZCBweC01IHB5LTUgaG92ZXI6YmctcmVkLTQwMCB0cmFuc2l0aW9uLWFsbFwiPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiIGJnLWdyYXktNjAwIGJvcmRlci1zb2xpZCBweC01IHB5LTUgaG92ZXI6YmctcmVkLTQwMCB0cmFuc2l0aW9uLWFsbFwiPjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQ2Fyb3VzZWwiLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJzbGlkZVJlZiIsIlRPVEFMX1NMSURFUyIsInNsaWRlSSIsInBvcyIsInNldEludGVydmFsIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwic2xpZGUiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsImltZyIsInNyYyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Carousel.tsx\n");

/***/ })

});