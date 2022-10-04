"use strict";
(() => {
var exports = {};
exports.id = 938;
exports.ids = [938];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 1454:
/***/ ((module) => {

module.exports = import("iron-session");;

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

/***/ 3723:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libs_server_withHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9142);
/* harmony import */ var _libs_server_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5132);
/* harmony import */ var _libs_server_withSession__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2879);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_server_withSession__WEBPACK_IMPORTED_MODULE_1__]);
_libs_server_withSession__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




async function handler(req, res) {
    //평균점수 - 소수점2자리 숫자로 변환
    const fixFloat = function(n) {
        let m = Number((Math.abs(n) * 100).toPrecision(15));
        return Math.round(m) / (100 * Math.sign(n));
    };
    const { query: { id  } , // session: { user },
    body: { UserFictionStat , comment  } ,  } = req;
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getSession)({
        req
    });
    if (!session) {
        res.json({
            ok: false
        });
        return;
    } else {
        let commentation;
        let Ration;
        // console.log(session?.user?.email);
        const alreadyExists = await _libs_server_client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].userFictionStat.findFirst */ .Z.userFictionStat.findFirst({
            include: {
                _count: {
                    select: {
                        users: true
                    }
                },
                users: true,
                userRationOnFictions: {
                    where: {
                        userId: session?.user?.id
                    }
                }
            },
            where: {
                fictionId: +id.toString()
            }
        });
        // console.log(alreadyExists);
        // console.log(UserFictionStat);
        /// DB에 userFictionStat이 존재하지 않는 최초의 유저 제출.
        if (!alreadyExists) {
            Ration = await _libs_server_client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].userFictionStat.create */ .Z.userFictionStat.create({
                data: {
                    fiction: {
                        connect: {
                            id: +id.toString()
                        }
                    },
                    users: {
                        connect: {
                            id: session?.user.id
                        }
                    },
                    userRationOnFictions: {
                        create: {
                            userId: session.user.id,
                            originality: +UserFictionStat[0],
                            writing: +UserFictionStat[1],
                            character: +UserFictionStat[2],
                            verisimilitude: +UserFictionStat[3],
                            synopsisComposition: +UserFictionStat[4],
                            value: +UserFictionStat[5]
                        }
                    },
                    originality: +UserFictionStat[0],
                    writing: +UserFictionStat[1],
                    character: +UserFictionStat[2],
                    verisimilitude: +UserFictionStat[3],
                    synopsisComposition: +UserFictionStat[4],
                    value: +UserFictionStat[5],
                    total: fixFloat((+UserFictionStat[0] + +UserFictionStat[1] + +UserFictionStat[2] + +UserFictionStat[3] + +UserFictionStat[4] + +UserFictionStat[5]) / 6)
                },
                include: {
                    _count: {
                        select: {
                            users: true
                        }
                    }
                }
            });
            commentation = await _libs_server_client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].comment.create */ .Z.comment.create({
                data: {
                    comment: comment,
                    createdBy: {
                        connect: {
                            id: session?.user?.id
                        }
                    },
                    fiction: {
                        connect: {
                            id: +id.toString()
                        }
                    }
                }
            });
        } else {
            //유저의 id로 userRationOnFiction entity 탐색.
            const userRated = await _libs_server_client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].userRationOnFiction.findFirst */ .Z.userRationOnFiction.findFirst({
                where: {
                    userId: session?.user?.id,
                    userFictionStat: {
                        fiction: {
                            id: +id.toString()
                        }
                    }
                }
            });
            // if (userRated) console.log(userRated);
            // 유저가 처음 제출하는 경우
            if (!userRated) {
                // console.log(alreadyExists.userRationOnFictions);
                Ration = await _libs_server_client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].userFictionStat.update */ .Z.userFictionStat.update({
                    where: {
                        id: alreadyExists.id
                    },
                    data: {
                        users: {
                            connect: {
                                id: session?.user?.id
                            }
                        },
                        userRationOnFictions: {
                            create: {
                                userId: session.user.id,
                                originality: +UserFictionStat[0],
                                writing: +UserFictionStat[1],
                                character: +UserFictionStat[2],
                                verisimilitude: +UserFictionStat[3],
                                synopsisComposition: +UserFictionStat[4],
                                value: +UserFictionStat[5]
                            }
                        },
                        originality: fixFloat((+alreadyExists.originality * alreadyExists._count.users + +UserFictionStat[0]) / (+alreadyExists._count.users + 1)),
                        writing: fixFloat((+alreadyExists.originality * alreadyExists._count.users + +UserFictionStat[1]) / (+alreadyExists._count.users + 1)),
                        character: fixFloat((+alreadyExists.originality * alreadyExists._count.users + +UserFictionStat[2]) / (+alreadyExists._count.users + 1)),
                        verisimilitude: fixFloat((+alreadyExists.originality * alreadyExists._count.users + +UserFictionStat[3]) / (+alreadyExists._count.users + 1)),
                        synopsisComposition: fixFloat((+alreadyExists.originality * alreadyExists._count.users + +UserFictionStat[4]) / (+alreadyExists._count.users + 1)),
                        value: fixFloat((+alreadyExists.originality * alreadyExists._count.users + +UserFictionStat[5]) / (+alreadyExists._count.users + 1)),
                        total: fixFloat(((alreadyExists.total || 0) * alreadyExists._count.users + (+UserFictionStat[0] + +UserFictionStat[1] + +UserFictionStat[2] + +UserFictionStat[3] + +UserFictionStat[4] + +UserFictionStat[5]) / 6) / (alreadyExists._count.users + 1))
                    }
                });
                commentation = await _libs_server_client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].comment.create */ .Z.comment.create({
                    data: {
                        comment: comment,
                        createdBy: {
                            connect: {
                                id: session?.user?.id
                            }
                        },
                        fiction: {
                            connect: {
                                id: +id.toString()
                            }
                        }
                    }
                });
            } else {
                res.json({
                    ok: false
                });
                return;
            // Ration = await client.userFictionStat.update({
            //   where: {
            //     id: alreadyExists.id,
            //   },
            //   data: {
            //     users: {
            //       connect: {
            //         id: session?.user?.id,
            //       },
            //     },
            //     userRationOnFictions: {
            //       update: {
            //         where: {
            //           id: alreadyExists.userRationOnFictions[0].id,
            //         },
            //         data: {
            //           originality: +UserFictionStat[0],
            //           writing: +UserFictionStat[1],
            //           character: +UserFictionStat[2],
            //           verisimilitude: +UserFictionStat[3],
            //           synopsisComposition: +UserFictionStat[4],
            //           value: +UserFictionStat[5],
            //         },
            //       },
            //     },
            //     originality:
            //       alreadyExists?.originality -
            //       alreadyExists.userRationOnFictions[0].originality +
            //       +UserFictionStat[0],
            //     writing:
            //       alreadyExists.writing -
            //       alreadyExists.userRationOnFictions[0].writing +
            //       +UserFictionStat[1],
            //     character:
            //       alreadyExists.character -
            //       alreadyExists.userRationOnFictions[0].character +
            //       +UserFictionStat[2],
            //     verisimilitude:
            //       alreadyExists.verisimilitude -
            //       alreadyExists.userRationOnFictions[0].verisimilitude +
            //       +UserFictionStat[3],
            //     synopsisComposition:
            //       alreadyExists.synopsisComposition -
            //       alreadyExists.userRationOnFictions[0].synopsisComposition +
            //       +UserFictionStat[4],
            //     value:
            //       alreadyExists.value -
            //       alreadyExists.userRationOnFictions[0].value +
            //       +UserFictionStat[5],
            //   },
            // });
            }
        }
        // console.log(Ration);
        res.json({
            ok: true
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_server_withSession__WEBPACK_IMPORTED_MODULE_1__/* .withApiSession */ .u)((0,_libs_server_withHandler__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
    methods: [
        "POST"
    ],
    handler
})));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [534,17], () => (__webpack_exec__(3723)));
module.exports = __webpack_exports__;

})();