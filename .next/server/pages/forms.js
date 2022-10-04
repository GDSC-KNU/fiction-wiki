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
exports.id = "pages/forms";
exports.ids = ["pages/forms"];
exports.modules = {

/***/ "./pages/forms.tsx":
/*!*************************!*\
  !*** ./pages/forms.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Forms)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__]);\nreact_hook_form__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction Forms() {\n    const { register , handleSubmit , formState: { errors  } , watch , setError , setValue , reset , resetField ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({\n        mode: \"onChange\"\n    });\n    const onValid = (data)=>{\n    // console.log(\"im valid bby\");\n    };\n    const onInvalid = (errors)=>{\n    // console.log(errors);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit(onValid, onInvalid),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ...register(\"username\", {\n                    required: \"Username is required\",\n                    minLength: {\n                        message: \"The username should be longer than 5 chars.\",\n                        value: 5\n                    }\n                }),\n                type: \"text\",\n                placeholder: \"Username\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fdbs_proto\\\\fdbsVer1.0\\\\pages\\\\forms.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            errors.username?.message,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ...register(\"email\", {\n                    required: \"Email is required\",\n                    validate: {\n                        notGmail: (value)=>!value.includes(\"@gmail.com\") || \"Gmail is not allowed\"\n                    }\n                }),\n                type: \"email\",\n                placeholder: \"Email\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fdbs_proto\\\\fdbsVer1.0\\\\pages\\\\forms.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            errors.email?.message,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ...register(\"password\", {\n                    required: \"Password is required\"\n                }),\n                type: \"password\",\n                placeholder: \"Password\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fdbs_proto\\\\fdbsVer1.0\\\\pages\\\\forms.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"submit\",\n                value: \"Create Account\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fdbs_proto\\\\fdbsVer1.0\\\\pages\\\\forms.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            errors.errors?.message\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fdbs_proto\\\\fdbsVer1.0\\\\pages\\\\forms.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb3Jtcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQXVEO0FBU3hDLFNBQVNDLEtBQUssR0FBRztJQUM5QixNQUFNLEVBQ0pDLFFBQVEsR0FDUkMsWUFBWSxHQUNaQyxTQUFTLEVBQUUsRUFBRUMsTUFBTSxHQUFFLEdBQ3JCQyxLQUFLLEdBQ0xDLFFBQVEsR0FDUkMsUUFBUSxHQUNSQyxLQUFLLEdBQ0xDLFVBQVUsS0FDWCxHQUFHVix3REFBTyxDQUFZO1FBQ3JCVyxJQUFJLEVBQUUsVUFBVTtLQUNqQixDQUFDO0lBQ0YsTUFBTUMsT0FBTyxHQUFHLENBQUNDLElBQWUsR0FBSztJQUNuQywrQkFBK0I7SUFDakMsQ0FBQztJQUNELE1BQU1DLFNBQVMsR0FBRyxDQUFDVCxNQUFtQixHQUFLO0lBQ3pDLHVCQUF1QjtJQUN6QixDQUFDO0lBRUQscUJBQ0UsOERBQUNVLE1BQUk7UUFBQ0MsUUFBUSxFQUFFYixZQUFZLENBQUNTLE9BQU8sRUFBRUUsU0FBUyxDQUFDOzswQkFDOUMsOERBQUNHLE9BQUs7Z0JBQ0gsR0FBR2YsUUFBUSxDQUFDLFVBQVUsRUFBRTtvQkFDdkJnQixRQUFRLEVBQUUsc0JBQXNCO29CQUNoQ0MsU0FBUyxFQUFFO3dCQUNUQyxPQUFPLEVBQUUsNkNBQTZDO3dCQUN0REMsS0FBSyxFQUFFLENBQUM7cUJBQ1Q7aUJBQ0YsQ0FBQztnQkFDRkMsSUFBSSxFQUFDLE1BQU07Z0JBQ1hDLFdBQVcsRUFBQyxVQUFVOzs7OztvQkFDdEI7WUFDRGxCLE1BQU0sQ0FBQ21CLFFBQVEsRUFBRUosT0FBTzswQkFDekIsOERBQUNILE9BQUs7Z0JBQ0gsR0FBR2YsUUFBUSxDQUFDLE9BQU8sRUFBRTtvQkFDcEJnQixRQUFRLEVBQUUsbUJBQW1CO29CQUM3Qk8sUUFBUSxFQUFFO3dCQUNSQyxRQUFRLEVBQUUsQ0FBQ0wsS0FBSyxHQUNkLENBQUNBLEtBQUssQ0FBQ00sUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLHNCQUFzQjtxQkFDMUQ7aUJBQ0YsQ0FBQztnQkFDRkwsSUFBSSxFQUFDLE9BQU87Z0JBQ1pDLFdBQVcsRUFBQyxPQUFPOzs7OztvQkFDbkI7WUFDRGxCLE1BQU0sQ0FBQ3VCLEtBQUssRUFBRVIsT0FBTzswQkFDdEIsOERBQUNILE9BQUs7Z0JBQ0gsR0FBR2YsUUFBUSxDQUFDLFVBQVUsRUFBRTtvQkFBRWdCLFFBQVEsRUFBRSxzQkFBc0I7aUJBQUUsQ0FBQztnQkFDOURJLElBQUksRUFBQyxVQUFVO2dCQUNmQyxXQUFXLEVBQUMsVUFBVTs7Ozs7b0JBQ3RCOzBCQUNGLDhEQUFDTixPQUFLO2dCQUFDSyxJQUFJLEVBQUMsUUFBUTtnQkFBQ0QsS0FBSyxFQUFDLGdCQUFnQjs7Ozs7b0JBQUc7WUFDN0NoQixNQUFNLENBQUNBLE1BQU0sRUFBRWUsT0FBTzs7Ozs7O1lBQ2xCLENBQ1A7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fycm90LW1hcmtldC8uL3BhZ2VzL2Zvcm1zLnRzeD9lMmE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkRXJyb3JzLCB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5cclxuaW50ZXJmYWNlIExvZ2luRm9ybSB7XHJcbiAgdXNlcm5hbWU6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgZXJyb3JzPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtcygpIHtcclxuICBjb25zdCB7XHJcbiAgICByZWdpc3RlcixcclxuICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcclxuICAgIHdhdGNoLFxyXG4gICAgc2V0RXJyb3IsXHJcbiAgICBzZXRWYWx1ZSxcclxuICAgIHJlc2V0LFxyXG4gICAgcmVzZXRGaWVsZCxcclxuICB9ID0gdXNlRm9ybTxMb2dpbkZvcm0+KHtcclxuICAgIG1vZGU6IFwib25DaGFuZ2VcIixcclxuICB9KTtcclxuICBjb25zdCBvblZhbGlkID0gKGRhdGE6IExvZ2luRm9ybSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJpbSB2YWxpZCBiYnlcIik7XHJcbiAgfTtcclxuICBjb25zdCBvbkludmFsaWQgPSAoZXJyb3JzOiBGaWVsZEVycm9ycykgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coZXJyb3JzKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblZhbGlkLCBvbkludmFsaWQpfT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgey4uLnJlZ2lzdGVyKFwidXNlcm5hbWVcIiwge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IFwiVXNlcm5hbWUgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICAgIG1pbkxlbmd0aDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlRoZSB1c2VybmFtZSBzaG91bGQgYmUgbG9uZ2VyIHRoYW4gNSBjaGFycy5cIixcclxuICAgICAgICAgICAgdmFsdWU6IDUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcclxuICAgICAgLz5cclxuICAgICAge2Vycm9ycy51c2VybmFtZT8ubWVzc2FnZX1cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgey4uLnJlZ2lzdGVyKFwiZW1haWxcIiwge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IFwiRW1haWwgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICAgIHZhbGlkYXRlOiB7XHJcbiAgICAgICAgICAgIG5vdEdtYWlsOiAodmFsdWUpID0+XHJcbiAgICAgICAgICAgICAgIXZhbHVlLmluY2x1ZGVzKFwiQGdtYWlsLmNvbVwiKSB8fCBcIkdtYWlsIGlzIG5vdCBhbGxvd2VkXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIHtlcnJvcnMuZW1haWw/Lm1lc3NhZ2V9XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHsuLi5yZWdpc3RlcihcInBhc3N3b3JkXCIsIHsgcmVxdWlyZWQ6IFwiUGFzc3dvcmQgaXMgcmVxdWlyZWRcIiB9KX1cclxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAvPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ3JlYXRlIEFjY291bnRcIiAvPlxyXG4gICAgICB7ZXJyb3JzLmVycm9ycz8ubWVzc2FnZX1cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwiRm9ybXMiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImZvcm1TdGF0ZSIsImVycm9ycyIsIndhdGNoIiwic2V0RXJyb3IiLCJzZXRWYWx1ZSIsInJlc2V0IiwicmVzZXRGaWVsZCIsIm1vZGUiLCJvblZhbGlkIiwiZGF0YSIsIm9uSW52YWxpZCIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwicmVxdWlyZWQiLCJtaW5MZW5ndGgiLCJtZXNzYWdlIiwidmFsdWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ1c2VybmFtZSIsInZhbGlkYXRlIiwibm90R21haWwiLCJpbmNsdWRlcyIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/forms.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/forms.tsx"));
module.exports = __webpack_exports__;

})();