"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/fictions",{

/***/ "./pages/fictions/index.tsx":
/*!**********************************!*\
  !*** ./pages/fictions/index.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_client_useUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @libs/client/useUser */ \"./libs/client/useUser.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Fictions = function() {\n    var _this1 = _this;\n    var ref;\n    _s();\n    var ref1 = (0,_libs_client_useUser__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), user = ref1.user, isLoading = ref1.isLoading;\n    var data = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/fictions\").data;\n    console.log(data);\n    var arr = [\n        1,\n        2,\n        3,\n        4,\n        5,\n        6,\n        7,\n        8,\n        9,\n        10\n    ];\n    return(// <div className=\" \">\n    //   <ul className=\" \">\n    //     {data?.fictions?.map((fiction, i) => {\n    //       <Link key={fiction.id} href={`/fictions/${fiction.id}`}>\n    //         <li className=\" flex-col w-[144px] h-[190] my-3 mx-1 cursor-pointer\">\n    //           <img\n    //             className=\" w-full rounded-xl\"\n    //             src={`https://picsum.photos/160/225?random=${fiction.id}`}\n    //           ></img>\n    //           <div className=\" flex-col\">\n    //             <div className=\" font-bold\">아이언맨 2</div>\n    //             <div>제목 : {fiction.title}</div>\n    //             <div>작가 : {fiction.author}</div>\n    //           </div>\n    //         </li>\n    //         <li>asd</li>\n    //       </Link>;\n    //     })}\n    //   </ul>\n    // </div>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" flex justify-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 px-1 py-2 \",\n                children: data === null || data === void 0 ? void 0 : (ref = data.fictions) === null || ref === void 0 ? void 0 : ref.map(function(fiction, i) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/fictions/\".concat(fiction.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \" flex-col w-[144px] h-[190] my-3 mx-1 cursor-pointer bg-white border-[0.5px] border-[#BBBBBB] rounded-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \" overflow-hidden\",\n                                    src: \"https://picsum.photos/160/225?random=\".concat(fiction.id)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\fictions\\\\index.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 17\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \" flex-col px-2 py-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \" font-bold\",\n                                            children: fiction.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\fictions\\\\index.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 19\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \" text-sm\",\n                                            children: fiction.currentState || \"500화 완결\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\fictions\\\\index.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 19\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \" overflow-hidden text-xs\",\n                                            children: fiction.author\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\fictions\\\\index.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 19\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \" text-xs\",\n                                            children: fiction.nationality\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\fictions\\\\index.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 19\n                                        }, _this1)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\fictions\\\\index.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 17\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\fictions\\\\index.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 15\n                        }, _this1)\n                    }, fiction.id, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\fictions\\\\index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\fictions\\\\index.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\fictions\\\\index.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\fictions\\\\index.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, _this));\n};\n_s(Fictions, \"ghW6/OtQoPcAEwrmVVizmiMPqeM=\", false, function() {\n    return [\n        _libs_client_useUser__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Fictions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fictions);\nvar _c;\n$RefreshReg$(_c, \"Fictions\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9maWN0aW9ucy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBDO0FBR2Q7QUFDSjs7O0FBT3hCLEdBQUssQ0FBQ0csUUFBUSxHQUFhLFFBQVEsR0FBRixDQUFDOztRQWdDdkJDLEdBQWM7O0lBL0J2QixHQUFLLENBQXVCSixJQUFTLEdBQVRBLGdFQUFPLElBQTNCSyxJQUFJLEdBQWdCTCxJQUFTLENBQTdCSyxJQUFJLEVBQUVDLFNBQVMsR0FBS04sSUFBUyxDQUF2Qk0sU0FBUztJQUN2QixHQUFLLENBQUdGLElBQUksR0FBS0YsK0NBQU0sQ0FBbUIsQ0FBZSxnQkFBakRFLElBQUk7SUFDWkcsT0FBTyxDQUFDQyxHQUFHLENBQUNKLElBQUk7SUFFaEIsR0FBSyxDQUFDSyxHQUFHLEdBQUcsQ0FBQztBQUFBLFNBQUM7QUFBRSxTQUFDO0FBQUUsU0FBQztBQUFFLFNBQUM7QUFBRSxTQUFDO0FBQUUsU0FBQztBQUFFLFNBQUM7QUFBRSxTQUFDO0FBQUUsU0FBQztBQUFFLFVBQUU7SUFBQSxDQUFDO0lBRTNDLE1BQU0sQ0FDSixFQUFzQjtJQUN0QixFQUF1QjtJQUN2QixFQUE2QztJQUM3QyxFQUFpRTtJQUNqRSxFQUFnRjtJQUNoRixFQUFpQjtJQUNqQixFQUE2QztJQUM3QyxFQUF5RTtJQUN6RSxFQUFvQjtJQUNwQixFQUF3QztJQUN4QyxFQUErRDtJQUMvRCxFQUFrRDtJQUNsRCxFQUFtRDtJQUNuRCxFQUFtQjtJQUNuQixFQUFnQjtJQUNoQixFQUF1QjtJQUN2QixFQUFpQjtJQUNqQixFQUFVO0lBQ1YsRUFBVTtJQUNWLEVBQVM7Z0ZBRVJDLENBQUc7OEZBQ0RBLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQXNCO2tHQUNsQ0MsQ0FBRTtnQkFBQ0QsU0FBUyxFQUFDLENBQTJFOzBCQUN0RlAsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBYyxHQUFkQSxJQUFJLENBQUpBLENBQWMsSUFBZEEsR0FBYyxHQUFkQSxJQUFJLENBQUVTLFFBQVEsY0FBZFQsR0FBYyxLQUFkQSxJQUFJLENBQUpBLENBQWMsR0FBZEEsSUFBSSxDQUFKQSxDQUFjLEdBQWRBLEdBQWMsQ0FBRVUsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsT0FBTyxFQUFFQyxDQUFDO2tDQUM5QixNQUFNQyxDQUFBQSw2REFBQUEsQ0FBTGhCLGtEQUFJO3dCQUFrQmlCLElBQUksRUFBRyxDQUFVLFlBQWEsT0FBWEgsT0FBTyxDQUFDSSxFQUFFOzhHQUNqREMsQ0FBRTs0QkFBQ1QsU0FBUyxFQUFDLENBQTBHOzs0R0FDckhVLENBQUc7b0NBQ0ZWLFNBQVMsRUFBQyxDQUFrQjtvQ0FDNUJXLEdBQUcsRUFBRyxDQUFxQyx1Q0FBYSxPQUFYUCxPQUFPLENBQUNJLEVBQUU7Ozs7Ozs0R0FFeERULENBQUc7b0NBQUNDLFNBQVMsRUFBQyxDQUFxQjs7b0hBQ2pDRCxDQUFHOzRDQUFDQyxTQUFTLEVBQUMsQ0FBWTtzREFBRUksT0FBTyxDQUFDUSxLQUFLOzs7Ozs7b0hBQ3pDYixDQUFHOzRDQUFDQyxTQUFTLEVBQUMsQ0FBVTtzREFDdEJJLE9BQU8sQ0FBQ1MsWUFBWSxJQUFJLENBQVM7Ozs7OztvSEFFbkNkLENBQUc7NENBQUNDLFNBQVMsRUFBQyxDQUEwQjtzREFDdENJLE9BQU8sQ0FBQ1UsTUFBTTs7Ozs7O29IQUVoQmYsQ0FBRzs0Q0FBQ0MsU0FBUyxFQUFDLENBQVU7c0RBQUVJLE9BQU8sQ0FBQ1csV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQWR6Q1gsT0FBTyxDQUFDSSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QmpDLENBQUM7R0F4REtoQixRQUFROztRQUNnQkgsNERBQU87UUFDbEJFLDJDQUFNOzs7S0FGbkJDLFFBQVE7QUEwRGQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9maWN0aW9ucy9pbmRleC50c3g/MmY2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlVXNlciBmcm9tIFwiQGxpYnMvY2xpZW50L3VzZVVzZXJcIjtcclxuaW1wb3J0IHsgRmljdGlvbiB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuXHJcbmludGVyZmFjZSBGaWN0aW9uc1Jlc3BvbnNlIHtcclxuICBvazogYm9vbGVhbjtcclxuICBmaWN0aW9uczogRmljdGlvbltdO1xyXG59XHJcblxyXG5jb25zdCBGaWN0aW9uczogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyB1c2VyLCBpc0xvYWRpbmcgfSA9IHVzZVVzZXIoKTtcclxuICBjb25zdCB7IGRhdGEgfSA9IHVzZVNXUjxGaWN0aW9uc1Jlc3BvbnNlPihcIi9hcGkvZmljdGlvbnNcIik7XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gIGNvbnN0IGFyciA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cIiBcIj5cclxuICAgIC8vICAgPHVsIGNsYXNzTmFtZT1cIiBcIj5cclxuICAgIC8vICAgICB7ZGF0YT8uZmljdGlvbnM/Lm1hcCgoZmljdGlvbiwgaSkgPT4ge1xyXG4gICAgLy8gICAgICAgPExpbmsga2V5PXtmaWN0aW9uLmlkfSBocmVmPXtgL2ZpY3Rpb25zLyR7ZmljdGlvbi5pZH1gfT5cclxuICAgIC8vICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIiBmbGV4LWNvbCB3LVsxNDRweF0gaC1bMTkwXSBteS0zIG14LTEgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgIC8vICAgICAgICAgICA8aW1nXHJcbiAgICAvLyAgICAgICAgICAgICBjbGFzc05hbWU9XCIgdy1mdWxsIHJvdW5kZWQteGxcIlxyXG4gICAgLy8gICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzE2MC8yMjU/cmFuZG9tPSR7ZmljdGlvbi5pZH1gfVxyXG4gICAgLy8gICAgICAgICAgID48L2ltZz5cclxuICAgIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4LWNvbFwiPlxyXG4gICAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZm9udC1ib2xkXCI+7JWE7J207Ja466eoIDI8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgIDxkaXY+7KCc66qpIDoge2ZpY3Rpb24udGl0bGV9PC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICA8ZGl2PuyekeqwgCA6IHtmaWN0aW9uLmF1dGhvcn08L2Rpdj5cclxuICAgIC8vICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgPC9saT5cclxuICAgIC8vICAgICAgICAgPGxpPmFzZDwvbGk+XHJcbiAgICAvLyAgICAgICA8L0xpbms+O1xyXG4gICAgLy8gICAgIH0pfVxyXG4gICAgLy8gICA8L3VsPlxyXG4gICAgLy8gPC9kaXY+XHJcblxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCIgZ3JpZCBncmlkLWNvbHMtMiBzbTpncmlkLWNvbHMtMyBtZDpncmlkLWNvbHMtNCBsZzpncmlkLWNvbHMtNiBweC0xIHB5LTIgXCI+XHJcbiAgICAgICAgICB7ZGF0YT8uZmljdGlvbnM/Lm1hcCgoZmljdGlvbiwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBrZXk9e2ZpY3Rpb24uaWR9IGhyZWY9e2AvZmljdGlvbnMvJHtmaWN0aW9uLmlkfWB9PlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCIgZmxleC1jb2wgdy1bMTQ0cHhdIGgtWzE5MF0gbXktMyBteC0xIGN1cnNvci1wb2ludGVyIGJnLXdoaXRlIGJvcmRlci1bMC41cHhdIGJvcmRlci1bI0JCQkJCQl0gcm91bmRlZC1tZFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgb3ZlcmZsb3ctaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzE2MC8yMjU/cmFuZG9tPSR7ZmljdGlvbi5pZH1gfVxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleC1jb2wgcHgtMiBweS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZvbnQtYm9sZFwiPntmaWN0aW9uLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2ZpY3Rpb24uY3VycmVudFN0YXRlIHx8IFwiNTAw7ZmUIOyZhOqysFwifVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgb3ZlcmZsb3ctaGlkZGVuIHRleHQteHNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZmljdGlvbi5hdXRob3J9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB0ZXh0LXhzXCI+e2ZpY3Rpb24ubmF0aW9uYWxpdHl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWN0aW9ucztcclxuIl0sIm5hbWVzIjpbInVzZVVzZXIiLCJMaW5rIiwidXNlU1dSIiwiRmljdGlvbnMiLCJkYXRhIiwidXNlciIsImlzTG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJhcnIiLCJkaXYiLCJjbGFzc05hbWUiLCJ1bCIsImZpY3Rpb25zIiwibWFwIiwiZmljdGlvbiIsImkiLCJrZXkiLCJocmVmIiwiaWQiLCJsaSIsImltZyIsInNyYyIsInRpdGxlIiwiY3VycmVudFN0YXRlIiwiYXV0aG9yIiwibmF0aW9uYWxpdHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/fictions/index.tsx\n");

/***/ })

});