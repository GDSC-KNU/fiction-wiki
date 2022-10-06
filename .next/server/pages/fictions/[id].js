"use strict";
(() => {
var exports = {};
exports.id = 266;
exports.ids = [266];
exports.modules = {

/***/ 8816:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UserStat)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_client_useMutation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1350);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5641);
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4634);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5941);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_4__, swr__WEBPACK_IMPORTED_MODULE_6__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_4__, swr__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







// import { validateRequest } from "twilio/lib/webhooks/webhooks";


function UserStat() {
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { mutate: unboundMutate  } = (0,swr__WEBPACK_IMPORTED_MODULE_6__.useSWRConfig)();
    const [rateUserStat, { loading , data , error  }] = (0,_libs_client_useMutation__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(`/api/fictions/${router.query.id}/userRate`);
    // Useform
    const { register , handleSubmit , watch  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({
        mode: "onBlur"
    });
    const [curOriginality, curWriting, curCharacter, curVerisimilitude, curSynopsisCompositon, curValue, ] = watch()?.UserFictionStat || [
        0,
        0,
        0,
        0,
        0,
        0
    ];
    // const userCount = UserStatData?.prevFiction?.userFictionStat?._count?.users;
    function btnOnOff() {
        const target = document.getElementById("rateButton");
        target.disabled = !target?.disabled;
    }
    //소수점 둘째자리 숫자로 변환
    // const fixFloat = function (n: number) {
    //   const m = Number((Math.abs(n) * 100).toPrecision(15));
    //   return Math.round(m) / (100 * Math.sign(n));
    // };
    const buttonFlag = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);
    const onRateClick = (data)=>{
        // console.log(buttonFlag.current);
        if (!buttonFlag.current) {
            alert("평가는 한번만 가능합니다.");
            return;
        }
        buttonFlag.current = !buttonFlag.current;
        setTimeout(()=>{
            buttonFlag.current = !buttonFlag.current;
        // console.log("해제완료");
        }, 5000);
        btnOnOff();
        if (!session) {
            alert("Please log in");
            btnOnOff();
            return;
        }
        if (!curOriginality || !curWriting || !curCharacter || !curVerisimilitude || !curSynopsisCompositon || !curValue) {
            alert("Please fill in the blanks");
            btnOnOff();
            return;
        }
        // fixFloat(
        //   (+alreadyExists.originality * alreadyExists._count.users +
        //     +UserFictionStat[0]) /
        //     (+alreadyExists._count.users + 1)
        // )
        // console.log(data);
        rateUserStat(data, "POST");
        unboundMutate(`/api/fictions/${router.query.id}`, (prev)=>({
                ...prev,
                prevFiction: {
                    ...prev?.prevFiction,
                    userFictionStat: {
                        originality: ((+prev?.prevFiction?.userFictionStat?.originality || 0) * (+prev?.prevFiction?.userFictionStat?._count?.users || 0) + +curOriginality) / ((+prev?.prevFiction?.userFictionStat?._count?.users || 0) + 1),
                        writing: ((+prev?.prevFiction?.userFictionStat?.writing || 0) * (+prev?.prevFiction?.userFictionStat?._count?.users || 0) + +curWriting) / ((+prev?.prevFiction?.userFictionStat?._count?.users || 0) + 1),
                        character: ((+prev?.prevFiction?.userFictionStat?.character || 0) * (+prev?.prevFiction?.userFictionStat?._count?.users || 0) + +curCharacter) / ((+prev?.prevFiction?.userFictionStat?._count?.users || 0) + 1),
                        verisimilitude: ((+prev?.prevFiction?.userFictionStat?.verisimilitude || 0) * (+prev?.prevFiction?.userFictionStat?._count?.users || 0) + +curVerisimilitude) / ((+prev?.prevFiction?.userFictionStat?._count?.users || 0) + 1),
                        synopsisComposition: ((+prev?.prevFiction?.userFictionStat?.synopsisComposition || 0) * (+prev?.prevFiction?.userFictionStat?._count?.users || 0) + +curSynopsisCompositon) / ((+prev?.prevFiction?.userFictionStat?._count?.users || 0) + 1),
                        value: ((+prev?.prevFiction?.userFictionStat?.value || 0) * (+prev?.prevFiction?.userFictionStat?._count?.users || 0) + +curValue) / ((+prev?.prevFiction?.userFictionStat?._count?.users || 0) + 1),
                        _count: {
                            users: +prev?.prevFiction?.userFictionStat?._count?.users + 1 || 1
                        }
                    }
                },
                userRation: {
                    originality: +curOriginality,
                    writing: +curWriting,
                    character: +curOriginality,
                    verisimilitude: +curVerisimilitude,
                    synopsisComposition: +curSynopsisCompositon,
                    value: +curValue
                }
            }), false);
        btnOnOff();
    };
    // console.log(data ? data : null);
    // console.log("Hi");
    // console.log(watch());
    // console.log(UserStatData?.UserFictionStat);
    // console.log(userCount);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: " w-full",
        onSubmit: handleSubmit(onRateClick),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " grid grid-cols-2 mt-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        register: register("UserFictionStat.0", {
                            max: 5,
                            min: 0,
                            pattern: /^[0-9]*$/
                        }),
                        required: true,
                        label: "오리지널리티",
                        name: "UserFictionStat",
                        type: "number",
                        kind: "status"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        register: register("UserFictionStat.1", {
                            max: 5,
                            min: 0,
                            pattern: /^[0-9]*$/
                        }),
                        required: true,
                        label: "필력",
                        name: "UserFictionStat",
                        type: "number",
                        kind: "status"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        register: register("UserFictionStat.2", {
                            max: 5,
                            min: 0,
                            pattern: /^[0-9]*$/
                        }),
                        required: true,
                        label: "캐릭터성",
                        name: "UserFictionStat",
                        type: "number",
                        kind: "status"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        register: register("UserFictionStat.3", {
                            max: 5,
                            min: 0,
                            pattern: /^[0-9]*$/
                        }),
                        required: true,
                        label: "핍진성",
                        name: "UserFictionStat",
                        type: "number",
                        kind: "status"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        register: register("UserFictionStat.4", {
                            max: 5,
                            min: 0,
                            pattern: /^[0-9]*$/
                        }),
                        required: true,
                        label: "스토리",
                        name: "UserFictionStat",
                        type: "number",
                        kind: "status"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        register: register("UserFictionStat.5", {
                            max: 5,
                            min: 0,
                            pattern: /^[0-9]*$/
                        }),
                        required: true,
                        label: "작품성",
                        name: "UserFictionStat",
                        type: "number",
                        kind: "status"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                register: register("comment", {
                    maxLength: 40
                }),
                required: true,
                label: "코멘트",
                name: "Comment",
                type: "text",
                kind: "comment"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                id: "rateButton",
                type: "submit",
                className: "w-full bg-white hover:border-gray-300 text-black px-4 border-[0.5px] border-[#BBBBBB] border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none",
                children: "등록"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1071:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useUser)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);
