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

/***/ "./components/InvoiceFormData.jsx":
/*!****************************************!*\
  !*** ./components/InvoiceFormData.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction InvoiceFormData() {\n    _s();\n    const [firstName, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [lastName, setLastName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [invoiceData, setInvoiceData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({\n        receiver: {\n            firstName: \"\",\n            lastName: \"\",\n            address: \"\",\n            taxOffice: \"\",\n            tcIdentityNumber: \"\"\n        },\n        items: [\n            {\n                productName: \"\",\n                price: 0\n            }\n        ],\n        logo: \"\",\n        totalPrice: 0\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {\n            spacing: 4,\n            align: \"stretch\",\n            maxW: \"md\",\n            m: \"auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                    placeholder: \"Ad:\",\n                    value: firstName,\n                    onChange: (e)=>setFirstName(e.target.value)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\InvoiceFormData.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                    placeholder: \"Soyad:\",\n                    value: lastName,\n                    onChange: (e)=>setLastName(e.target.value)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\InvoiceFormData.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\InvoiceFormData.jsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\InvoiceFormData.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(InvoiceFormData, \"AKiVLge98fPcb5CQQ8z+Oyxtm4Y=\");\n_c = InvoiceFormData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InvoiceFormData);\nvar _c;\n$RefreshReg$(_c, \"InvoiceFormData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ludm9pY2VGb3JtRGF0YS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBc0U7QUFDOUI7QUFFeEMsU0FBU007O0lBQ1AsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdILCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ0ksVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNLENBQUNNLGFBQWFDLGVBQWUsR0FBR1IscURBQWMsQ0FBQztRQUNuRFMsVUFBVTtZQUNSTixXQUFXO1lBQ1hFLFVBQVU7WUFDVkssU0FBUztZQUNUQyxXQUFXO1lBQ1hDLGtCQUFrQjtRQUNwQjtRQUNBQyxPQUFPO1lBQ0w7Z0JBQ0VDLGFBQWE7Z0JBQ2JDLE9BQU87WUFDVDtTQUNEO1FBQ0RDLE1BQU07UUFDTkMsWUFBWTtJQUNkO0lBRUEscUJBQ0UsOERBQUNsQixvREFBTUE7a0JBQ0wsNEVBQUNGLG9EQUFNQTtZQUFDcUIsU0FBUztZQUFHQyxPQUFPO1lBQVdDLE1BQU07WUFBTUMsR0FBRTs7OEJBQ2xELDhEQUFDdkIsbURBQUtBO29CQUNKd0IsYUFBWTtvQkFDWkMsT0FBT3BCO29CQUNQcUIsVUFBVSxDQUFDQyxJQUFNckIsYUFBYXFCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7OzhCQUU5Qyw4REFBQ3pCLG1EQUFLQTtvQkFDSndCLGFBQVk7b0JBQ1pDLE9BQU9sQjtvQkFDUG1CLFVBQVUsQ0FBQ0MsSUFBTW5CLFlBQVltQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JEO0dBeENTckI7S0FBQUE7QUEwQ1QsK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnZvaWNlRm9ybURhdGEuanN4P2JkNjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEhTdGFjaywgSW5wdXQsIFZTdGFjayB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSW52b2ljZUZvcm1EYXRhKCkge1xyXG4gIGNvbnN0IFtmaXJzdE5hbWUsIHNldEZpcnN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGFzdE5hbWUsIHNldExhc3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBbaW52b2ljZURhdGEsIHNldEludm9pY2VEYXRhXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIHJlY2VpdmVyOiB7XHJcbiAgICAgIGZpcnN0TmFtZTogXCJcIixcclxuICAgICAgbGFzdE5hbWU6IFwiXCIsXHJcbiAgICAgIGFkZHJlc3M6IFwiXCIsXHJcbiAgICAgIHRheE9mZmljZTogXCJcIixcclxuICAgICAgdGNJZGVudGl0eU51bWJlcjogXCJcIixcclxuICAgIH0sXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcHJvZHVjdE5hbWU6IFwiXCIsXHJcbiAgICAgICAgcHJpY2U6IDAsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgbG9nbzogXCJcIixcclxuICAgIHRvdGFsUHJpY2U6IDAsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VlN0YWNrPlxyXG4gICAgICA8SFN0YWNrIHNwYWNpbmc9ezR9IGFsaWduPXtcInN0cmV0Y2hcIn0gbWF4Vz17XCJtZFwifSBtPVwiYXV0b1wiPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZDpcIlxyXG4gICAgICAgICAgdmFsdWU9e2ZpcnN0TmFtZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rmlyc3ROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTb3lhZDpcIlxyXG4gICAgICAgICAgdmFsdWU9e2xhc3ROYW1lfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRMYXN0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IU3RhY2s+XHJcblxyXG5cclxuICAgIDwvVlN0YWNrPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludm9pY2VGb3JtRGF0YTtcclxuIl0sIm5hbWVzIjpbIkZvcm1Db250cm9sIiwiSFN0YWNrIiwiSW5wdXQiLCJWU3RhY2siLCJSZWFjdCIsInVzZVN0YXRlIiwiSW52b2ljZUZvcm1EYXRhIiwiZmlyc3ROYW1lIiwic2V0Rmlyc3ROYW1lIiwibGFzdE5hbWUiLCJzZXRMYXN0TmFtZSIsImludm9pY2VEYXRhIiwic2V0SW52b2ljZURhdGEiLCJyZWNlaXZlciIsImFkZHJlc3MiLCJ0YXhPZmZpY2UiLCJ0Y0lkZW50aXR5TnVtYmVyIiwiaXRlbXMiLCJwcm9kdWN0TmFtZSIsInByaWNlIiwibG9nbyIsInRvdGFsUHJpY2UiLCJzcGFjaW5nIiwiYWxpZ24iLCJtYXhXIiwibSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/InvoiceFormData.jsx\n"));

/***/ })

});