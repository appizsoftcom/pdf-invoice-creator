"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("layouts_UserLayout_jsx",{

/***/ "./components/Sidebar.jsx":
/*!********************************!*\
  !*** ./components/Sidebar.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sidebar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_FaBell_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FaBell!=!react-icons/fa */ \"__barrel_optimize__?names=FaBell!=!./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_FiMenu_react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=FiMenu!=!react-icons/fi */ \"__barrel_optimize__?names=FiMenu!=!./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_RiFlashlightFill_react_icons_ri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=RiFlashlightFill!=!react-icons/ri */ \"__barrel_optimize__?names=RiFlashlightFill!=!./node_modules/react-icons/ri/index.esm.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n// Here we have used react-icons package for the icons\n\n\n\n\n\nfunction Sidebar(param) {\n    let { children } = param;\n    _s();\n    const { isOpen, onClose, onOpen } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        as: \"section\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"gray.50\", \"gray.700\"),\n        minH: \"100vh\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SidebarContent, {\n                display: {\n                    base: \"none\",\n                    md: \"unset\"\n                }\n            }, void 0, false, {\n                fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\Sidebar.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Drawer, {\n                isOpen: isOpen,\n                onClose: onClose,\n                placement: \"left\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.DrawerOverlay, {}, void 0, false, {\n                        fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\Sidebar.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.DrawerContent, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SidebarContent, {\n                            w: \"full\",\n                            borderRight: \"none\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\Sidebar.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\Sidebar.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\Sidebar.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                ml: {\n                    base: 0,\n                    md: 60\n                },\n                transition: \".3s ease\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n                        as: \"header\",\n                        align: \"center\",\n                        justifyContent: {\n                            base: \"space-between\",\n                            md: \"flex-end\"\n                        },\n                        w: \"full\",\n                        px: \"4\",\n                        borderBottomWidth: \"1px\",\n                        borderColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"inherit\", \"gray.700\"),\n                        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"white\", \"gray.800\"),\n                        boxShadow: \"sm\",\n                        h: \"14\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {\n                                \"aria-label\": \"Menu\",\n                                display: {\n                                    base: \"inline-flex\",\n                                    md: \"none\"\n                                },\n                                onClick: onOpen,\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiMenu_react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiMenu, {}, void 0, false, void 0, void 0),\n                                size: \"md\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\Sidebar.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n                                align: \"center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n                                        color: \"gray.500\",\n                                        as: _barrel_optimize_names_FaBell_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaBell,\n                                        cursor: \"pointer\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\Sidebar.jsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {\n                                        ml: \"4\",\n                                        size: \"sm\",\n                                        name: \"Ahmad\",\n                                        src: \"https://avatars2.githubusercontent.com/u/37842853?v=4\",\n                                        cursor: \"pointer\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\Sidebar.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\Sidebar.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\Sidebar.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        as: \"main\",\n                        p: 14,\n                        minH: \"25rem\",\n                        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"auto\", \"gray.800\"),\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\Sidebar.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\Sidebar.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\Sidebar.jsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Sidebar, \"+HKuX0MavkyxpKpbPNZfFi1T5Ig=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue\n    ];\n});\n_c = Sidebar;\nconst SidebarContent = (param)=>{\n    let { ...props } = param;\n    _s1();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        as: \"nav\",\n        pos: \"fixed\",\n        top: \"0\",\n        left: \"0\",\n        zIndex: \"sticky\",\n        h: \"full\",\n        pb: \"10\",\n        overflowX: \"hidden\",\n        overflowY: \"auto\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"white\", \"gray.800\"),\n        borderColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"inherit\", \"gray.700\"),\n        borderRightWidth: \"1px\",\n        w: \"60\",\n        ...props,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n                px: \"4\",\n                py: \"5\",\n                align: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n                        as: _barrel_optimize_names_RiFlashlightFill_react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiFlashlightFill,\n                        h: 8,\n                        w: 8\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\Sidebar.jsx\",\n                        lineNumber: 106,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                        fontSize: \"2xl\",\n                        ml: \"2\",\n                        color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"brand.500\", \"white\"),\n                        fontWeight: \"semibold\",\n                        children: \"Hızlı Fatura\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\Sidebar.jsx\",\n                        lineNumber: 107,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\Sidebar.jsx\",\n                lineNumber: 105,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n                direction: \"column\",\n                as: \"nav\",\n                fontSize: \"md\",\n                color: \"gray.600\",\n                \"aria-label\": \"Main Navigation\",\n                children: \"attr\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\Sidebar.jsx\",\n                lineNumber: 116,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\Sidebar.jsx\",\n        lineNumber: 89,\n        columnNumber: 3\n    }, undefined);\n};\n_s1(SidebarContent, \"6SPWDKKJx3x6/piDRqtxmfjVGnY=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue\n    ];\n});\n_c1 = SidebarContent;\nvar _c, _c1;\n$RefreshReg$(_c, \"Sidebar\");\n$RefreshReg$(_c1, \"SidebarContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUc7Ozs7OztrQ0FDckMsOERBQUNoQyxrREFBSUE7d0JBQ0g4RCxVQUFTO3dCQUNUNUIsSUFBRzt3QkFDSGEsT0FBT3BDLG1FQUFpQkEsQ0FBQyxhQUFhO3dCQUN0Q29ELFlBQVc7a0NBQ1o7Ozs7Ozs7Ozs7OzswQkFJSCw4REFBQ2pFLGtEQUFJQTtnQkFDSGtFLFdBQVU7Z0JBQ1Z4QyxJQUFHO2dCQUNIc0MsVUFBUztnQkFDVGYsT0FBTTtnQkFDTkosY0FBVzswQkFDWjs7Ozs7Ozs7Ozs7O0FBSUw7SUF0Q01oQjs7UUFXRWhCLCtEQUFpQkE7UUFDUkEsK0RBQWlCQTtRQVVuQkEsK0RBQWlCQTs7O01BdEIxQmdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2lkZWJhci5qc3g/NGNiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEF2YXRhcixcclxuICBCb3gsXHJcbiAgRmxleCxcclxuICBJY29uLFxyXG4gIFRleHQsXHJcbiAgU3RhY2ssXHJcbiAgSW1hZ2UsXHJcbiAgQnV0dG9uLFxyXG4gIEhlYWRpbmcsXHJcbiAgQm94UHJvcHMsXHJcbiAgRHJhd2VyLFxyXG4gIERyYXdlckNvbnRlbnQsXHJcbiAgSWNvbkJ1dHRvbixcclxuICB1c2VEaXNjbG9zdXJlLFxyXG4gIERyYXdlck92ZXJsYXksXHJcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuLy8gSGVyZSB3ZSBoYXZlIHVzZWQgcmVhY3QtaWNvbnMgcGFja2FnZSBmb3IgdGhlIGljb25zXHJcbmltcG9ydCB7IEZhQmVsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVUZWFtLCBBaU91dGxpbmVIb21lIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCB7IEJzRm9sZGVyMiwgQnNDYWxlbmRhckNoZWNrIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcbmltcG9ydCB7IEZpTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xyXG5pbXBvcnQgeyBSaUZsYXNobGlnaHRGaWxsIH0gZnJvbSBcInJlYWN0LWljb25zL3JpXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlYmFyKHtjaGlsZHJlbn0pIHtcclxuICBjb25zdCB7IGlzT3Blbiwgb25DbG9zZSwgb25PcGVuIH0gPSB1c2VEaXNjbG9zdXJlKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIGFzPVwic2VjdGlvblwiXHJcbiAgICAgIGJnPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuNTBcIiwgXCJncmF5LjcwMFwiKX1cclxuICAgICAgbWluSD1cIjEwMHZoXCJcclxuICAgID5cclxuICAgICAgPFNpZGViYXJDb250ZW50IGRpc3BsYXk9e3sgYmFzZTogXCJub25lXCIsIG1kOiBcInVuc2V0XCIgfX0gLz5cclxuICAgICAgPERyYXdlciBpc09wZW49e2lzT3Blbn0gb25DbG9zZT17b25DbG9zZX0gcGxhY2VtZW50PVwibGVmdFwiPlxyXG4gICAgICAgIDxEcmF3ZXJPdmVybGF5IC8+XHJcbiAgICAgICAgPERyYXdlckNvbnRlbnQ+XHJcbiAgICAgICAgICA8U2lkZWJhckNvbnRlbnQgdz1cImZ1bGxcIiBib3JkZXJSaWdodD1cIm5vbmVcIiAvPlxyXG4gICAgICAgIDwvRHJhd2VyQ29udGVudD5cclxuICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgIDxCb3ggbWw9e3sgYmFzZTogMCwgbWQ6IDYwIH19IHRyYW5zaXRpb249XCIuM3MgZWFzZVwiPlxyXG4gICAgICAgIDxGbGV4XHJcbiAgICAgICAgICBhcz1cImhlYWRlclwiXHJcbiAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD17eyBiYXNlOiBcInNwYWNlLWJldHdlZW5cIiwgbWQ6IFwiZmxleC1lbmRcIiB9fVxyXG4gICAgICAgICAgdz1cImZ1bGxcIlxyXG4gICAgICAgICAgcHg9XCI0XCJcclxuICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoPVwiMXB4XCJcclxuICAgICAgICAgIGJvcmRlckNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImluaGVyaXRcIiwgXCJncmF5LjcwMFwiKX1cclxuICAgICAgICAgIGJnPXt1c2VDb2xvck1vZGVWYWx1ZShcIndoaXRlXCIsIFwiZ3JheS44MDBcIil9XHJcbiAgICAgICAgICBib3hTaGFkb3c9XCJzbVwiXHJcbiAgICAgICAgICBoPVwiMTRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJNZW51XCJcclxuICAgICAgICAgICAgZGlzcGxheT17eyBiYXNlOiBcImlubGluZS1mbGV4XCIsIG1kOiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvbk9wZW59XHJcbiAgICAgICAgICAgIGljb249ezxGaU1lbnUgLz59XHJcbiAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxJY29uIGNvbG9yPVwiZ3JheS41MDBcIiBhcz17RmFCZWxsfSBjdXJzb3I9XCJwb2ludGVyXCIgLz5cclxuICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgIG1sPVwiNFwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiQWhtYWRcIlxyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vYXZhdGFyczIuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMzc4NDI4NTM/dj00XCJcclxuICAgICAgICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICA8L0ZsZXg+XHJcblxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGFzPVwibWFpblwiXHJcbiAgICAgICAgICBwPXsxNH1cclxuICAgICAgICAgIG1pbkg9XCIyNXJlbVwiXHJcbiAgICAgICAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoXCJhdXRvXCIsIFwiZ3JheS44MDBcIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgU2lkZWJhckNvbnRlbnQgPSAoeyAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPEJveFxyXG4gICAgYXM9XCJuYXZcIlxyXG4gICAgcG9zPVwiZml4ZWRcIlxyXG4gICAgdG9wPVwiMFwiXHJcbiAgICBsZWZ0PVwiMFwiXHJcbiAgICB6SW5kZXg9XCJzdGlja3lcIlxyXG4gICAgaD1cImZ1bGxcIlxyXG4gICAgcGI9XCIxMFwiXHJcbiAgICBvdmVyZmxvd1g9XCJoaWRkZW5cIlxyXG4gICAgb3ZlcmZsb3dZPVwiYXV0b1wiXHJcbiAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoXCJ3aGl0ZVwiLCBcImdyYXkuODAwXCIpfVxyXG4gICAgYm9yZGVyQ29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiaW5oZXJpdFwiLCBcImdyYXkuNzAwXCIpfVxyXG4gICAgYm9yZGVyUmlnaHRXaWR0aD1cIjFweFwiXHJcbiAgICB3PVwiNjBcIlxyXG4gICAgey4uLnByb3BzfVxyXG4gID5cclxuICAgIDxGbGV4IHB4PVwiNFwiIHB5PVwiNVwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgIDxJY29uIGFzPXtSaUZsYXNobGlnaHRGaWxsfSBoPXs4fSB3PXs4fSAvPlxyXG4gICAgICA8VGV4dFxyXG4gICAgICAgIGZvbnRTaXplPVwiMnhsXCJcclxuICAgICAgICBtbD1cIjJcIlxyXG4gICAgICAgIGNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImJyYW5kLjUwMFwiLCBcIndoaXRlXCIpfVxyXG4gICAgICAgIGZvbnRXZWlnaHQ9XCJzZW1pYm9sZFwiXHJcbiAgICAgID5cclxuICAgICAgICBIxLF6bMSxIEZhdHVyYVxyXG4gICAgICA8L1RleHQ+XHJcbiAgICA8L0ZsZXg+XHJcbiAgICA8RmxleFxyXG4gICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgICBhcz1cIm5hdlwiXHJcbiAgICAgIGZvbnRTaXplPVwibWRcIlxyXG4gICAgICBjb2xvcj1cImdyYXkuNjAwXCJcclxuICAgICAgYXJpYS1sYWJlbD1cIk1haW4gTmF2aWdhdGlvblwiXHJcbiAgICA+XHJcbiAgICAgIGF0dHJcclxuICAgIDwvRmxleD5cclxuICA8L0JveD5cclxuKTtcclxuIl0sIm5hbWVzIjpbIkF2YXRhciIsIkJveCIsIkZsZXgiLCJJY29uIiwiVGV4dCIsIlN0YWNrIiwiSW1hZ2UiLCJCdXR0b24iLCJIZWFkaW5nIiwiQm94UHJvcHMiLCJEcmF3ZXIiLCJEcmF3ZXJDb250ZW50IiwiSWNvbkJ1dHRvbiIsInVzZURpc2Nsb3N1cmUiLCJEcmF3ZXJPdmVybGF5IiwidXNlQ29sb3JNb2RlVmFsdWUiLCJGYUJlbGwiLCJBaU91dGxpbmVUZWFtIiwiQWlPdXRsaW5lSG9tZSIsIkJzRm9sZGVyMiIsIkJzQ2FsZW5kYXJDaGVjayIsIkZpTWVudSIsIlJpRmxhc2hsaWdodEZpbGwiLCJTaWRlYmFyIiwiY2hpbGRyZW4iLCJpc09wZW4iLCJvbkNsb3NlIiwib25PcGVuIiwiYXMiLCJiZyIsIm1pbkgiLCJTaWRlYmFyQ29udGVudCIsImRpc3BsYXkiLCJiYXNlIiwibWQiLCJwbGFjZW1lbnQiLCJ3IiwiYm9yZGVyUmlnaHQiLCJtbCIsInRyYW5zaXRpb24iLCJhbGlnbiIsImp1c3RpZnlDb250ZW50IiwicHgiLCJib3JkZXJCb3R0b21XaWR0aCIsImJvcmRlckNvbG9yIiwiYm94U2hhZG93IiwiaCIsImFyaWEtbGFiZWwiLCJvbkNsaWNrIiwiaWNvbiIsInNpemUiLCJjb2xvciIsImN1cnNvciIsIm5hbWUiLCJzcmMiLCJwIiwicHJvcHMiLCJwb3MiLCJ0b3AiLCJsZWZ0IiwiekluZGV4IiwicGIiLCJvdmVyZmxvd1giLCJvdmVyZmxvd1kiLCJib3JkZXJSaWdodFdpZHRoIiwicHkiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJkaXJlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sidebar.jsx\n"));

/***/ })

});