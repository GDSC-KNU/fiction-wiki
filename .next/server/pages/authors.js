"use strict";
(() => {
var exports = {};
exports.id = 415;
exports.ids = [415];
exports.modules = {

/***/ 7351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ag": () => (/* binding */ searchPageAtom),
/* harmony export */   "Wt": () => (/* binding */ authorPageAtom),
/* harmony export */   "nY": () => (/* binding */ pageAtom)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const pageAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "whatPage",
    default: 1
});
const authorPageAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "authorWhatPage",
    default: 1
});
const searchPageAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "searchWhatPage",
    default: 1
});


/***/ }),

/***/ 7683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ server_client)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./libs/server/client.ts

const client = global.client || new client_namespaceObject.PrismaClient();
if (false) {}
/* harmony default export */ const server_client = (new client_namespaceObject.PrismaClient());


/***/ }),

/***/ 6310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_server_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7683);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7351);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);






// interface IParams extends ParsedUrlQuery {
//   page: string;
// }
const Author = ({ authors , authorsCount  })=>{
    const [authorPageIndex, setAuthorPageIndex] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_atoms__WEBPACK_IMPORTED_MODULE_4__/* .authorPageAtom */ .Wt);
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(authorPageIndex);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setAuthorPageIndex(authorPageIndex);
        router.push(`/authors/${authorPageIndex}`);
    }, [
        authorPageIndex
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: " mt-12"
    });
};
// export const getStaticProps: GetStaticProps = async (
//   ctx: GetStaticPropsContext
// ) => {
const getStaticProps = async (ctx)=>{
    // const { page } = ctx.params as IParams;
    // if (!page) {
    //   return {
    //     props: {},
    //   };
    // }
    // console.log(page);
    // const authors = await client.author.findMany({
    //   take: 18,
    //   skip: 0,
    //   include: {
    //     fictions: true,
    //   },
    // });
    const authorsCount = await _libs_server_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"].author.count */ .Z.author.count({});
    return {
        props: {
            // authors: JSON.parse(JSON.stringify(authors)),
            authorsCount: JSON.parse(JSON.stringify(authorsCount))
        }
    };
};
// export async function getStaticProps() {
//     const authors = await client.author.findUnique({
//     where: { name: ctx.params.slug?.toString() },
//     include: {
//       fictions: true,
//     },
//   });
// }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Author);


/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("recoil");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6310));
module.exports = __webpack_exports__;

})();