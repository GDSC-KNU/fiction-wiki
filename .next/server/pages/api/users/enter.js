"use strict";
(() => {
var exports = {};
exports.id = 384;
exports.ids = [384];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

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

/***/ 2026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ enter)
});

// EXTERNAL MODULE: ./libs/server/withHandler.ts
var withHandler = __webpack_require__(9142);
// EXTERNAL MODULE: ./libs/server/client.ts
var client = __webpack_require__(5132);
;// CONCATENATED MODULE: external "twilio"
const external_twilio_namespaceObject = require("twilio");
var external_twilio_default = /*#__PURE__*/__webpack_require__.n(external_twilio_namespaceObject);
;// CONCATENATED MODULE: external "@sendgrid/mail"
const mail_namespaceObject = require("@sendgrid/mail");
var mail_default = /*#__PURE__*/__webpack_require__.n(mail_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/users/enter.tsx





mail_default().setApiKey(process.env.SENDGRID_API_KEY);
const twilioClient = external_twilio_default()(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
async function handler(req, res) {
    const { phone , email  } = req.body;
    const user = phone ? {
        phone: phone
    } : {
        email
    } ? {
        email
    } : null;
    if (!user) return res.status(400).json({
        ok: false
    });
    const payload = Math.floor(100000 + Math.random() * 900000) + "";
    const token = await client/* default.token.create */.Z.token.create({
        data: {
            payload,
            user: {
                connectOrCreate: {
                    where: {
                        ...user
                    },
                    create: {
                        name: "Anonymous",
                        ...user
                    }
                }
            }
        }
    });
    if (phone) {
        const message = await twilioClient.messages.create({
            messagingServiceSid: process.env.TWILIO_MSID,
            to: process.env.MY_PHONE,
            body: `Your login token is ${payload}`
        });
        console.log(message);
    } else if (email) {
        const email1 = await mail_default().send({
            from: {
                email: "mk44879@naver.com"
            },
            to: "mk44879@naver.com",
            subject: "Your Fdbs Verification Email",
            text: `Your token is ${payload}`,
            html: `<strong>Your token is ${payload}</strong>`
        });
        console.log(email1);
    }
    return res.json({
        ok: true
    });
}
/* harmony default export */ const enter = ((0,withHandler/* default */.Z)({
    methods: [
        "POST"
    ],
    handler,
    isPrivate: false
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2026));
module.exports = __webpack_exports__;

})();