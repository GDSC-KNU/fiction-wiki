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
exports.id = "pages/api/fictions/[id]";
exports.ids = ["pages/api/fictions/[id]"];
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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withApiSession\": () => (/* binding */ withApiSession)\n/* harmony export */ });\n/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iron-session/next */ \"(api)/./node_modules/iron-session/next/dist/index.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_0__]);\niron_session_next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst cookieOptions = {\n    cookieName: \"fdbssession\",\n    password: process.env.COOKIE_PASSWORD\n};\nfunction withApiSession(fn) {\n    return (0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__.withIronSessionApiRoute)(fn, cookieOptions);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL3NlcnZlci93aXRoU2Vzc2lvbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0RDtBQVU1RCxNQUFNQyxhQUFhLEdBQUc7SUFDcEJDLFVBQVUsRUFBRSxhQUFhO0lBQ3pCQyxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxlQUFlO0NBQ3RDO0FBRU0sU0FBU0MsY0FBYyxDQUFDQyxFQUFPLEVBQUU7SUFDdEMsT0FBT1IsMEVBQXVCLENBQUNRLEVBQUUsRUFBRVAsYUFBYSxDQUFDLENBQUM7Q0FDbkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJyb3QtbWFya2V0Ly4vbGlicy9zZXJ2ZXIvd2l0aFNlc3Npb24udHM/YWU3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoSXJvblNlc3Npb25BcGlSb3V0ZSB9IGZyb20gXCJpcm9uLXNlc3Npb24vbmV4dFwiO1xyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCJpcm9uLXNlc3Npb25cIiB7XHJcbiAgaW50ZXJmYWNlIElyb25TZXNzaW9uRGF0YSB7XHJcbiAgICB1c2VyPzoge1xyXG4gICAgICBpZDogbnVtYmVyO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGNvb2tpZU9wdGlvbnMgPSB7XHJcbiAgY29va2llTmFtZTogXCJmZGJzc2Vzc2lvblwiLFxyXG4gIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5DT09LSUVfUEFTU1dPUkQhLFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhBcGlTZXNzaW9uKGZuOiBhbnkpIHtcclxuICByZXR1cm4gd2l0aElyb25TZXNzaW9uQXBpUm91dGUoZm4sIGNvb2tpZU9wdGlvbnMpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ3aXRoSXJvblNlc3Npb25BcGlSb3V0ZSIsImNvb2tpZU9wdGlvbnMiLCJjb29raWVOYW1lIiwicGFzc3dvcmQiLCJwcm9jZXNzIiwiZW52IiwiQ09PS0lFX1BBU1NXT1JEIiwid2l0aEFwaVNlc3Npb24iLCJmbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./libs/server/withSession.ts\n");

/***/ }),

