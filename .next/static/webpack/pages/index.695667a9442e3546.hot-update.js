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

/***/ "./libs/client/useUser.tsx":
/*!*********************************!*\
  !*** ./libs/client/useUser.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useUser; }\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nfunction useUser() {\n    _s();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/users/me\"), data = ref.data, error = ref.error;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (data && !data.ok) {\n            router.replace(\"/enter\");\n        }\n    }, [\n        data,\n        router\n    ]);\n    //   return router.replace(\"/enter\");\n    return {\n        user: data === null || data === void 0 ? void 0 : data.profile,\n        isLoading: !data && !error\n    };\n};\n_s(useUser, \"4W9O7/pgHSLAxPizl2rA7NDDAiw=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter\n    ];\n});\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL2NsaWVudC91c2VVc2VyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVDO0FBQ0k7QUFDbkI7O0FBRVQsUUFBUSxDQUFDRyxPQUFPLEdBQUcsQ0FBQzs7SUFDakMsR0FBSyxDQUFtQkQsR0FBdUIsR0FBdkJBLCtDQUFNLENBQUMsQ0FBZSxpQkFBdENFLElBQUksR0FBWUYsR0FBdUIsQ0FBdkNFLElBQUksRUFBRUMsS0FBSyxHQUFLSCxHQUF1QixDQUFqQ0csS0FBSztJQUNuQixHQUFLLENBQUNDLE1BQU0sR0FBR04sc0RBQVM7SUFDeEJDLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDZixFQUFFLEVBQUVHLElBQUksS0FBS0EsSUFBSSxDQUFDRyxFQUFFLEVBQUUsQ0FBQztZQUNyQkQsTUFBTSxDQUFDRSxPQUFPLENBQUMsQ0FBUTtRQUN6QixDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUNKO1FBQUFBLElBQUk7UUFBRUUsTUFBTTtJQUFBLENBQUM7SUFFakIsRUFBcUM7SUFFckMsTUFBTSxDQUFDLENBQUM7UUFBQ0csSUFBSSxFQUFFTCxJQUFJLGFBQUpBLElBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFhLEdBQWJBLElBQUksQ0FBSkEsQ0FBYSxHQUFiQSxJQUFJLENBQUVNLE9BQU87UUFBRUMsU0FBUyxHQUFHUCxJQUFJLEtBQUtDLEtBQUs7SUFBQyxDQUFDO0FBQzVELENBQUM7R0FadUJGLE9BQU87O1FBQ0xELDJDQUFNO1FBQ2ZGLGtEQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYnMvY2xpZW50L3VzZVVzZXIudHN4P2M2N2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VVc2VyKCkge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcIi9hcGkvdXNlcnMvbWVcIik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChkYXRhICYmICFkYXRhLm9rKSB7XHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKFwiL2VudGVyXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtkYXRhLCByb3V0ZXJdKTtcclxuXHJcbiAgLy8gICByZXR1cm4gcm91dGVyLnJlcGxhY2UoXCIvZW50ZXJcIik7XHJcblxyXG4gIHJldHVybiB7IHVzZXI6IGRhdGE/LnByb2ZpbGUsIGlzTG9hZGluZzogIWRhdGEgJiYgIWVycm9yIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVNXUiIsInVzZVVzZXIiLCJkYXRhIiwiZXJyb3IiLCJyb3V0ZXIiLCJvayIsInJlcGxhY2UiLCJ1c2VyIiwicHJvZmlsZSIsImlzTG9hZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./libs/client/useUser.tsx\n");

/***/ })

});