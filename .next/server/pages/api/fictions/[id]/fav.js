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
exports.id = "pages/api/fictions/[id]/fav";
exports.ids = ["pages/api/fictions/[id]/fav"];
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ withHandler)\n/* harmony export */ });\nfunction withHandler({ methods , isPrivate =false , handler  }) {\n    return async function(req, res) {\n        // if (!req.session.user) {\n        //   console.log(\"not logged in\");\n        //   return res.status(200).json({ ok: false, error: \"Plase Log in\" });\n        // }\n        console.log(req.method);\n        if (req.method && !methods.includes(req.method)) {\n            return res.status(405).end();\n        }\n        if (isPrivate && !req.session.user) {\n            return res.status(401).json({\n                ok: false,\n                error: \"Plase Log in\"\n            });\n        }\n        try {\n            await handler(req, res);\n        } catch (error) {\n            console.log(error);\n            return res.status(500).json({\n                error\n            });\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL3NlcnZlci93aXRoSGFuZGxlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBZWUsU0FBU0EsV0FBVyxDQUFDLEVBQ2xDQyxPQUFPLEdBQ1BDLFNBQVMsRUFBRyxLQUFLLEdBQ2pCQyxPQUFPLEdBQ0ksRUFBRTtJQUNiLE9BQU8sZUFDTEMsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ047UUFDZCwyQkFBMkI7UUFDM0Isa0NBQWtDO1FBQ2xDLHVFQUF1RTtRQUN2RSxJQUFJO1FBQ0pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxHQUFHLENBQUNJLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLElBQUlKLEdBQUcsQ0FBQ0ksTUFBTSxJQUFJLENBQUNQLE9BQU8sQ0FBQ1EsUUFBUSxDQUFDTCxHQUFHLENBQUNJLE1BQU0sQ0FBUSxFQUFFO1lBQ3RELE9BQU9ILEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEVBQUUsQ0FBQztRQUMvQixDQUFDO1FBQ0QsSUFBSVQsU0FBUyxJQUFJLENBQUNFLEdBQUcsQ0FBQ1EsT0FBTyxDQUFDQyxJQUFJLEVBQUU7WUFDbEMsT0FBT1IsR0FBRyxDQUFDSyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNJLElBQUksQ0FBQztnQkFBRUMsRUFBRSxFQUFFLEtBQUs7Z0JBQUVDLEtBQUssRUFBRSxjQUFjO2FBQUUsQ0FBQyxDQUFDO1FBQ3BFLENBQUM7UUFDRCxJQUFJO1lBQ0YsTUFBTWIsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLEVBQUUsT0FBT1csS0FBSyxFQUFFO1lBQ2RWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUyxLQUFLLENBQUMsQ0FBQztZQUNuQixPQUFPWCxHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0ksSUFBSSxDQUFDO2dCQUFFRSxLQUFLO2FBQUUsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7SUFDSCxDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fycm90LW1hcmtldC8uL2xpYnMvc2VydmVyL3dpdGhIYW5kbGVyLnRzPzhlZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlVHlwZSB7XHJcbiAgb2s6IGJvb2xlYW47XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG50eXBlIG1ldGhvZCA9IFwiR0VUXCIgfCBcIlBPU1RcIiB8IFwiREVMRVRFXCIgfCBcIlBVVFwiO1xyXG5cclxuaW50ZXJmYWNlIENvbmZpZ1R5cGUge1xyXG4gIG1ldGhvZHM6IG1ldGhvZFtdO1xyXG4gIGhhbmRsZXI6IChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4gdm9pZDtcclxuICBpc1ByaXZhdGU/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoSGFuZGxlcih7XHJcbiAgbWV0aG9kcyxcclxuICBpc1ByaXZhdGUgPSBmYWxzZSxcclxuICBoYW5kbGVyLFxyXG59OiBDb25maWdUeXBlKSB7XHJcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChcclxuICAgIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgICByZXM6IE5leHRBcGlSZXNwb25zZVxyXG4gICk6IFByb21pc2U8YW55PiB7XHJcbiAgICAvLyBpZiAoIXJlcS5zZXNzaW9uLnVzZXIpIHtcclxuICAgIC8vICAgY29uc29sZS5sb2coXCJub3QgbG9nZ2VkIGluXCIpO1xyXG4gICAgLy8gICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBvazogZmFsc2UsIGVycm9yOiBcIlBsYXNlIExvZyBpblwiIH0pO1xyXG4gICAgLy8gfVxyXG4gICAgY29uc29sZS5sb2cocmVxLm1ldGhvZCk7XHJcbiAgICBpZiAocmVxLm1ldGhvZCAmJiAhbWV0aG9kcy5pbmNsdWRlcyhyZXEubWV0aG9kIGFzIGFueSkpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5lbmQoKTtcclxuICAgIH1cclxuICAgIGlmIChpc1ByaXZhdGUgJiYgIXJlcS5zZXNzaW9uLnVzZXIpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgb2s6IGZhbHNlLCBlcnJvcjogXCJQbGFzZSBMb2cgaW5cIiB9KTtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGhhbmRsZXIocmVxLCByZXMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvciB9KTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ3aXRoSGFuZGxlciIsIm1ldGhvZHMiLCJpc1ByaXZhdGUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZCIsImluY2x1ZGVzIiwic3RhdHVzIiwiZW5kIiwic2Vzc2lvbiIsInVzZXIiLCJqc29uIiwib2siLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./libs/server/withHandler.ts\n");

/***/ }),

