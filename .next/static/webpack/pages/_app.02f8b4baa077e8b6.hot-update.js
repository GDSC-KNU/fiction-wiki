"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Gnb.tsx":
/*!****************************!*\
  !*** ./components/Gnb.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Gnb; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _libs_client_useUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @libs/client/useUser */ \"./libs/client/useUser.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Gnb() {\n    _s();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)(), nextSession = ref.data;\n    var ref1 = (0,_libs_client_useUser__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), user = ref1.user, isLoading = ref1.isLoading;\n    // const { data: CredentailSession } = useSWR(\"/api/users/me\");\n    // console.log(user);\n    // console.log(nextSession);\n    // useEffect(() => {\n    //   if (data && !data.ok) {\n    //     router.replace(\"/enter\");\n    //   }\n    // }, [data, router]);\n    // console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"flex bg-blue-200 fixed top-0 w-full py-2 z-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"flex w-full justify-between items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"flex uppercase font-bold cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \" ml-3 mr-3\",\n                                children: \"Logo\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Gnb.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Gnb.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/fictions\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"mr-3\",\n                                children: \"Fiction\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Gnb.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Gnb.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/authors\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"mr-3\",\n                                children: \"Author\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Gnb.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Gnb.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/ranking\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"mr-3\",\n                                children: \"Ranking\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Gnb.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Gnb.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/fictions/create\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"mr-3\",\n                                children: \"Create\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Gnb.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Gnb.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this) : null\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Gnb.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \" flex font-bold items-center\",\n                    children: [\n                        user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"mr-3\",\n                            children: '\"Admin\"'\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Gnb.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 19\n                        }, this) : null,\n                        nextSession ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \" mr-3 p-0 flex items-center cursor-pointer min-w-[26px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \" rounded-full\",\n                                href: \"/profile\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \" flex items-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        className: \" rounded-full\",\n                                        src: nextSession.user.image || \"\",\n                                        width: 26,\n                                        height: 26\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Gnb.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Gnb.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Gnb.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Gnb.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, this) : null,\n                        nextSession ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \" mr-5 font-bold\",\n                            onClick: function() {\n                                return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)();\n                            },\n                            children: \"Sign out\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Gnb.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/enter\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \" mr-5 hover:cursor-pointer\",\n                                children: \"Enter\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Gnb.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Gnb.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Gnb.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Gnb.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Gnb.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n};\n_s(Gnb, \"hok5D1BpjBZA3UVuT/spEw5bbE0=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        _libs_client_useUser__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Gnb;\nvar _c;\n$RefreshReg$(_c, \"Gnb\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQ0MsSUFBRTtnQ0FBQ0osU0FBUyxFQUFDLDRCQUE0QjswQ0FBQyxPQUFLOzs7OztvQ0FBSzs7Ozs7Z0NBQ2hEOzs7Ozs7d0JBRU47Ozs7OztnQkFDRDs7Ozs7WUFDQyxDQUNUO0NBQ0g7R0EvRHVCTixHQUFHOztRQUNLSix1REFBVTtRQUNaRSw0REFBTzs7O0FBRmJFLEtBQUFBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HbmIudHN4PzVjOGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduSW4sIHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB1c2VVc2VyIGZyb20gXCJAbGlicy9jbGllbnQvdXNlVXNlclwiO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR25iKCkge1xyXG4gIGNvbnN0IHsgZGF0YTogbmV4dFNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcclxuICBjb25zdCB7IHVzZXIsIGlzTG9hZGluZyB9ID0gdXNlVXNlcigpO1xyXG4gIC8vIGNvbnN0IHsgZGF0YTogQ3JlZGVudGFpbFNlc3Npb24gfSA9IHVzZVNXUihcIi9hcGkvdXNlcnMvbWVcIik7XHJcbiAgLy8gY29uc29sZS5sb2codXNlcik7XHJcbiAgLy8gY29uc29sZS5sb2cobmV4dFNlc3Npb24pO1xyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBpZiAoZGF0YSAmJiAhZGF0YS5vaykge1xyXG4gIC8vICAgICByb3V0ZXIucmVwbGFjZShcIi9lbnRlclwiKTtcclxuICAvLyAgIH1cclxuICAvLyB9LCBbZGF0YSwgcm91dGVyXSk7XHJcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZmxleCBiZy1ibHVlLTIwMCBmaXhlZCB0b3AtMCB3LWZ1bGwgcHktMiB6LTEwXCI+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IHVwcGVyY2FzZSBmb250LWJvbGQgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCIgbWwtMyBtci0zXCI+TG9nbzwvbGk+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2ZpY3Rpb25zXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtci0zXCI+RmljdGlvbjwvbGk+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGhvcnNcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1yLTNcIj5BdXRob3I8L2xpPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9yYW5raW5nXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtci0zXCI+UmFua2luZzwvbGk+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICB7dXNlciA/IChcclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9maWN0aW9ucy9jcmVhdGVcIj5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXItM1wiPkNyZWF0ZTwvbGk+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIiBmbGV4IGZvbnQtYm9sZCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIHt1c2VyID8gPGxpIGNsYXNzTmFtZT1cIm1yLTNcIj5cIkFkbWluXCI8L2xpPiA6IG51bGx9XHJcbiAgICAgICAgICB7bmV4dFNlc3Npb24gPyAoXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCIgbXItMyBwLTAgZmxleCBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgbWluLXctWzI2cHhdXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiIHJvdW5kZWQtZnVsbFwiIGhyZWY9XCIvcHJvZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtuZXh0U2Vzc2lvbi51c2VyIS5pbWFnZSB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNn1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI2fVxyXG4gICAgICAgICAgICAgICAgICA+PC9JbWFnZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAge25leHRTZXNzaW9uID8gKFxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIiBtci01IGZvbnQtYm9sZFwiIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0+XHJcbiAgICAgICAgICAgICAgU2lnbiBvdXRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIiBtci01IGhvdmVyOmN1cnNvci1wb2ludGVyXCI+RW50ZXI8L2xpPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVNlc3Npb24iLCJzaWduT3V0IiwidXNlVXNlciIsIkltYWdlIiwiR25iIiwiZGF0YSIsIm5leHRTZXNzaW9uIiwidXNlciIsImlzTG9hZGluZyIsImhlYWRlciIsImNsYXNzTmFtZSIsIm5hdiIsInVsIiwiaHJlZiIsImxpIiwiZGl2Iiwic3JjIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Gnb.tsx\n"));

/***/ })

});