"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/fictions/create",{

/***/ "./pages/fictions/create.tsx":
/*!***********************************!*\
  !*** ./pages/fictions/create.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar create = function() {\n    _s();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)(), register = ref.register, handleSubmit = ref.handleSubmit, reset = ref.reset, watch = ref.watch;\n    var onValid = function() {\n        console.log(\"im valid bby\");\n    };\n    console.log(watch());\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" text-3xl mb-24\",\n                    children: \"create 페이지입니다\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\fictions\\\\create.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\fictions\\\\create.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onValid),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"제목\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register(\"title\", {\n                                required: true\n                            }), {\n                                type: \"text\",\n                                placeholder: \"제목\"\n                            }), void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\fictions\\\\create.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\fictions\\\\create.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register(\"author\", {\n                            required: true\n                        }), {\n                            type: \"text\",\n                            placeholder: \"작가\"\n                        }), void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\fictions\\\\create.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\fictions\\\\create.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\fictions\\\\create.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"줄거리\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\fictions\\\\create.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register(\"synopsis\", {\n                                required: true\n                            }), {\n                                type: \"text\",\n                                placeholder: \"줄거리\"\n                            }), void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\fictions\\\\create.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\fictions\\\\create.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"등장인물\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\fictions\\\\create.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register(\"characters\", {\n                                required: false\n                            }), {\n                                type: \"text\",\n                                placeholder: \"등장인물\"\n                            }), void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\fictions\\\\create.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\fictions\\\\create.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"저장\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\fictions\\\\create.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\fictions\\\\create.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(create, \"ceYZyoQKdOQP0Md9PaOw7MSt0Kk=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (create);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9maWN0aW9ucy9jcmVhdGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ2tEO0FBQ1Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXekMsR0FBSyxDQUFDRSxNQUFNLEdBQWEsUUFBUSxHQUFGLENBQUM7O0lBQzlCLEdBQUssQ0FBNENELEdBQXFCLEdBQXJCQSx3REFBTyxJQUFoREUsUUFBUSxHQUFpQ0YsR0FBcUIsQ0FBOURFLFFBQVEsRUFBRUMsWUFBWSxHQUFtQkgsR0FBcUIsQ0FBcERHLFlBQVksRUFBRUMsS0FBSyxHQUFZSixHQUFxQixDQUF0Q0ksS0FBSyxFQUFFQyxLQUFLLEdBQUtMLEdBQXFCLENBQS9CSyxLQUFLO0lBRTVDLEdBQUssQ0FBQ0MsT0FBTyxHQUFHLFFBQVEsR0FBRixDQUFDO1FBQ3JCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFjO0lBQzVCLENBQUM7SUFDREQsT0FBTyxDQUFDQyxHQUFHLENBQUNILEtBQUs7SUFFakIsTUFBTTs7d0ZBRURJLENBQUc7c0dBQ0RBLENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFpQjs4QkFBQyxDQUFhOzs7Ozs7Ozs7Ozt3RkFFbkNDLENBQVI7Z0JBQUNDLFFBQVEsRUFBRVQsWUFBWSxDQUFDRyxPQUFPOztnR0FDakNHLENBQUc7OzRCQUFDLENBRUg7d0dBQUNJLENBQUssMEJBQ0FYLFFBQVEsQ0FBQyxDQUFPLFFBQUUsQ0FBQztnQ0FBQ1ksUUFBUSxFQUFFLElBQUk7NEJBQUMsQ0FBQztnQ0FDeENDLElBQUksRUFBQyxDQUFNO2dDQUNYQyxXQUFXLEVBQUMsQ0FBSTs7Ozs7Ozs7Ozs7O2dHQUdmUCxDQUFEOzhHQUNESSxDQUFLLDBCQUNBWCxRQUFRLENBQUMsQ0FBUSxTQUFFLENBQUM7NEJBQUNZLFFBQVEsRUFBRSxJQUFJO3dCQUFDLENBQUM7NEJBQ3pDQyxJQUFJLEVBQUMsQ0FBTTs0QkFDWEMsV0FBVyxFQUFDLENBQUk7Ozs7Ozs7Ozs7O2dHQUdmQyxDQUFGOzs7OztnR0FDRlIsQ0FBRzs7d0dBQ0RBLENBQUc7MENBQUMsQ0FBRzs7Ozs7O3dHQUNESSxDQUFELDBCQUNBWCxRQUFRLENBQUMsQ0FBVSxXQUFFLENBQUM7Z0NBQUNZLFFBQVEsRUFBRSxJQUFJOzRCQUFDLENBQUM7Z0NBQzNDQyxJQUFJLEVBQUMsQ0FBTTtnQ0FDWEMsV0FBVyxFQUFDLENBQUs7Ozs7Ozs7Ozs7OztnR0FHZFAsQ0FBSDs7d0dBQ0RBLENBQUc7MENBQUMsQ0FBSTs7Ozs7O3dHQUNBSSxDQUFILDBCQUNBWCxRQUFRLENBQUMsQ0FBWSxhQUFFLENBQUM7Z0NBQUNZLFFBQVEsRUFBRSxLQUFLOzRCQUFDLENBQUM7Z0NBQzlDQyxJQUFJLEVBQUMsQ0FBTTtnQ0FDWEMsV0FBVyxFQUFDLENBQU07Ozs7Ozs7Ozs7OztnR0FHYkUsQ0FBRjt3QkFBQ0gsSUFBSSxFQUFDLENBQVE7a0NBQUMsQ0FBRTs7Ozs7Ozs7Ozs7Ozs7QUFJaEMsQ0FBQztHQWxES2QsTUFBTTs7UUFDdUNELG9EQUFPOzs7QUFtRDFELCtEQUFlQyxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmljdGlvbnMvY3JlYXRlLnRzeD9kY2U1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5cclxuaW50ZXJmYWNlIENyZWF0ZUZvcm0ge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgYXV0aG9yOiBzdHJpbmc7XHJcbiAgZGF0ZTogbnVtYmVyO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgc3RhdHVzOiBzdHJpbmc7XHJcbiAgc3lub3BzaXM6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgY3JlYXRlOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIHJlc2V0LCB3YXRjaCB9ID0gdXNlRm9ybTxDcmVhdGVGb3JtPigpO1xyXG5cclxuICBjb25zdCBvblZhbGlkID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJpbSB2YWxpZCBiYnlcIik7XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyh3YXRjaCgpKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdGV4dC0zeGwgbWItMjRcIj5jcmVhdGUg7Y6Y7J207KeA7J6F64uI64ukPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uVmFsaWQpfT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAg7KCc66qpXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwidGl0bGVcIiwgeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuygnOuqqVwiXHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcImF1dGhvclwiLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7J6R6rCAXCJcclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2PuykhOqxsOumrDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcInN5bm9wc2lzXCIsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLspITqsbDrpqxcIlxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXY+65Ox7J6l7J2466y8PC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwiY2hhcmFjdGVyc1wiLCB7IHJlcXVpcmVkOiBmYWxzZSB9KX1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuuTseyepeyduOusvFwiXHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7soIDsnqU8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRm9ybSIsImNyZWF0ZSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwicmVzZXQiLCJ3YXRjaCIsIm9uVmFsaWQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJyZXF1aXJlZCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/fictions/create.tsx\n");

/***/ })

});