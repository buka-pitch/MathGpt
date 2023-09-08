exports.id = 936;
exports.ids = [936];
exports.modules = {

/***/ 35291:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 23876));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 93235))

/***/ }),

/***/ 27934:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 4966:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 73380, 23))

/***/ }),

/***/ 1222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93258);

const BaseUrl = "http://free-space.tech:5000";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.create({
    baseURL: BaseUrl
}));


/***/ }),

/***/ 93235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FloatingAiChat: () => (/* binding */ FloatingAiChat)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Config_ApiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1222);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32695);
/* __next_internal_client_entry_do_not_use__ FloatingAiChat auto */ 



function ChatBox() {
    let chatRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    let focusRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    let [chatHistory, setChatHistory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([
        {
            from: "Ai",
            message: "hey there! what can i help?"
        }
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        setChatHistory((prev)=>[
                {
                    from: "you",
                    message: chatRef.current?.value
                },
                ...prev
            ]);
        let res = await _Config_ApiConfig__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get("/api/ai/prompt/" + chatRef?.current?.value);
        let ai = await res.data;
        setChatHistory((prev)=>[
                {
                    from: "Ai",
                    message: ai?.data
                },
                ...prev
            ]);
        setIsLoading(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "Ai",
        className: "flex flex-col w-[400px] h-[500px] bg-slate-300 justify-center items-center relative rounded-lg shadow-md shadow-cyan-500 overflow-hidden ",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "absolute top-4 border-b-2 border-cyan-400",
                children: [
                    " ",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row pl-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: " font-bold text-2xl text-orange-400",
                                children: "Math"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-black font-extrabold text-2xl bg-orange-500 rounded-lg px-1 ",
                                children: "Gpt"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-[80%] overflow-scroll w-full pt-20  flex flex-col justify-start items-start gap-2 pl-5",
                children: chatHistory && chatHistory.map((chat, index)=>{
                    if (chat.from === "you") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: " right-2 flex flex-col justify-center items-center bg-cyan-200 rounded-lg  p-4 m-1",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-xs text-orange-500",
                                    children: chat.from
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: chat.message
                                })
                            ]
                        })
                    }, index);
                    if (chat.from === "Ai") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: " left-2 flex flex-col justify-center items-center bg-white rounded-lg  p-3 m-1",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: " ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: " text-xs text-orange-600",
                                    children: chat.from
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: chat.message
                                })
                            ]
                        })
                    }, index);
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit,
                action: "",
                className: "absolute bottom-0 w-full flex flex-row justify-center items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        className: "flex-grow h-[50px] bg-white hover:outline-none p-2 outline-none",
                        placeholder: "Ask Mathgpt Ai",
                        ref: chatRef,
                        required: true
                    }),
                    isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: "flex-1 p-2 bg-green-500 h-[50px] w-[30px] flex justify-center items-center",
                        disabled: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__/* .BiBlock */ .mkc, {
                            size: 25
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: "flex-1 p-2 bg-green-500 h-[50px] w-[30px] flex justify-center items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__/* .BiSend */ .PRb, {
                            size: 25
                        })
                    })
                ]
            })
        ]
    });
}
function FloatingAiChat({}) {
    const [chatOpened, setChatOpened] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `fixed right-0  bottom-2  p-2 z-[900] flex flex-col justify-center items-center gap-4`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "bg-white rounded-lg p-2",
                children: "Ask MatGpt Ai"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-row justify-center items-center bg-cyan-400 w-[50px] h-[50px] rounded-full p-2 shadow-md shadow-orange-400 animate-pulse cursor-pointer hover:bg-cyan-500 hover:m-2",
                onClick: ()=>{
                    setChatOpened((prev)=>!prev);
                },
                children: chatOpened ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__/* .BiX */ .czh, {
                        title: "close chat box"
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__/* .BiMessage */ .GQN, {
                        title: "Ask MathGpt Ai",
                        size: 30
                    })
                })
            }),
            chatOpened && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChatBox, {})
        ]
    });
}


/***/ }),

/***/ 23876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Navbar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
;// CONCATENATED MODULE: ./Constants/MenuContents.ts
const NavBarMenuContents = [
    {
        title: "HOME",
        href: "/"
    },
    {
        title: "Questions",
        href: "/#questions"
    },
    {
        title: "Ai",
        href: "/#Ai"
    },
    {
        title: "About",
        href: "/home"
    }
];

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./Hooks/useMediaQuery.ts

