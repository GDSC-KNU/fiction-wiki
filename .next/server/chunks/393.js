"use strict";
exports.id = 393;
exports.ids = [393];
exports.modules = {

/***/ 4393:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FictionRadarChart)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4467);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7051);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_4__]);
swr__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.RadialLinearScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend);
function FictionRadarChart(props) {
    // console.log(props)
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { data: UserStatData , mutate: boundMutate  } = (0,swr__WEBPACK_IMPORTED_MODULE_4__["default"])(router.query.id ?  true ? null : 0 : null);
    let data = {
        labels: [
            "오리지널리티",
            "필력",
            "캐릭터성",
            "핍진성",
            "스토리",
            "작품성"
        ],
        datasets: [
            {
                label: "FDBS (admin)",
                data: [
                    props?.props ? parseInt(props?.props["originality"]) : 0,
                    props?.props ? parseInt(props?.props["writing"]) : 0,
                    props?.props ? parseInt(props?.props["character"]) : 0,
                    props?.props ? parseInt(props?.props["verisimilitude"]) : 0,
                    props?.props ? parseInt(props?.props["synopsisComposition"]) : 0,
                    props?.props ? parseInt(props?.props["value"]) : 0, 
                ],
                backgroundColor: "rgba(191, 219, 254, 0.5)",
                borderColor: "rgba(187, 187, 187, 1)",
                borderWidth: 1
            },
            {
                label: `유저 ${+UserStatData?.prevFiction?.userFictionStat?._count?.users || 0}명`,
                data: [
                    UserStatData?.prevFiction?.userFictionStat ? parseInt(UserStatData?.prevFiction?.userFictionStat?.originality) : 0,
                    UserStatData?.prevFiction?.userFictionStat ? parseInt(UserStatData?.prevFiction?.userFictionStat?.writing) : 0,
                    UserStatData?.prevFiction?.userFictionStat ? parseInt(UserStatData?.prevFiction?.userFictionStat?.character) : 0,
                    UserStatData?.prevFiction?.userFictionStat ? parseInt(UserStatData?.prevFiction?.userFictionStat?.verisimilitude) : 0,
                    UserStatData?.prevFiction?.userFictionStat ? parseInt(UserStatData?.prevFiction?.userFictionStat?.synopsisComposition) : 0,
                    UserStatData?.prevFiction?.userFictionStat ? parseInt(UserStatData?.prevFiction?.userFictionStat?.value) : 0, 
                ],
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                borderColor: "rgba(187, 187, 187, 1)",
                borderWidth: 1
            }, 
        ]
    };
    const options = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            r: {
                // suggestedMin: 0,
                // suggestedMax: 5,
                min: 0,
                max: 5,
                ticks: {
                    stepSize: 1
                },
                pointLabels: {
                    font: {
                        size: 16,
                        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                        color: "#BBBBBB"
                    }
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 13
                    }
                }
            }
        }
    };
    // console.log(UserStatData);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: " mx-2",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Radar, {
            data: data,
            options: options
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;