/***/ "(api)/./libs/server/withSession.ts":
/*!************************************!*\
  !*** ./libs/server/withSession.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withApiSession\": () => (/* binding */ withApiSession)\n/* harmony export */ });\n/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iron-session/next */ \"(api)/./node_modules/iron-session/next/dist/index.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_0__]);\niron_session_next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst cookieOptions = {\n    cookieName: \"fdbssession\",\n    password: process.env.COOKIE_PASSWORD\n};\nfunction withApiSession(fn) {\n    return (0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__.withIronSessionApiRoute)(fn, cookieOptions);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL3NlcnZlci93aXRoU2Vzc2lvbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0RDtBQVU1RCxNQUFNQyxhQUFhLEdBQUc7SUFDcEJDLFVBQVUsRUFBRSxhQUFhO0lBQ3pCQyxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxlQUFlO0NBQ3RDO0FBRU0sU0FBU0MsY0FBYyxDQUFDQyxFQUFPLEVBQUU7SUFDdEMsT0FBT1IsMEVBQXVCLENBQUNRLEVBQUUsRUFBRVAsYUFBYSxDQUFDLENBQUM7QUFDcEQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcnJvdC1tYXJrZXQvLi9saWJzL3NlcnZlci93aXRoU2Vzc2lvbi50cz9hZTdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhJcm9uU2Vzc2lvbkFwaVJvdXRlIH0gZnJvbSBcImlyb24tc2Vzc2lvbi9uZXh0XCI7XHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcImlyb24tc2Vzc2lvblwiIHtcclxuICBpbnRlcmZhY2UgSXJvblNlc3Npb25EYXRhIHtcclxuICAgIHVzZXI/OiB7XHJcbiAgICAgIGlkOiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY29va2llT3B0aW9ucyA9IHtcclxuICBjb29raWVOYW1lOiBcImZkYnNzZXNzaW9uXCIsXHJcbiAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkNPT0tJRV9QQVNTV09SRCEsXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2l0aEFwaVNlc3Npb24oZm46IGFueSkge1xyXG4gIHJldHVybiB3aXRoSXJvblNlc3Npb25BcGlSb3V0ZShmbiwgY29va2llT3B0aW9ucyk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIndpdGhJcm9uU2Vzc2lvbkFwaVJvdXRlIiwiY29va2llT3B0aW9ucyIsImNvb2tpZU5hbWUiLCJwYXNzd29yZCIsInByb2Nlc3MiLCJlbnYiLCJDT09LSUVfUEFTU1dPUkQiLCJ3aXRoQXBpU2Vzc2lvbiIsImZuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./libs/server/withSession.ts\n");