// useWindowDimension.js
function useMediaQuery() {
    const [width, setWidth] = (0,react_.useState)();
    const [height, setHeight] = (0,react_.useState)();
    (0,react_.useEffect)(()=>{
        const updateDimensions = ()=>{
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return ()=>window.removeEventListener("resize", updateDimensions);
    }, []);
    return {
        width,
        height
    };
}

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 202 modules
var motion = __webpack_require__(38000);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/react-icons/bi/index.esm.js
var index_esm = __webpack_require__(32695);
;// CONCATENATED MODULE: ./components/Navbar.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






function Navbar() {
    const [menuToggled, setMenuToggled] = (0,react_.useState)(false);
    const mediaQuery = useMediaQuery();
    let isMobile = mediaQuery?.width && mediaQuery?.width;
    function ToggleMenu() {
        setMenuToggled((prev)=>!prev);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-row items-center justify-between w-full h-full p-2 px-4 border-b-2 border-orange-400 shadow-md shadow-orange-300 bg-slate-900 ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-row pl-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: " font-bold text-2xl text-orange-400",
                            children: "Math"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "text-black font-extrabold text-2xl bg-orange-500 rounded-lg px-1 ",
                            children: "Gpt"
                        })
                    ]
                })
            }),
            isMobile < 640 && !menuToggled && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "pr-2 cursor-pointer",
                onClick: ToggleMenu,
                children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* BiMenuAltLeft */.HjU, {
                    color: "gold",
                    size: "40"
                })
            }),
            isMobile < 640 && menuToggled && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "pr-2 cursor-pointer",
                onClick: ToggleMenu,
                children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* BiMenuAltRight */.fdF, {
                    color: "gold",
                    size: "40"
                })
            }),
            isMobile > 640 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-row gap-6",
                children: NavBarMenuContents.map((item)=>{
                    if (item.title === "Login / Join") {
                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: item.href,
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-black font-bold font-serif hover:bg-green-700 bg-green-500 rounded-lg p-2 absolute right-10 top-16 animate-bounce transition-all",
                                    children: item.title
                                })
                            })
                        }, item.title);
                    }
                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: item.href,
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-orange-400 font-bold font-serif hover:text-yellow-400 ",
                                children: item.title
                            })
                        })
                    }, item.title);
                })
            }),
            menuToggled && /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                initial: {
                    x: "100vw",
                    y: "-50vh"
                },
                animate: {
                    x: 0,
                    y: 0,
                    animationDuration: "5s"
                },
                transition: {
                    type: "twin",
                    stiffness: 50
                },
                className: " h-max w-full bg-slate-900 absolute top-10 right-10 p-4 border-2 border-yellow-300 shadow-lg shadow-orange-500 z-50 ",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-col justify-center items-center w-full ",
                    children: NavBarMenuContents.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex flex-col justify-center items-center cursor-pointer w-full",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: item.href,
                                className: "w-full flex flex-col justify-center items-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.h1, {
                                    initial: {
                                        y: -500
                                    },
                                    animate: {
                                        y: 0
                                    },
                                    whileHover: {
                                        backgroundColor: "ThreeDShadow"
                                    },
                                    transition: {
                                        type: "tween",
                                        delay: 0.5
                                    },
                                    className: "p-4 hover:text-orange-500 font-extrabold text-2xl text-yellow-600 hover:text-3xl w-full text-center",
                                    children: item.title
                                })
                            })
                        }, item.title))
                })
            })
        ]
    });
}
/* harmony default export */ const components_Navbar = (Navbar);


/***/ }),

/***/ 1159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app/layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(59160);
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./components/Navbar.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/syco/project/pyai/MathGpt/MathGpt/Next-Frontend/components/Navbar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Navbar = (__default__);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(67272);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(62947);
;// CONCATENATED MODULE: ./components/Fotter.tsx


function Fotter() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-row min-h-[30vh] w-full bg-slate-900 border-t-2 border-orange-500 shadow-md shadow-orange-500 relative",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "absolute top-0 border-b-2 border-orange-600 shadow-sm shadow-orange-500 p-2 w-full flex items-center justify-between text-slate-300 font-serif text-lg",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-row pl-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: " font-bold text-2xl text-orange-400",
                                children: "Math"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-black font-extrabold text-2xl bg-orange-500 rounded-lg px-1 cursor-pointer",
                                children: "Gpt"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "pr-4",
                        children: "Powered by PALM AI"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-row gap-4 justify-center items-center mt-12 w-full p-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex-1 text-slate-400 text-sm",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: "MathGpt is an AI-powered math learning platform that helps students of all levels understand and master math concepts."
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex-1",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: " text-slate-400 text-sm",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: "MathGpt uses artificial intelligence to identify students' strengths and weaknesses and provide them with the customized support they need to succeed."
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex-1",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: " text-slate-400 text-sm",
                            children: "offers a variety of interactive exercises and activities that allow students to learn at their own pace and in a way that is most engaging for them."
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const components_Fotter = (Fotter);

;// CONCATENATED MODULE: ./components/FloatingAiChat.tsx

const FloatingAiChat_proxy = (0,module_proxy.createProxy)(String.raw`/home/syco/project/pyai/MathGpt/MathGpt/Next-Frontend/components/FloatingAiChat.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: FloatingAiChat_esModule, $$typeof: FloatingAiChat_$$typeof } = FloatingAiChat_proxy;
const FloatingAiChat_default_ = FloatingAiChat_proxy.default;

const e0 = FloatingAiChat_proxy["FloatingAiChat"];

;// CONCATENATED MODULE: ./app/layout.tsx






const metadata = {
    title: "MathGpt",
    description: "Learn, Develop and Practise you Math knowlage with AI "
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: (layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className + "relative",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(e0, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                children,
                /*#__PURE__*/ jsx_runtime_.jsx(components_Fotter, {})
            ]
        })
    });
}


/***/ }),

/***/ 96330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14178);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62947);



function loading() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: " min-h-[65vh] flex flex-col justify-center items-center bg-white",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: "/loading.gif",
                alt: "loading",
                width: 500,
                height: 500
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "Loading Your Request ..."
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loading);


/***/ }),

/***/ 57481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 67272:
/***/ (() => {



/***/ })

};
;