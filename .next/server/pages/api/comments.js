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
exports.id = "pages/api/comments";
exports.ids = ["pages/api/comments"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "iron-session":
/*!*******************************!*\
  !*** external "iron-session" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ "(api)/./libs/server/client.ts":
/*!*******************************!*\
  !*** ./libs/server/client.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = global.client || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.client = client;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL3NlcnZlci9jbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBTTlDLE1BQU1DLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFNLElBQUksSUFBSUQsd0RBQVksRUFBRTtBQUVsRCxJQUFJRyxJQUFzQyxFQUFFRCxNQUFNLENBQUNELE1BQU0sR0FBR0EsTUFBTSxDQUFDO0FBRW5FLGlFQUFlLElBQUlELHdEQUFZLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcnJvdC1tYXJrZXQvLi9saWJzL3NlcnZlci9jbGllbnQudHM/MmIxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICB2YXIgY2xpZW50OiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmNvbnN0IGNsaWVudCA9IGdsb2JhbC5jbGllbnQgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIGdsb2JhbC5jbGllbnQgPSBjbGllbnQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgUHJpc21hQ2xpZW50KCk7XHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJjbGllbnQiLCJnbG9iYWwiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./libs/server/client.ts\n");

/***/ }),

/***/ "(api)/./libs/server/withHandler.ts":
/*!************************************!*\
  !*** ./libs/server/withHandler.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ withHandler)\n/* harmony export */ });\nfunction withHandler({ methods , isPrivate =false , handler  }) {\n    return async function(req, res) {\n        if (req.method && !methods.includes(req.method)) {\n            return res.status(405).end();\n        }\n        if (isPrivate && !req.session.user) {\n            return res.status(401).json({\n                ok: false,\n                error: \"Plase Log in\"\n            });\n        }\n        try {\n            await handler(req, res);\n        } catch (error) {\n            console.log(error);\n            return res.status(500).json({\n                error\n            });\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL3NlcnZlci93aXRoSGFuZGxlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBZWUsU0FBU0EsV0FBVyxDQUFDLEVBQ2xDQyxPQUFPLEdBQ1BDLFNBQVMsRUFBRyxLQUFLLEdBQ2pCQyxPQUFPLEdBQ0ksRUFBRTtJQUNiLE9BQU8sZUFDTEMsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ047UUFDZCxJQUFJRCxHQUFHLENBQUNFLE1BQU0sSUFBSSxDQUFDTCxPQUFPLENBQUNNLFFBQVEsQ0FBQ0gsR0FBRyxDQUFDRSxNQUFNLENBQVEsRUFBRTtZQUN0RCxPQUFPRCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxFQUFFLENBQUM7U0FDOUI7UUFDRCxJQUFJUCxTQUFTLElBQUksQ0FBQ0UsR0FBRyxDQUFDTSxPQUFPLENBQUNDLElBQUksRUFBRTtZQUNsQyxPQUFPTixHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0ksSUFBSSxDQUFDO2dCQUFFQyxFQUFFLEVBQUUsS0FBSztnQkFBRUMsS0FBSyxFQUFFLGNBQWM7YUFBRSxDQUFDLENBQUM7U0FDbkU7UUFDRCxJQUFJO1lBQ0YsTUFBTVgsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCLENBQUMsT0FBT1MsS0FBSyxFQUFFO1lBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUMsQ0FBQztZQUNuQixPQUFPVCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0ksSUFBSSxDQUFDO2dCQUFFRSxLQUFLO2FBQUUsQ0FBQyxDQUFDO1NBQ3hDO0tBQ0YsQ0FBQztDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fycm90LW1hcmtldC8uL2xpYnMvc2VydmVyL3dpdGhIYW5kbGVyLnRzPzhlZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlVHlwZSB7XHJcbiAgb2s6IGJvb2xlYW47XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG50eXBlIG1ldGhvZCA9IFwiR0VUXCIgfCBcIlBPU1RcIiB8IFwiREVMRVRFXCI7XHJcblxyXG5pbnRlcmZhY2UgQ29uZmlnVHlwZSB7XHJcbiAgbWV0aG9kczogbWV0aG9kW107XHJcbiAgaGFuZGxlcjogKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB2b2lkO1xyXG4gIGlzUHJpdmF0ZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhIYW5kbGVyKHtcclxuICBtZXRob2RzLFxyXG4gIGlzUHJpdmF0ZSA9IGZhbHNlLFxyXG4gIGhhbmRsZXIsXHJcbn06IENvbmZpZ1R5cGUpIHtcclxuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKFxyXG4gICAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICAgIHJlczogTmV4dEFwaVJlc3BvbnNlXHJcbiAgKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGlmIChyZXEubWV0aG9kICYmICFtZXRob2RzLmluY2x1ZGVzKHJlcS5tZXRob2QgYXMgYW55KSkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmVuZCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzUHJpdmF0ZSAmJiAhcmVxLnNlc3Npb24udXNlcikge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBvazogZmFsc2UsIGVycm9yOiBcIlBsYXNlIExvZyBpblwiIH0pO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgaGFuZGxlcihyZXEsIHJlcyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbIndpdGhIYW5kbGVyIiwibWV0aG9kcyIsImlzUHJpdmF0ZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJpbmNsdWRlcyIsInN0YXR1cyIsImVuZCIsInNlc3Npb24iLCJ1c2VyIiwianNvbiIsIm9rIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./libs/server/withHandler.ts\n");

/***/ }),

/***/ "(api)/./libs/server/withSession.ts":
/*!************************************!*\
  !*** ./libs/server/withSession.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withApiSession\": () => (/* binding */ withApiSession)\n/* harmony export */ });\n/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iron-session/next */ \"(api)/./node_modules/iron-session/next/dist/index.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_0__]);\niron_session_next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst cookieOptions = {\n    cookieName: \"fdbssession\",\n    password: process.env.COOKIE_PASSWORD\n};\nfunction withApiSession(fn) {\n    return (0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__.withIronSessionApiRoute)(fn, cookieOptions);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL3NlcnZlci93aXRoU2Vzc2lvbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0RDtBQVU1RCxNQUFNQyxhQUFhLEdBQUc7SUFDcEJDLFVBQVUsRUFBRSxhQUFhO0lBQ3pCQyxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxlQUFlO0NBQ3RDO0FBRU0sU0FBU0MsY0FBYyxDQUFDQyxFQUFPLEVBQUU7SUFDdEMsT0FBT1IsMEVBQXVCLENBQUNRLEVBQUUsRUFBRVAsYUFBYSxDQUFDLENBQUM7Q0FDbkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJyb3QtbWFya2V0Ly4vbGlicy9zZXJ2ZXIvd2l0aFNlc3Npb24udHM/YWU3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoSXJvblNlc3Npb25BcGlSb3V0ZSB9IGZyb20gXCJpcm9uLXNlc3Npb24vbmV4dFwiO1xyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCJpcm9uLXNlc3Npb25cIiB7XHJcbiAgaW50ZXJmYWNlIElyb25TZXNzaW9uRGF0YSB7XHJcbiAgICB1c2VyPzoge1xyXG4gICAgICBpZDogc3RyaW5nO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGNvb2tpZU9wdGlvbnMgPSB7XHJcbiAgY29va2llTmFtZTogXCJmZGJzc2Vzc2lvblwiLFxyXG4gIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5DT09LSUVfUEFTU1dPUkQhLFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhBcGlTZXNzaW9uKGZuOiBhbnkpIHtcclxuICByZXR1cm4gd2l0aElyb25TZXNzaW9uQXBpUm91dGUoZm4sIGNvb2tpZU9wdGlvbnMpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ3aXRoSXJvblNlc3Npb25BcGlSb3V0ZSIsImNvb2tpZU9wdGlvbnMiLCJjb29raWVOYW1lIiwicGFzc3dvcmQiLCJwcm9jZXNzIiwiZW52IiwiQ09PS0lFX1BBU1NXT1JEIiwid2l0aEFwaVNlc3Npb24iLCJmbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./libs/server/withSession.ts\n");

