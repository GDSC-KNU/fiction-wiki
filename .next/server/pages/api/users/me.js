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
exports.id = "pages/api/users/me";
exports.ids = ["pages/api/users/me"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "iron-session":
/*!*******************************!*\
  !*** external "iron-session" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ "./libs/server/client.ts":
/*!*******************************!*\
  !*** ./libs/server/client.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL3NlcnZlci9jbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBRTdDLGlFQUFlLEdBQUcsQ0FBQ0Esd0RBQVksRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fycm90LW1hcmtldC8uL2xpYnMvc2VydmVyL2NsaWVudC50cz8yYjE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFByaXNtYUNsaWVudCgpO1xyXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./libs/server/client.ts\n");

/***/ }),

/***/ "./libs/server/withHandler.ts":
/*!************************************!*\
  !*** ./libs/server/withHandler.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ withHandler)\n/* harmony export */ });\nfunction withHandler({ method , isPrivate =true , handler  }) {\n    return async function(req, res) {\n        if (req.method !== method) {\n            return res.status(405).end();\n        }\n        if (isPrivate && !req.session.user) {\n            return res.status(401).json({\n                ok: false,\n                error: \"Plase Log in\"\n            });\n        }\n        try {\n            await handler(req, res);\n        } catch (error) {\n            console.log(error);\n            return res.status(500).json({\n                error\n            });\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL3NlcnZlci93aXRoSGFuZGxlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBYWUsUUFBUSxDQUFDQSxXQUFXLENBQUMsQ0FBQyxDQUNuQ0MsTUFBTSxHQUNOQyxTQUFTLEVBQUcsSUFBSSxHQUNoQkMsT0FBTyxFQUNHLENBQUMsRUFBRSxDQUFDO0lBQ2QsTUFBTSxnQkFDSkMsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ04sQ0FBQztRQUNmLEVBQUUsRUFBRUQsR0FBRyxDQUFDSCxNQUFNLEtBQUtBLE1BQU0sRUFBRSxDQUFDO1lBQzFCLE1BQU0sQ0FBQ0ksR0FBRyxDQUFDQyxNQUFNLENBQUMsR0FBRyxFQUFFQyxHQUFHO1FBQzVCLENBQUM7UUFDRCxFQUFFLEVBQUVMLFNBQVMsS0FBS0UsR0FBRyxDQUFDSSxPQUFPLENBQUNDLElBQUksRUFBRSxDQUFDO1lBQ25DLE1BQU0sQ0FBQ0osR0FBRyxDQUFDQyxNQUFNLENBQUMsR0FBRyxFQUFFSSxJQUFJLENBQUMsQ0FBQztnQkFBQ0MsRUFBRSxFQUFFLEtBQUs7Z0JBQUVDLEtBQUssRUFBRSxDQUFjO1lBQUMsQ0FBQztRQUNsRSxDQUFDO1FBQ0QsR0FBRyxDQUFDLENBQUM7WUFDSCxLQUFLLENBQUNULE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHO1FBQ3hCLENBQUMsQ0FBQyxLQUFLLEVBQUVPLEtBQUssRUFBRSxDQUFDO1lBQ2ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLO1lBQ2pCLE1BQU0sQ0FBQ1AsR0FBRyxDQUFDQyxNQUFNLENBQUMsR0FBRyxFQUFFSSxJQUFJLENBQUMsQ0FBQztnQkFBQ0UsS0FBSztZQUFDLENBQUM7UUFDdkMsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fycm90LW1hcmtldC8uL2xpYnMvc2VydmVyL3dpdGhIYW5kbGVyLnRzPzhlZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlVHlwZSB7XHJcbiAgb2s6IGJvb2xlYW47XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ29uZmlnVHlwZSB7XHJcbiAgbWV0aG9kOiBcIkdFVFwiIHwgXCJQT1NUXCIgfCBcIkRFTEVURVwiO1xyXG4gIGhhbmRsZXI6IChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4gdm9pZDtcclxuICBpc1ByaXZhdGU/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoSGFuZGxlcih7XHJcbiAgbWV0aG9kLFxyXG4gIGlzUHJpdmF0ZSA9IHRydWUsXHJcbiAgaGFuZGxlcixcclxufTogQ29uZmlnVHlwZSkge1xyXG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAoXHJcbiAgICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gICAgcmVzOiBOZXh0QXBpUmVzcG9uc2VcclxuICApOiBQcm9taXNlPGFueT4ge1xyXG4gICAgaWYgKHJlcS5tZXRob2QgIT09IG1ldGhvZCkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmVuZCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzUHJpdmF0ZSAmJiAhcmVxLnNlc3Npb24udXNlcikge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBvazogZmFsc2UsIGVycm9yOiBcIlBsYXNlIExvZyBpblwiIH0pO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgaGFuZGxlcihyZXEsIHJlcyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbIndpdGhIYW5kbGVyIiwibWV0aG9kIiwiaXNQcml2YXRlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInN0YXR1cyIsImVuZCIsInNlc3Npb24iLCJ1c2VyIiwianNvbiIsIm9rIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./libs/server/withHandler.ts\n");

/***/ }),

/***/ "./libs/server/withSession.ts":
/*!************************************!*\
  !*** ./libs/server/withSession.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withApiSession\": () => (/* binding */ withApiSession)\n/* harmony export */ });\n/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iron-session/next */ \"./node_modules/iron-session/next/dist/index.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_0__]);\niron_session_next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\nconst cookieOptions = {\n    cookieName: \"fdbssession\",\n    password: process.env.COOKIE_PASSWORD\n};\nfunction withApiSession(fn) {\n    return (0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__.withIronSessionApiRoute)(fn, cookieOptions);\n}\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL3NlcnZlci93aXRoU2Vzc2lvbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyRDtBQVUzRCxLQUFLLENBQUNDLGFBQWEsR0FBRyxDQUFDO0lBQ3JCQyxVQUFVLEVBQUUsQ0FBYTtJQUN6QkMsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZUFBZTtBQUN2QyxDQUFDO0FBRU0sU0FBU0MsY0FBYyxDQUFDQyxFQUFPLEVBQUUsQ0FBQztJQUN2QyxNQUFNLENBQUNSLDBFQUF1QixDQUFDUSxFQUFFLEVBQUVQLGFBQWE7QUFDbEQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcnJvdC1tYXJrZXQvLi9saWJzL3NlcnZlci93aXRoU2Vzc2lvbi50cz9hZTdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhJcm9uU2Vzc2lvbkFwaVJvdXRlIH0gZnJvbSBcImlyb24tc2Vzc2lvbi9uZXh0XCI7XHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcImlyb24tc2Vzc2lvblwiIHtcclxuICBpbnRlcmZhY2UgSXJvblNlc3Npb25EYXRhIHtcclxuICAgIHVzZXI/OiB7XHJcbiAgICAgIGlkOiBudW1iZXI7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY29va2llT3B0aW9ucyA9IHtcclxuICBjb29raWVOYW1lOiBcImZkYnNzZXNzaW9uXCIsXHJcbiAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkNPT0tJRV9QQVNTV09SRCEsXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2l0aEFwaVNlc3Npb24oZm46IGFueSkge1xyXG4gIHJldHVybiB3aXRoSXJvblNlc3Npb25BcGlSb3V0ZShmbiwgY29va2llT3B0aW9ucyk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIndpdGhJcm9uU2Vzc2lvbkFwaVJvdXRlIiwiY29va2llT3B0aW9ucyIsImNvb2tpZU5hbWUiLCJwYXNzd29yZCIsInByb2Nlc3MiLCJlbnYiLCJDT09LSUVfUEFTU1dPUkQiLCJ3aXRoQXBpU2Vzc2lvbiIsImZuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./libs/server/withSession.ts\n");

