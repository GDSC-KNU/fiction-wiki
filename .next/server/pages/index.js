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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Carousel.tsx":
/*!*********************************!*\
  !*** ./components/Carousel.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Carousel)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Carousel() {\n    const { 0: currentSlide , 1: setCurrentSlide  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const slideRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(\"\");\n    const TOTAL_SLIDES = 2;\n    //   const slideI = () => {\n    //     let pos = 0;\n    //     setInterval(() => {\n    //       pos = (pos + 1) % 4;\n    //       let target = document.querySelector(`#img_div_${pos}`);\n    //       target?.classList.add(\"-ml-[100%]\");\n    //     }, 2000);\n    //   };\n    const nextSlide = ()=>{\n        if (currentSlide >= TOTAL_SLIDES) {\n            setCurrentSlide(0);\n        } else {\n            setCurrentSlide(currentSlide + 1);\n        }\n    };\n    const prevSlide = ()=>{\n        if (currentSlide === 0) {\n            setCurrentSlide(TOTAL_SLIDES);\n        } else {\n            setCurrentSlide(currentSlide - 1);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(currentSlide);\n        slideRef.current = `-ml-[${100 * currentSlide}%]`;\n        console.log(slideRef);\n        let imgCon = document.querySelector(\"#img_container\");\n        imgCon?.classList.remove(\"-ml-[0%]\");\n        imgCon?.classList.remove(\"-ml-[100%]\");\n        imgCon?.classList.remove(\"-ml-[200%]\");\n        imgCon?.classList.remove(\"-ml-[300%]\");\n        imgCon?.classList.add(slideRef.current);\n    }, [\n        currentSlide\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" h-[45vh] overflow-hidden w-[100%] max-h-[250px] min-h-[213px] !mx-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" overflow-hidden flex w-[300%] transition-all duration-1000\",\n                id: \"img_container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" h-[250px] w-[100%] \",\n                        id: \"img_div_1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://picsum.photos/1422/362?random=1\",\n                            className: \" h-full w-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" h-[250px] w-[100%] \",\n                        id: \"img_div_2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://picsum.photos/1422/362?random=2\",\n                            className: \" h-full w-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" h-[250px] w-[100%] \",\n                        id: \"img_div_3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://picsum.photos/1422/362?random=3\",\n                            className: \" h-full w-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between mx-5 space-x-8 relative bottom-36 opacity-60\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: prevSlide,\n                        className: \" bg-gray-400 border-solid px-2 py-5 hover:bg-white transition-all rounded-xl font-bold\",\n                        children: \"<\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: nextSlide,\n                        className: \" bg-gray-500 border-solid px-2 py-5 hover:bg-white transition-all rounded-xl font-bold\",\n                        children: \">\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\components\\\\Carousel.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nhcm91c2VsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUQ7QUFFcEMsUUFBUSxDQUFDRyxRQUFRLEdBQUcsQ0FBQztJQUNsQyxLQUFLLE1BQUVDLFlBQVksTUFBRUMsZUFBZSxNQUFJTCwrQ0FBUSxDQUFDLENBQUM7SUFDbEQsS0FBSyxDQUFDTSxRQUFRLEdBQUdKLDZDQUFNLENBQUMsQ0FBRTtJQUUxQixLQUFLLENBQUNLLFlBQVksR0FBRyxDQUFDO0lBRXRCLEVBQTJCO0lBQzNCLEVBQW1CO0lBQ25CLEVBQTBCO0lBQzFCLEVBQTZCO0lBQzdCLEVBQWdFO0lBQ2hFLEVBQTZDO0lBQzdDLEVBQWdCO0lBQ2hCLEVBQU87SUFFUCxLQUFLLENBQUNDLFNBQVMsT0FBUyxDQUFDO1FBQ3ZCLEVBQUUsRUFBRUosWUFBWSxJQUFJRyxZQUFZLEVBQUUsQ0FBQztZQUNqQ0YsZUFBZSxDQUFDLENBQUM7UUFDbkIsQ0FBQyxNQUFNLENBQUM7WUFDTkEsZUFBZSxDQUFDRCxZQUFZLEdBQUcsQ0FBQztRQUNsQyxDQUFDO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQ0ssU0FBUyxPQUFTLENBQUM7UUFDdkIsRUFBRSxFQUFFTCxZQUFZLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDdkJDLGVBQWUsQ0FBQ0UsWUFBWTtRQUM5QixDQUFDLE1BQU0sQ0FBQztZQUNORixlQUFlLENBQUNELFlBQVksR0FBRyxDQUFDO1FBQ2xDLENBQUM7SUFDSCxDQUFDO0lBRURILGdEQUFTLEtBQU8sQ0FBQztRQUNmUyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsWUFBWTtRQUN4QkUsUUFBUSxDQUFDTSxPQUFPLElBQUksS0FBSyxFQUFFLEdBQUcsR0FBR1IsWUFBWSxDQUFDLEVBQUU7UUFDaERNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxRQUFRO1FBQ3BCLEdBQUcsQ0FBQ08sTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxDQUFnQjtRQUNwREYsTUFBTSxFQUFFRyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxDQUFVO1FBQ25DSixNQUFNLEVBQUVHLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLENBQVk7UUFDckNKLE1BQU0sRUFBRUcsU0FBUyxDQUFDQyxNQUFNLENBQUMsQ0FBWTtRQUNyQ0osTUFBTSxFQUFFRyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxDQUFZO1FBQ3JDSixNQUFNLEVBQUVHLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDWixRQUFRLENBQUNNLE9BQU87SUFDeEMsQ0FBQyxFQUFFLENBQUNSO1FBQUFBLFlBQVk7SUFBQSxDQUFDO0lBRWpCLE1BQU0sNkVBQ0hlLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQXNFOzt3RkFDbEZELENBQUc7Z0JBQ0ZDLFNBQVMsRUFBQyxDQUE2RDtnQkFDdkVDLEVBQUUsRUFBQyxDQUFlOztnR0FFakJGLENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFzQjt3QkFBQ0MsRUFBRSxFQUFDLENBQVc7OEdBQ2pEQyxDQUFHOzRCQUNGQyxHQUFHLEVBQUMsQ0FBeUM7NEJBQzdDSCxTQUFTLEVBQUMsQ0FBZ0I7Ozs7Ozs7Ozs7O2dHQUc3QkQsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQXNCO3dCQUFDQyxFQUFFLEVBQUMsQ0FBVzs4R0FDakRDLENBQUc7NEJBQ0ZDLEdBQUcsRUFBQyxDQUF5Qzs0QkFDN0NILFNBQVMsRUFBQyxDQUFnQjs7Ozs7Ozs7Ozs7Z0dBRzdCRCxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBc0I7d0JBQUNDLEVBQUUsRUFBQyxDQUFXOzhHQUNqREMsQ0FBRzs0QkFDRkMsR0FBRyxFQUFDLENBQXlDOzRCQUM3Q0gsU0FBUyxFQUFDLENBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFLL0JELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFtRTs7Z0dBQy9FSSxDQUFNO3dCQUNMQyxPQUFPLEVBQUVoQixTQUFTO3dCQUNsQlcsU0FBUyxFQUFDLENBQXlGO2tDQUNwRyxDQUVEOzs7Ozs7Z0dBQ0NJLENBQU07d0JBQ0xDLE9BQU8sRUFBRWpCLFNBQVM7d0JBQ2xCWSxTQUFTLEVBQUMsQ0FBd0Y7a0NBQ25HLENBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlSLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJyb3QtbWFya2V0Ly4vY29tcG9uZW50cy9DYXJvdXNlbC50c3g/M2UyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcm91c2VsKCkge1xyXG4gIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBzbGlkZVJlZiA9IHVzZVJlZihcIlwiKTtcclxuXHJcbiAgY29uc3QgVE9UQUxfU0xJREVTID0gMjtcclxuXHJcbiAgLy8gICBjb25zdCBzbGlkZUkgPSAoKSA9PiB7XHJcbiAgLy8gICAgIGxldCBwb3MgPSAwO1xyXG4gIC8vICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgLy8gICAgICAgcG9zID0gKHBvcyArIDEpICUgNDtcclxuICAvLyAgICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2ltZ19kaXZfJHtwb3N9YCk7XHJcbiAgLy8gICAgICAgdGFyZ2V0Py5jbGFzc0xpc3QuYWRkKFwiLW1sLVsxMDAlXVwiKTtcclxuICAvLyAgICAgfSwgMjAwMCk7XHJcbiAgLy8gICB9O1xyXG5cclxuICBjb25zdCBuZXh0U2xpZGUgPSAoKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudFNsaWRlID49IFRPVEFMX1NMSURFUykge1xyXG4gICAgICBzZXRDdXJyZW50U2xpZGUoMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRDdXJyZW50U2xpZGUoY3VycmVudFNsaWRlICsgMSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcHJldlNsaWRlID0gKCkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnRTbGlkZSA9PT0gMCkge1xyXG4gICAgICBzZXRDdXJyZW50U2xpZGUoVE9UQUxfU0xJREVTKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEN1cnJlbnRTbGlkZShjdXJyZW50U2xpZGUgLSAxKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coY3VycmVudFNsaWRlKTtcclxuICAgIHNsaWRlUmVmLmN1cnJlbnQgPSBgLW1sLVskezEwMCAqIGN1cnJlbnRTbGlkZX0lXWA7XHJcbiAgICBjb25zb2xlLmxvZyhzbGlkZVJlZik7XHJcbiAgICBsZXQgaW1nQ29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWdfY29udGFpbmVyXCIpO1xyXG4gICAgaW1nQ29uPy5jbGFzc0xpc3QucmVtb3ZlKFwiLW1sLVswJV1cIik7XHJcbiAgICBpbWdDb24/LmNsYXNzTGlzdC5yZW1vdmUoXCItbWwtWzEwMCVdXCIpO1xyXG4gICAgaW1nQ29uPy5jbGFzc0xpc3QucmVtb3ZlKFwiLW1sLVsyMDAlXVwiKTtcclxuICAgIGltZ0Nvbj8uY2xhc3NMaXN0LnJlbW92ZShcIi1tbC1bMzAwJV1cIik7XHJcbiAgICBpbWdDb24/LmNsYXNzTGlzdC5hZGQoc2xpZGVSZWYuY3VycmVudCk7XHJcbiAgfSwgW2N1cnJlbnRTbGlkZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgaC1bNDV2aF0gb3ZlcmZsb3ctaGlkZGVuIHctWzEwMCVdIG1heC1oLVsyNTBweF0gbWluLWgtWzIxM3B4XSAhbXgtMFwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiIG92ZXJmbG93LWhpZGRlbiBmbGV4IHctWzMwMCVdIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTEwMDBcIlxyXG4gICAgICAgIGlkPVwiaW1nX2NvbnRhaW5lclwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLVsyNTBweF0gdy1bMTAwJV0gXCIgaWQ9XCJpbWdfZGl2XzFcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzE0MjIvMzYyP3JhbmRvbT0xXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGgtZnVsbCB3LWZ1bGxcIlxyXG4gICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGgtWzI1MHB4XSB3LVsxMDAlXSBcIiBpZD1cImltZ19kaXZfMlwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3BpY3N1bS5waG90b3MvMTQyMi8zNjI/cmFuZG9tPTJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgaC1mdWxsIHctZnVsbFwiXHJcbiAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgaC1bMjUwcHhdIHctWzEwMCVdIFwiIGlkPVwiaW1nX2Rpdl8zXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xNDIyLzM2Mj9yYW5kb209M1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBoLWZ1bGwgdy1mdWxsXCJcclxuICAgICAgICAgID48L2ltZz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG14LTUgc3BhY2UteC04IHJlbGF0aXZlIGJvdHRvbS0zNiBvcGFjaXR5LTYwXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17cHJldlNsaWRlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIGJnLWdyYXktNDAwIGJvcmRlci1zb2xpZCBweC0yIHB5LTUgaG92ZXI6Ymctd2hpdGUgdHJhbnNpdGlvbi1hbGwgIHJvdW5kZWQteGwgZm9udC1ib2xkXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAmbHQ7XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17bmV4dFNsaWRlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIGJnLWdyYXktNTAwIGJvcmRlci1zb2xpZCBweC0yIHB5LTUgaG92ZXI6Ymctd2hpdGUgdHJhbnNpdGlvbi1hbGwgcm91bmRlZC14bCBmb250LWJvbGRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICZndDtcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkNhcm91c2VsIiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwic2xpZGVSZWYiLCJUT1RBTF9TTElERVMiLCJuZXh0U2xpZGUiLCJwcmV2U2xpZGUiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsImltZ0NvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiaW1nIiwic3JjIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Carousel.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Carousel */ \"./components/Carousel.tsx\");\n\n\nconst Home = ()=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Carousel__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\index.tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, undefined),\n            \"It's Home Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \\\"de Finibus Bonorum et Malorum\\\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \\\"Lorem ipsum dolor sit amet..\\\", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \\\"de Finibus Bonorum et Malorum\\\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mk448\\\\Dv_study\\\\fictiondbs_carrot_ver\\\\pages\\\\index.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDNkM7QUFFN0MsS0FBSyxDQUFDQyxJQUFJLE9BQW1CLENBQUM7SUFDNUIsTUFBTSw2RUFDSEMsQ0FBRzs7d0ZBQ0RGLDREQUFROzs7OztZQUFHLENBaUNkOzs7Ozs7O0FBRUosQ0FBQztBQUVELGlFQUFlQyxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJyb3QtbWFya2V0Ly4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2Fyb3VzZWxcIjtcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxDYXJvdXNlbCAvPlxuICAgICAgSXQncyBIb21lIExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmdcbiAgICAgIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXJcbiAgICAgIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZFxuICAgICAgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlXG4gICAgICBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nXG4gICAgICBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZlxuICAgICAgTGV0cmFzZXQgc2hlZXRzIGNvbnRhaW5pbmcgTG9yZW0gSXBzdW0gcGFzc2FnZXMsIGFuZCBtb3JlIHJlY2VudGx5IHdpdGhcbiAgICAgIGRlc2t0b3AgcHVibGlzaGluZyBzb2Z0d2FyZSBsaWtlIEFsZHVzIFBhZ2VNYWtlciBpbmNsdWRpbmcgdmVyc2lvbnMgb2ZcbiAgICAgIExvcmVtIElwc3VtLiBXaHkgZG8gd2UgdXNlIGl0PyBJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyXG4gICAgICB3aWxsIGJlIGRpc3RyYWN0ZWQgYnkgdGhlIHJlYWRhYmxlIGNvbnRlbnQgb2YgYSBwYWdlIHdoZW4gbG9va2luZyBhdCBpdHNcbiAgICAgIGxheW91dC4gVGhlIHBvaW50IG9mIHVzaW5nIExvcmVtIElwc3VtIGlzIHRoYXQgaXQgaGFzIGEgbW9yZS1vci1sZXNzXG4gICAgICBub3JtYWwgZGlzdHJpYnV0aW9uIG9mIGxldHRlcnMsIGFzIG9wcG9zZWQgdG8gdXNpbmcgJ0NvbnRlbnQgaGVyZSwgY29udGVudFxuICAgICAgaGVyZScsIG1ha2luZyBpdCBsb29rIGxpa2UgcmVhZGFibGUgRW5nbGlzaC4gTWFueSBkZXNrdG9wIHB1Ymxpc2hpbmdcbiAgICAgIHBhY2thZ2VzIGFuZCB3ZWIgcGFnZSBlZGl0b3JzIG5vdyB1c2UgTG9yZW0gSXBzdW0gYXMgdGhlaXIgZGVmYXVsdCBtb2RlbFxuICAgICAgdGV4dCwgYW5kIGEgc2VhcmNoIGZvciAnbG9yZW0gaXBzdW0nIHdpbGwgdW5jb3ZlciBtYW55IHdlYiBzaXRlcyBzdGlsbCBpblxuICAgICAgdGhlaXIgaW5mYW5jeS4gVmFyaW91cyB2ZXJzaW9ucyBoYXZlIGV2b2x2ZWQgb3ZlciB0aGUgeWVhcnMsIHNvbWV0aW1lcyBieVxuICAgICAgYWNjaWRlbnQsIHNvbWV0aW1lcyBvbiBwdXJwb3NlIChpbmplY3RlZCBodW1vdXIgYW5kIHRoZSBsaWtlKS4gV2hlcmUgZG9lc1xuICAgICAgaXQgY29tZSBmcm9tPyBDb250cmFyeSB0byBwb3B1bGFyIGJlbGllZiwgTG9yZW0gSXBzdW0gaXMgbm90IHNpbXBseSByYW5kb21cbiAgICAgIHRleHQuIEl0IGhhcyByb290cyBpbiBhIHBpZWNlIG9mIGNsYXNzaWNhbCBMYXRpbiBsaXRlcmF0dXJlIGZyb20gNDUgQkMsXG4gICAgICBtYWtpbmcgaXQgb3ZlciAyMDAwIHllYXJzIG9sZC4gUmljaGFyZCBNY0NsaW50b2NrLCBhIExhdGluIHByb2Zlc3NvciBhdFxuICAgICAgSGFtcGRlbi1TeWRuZXkgQ29sbGVnZSBpbiBWaXJnaW5pYSwgbG9va2VkIHVwIG9uZSBvZiB0aGUgbW9yZSBvYnNjdXJlXG4gICAgICBMYXRpbiB3b3JkcywgY29uc2VjdGV0dXIsIGZyb20gYSBMb3JlbSBJcHN1bSBwYXNzYWdlLCBhbmQgZ29pbmcgdGhyb3VnaFxuICAgICAgdGhlIGNpdGVzIG9mIHRoZSB3b3JkIGluIGNsYXNzaWNhbCBsaXRlcmF0dXJlLCBkaXNjb3ZlcmVkIHRoZSB1bmRvdWJ0YWJsZVxuICAgICAgc291cmNlLiBMb3JlbSBJcHN1bSBjb21lcyBmcm9tIHNlY3Rpb25zIDEuMTAuMzIgYW5kIDEuMTAuMzMgb2YgXCJkZSBGaW5pYnVzXG4gICAgICBCb25vcnVtIGV0IE1hbG9ydW1cIiAoVGhlIEV4dHJlbWVzIG9mIEdvb2QgYW5kIEV2aWwpIGJ5IENpY2Vybywgd3JpdHRlbiBpblxuICAgICAgNDUgQkMuIFRoaXMgYm9vayBpcyBhIHRyZWF0aXNlIG9uIHRoZSB0aGVvcnkgb2YgZXRoaWNzLCB2ZXJ5IHBvcHVsYXJcbiAgICAgIGR1cmluZyB0aGUgUmVuYWlzc2FuY2UuIFRoZSBmaXJzdCBsaW5lIG9mIExvcmVtIElwc3VtLCBcIkxvcmVtIGlwc3VtIGRvbG9yXG4gICAgICBzaXQgYW1ldC4uXCIsIGNvbWVzIGZyb20gYSBsaW5lIGluIHNlY3Rpb24gMS4xMC4zMi4gVGhlIHN0YW5kYXJkIGNodW5rIG9mXG4gICAgICBMb3JlbSBJcHN1bSB1c2VkIHNpbmNlIHRoZSAxNTAwcyBpcyByZXByb2R1Y2VkIGJlbG93IGZvciB0aG9zZSBpbnRlcmVzdGVkLlxuICAgICAgU2VjdGlvbnMgMS4xMC4zMiBhbmQgMS4xMC4zMyBmcm9tIFwiZGUgRmluaWJ1cyBCb25vcnVtIGV0IE1hbG9ydW1cIiBieVxuICAgICAgQ2ljZXJvIGFyZSBhbHNvIHJlcHJvZHVjZWQgaW4gdGhlaXIgZXhhY3Qgb3JpZ2luYWwgZm9ybSwgYWNjb21wYW5pZWQgYnlcbiAgICAgIEVuZ2xpc2ggdmVyc2lvbnMgZnJvbSB0aGUgMTkxNCB0cmFuc2xhdGlvbiBieSBILiBSYWNraGFtLlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJDYXJvdXNlbCIsIkhvbWUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();