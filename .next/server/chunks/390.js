"use strict";
exports.id = 390;
exports.ids = [390];
exports.modules = {

/***/ 1350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useMutation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useMutation(url) {
    const { 0: state , 1: setSate  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        loading: false,
        data: undefined,
        error: undefined
    });
    function mutation(data, method) {
        setSate((prev)=>({
                ...prev,
                loading: true
            }));
        fetch(url, {
            method: method?.toString() || "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((response)=>response.json().catch(()=>{})).then((data)=>setSate((prev)=>({
                    ...prev,
                    data
                }))).catch((error)=>setSate((prev)=>({
                    ...prev,
                    error
                }))).finally(()=>setSate((prev)=>({
                    ...prev,
                    loading: false
                })));
    }
    return [
        mutation,
        {
            ...state
        }
    ];
}


/***/ }),

/***/ 9088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ cls)
/* harmony export */ });
function cls(...classnames) {
    return classnames.join(" ");
}


/***/ })

};
;