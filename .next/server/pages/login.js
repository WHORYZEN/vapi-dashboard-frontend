(() => {
var exports = {};
exports.id = 459;
exports.ids = [459,660];
exports.modules = {

/***/ 491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Flogin_preferredRegion_absolutePagePath_private_next_pages_2Flogin_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/login.tsx
var login_namespaceObject = {};
__webpack_require__.r(login_namespaceObject);
__webpack_require__.d(login_namespaceObject, {
  "default": () => (Login)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(182);
// EXTERNAL MODULE: ./node_modules/next/dist/pages/_document.js
var _document = __webpack_require__(940);
var _document_default = /*#__PURE__*/__webpack_require__.n(_document);
// EXTERNAL MODULE: ./pages/_app.tsx
var _app = __webpack_require__(178);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: ./pages/login.tsx



function Login() {
    const [password, setPassword] = (0,external_react_.useState)("");
    const [error, setError] = (0,external_react_.useState)("");
    const router = (0,router_.useRouter)();
    const handleLogin = (e)=>{
        e.preventDefault();
        if (password === "admin123") {
            localStorage.setItem("clientToken", "valid");
            router.push("/");
        } else {
            setError("Incorrect password. Please try again.");
        }
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "min-h-screen flex items-center justify-center bg-cover bg-center",
        style: {
            backgroundImage: 'url("/login-bg.jpg")'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "w-full max-w-sm bg-white bg-opacity-90 p-8 shadow-lg rounded-md space-y-6",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex flex-col items-center space-y-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "/logo.jpg",
                            alt: "Logo",
                            className: "w-12 h-12"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("h1", {
                            className: "text-xl font-bold",
                            children: "Welcome to MYai500"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "text-sm text-gray-600",
                            children: "Secure Client Login"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                    onSubmit: handleLogin,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                            type: "password",
                            placeholder: "Enter access password",
                            value: password,
                            onChange: (e)=>setPassword(e.target.value),
                            className: "w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                        }),
                        error && /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "text-sm text-red-500",
                            children: error
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                            type: "submit",
                            className: "w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition",
                            children: "Login"
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Flogin&preferredRegion=&absolutePagePath=private-next-pages%2Flogin.tsx&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Flogin_preferredRegion_absolutePagePath_private_next_pages_2Flogin_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(login_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(login_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(login_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(login_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(login_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(login_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(login_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(login_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(login_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(login_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(login_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/login","pathname":"/login","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: (_document_default()),
          },
          userland: login_namespaceObject,
        })
        
        
    

/***/ }),

/***/ 178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);


function App({ Component, pageProps }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...pageProps
    });
}


/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 76:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 140:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 716:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 368:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 724:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 743:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [940,812], () => (__webpack_exec__(491)));
module.exports = __webpack_exports__;

})();