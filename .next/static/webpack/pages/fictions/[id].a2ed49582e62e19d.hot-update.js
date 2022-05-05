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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FictionRadarChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nchart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.RadialLinearScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend);\nfunction FictionRadarChart(props) {\n    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19, ref20;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref21 = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(router.query.id ? \"/api/fictions/\".concat(router.query.id) : null), UserStatData = ref21.data, boundMutate = ref21.mutate;\n    var data = {\n        labels: [\n            \"\\uC624\\uB9AC\\uC9C0\\uB110\\uB9AC\\uD2F0\",\n            \"\\uD544\\uB825\",\n            \"\\uCE90\\uB9AD\\uD130\\uC131\",\n            \"\\uD54D\\uC9C4\\uC131\",\n            \"\\uC2A4\\uD1A0\\uB9AC\",\n            \"\\uC791\\uD488\\uC131\"\n        ],\n        datasets: [\n            {\n                label: \"FDBS (admin)\",\n                data: [\n                    props.props ? props === null || props === void 0 ? void 0 : props.props[\"originality\"] : 0,\n                    props.props ? props === null || props === void 0 ? void 0 : props.props[\"writing\"] : 0,\n                    props.props ? props === null || props === void 0 ? void 0 : props.props[\"character\"] : 0,\n                    props.props ? props === null || props === void 0 ? void 0 : props.props[\"verisimilitude\"] : 0,\n                    props.props ? props === null || props === void 0 ? void 0 : props.props[\"synopsisComposition\"] : 0,\n                    props.props ? props === null || props === void 0 ? void 0 : props.props[\"value\"] : 0, \n                ],\n                backgroundColor: \"rgba(191, 219, 254, 0.5)\",\n                borderColor: \"rgba(187, 187, 187, 1)\",\n                borderWidth: 1\n            },\n            {\n                label: \"\\uC720\\uC800 \".concat((UserStatData === null || UserStatData === void 0 ? void 0 : (ref = UserStatData.fiction) === null || ref === void 0 ? void 0 : (ref1 = ref.userFictionStat) === null || ref1 === void 0 ? void 0 : (ref2 = ref1._count) === null || ref2 === void 0 ? void 0 : ref2.users) || 0, \"\\uBA85\"),\n                data: [\n                    (UserStatData === null || UserStatData === void 0 ? void 0 : UserStatData.ration) ? UserStatData.ration[\"originality\"] / ((UserStatData === null || UserStatData === void 0 ? void 0 : (ref3 = UserStatData.fiction) === null || ref3 === void 0 ? void 0 : (ref4 = ref3.userFictionStat) === null || ref4 === void 0 ? void 0 : (ref5 = ref4._count) === null || ref5 === void 0 ? void 0 : ref5.users) + 1 || 1) : 0,\n                    (UserStatData === null || UserStatData === void 0 ? void 0 : UserStatData.ration) ? UserStatData.ration[\"writing\"] / ((UserStatData === null || UserStatData === void 0 ? void 0 : (ref6 = UserStatData.fiction) === null || ref6 === void 0 ? void 0 : (ref7 = ref6.userFictionStat) === null || ref7 === void 0 ? void 0 : (ref8 = ref7._count) === null || ref8 === void 0 ? void 0 : ref8.users) + 1 || 1) : 0,\n                    (UserStatData === null || UserStatData === void 0 ? void 0 : UserStatData.ration) ? UserStatData.ration[\"character\"] / ((UserStatData === null || UserStatData === void 0 ? void 0 : (ref9 = UserStatData.fiction) === null || ref9 === void 0 ? void 0 : (ref10 = ref9.userFictionStat) === null || ref10 === void 0 ? void 0 : (ref11 = ref10._count) === null || ref11 === void 0 ? void 0 : ref11.users) + 1 || 1) : 0,\n                    (UserStatData === null || UserStatData === void 0 ? void 0 : UserStatData.ration) ? UserStatData.ration[\"verisimilitude\"] / ((UserStatData === null || UserStatData === void 0 ? void 0 : (ref12 = UserStatData.fiction) === null || ref12 === void 0 ? void 0 : (ref13 = ref12.userFictionStat) === null || ref13 === void 0 ? void 0 : (ref14 = ref13._count) === null || ref14 === void 0 ? void 0 : ref14.users) + 1 || 1) : 0,\n                    (UserStatData === null || UserStatData === void 0 ? void 0 : UserStatData.ration) ? UserStatData.ration[\"synopsisComposition\"] / ((UserStatData === null || UserStatData === void 0 ? void 0 : (ref15 = UserStatData.fiction) === null || ref15 === void 0 ? void 0 : (ref16 = ref15.userFictionStat) === null || ref16 === void 0 ? void 0 : (ref17 = ref16._count) === null || ref17 === void 0 ? void 0 : ref17.users) + 1 || 1) : 0,\n                    (UserStatData === null || UserStatData === void 0 ? void 0 : UserStatData.ration) ? UserStatData.ration[\"value\"] / ((UserStatData === null || UserStatData === void 0 ? void 0 : (ref18 = UserStatData.fiction) === null || ref18 === void 0 ? void 0 : (ref19 = ref18.userFictionStat) === null || ref19 === void 0 ? void 0 : (ref20 = ref19._count) === null || ref20 === void 0 ? void 0 : ref20.users) + 1 || 1) : 0, \n                ],\n                backgroundColor: \"rgba(0, 0, 0, 0.7)\",\n                borderColor: \"rgba(187, 187, 187, 1)\",\n                borderWidth: 1\n            }, \n        ]\n    };\n    var options = {\n        responsive: true,\n        maintainAspectRatio: true,\n        scales: {\n            r: {\n                // suggestedMin: 0,\n                // suggestedMax: 5,\n                min: 0,\n                max: 5,\n                ticks: {\n                    stepSize: 1\n                },\n                pointLabels: {\n                    font: {\n                        size: 16,\n                        family: \"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif\",\n                        color: \"#BBBBBB\"\n                    }\n                }\n            }\n        },\n        plugins: {\n            legend: {\n                labels: {\n                    // This more specific font property overrides the global property\n                    font: {\n                        size: 13\n                    }\n                }\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" mx-10 \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Radar, {\n            data: data,\n            options: options\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\FictionRadarChart.tsx\",\n            lineNumber: 126,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\FictionRadarChart.tsx\",\n        lineNumber: 125,\n        columnNumber: 5\n    }, this);\n};\n_s(FictionRadarChart, \"wJb87UAIVLiUeyJyTCjaAv4Jc54=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = FictionRadarChart;\nvar _c;\n$RefreshReg$(_c, \"FictionRadarChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUU7Z0JBQ0QsbUJBQW1CO2dCQUNuQixtQkFBbUI7Z0JBQ25CQyxHQUFHLEVBQUUsQ0FBQztnQkFDTkMsR0FBRyxFQUFFLENBQUM7Z0JBQ05DLEtBQUssRUFBRTtvQkFDTEMsUUFBUSxFQUFFLENBQUM7aUJBQ1o7Z0JBQ0RDLFdBQVcsRUFBRTtvQkFDWEMsSUFBSSxFQUFFO3dCQUNKQyxJQUFJLEVBQUUsRUFBRTt3QkFDUkMsTUFBTSxFQUFFLG9EQUFvRDt3QkFDNURDLEtBQUssRUFBRSxTQUFTO3FCQUNqQjtpQkFDRjthQUNGO1NBQ0Y7UUFDREMsT0FBTyxFQUFFO1lBQ1BDLE1BQU0sRUFBRTtnQkFDTjFCLE1BQU0sRUFBRTtvQkFDTixpRUFBaUU7b0JBQ2pFcUIsSUFBSSxFQUFFO3dCQUNKQyxJQUFJLEVBQUUsRUFBRTtxQkFDVDtpQkFDRjthQUNGO1NBQ0Y7S0FDRjtJQUVELHFCQUNFLDhEQUFDSyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxTQUFTO2tCQUN0Qiw0RUFBQ3hDLGtEQUFLO1lBQUNTLElBQUksRUFBRUEsSUFBSTtZQUFFYyxPQUFPLEVBQUVBLE9BQU87Ozs7O2dCQUFJOzs7OztZQUNuQyxDQUNOO0NBQ0g7R0F0R3VCcEIsaUJBQWlCOztRQUN4Qkosa0RBQVM7UUFFNEJFLDJDQUFNOzs7QUFIcENFLEtBQUFBLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ZpY3Rpb25SYWRhckNoYXJ0LnRzeD84NDNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhcnQgYXMgQ2hhcnRKUyxcclxuICBSYWRpYWxMaW5lYXJTY2FsZSxcclxuICBQb2ludEVsZW1lbnQsXHJcbiAgTGluZUVsZW1lbnQsXHJcbiAgRmlsbGVyLFxyXG4gIFRvb2x0aXAsXHJcbiAgTGVnZW5kLFxyXG59IGZyb20gXCJjaGFydC5qc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUmFkYXIgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XHJcbmltcG9ydCB1c2VTV1IsIHsgdXNlU1dSQ29uZmlnIH0gZnJvbSBcInN3clwiO1xyXG5cclxuQ2hhcnRKUy5yZWdpc3RlcihcclxuICBSYWRpYWxMaW5lYXJTY2FsZSxcclxuICBQb2ludEVsZW1lbnQsXHJcbiAgTGluZUVsZW1lbnQsXHJcbiAgRmlsbGVyLFxyXG4gIFRvb2x0aXAsXHJcbiAgTGVnZW5kXHJcbik7XHJcblxyXG5pbnRlcmZhY2UgUmF0ZVVzZXJTdGF0Rm9ybSB7XHJcbiAgVXNlckZpY3Rpb25TdGF0OiBudW1iZXJbXTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmljdGlvblJhZGFyQ2hhcnQocHJvcHM6IGFueSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCB7IGRhdGE6IFVzZXJTdGF0RGF0YSwgbXV0YXRlOiBib3VuZE11dGF0ZSB9ID0gdXNlU1dSPGFueT4oXHJcbiAgICByb3V0ZXIucXVlcnkuaWQgPyBgL2FwaS9maWN0aW9ucy8ke3JvdXRlci5xdWVyeS5pZH1gIDogbnVsbFxyXG4gICk7XHJcblxyXG4gIGxldCBkYXRhID0ge1xyXG4gICAgbGFiZWxzOiBbXCLsmKTrpqzsp4DrhJDrpqzti7BcIiwgXCLtlYTroKVcIiwgXCLsupDrpq3thLDshLFcIiwgXCLtlY3sp4TshLFcIiwgXCLsiqTthqDrpqxcIiwgXCLsnpHtkojshLFcIl0sXHJcbiAgICBkYXRhc2V0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwiRkRCUyAoYWRtaW4pXCIsXHJcbiAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgcHJvcHMucHJvcHMgPyBwcm9wcz8ucHJvcHNbXCJvcmlnaW5hbGl0eVwiXSA6IDAsXHJcbiAgICAgICAgICBwcm9wcy5wcm9wcyA/IHByb3BzPy5wcm9wc1tcIndyaXRpbmdcIl0gOiAwLFxyXG4gICAgICAgICAgcHJvcHMucHJvcHMgPyBwcm9wcz8ucHJvcHNbXCJjaGFyYWN0ZXJcIl0gOiAwLFxyXG4gICAgICAgICAgcHJvcHMucHJvcHMgPyBwcm9wcz8ucHJvcHNbXCJ2ZXJpc2ltaWxpdHVkZVwiXSA6IDAsXHJcbiAgICAgICAgICBwcm9wcy5wcm9wcyA/IHByb3BzPy5wcm9wc1tcInN5bm9wc2lzQ29tcG9zaXRpb25cIl0gOiAwLFxyXG4gICAgICAgICAgcHJvcHMucHJvcHMgPyBwcm9wcz8ucHJvcHNbXCJ2YWx1ZVwiXSA6IDAsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgxOTEsIDIxOSwgMjU0LCAwLjUpXCIsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiYSgxODcsIDE4NywgMTg3LCAxKVwiLFxyXG4gICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IGDsnKDsoIAgJHtcclxuICAgICAgICAgIFVzZXJTdGF0RGF0YT8uZmljdGlvbj8udXNlckZpY3Rpb25TdGF0Py5fY291bnQ/LnVzZXJzIHx8IDBcclxuICAgICAgICB966qFYCxcclxuICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICBVc2VyU3RhdERhdGE/LnJhdGlvblxyXG4gICAgICAgICAgICA/IFVzZXJTdGF0RGF0YS5yYXRpb25bXCJvcmlnaW5hbGl0eVwiXSAvXHJcbiAgICAgICAgICAgICAgKFVzZXJTdGF0RGF0YT8uZmljdGlvbj8udXNlckZpY3Rpb25TdGF0Py5fY291bnQ/LnVzZXJzICsgMSB8fCAxKVxyXG4gICAgICAgICAgICA6IDAsXHJcbiAgICAgICAgICBVc2VyU3RhdERhdGE/LnJhdGlvblxyXG4gICAgICAgICAgICA/IFVzZXJTdGF0RGF0YS5yYXRpb25bXCJ3cml0aW5nXCJdIC9cclxuICAgICAgICAgICAgICAoVXNlclN0YXREYXRhPy5maWN0aW9uPy51c2VyRmljdGlvblN0YXQ/Ll9jb3VudD8udXNlcnMgKyAxIHx8IDEpXHJcbiAgICAgICAgICAgIDogMCxcclxuICAgICAgICAgIFVzZXJTdGF0RGF0YT8ucmF0aW9uXHJcbiAgICAgICAgICAgID8gVXNlclN0YXREYXRhLnJhdGlvbltcImNoYXJhY3RlclwiXSAvXHJcbiAgICAgICAgICAgICAgKFVzZXJTdGF0RGF0YT8uZmljdGlvbj8udXNlckZpY3Rpb25TdGF0Py5fY291bnQ/LnVzZXJzICsgMSB8fCAxKVxyXG4gICAgICAgICAgICA6IDAsXHJcbiAgICAgICAgICBVc2VyU3RhdERhdGE/LnJhdGlvblxyXG4gICAgICAgICAgICA/IFVzZXJTdGF0RGF0YS5yYXRpb25bXCJ2ZXJpc2ltaWxpdHVkZVwiXSAvXHJcbiAgICAgICAgICAgICAgKFVzZXJTdGF0RGF0YT8uZmljdGlvbj8udXNlckZpY3Rpb25TdGF0Py5fY291bnQ/LnVzZXJzICsgMSB8fCAxKVxyXG4gICAgICAgICAgICA6IDAsXHJcbiAgICAgICAgICBVc2VyU3RhdERhdGE/LnJhdGlvblxyXG4gICAgICAgICAgICA/IFVzZXJTdGF0RGF0YS5yYXRpb25bXCJzeW5vcHNpc0NvbXBvc2l0aW9uXCJdIC9cclxuICAgICAgICAgICAgICAoVXNlclN0YXREYXRhPy5maWN0aW9uPy51c2VyRmljdGlvblN0YXQ/Ll9jb3VudD8udXNlcnMgKyAxIHx8IDEpXHJcbiAgICAgICAgICAgIDogMCxcclxuICAgICAgICAgIFVzZXJTdGF0RGF0YT8ucmF0aW9uXHJcbiAgICAgICAgICAgID8gVXNlclN0YXREYXRhLnJhdGlvbltcInZhbHVlXCJdIC9cclxuICAgICAgICAgICAgICAoVXNlclN0YXREYXRhPy5maWN0aW9uPy51c2VyRmljdGlvblN0YXQ/Ll9jb3VudD8udXNlcnMgKyAxIHx8IDEpXHJcbiAgICAgICAgICAgIDogMCxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuNylcIixcclxuICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2JhKDE4NywgMTg3LCAxODcsIDEpXCIsXHJcbiAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIHtcclxuICAgICAgLy8gICBkYXRhOiBbMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgIC8vIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZSxcclxuICAgIHNjYWxlczoge1xyXG4gICAgICByOiB7XHJcbiAgICAgICAgLy8gc3VnZ2VzdGVkTWluOiAwLFxyXG4gICAgICAgIC8vIHN1Z2dlc3RlZE1heDogNSxcclxuICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgbWF4OiA1LFxyXG4gICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICBzdGVwU2l6ZTogMSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvaW50TGFiZWxzOiB7XHJcbiAgICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICAgIHNpemU6IDE2LFxyXG4gICAgICAgICAgICBmYW1pbHk6IFwiJ0hlbHZldGljYSBOZXVlJywgJ0hlbHZldGljYScsICdBcmlhbCcsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICAgICAgY29sb3I6IFwiI0JCQkJCQlwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHBsdWdpbnM6IHtcclxuICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAvLyBUaGlzIG1vcmUgc3BlY2lmaWMgZm9udCBwcm9wZXJ0eSBvdmVycmlkZXMgdGhlIGdsb2JhbCBwcm9wZXJ0eVxyXG4gICAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgICBzaXplOiAxMyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIG14LTEwIFwiPlxyXG4gICAgICA8UmFkYXIgZGF0YT17ZGF0YX0gb3B0aW9ucz17b3B0aW9uc30gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkNoYXJ0IiwiQ2hhcnRKUyIsIlJhZGlhbExpbmVhclNjYWxlIiwiUG9pbnRFbGVtZW50IiwiTGluZUVsZW1lbnQiLCJGaWxsZXIiLCJUb29sdGlwIiwiTGVnZW5kIiwidXNlUm91dGVyIiwiUmFkYXIiLCJ1c2VTV1IiLCJyZWdpc3RlciIsIkZpY3Rpb25SYWRhckNoYXJ0IiwicHJvcHMiLCJVc2VyU3RhdERhdGEiLCJyb3V0ZXIiLCJxdWVyeSIsImlkIiwiZGF0YSIsIm11dGF0ZSIsImJvdW5kTXV0YXRlIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJmaWN0aW9uIiwidXNlckZpY3Rpb25TdGF0IiwiX2NvdW50IiwidXNlcnMiLCJyYXRpb24iLCJvcHRpb25zIiwicmVzcG9uc2l2ZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJzY2FsZXMiLCJyIiwibWluIiwibWF4IiwidGlja3MiLCJzdGVwU2l6ZSIsInBvaW50TGFiZWxzIiwiZm9udCIsInNpemUiLCJmYW1pbHkiLCJjb2xvciIsInBsdWdpbnMiLCJsZWdlbmQiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FictionRadarChart.tsx\n");

/***/ })

});