/***/ }),

/***/ "./pages/api/users/me.tsx":
/*!********************************!*\
  !*** ./pages/api/users/me.tsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _libs_server_withHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @libs/server/withHandler */ \"./libs/server/withHandler.ts\");\n/* harmony import */ var _libs_server_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @libs/server/client */ \"./libs/server/client.ts\");\n/* harmony import */ var _libs_server_withSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @libs/server/withSession */ \"./libs/server/withSession.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_server_withSession__WEBPACK_IMPORTED_MODULE_2__]);\n_libs_server_withSession__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\nasync function handler(req, res) {\n    const profile = await _libs_server_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n        where: {\n            id: req.session.user?.id\n        }\n    });\n    res.json({\n        ok: true,\n        profile\n    });\n    res.status(200).end();\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_server_withSession__WEBPACK_IMPORTED_MODULE_2__.withApiSession)((0,_libs_server_withHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    method: \"GET\",\n    handler\n})));\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXNlcnMvbWUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDb0U7QUFDNUI7QUFDaUI7ZUFFMUNHLE9BQU8sQ0FDcEJDLEdBQW1CLEVBQ25CQyxHQUFrQyxFQUNsQyxDQUFDO0lBQ0QsS0FBSyxDQUFDQyxPQUFPLEdBQUcsS0FBSyxDQUFDTCwyRUFBc0IsQ0FBQyxDQUFDO1FBQzVDUSxLQUFLLEVBQUUsQ0FBQztZQUFDQyxFQUFFLEVBQUVOLEdBQUcsQ0FBQ08sT0FBTyxDQUFDSixJQUFJLEVBQUVHLEVBQUU7UUFBQyxDQUFDO0lBQ3JDLENBQUM7SUFDREwsR0FBRyxDQUFDTyxJQUFJLENBQUMsQ0FBQztRQUNSQyxFQUFFLEVBQUUsSUFBSTtRQUNSUCxPQUFPO0lBQ1QsQ0FBQztJQUNERCxHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLEdBQUc7QUFDckIsQ0FBQztBQUVELGlFQUFlYix3RUFBYyxDQUMzQkYsb0VBQVcsQ0FBQyxDQUFDO0lBQ1hnQixNQUFNLEVBQUUsQ0FBSztJQUNiYixPQUFPO0FBQ1QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcnJvdC1tYXJrZXQvLi9wYWdlcy9hcGkvdXNlcnMvbWUudHN4Pzk3NWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB3aXRoSGFuZGxlciwgeyBSZXNwb25zZVR5cGUgfSBmcm9tIFwiQGxpYnMvc2VydmVyL3dpdGhIYW5kbGVyXCI7XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIkBsaWJzL3NlcnZlci9jbGllbnRcIjtcclxuaW1wb3J0IHsgd2l0aEFwaVNlc3Npb24gfSBmcm9tIFwiQGxpYnMvc2VydmVyL3dpdGhTZXNzaW9uXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxyXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8UmVzcG9uc2VUeXBlPlxyXG4pIHtcclxuICBjb25zdCBwcm9maWxlID0gYXdhaXQgY2xpZW50LnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZTogeyBpZDogcmVxLnNlc3Npb24udXNlcj8uaWQgfSxcclxuICB9KTtcclxuICByZXMuanNvbih7XHJcbiAgICBvazogdHJ1ZSxcclxuICAgIHByb2ZpbGUsXHJcbiAgfSk7XHJcbiAgcmVzLnN0YXR1cygyMDApLmVuZCgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBpU2Vzc2lvbihcclxuICB3aXRoSGFuZGxlcih7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBoYW5kbGVyLFxyXG4gIH0pXHJcbik7XHJcbiJdLCJuYW1lcyI6WyJ3aXRoSGFuZGxlciIsImNsaWVudCIsIndpdGhBcGlTZXNzaW9uIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInByb2ZpbGUiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaWQiLCJzZXNzaW9uIiwianNvbiIsIm9rIiwic3RhdHVzIiwiZW5kIiwibWV0aG9kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/users/me.tsx\n");

