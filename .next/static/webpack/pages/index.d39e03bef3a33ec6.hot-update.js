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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction InvoiceFormData() {\n    _s();\n    const [firstName, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [lastName, setLastName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [taxOffice, setTaxOffice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [invoiceData, setInvoiceData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({\n        receiver: {\n            firstName: \"\",\n            lastName: \"\",\n            address: \"\",\n            taxOffice: \"\",\n            tcIdentityNumber: \"\"\n        },\n        items: [\n            {\n                productName: \"\",\n                price: 0\n            }\n        ],\n        logo: \"\",\n        totalPrice: 0\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {\n        spacing: 4,\n        align: \"stretch\",\n        maxW: \"md\",\n        m: \"auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        placeholder: \"Ad:\",\n                        value: firstName,\n                        onChange: (e)=>setFirstName(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\InvoiceFormData.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        placeholder: \"Soyad:\",\n                        value: lastName,\n                        onChange: (e)=>setLastName(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\InvoiceFormData.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\InvoiceFormData.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                placeholder: \"Adress:\",\n                value: address,\n                as: \"textarea\",\n                onChange: (e)=>setAddress(e.target.value),\n                height: 100\n            }, void 0, false, {\n                fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\InvoiceFormData.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                placeholder: \"Vergi Dairesi:\",\n                value: taxOffice,\n                onChange: (e)=>setTaxOffice(e.target.value)\n            }, void 0, false, {\n                fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\InvoiceFormData.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\InvoiceFormData.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(InvoiceFormData, \"dyHKFEu+QqrOun8+tW9O2ibkgbM=\");\n_c = InvoiceFormData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InvoiceFormData);\nvar _c;\n$RefreshReg$(_c, \"InvoiceFormData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ludm9pY2VGb3JtRGF0YS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBc0U7QUFDOUI7QUFFeEMsU0FBU007O0lBQ1AsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdILCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ0ksVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDUSxXQUFXQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFDO0lBRTNDLE1BQU0sQ0FBQ1UsYUFBYUMsZUFBZSxHQUFHWixxREFBYyxDQUFDO1FBQ25EYSxVQUFVO1lBQ1JWLFdBQVc7WUFDWEUsVUFBVTtZQUNWRSxTQUFTO1lBQ1RFLFdBQVc7WUFDWEssa0JBQWtCO1FBQ3BCO1FBQ0FDLE9BQU87WUFDTDtnQkFDRUMsYUFBYTtnQkFDYkMsT0FBTztZQUNUO1NBQ0Q7UUFDREMsTUFBTTtRQUNOQyxZQUFZO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ3BCLG9EQUFNQTtRQUFDcUIsU0FBUztRQUFHQyxPQUFPO1FBQVdDLE1BQU07UUFBTUMsR0FBRTs7MEJBQ2xELDhEQUFDMUIsb0RBQU1BOztrQ0FDTCw4REFBQ0MsbURBQUtBO3dCQUNKMEIsYUFBWTt3QkFDWkMsT0FBT3RCO3dCQUNQdUIsVUFBVSxDQUFDQyxJQUFNdkIsYUFBYXVCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O2tDQUU5Qyw4REFBQzNCLG1EQUFLQTt3QkFDSjBCLGFBQVk7d0JBQ1pDLE9BQU9wQjt3QkFDUHFCLFVBQVUsQ0FBQ0MsSUFBTXJCLFlBQVlxQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7OzswQkFHL0MsOERBQUMzQixtREFBS0E7Z0JBQ0owQixhQUFZO2dCQUNaQyxPQUFPbEI7Z0JBQ1BzQixJQUFHO2dCQUNISCxVQUFVLENBQUNDLElBQU1uQixXQUFXbUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dCQUMxQ0ssUUFBUTs7Ozs7OzBCQUVWLDhEQUFDaEMsbURBQUtBO2dCQUNKMEIsYUFBWTtnQkFDWkMsT0FBT2hCO2dCQUNQaUIsVUFBVSxDQUFDQyxJQUFNakIsYUFBYWlCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7O0FBSXBEO0dBcERTdkI7S0FBQUE7QUFzRFQsK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnZvaWNlRm9ybURhdGEuanN4P2JkNjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEhTdGFjaywgSW5wdXQsIFZTdGFjayB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSW52b2ljZUZvcm1EYXRhKCkge1xyXG4gIGNvbnN0IFtmaXJzdE5hbWUsIHNldEZpcnN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGFzdE5hbWUsIHNldExhc3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0YXhPZmZpY2UsIHNldFRheE9mZmljZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgW2ludm9pY2VEYXRhLCBzZXRJbnZvaWNlRGF0YV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICByZWNlaXZlcjoge1xyXG4gICAgICBmaXJzdE5hbWU6IFwiXCIsXHJcbiAgICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgICBhZGRyZXNzOiBcIlwiLFxyXG4gICAgICB0YXhPZmZpY2U6IFwiXCIsXHJcbiAgICAgIHRjSWRlbnRpdHlOdW1iZXI6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHByb2R1Y3ROYW1lOiBcIlwiLFxyXG4gICAgICAgIHByaWNlOiAwLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIGxvZ286IFwiXCIsXHJcbiAgICB0b3RhbFByaWNlOiAwLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFZTdGFjayBzcGFjaW5nPXs0fSBhbGlnbj17XCJzdHJldGNoXCJ9IG1heFc9e1wibWRcIn0gbT1cImF1dG9cIj5cclxuICAgICAgPEhTdGFjaz5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWQ6XCJcclxuICAgICAgICAgIHZhbHVlPXtmaXJzdE5hbWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZpcnN0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU295YWQ6XCJcclxuICAgICAgICAgIHZhbHVlPXtsYXN0TmFtZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TGFzdE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSFN0YWNrPlxyXG4gICAgICA8SW5wdXRcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkFkcmVzczpcIlxyXG4gICAgICAgIHZhbHVlPXthZGRyZXNzfVxyXG4gICAgICAgIGFzPVwidGV4dGFyZWFcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWRkcmVzcyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgaGVpZ2h0PXsxMDB9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxJbnB1dFxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVmVyZ2kgRGFpcmVzaTpcIlxyXG4gICAgICAgIHZhbHVlPXt0YXhPZmZpY2V9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUYXhPZmZpY2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAvPlxyXG4gICAgPC9WU3RhY2s+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW52b2ljZUZvcm1EYXRhO1xyXG4iXSwibmFtZXMiOlsiRm9ybUNvbnRyb2wiLCJIU3RhY2siLCJJbnB1dCIsIlZTdGFjayIsIlJlYWN0IiwidXNlU3RhdGUiLCJJbnZvaWNlRm9ybURhdGEiLCJmaXJzdE5hbWUiLCJzZXRGaXJzdE5hbWUiLCJsYXN0TmFtZSIsInNldExhc3ROYW1lIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJ0YXhPZmZpY2UiLCJzZXRUYXhPZmZpY2UiLCJpbnZvaWNlRGF0YSIsInNldEludm9pY2VEYXRhIiwicmVjZWl2ZXIiLCJ0Y0lkZW50aXR5TnVtYmVyIiwiaXRlbXMiLCJwcm9kdWN0TmFtZSIsInByaWNlIiwibG9nbyIsInRvdGFsUHJpY2UiLCJzcGFjaW5nIiwiYWxpZ24iLCJtYXhXIiwibSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJhcyIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/InvoiceFormData.jsx\n"));

/***/ })

});