"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MyDocument.jsx":
/*!***********************************!*\
  !*** ./components/MyDocument.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-pdf/renderer */ \"./node_modules/@react-pdf/renderer/lib/react-pdf.browser.es.js\");\n\n\n\nfunction MyDocument(param) {\n    let { data } = param;\n    Font.register({\n        family: \"Corbel\",\n        src: source\n    });\n    const styles = _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.create({\n        page: {\n            flexDirection: \"row\",\n            backgroundColor: \"#E4E4E4\",\n            fontFamily: \"Corbel\"\n        },\n        section: {\n            margin: 10,\n            padding: 10,\n            flexGrow: 1,\n            fontFamily: \"Corbel\"\n        },\n        header: {\n            fontSize: 20,\n            marginBottom: 10,\n            fontFamily: \"Corbel\"\n        },\n        address: {\n            marginBottom: 10,\n            fontFamily: \"Corbel\"\n        },\n        lineItem: {\n            flexDirection: \"row\",\n            justifyContent: \"space-between\",\n            marginBottom: 5,\n            fontFamily: \"Corbel\"\n        },\n        total: {\n            marginTop: 10,\n            borderTopWidth: 1,\n            paddingTop: 5,\n            fontFamily: \"Corbel\"\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Document, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Page, {\n                size: \"A4\",\n                style: styles.page,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.View, {\n                    style: styles.section,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                            style: styles.header,\n                            children: \"Fatura\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\MyDocument.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                            style: styles.address,\n                            children: [\n                                \"M\\xfcşteri Adı:\",\n                                \" \",\n                                \"\".concat(data.receiver.firstName, \" \").concat(data.receiver.lastName)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\MyDocument.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                            style: styles.address,\n                            children: \"Adres: 123 Main St, Cityville\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\MyDocument.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.View, {\n                            style: styles.lineItem,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                    children: \"\\xdcr\\xfcn\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\MyDocument.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                    children: \"Miktar\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\MyDocument.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                    children: \"Fiyat\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\MyDocument.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\MyDocument.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.View, {\n                            style: styles.lineItem,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                    children: \"\\xdcr\\xfcn 1\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\MyDocument.jsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                    children: \"2\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\MyDocument.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                    children: \"$50.00\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\MyDocument.jsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\MyDocument.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.View, {\n                            style: styles.lineItem,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                    children: \"\\xdcr\\xfcn 2\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\MyDocument.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                    children: \"1\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\MyDocument.jsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                    children: \"$30.00\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\MyDocument.jsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\MyDocument.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.View, {\n                            style: styles.total,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                children: \"Toplam: $130.00\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\MyDocument.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\MyDocument.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\MyDocument.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\MyDocument.jsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\MyDocument.jsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = MyDocument;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyDocument);\nvar _c;\n$RefreshReg$(_c, \"MyDocument\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL015RG9jdW1lbnQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEI7QUFDbUQ7QUFDN0UsU0FBU00sV0FBVyxLQUFRO1FBQVIsRUFBRUMsSUFBSSxFQUFFLEdBQVI7SUFHbEJDLEtBQUtDLFFBQVEsQ0FBQztRQUFFQyxRQUFRO1FBQVVDLEtBQUtDO0lBQU87SUFFOUMsTUFBTUMsU0FBU1IsMkRBQVVBLENBQUNTLE1BQU0sQ0FBQztRQUMvQkMsTUFBTTtZQUNKQyxlQUFlO1lBQ2ZDLGlCQUFpQjtZQUNqQkMsWUFBWTtRQUNkO1FBQ0FDLFNBQVM7WUFDUEMsUUFBUTtZQUNSQyxTQUFTO1lBQ1RDLFVBQVU7WUFDVkosWUFBWTtRQUNkO1FBQ0FLLFFBQVE7WUFDTkMsVUFBVTtZQUNWQyxjQUFjO1lBQ2RQLFlBQVk7UUFDZDtRQUNBUSxTQUFTO1lBQ1BELGNBQWM7WUFDZFAsWUFBWTtRQUNkO1FBQ0FTLFVBQVU7WUFDUlgsZUFBZTtZQUNmWSxnQkFBZ0I7WUFDaEJILGNBQWM7WUFDZFAsWUFBWTtRQUNkO1FBQ0FXLE9BQU87WUFDTEMsV0FBVztZQUNYQyxnQkFBZ0I7WUFDaEJDLFlBQVk7WUFDWmQsWUFBWTtRQUNkO0lBQ0Y7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ2QseURBQVFBO3NCQUNQLDRFQUFDSCxxREFBSUE7Z0JBQUNnQyxNQUFLO2dCQUFLQyxPQUFPckIsT0FBT0UsSUFBSTswQkFDaEMsNEVBQUNaLHFEQUFJQTtvQkFBQytCLE9BQU9yQixPQUFPTSxPQUFPOztzQ0FDekIsOERBQUNqQixxREFBSUE7NEJBQUNnQyxPQUFPckIsT0FBT1UsTUFBTTtzQ0FBRTs7Ozs7O3NDQUM1Qiw4REFBQ3JCLHFEQUFJQTs0QkFBQ2dDLE9BQU9yQixPQUFPYSxPQUFPOztnQ0FBRTtnQ0FDZDtnQ0FDWCxHQUE2Qm5CLE9BQTNCQSxLQUFLNEIsUUFBUSxDQUFDQyxTQUFTLEVBQUMsS0FBMEIsT0FBdkI3QixLQUFLNEIsUUFBUSxDQUFDRSxRQUFROzs7Ozs7O3NDQUV2RCw4REFBQ25DLHFEQUFJQTs0QkFBQ2dDLE9BQU9yQixPQUFPYSxPQUFPO3NDQUFFOzs7Ozs7c0NBRTdCLDhEQUFDdkIscURBQUlBOzRCQUFDK0IsT0FBT3JCLE9BQU9jLFFBQVE7OzhDQUMxQiw4REFBQ3pCLHFEQUFJQTs4Q0FBQzs7Ozs7OzhDQUNOLDhEQUFDQSxxREFBSUE7OENBQUM7Ozs7Ozs4Q0FDTiw4REFBQ0EscURBQUlBOzhDQUFDOzs7Ozs7Ozs7Ozs7c0NBR1IsOERBQUNDLHFEQUFJQTs0QkFBQytCLE9BQU9yQixPQUFPYyxRQUFROzs4Q0FDMUIsOERBQUN6QixxREFBSUE7OENBQUM7Ozs7Ozs4Q0FDTiw4REFBQ0EscURBQUlBOzhDQUFDOzs7Ozs7OENBQ04sOERBQUNBLHFEQUFJQTs4Q0FBQzs7Ozs7Ozs7Ozs7O3NDQUdSLDhEQUFDQyxxREFBSUE7NEJBQUMrQixPQUFPckIsT0FBT2MsUUFBUTs7OENBQzFCLDhEQUFDekIscURBQUlBOzhDQUFDOzs7Ozs7OENBQ04sOERBQUNBLHFEQUFJQTs4Q0FBQzs7Ozs7OzhDQUNOLDhEQUFDQSxxREFBSUE7OENBQUM7Ozs7Ozs7Ozs7OztzQ0FHUiw4REFBQ0MscURBQUlBOzRCQUFDK0IsT0FBT3JCLE9BQU9nQixLQUFLO3NDQUN2Qiw0RUFBQzNCLHFEQUFJQTswQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9wQjtLQTlFU0k7QUFnRlQsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeURvY3VtZW50LmpzeD84OTgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUGFnZSwgVGV4dCwgVmlldywgRG9jdW1lbnQsIFN0eWxlU2hlZXQgfSBmcm9tIFwiQHJlYWN0LXBkZi9yZW5kZXJlclwiO1xyXG5mdW5jdGlvbiBNeURvY3VtZW50KHsgZGF0YSB9KSB7XHJcblxyXG5cclxuICBGb250LnJlZ2lzdGVyKHsgZmFtaWx5OiAnQ29yYmVsJywgc3JjOiBzb3VyY2UgfSk7XHJcblxyXG4gIGNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcclxuICAgIHBhZ2U6IHtcclxuICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNFNEU0RTRcIixcclxuICAgICAgZm9udEZhbWlseTogJ0NvcmJlbCcsIFxyXG4gICAgfSxcclxuICAgIHNlY3Rpb246IHtcclxuICAgICAgbWFyZ2luOiAxMCxcclxuICAgICAgcGFkZGluZzogMTAsXHJcbiAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICBmb250RmFtaWx5OiAnQ29yYmVsJywgXHJcbiAgICB9LFxyXG4gICAgaGVhZGVyOiB7XHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgICAgbWFyZ2luQm90dG9tOiAxMCxcclxuICAgICAgZm9udEZhbWlseTogJ0NvcmJlbCcsIFxyXG4gICAgfSxcclxuICAgIGFkZHJlc3M6IHtcclxuICAgICAgbWFyZ2luQm90dG9tOiAxMCxcclxuICAgICAgZm9udEZhbWlseTogJ0NvcmJlbCcsIFxyXG4gICAgfSxcclxuICAgIGxpbmVJdGVtOiB7XHJcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgbWFyZ2luQm90dG9tOiA1LFxyXG4gICAgICBmb250RmFtaWx5OiAnQ29yYmVsJywgXHJcbiAgICB9LFxyXG4gICAgdG90YWw6IHtcclxuICAgICAgbWFyZ2luVG9wOiAxMCxcclxuICAgICAgYm9yZGVyVG9wV2lkdGg6IDEsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDUsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdDb3JiZWwnLCBcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RG9jdW1lbnQ+XHJcbiAgICAgICAgPFBhZ2Ugc2l6ZT1cIkE0XCIgc3R5bGU9e3N0eWxlcy5wYWdlfT5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbn0+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuaGVhZGVyfT5GYXR1cmE8L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuYWRkcmVzc30+XHJcbiAgICAgICAgICAgICAgTcO8xZ90ZXJpIEFkxLE6e1wiIFwifVxyXG4gICAgICAgICAgICAgIHtgJHtkYXRhLnJlY2VpdmVyLmZpcnN0TmFtZX0gJHtkYXRhLnJlY2VpdmVyLmxhc3ROYW1lfWB9XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5hZGRyZXNzfT5BZHJlczogMTIzIE1haW4gU3QsIENpdHl2aWxsZTwvVGV4dD5cclxuXHJcbiAgICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMubGluZUl0ZW19PlxyXG4gICAgICAgICAgICAgIDxUZXh0PsOccsO8bjwvVGV4dD5cclxuICAgICAgICAgICAgICA8VGV4dD5NaWt0YXI8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPFRleHQ+Rml5YXQ8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvVmlldz5cclxuXHJcbiAgICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMubGluZUl0ZW19PlxyXG4gICAgICAgICAgICAgIDxUZXh0PsOccsO8biAxPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDxUZXh0PjI8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPFRleHQ+JDUwLjAwPC9UZXh0PlxyXG4gICAgICAgICAgICA8L1ZpZXc+XHJcblxyXG4gICAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmxpbmVJdGVtfT5cclxuICAgICAgICAgICAgICA8VGV4dD7DnHLDvG4gMjwvVGV4dD5cclxuICAgICAgICAgICAgICA8VGV4dD4xPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDxUZXh0PiQzMC4wMDwvVGV4dD5cclxuICAgICAgICAgICAgPC9WaWV3PlxyXG5cclxuICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy50b3RhbH0+XHJcbiAgICAgICAgICAgICAgPFRleHQ+VG9wbGFtOiAkMTMwLjAwPC9UZXh0PlxyXG4gICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgPC9QYWdlPlxyXG4gICAgICA8L0RvY3VtZW50PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlEb2N1bWVudDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUGFnZSIsIlRleHQiLCJWaWV3IiwiRG9jdW1lbnQiLCJTdHlsZVNoZWV0IiwiTXlEb2N1bWVudCIsImRhdGEiLCJGb250IiwicmVnaXN0ZXIiLCJmYW1pbHkiLCJzcmMiLCJzb3VyY2UiLCJzdHlsZXMiLCJjcmVhdGUiLCJwYWdlIiwiZmxleERpcmVjdGlvbiIsImJhY2tncm91bmRDb2xvciIsImZvbnRGYW1pbHkiLCJzZWN0aW9uIiwibWFyZ2luIiwicGFkZGluZyIsImZsZXhHcm93IiwiaGVhZGVyIiwiZm9udFNpemUiLCJtYXJnaW5Cb3R0b20iLCJhZGRyZXNzIiwibGluZUl0ZW0iLCJqdXN0aWZ5Q29udGVudCIsInRvdGFsIiwibWFyZ2luVG9wIiwiYm9yZGVyVG9wV2lkdGgiLCJwYWRkaW5nVG9wIiwic2l6ZSIsInN0eWxlIiwicmVjZWl2ZXIiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MyDocument.jsx\n"));

/***/ })

});