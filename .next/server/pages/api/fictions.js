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
exports.id = "pages/api/fictions";
exports.ids = ["pages/api/fictions"];
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = global.client || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.client = client;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL3NlcnZlci9jbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBTTdDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQU0sSUFBSSxHQUFHLENBQUNELHdEQUFZO0FBRWhELEVBQUUsRUFSRixJQVEwQyxFQUFFRSxNQUFNLENBQUNELE1BQU0sR0FBR0EsTUFBTTtBQUVsRSxpRUFBZSxHQUFHLENBQUNELHdEQUFZLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcnJvdC1tYXJrZXQvLi9saWJzL3NlcnZlci9jbGllbnQudHM/MmIxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICB2YXIgY2xpZW50OiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmNvbnN0IGNsaWVudCA9IGdsb2JhbC5jbGllbnQgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIGdsb2JhbC5jbGllbnQgPSBjbGllbnQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgUHJpc21hQ2xpZW50KCk7XHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJjbGllbnQiLCJnbG9iYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./libs/server/client.ts\n");

/***/ }),

/***/ "./libs/server/withHandler.ts":
/*!************************************!*\
  !*** ./libs/server/withHandler.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ withHandler)\n/* harmony export */ });\nfunction withHandler({ methods , isPrivate =true , handler  }) {\n    return async function(req, res) {\n        if (req.method && !methods.includes(req.method)) {\n            return res.status(405).end();\n        }\n        if (isPrivate && !req.session.user) {\n            return res.status(401).json({\n                ok: false,\n                error: \"Plase Log in\"\n            });\n        }\n        try {\n            await handler(req, res);\n        } catch (error) {\n            console.log(error);\n            return res.status(500).json({\n                error\n            });\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL3NlcnZlci93aXRoSGFuZGxlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBZWUsUUFBUSxDQUFDQSxXQUFXLENBQUMsQ0FBQyxDQUNuQ0MsT0FBTyxHQUNQQyxTQUFTLEVBQUcsSUFBSSxHQUNoQkMsT0FBTyxFQUNHLENBQUMsRUFBRSxDQUFDO0lBQ2QsTUFBTSxnQkFDSkMsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ04sQ0FBQztRQUNmLEVBQUUsRUFBRUQsR0FBRyxDQUFDRSxNQUFNLEtBQUtMLE9BQU8sQ0FBQ00sUUFBUSxDQUFDSCxHQUFHLENBQUNFLE1BQU0sR0FBVSxDQUFDO1lBQ3ZELE1BQU0sQ0FBQ0QsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxFQUFFQyxHQUFHO1FBQzVCLENBQUM7UUFDRCxFQUFFLEVBQUVQLFNBQVMsS0FBS0UsR0FBRyxDQUFDTSxPQUFPLENBQUNDLElBQUksRUFBRSxDQUFDO1lBQ25DLE1BQU0sQ0FBQ04sR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxFQUFFSSxJQUFJLENBQUMsQ0FBQztnQkFBQ0MsRUFBRSxFQUFFLEtBQUs7Z0JBQUVDLEtBQUssRUFBRSxDQUFjO1lBQUMsQ0FBQztRQUNsRSxDQUFDO1FBQ0QsR0FBRyxDQUFDLENBQUM7WUFDSCxLQUFLLENBQUNYLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHO1FBQ3hCLENBQUMsQ0FBQyxLQUFLLEVBQUVTLEtBQUssRUFBRSxDQUFDO1lBQ2ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLO1lBQ2pCLE1BQU0sQ0FBQ1QsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxFQUFFSSxJQUFJLENBQUMsQ0FBQztnQkFBQ0UsS0FBSztZQUFDLENBQUM7UUFDdkMsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fycm90LW1hcmtldC8uL2xpYnMvc2VydmVyL3dpdGhIYW5kbGVyLnRzPzhlZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlVHlwZSB7XHJcbiAgb2s6IGJvb2xlYW47XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG50eXBlIG1ldGhvZCA9IFwiR0VUXCIgfCBcIlBPU1RcIiB8IFwiREVMRVRFXCI7XHJcblxyXG5pbnRlcmZhY2UgQ29uZmlnVHlwZSB7XHJcbiAgbWV0aG9kczogbWV0aG9kW107XHJcbiAgaGFuZGxlcjogKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB2b2lkO1xyXG4gIGlzUHJpdmF0ZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhIYW5kbGVyKHtcclxuICBtZXRob2RzLFxyXG4gIGlzUHJpdmF0ZSA9IHRydWUsXHJcbiAgaGFuZGxlcixcclxufTogQ29uZmlnVHlwZSkge1xyXG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAoXHJcbiAgICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gICAgcmVzOiBOZXh0QXBpUmVzcG9uc2VcclxuICApOiBQcm9taXNlPGFueT4ge1xyXG4gICAgaWYgKHJlcS5tZXRob2QgJiYgIW1ldGhvZHMuaW5jbHVkZXMocmVxLm1ldGhvZCBhcyBhbnkpKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNQcml2YXRlICYmICFyZXEuc2Vzc2lvbi51c2VyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IG9rOiBmYWxzZSwgZXJyb3I6IFwiUGxhc2UgTG9nIGluXCIgfSk7XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBoYW5kbGVyKHJlcSwgcmVzKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3IgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsid2l0aEhhbmRsZXIiLCJtZXRob2RzIiwiaXNQcml2YXRlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImluY2x1ZGVzIiwic3RhdHVzIiwiZW5kIiwic2Vzc2lvbiIsInVzZXIiLCJqc29uIiwib2siLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./libs/server/withHandler.ts\n");

/***/ }),

/***/ "./libs/server/withSession.ts":
/*!************************************!*\
  !*** ./libs/server/withSession.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withApiSession\": () => (/* binding */ withApiSession)\n/* harmony export */ });\n/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iron-session/next */ \"./node_modules/iron-session/next/dist/index.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_0__]);\niron_session_next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\nconst cookieOptions = {\n    cookieName: \"fdbssession\",\n    password: process.env.COOKIE_PASSWORD\n};\nfunction withApiSession(fn) {\n    return (0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__.withIronSessionApiRoute)(fn, cookieOptions);\n}\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL3NlcnZlci93aXRoU2Vzc2lvbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyRDtBQVUzRCxLQUFLLENBQUNDLGFBQWEsR0FBRyxDQUFDO0lBQ3JCQyxVQUFVLEVBQUUsQ0FBYTtJQUN6QkMsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZUFBZTtBQUN2QyxDQUFDO0FBRU0sU0FBU0MsY0FBYyxDQUFDQyxFQUFPLEVBQUUsQ0FBQztJQUN2QyxNQUFNLENBQUNSLDBFQUF1QixDQUFDUSxFQUFFLEVBQUVQLGFBQWE7QUFDbEQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcnJvdC1tYXJrZXQvLi9saWJzL3NlcnZlci93aXRoU2Vzc2lvbi50cz9hZTdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhJcm9uU2Vzc2lvbkFwaVJvdXRlIH0gZnJvbSBcImlyb24tc2Vzc2lvbi9uZXh0XCI7XHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcImlyb24tc2Vzc2lvblwiIHtcclxuICBpbnRlcmZhY2UgSXJvblNlc3Npb25EYXRhIHtcclxuICAgIHVzZXI/OiB7XHJcbiAgICAgIGlkOiBudW1iZXI7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY29va2llT3B0aW9ucyA9IHtcclxuICBjb29raWVOYW1lOiBcImZkYnNzZXNzaW9uXCIsXHJcbiAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkNPT0tJRV9QQVNTV09SRCEsXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2l0aEFwaVNlc3Npb24oZm46IGFueSkge1xyXG4gIHJldHVybiB3aXRoSXJvblNlc3Npb25BcGlSb3V0ZShmbiwgY29va2llT3B0aW9ucyk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIndpdGhJcm9uU2Vzc2lvbkFwaVJvdXRlIiwiY29va2llT3B0aW9ucyIsImNvb2tpZU5hbWUiLCJwYXNzd29yZCIsInByb2Nlc3MiLCJlbnYiLCJDT09LSUVfUEFTU1dPUkQiLCJ3aXRoQXBpU2Vzc2lvbiIsImZuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./libs/server/withSession.ts\n");

