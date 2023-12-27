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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction InvoiceFormData() {\n    _s();\n    const [firstName, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [lastName, setLastName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [taxOffice, setTaxOffice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [tcIdentityNumber, setTcIdentityNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [invoiceData, setInvoiceData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({\n        receiver: {\n            firstName: \"\",\n            lastName: \"\",\n            address: \"\",\n            taxOffice: \"\",\n            tcIdentityNumber: \"\"\n        },\n        items: [\n            {\n                productName: \"\",\n                price: 0\n            }\n        ],\n        logo: \"\",\n        totalPrice: 0\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {\n        spacing: 4,\n        align: \"stretch\",\n        maxW: \"md\",\n        m: \"auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        placeholder: \"Ad:\",\n                        value: firstName,\n                        onChange: (e)=>setFirstName(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\InvoiceFormData.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        placeholder: \"Soyad:\",\n                        value: lastName,\n                        onChange: (e)=>setLastName(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\InvoiceFormData.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\InvoiceFormData.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                placeholder: \"Adress:\",\n                value: address,\n                as: \"textarea\",\n                onChange: (e)=>setAddress(e.target.value),\n                height: 100\n            }, void 0, false, {\n                fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\InvoiceFormData.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                placeholder: \"Vergi Dairesi:\",\n                value: taxOffice,\n                onChange: (e)=>setTaxOffice(e.target.value)\n            }, void 0, false, {\n                fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\InvoiceFormData.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                placeholder: \"Tc Kimlik No\",\n                value: tcIdentityNumber,\n                onChange: (e)=>setTcIdentityNumber(e.target.value)\n            }, void 0, false, {\n                fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\InvoiceFormData.jsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                colorScheme: \"green\",\n                children: \"PDF OLUŞTUR\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\InvoiceFormData.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\components\\\\InvoiceFormData.jsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(InvoiceFormData, \"OWvbnH6FDqWNC7U27MxIvzE5uyg=\");\n_c = InvoiceFormData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InvoiceFormData);\nvar _c;\n$RefreshReg$(_c, \"InvoiceFormData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ludm9pY2VGb3JtRGF0YS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEU7QUFDdEM7QUFFeEMsU0FBU087O0lBQ1AsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdILCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ0ksVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDUSxXQUFXQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1Usa0JBQWtCQyxvQkFBb0IsR0FBR1gsK0NBQVFBLENBQUM7SUFFekQsTUFBTSxDQUFDWSxhQUFhQyxlQUFlLEdBQUdkLHFEQUFjLENBQUM7UUFDbkRlLFVBQVU7WUFDUlosV0FBVztZQUNYRSxVQUFVO1lBQ1ZFLFNBQVM7WUFDVEUsV0FBVztZQUNYRSxrQkFBa0I7UUFDcEI7UUFDQUssT0FBTztZQUNMO2dCQUNFQyxhQUFhO2dCQUNiQyxPQUFPO1lBQ1Q7U0FDRDtRQUNEQyxNQUFNO1FBQ05DLFlBQVk7SUFDZDtJQUVBLHFCQUNFLDhEQUFDckIsb0RBQU1BO1FBQUNzQixTQUFTO1FBQUdDLE9BQU87UUFBV0MsTUFBTTtRQUFNQyxHQUFFOzswQkFDbEQsOERBQUMzQixvREFBTUE7O2tDQUNMLDhEQUFDQyxtREFBS0E7d0JBQ0oyQixhQUFZO3dCQUNaQyxPQUFPdkI7d0JBQ1B3QixVQUFVLENBQUNDLElBQU14QixhQUFhd0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0NBRTlDLDhEQUFDNUIsbURBQUtBO3dCQUNKMkIsYUFBWTt3QkFDWkMsT0FBT3JCO3dCQUNQc0IsVUFBVSxDQUFDQyxJQUFNdEIsWUFBWXNCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7OzBCQUcvQyw4REFBQzVCLG1EQUFLQTtnQkFDSjJCLGFBQVk7Z0JBQ1pDLE9BQU9uQjtnQkFDUHVCLElBQUc7Z0JBQ0hILFVBQVUsQ0FBQ0MsSUFBTXBCLFdBQVdvQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0JBQzFDSyxRQUFROzs7Ozs7MEJBRVYsOERBQUNqQyxtREFBS0E7Z0JBQ0oyQixhQUFZO2dCQUNaQyxPQUFPakI7Z0JBQ1BrQixVQUFVLENBQUNDLElBQU1sQixhQUFha0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7MEJBRTlDLDhEQUFDNUIsbURBQUtBO2dCQUNKMkIsYUFBWTtnQkFDWkMsT0FBT2Y7Z0JBQ1BnQixVQUFVLENBQUNDLElBQU1oQixvQkFBb0JnQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OzswQkFJckQsOERBQUMvQixvREFBTUE7Z0JBQUNxQyxhQUFhOzBCQUFTOzs7Ozs7Ozs7Ozs7QUFLcEM7R0EvRFM5QjtLQUFBQTtBQWlFVCwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ludm9pY2VGb3JtRGF0YS5qc3g/YmQ2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIEZvcm1Db250cm9sLCBIU3RhY2ssIElucHV0LCBWU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEludm9pY2VGb3JtRGF0YSgpIHtcclxuICBjb25zdCBbZmlyc3ROYW1lLCBzZXRGaXJzdE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xhc3ROYW1lLCBzZXRMYXN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYWRkcmVzcywgc2V0QWRkcmVzc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGF4T2ZmaWNlLCBzZXRUYXhPZmZpY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RjSWRlbnRpdHlOdW1iZXIsIHNldFRjSWRlbnRpdHlOdW1iZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IFtpbnZvaWNlRGF0YSwgc2V0SW52b2ljZURhdGFdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgcmVjZWl2ZXI6IHtcclxuICAgICAgZmlyc3ROYW1lOiBcIlwiLFxyXG4gICAgICBsYXN0TmFtZTogXCJcIixcclxuICAgICAgYWRkcmVzczogXCJcIixcclxuICAgICAgdGF4T2ZmaWNlOiBcIlwiLFxyXG4gICAgICB0Y0lkZW50aXR5TnVtYmVyOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwcm9kdWN0TmFtZTogXCJcIixcclxuICAgICAgICBwcmljZTogMCxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBsb2dvOiBcIlwiLFxyXG4gICAgdG90YWxQcmljZTogMCxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxWU3RhY2sgc3BhY2luZz17NH0gYWxpZ249e1wic3RyZXRjaFwifSBtYXhXPXtcIm1kXCJ9IG09XCJhdXRvXCI+XHJcbiAgICAgIDxIU3RhY2s+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkOlwiXHJcbiAgICAgICAgICB2YWx1ZT17Zmlyc3ROYW1lfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGaXJzdE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNveWFkOlwiXHJcbiAgICAgICAgICB2YWx1ZT17bGFzdE5hbWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExhc3ROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0hTdGFjaz5cclxuICAgICAgPElucHV0XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJBZHJlc3M6XCJcclxuICAgICAgICB2YWx1ZT17YWRkcmVzc31cclxuICAgICAgICBhcz1cInRleHRhcmVhXCJcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFkZHJlc3MoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIGhlaWdodD17MTAwfVxyXG4gICAgICAvPlxyXG4gICAgICA8SW5wdXRcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlZlcmdpIERhaXJlc2k6XCJcclxuICAgICAgICB2YWx1ZT17dGF4T2ZmaWNlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGF4T2ZmaWNlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgLz5cclxuICAgICAgPElucHV0XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJUYyBLaW1saWsgTm9cIlxyXG4gICAgICAgIHZhbHVlPXt0Y0lkZW50aXR5TnVtYmVyfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGNJZGVudGl0eU51bWJlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIC8+XHJcblxyXG5cclxuICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT17XCJncmVlblwifT5cclxuICAgICAgICBQREYgT0xVxZ5UVVJcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L1ZTdGFjaz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnZvaWNlRm9ybURhdGE7XHJcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJGb3JtQ29udHJvbCIsIkhTdGFjayIsIklucHV0IiwiVlN0YWNrIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkludm9pY2VGb3JtRGF0YSIsImZpcnN0TmFtZSIsInNldEZpcnN0TmFtZSIsImxhc3ROYW1lIiwic2V0TGFzdE5hbWUiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsInRheE9mZmljZSIsInNldFRheE9mZmljZSIsInRjSWRlbnRpdHlOdW1iZXIiLCJzZXRUY0lkZW50aXR5TnVtYmVyIiwiaW52b2ljZURhdGEiLCJzZXRJbnZvaWNlRGF0YSIsInJlY2VpdmVyIiwiaXRlbXMiLCJwcm9kdWN0TmFtZSIsInByaWNlIiwibG9nbyIsInRvdGFsUHJpY2UiLCJzcGFjaW5nIiwiYWxpZ24iLCJtYXhXIiwibSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJhcyIsImhlaWdodCIsImNvbG9yU2NoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/InvoiceFormData.jsx\n"));

/***/ })

});