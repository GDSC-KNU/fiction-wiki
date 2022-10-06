"use strict";
exports.id = 588;
exports.ids = [588];
exports.modules = {

/***/ 2072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_client_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9088);


function Button({ large =false , onClick , text , ...rest }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        ...rest,
        className: (0,_libs_client_utils__WEBPACK_IMPORTED_MODULE_1__/* .cls */ .y)("w-full bg-white  hover:border-gray-300 text-black  px-4 border-[0.5px] border-[#BBBBBB] border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none", large ? "py-3 text-base" : "py-2 text-sm "),
        children: text
    });
}


/***/ }),

/***/ 8239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TextArea)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function TextArea({ label , name , register , ...rest }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            label ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: name,
                className: "mb-1 block text-sm font-medium text-gray-700",
                children: label
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                id: name,
                ...register,
                className: " h-48 mt-1 shadow-sm w-full focus:ring-blue-400 rounded-md border-gray-300 focus:border-blue-400 ",
                rows: 4,
                ...rest
            })
        ]
    });
}


/***/ })

};
;