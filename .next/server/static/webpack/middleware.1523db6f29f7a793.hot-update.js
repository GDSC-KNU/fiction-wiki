"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middleware\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/server.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_0__);\n\n// import { withAuth } from \"next-auth/middleware\";\nasync function middleware(req, ev) {\n    const requestForNextAuth = {\n        headers: {\n            cookie: req.headers.get(\"cookie\")\n        }\n    };\n    // console.log(requestForNextAuth.headers.cookie);\n    // console.log(req.cookies.get(\"next-auth.csrf-token\"));\n    // console.log(\"hi\");\n    //@ts-ignore\n    // const session = await getSession({ req: requestForNextAuth });\n    // const ua = userAgent(req);\n    // if (ua?.isBot) {\n    //   return NextResponse.next();\n    // }\n    // if (req.nextUrl.pathname.startsWith(\"/enter\")) {\n    // }\n    if (req.nextUrl.pathname.startsWith(\"/fictions/create\") && !req.cookies.get(\"fdbssession\")) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.rewrite(new URL(\"/enter\", req.url));\n    }\n    if (req.nextUrl.pathname.includes(\"/edit\") && !req.cookies.get(\"fdbssession\")) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.rewrite(new URL(\"/enter\", req.url));\n    }\n    if (req.nextUrl.pathname.startsWith(\"/profile\") && !req.cookies.get(\"next-auth.csrf-token\")) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.rewrite(new URL(\"/enter\", req.url));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFMkM7QUFDM0MsbURBQW1EO0FBRTVDLGVBQWVDLFVBQVUsQ0FBQ0MsR0FBZ0IsRUFBRUMsRUFBa0IsRUFBRTtJQUNyRSxNQUFNQyxrQkFBa0IsR0FBRztRQUN6QkMsT0FBTyxFQUFFO1lBQ1BDLE1BQU0sRUFBRUosR0FBRyxDQUFDRyxPQUFPLENBQUNFLEdBQUcsQ0FBQyxRQUFRLENBQUM7U0FDbEM7S0FDRjtJQUVELGtEQUFrRDtJQUNsRCx3REFBd0Q7SUFDeEQscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixpRUFBaUU7SUFDakUsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsSUFBSTtJQUNKLG1EQUFtRDtJQUNuRCxJQUFJO0lBRUosSUFDRUwsR0FBRyxDQUFDTSxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLGtCQUFrQixDQUFDLElBQ25ELENBQUNSLEdBQUcsQ0FBQ1MsT0FBTyxDQUFDSixHQUFHLENBQUMsYUFBYSxDQUFDLEVBQy9CO1FBQ0EsT0FBT1AsNkRBQW9CLENBQUMsSUFBSWEsR0FBRyxDQUFDLFFBQVEsRUFBRVgsR0FBRyxDQUFDWSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxJQUNFWixHQUFHLENBQUNNLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDTSxRQUFRLENBQUMsT0FBTyxDQUFDLElBQ3RDLENBQUNiLEdBQUcsQ0FBQ1MsT0FBTyxDQUFDSixHQUFHLENBQUMsYUFBYSxDQUFDLEVBQy9CO1FBQ0EsT0FBT1AsNkRBQW9CLENBQUMsSUFBSWEsR0FBRyxDQUFDLFFBQVEsRUFBRVgsR0FBRyxDQUFDWSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxJQUNFWixHQUFHLENBQUNNLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQzNDLENBQUNSLEdBQUcsQ0FBQ1MsT0FBTyxDQUFDSixHQUFHLENBQUMsc0JBQXNCLENBQUMsRUFDeEM7UUFDQSxPQUFPUCw2REFBb0IsQ0FBQyxJQUFJYSxHQUFHLENBQUMsUUFBUSxFQUFFWCxHQUFHLENBQUNZLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS50cz80MjJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEZldGNoRXZlbnQsIE5leHRSZXF1ZXN0IH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG4vLyBpbXBvcnQgeyB3aXRoQXV0aCB9IGZyb20gXCJuZXh0LWF1dGgvbWlkZGxld2FyZVwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxOiBOZXh0UmVxdWVzdCwgZXY6IE5leHRGZXRjaEV2ZW50KSB7XHJcbiAgY29uc3QgcmVxdWVzdEZvck5leHRBdXRoID0ge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBjb29raWU6IHJlcS5oZWFkZXJzLmdldChcImNvb2tpZVwiKSxcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2cocmVxdWVzdEZvck5leHRBdXRoLmhlYWRlcnMuY29va2llKTtcclxuICAvLyBjb25zb2xlLmxvZyhyZXEuY29va2llcy5nZXQoXCJuZXh0LWF1dGguY3NyZi10b2tlblwiKSk7XHJcbiAgLy8gY29uc29sZS5sb2coXCJoaVwiKTtcclxuICAvL0B0cy1pZ25vcmVcclxuICAvLyBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcTogcmVxdWVzdEZvck5leHRBdXRoIH0pO1xyXG4gIC8vIGNvbnN0IHVhID0gdXNlckFnZW50KHJlcSk7XHJcbiAgLy8gaWYgKHVhPy5pc0JvdCkge1xyXG4gIC8vICAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XHJcbiAgLy8gfVxyXG4gIC8vIGlmIChyZXEubmV4dFVybC5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2VudGVyXCIpKSB7XHJcbiAgLy8gfVxyXG5cclxuICBpZiAoXHJcbiAgICByZXEubmV4dFVybC5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2ZpY3Rpb25zL2NyZWF0ZVwiKSAmJlxyXG4gICAgIXJlcS5jb29raWVzLmdldChcImZkYnNzZXNzaW9uXCIpXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJld3JpdGUobmV3IFVSTChcIi9lbnRlclwiLCByZXEudXJsKSk7XHJcbiAgfVxyXG5cclxuICBpZiAoXHJcbiAgICByZXEubmV4dFVybC5wYXRobmFtZS5pbmNsdWRlcyhcIi9lZGl0XCIpICYmXHJcbiAgICAhcmVxLmNvb2tpZXMuZ2V0KFwiZmRic3Nlc3Npb25cIilcclxuICApIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmV3cml0ZShuZXcgVVJMKFwiL2VudGVyXCIsIHJlcS51cmwpKTtcclxuICB9XHJcblxyXG4gIGlmIChcclxuICAgIHJlcS5uZXh0VXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvcHJvZmlsZVwiKSAmJlxyXG4gICAgIXJlcS5jb29raWVzLmdldChcIm5leHQtYXV0aC5jc3JmLXRva2VuXCIpXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJld3JpdGUobmV3IFVSTChcIi9lbnRlclwiLCByZXEudXJsKSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxIiwiZXYiLCJyZXF1ZXN0Rm9yTmV4dEF1dGgiLCJoZWFkZXJzIiwiY29va2llIiwiZ2V0IiwibmV4dFVybCIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsImNvb2tpZXMiLCJyZXdyaXRlIiwiVVJMIiwidXJsIiwiaW5jbHVkZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});