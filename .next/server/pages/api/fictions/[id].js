"use strict";
(() => {
var exports = {};
exports.id = 634;
exports.ids = [634];
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

/***/ 7468:
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
    let { query: { id  } , session: { user  } ,  } = req;
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getSession)({
        req
    });
    const prevFiction = await _libs_server_client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].fiction.findUnique */ .Z.fiction.findUnique({
        where: {
            id: +id.toString()
        },
        include: {
            fictionStat: true,
            userFictionStat: {
                include: {
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
    // console.log(prevFiction);
    // console.log(prevFiction?.categories[0].category.name);
    if (req.method === "GET") {
        const arr = [];
        prevFiction?.keywords.map((item)=>arr.push(item.keyword?.name));
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
        const similarFictions = await _libs_server_client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].fiction.findMany */ .Z.fiction.findMany({
            where: {
                OR: keywordSame,
                AND: {
                    id: {
                        not: prevFiction?.id
                    }
                }
            }
        });
        similarFictions.map((item)=>arr2.push([
                item.id,
                item.title
            ]));
        const isLiked = Boolean(await _libs_server_client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].fav.findFirst */ .Z.fav.findFirst({
            where: {
                fictionId: prevFiction?.id,
                userId: session?.user?.id
            },
            select: {
                id: true
            }
        }));
        // userfictionstat
        // const ration = await client.userFictionStat.findFirst({
        //   where: {
        //     fictionId: prevFiction?.id,
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
        // userRationOnFiction
        // const userRation = await client.userRationOnFiction.findFirst({
        //   where: {
        //     userId: session?.user?.id,
        //   },
        // });
        res.json({
            ok: true,
            prevFiction,
            isLiked
        });
    }
    if (req.method === "PUT") {
        let { query: { id: id1  } , body: { title , relatedTitle , author , relatedAuthor , nationality , genre , date , currentState , status: [originality, writing, character, verisimilitude, synopsisComposition, value, ] , synopsis , characters , keywords , mcKeywords , subKeywords , consKeywords , original , platforms , thumbId , volume , type , mediaMix , isTranslated , setup ,  } , session: { user: user1  } ,  } = req;
        // console.log(setup);
        genre = genre.split(" ").join("").split(",").filter((item)=>item !== "");
        const genreMany = genre.map((item)=>({
                category: {
                    connectOrCreate: {
                        where: {
                            name: item
                        },
                        create: {
                            name: item
                        }
                    }
                }
            }));
        keywords = keywords.filter((item)=>item !== "");
        const KeywordMany = keywords.map((item)=>({
                keyword: {
                    connectOrCreate: {
                        where: {
                            name: item
                        },
                        create: {
                            name: item
                        }
                    }
                }
            }));
        mcKeywords = mcKeywords.filter((item)=>item !== "");
        const mcKeywordMany = mcKeywords.map((item)=>({
                keyword: {
                    connectOrCreate: {
                        where: {
                            name: item
                        },
                        create: {
                            name: item,
                            isOfMC: true
                        }
                    }
                }
            }));
        subKeywords = subKeywords.filter((item)=>item !== "");
        const subKeywordMany = subKeywords.map((item)=>({
                keyword: {
                    connectOrCreate: {
                        where: {
                            name: item
                        },
                        create: {
                            name: item,
                            isOfHeroine: true
                        }
                    }
                }
            }));
        consKeywords = consKeywords.filter((item)=>item !== "");
        const consKeywordMany = consKeywords.map((item)=>({
                keyword: {
                    connectOrCreate: {
                        where: {
                            name: item
                        },
                        create: {
                            name: item,
                            isOfCons: true
                        }
                    }
                }
            }));
        // const categoryMany = prevFiction?.categories.map((item) => ({
        //   category: {
        //     upsert: {
        //       name: item?.category!.name,
        //     },
        //   },
        // }));
        const fiction = await _libs_server_client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].fiction.update */ .Z.fiction.update({
            where: {
                id: +id1.toString()
            },
            data: {
                title,
                relatedTitle,
                author: {
                    connectOrCreate: {
                        where: {
                            name: author
                        },
                        create: {
                            name: author
                        }
                    }
                },
                relatedAuthor,
                nationality,
                startDate: new Date(date[0]),
                endDate: new Date(date[1]),
                original,
                platforms: platforms[0],
                image: thumbId,
                synopsis,
                characters,
                currentState,
                volume: +volume?.toString(),
                type,
                isTranslated,
                mediaMix,
                setup,
                // categories: {
                //   deleteMany: {
                //     fictionId: +id!.toString(),
                //   },
                //   create: {
                //     category: {
                //       connectOrCreate: {
                //         where: {
                //           name: genre,
                //         },
                //         create: {
                //           name: genre,
                //         },
                //       },
                //     },
                //   },
                // },
                categories: {
                    deleteMany: {
                        fictionId: +id1.toString()
                    },
                    create: [
                        ...genreMany
                    ]
                },
                keywords: {
                    deleteMany: {
                        fictionId: +id1.toString()
                    },
                    create: [
                        ...subKeywordMany,
                        ...mcKeywordMany,
                        ...KeywordMany,
                        ...consKeywordMany, 
                    ]
                },
                fictionStat: {
                    update: {
                        originality: +originality,
                        writing: +writing,
                        character: +character,
                        verisimilitude: +verisimilitude,
                        synopsisComposition: +synopsisComposition,
                        value: +value
                    }
                }
            }
        });
        res.json({
            ok: true,
            fiction
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_server_withSession__WEBPACK_IMPORTED_MODULE_1__/* .withApiSession */ .u)((0,_libs_server_withHandler__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
    methods: [
        "GET",
        "PUT"
    ],
    handler
})));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [534,17], () => (__webpack_exec__(7468)));
module.exports = __webpack_exports__;

})();