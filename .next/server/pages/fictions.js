"use strict";
(() => {
var exports = {};
exports.id = 943;
exports.ids = [943];
exports.modules = {

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

/***/ 4794:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5941);
/* harmony import */ var _libs_server_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7683);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_fictionList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8776);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7351);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);
swr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const Fictions = ({ keywords , categories , nationalities ,  })=>{
    const [pageIndex, setPageIndex] = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_atoms__WEBPACK_IMPORTED_MODULE_7__/* .pageAtom */ .nY);
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    // console.log(router.query?.keywords);
    let queryString = `/api/fictions?${"keywords=" + (router.query?.keywords?.toString().split(",") || "")}${"&nationalities=" + (router.query?.nationalities?.toString().split(",") || "")}${"&genres=" + (router.query?.genres?.toString().split(",") || "")}${"&sorting=" + (router.query?.sorting || "")}${"&page=" + pageIndex}`;
    // console.log(queryString);
    let { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(queryString);
    // pageIndex 변경될때마다 router.push
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (router.query.params) {
            queryString = `/api/fictions?${"keywords=" + (router?.query?.params[4]?.toString().split(",") || "")}${"&nationalities=" + (router?.query?.params[0]?.toString().split(",") || "")}${"&genres=" + (router?.query?.params[1]?.toString().split(",") || "")}${"&sorting=" + (router?.query?.params[2] || "")}${"&page=" + pageIndex}`;
        }
        // console.log(queryString);
        // console.log(data);
        // const genresMany = { genres: Array.from(checkedGenres).join(",") } || {};
        // console.log(genresMany);
        router.push(`/fictions/${Array.from(checkedNationalities).join(",") || "all"}/${Array.from(checkedGenres).join(",") || "all"}/${Array.from(checkedSortings || "총점").join(",") || "all"}/${pageIndex}/${Array.from(checkedItems).join(",") || "all"}`);
    }, [
        pageIndex
    ]);
    //세부 필터링
    const { 0: isChecked , 1: setIsChecked  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: checkedItems , 1: setCheckedItems  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(new Set());
    const { 0: checkedGenres , 1: setCheckedGenres  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(new Set());
    const { 0: checkedNationalities , 1: setCheckedNationalities  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(new Set());
    const { 0: checkedSortings , 1: setCheckedSortings  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(new Set());
    const sortingList = [
        "총점",
        "캐릭터성",
        "오리지널리티",
        "스토리",
        "작품성",
        "핍진성",
        "필력",
        "화수", 
    ];
    const checkHandler = ({ currentTarget  })=>{
        setIsChecked(!isChecked);
        checkedItemHandler(currentTarget.parentNode, currentTarget.value, currentTarget.checked, currentTarget.id, currentTarget);
    };
    const checkedItemHandler = (box, name, isChecked, id, target)=>{
        // console.log(name);
        // console.log(checkedItems);
        // 키워드
        if (isChecked && id === "keyword") {
            checkedItems.add(name);
            setCheckedItems(checkedItems);
        // box.style.backgroundColor = "blue";
        // box.style.color = "white";
        } else if (!isChecked && checkedItems.has(name) && id === "keyword") {
            checkedItems.delete(name);
            setCheckedItems(checkedItems);
        }
        // 국가
        if (isChecked && id === "nationality") {
            checkedNationalities.add(name);
            setCheckedNationalities(checkedNationalities);
        } else if (!isChecked && checkedNationalities.has(name) && id === "nationality") {
            checkedNationalities.delete(name);
            setCheckedNationalities(checkedNationalities);
        }
        // 장르
        if (isChecked && id === "genre") {
            checkedGenres.add(name);
            setCheckedGenres(checkedGenres);
        } else if (!isChecked && checkedGenres.has(name) && id === "genre") {
            checkedGenres.delete(name);
            setCheckedGenres(checkedGenres);
        }
        // 정렬
        if (isChecked && id === "sorting") {
            checkedSortings.clear();
            checkedSortings.add(name);
            setCheckedSortings(checkedSortings);
        // console.log(name);
        } else if (!isChecked && checkedSortings.has(name) && id === "sorting") {
            checkedSortings.delete(name);
            setCheckedSortings(checkedSortings);
        }
    };
    const buttonFlag = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(true);
    const rerenderList = ()=>{
        // console.log(buttonFlag.current);
        if (!buttonFlag.current) {
            alert("새로고침은 5초마다 한번씩 가능합니다.");
            return;
        }
        buttonFlag.current = !buttonFlag.current;
        setTimeout(()=>{
            buttonFlag.current = !buttonFlag.current;
        // console.log("해제완료");
        }, 5000);
        setPageIndex(1);
        router.push(`/fictions/${Array.from(checkedNationalities).join(",") || "all"}/${Array.from(checkedGenres).join(",") || "all"}/${Array.from(checkedSortings).join(",") || "총점"}/${pageIndex}/${Array.from(checkedItems).join(",") || "all"}`);
    };
    // console.log(nationalities, categories, keywords);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: " mt-10 max-w-[1300px]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " w-full justify-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    className: " ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: " bg-white px-2 pt-2 pb-1 border-[0.5px] border-[#BBBBBB] rounded-md blue ",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                className: " leading-7",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {})
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        children: "국가"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: " leading-[1.8rem] flex flex-wrap",
                                                        children: nationalities.map((nationality, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: " cursor-pointer flex",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        onClick: (e)=>checkHandler(e),
                                                                        type: "checkbox",
                                                                        className: " hidden peer",
                                                                        id: "nationality",
                                                                        value: nationality
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: " peer-checked:bg-blue-600 peer-checked:text-white hover:border-gray-400 hover:bg-gray-200 p-[0.12rem] mt-1 text-sm text-center ring-gray-500 mx-[0.35rem] rounded-md border-[#BBBBBB] border-[0.5px]",
                                                                        children: nationality
                                                                    })
                                                                ]
                                                            }, i))
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        children: "장르"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: " leading-[1.8rem] flex flex-wrap",
                                                        children: categories.map((category, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: " cursor-pointer flex",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        onClick: (e)=>checkHandler(e),
                                                                        type: "checkbox",
                                                                        id: "genre",
                                                                        className: " hidden peer",
                                                                        value: category.name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: " peer-checked:bg-blue-600 peer-checked:text-white hover:border-gray-400 hover:bg-gray-200 p-[0.12rem] mt-1 text-sm text-center ring-gray-500 mx-[0.35rem] rounded-md border-[#BBBBBB] border-[0.5px] ",
                                                                        children: category.name
                                                                    })
                                                                ]
                                                            }, i))
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        children: "정렬"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: " leading-[1.8rem] flex flex-wrap",
                                                        children: sortingList.map((sorting, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: " bg-white cursor-pointer flex ",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        // defaultChecked
                                                                        onClick: (e)=>checkHandler(e),
                                                                        type: "radio",
                                                                        className: " hidden peer",
                                                                        id: "sorting",
                                                                        value: sorting,
                                                                        name: "sorting"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: " peer-checked:bg-blue-600 peer-checked:text-white hover:border-gray-400 hover:bg-gray-200 p-[0.12rem] mt-1 text-sm text-center ring-gray-500 mx-[0.35rem] rounded-md border-[#BBBBBB] border-[0.5px] ",
                                                                        children: sorting
                                                                    })
                                                                ]
                                                            }, i))
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("details", {
                            className: " text-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: " mt-5 bg-white px-2 pt-2 pb-1 border-[0.5px] border-[#BBBBBB] rounded-md blue ",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                        className: " leading-7",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {})
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                            className: " min-w-[50px]",
                                                            children: "키워드"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: " leading-[1.8rem] flex flex-wrap",
                                                            children: keywords.filter((keyword)=>keyword?.isOfCons !== true).map((keyword)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                    className: " flex ",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            onClick: (e)=>checkHandler(e),
                                                                            type: "checkbox",
                                                                            id: "keyword",
                                                                            className: " hidden peer",
                                                                            value: keyword?.name
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: " cursor-pointer whitespace-nowrap bg-gray-200 text-[#666676] peer-checked:bg-blue-600 peer-checked:text-white hover:border-gray-400 hover:bg-gray-200 mt-1 text-sm text-center mx-[0.35rem] rounded-3xl border-[#BBBBBB] p-1 ",
                                                                            children: [
                                                                                "#",
                                                                                keyword?.name
                                                                            ]
                                                                        })
                                                                    ]
                                                                }, keyword?.id))
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("summary", {
                                    style: {
                                        listStyle: "none"
                                    },
                                    className: " mt-4 w-fit",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: " hover:cursor-pointer hover:bg-gray-200 border-[0.5px] p-1 border-[#BBBBBB] rounded-md flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "16",
                                                height: "16",
                                                fill: "currentColor",
                                                className: "bi bi-plus-circle-fill",
                                                viewBox: "0 0 16 16",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
                                                    }),
                                                    " "
                                                ]
                                            }),
                                            "\xa0",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: " 키워드 검색"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " w-full flex justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: rerenderList,
                    className: " hover:border-gray-400 hover:bg-gray-200 bg-white border-[0.5px] border-[#BBBBBB] rounded-md mt-2 p-1 w-2/3",
                    children: "새로고침"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_fictionList__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                data: data,
                type: "fictions_list",
                count: data?.fictions?.length
            })
        ]
    });
};
async function getStaticProps() {
    // console.log("BUILDING fictions index Statically");
    const fictions = await _libs_server_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].fiction.findMany */ .Z.fiction.findMany({
        select: {
            type: true,
            // currentState: true,
            nationality: true,
            // volume: true,
            // createdAt: true,
            keywords: {
                include: {
                    keyword: true
                }
            },
            categories: {
                include: {
                    category: true
                }
            },
            isTranslated: true
        }
    });
    const fictionsCount = await _libs_server_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].fiction.count */ .Z.fiction.count({
        where: {}
    });
    let keywords = await _libs_server_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].keyword.findMany */ .Z.keyword.findMany();
    let categories = await _libs_server_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].category.findMany */ .Z.category.findMany();
    // console.log(keywords.slice(5));
    // keywords = keywords.filter(
    //   (arr, index, callback) =>
    //     index === callback.findIndex((t) => t.name === arr.name)
    // );
    // // genre 중복제거 (fiction.genre -> genre)
    // let genres: Array<any> = [];
    // fictions.map((fiction) => genres.push(fiction.genre));
    // genres = [...new Set(genres)].filter((item) => item !== "");
    // nationality 중복제거 (fiction.nationality -> nationality)
    let nationalities = [];
    fictions.map((fiction)=>nationalities.push(fiction?.nationality));
    nationalities = [
        ...new Set(nationalities)
    ].filter((item)=>item !== "");
    // console.log(nationalities);
    // console.log(fictions.slice(0, 2));
    return {
        props: {
            // fictions: JSON.parse(JSON.stringify(fictions)),
            fictionsCount: JSON.parse(JSON.stringify(fictionsCount)),
            keywords: JSON.parse(JSON.stringify(keywords)),
            nationalities: JSON.parse(JSON.stringify(nationalities)),
            categories: JSON.parse(JSON.stringify(categories))
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fictions); // const fictions = await client.fiction.findMany({
 //   include: {
 //     _count: {
 //       select: {
 //         favs: true,
 //       },
 //     },
 //   },
 // });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 1925:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5636:
/***/ ((module) => {

module.exports = require("react-js-pagination");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("recoil");

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664,776], () => (__webpack_exec__(4794)));
module.exports = __webpack_exports__;

})();