/***/ }),

/***/ "(api)/./pages/api/comments.ts":
/*!*******************************!*\
  !*** ./pages/api/comments.ts ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _libs_server_withHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @libs/server/withHandler */ \"(api)/./libs/server/withHandler.ts\");\n/* harmony import */ var _libs_server_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @libs/server/client */ \"(api)/./libs/server/client.ts\");\n/* harmony import */ var _libs_server_withSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @libs/server/withSession */ \"(api)/./libs/server/withSession.ts\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_server_withSession__WEBPACK_IMPORTED_MODULE_2__]);\n_libs_server_withSession__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nasync function handler(req, res) {\n    const { session: { user  } , url ,  } = req;\n    console.log(url);\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.getSession)({\n        req\n    });\n    console.log(session);\n    // interface SessionWithId extends Session {\n    //   id : string;\n    // }\n    const comments = await _libs_server_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].comment.findMany({\n        where: {\n            createdById: session?.user.id\n        },\n        include: {\n            fiction: true\n        }\n    });\n    res.json({\n        ok: true,\n        comments\n    });\n    res.status(200).end();\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_server_withSession__WEBPACK_IMPORTED_MODULE_2__.withApiSession)((0,_libs_server_withHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    methods: [\n        \"GET\"\n    ],\n    handler\n})));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tbWVudHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRXFFO0FBQzVCO0FBQ2lCO0FBQ2I7QUFFN0MsZUFBZUksT0FBTyxDQUNwQkMsR0FBbUIsRUFDbkJDLEdBQWtDLEVBQ2xDO0lBQ0EsTUFBTSxFQUNKQyxPQUFPLEVBQUUsRUFBRUMsSUFBSSxHQUFFLEdBQ2pCQyxHQUFHLEtBQ0osR0FBR0osR0FBRztJQUNQSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDLENBQUM7SUFDakIsTUFBTUYsT0FBTyxHQUFHLE1BQU1KLDJEQUFVLENBQUM7UUFBRUUsR0FBRztLQUFFLENBQUM7SUFDekNLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixPQUFPLENBQUMsQ0FBQztJQUVyQiw0Q0FBNEM7SUFDNUMsaUJBQWlCO0lBQ2pCLElBQUk7SUFFSixNQUFNSyxRQUFRLEdBQUcsTUFBTVgsNEVBQXVCLENBQUM7UUFDN0NjLEtBQUssRUFBRTtZQUNMQyxXQUFXLEVBQUVULE9BQU8sRUFBRUMsSUFBSSxDQUFFUyxFQUFFO1NBQy9CO1FBQ0RDLE9BQU8sRUFBRTtZQUFFQyxPQUFPLEVBQUUsSUFBSTtTQUFFO0tBQzNCLENBQUM7SUFFRmIsR0FBRyxDQUFDYyxJQUFJLENBQUM7UUFDUEMsRUFBRSxFQUFFLElBQUk7UUFDUlQsUUFBUTtLQUNULENBQUMsQ0FBQztJQUNITixHQUFHLENBQUNnQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLEdBQUcsRUFBRSxDQUFDO0NBQ3ZCO0FBRUQsaUVBQWVyQix3RUFBYyxDQUMzQkYsb0VBQVcsQ0FBQztJQUNWd0IsT0FBTyxFQUFFO1FBQUMsS0FBSztLQUFDO0lBQ2hCcEIsT0FBTztDQUNSLENBQUMsQ0FDSCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fycm90LW1hcmtldC8uL3BhZ2VzL2FwaS9jb21tZW50cy50cz9iM2MwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpY3Rpb24sIFNlc3Npb24gfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB3aXRoSGFuZGxlciwgeyBSZXNwb25zZVR5cGUgfSBmcm9tIFwiQGxpYnMvc2VydmVyL3dpdGhIYW5kbGVyXCI7XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIkBsaWJzL3NlcnZlci9jbGllbnRcIjtcclxuaW1wb3J0IHsgd2l0aEFwaVNlc3Npb24gfSBmcm9tIFwiQGxpYnMvc2VydmVyL3dpdGhTZXNzaW9uXCI7XHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxyXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8UmVzcG9uc2VUeXBlPlxyXG4pIHtcclxuICBjb25zdCB7XHJcbiAgICBzZXNzaW9uOiB7IHVzZXIgfSxcclxuICAgIHVybCxcclxuICB9ID0gcmVxO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXEgfSk7XHJcbiAgY29uc29sZS5sb2coc2Vzc2lvbik7XHJcblxyXG4gIC8vIGludGVyZmFjZSBTZXNzaW9uV2l0aElkIGV4dGVuZHMgU2Vzc2lvbiB7XHJcbiAgLy8gICBpZCA6IHN0cmluZztcclxuICAvLyB9XHJcblxyXG4gIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgY2xpZW50LmNvbW1lbnQuZmluZE1hbnkoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgY3JlYXRlZEJ5SWQ6IHNlc3Npb24/LnVzZXIhLmlkLFxyXG4gICAgfSxcclxuICAgIGluY2x1ZGU6IHsgZmljdGlvbjogdHJ1ZSB9LFxyXG4gIH0pO1xyXG5cclxuICByZXMuanNvbih7XHJcbiAgICBvazogdHJ1ZSxcclxuICAgIGNvbW1lbnRzLFxyXG4gIH0pO1xyXG4gIHJlcy5zdGF0dXMoMjAwKS5lbmQoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwaVNlc3Npb24oXHJcbiAgd2l0aEhhbmRsZXIoe1xyXG4gICAgbWV0aG9kczogW1wiR0VUXCJdLFxyXG4gICAgaGFuZGxlcixcclxuICB9KVxyXG4pO1xyXG4iXSwibmFtZXMiOlsid2l0aEhhbmRsZXIiLCJjbGllbnQiLCJ3aXRoQXBpU2Vzc2lvbiIsImdldFNlc3Npb24iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic2Vzc2lvbiIsInVzZXIiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiY29tbWVudHMiLCJjb21tZW50IiwiZmluZE1hbnkiLCJ3aGVyZSIsImNyZWF0ZWRCeUlkIiwiaWQiLCJpbmNsdWRlIiwiZmljdGlvbiIsImpzb24iLCJvayIsInN0YXR1cyIsImVuZCIsIm1ldGhvZHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/comments.ts\n");