/***/ }),

/***/ "(api)/./pages/api/fictions/[id]/fav.ts":
/*!****************************************!*\
  !*** ./pages/api/fictions/[id]/fav.ts ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _libs_server_withHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @libs/server/withHandler */ \"(api)/./libs/server/withHandler.ts\");\n/* harmony import */ var _libs_server_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @libs/server/client */ \"(api)/./libs/server/client.ts\");\n/* harmony import */ var _libs_server_withSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @libs/server/withSession */ \"(api)/./libs/server/withSession.ts\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_server_withSession__WEBPACK_IMPORTED_MODULE_2__]);\n_libs_server_withSession__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nasync function handler(req, res) {\n    let isLiked;\n    const { query: { id  } , session: { user  } ,  } = req;\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.getSession)({\n        req\n    });\n    const alreadyExists = await _libs_server_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fav.findFirst({\n        where: {\n            fictionId: +id.toString(),\n            userId: session?.user?.id\n        }\n    });\n    if (req.method === \"GET\") {\n        if (alreadyExists) isLiked = true;\n        else isLiked = false;\n    } else if (req.method === \"POST\") {\n        if (alreadyExists) {\n            //delete\n            await _libs_server_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fav[\"delete\"]({\n                where: {\n                    id: alreadyExists.id\n                }\n            });\n            isLiked = false;\n        } else {\n            //create\n            await _libs_server_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fav.create({\n                data: {\n                    user: {\n                        connect: {\n                            id: session?.user?.id\n                        }\n                    },\n                    fiction: {\n                        connect: {\n                            id: +id.toString()\n                        }\n                    }\n                }\n            });\n            isLiked = true;\n        }\n    }\n    res.json({\n        isLiked,\n        ok: true\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_server_withSession__WEBPACK_IMPORTED_MODULE_2__.withApiSession)((0,_libs_server_withHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    methods: [\n        \"GET\",\n        \"POST\"\n    ],\n    handler\n})));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmljdGlvbnMvW2lkXS9mYXYudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ3FFO0FBQzVCO0FBQ2lCO0FBQ2I7QUFFN0MsZUFBZUksT0FBTyxDQUNwQkMsR0FBbUIsRUFDbkJDLEdBQWtDLEVBQ2xDO0lBQ0EsSUFBSUMsT0FBTztJQUNYLE1BQU0sRUFDSkMsS0FBSyxFQUFFLEVBQUVDLEVBQUUsR0FBRSxHQUNiQyxPQUFPLEVBQUUsRUFBRUMsSUFBSSxHQUFFLEtBQ2xCLEdBQUdOLEdBQUc7SUFDUCxNQUFNSyxPQUFPLEdBQUcsTUFBTVAsMkRBQVUsQ0FBQztRQUFFRSxHQUFHO0tBQUUsQ0FBQztJQUV6QyxNQUFNTyxhQUFhLEdBQUcsTUFBTVgseUVBQW9CLENBQUM7UUFDL0NjLEtBQUssRUFBRTtZQUNMQyxTQUFTLEVBQUUsQ0FBQ1AsRUFBRSxDQUFFUSxRQUFRLEVBQUU7WUFDMUJDLE1BQU0sRUFBRVIsT0FBTyxFQUFFQyxJQUFJLEVBQUVGLEVBQUU7U0FDMUI7S0FDRixDQUFDO0lBQ0YsSUFBSUosR0FBRyxDQUFDYyxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ3hCLElBQUlQLGFBQWEsRUFBRUwsT0FBTyxHQUFHLElBQUksQ0FBQzthQUM3QkEsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixPQUFPLElBQUlGLEdBQUcsQ0FBQ2MsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUNoQyxJQUFJUCxhQUFhLEVBQUU7WUFDakIsUUFBUTtZQUNSLE1BQU1YLHlFQUFpQixDQUFDO2dCQUN0QmMsS0FBSyxFQUFFO29CQUNMTixFQUFFLEVBQUVHLGFBQWEsQ0FBQ0gsRUFBRTtpQkFDckI7YUFDRixDQUFDLENBQUM7WUFDSEYsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNsQixPQUFPO1lBQ0wsUUFBUTtZQUNSLE1BQU1OLHNFQUFpQixDQUFDO2dCQUN0QnFCLElBQUksRUFBRTtvQkFDSlgsSUFBSSxFQUFFO3dCQUNKWSxPQUFPLEVBQUU7NEJBQ1BkLEVBQUUsRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEVBQUVGLEVBQUU7eUJBQ3RCO3FCQUNGO29CQUNEZSxPQUFPLEVBQUU7d0JBQ1BELE9BQU8sRUFBRTs0QkFDUGQsRUFBRSxFQUFFLENBQUNBLEVBQUUsQ0FBRVEsUUFBUSxFQUFFO3lCQUNwQjtxQkFDRjtpQkFDRjthQUNGLENBQUMsQ0FBQztZQUNIVixPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLENBQUM7SUFDSCxDQUFDO0lBRURELEdBQUcsQ0FBQ21CLElBQUksQ0FBQztRQUFFbEIsT0FBTztRQUFFbUIsRUFBRSxFQUFFLElBQUk7S0FBRSxDQUFDLENBQUM7QUFDbEMsQ0FBQztBQUVELGlFQUFleEIsd0VBQWMsQ0FDM0JGLG9FQUFXLENBQUM7SUFDVjJCLE9BQU8sRUFBRTtRQUFDLEtBQUs7UUFBRSxNQUFNO0tBQUM7SUFDeEJ2QixPQUFPO0NBQ1IsQ0FBQyxDQUNILEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJyb3QtbWFya2V0Ly4vcGFnZXMvYXBpL2ZpY3Rpb25zL1tpZF0vZmF2LnRzPzFkNzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB3aXRoSGFuZGxlciwgeyBSZXNwb25zZVR5cGUgfSBmcm9tIFwiQGxpYnMvc2VydmVyL3dpdGhIYW5kbGVyXCI7XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIkBsaWJzL3NlcnZlci9jbGllbnRcIjtcclxuaW1wb3J0IHsgd2l0aEFwaVNlc3Npb24gfSBmcm9tIFwiQGxpYnMvc2VydmVyL3dpdGhTZXNzaW9uXCI7XHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxyXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8UmVzcG9uc2VUeXBlPlxyXG4pIHtcclxuICBsZXQgaXNMaWtlZDtcclxuICBjb25zdCB7XHJcbiAgICBxdWVyeTogeyBpZCB9LFxyXG4gICAgc2Vzc2lvbjogeyB1c2VyIH0sXHJcbiAgfSA9IHJlcTtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KTtcclxuXHJcbiAgY29uc3QgYWxyZWFkeUV4aXN0cyA9IGF3YWl0IGNsaWVudC5mYXYuZmluZEZpcnN0KHtcclxuICAgIHdoZXJlOiB7XHJcbiAgICAgIGZpY3Rpb25JZDogK2lkIS50b1N0cmluZygpLFxyXG4gICAgICB1c2VySWQ6IHNlc3Npb24/LnVzZXI/LmlkLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xyXG4gICAgaWYgKGFscmVhZHlFeGlzdHMpIGlzTGlrZWQgPSB0cnVlO1xyXG4gICAgZWxzZSBpc0xpa2VkID0gZmFsc2U7XHJcbiAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgaWYgKGFscmVhZHlFeGlzdHMpIHtcclxuICAgICAgLy9kZWxldGVcclxuICAgICAgYXdhaXQgY2xpZW50LmZhdi5kZWxldGUoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICBpZDogYWxyZWFkeUV4aXN0cy5pZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgaXNMaWtlZCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy9jcmVhdGVcclxuICAgICAgYXdhaXQgY2xpZW50LmZhdi5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgY29ubmVjdDoge1xyXG4gICAgICAgICAgICAgIGlkOiBzZXNzaW9uPy51c2VyPy5pZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmaWN0aW9uOiB7XHJcbiAgICAgICAgICAgIGNvbm5lY3Q6IHtcclxuICAgICAgICAgICAgICBpZDogK2lkIS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgaXNMaWtlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXMuanNvbih7IGlzTGlrZWQsIG9rOiB0cnVlIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBpU2Vzc2lvbihcclxuICB3aXRoSGFuZGxlcih7XHJcbiAgICBtZXRob2RzOiBbXCJHRVRcIiwgXCJQT1NUXCJdLFxyXG4gICAgaGFuZGxlcixcclxuICB9KVxyXG4pO1xyXG4iXSwibmFtZXMiOlsid2l0aEhhbmRsZXIiLCJjbGllbnQiLCJ3aXRoQXBpU2Vzc2lvbiIsImdldFNlc3Npb24iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiaXNMaWtlZCIsInF1ZXJ5IiwiaWQiLCJzZXNzaW9uIiwidXNlciIsImFscmVhZHlFeGlzdHMiLCJmYXYiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsImZpY3Rpb25JZCIsInRvU3RyaW5nIiwidXNlcklkIiwibWV0aG9kIiwiZGVsZXRlIiwiY3JlYXRlIiwiZGF0YSIsImNvbm5lY3QiLCJmaWN0aW9uIiwianNvbiIsIm9rIiwibWV0aG9kcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/fictions/[id]/fav.ts\n");

