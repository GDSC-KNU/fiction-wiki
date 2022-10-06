"use strict";
(() => {
var exports = {};
exports.id = 288;
exports.ids = [288];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 1454:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ 5132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const client = global.client || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient());


/***/ }),

/***/ 6229:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libs_server_withHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9142);
/* harmony import */ var _libs_server_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5132);
/* harmony import */ var _libs_server_withSession__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2879);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_server_withSession__WEBPACK_IMPORTED_MODULE_1__]);
_libs_server_withSession__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



async function handler(req, res) {
    // if (!req.session.user) {
    //   console.log("not logged in");
    //   return res.status(200).json({ ok: false, error: "Plase Log in" });
    // }
    let profile = await _libs_server_client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].user.findUnique */ .Z.user.findUnique({
        where: {
            id: req.session.user?.id || ""
        }
    });
    if (!profile) {
        // console.log("no profile");
        res.json({
            ok: false
        });
    } else {
        res.json({
            ok: true,
            profile
        });
        res.status(200).end();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_server_withSession__WEBPACK_IMPORTED_MODULE_1__/* .withApiSession */ .u)((0,_libs_server_withHandler__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    methods: [
        "GET"
    ],
    handler
})));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [534,17], () => (__webpack_exec__(6229)));
module.exports = __webpack_exports__;

})();