/***/ "(api)/./pages/api/fictions/[id]/index.ts":
/*!******************************************!*\
  !*** ./pages/api/fictions/[id]/index.ts ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _libs_server_withHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @libs/server/withHandler */ \"(api)/./libs/server/withHandler.ts\");\n/* harmony import */ var _libs_server_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @libs/server/client */ \"(api)/./libs/server/client.ts\");\n/* harmony import */ var _libs_server_withSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @libs/server/withSession */ \"(api)/./libs/server/withSession.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_server_withSession__WEBPACK_IMPORTED_MODULE_2__]);\n_libs_server_withSession__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nasync function handler(req, res) {\n    const { query: { id  } , session: { user  } ,  } = req;\n    const fiction = await _libs_server_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fiction.findUnique({\n        where: {\n            id: +id.toString()\n        },\n        include: {\n            fictionStat: true,\n            userFictionStat: {\n                include: {\n                    _count: {\n                        select: {\n                            users: true\n                        }\n                    }\n                }\n            },\n            keywords: {\n                include: {\n                    keyword: {\n                        select: {\n                            name: true,\n                            isOfHeroine: true,\n                            isOfMC: true\n                        }\n                    }\n                }\n            }\n        }\n    });\n    const arr = [];\n    fiction?.keywords.map((item)=>arr.push(item.keyword.name)\n    );\n    const keywordSame = arr.map((word)=>({\n            keywords: {\n                some: {\n                    keyword: {\n                        name: {\n                            equals: word\n                        }\n                    }\n                }\n            }\n        })\n    );\n    const arr2 = [];\n    const similarFictions = await _libs_server_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fiction.findMany({\n        where: {\n            OR: keywordSame,\n            AND: {\n                id: {\n                    not: fiction?.id\n                }\n            }\n        }\n    });\n    similarFictions.map((item)=>arr2.push([\n            item.id,\n            item.title\n        ])\n    );\n    //   console.log(arr2);\n    // console.log(similarFictions);\n    const isLiked = Boolean(await _libs_server_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fav.findFirst({\n        where: {\n            fictionId: fiction?.id,\n            userId: user?.id\n        },\n        select: {\n            id: true\n        }\n    }));\n    const ration = await _libs_server_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userFictionStat.findFirst({\n        where: {\n            fictionId: fiction?.id\n        },\n        select: {\n            originality: true,\n            writing: true,\n            character: true,\n            verisimilitude: true,\n            synopsisComposition: true,\n            value: true\n        }\n    });\n    const userRation = await _libs_server_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userRationOnFiction.findFirst({\n        where: {\n            userId: user?.id\n        }\n    });\n    res.json({\n        ok: true,\n        fiction,\n        isLiked,\n        ration,\n        userRation,\n        similarFictions\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_server_withSession__WEBPACK_IMPORTED_MODULE_2__.withApiSession)((0,_libs_server_withHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    methods: [\n        \"GET\"\n    ],\n    handler\n})));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmljdGlvbnMvW2lkXS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRXFFO0FBQzVCO0FBQ2lCO0FBRTFELGVBQWVHLE9BQU8sQ0FDcEJDLEdBQW1CLEVBQ25CQyxHQUFrQyxFQUNsQztJQUNBLE1BQU0sRUFDSkMsS0FBSyxFQUFFLEVBQUVDLEVBQUUsR0FBRSxHQUNiQyxPQUFPLEVBQUUsRUFBRUMsSUFBSSxHQUFFLEtBQ2xCLEdBQUdMLEdBQUc7SUFDUCxNQUFNTSxPQUFPLEdBQUcsTUFBTVQsOEVBQXlCLENBQUM7UUFDOUNXLEtBQUssRUFBRTtZQUNMTCxFQUFFLEVBQUUsQ0FBQ0EsRUFBRSxDQUFDTSxRQUFRLEVBQUU7U0FDbkI7UUFDREMsT0FBTyxFQUFFO1lBQ1BDLFdBQVcsRUFBRSxJQUFJO1lBQ2pCQyxlQUFlLEVBQUU7Z0JBQ2ZGLE9BQU8sRUFBRTtvQkFDUEcsTUFBTSxFQUFFO3dCQUNOQyxNQUFNLEVBQUU7NEJBQ05DLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO2lCQUNGO2FBQ0Y7WUFDREMsUUFBUSxFQUFFO2dCQUNSTixPQUFPLEVBQUU7b0JBQ1BPLE9BQU8sRUFBRTt3QkFDUEgsTUFBTSxFQUFFOzRCQUNOSSxJQUFJLEVBQUUsSUFBSTs0QkFDVkMsV0FBVyxFQUFFLElBQUk7NEJBQ2pCQyxNQUFNLEVBQUUsSUFBSTt5QkFDYjtxQkFDRjtpQkFDRjthQUNGO1NBQ0Y7S0FDRixDQUFDO0lBRUYsTUFBTUMsR0FBRyxHQUFVLEVBQUU7SUFDckJmLE9BQU8sRUFBRVUsUUFBUSxDQUFDTSxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxHQUFLRixHQUFHLENBQUNHLElBQUksQ0FBQ0QsSUFBSSxDQUFDTixPQUFPLENBQUNDLElBQUksQ0FBQztJQUFBLENBQUMsQ0FBQztJQUM3RCxNQUFNTyxXQUFXLEdBQUdKLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDLENBQUNJLElBQUksR0FBSyxDQUFDO1lBQ3JDVixRQUFRLEVBQUU7Z0JBQ1JXLElBQUksRUFBRTtvQkFDSlYsT0FBTyxFQUFFO3dCQUNQQyxJQUFJLEVBQUU7NEJBQ0pVLE1BQU0sRUFBRUYsSUFBSTt5QkFDYjtxQkFDRjtpQkFDRjthQUNGO1NBQ0YsQ0FBQztJQUFBLENBQUM7SUFFSCxNQUFNRyxJQUFJLEdBQVUsRUFBRTtJQUN0QixNQUFNQyxlQUFlLEdBQUcsTUFBTWpDLDRFQUF1QixDQUFDO1FBQ3BEVyxLQUFLLEVBQUU7WUFDTHdCLEVBQUUsRUFBRVAsV0FBVztZQUNmUSxHQUFHLEVBQUU7Z0JBQ0g5QixFQUFFLEVBQUU7b0JBQ0YrQixHQUFHLEVBQUU1QixPQUFPLEVBQUVILEVBQUU7aUJBQ2pCO2FBQ0Y7U0FDRjtLQUNGLENBQUM7SUFFRjJCLGVBQWUsQ0FBQ1IsR0FBRyxDQUFDLENBQUNDLElBQUksR0FBS00sSUFBSSxDQUFDTCxJQUFJLENBQUM7WUFBQ0QsSUFBSSxDQUFDcEIsRUFBRTtZQUFFb0IsSUFBSSxDQUFDWSxLQUFLO1NBQUMsQ0FBQztJQUFBLENBQUMsQ0FBQztJQUNoRSx1QkFBdUI7SUFFdkIsZ0NBQWdDO0lBQ2hDLE1BQU1DLE9BQU8sR0FBR0MsT0FBTyxDQUNyQixNQUFNeEMseUVBQW9CLENBQUM7UUFDekJXLEtBQUssRUFBRTtZQUNMZ0MsU0FBUyxFQUFFbEMsT0FBTyxFQUFFSCxFQUFFO1lBQ3RCc0MsTUFBTSxFQUFFcEMsSUFBSSxFQUFFRixFQUFFO1NBQ2pCO1FBQ0RXLE1BQU0sRUFBRTtZQUNOWCxFQUFFLEVBQUUsSUFBSTtTQUNUO0tBQ0YsQ0FBQyxDQUNIO0lBRUQsTUFBTXVDLE1BQU0sR0FBRyxNQUFNN0MscUZBQWdDLENBQUM7UUFDcERXLEtBQUssRUFBRTtZQUNMZ0MsU0FBUyxFQUFFbEMsT0FBTyxFQUFFSCxFQUFFO1NBQ3ZCO1FBQ0RXLE1BQU0sRUFBRTtZQUNONkIsV0FBVyxFQUFFLElBQUk7WUFDakJDLE9BQU8sRUFBRSxJQUFJO1lBQ2JDLFNBQVMsRUFBRSxJQUFJO1lBQ2ZDLGNBQWMsRUFBRSxJQUFJO1lBQ3BCQyxtQkFBbUIsRUFBRSxJQUFJO1lBQ3pCQyxLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0YsQ0FBQztJQUVGLE1BQU1DLFVBQVUsR0FBRyxNQUFNcEQseUZBQW9DLENBQUM7UUFDNURXLEtBQUssRUFBRTtZQUNMaUMsTUFBTSxFQUFFcEMsSUFBSSxFQUFFRixFQUFFO1NBQ2pCO0tBQ0YsQ0FBQztJQUVGRixHQUFHLENBQUNrRCxJQUFJLENBQUM7UUFBRUMsRUFBRSxFQUFFLElBQUk7UUFBRTlDLE9BQU87UUFBRThCLE9BQU87UUFBRU0sTUFBTTtRQUFFTyxVQUFVO1FBQUVuQixlQUFlO0tBQUUsQ0FBQyxDQUFDO0NBQy9FO0FBRUQsaUVBQWVoQyx3RUFBYyxDQUMzQkYsb0VBQVcsQ0FBQztJQUNWeUQsT0FBTyxFQUFFO1FBQUMsS0FBSztLQUFDO0lBQ2hCdEQsT0FBTztDQUNSLENBQUMsQ0FDSCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fycm90LW1hcmtldC8uL3BhZ2VzL2FwaS9maWN0aW9ucy9baWRdL2luZGV4LnRzPzFkNGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmljdGlvbiB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHdpdGhIYW5kbGVyLCB7IFJlc3BvbnNlVHlwZSB9IGZyb20gXCJAbGlicy9zZXJ2ZXIvd2l0aEhhbmRsZXJcIjtcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwiQGxpYnMvc2VydmVyL2NsaWVudFwiO1xyXG5pbXBvcnQgeyB3aXRoQXBpU2Vzc2lvbiB9IGZyb20gXCJAbGlicy9zZXJ2ZXIvd2l0aFNlc3Npb25cIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZTxSZXNwb25zZVR5cGU+XHJcbikge1xyXG4gIGNvbnN0IHtcclxuICAgIHF1ZXJ5OiB7IGlkIH0sXHJcbiAgICBzZXNzaW9uOiB7IHVzZXIgfSxcclxuICB9ID0gcmVxO1xyXG4gIGNvbnN0IGZpY3Rpb24gPSBhd2FpdCBjbGllbnQuZmljdGlvbi5maW5kVW5pcXVlKHtcclxuICAgIHdoZXJlOiB7XHJcbiAgICAgIGlkOiAraWQudG9TdHJpbmcoKSxcclxuICAgIH0sXHJcbiAgICBpbmNsdWRlOiB7XHJcbiAgICAgIGZpY3Rpb25TdGF0OiB0cnVlLFxyXG4gICAgICB1c2VyRmljdGlvblN0YXQ6IHtcclxuICAgICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgICBfY291bnQ6IHtcclxuICAgICAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICAgICAgdXNlcnM6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGtleXdvcmRzOiB7XHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAga2V5d29yZDoge1xyXG4gICAgICAgICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgICAgICBuYW1lOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzT2ZIZXJvaW5lOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzT2ZNQzogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGFycjogYW55W10gPSBbXTtcclxuICBmaWN0aW9uPy5rZXl3b3Jkcy5tYXAoKGl0ZW0pID0+IGFyci5wdXNoKGl0ZW0ua2V5d29yZC5uYW1lKSk7XHJcbiAgY29uc3Qga2V5d29yZFNhbWUgPSBhcnIubWFwKCh3b3JkKSA9PiAoe1xyXG4gICAga2V5d29yZHM6IHtcclxuICAgICAgc29tZToge1xyXG4gICAgICAgIGtleXdvcmQ6IHtcclxuICAgICAgICAgIG5hbWU6IHtcclxuICAgICAgICAgICAgZXF1YWxzOiB3b3JkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIGNvbnN0IGFycjI6IGFueVtdID0gW107XHJcbiAgY29uc3Qgc2ltaWxhckZpY3Rpb25zID0gYXdhaXQgY2xpZW50LmZpY3Rpb24uZmluZE1hbnkoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgT1I6IGtleXdvcmRTYW1lLFxyXG4gICAgICBBTkQ6IHtcclxuICAgICAgICBpZDoge1xyXG4gICAgICAgICAgbm90OiBmaWN0aW9uPy5pZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgc2ltaWxhckZpY3Rpb25zLm1hcCgoaXRlbSkgPT4gYXJyMi5wdXNoKFtpdGVtLmlkLCBpdGVtLnRpdGxlXSkpO1xyXG4gIC8vICAgY29uc29sZS5sb2coYXJyMik7XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKHNpbWlsYXJGaWN0aW9ucyk7XHJcbiAgY29uc3QgaXNMaWtlZCA9IEJvb2xlYW4oXHJcbiAgICBhd2FpdCBjbGllbnQuZmF2LmZpbmRGaXJzdCh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgZmljdGlvbklkOiBmaWN0aW9uPy5pZCxcclxuICAgICAgICB1c2VySWQ6IHVzZXI/LmlkLFxyXG4gICAgICB9LFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBpZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgcmF0aW9uID0gYXdhaXQgY2xpZW50LnVzZXJGaWN0aW9uU3RhdC5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgZmljdGlvbklkOiBmaWN0aW9uPy5pZCxcclxuICAgIH0sXHJcbiAgICBzZWxlY3Q6IHtcclxuICAgICAgb3JpZ2luYWxpdHk6IHRydWUsXHJcbiAgICAgIHdyaXRpbmc6IHRydWUsXHJcbiAgICAgIGNoYXJhY3RlcjogdHJ1ZSxcclxuICAgICAgdmVyaXNpbWlsaXR1ZGU6IHRydWUsXHJcbiAgICAgIHN5bm9wc2lzQ29tcG9zaXRpb246IHRydWUsXHJcbiAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdXNlclJhdGlvbiA9IGF3YWl0IGNsaWVudC51c2VyUmF0aW9uT25GaWN0aW9uLmZpbmRGaXJzdCh7XHJcbiAgICB3aGVyZToge1xyXG4gICAgICB1c2VySWQ6IHVzZXI/LmlkLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgcmVzLmpzb24oeyBvazogdHJ1ZSwgZmljdGlvbiwgaXNMaWtlZCwgcmF0aW9uLCB1c2VyUmF0aW9uLCBzaW1pbGFyRmljdGlvbnMgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBcGlTZXNzaW9uKFxyXG4gIHdpdGhIYW5kbGVyKHtcclxuICAgIG1ldGhvZHM6IFtcIkdFVFwiXSxcclxuICAgIGhhbmRsZXIsXHJcbiAgfSlcclxuKTtcclxuIl0sIm5hbWVzIjpbIndpdGhIYW5kbGVyIiwiY2xpZW50Iiwid2l0aEFwaVNlc3Npb24iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicXVlcnkiLCJpZCIsInNlc3Npb24iLCJ1c2VyIiwiZmljdGlvbiIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsInRvU3RyaW5nIiwiaW5jbHVkZSIsImZpY3Rpb25TdGF0IiwidXNlckZpY3Rpb25TdGF0IiwiX2NvdW50Iiwic2VsZWN0IiwidXNlcnMiLCJrZXl3b3JkcyIsImtleXdvcmQiLCJuYW1lIiwiaXNPZkhlcm9pbmUiLCJpc09mTUMiLCJhcnIiLCJtYXAiLCJpdGVtIiwicHVzaCIsImtleXdvcmRTYW1lIiwid29yZCIsInNvbWUiLCJlcXVhbHMiLCJhcnIyIiwic2ltaWxhckZpY3Rpb25zIiwiZmluZE1hbnkiLCJPUiIsIkFORCIsIm5vdCIsInRpdGxlIiwiaXNMaWtlZCIsIkJvb2xlYW4iLCJmYXYiLCJmaW5kRmlyc3QiLCJmaWN0aW9uSWQiLCJ1c2VySWQiLCJyYXRpb24iLCJvcmlnaW5hbGl0eSIsIndyaXRpbmciLCJjaGFyYWN0ZXIiLCJ2ZXJpc2ltaWxpdHVkZSIsInN5bm9wc2lzQ29tcG9zaXRpb24iLCJ2YWx1ZSIsInVzZXJSYXRpb24iLCJ1c2VyUmF0aW9uT25GaWN0aW9uIiwianNvbiIsIm9rIiwibWV0aG9kcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/fictions/[id]/index.ts\n");

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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/fictions/[id]/index.ts"));
module.exports = __webpack_exports__;

})();