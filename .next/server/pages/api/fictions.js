"use strict";
(() => {
var exports = {};
exports.id = 136;
exports.ids = [136];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 4014:
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

/***/ 6972:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libs_server_withHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9142);
/* harmony import */ var _libs_server_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5132);
/* harmony import */ var _libs_server_withSession__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2879);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_server_withSession__WEBPACK_IMPORTED_MODULE_1__]);
_libs_server_withSession__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



async function handler(req, res) {
    if (req.method === "GET") {
        let { query: { keywords , genres , nationalities , sorting , page  } ,  } = req;
        if (nationalities === "all") nationalities = "";
        if (genres === "all") genres = "";
        if (keywords === "all") keywords = "";
        // if (sorting === "all") keywords = "";
        // console.log(sorting);
        const keywordMany = keywords?.toString().split(",").map((item)=>({
                keywords: {
                    some: {
                        keyword: {
                            name: item || undefined
                        }
                    }
                }
            })) || [];
        const genresMany = genres?.toString().split(",").map((item)=>({
                categories: {
                    some: {
                        category: {
                            name: item || undefined
                        }
                    }
                }
            })) || [];
        const nationalitiesMany = nationalities?.toString().split(",").map((item)=>({
                nationality: item || undefined
            })) || [];
        const sortingOne = function() {
            if (sorting === "총점" || "") {
                return {
                    orderBy: {
                        userFictionStat: {
                            total: "desc"
                        }
                    }
                };
            } else if (sorting === "캐릭터성") {
                return {
                    orderBy: {
                        userFictionStat: {
                            character: "desc"
                        }
                    }
                };
            } else if (sorting === "오리지널리티") {
                return {
                    orderBy: {
                        userFictionStat: {
                            originality: "desc"
                        }
                    }
                };
            } else if (sorting === "스토리") {
                return {
                    orderBy: {
                        userFictionStat: {
                            synopsisComposition: "desc"
                        }
                    }
                };
            } else if (sorting === "작품성") {
                return {
                    orderBy: {
                        userFictionStat: {
                            value: "desc"
                        }
                    }
                };
            } else if (sorting === "핍진성") {
                return {
                    orderBy: {
                        userFictionStat: {
                            verisimilitude: "desc"
                        }
                    }
                };
            } else if (sorting === "필력") {
                return {
                    orderBy: {
                        userFictionStat: {
                            writing: "desc"
                        }
                    }
                };
            } else if (sorting === "화수") {
                return {
                    orderBy: {
                        volume: "desc"
                    }
                };
            } else {
                return undefined;
            }
        };
        const fictions = await _libs_server_client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].fiction.findMany */ .Z.fiction.findMany({
            take: 18,
            skip: (+page.toString() - 1 || 0) * 18,
            where: {
                AND: [
                    {
                        OR: [
                            ...genresMany
                        ]
                    },
                    {
                        OR: [
                            ...nationalitiesMany
                        ]
                    },
                    {
                        AND: [
                            ...keywordMany
                        ]
                    }, 
                ]
            },
            include: {
                _count: {
                    select: {
                        favs: true
                    }
                },
                author: true,
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
                        keyword: true
                    }
                },
                categories: {
                    include: {
                        category: true
                    }
                }
            },
            ...sortingOne()
        });
        const fictionsCount = await _libs_server_client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].fiction.count */ .Z.fiction.count({
            where: {
                AND: [
                    {
                        OR: [
                            ...genresMany
                        ]
                    },
                    {
                        OR: [
                            ...nationalitiesMany
                        ]
                    },
                    {
                        AND: [
                            ...keywordMany
                        ]
                    }, 
                ]
            }
        });
        // console.log(fictionsCount);
        // console.log(sorting);
        // console.log(fictions);
        // const fictionsCount = await client.fiction.count({});
        res.json({
            ok: true,
            fictions,
            fictionsCount
        });
    }
    if (req.method === "POST") {
        let { body: { title , relatedTitle , author , relatedAuthor , nationality , genre , date , currentState , status: [originality, writing, character, verisimilitude, synopsisComposition, value, ] , synopsis , characters , keywords: keywords1 , mcKeywords , subKeywords , consKeywords , original , platforms , thumbId , volume , isTranslated , type , mediaMix , setup ,  } , session: { user  } ,  } = req;
        // console.log(genre);
        genre = genre.split(" ").join("").split(",").filter((item)=>item !== "");
        // console.log(genre);
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
        keywords1 = keywords1.filter((item)=>item !== "");
        const keywordMany1 = keywords1.map((item)=>({
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
        const fiction = await _libs_server_client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].fiction.create */ .Z.fiction.create({
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
                genre: "",
                startDate: new Date(date[0]),
                endDate: new Date(date[1]),
                original,
                platforms: platforms[0],
                image: thumbId,
                synopsis,
                characters,
                currentState,
                volume: +volume?.toString(),
                isTranslated,
                type,
                mediaMix,
                setup,
                categories: {
                    // create: { category: { create: { name: genre } } },
                    create: // category: {
                    //   connectOrCreate: {
                    //     where: {
                    //       name: genre,
                    //     },
                    //     create: {
                    //       name: genre,
                    //     },
                    //   },
                    // },
                    [
                        ...genreMany
                    ]
                },
                keywords: {
                    create: [
                        ...subKeywordMany,
                        ...mcKeywordMany,
                        ...keywordMany1,
                        ...consKeywordMany, 
                    ]
                },
                fictionStat: {
                    create: {
                        originality: +originality,
                        writing: +writing,
                        character: +character,
                        verisimilitude: +verisimilitude,
                        synopsisComposition: +synopsisComposition,
                        value: +value
                    }
                },
                user: {
                    connect: {
                        id: user?.id
                    }
                }
            }
        });
        // console.log(fiction);
        await res.revalidate("/fictions");
        res.json({
            ok: true,
            fiction
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_server_withSession__WEBPACK_IMPORTED_MODULE_1__/* .withApiSession */ .u)((0,_libs_server_withHandler__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    methods: [
        "GET",
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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [534,17], () => (__webpack_exec__(6972)));
module.exports = __webpack_exports__;

})();