/***/ }),

/***/ "./pages/api/fictions/index.ts":
/*!*************************************!*\
  !*** ./pages/api/fictions/index.ts ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _libs_server_withHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @libs/server/withHandler */ \"./libs/server/withHandler.ts\");\n/* harmony import */ var _libs_server_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @libs/server/client */ \"./libs/server/client.ts\");\n/* harmony import */ var _libs_server_withSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @libs/server/withSession */ \"./libs/server/withSession.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_server_withSession__WEBPACK_IMPORTED_MODULE_2__]);\n_libs_server_withSession__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        const fictions = await _libs_server_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fiction.findMany({});\n        res.json({\n            ok: true,\n            fictions\n        });\n    }\n    if (req.method === \"POST\") {\n        const { body: { title , author , nationality , genre , date , status: [originality, writing, character, verisimilitude, synopsisComposition, value, ] , synopsis , characters , tags , original , platforms ,  } , session: { user  } ,  } = req;\n        tags.filter(function(item) {\n            return item !== null && item !== undefined && item !== \"\";\n        });\n        const keywordMany = tags.map((item)=>({\n                keyword: {\n                    create: {\n                        name: item\n                    }\n                }\n            })\n        );\n        const fiction = await _libs_server_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fiction.create({\n            data: {\n                title,\n                author,\n                nationality,\n                genre,\n                startDate: new Date(date[0]),\n                endDate: new Date(date[1]),\n                original,\n                platforms: platforms[0],\n                image: \"\",\n                synopsis,\n                characters,\n                categories: {\n                    create: {\n                        category: {\n                            create: {\n                                name: genre\n                            }\n                        }\n                    }\n                },\n                keywords: {\n                    create: [\n                        ...keywordMany\n                    ]\n                },\n                fictionStat: {\n                    create: {\n                        originality: +originality,\n                        writing: +writing,\n                        character: +character,\n                        verisimilitude: +verisimilitude,\n                        synopsisComposition: +synopsisComposition,\n                        value: +value\n                    }\n                },\n                user: {\n                    connect: {\n                        id: user?.id\n                    }\n                }\n            }\n        });\n        console.log(fiction);\n        console.log(tags);\n        res.json({\n            ok: true,\n            fiction\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_server_withSession__WEBPACK_IMPORTED_MODULE_2__.withApiSession)((0,_libs_server_withHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    methods: [\n        \"GET\",\n        \"POST\"\n    ],\n    handler\n})));\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksRUFBRSxDQUFDO29CQUNMa0IsT0FBTyxFQUFFLENBQUM7d0JBQ1JDLEVBQUUsRUFBRW5CLElBQUksRUFBRW1CLEVBQUU7b0JBQ2QsQ0FBQztnQkFDSCxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7UUFDREMsT0FBTyxDQUFDQyxHQUFHLENBQUM1QyxPQUFPO1FBQ25CMkMsT0FBTyxDQUFDQyxHQUFHLENBQUN6QixJQUFJO1FBQ2hCdEIsR0FBRyxDQUFDSyxJQUFJLENBQUMsQ0FBQztZQUFDQyxFQUFFLEVBQUUsSUFBSTtZQUFFSCxPQUFPO1FBQUMsQ0FBQztJQUNoQyxDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlTix3RUFBYyxDQUMzQkYsb0VBQVcsQ0FBQyxDQUFDO0lBQ1hxRCxPQUFPLEVBQUUsQ0FBQztRQUFBLENBQUs7UUFBRSxDQUFNO0lBQUEsQ0FBQztJQUN4QmxELE9BQU87QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fycm90LW1hcmtldC8uL3BhZ2VzL2FwaS9maWN0aW9ucy9pbmRleC50cz81NTQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgd2l0aEhhbmRsZXIsIHsgUmVzcG9uc2VUeXBlIH0gZnJvbSBcIkBsaWJzL3NlcnZlci93aXRoSGFuZGxlclwiO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gXCJAbGlicy9zZXJ2ZXIvY2xpZW50XCI7XHJcbmltcG9ydCB7IHdpdGhBcGlTZXNzaW9uIH0gZnJvbSBcIkBsaWJzL3NlcnZlci93aXRoU2Vzc2lvblwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFJlc3BvbnNlVHlwZT5cclxuKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcclxuICAgIGNvbnN0IGZpY3Rpb25zID0gYXdhaXQgY2xpZW50LmZpY3Rpb24uZmluZE1hbnkoe30pO1xyXG4gICAgcmVzLmpzb24oe1xyXG4gICAgICBvazogdHJ1ZSxcclxuICAgICAgZmljdGlvbnMsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBhdXRob3IsXHJcbiAgICAgICAgbmF0aW9uYWxpdHksXHJcbiAgICAgICAgZ2VucmUsXHJcbiAgICAgICAgZGF0ZSxcclxuICAgICAgICBzdGF0dXM6IFtcclxuICAgICAgICAgIG9yaWdpbmFsaXR5LFxyXG4gICAgICAgICAgd3JpdGluZyxcclxuICAgICAgICAgIGNoYXJhY3RlcixcclxuICAgICAgICAgIHZlcmlzaW1pbGl0dWRlLFxyXG4gICAgICAgICAgc3lub3BzaXNDb21wb3NpdGlvbixcclxuICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3lub3BzaXMsXHJcbiAgICAgICAgY2hhcmFjdGVycyxcclxuICAgICAgICB0YWdzLFxyXG4gICAgICAgIG9yaWdpbmFsLFxyXG4gICAgICAgIHBsYXRmb3JtcyxcclxuICAgICAgfSxcclxuICAgICAgc2Vzc2lvbjogeyB1c2VyIH0sXHJcbiAgICB9ID0gcmVxO1xyXG5cclxuICAgIHRhZ3MuZmlsdGVyKGZ1bmN0aW9uIChpdGVtOiBhbnkpIHtcclxuICAgICAgcmV0dXJuIGl0ZW0gIT09IG51bGwgJiYgaXRlbSAhPT0gdW5kZWZpbmVkICYmIGl0ZW0gIT09IFwiXCI7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGtleXdvcmRNYW55ID0gdGFncy5tYXAoKGl0ZW06IHN0cmluZykgPT4gKHtcclxuICAgICAga2V5d29yZDoge1xyXG4gICAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgICAgbmFtZTogaXRlbSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSkpO1xyXG5cclxuICAgIGNvbnN0IGZpY3Rpb24gPSBhd2FpdCBjbGllbnQuZmljdGlvbi5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgYXV0aG9yLFxyXG4gICAgICAgIG5hdGlvbmFsaXR5LFxyXG4gICAgICAgIGdlbnJlLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoZGF0ZVswXSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoZGF0ZVsxXSksXHJcbiAgICAgICAgb3JpZ2luYWwsXHJcbiAgICAgICAgcGxhdGZvcm1zOiBwbGF0Zm9ybXNbMF0sXHJcbiAgICAgICAgaW1hZ2U6IFwiXCIsXHJcbiAgICAgICAgc3lub3BzaXMsXHJcbiAgICAgICAgY2hhcmFjdGVycyxcclxuICAgICAgICBjYXRlZ29yaWVzOiB7XHJcbiAgICAgICAgICBjcmVhdGU6IHsgY2F0ZWdvcnk6IHsgY3JlYXRlOiB7IG5hbWU6IGdlbnJlIH0gfSB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAga2V5d29yZHM6IHtcclxuICAgICAgICAgIGNyZWF0ZTogWy4uLmtleXdvcmRNYW55XSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpY3Rpb25TdGF0OiB7XHJcbiAgICAgICAgICBjcmVhdGU6IHtcclxuICAgICAgICAgICAgb3JpZ2luYWxpdHk6ICtvcmlnaW5hbGl0eSxcclxuICAgICAgICAgICAgd3JpdGluZzogK3dyaXRpbmcsXHJcbiAgICAgICAgICAgIGNoYXJhY3RlcjogK2NoYXJhY3RlcixcclxuICAgICAgICAgICAgdmVyaXNpbWlsaXR1ZGU6ICt2ZXJpc2ltaWxpdHVkZSxcclxuICAgICAgICAgICAgc3lub3BzaXNDb21wb3NpdGlvbjogK3N5bm9wc2lzQ29tcG9zaXRpb24sXHJcbiAgICAgICAgICAgIHZhbHVlOiArdmFsdWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgY29ubmVjdDoge1xyXG4gICAgICAgICAgICBpZDogdXNlcj8uaWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKGZpY3Rpb24pO1xyXG4gICAgY29uc29sZS5sb2codGFncyk7XHJcbiAgICByZXMuanNvbih7IG9rOiB0cnVlLCBmaWN0aW9uIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwaVNlc3Npb24oXHJcbiAgd2l0aEhhbmRsZXIoe1xyXG4gICAgbWV0aG9kczogW1wiR0VUXCIsIFwiUE9TVFwiXSxcclxuICAgIGhhbmRsZXIsXHJcbiAgfSlcclxuKTtcclxuIl0sIm5hbWVzIjpbIndpdGhIYW5kbGVyIiwiY2xpZW50Iiwid2l0aEFwaVNlc3Npb24iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZmljdGlvbnMiLCJmaWN0aW9uIiwiZmluZE1hbnkiLCJqc29uIiwib2siLCJib2R5IiwidGl0bGUiLCJhdXRob3IiLCJuYXRpb25hbGl0eSIsImdlbnJlIiwiZGF0ZSIsInN0YXR1cyIsIm9yaWdpbmFsaXR5Iiwid3JpdGluZyIsImNoYXJhY3RlciIsInZlcmlzaW1pbGl0dWRlIiwic3lub3BzaXNDb21wb3NpdGlvbiIsInZhbHVlIiwic3lub3BzaXMiLCJjaGFyYWN0ZXJzIiwidGFncyIsIm9yaWdpbmFsIiwicGxhdGZvcm1zIiwic2Vzc2lvbiIsInVzZXIiLCJmaWx0ZXIiLCJpdGVtIiwidW5kZWZpbmVkIiwia2V5d29yZE1hbnkiLCJtYXAiLCJrZXl3b3JkIiwiY3JlYXRlIiwibmFtZSIsImRhdGEiLCJzdGFydERhdGUiLCJEYXRlIiwiZW5kRGF0ZSIsImltYWdlIiwiY2F0ZWdvcmllcyIsImNhdGVnb3J5Iiwia2V5d29yZHMiLCJmaWN0aW9uU3RhdCIsImNvbm5lY3QiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2RzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/fictions/index.ts\n");

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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/fictions/index.ts"));
module.exports = __webpack_exports__;

})();