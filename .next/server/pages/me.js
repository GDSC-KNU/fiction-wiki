"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/me";
exports.ids = ["pages/me"];
exports.modules = {

/***/ "./libs/client/useUser.tsx":
/*!*********************************!*\
  !*** ./libs/client/useUser.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useUser)\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);\nswr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction useUser() {\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/users/me\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (data && !data.ok) {\n            router.replace(\"/enter\");\n        }\n    }, [\n        data,\n        router\n    ]);\n    //   return router.replace(\"/enter\");\n    return {\n        user: data?.profile,\n        isLoading: !data && !error\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL2NsaWVudC91c2VVc2VyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0M7QUFDSTtBQUNuQjtBQUVWLFNBQVNHLE9BQU8sR0FBRztJQUNoQyxNQUFNLEVBQUVDLElBQUksR0FBRUMsS0FBSyxHQUFFLEdBQUdILCtDQUFNLENBQUMsZUFBZSxDQUFDO0lBQy9DLE1BQU1JLE1BQU0sR0FBR04sc0RBQVMsRUFBRTtJQUMxQkMsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsSUFBSUcsSUFBSSxJQUFJLENBQUNBLElBQUksQ0FBQ0csRUFBRSxFQUFFO1lBQ3BCRCxNQUFNLENBQUNFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxQjtLQUNGLEVBQUU7UUFBQ0osSUFBSTtRQUFFRSxNQUFNO0tBQUMsQ0FBQyxDQUFDO0lBRW5CLHFDQUFxQztJQUVyQyxPQUFPO1FBQUVHLElBQUksRUFBRUwsSUFBSSxFQUFFTSxPQUFPO1FBQUVDLFNBQVMsRUFBRSxDQUFDUCxJQUFJLElBQUksQ0FBQ0MsS0FBSztLQUFFLENBQUM7Q0FDNUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJyb3QtbWFya2V0Ly4vbGlicy9jbGllbnQvdXNlVXNlci50c3g/YzY3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVVzZXIoKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFwiL2FwaS91c2Vycy9tZVwiKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGRhdGEgJiYgIWRhdGEub2spIHtcclxuICAgICAgcm91dGVyLnJlcGxhY2UoXCIvZW50ZXJcIik7XHJcbiAgICB9XHJcbiAgfSwgW2RhdGEsIHJvdXRlcl0pO1xyXG5cclxuICAvLyAgIHJldHVybiByb3V0ZXIucmVwbGFjZShcIi9lbnRlclwiKTtcclxuXHJcbiAgcmV0dXJuIHsgdXNlcjogZGF0YT8ucHJvZmlsZSwgaXNMb2FkaW5nOiAhZGF0YSAmJiAhZXJyb3IgfTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU1dSIiwidXNlVXNlciIsImRhdGEiLCJlcnJvciIsInJvdXRlciIsIm9rIiwicmVwbGFjZSIsInVzZXIiLCJwcm9maWxlIiwiaXNMb2FkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./libs/client/useUser.tsx\n");

/***/ }),

/***/ "./pages/me.tsx":
/*!**********************!*\
  !*** ./pages/me.tsx ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_client_useUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @libs/client/useUser */ \"./libs/client/useUser.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_client_useUser__WEBPACK_IMPORTED_MODULE_1__]);\n_libs_client_useUser__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst Me = ()=>{\n    const { user , isLoading  } = (0,_libs_client_useUser__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const arr = [\n        1,\n        2,\n        3,\n        4,\n        5,\n        6,\n        7,\n        8,\n        9,\n        10\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" flex justify-center\",\n            children: \"Profile \\uC785\\uB2C8\\uB2E4.\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\me.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\me.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Me);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTJDO0FBTTNDLE1BQU1DLEVBQUUsR0FBYSxJQUFNO0lBQ3pCLE1BQU0sRUFBRUMsSUFBSSxHQUFFQyxTQUFTLEdBQUUsR0FBR0gsZ0VBQU8sRUFBRTtJQUNyQyxNQUFNSSxHQUFHLEdBQUc7QUFBQyxTQUFDO0FBQUUsU0FBQztBQUFFLFNBQUM7QUFBRSxTQUFDO0FBQUUsU0FBQztBQUFFLFNBQUM7QUFBRSxTQUFDO0FBQUUsU0FBQztBQUFFLFNBQUM7QUFBRSxVQUFFO0tBQUM7SUFFM0MscUJBQ0UsOERBQUNDLEtBQUc7a0JBQ0YsNEVBQUNBLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLHNCQUFzQjtzQkFBQyw2QkFBWTs7Ozs7cUJBQU07Ozs7O2lCQUNwRCxDQUNOO0NBQ0g7QUFFRCxpRUFBZUwsRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fycm90LW1hcmtldC8uL3BhZ2VzL21lLnRzeD8wNzZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VVc2VyIGZyb20gXCJAbGlicy9jbGllbnQvdXNlVXNlclwiO1xyXG5pbXBvcnQgeyBGaWN0aW9uIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG5cclxuY29uc3QgTWU6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgdXNlciwgaXNMb2FkaW5nIH0gPSB1c2VVc2VyKCk7XHJcbiAgY29uc3QgYXJyID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXgganVzdGlmeS1jZW50ZXJcIj5Qcm9maWxlIOyeheuLiOuLpC48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZTtcclxuIl0sIm5hbWVzIjpbInVzZVVzZXIiLCJNZSIsInVzZXIiLCJpc0xvYWRpbmciLCJhcnIiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/me.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/me.tsx"));
module.exports = __webpack_exports__;

})();