/***/ }),

/***/ "./node_modules/iron-session/next/dist/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/iron-session/next/dist/index.mjs ***!
  \*******************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withIronSessionApiRoute\": () => (/* binding */ withIronSessionApiRoute),\n/* harmony export */   \"withIronSessionSsr\": () => (/* binding */ withIronSessionSsr)\n/* harmony export */ });\n/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iron-session */ \"iron-session\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session__WEBPACK_IMPORTED_MODULE_0__]);\niron_session__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n// next/index.ts\n\n\n// src/getPropertyDescriptorForReqSession.ts\nfunction getPropertyDescriptorForReqSession(session) {\n  return {\n    enumerable: true,\n    get() {\n      return session;\n    },\n    set(value) {\n      const keys = Object.keys(value);\n      const currentKeys = Object.keys(session);\n      currentKeys.forEach((key) => {\n        if (!keys.includes(key)) {\n          delete session[key];\n        }\n      });\n      keys.forEach((key) => {\n        session[key] = value[key];\n      });\n    }\n  };\n}\n\n// next/index.ts\nfunction withIronSessionApiRoute(handler, options) {\n  return async function nextApiHandlerWrappedWithIronSession(req, res) {\n    let sessionOptions;\n    if (options instanceof Function) {\n      sessionOptions = await options(req, res);\n    } else {\n      sessionOptions = options;\n    }\n    const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(req, res, sessionOptions);\n    Object.defineProperty(req, \"session\", getPropertyDescriptorForReqSession(session));\n    return handler(req, res);\n  };\n}\nfunction withIronSessionSsr(handler, options) {\n  return async function nextGetServerSidePropsHandlerWrappedWithIronSession(context) {\n    let sessionOptions;\n    if (options instanceof Function) {\n      sessionOptions = await options(context.req, context.res);\n    } else {\n      sessionOptions = options;\n    }\n    const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(context.req, context.res, sessionOptions);\n    Object.defineProperty(context.req, \"session\", getPropertyDescriptorForReqSession(session));\n    return handler(context);\n  };\n}\n\n//# sourceMappingURL=index.mjs.map\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaXJvbi1zZXNzaW9uL25leHQvZGlzdC9pbmRleC5tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLDBCQUEwQiw0REFBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLDBCQUEwQiw0REFBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUlFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJyb3QtbWFya2V0Ly4vbm9kZV9tb2R1bGVzL2lyb24tc2Vzc2lvbi9uZXh0L2Rpc3QvaW5kZXgubWpzP2U4MjciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbmV4dC9pbmRleC50c1xuaW1wb3J0IHsgZ2V0SXJvblNlc3Npb24gfSBmcm9tIFwiaXJvbi1zZXNzaW9uXCI7XG5cbi8vIHNyYy9nZXRQcm9wZXJ0eURlc2NyaXB0b3JGb3JSZXFTZXNzaW9uLnRzXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eURlc2NyaXB0b3JGb3JSZXFTZXNzaW9uKHNlc3Npb24pIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gICAgc2V0KHZhbHVlKSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICAgICAgY29uc3QgY3VycmVudEtleXMgPSBPYmplY3Qua2V5cyhzZXNzaW9uKTtcbiAgICAgIGN1cnJlbnRLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgIGRlbGV0ZSBzZXNzaW9uW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgc2Vzc2lvbltrZXldID0gdmFsdWVba2V5XTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuLy8gbmV4dC9pbmRleC50c1xuZnVuY3Rpb24gd2l0aElyb25TZXNzaW9uQXBpUm91dGUoaGFuZGxlciwgb3B0aW9ucykge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gbmV4dEFwaUhhbmRsZXJXcmFwcGVkV2l0aElyb25TZXNzaW9uKHJlcSwgcmVzKSB7XG4gICAgbGV0IHNlc3Npb25PcHRpb25zO1xuICAgIGlmIChvcHRpb25zIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHNlc3Npb25PcHRpb25zID0gYXdhaXQgb3B0aW9ucyhyZXEsIHJlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlc3Npb25PcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uKHJlcSwgcmVzLCBzZXNzaW9uT3B0aW9ucyk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcSwgXCJzZXNzaW9uXCIsIGdldFByb3BlcnR5RGVzY3JpcHRvckZvclJlcVNlc3Npb24oc2Vzc2lvbikpO1xuICAgIHJldHVybiBoYW5kbGVyKHJlcSwgcmVzKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIHdpdGhJcm9uU2Vzc2lvblNzcihoYW5kbGVyLCBvcHRpb25zKSB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiBuZXh0R2V0U2VydmVyU2lkZVByb3BzSGFuZGxlcldyYXBwZWRXaXRoSXJvblNlc3Npb24oY29udGV4dCkge1xuICAgIGxldCBzZXNzaW9uT3B0aW9ucztcbiAgICBpZiAob3B0aW9ucyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICBzZXNzaW9uT3B0aW9ucyA9IGF3YWl0IG9wdGlvbnMoY29udGV4dC5yZXEsIGNvbnRleHQucmVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2Vzc2lvbk9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0SXJvblNlc3Npb24oY29udGV4dC5yZXEsIGNvbnRleHQucmVzLCBzZXNzaW9uT3B0aW9ucyk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnRleHQucmVxLCBcInNlc3Npb25cIiwgZ2V0UHJvcGVydHlEZXNjcmlwdG9yRm9yUmVxU2Vzc2lvbihzZXNzaW9uKSk7XG4gICAgcmV0dXJuIGhhbmRsZXIoY29udGV4dCk7XG4gIH07XG59XG5leHBvcnQge1xuICB3aXRoSXJvblNlc3Npb25BcGlSb3V0ZSxcbiAgd2l0aElyb25TZXNzaW9uU3NyXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/iron-session/next/dist/index.mjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/users/me.tsx"));
module.exports = __webpack_exports__;

})();