/***/ }),

/***/ "(api)/./node_modules/iron-session/next/dist/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/iron-session/next/dist/index.mjs ***!
  \*******************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withIronSessionApiRoute\": () => (/* binding */ withIronSessionApiRoute),\n/* harmony export */   \"withIronSessionSsr\": () => (/* binding */ withIronSessionSsr)\n/* harmony export */ });\n/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iron-session */ \"iron-session\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session__WEBPACK_IMPORTED_MODULE_0__]);\niron_session__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// next/index.ts\n\n\n// src/getPropertyDescriptorForReqSession.ts\nfunction getPropertyDescriptorForReqSession(session) {\n  return {\n    enumerable: true,\n    get() {\n      return session;\n    },\n    set(value) {\n      const keys = Object.keys(value);\n      const currentKeys = Object.keys(session);\n      currentKeys.forEach((key) => {\n        if (!keys.includes(key)) {\n          delete session[key];\n        }\n      });\n      keys.forEach((key) => {\n        session[key] = value[key];\n      });\n    }\n  };\n}\n\n// next/index.ts\nfunction withIronSessionApiRoute(handler, options) {\n  return async function nextApiHandlerWrappedWithIronSession(req, res) {\n    let sessionOptions;\n    if (options instanceof Function) {\n      sessionOptions = await options(req, res);\n    } else {\n      sessionOptions = options;\n    }\n    const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(req, res, sessionOptions);\n    Object.defineProperty(\n      req,\n      \"session\",\n      getPropertyDescriptorForReqSession(session)\n    );\n    return handler(req, res);\n  };\n}\nfunction withIronSessionSsr(handler, options) {\n  return async function nextGetServerSidePropsHandlerWrappedWithIronSession(context) {\n    let sessionOptions;\n    if (options instanceof Function) {\n      sessionOptions = await options(context.req, context.res);\n    } else {\n      sessionOptions = options;\n    }\n    const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(\n      context.req,\n      context.res,\n      sessionOptions\n    );\n    Object.defineProperty(\n      context.req,\n      \"session\",\n      getPropertyDescriptorForReqSession(session)\n    );\n    return handler(context);\n  };\n}\n\n//# sourceMappingURL=index.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvaXJvbi1zZXNzaW9uL25leHQvZGlzdC9pbmRleC5tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLDBCQUEwQiw0REFBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsMEJBQTBCLDREQUFjO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlFO0FBQ0Ysa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJyb3QtbWFya2V0Ly4vbm9kZV9tb2R1bGVzL2lyb24tc2Vzc2lvbi9uZXh0L2Rpc3QvaW5kZXgubWpzPzdhZmEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbmV4dC9pbmRleC50c1xuaW1wb3J0IHsgZ2V0SXJvblNlc3Npb24gfSBmcm9tIFwiaXJvbi1zZXNzaW9uXCI7XG5cbi8vIHNyYy9nZXRQcm9wZXJ0eURlc2NyaXB0b3JGb3JSZXFTZXNzaW9uLnRzXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eURlc2NyaXB0b3JGb3JSZXFTZXNzaW9uKHNlc3Npb24pIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gICAgc2V0KHZhbHVlKSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICAgICAgY29uc3QgY3VycmVudEtleXMgPSBPYmplY3Qua2V5cyhzZXNzaW9uKTtcbiAgICAgIGN1cnJlbnRLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgIGRlbGV0ZSBzZXNzaW9uW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgc2Vzc2lvbltrZXldID0gdmFsdWVba2V5XTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuLy8gbmV4dC9pbmRleC50c1xuZnVuY3Rpb24gd2l0aElyb25TZXNzaW9uQXBpUm91dGUoaGFuZGxlciwgb3B0aW9ucykge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gbmV4dEFwaUhhbmRsZXJXcmFwcGVkV2l0aElyb25TZXNzaW9uKHJlcSwgcmVzKSB7XG4gICAgbGV0IHNlc3Npb25PcHRpb25zO1xuICAgIGlmIChvcHRpb25zIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHNlc3Npb25PcHRpb25zID0gYXdhaXQgb3B0aW9ucyhyZXEsIHJlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlc3Npb25PcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uKHJlcSwgcmVzLCBzZXNzaW9uT3B0aW9ucyk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgcmVxLFxuICAgICAgXCJzZXNzaW9uXCIsXG4gICAgICBnZXRQcm9wZXJ0eURlc2NyaXB0b3JGb3JSZXFTZXNzaW9uKHNlc3Npb24pXG4gICAgKTtcbiAgICByZXR1cm4gaGFuZGxlcihyZXEsIHJlcyk7XG4gIH07XG59XG5mdW5jdGlvbiB3aXRoSXJvblNlc3Npb25Tc3IoaGFuZGxlciwgb3B0aW9ucykge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gbmV4dEdldFNlcnZlclNpZGVQcm9wc0hhbmRsZXJXcmFwcGVkV2l0aElyb25TZXNzaW9uKGNvbnRleHQpIHtcbiAgICBsZXQgc2Vzc2lvbk9wdGlvbnM7XG4gICAgaWYgKG9wdGlvbnMgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgc2Vzc2lvbk9wdGlvbnMgPSBhd2FpdCBvcHRpb25zKGNvbnRleHQucmVxLCBjb250ZXh0LnJlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlc3Npb25PcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uKFxuICAgICAgY29udGV4dC5yZXEsXG4gICAgICBjb250ZXh0LnJlcyxcbiAgICAgIHNlc3Npb25PcHRpb25zXG4gICAgKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICBjb250ZXh0LnJlcSxcbiAgICAgIFwic2Vzc2lvblwiLFxuICAgICAgZ2V0UHJvcGVydHlEZXNjcmlwdG9yRm9yUmVxU2Vzc2lvbihzZXNzaW9uKVxuICAgICk7XG4gICAgcmV0dXJuIGhhbmRsZXIoY29udGV4dCk7XG4gIH07XG59XG5leHBvcnQge1xuICB3aXRoSXJvblNlc3Npb25BcGlSb3V0ZSxcbiAgd2l0aElyb25TZXNzaW9uU3NyXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/iron-session/next/dist/index.mjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/fictions/[id]/fav.ts"));
module.exports = __webpack_exports__;

})();