/***/ }),

/***/ "(api)/./node_modules/iron-session/next/dist/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/iron-session/next/dist/index.mjs ***!
  \*******************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withIronSessionApiRoute\": () => (/* binding */ withIronSessionApiRoute),\n/* harmony export */   \"withIronSessionSsr\": () => (/* binding */ withIronSessionSsr)\n/* harmony export */ });\n/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iron-session */ \"iron-session\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session__WEBPACK_IMPORTED_MODULE_0__]);\niron_session__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// next/index.ts\n\n\n// src/getPropertyDescriptorForReqSession.ts\nfunction getPropertyDescriptorForReqSession(session) {\n  return {\n    enumerable: true,\n    get() {\n      return session;\n    },\n    set(value) {\n      const keys = Object.keys(value);\n      const currentKeys = Object.keys(session);\n      currentKeys.forEach((key) => {\n        if (!keys.includes(key)) {\n          delete session[key];\n        }\n      });\n      keys.forEach((key) => {\n        session[key] = value[key];\n      });\n    }\n  };\n}\n\n// next/index.ts\nfunction withIronSessionApiRoute(handler, options) {\n  return async function nextApiHandlerWrappedWithIronSession(req, res) {\n    let sessionOptions;\n    if (options instanceof Function) {\n      sessionOptions = await options(req, res);\n    } else {\n      sessionOptions = options;\n    }\n    const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(req, res, sessionOptions);\n    Object.defineProperty(req, \"session\", getPropertyDescriptorForReqSession(session));\n    return handler(req, res);\n  };\n}\nfunction withIronSessionSsr(handler, options) {\n  return async function nextGetServerSidePropsHandlerWrappedWithIronSession(context) {\n    let sessionOptions;\n    if (options instanceof Function) {\n      sessionOptions = await options(context.req, context.res);\n    } else {\n      sessionOptions = options;\n    }\n    const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(context.req, context.res, sessionOptions);\n    Object.defineProperty(context.req, \"session\", getPropertyDescriptorForReqSession(session));\n    return handler(context);\n  };\n}\n\n//# sourceMappingURL=index.mjs.map\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvaXJvbi1zZXNzaW9uL25leHQvZGlzdC9pbmRleC5tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLDBCQUEwQiw0REFBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLDBCQUEwQiw0REFBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUlFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJyb3QtbWFya2V0Ly4vbm9kZV9tb2R1bGVzL2lyb24tc2Vzc2lvbi9uZXh0L2Rpc3QvaW5kZXgubWpzP2U4MjciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbmV4dC9pbmRleC50c1xuaW1wb3J0IHsgZ2V0SXJvblNlc3Npb24gfSBmcm9tIFwiaXJvbi1zZXNzaW9uXCI7XG5cbi8vIHNyYy9nZXRQcm9wZXJ0eURlc2NyaXB0b3JGb3JSZXFTZXNzaW9uLnRzXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eURlc2NyaXB0b3JGb3JSZXFTZXNzaW9uKHNlc3Npb24pIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gICAgc2V0KHZhbHVlKSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICAgICAgY29uc3QgY3VycmVudEtleXMgPSBPYmplY3Qua2V5cyhzZXNzaW9uKTtcbiAgICAgIGN1cnJlbnRLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgIGRlbGV0ZSBzZXNzaW9uW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgc2Vzc2lvbltrZXldID0gdmFsdWVba2V5XTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuLy8gbmV4dC9pbmRleC50c1xuZnVuY3Rpb24gd2l0aElyb25TZXNzaW9uQXBpUm91dGUoaGFuZGxlciwgb3B0aW9ucykge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gbmV4dEFwaUhhbmRsZXJXcmFwcGVkV2l0aElyb25TZXNzaW9uKHJlcSwgcmVzKSB7XG4gICAgbGV0IHNlc3Npb25PcHRpb25zO1xuICAgIGlmIChvcHRpb25zIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHNlc3Npb25PcHRpb25zID0gYXdhaXQgb3B0aW9ucyhyZXEsIHJlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlc3Npb25PcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uKHJlcSwgcmVzLCBzZXNzaW9uT3B0aW9ucyk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcSwgXCJzZXNzaW9uXCIsIGdldFByb3BlcnR5RGVzY3JpcHRvckZvclJlcVNlc3Npb24oc2Vzc2lvbikpO1xuICAgIHJldHVybiBoYW5kbGVyKHJlcSwgcmVzKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIHdpdGhJcm9uU2Vzc2lvblNzcihoYW5kbGVyLCBvcHRpb25zKSB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiBuZXh0R2V0U2VydmVyU2lkZVByb3BzSGFuZGxlcldyYXBwZWRXaXRoSXJvblNlc3Npb24oY29udGV4dCkge1xuICAgIGxldCBzZXNzaW9uT3B0aW9ucztcbiAgICBpZiAob3B0aW9ucyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICBzZXNzaW9uT3B0aW9ucyA9IGF3YWl0IG9wdGlvbnMoY29udGV4dC5yZXEsIGNvbnRleHQucmVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2Vzc2lvbk9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0SXJvblNlc3Npb24oY29udGV4dC5yZXEsIGNvbnRleHQucmVzLCBzZXNzaW9uT3B0aW9ucyk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnRleHQucmVxLCBcInNlc3Npb25cIiwgZ2V0UHJvcGVydHlEZXNjcmlwdG9yRm9yUmVxU2Vzc2lvbihzZXNzaW9uKSk7XG4gICAgcmV0dXJuIGhhbmRsZXIoY29udGV4dCk7XG4gIH07XG59XG5leHBvcnQge1xuICB3aXRoSXJvblNlc3Npb25BcGlSb3V0ZSxcbiAgd2l0aElyb25TZXNzaW9uU3NyXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/iron-session/next/dist/index.mjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/comments.ts"));
module.exports = __webpack_exports__;

})();