swr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function useUser() {
    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])( true ? null : 0);
    // const { data: session } = useSession();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (data && !data.ok) {
        // router.replace("/enter");
        }
    }, [
        data,
        router
    ]);
    //   return router.replace("/enter");
    return {
        user: data?.profile,
        isLoading: !data && !error
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 6153:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5941);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _libs_client_useMutation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1350);
/* harmony import */ var _libs_client_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9088);
/* harmony import */ var _components_userStat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8816);
/* harmony import */ var _libs_server_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7683);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _libs_client_useUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1071);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5636);
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_js_pagination__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3135);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6809);
/* harmony import */ var _components_fictionRadarChart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4393);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__, _components_userStat__WEBPACK_IMPORTED_MODULE_5__, _libs_client_useUser__WEBPACK_IMPORTED_MODULE_8__, react_markdown__WEBPACK_IMPORTED_MODULE_11__, remark_gfm__WEBPACK_IMPORTED_MODULE_12__, _components_fictionRadarChart__WEBPACK_IMPORTED_MODULE_13__]);
([swr__WEBPACK_IMPORTED_MODULE_2__, _components_userStat__WEBPACK_IMPORTED_MODULE_5__, _libs_client_useUser__WEBPACK_IMPORTED_MODULE_8__, react_markdown__WEBPACK_IMPORTED_MODULE_11__, remark_gfm__WEBPACK_IMPORTED_MODULE_12__, _components_fictionRadarChart__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const FictionDetail = ({ fiction , similarFictions ,  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    // // FAV을 CSR로 받기, 기존 Data 정리하여 fav만 get하여 가져옴
    // const { data, mutate: boundMutate } = useSWR<FictionDetailResponse>(
    //   router.query.id ? `/api/fictions/${router.query.id}` : null
    // );
    const { 0: commentIndex , 1: setCommentIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const { user , isLoading  } = (0,_libs_client_useUser__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const { data , mutate: boundMutate  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])(router.query.id ?  true ? null : 0 : null);
    const { data: commentsResponse  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])(router.query.id ? `/api/fictions/${router.query.id}/comment?page=${commentIndex}` : null);
    const [toggleFav] = (0,_libs_client_useMutation__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(`/api/fictions/${router.query.id}/fav`);
    const onFavClick = ()=>{
        toggleFav({}, "POST");
        if (!data) return;
        boundMutate({
            ...data,
            isLiked: !data.isLiked
        }, false);
    };
    if (router?.isFallback) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            title: "Loaidng for youuuuuuu",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "I love you"
            })
        });
    }
    const handlePageChange = (PI)=>{
        setCommentIndex(PI);
    };
    fiction.startDate = new Date(fiction?.startDate);
    fiction.endDate = new Date(fiction?.endDate);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: " max-w-[1100px]",
        children: [
            user ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " flex justify-end mx-5 mt-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                        href: `/fictions/${fiction?.id}/edit`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: " hover:cursor-pointer bg-white border-[0.5px] border-[#BBBBBB] rounded-md p-1 mx-1",
                            children: "EDIT"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                        href: `/fictions/${fiction?.id}/delete`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: " hover:cursor-pointer bg-white border-[0.5px] border-[#BBBBBB] rounded-md p-1 ml-1",
                            children: "DELETE"
                        })
                    })
                ]
            }) : null,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " grid grid-cols-1 sm:grid-cols-10 h-fit",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " sm:max-w-[380px] object-cover h-fit bg-white col-span-3 mt-7 border-[0.5px] border-[#BBBBBB] rounded-md ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: " w-full h-[467px] relative",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    src: `https://imagedelivery.net/vZ0h3NOKMe-QsJIVyNemEg/${fiction?.image}/fiction`,
                                    layout: "fill",
                                    objectFit: "contain",
                                    alt: fiction?.title
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: " px-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " flex justify-between",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: " font-semibold text-2xl mb-2 pt-2 ml-",
                                                children: fiction?.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: onFavClick,
                                                className: (0,_libs_client_utils__WEBPACK_IMPORTED_MODULE_14__/* .cls */ .y)("px-3 py-2 rounded-md flex items-center hover:bg-gray-100 justify-center", data?.isLiked ? "text-red-400 hover:text-red-500" : "text-gray-400  hover:text-gray-500"),
                                                children: data?.isLiked ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    className: "w-6 h-6",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 20 20",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        fillRule: "evenodd",
                                                        d: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",
                                                        clipRule: "evenodd"
                                                    })
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    className: "h-6 w-6 ",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    "aria-hidden": "true",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " grid grid-cols-10 text-xs overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: " w-full col-span-10 grid grid-cols-10 py-[5px] ",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: " col-span-4 font-bold font-sans",
                                                        children: "원제"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: " col-span-6",
                                                        children: fiction?.title
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: " w-full col-span-10 grid grid-cols-10 py-[5px] border-t-[1px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: " col-span-4 font-bold font-sans",
                                                        children: "작가"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                        passHref: true,
                                                        href: `/authors/name/${fiction?.author?.name}`,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            title: fiction?.author?.name,
                                                            className: " col-span-6 hover:cursor-pointer text-blue-500",
                                                            children: fiction?.author?.name
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: " w-full col-span-10 grid grid-cols-10 py-[5px] border-t-[1px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: " col-span-4 font-bold font-sans",
                                                        children: "국가"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: " col-span-6",
                                                        children: fiction?.nationality
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: " w-full col-span-10 grid grid-cols-10 py-[5px] border-t-[1px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: " col-span-4 font-bold font-sans",
                                                        children: "장르"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: " col-span-6",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: fiction?.categories.reduce((acc, cur)=>[
                                                                    ...acc,
                                                                    cur?.category?.name
                                                                ], []).join(", ")
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: " w-full col-span-10 grid grid-cols-10 py-[5px] border-t-[1px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: " col-span-4 font-bold font-sans",
                                                        children: "연재기간"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: " col-span-6",
                                                        children: `${fiction?.startDate.getFullYear()}. ${fiction?.startDate.getMonth() + 1}. ${fiction?.startDate.getDate()} ~ ${fiction?.endDate.getFullYear()}. ${fiction?.endDate.getMonth() + 1}. ${fiction?.endDate.getDate()}`
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: " w-full col-span-10 grid grid-cols-10 py-[5px] border-t-[1px] ",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: " col-span-4 font-bold font-sans ",
                                                        children: "원본"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: " col-span-6 text-blue-500",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                            className: " flex",
                                                            href: fiction?.original,
                                                            title: fiction?.original,
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: "16",
                                                                    height: "16",
                                                                    fill: "currentColor",
                                                                    className: "bi bi-link",
                                                                    viewBox: "0 0 16 16",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                            d: "M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                            d: "M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"
                                                                        })
                                                                    ]
                                                                }),
                                                                "바로가기"
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: " w-full col-span-10 sm:col-span-10 grid grid-cols-10 py-[5px] border-t-[1px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: " col-span-4 font-bold font-sans",
                                                        children: "플랫폼"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: " col-span-6 text-blue-500",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                            className: " flex",
                                                            href: fiction?.platforms,
                                                            title: fiction?.platforms,
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: "16",
                                                                    height: "16",
                                                                    fill: "currentColor",
                                                                    className: "bi bi-link",
                                                                    viewBox: "0 0 16 16",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                            d: "M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                            d: "M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"
                                                                        })
                                                                    ]
                                                                }),
                                                                "바로가기"
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: " w-full col-span-10 grid grid-cols-10 py-[5px] border-t-[1px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: " col-span-4 font-bold font-sans",
                                                        children: "상태"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: " col-span-6",
                                                        children: [
                                                            fiction?.volume,
                                                            "\xa0",
                                                            fiction?.currentState || "??"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: " w-full col-span-10 grid grid-cols-10 py-[5px] border-t-[1px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: " col-span-4 font-bold font-sans",
                                                        children: "미디어믹스"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: " col-span-6",
                                                        children: fiction?.mediaMix || "X"
                                                    })
                                                ]
                                            }),
                                            fiction?.isTranslated ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: " w-full col-span-10 grid grid-cols-10 py-[5px] border-t-[1px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: " col-span-4 font-bold font-sans",
                                                        children: "번역상태"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: " col-span-6",
                                                        children: fiction?.isTranslated ? "O" : ""
                                                    })
                                                ]
                                            }) : null,
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: " w-full col-span-10 grid grid-cols-10 py-[5px] border-t-[1px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: " col-span-4 font-bold font-sans",
                                                        children: "Related"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: " col-span-6",
                                                        children: [
                                                            fiction?.relatedTitle,
                                                            " \xa0",
                                                            fiction?.relatedAuthor
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " mb-2"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " mb-2"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " mb-2"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " mb-2"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " mb-2"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " mb-2"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " mb-2"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " col-span-7 mt-3 sm:mt-7 sm:grid lg:grid-rows-5",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: " grid grid-cols-10 row-span-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " col-span-10 lg:col-span-5 sm:pl-5 lg:px-5 h-full pb-3",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: " mb-5 pb-3 px- w-full bg-white border-[0.5px] border-[#BBBBBB] rounded-md h-full",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: " pt-1 border-b-[1px] mx-3 text-md",
                                                    children: "메인 태그"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                    className: " pt-2 px-3 inline-flex flex-wrap",
                                                    children: fiction?.keywords?.filter((item)=>item?.keyword?.isOfHeroine === false && item?.keyword?.isOfMC === false && item?.keyword?.isOfCons === false).map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: item?.keyword?.isOfMC ? " text-sm text-center ring-2 ring-red-500 mx-1 my-1 rounded-md h-fit border-[#BBBBBB]" : item?.keyword?.isOfHeroine ? " text-sm text-center ring-2 ring-blue-500 mx-1 my-1 rounded-md h-fit border-[#BBBBBB]" : " text-sm text-center  mx-1 my-1 rounded-3xl h-fit bg-gray-200 text-[#666676] p-1 whitespace-nowrap cursor-pointer",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                                href: `/search/keyword/${item?.keyword?.name}/1`,
                                                                passHref: true,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                    children: [
                                                                        "#",
                                                                        item?.keyword?.name
                                                                    ]
                                                                })
                                                            })
                                                        }, index))
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: " pt-1 border-b-[1px] mx-3 text-md",
                                                    children: "주인공 태그"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                    className: " pt-2 px-3 inline-flex flex-wrap",
                                                    children: fiction.keywords.filter((item)=>item?.keyword?.isOfMC === true).map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: " text-sm text-center mx-1 my-1 rounded-3xl h-fit bg-gray-200 text-[#666676] p-1 whitespace-nowrap",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                                href: `/search/keyword/${item?.keyword?.name}/1`,
                                                                passHref: true,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                    children: [
                                                                        "#",
                                                                        item?.keyword?.name
                                                                    ]
                                                                })
                                                            })
                                                        }, index))
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: " pt-1 border-b-[1px] mx-3 text-md",
                                                    children: "히로인 태그"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                    className: " pt-2 px-3 inline-flex flex-wrap",
                                                    children: fiction?.keywords.filter((item)=>item?.keyword?.isOfHeroine === true).map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: " text-sm text-center mx-1 my-1 rounded-3xl h-fit bg-gray-200 text-[#666676] p-1 whitespace-nowrap",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                                href: `/search/keyword/${item?.keyword?.name}/1`,
                                                                passHref: true,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                    children: [
                                                                        "#",
                                                                        item?.keyword?.name
                                                                    ]
                                                                })
                                                            })
                                                        }, index))
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: " pt-1 border-b-[1px] mx-3 text-md",
                                                    children: "호불호 키워드"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                    className: " pt-2 px-3 inline-flex flex-wrap",
                                                    children: fiction?.keywords.filter((item)=>item?.keyword?.isOfCons === true).map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: " text-sm text-center mx-1 my-1 rounded-3xl h-fit bg-red-200 text-[#666676] p-1 whitespace-nowrap",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                                href: `/search/keyword/${item?.keyword?.name}/1`,
                                                                passHref: true,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                    children: [
                                                                        "#",
                                                                        item?.keyword?.name
                                                                    ]
                                                                })
                                                            })
                                                        }, index))
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " col-span-10 sm:pl-5 lg:px-0 lg:col-span-5 pb-3",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: " bg-white mb-5 w-full border-[0.5px] border-[#BBBBBB] rounded-md col-span-6 h-full",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: " font-bold pt-1 px-2"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_fictionRadarChart__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                    props: fiction?.fictionStat
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: " w-full px-3 h-fit mx-auto my-2",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("details", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("summary", {
                                                                style: {
                                                                    listStyle: "none"
                                                                },
                                                                className: " text-center font-bold cursor-pointer my-2 border-[0.5px] border-[#BBBBBB] rounded-md",
                                                                children: "평가하기"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_userStat__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: " row-span-3 mt-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: " sm:pl-5 ",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " w-full bg-white border-[0.5px] border-[#BBBBBB] rounded-md h-fit",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: " font-bold pt-1 px-2 "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: " ",
                                                children: commentsResponse?.comments?.map((comment, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        className: " flex place-content-between mx-2 border-b-2 pb-1 last:border-b-0 relative",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                className: " mt-2 text-sm overflow-hidden mr-16",
                                                                children: comment?.comment
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                className: " mt-2 text-sm absolute right-24",
                                                                children: `${comment?.createdById.slice(0, 5)}...`
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                className: " mt-2 ml-5 text-sm min-w-[78px]",
                                                                children: "\uD83D\uDC4D \uD83D\uDC4E (+3)"
                                                            })
                                                        ]
                                                    }, index))
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: " mb-2 mt-7",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_js_pagination__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                    activePage: commentIndex,
                                                    itemsCountPerPage: 7,
                                                    totalItemsCount: commentsResponse?.commentsCount || 1,
                                                    pageRangeDisplayed: 5,
                                                    prevPageText: "‹",
                                                    nextPageText: "›",
                                                    onChange: handlePageChange,
                                                    innerClass: " flex justify-center mt-[15px]",
                                                    itemClass: " hover:text-blue-400 flex border-[1px] divide-solid border-[#e2e2e2] inline-block w-[30px] h-[30px] justify-center align-center",
                                                    linkClass: " w-full flex justify-center mt-[0.8px]",
                                                    activeClass: " text-blue-400"
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " mt-3 sm:mt-7 px-3 py-3 ",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: " font-bold text-xl border-b-[1px] py-2",
                                children: "줄거리"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: " whitespace-pre-wrap mt-2",
                                children: fiction?.synopsis
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " mt-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: " font-bold text-xl mt-4 border-b-[1px] py-2",
                                children: "등장인물"
                            }),
                            fiction?.characters
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: " font-bold text-xl mt-4 border-b-[1px] py-2",
                                children: "세계관 및 설정"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                remarkPlugins: [
                                    remark_gfm__WEBPACK_IMPORTED_MODULE_12__["default"]
                                ],
                                children: fiction.setup || ""
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " mt-3 sm:mt-7 bg-white px-3 py-3 border-[0.5px] border-[#BBBBBB] rounded-md",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: " font-bold text-xl",
                        children: "비슷한 소설"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: " mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
                        children: similarFictions?.slice(0, 4).map((fiction)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "h-56 w-full mb-4 bg-slate-300"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: " text-gray-700 -mb-1",
                                        children: fiction?.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "description"
                                    })
                                ]
                            }, fiction?.id))
                    })
                ]
            })
        ]
    });
};
const getStaticPaths = ()=>{
    return {
        paths: [],
        fallback: "blocking"
    };
};
const getStaticProps = async (ctx)=>{
    if (!ctx?.params?.id) {
        return {
            props: {}
        };
    }
    const fiction = await _libs_server_client__WEBPACK_IMPORTED_MODULE_6__/* ["default"].fiction.findUnique */ .Z.fiction.findUnique({
        where: {
            id: +ctx.params.id.toString()
        },
        include: {
            fictionStat: true,
            userFictionStat: {
                include: {
                    userRationOnFictions: true,
                    _count: {
                        select: {
                            users: true
                        }
                    }
                }
            },
            keywords: {
                include: {
                    keyword: {
                        select: {
                            name: true,
                            isOfHeroine: true,
                            isOfMC: true,
                            isOfCons: true
                        }
                    }
                }
            },
            categories: {
                include: {
                    category: true
                }
            },
            author: true
        }
    });
    const arr = [];
    fiction?.keywords.map((item)=>arr.push(item?.keyword?.name));
    const keywordSame = arr.map((word)=>({
            keywords: {
                some: {
                    keyword: {
                        name: {
                            equals: word
                        }
                    }
                }
            }
        }));
    const arr2 = [];
    const similarFictions = await _libs_server_client__WEBPACK_IMPORTED_MODULE_6__/* ["default"].fiction.findMany */ .Z.fiction.findMany({
        where: {
            OR: keywordSame,
            AND: {
                id: {
                    not: fiction?.id
                }
            }
        }
    });
    similarFictions.map((item)=>arr2.push([
            item.id,
            item.title
        ]));
    const isLiked = false;
    // const ration = await client.userFictionStat.findFirst({
    //   where: {
    //     fictionId: fiction?.id,
    //   },
    //   select: {
    //     originality: true,
    //     writing: true,
    //     character: true,
    //     verisimilitude: true,
    //     synopsisComposition: true,
    //     value: true,
    //   },
    // });
    return {
        props: {
            fiction: JSON.parse(JSON.stringify(fiction)),
            similarFictions: JSON.parse(JSON.stringify(similarFictions)),
            isLiked
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FictionDetail);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4467:
/***/ ((module) => {

module.exports = require("chart.js");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

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

/***/ 4014:
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

/***/ 7051:
/***/ ((module) => {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ 5636:
/***/ ((module) => {

module.exports = require("react-js-pagination");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ 3135:
/***/ ((module) => {

module.exports = import("react-markdown");;

/***/ }),

/***/ 6809:
/***/ ((module) => {

module.exports = import("remark-gfm");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664,669,390,393], () => (__webpack_exec__(6153)));
module.exports = __webpack_exports__;

})();