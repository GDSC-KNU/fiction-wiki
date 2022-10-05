"use strict";
exports.id = 17;
exports.ids = [17];
exports.modules = {

/***/ 9142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ withHandler)
/* harmony export */ });
function withHandler({ methods , isPrivate =false , handler  }) {
    return async function(req, res) {
        // if (!req.session.user) {
        //   console.log("not logged in");
        //   return res.status(200).json({ ok: false, error: "Plase Log in" });
        // }
        console.log(req.method);
        if (req.method && !methods.includes(req.method)) {
            return res.status(405).end();
        }
        if (isPrivate && !req.session.user) {
            return res.status(401).json({
                ok: false,
                error: "Plase Log in"
            });
        }
        try {
            await handler(req, res);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                error
            });
        }
    };
}


/***/ }),

/***/ 2879:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ withApiSession)
/* harmony export */ });
/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8534);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_0__]);
iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const cookieOptions = {
    cookieName: "fdbssession",
    password: process.env.COOKIE_PASSWORD
};
function withApiSession(fn) {
    return (0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__/* .withIronSessionApiRoute */ .n)(fn, cookieOptions);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;