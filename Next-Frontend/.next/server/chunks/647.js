"use strict";
exports.id = 647;
exports.ids = [647];
exports.modules = {

/***/ 34647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeaturedCard: () => (/* binding */ FeaturedCard),
/* harmony export */   FeaturedQuestions: () => (/* binding */ FeaturedQuestions),
/* harmony export */   ListViewCard: () => (/* binding */ ListViewCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Config_ApiConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1222);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57554);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38000);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* __next_internal_client_entry_do_not_use__ ListViewCard,FeaturedCard,FeaturedQuestions auto */ 







const ListViewCard = ({ Title, Category, description })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__/* .motion */ .E.div, {
            initial: {
                opacity: 0
            },
            whileInView: {
                opacity: 1
            },
            className: "flex flex-col justify-between items-center  rounded-lg w-full min-h-[100px] h-max bg-white shadow-lg shadow-orange-400 cursor-pointer  transition-all ease-in-out delay-0  m",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex-grow max-md:w-full w-[800px] text-sm font-mono font-bold text-orange-500 bg-slate-900 p-4 rounded-lg h-[80px] overflow-hidden relative",
                children: [
                    (0,html_react_parser__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(Title),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex-grow max-md:w-full w-[800px] flex flex-col justify-center items-center ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "absolute bottom-0 right-0 bg-white font-mono p-2 text-red-600 z-999 text-sm",
                            children: Category
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: " text-slate-400 text-sm ",
                        children: description && (0,html_react_parser__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(description)
                    })
                ]
            })
        })
    });
};
const FeaturedCard = ({ Title, Category })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_6__/* .motion */ .E.div, {
            initial: {
                opacity: 0
            },
            whileInView: {
                opacity: 1
            },
            className: "flex flex-col justify-between items-center  rounded-lg w-[200px] h-[200px] bg-white shadow-lg shadow-orange-400 cursor-pointer hover:-translate-y-2 transition-all ease-in-out delay-0 ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " text-sm font-mono font-bold text-orange-500 bg-slate-900 p-4 rounded-lg w-full h-[75%]",
                    children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(Title)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-lg font-mono p-2",
                    children: Category
                })
            ]
        })
    });
};
const FeaturedQuestions = (props)=>{
    const [featured, setFeatured] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let Fetch = async ()=>{
            const featuredProblems = await _Config_ApiConfig__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.get("/api/question/featured_problems");
            const data = await featuredProblems.data;
            setFeatured(data.featured);
            return data;
        };
        Fetch();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex flex-col w-full overflow-x-scroll flex-wrap scroll-x-none ",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            // initial={{ x: "50vw" }}
            // animate={{ x: 0, animationDuration: "5s" }}
            // transition={{
            //   ease: "easeIn",
            //   duration: 5,
            // }}
            className: "flex flex-row gap-4 p-2  w-full justify-start items-center h-[300px]  ",
            children: featured ? featured.map((item)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                        href: `/${item.category.title}/${item.id}`,
                        passHref: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FeaturedCard, {
                            Title: item.title,
                            Category: item.category.title
                        })
                    })
                });
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-row justify-center items-center w-full",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                    src: "/loading.svg",
                    width: 100,
                    height: 100,
                    alt: ""
                })
            })
        })
    });
};


/***/ })

};
;