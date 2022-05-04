"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/fictions/[id]",{

/***/ "./components/FictionRadarChart.tsx":
/*!******************************************!*\
  !*** ./components/FictionRadarChart.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FictionRadarChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.esm.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.RadialLinearScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend);\nfunction FictionRadarChart(props) {\n    console.log(props);\n    var data2 = [\n        {\n            subject: \"\\uC624\\uB9AC\\uC9C0\\uB110\\uB9AC\\uD2F0\",\n            A: props.props ? props === null || props === void 0 ? void 0 : props.props[0] : 0,\n            B: props.props ? props.props.originality : 0,\n            fullMark: 5\n        },\n        {\n            subject: \"\\uD544\\uB825\",\n            A: props.props ? props === null || props === void 0 ? void 0 : props.props[1] : 0,\n            B: props.props ? props.props.writing : 0,\n            fullMark: 5\n        },\n        {\n            subject: \"\\uCE90\\uB9AD\\uD130\\uC131\",\n            A: props.props ? props === null || props === void 0 ? void 0 : props.props[2] : 0,\n            B: props.props ? props.props.character : 0,\n            fullMark: 5\n        },\n        {\n            subject: \"\\uD54D\\uC9C4\\uC131\",\n            A: props.props ? props === null || props === void 0 ? void 0 : props.props[3] : 0,\n            B: props.props ? props.props.verisimilitude : 0,\n            fullMark: 5\n        },\n        {\n            subject: \"\\uC2A4\\uD1A0\\uB9AC\",\n            A: props.props ? props === null || props === void 0 ? void 0 : props.props[4] : 0,\n            B: props.props ? props.props.synopsisComposition : 0,\n            fullMark: 5\n        },\n        {\n            subject: \"\\uC791\\uD488\\uC131\",\n            A: props.props ? props === null || props === void 0 ? void 0 : props.props[5] : 0,\n            B: props.props ? props.props.value : 0,\n            fullMark: 5\n        }, \n    ];\n    console.log(props);\n    var data = {\n        labels: [\n            \"\\uC624\\uB9AC\\uC9C0\\uB110\\uB9AC\\uD2F0\",\n            \"\\uD544\\uB825\",\n            \"\\uCE90\\uB9AD\\uD130\\uC131\",\n            \"\\uD54D\\uC9C4\\uC131\",\n            \"\\uC2A4\\uD1A0\\uB9AC\",\n            \"\\uC791\\uD488\\uC131\"\n        ],\n        datasets: [\n            {\n                label: \"FDBS (admin)\",\n                data: [\n                    props.props ? props === null || props === void 0 ? void 0 : props.props[\"originality\"] : 0,\n                    props.props ? props === null || props === void 0 ? void 0 : props.props[\"writing\"] : 0,\n                    props.props ? props === null || props === void 0 ? void 0 : props.props[\"character\"] : 0,\n                    props.props ? props === null || props === void 0 ? void 0 : props.props[\"verisimilitude\"] : 0,\n                    props.props ? props === null || props === void 0 ? void 0 : props.props[\"synopsisComposition\"] : 0,\n                    props.props ? props === null || props === void 0 ? void 0 : props.props[\"value\"] : 0, \n                ],\n                backgroundColor: \"rgba(191, 219, 254, 0.5)\",\n                borderColor: \"rgba(187, 187, 187, 1)\",\n                borderWidth: 1\n            },\n            {\n                label: \"\\uC720\\uC800 (n)\",\n                data: [\n                    4,\n                    5,\n                    2,\n                    3,\n                    3,\n                    3\n                ],\n                backgroundColor: \"rgba(0, 0, 0, 0.7)\",\n                borderColor: \"rgba(187, 187, 187, 1)\",\n                borderWidth: 1\n            }, \n        ]\n    };\n    var options = {\n        responsive: true,\n        maintainAspectRatio: true,\n        scales: {\n            r: {\n                // suggestedMin: 0,\n                // suggestedMax: 5,\n                min: 0,\n                max: 5,\n                ticks: {\n                    stepSize: 1\n                },\n                scalesFontSize: 40\n            }\n        },\n        plugins: {\n            legend: {\n                labels: {\n                    // This more specific font property overrides the global property\n                    font: {\n                        size: 15\n                    }\n                }\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Radar, {\n            data: data,\n            options: options\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\FictionRadarChart.tsx\",\n            lineNumber: 122,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_c = FictionRadarChart;\nvar _c;\n$RefreshReg$(_c, \"FictionRadarChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhcnQgYXMgQ2hhcnRKUyxcclxuICBSYWRpYWxMaW5lYXJTY2FsZSxcclxuICBQb2ludEVsZW1lbnQsXHJcbiAgTGluZUVsZW1lbnQsXHJcbiAgRmlsbGVyLFxyXG4gIFRvb2x0aXAsXHJcbiAgTGVnZW5kLFxyXG59IGZyb20gXCJjaGFydC5qc1wiO1xyXG5pbXBvcnQgeyBSYWRhciB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcclxuXHJcbkNoYXJ0SlMucmVnaXN0ZXIoXHJcbiAgUmFkaWFsTGluZWFyU2NhbGUsXHJcbiAgUG9pbnRFbGVtZW50LFxyXG4gIExpbmVFbGVtZW50LFxyXG4gIEZpbGxlcixcclxuICBUb29sdGlwLFxyXG4gIExlZ2VuZFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmljdGlvblJhZGFyQ2hhcnQocHJvcHM6IGFueSkge1xyXG4gIGNvbnNvbGUubG9nKHByb3BzKTtcclxuICBjb25zdCBkYXRhMiA9IFtcclxuICAgIHtcclxuICAgICAgc3ViamVjdDogXCLsmKTrpqzsp4DrhJDrpqzti7BcIixcclxuICAgICAgQTogcHJvcHMucHJvcHMgPyBwcm9wcz8ucHJvcHNbMF0gOiAwLFxyXG4gICAgICBCOiBwcm9wcy5wcm9wcyA/IHByb3BzLnByb3BzLm9yaWdpbmFsaXR5IDogMCxcclxuICAgICAgZnVsbE1hcms6IDUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzdWJqZWN0OiBcIu2VhOugpVwiLFxyXG4gICAgICBBOiBwcm9wcy5wcm9wcyA/IHByb3BzPy5wcm9wc1sxXSA6IDAsXHJcbiAgICAgIEI6IHByb3BzLnByb3BzID8gcHJvcHMucHJvcHMud3JpdGluZyA6IDAsXHJcbiAgICAgIGZ1bGxNYXJrOiA1LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3ViamVjdDogXCLsupDrpq3thLDshLFcIixcclxuICAgICAgQTogcHJvcHMucHJvcHMgPyBwcm9wcz8ucHJvcHNbMl0gOiAwLFxyXG4gICAgICBCOiBwcm9wcy5wcm9wcyA/IHByb3BzLnByb3BzLmNoYXJhY3RlciA6IDAsXHJcbiAgICAgIGZ1bGxNYXJrOiA1LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3ViamVjdDogXCLtlY3sp4TshLFcIixcclxuICAgICAgQTogcHJvcHMucHJvcHMgPyBwcm9wcz8ucHJvcHNbM10gOiAwLFxyXG4gICAgICBCOiBwcm9wcy5wcm9wcyA/IHByb3BzLnByb3BzLnZlcmlzaW1pbGl0dWRlIDogMCxcclxuICAgICAgZnVsbE1hcms6IDUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzdWJqZWN0OiBcIuyKpO2GoOumrFwiLFxyXG4gICAgICBBOiBwcm9wcy5wcm9wcyA/IHByb3BzPy5wcm9wc1s0XSA6IDAsXHJcbiAgICAgIEI6IHByb3BzLnByb3BzID8gcHJvcHMucHJvcHMuc3lub3BzaXNDb21wb3NpdGlvbiA6IDAsXHJcbiAgICAgIGZ1bGxNYXJrOiA1LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3ViamVjdDogXCLsnpHtkojshLFcIixcclxuICAgICAgQTogcHJvcHMucHJvcHMgPyBwcm9wcz8ucHJvcHNbNV0gOiAwLFxyXG4gICAgICBCOiBwcm9wcy5wcm9wcyA/IHByb3BzLnByb3BzLnZhbHVlIDogMCxcclxuICAgICAgZnVsbE1hcms6IDUsXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgY29uc29sZS5sb2cocHJvcHMpO1xyXG5cclxuICBsZXQgZGF0YSA9IHtcclxuICAgIGxhYmVsczogW1wi7Jik66as7KeA64SQ66as7YuwXCIsIFwi7ZWE66ClXCIsIFwi7LqQ66at7YSw7ISxXCIsIFwi7ZWN7KeE7ISxXCIsIFwi7Iqk7Yag66asXCIsIFwi7J6R7ZKI7ISxXCJdLFxyXG4gICAgZGF0YXNldHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBcIkZEQlMgKGFkbWluKVwiLFxyXG4gICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgIHByb3BzLnByb3BzID8gcHJvcHM/LnByb3BzW1wib3JpZ2luYWxpdHlcIl0gOiAwLFxyXG4gICAgICAgICAgcHJvcHMucHJvcHMgPyBwcm9wcz8ucHJvcHNbXCJ3cml0aW5nXCJdIDogMCxcclxuICAgICAgICAgIHByb3BzLnByb3BzID8gcHJvcHM/LnByb3BzW1wiY2hhcmFjdGVyXCJdIDogMCxcclxuICAgICAgICAgIHByb3BzLnByb3BzID8gcHJvcHM/LnByb3BzW1widmVyaXNpbWlsaXR1ZGVcIl0gOiAwLFxyXG4gICAgICAgICAgcHJvcHMucHJvcHMgPyBwcm9wcz8ucHJvcHNbXCJzeW5vcHNpc0NvbXBvc2l0aW9uXCJdIDogMCxcclxuICAgICAgICAgIHByb3BzLnByb3BzID8gcHJvcHM/LnByb3BzW1widmFsdWVcIl0gOiAwLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMTkxLCAyMTksIDI1NCwgMC41KVwiLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoMTg3LCAxODcsIDE4NywgMSlcIixcclxuICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBcIuycoOyggCAobilcIixcclxuICAgICAgICBkYXRhOiBbNCwgNSwgMiwgMywgMywgM10sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC43KVwiLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoMTg3LCAxODcsIDE4NywgMSlcIixcclxuICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgfSxcclxuICAgICAgLy8ge1xyXG4gICAgICAvLyAgIGRhdGE6IFswLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgLy8gfSxcclxuICAgIF0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICBtYWludGFpbkFzcGVjdFJhdGlvOiB0cnVlLFxyXG4gICAgc2NhbGVzOiB7XHJcbiAgICAgIHI6IHtcclxuICAgICAgICAvLyBzdWdnZXN0ZWRNaW46IDAsXHJcbiAgICAgICAgLy8gc3VnZ2VzdGVkTWF4OiA1LFxyXG4gICAgICAgIG1pbjogMCxcclxuICAgICAgICBtYXg6IDUsXHJcbiAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgIHN0ZXBTaXplOiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2NhbGVzRm9udFNpemU6IDQwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHBsdWdpbnM6IHtcclxuICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAvLyBUaGlzIG1vcmUgc3BlY2lmaWMgZm9udCBwcm9wZXJ0eSBvdmVycmlkZXMgdGhlIGdsb2JhbCBwcm9wZXJ0eVxyXG4gICAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgICBzaXplOiAxNSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxSYWRhciBkYXRhPXtkYXRhfSBvcHRpb25zPXtvcHRpb25zfSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQ2hhcnQiLCJDaGFydEpTIiwiUmFkaWFsTGluZWFyU2NhbGUiLCJQb2ludEVsZW1lbnQiLCJMaW5lRWxlbWVudCIsIkZpbGxlciIsIlRvb2x0aXAiLCJMZWdlbmQiLCJSYWRhciIsInJlZ2lzdGVyIiwiRmljdGlvblJhZGFyQ2hhcnQiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhMiIsInN1YmplY3QiLCJBIiwiQiIsIm9yaWdpbmFsaXR5IiwiZnVsbE1hcmsiLCJ3cml0aW5nIiwiY2hhcmFjdGVyIiwidmVyaXNpbWlsaXR1ZGUiLCJzeW5vcHNpc0NvbXBvc2l0aW9uIiwidmFsdWUiLCJkYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJvcHRpb25zIiwicmVzcG9uc2l2ZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJzY2FsZXMiLCJyIiwibWluIiwibWF4IiwidGlja3MiLCJzdGVwU2l6ZSIsInNjYWxlc0ZvbnRTaXplIiwicGx1Z2lucyIsImxlZ2VuZCIsImZvbnQiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FictionRadarChart.tsx\n");

/***/ })

});