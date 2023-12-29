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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Invoice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Invoice */ \"./components/Invoice.jsx\");\n/* harmony import */ var _components_InvoiceFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/InvoiceFormData */ \"./components/InvoiceFormData.jsx\");\n/* harmony import */ var _components_MyDocument__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/MyDocument */ \"./components/MyDocument.jsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-pdf/renderer */ \"./node_modules/@react-pdf/renderer/lib/react-pdf.browser.es.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    // Create styles\n    const [mount, setMount] = react__WEBPACK_IMPORTED_MODULE_6___default().useState(false);\n    react__WEBPACK_IMPORTED_MODULE_6___default().useEffect(()=>{\n        setMount(true);\n    }, []);\n    const [firstName, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const [lastName, setLastName] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const [taxOffice, setTaxOffice] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const [taxNumber, setTaxNumber] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const [tcIdentityNumber, setTcIdentityNumber] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const [logo, setLogo] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const [productName, setProductName] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const [productPrice, setProductPrice] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const [productCurrency, setProductCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const [invoiceType, setInvoiceType] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0);\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        setInvoiceData({\n            receiver: {\n                firstName,\n                lastName,\n                address,\n                taxOffice,\n                taxNumber,\n                tcIdentityNumber,\n                productCurrency\n            },\n            items,\n            logo,\n            totalPrice\n        });\n    }, [\n        firstName,\n        lastName,\n        address,\n        taxOffice,\n        tcIdentityNumber,\n        taxNumber,\n        logo,\n        productName,\n        productPrice,\n        productCurrency,\n        items\n    ]);\n    const totalPrice = items.reduce((accumulator, currentItem)=>{\n        return accumulator + currentItem.productPrice;\n    }, 0);\n    const [invoiceData1, setInvoiceData] = react__WEBPACK_IMPORTED_MODULE_6___default().useState({\n        receiver: {\n            firstName,\n            lastName,\n            address,\n            taxOffice,\n            tcIdentityNumber\n        },\n        items,\n        totalPrice,\n        logo\n    });\n    const removeItem = (index)=>{\n        const updatedItems = [\n            ...items\n        ];\n        updatedItems.splice(index, 1);\n        setItems(updatedItems);\n    };\n    const handleAddItem = ()=>{\n        if (productName && productPrice) {\n            const newItem = {\n                productName,\n                productPrice: parseFloat(productPrice),\n                productCurrency\n            };\n            setItems([\n                ...items,\n                newItem\n            ]);\n            setProductName(\"\");\n            setProductPrice(\"\");\n        }\n    };\n    const handleChange = (event)=>{\n        setInvoiceType(event.target.value);\n        setTaxNumber(\"\");\n        setTcIdentityNumber(\"\");\n        setLastName(\"\");\n    };\n    const handle2Change = (event)=>{\n        setProductCurrency(event.target.value);\n        setItems([]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Invoice Creator\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\pages\\\\index.jsx\",\n                    lineNumber: 133,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\pages\\\\index.jsx\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, this),\n            mount && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Invoice__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        data: invoiceData1\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\pages\\\\index.jsx\",\n                        lineNumber: 140,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\pages\\\\index.jsx\",\n                    lineNumber: 137,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"5FQnovzpJZc+nHuFUJDYquXtzJc=\");\n_c = Home;\nconst SavePDFButton = ()=>{\n    const handleSavePDF = async ()=>{\n        const blob = await pdf(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MyDocument__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            data: invoiceData\n        }, void 0, false, {\n            fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\pages\\\\index.jsx\",\n            lineNumber: 150,\n            columnNumber: 28\n        }, undefined)).toBlob();\n        saveAs(blob, \"invoice.pdf\");\n    //location.reload();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n            colorScheme: \"green\",\n            variant: \"outline\",\n            // onClick={handleSavePDF}\n            onClick: ()=>window.print(),\n            children: \"PDF OLUŞTUR\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\pages\\\\index.jsx\",\n            lineNumber: 157,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c1 = SavePDFButton;\nvar _c, _c1;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"SavePDFButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZDs7Ozs7Ozs7Ozs7Ozs7QUFNM0I7R0F0SHdCakM7S0FBQUE7QUF3SHhCLE1BQU1nRCxnQkFBZ0I7SUFDcEIsTUFBTUMsZ0JBQWdCO1FBQ3BCLE1BQU1DLE9BQU8sTUFBTUMsa0JBQUksOERBQUMzRSw4REFBVUE7WUFBQ3VFLE1BQU1kOzs7Ozt1QkFBaUJtQixNQUFNO1FBQ2hFQyxPQUFPSCxNQUFNO0lBQ2Isb0JBQW9CO0lBQ3RCO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUN2RSxvREFBTUE7WUFDTDJFLGFBQWE7WUFDYkMsU0FBUztZQUNULDBCQUEwQjtZQUMxQkMsU0FBUyxJQUFNQyxPQUFPQyxLQUFLO3NCQUM1Qjs7Ozs7OztBQUtQO01BbkJNViIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW52b2ljZSBmcm9tIFwiQC9jb21wb25lbnRzL0ludm9pY2VcIjtcclxuaW1wb3J0IEludm9pY2VGb3JtRGF0YSBmcm9tIFwiQC9jb21wb25lbnRzL0ludm9pY2VGb3JtRGF0YVwiO1xyXG5pbXBvcnQgTXlEb2N1bWVudCBmcm9tIFwiQC9jb21wb25lbnRzL015RG9jdW1lbnRcIjtcclxuaW1wb3J0IHsgQ2xvc2VJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIENvbnRhaW5lcixcclxuICBEaXZpZGVyLFxyXG4gIEZsZXgsXHJcbiAgSFN0YWNrLFxyXG4gIEljb25CdXR0b24sXHJcbiAgSW5wdXQsXHJcbiAgU2VsZWN0LFxyXG4gIFN0YWNrLFxyXG4gIFRhYmxlLFxyXG4gIFRhYmxlQ29udGFpbmVyLFxyXG4gIFRib2R5LFxyXG4gIFRkLFxyXG4gIFRoZWFkLFxyXG4gIFRyLFxyXG4gIFZTdGFjayxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBQREZWaWV3ZXIgfSBmcm9tIFwiQHJlYWN0LXBkZi9yZW5kZXJlclwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIC8vIENyZWF0ZSBzdHlsZXNcclxuICBjb25zdCBbbW91bnQsIHNldE1vdW50XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldE1vdW50KHRydWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgW2ZpcnN0TmFtZSwgc2V0Rmlyc3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsYXN0TmFtZSwgc2V0TGFzdE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RheE9mZmljZSwgc2V0VGF4T2ZmaWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0YXhOdW1iZXIsIHNldFRheE51bWJlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgW3RjSWRlbnRpdHlOdW1iZXIsIHNldFRjSWRlbnRpdHlOdW1iZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvZ28sIHNldExvZ29dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Byb2R1Y3ROYW1lLCBzZXRQcm9kdWN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJvZHVjdFByaWNlLCBzZXRQcm9kdWN0UHJpY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Byb2R1Y3RDdXJyZW5jeSwgc2V0UHJvZHVjdEN1cnJlbmN5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBbaW52b2ljZVR5cGUsIHNldEludm9pY2VUeXBlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEludm9pY2VEYXRhKHtcclxuICAgICAgcmVjZWl2ZXI6IHtcclxuICAgICAgICBmaXJzdE5hbWUsXHJcbiAgICAgICAgbGFzdE5hbWUsXHJcbiAgICAgICAgYWRkcmVzcyxcclxuICAgICAgICB0YXhPZmZpY2UsXHJcbiAgICAgICAgdGF4TnVtYmVyLFxyXG4gICAgICAgIHRjSWRlbnRpdHlOdW1iZXIsXHJcbiAgICAgICAgcHJvZHVjdEN1cnJlbmN5LFxyXG4gICAgICB9LFxyXG4gICAgICBpdGVtcyxcclxuICAgICAgbG9nbyxcclxuICAgICAgdG90YWxQcmljZSxcclxuICAgIH0pO1xyXG4gIH0sIFtcclxuICAgIGZpcnN0TmFtZSxcclxuICAgIGxhc3ROYW1lLFxyXG4gICAgYWRkcmVzcyxcclxuICAgIHRheE9mZmljZSxcclxuICAgIHRjSWRlbnRpdHlOdW1iZXIsXHJcbiAgICB0YXhOdW1iZXIsXHJcbiAgICBsb2dvLFxyXG4gICAgcHJvZHVjdE5hbWUsXHJcbiAgICBwcm9kdWN0UHJpY2UsXHJcbiAgICBwcm9kdWN0Q3VycmVuY3ksXHJcbiAgICBpdGVtcyxcclxuICBdKTtcclxuXHJcbiAgY29uc3QgdG90YWxQcmljZSA9IGl0ZW1zLnJlZHVjZSgoYWNjdW11bGF0b3IsIGN1cnJlbnRJdGVtKSA9PiB7XHJcbiAgICByZXR1cm4gYWNjdW11bGF0b3IgKyBjdXJyZW50SXRlbS5wcm9kdWN0UHJpY2U7XHJcbiAgfSwgMCk7XHJcblxyXG4gIGNvbnN0IFtpbnZvaWNlRGF0YSwgc2V0SW52b2ljZURhdGFdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgcmVjZWl2ZXI6IHtcclxuICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICBsYXN0TmFtZSxcclxuICAgICAgYWRkcmVzcyxcclxuICAgICAgdGF4T2ZmaWNlLFxyXG4gICAgICB0Y0lkZW50aXR5TnVtYmVyLFxyXG4gICAgfSxcclxuICAgIGl0ZW1zLFxyXG4gICAgdG90YWxQcmljZSxcclxuICAgIGxvZ28sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJlbW92ZUl0ZW0gPSAoaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZWRJdGVtcyA9IFsuLi5pdGVtc107XHJcbiAgICB1cGRhdGVkSXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIHNldEl0ZW1zKHVwZGF0ZWRJdGVtcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkSXRlbSA9ICgpID0+IHtcclxuICAgIGlmIChwcm9kdWN0TmFtZSAmJiBwcm9kdWN0UHJpY2UpIHtcclxuICAgICAgY29uc3QgbmV3SXRlbSA9IHtcclxuICAgICAgICBwcm9kdWN0TmFtZSxcclxuICAgICAgICBwcm9kdWN0UHJpY2U6IHBhcnNlRmxvYXQocHJvZHVjdFByaWNlKSxcclxuICAgICAgICBwcm9kdWN0Q3VycmVuY3ksXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBzZXRJdGVtcyhbLi4uaXRlbXMsIG5ld0l0ZW1dKTtcclxuICAgICAgc2V0UHJvZHVjdE5hbWUoXCJcIik7XHJcbiAgICAgIHNldFByb2R1Y3RQcmljZShcIlwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEludm9pY2VUeXBlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICBzZXRUYXhOdW1iZXIoXCJcIik7XHJcbiAgICBzZXRUY0lkZW50aXR5TnVtYmVyKFwiXCIpO1xyXG4gICAgc2V0TGFzdE5hbWUoXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlMkNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0UHJvZHVjdEN1cnJlbmN5KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICBzZXRJdGVtcyhbXSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5JbnZvaWNlIENyZWF0b3I8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIHttb3VudCAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxGbGV4ICA+XHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICA8SW52b2ljZSBkYXRhPXtpbnZvaWNlRGF0YX0gLz5cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IFNhdmVQREZCdXR0b24gPSAoKSA9PiB7XHJcbiAgY29uc3QgaGFuZGxlU2F2ZVBERiA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBwZGYoPE15RG9jdW1lbnQgZGF0YT17aW52b2ljZURhdGF9IC8+KS50b0Jsb2IoKTtcclxuICAgIHNhdmVBcyhibG9iLCBcImludm9pY2UucGRmXCIpO1xyXG4gICAgLy9sb2NhdGlvbi5yZWxvYWQoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGNvbG9yU2NoZW1lPXtcImdyZWVuXCJ9XHJcbiAgICAgICAgdmFyaWFudD17XCJvdXRsaW5lXCJ9XHJcbiAgICAgICAgLy8gb25DbGljaz17aGFuZGxlU2F2ZVBERn1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cucHJpbnQoKX1cclxuICAgICAgPlxyXG4gICAgICAgIFBERiBPTFXFnlRVUlxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJJbnZvaWNlIiwiSW52b2ljZUZvcm1EYXRhIiwiTXlEb2N1bWVudCIsIkNsb3NlSWNvbiIsIkJveCIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIkRpdmlkZXIiLCJGbGV4IiwiSFN0YWNrIiwiSWNvbkJ1dHRvbiIsIklucHV0IiwiU2VsZWN0IiwiU3RhY2siLCJUYWJsZSIsIlRhYmxlQ29udGFpbmVyIiwiVGJvZHkiLCJUZCIsIlRoZWFkIiwiVHIiLCJWU3RhY2siLCJQREZWaWV3ZXIiLCJIZWFkIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJtb3VudCIsInNldE1vdW50IiwiZmlyc3ROYW1lIiwic2V0Rmlyc3ROYW1lIiwibGFzdE5hbWUiLCJzZXRMYXN0TmFtZSIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwidGF4T2ZmaWNlIiwic2V0VGF4T2ZmaWNlIiwidGF4TnVtYmVyIiwic2V0VGF4TnVtYmVyIiwidGNJZGVudGl0eU51bWJlciIsInNldFRjSWRlbnRpdHlOdW1iZXIiLCJsb2dvIiwic2V0TG9nbyIsInByb2R1Y3ROYW1lIiwic2V0UHJvZHVjdE5hbWUiLCJwcm9kdWN0UHJpY2UiLCJzZXRQcm9kdWN0UHJpY2UiLCJwcm9kdWN0Q3VycmVuY3kiLCJzZXRQcm9kdWN0Q3VycmVuY3kiLCJpbnZvaWNlVHlwZSIsInNldEludm9pY2VUeXBlIiwiaXRlbXMiLCJzZXRJdGVtcyIsInNldEludm9pY2VEYXRhIiwicmVjZWl2ZXIiLCJ0b3RhbFByaWNlIiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJjdXJyZW50SXRlbSIsImludm9pY2VEYXRhIiwicmVtb3ZlSXRlbSIsImluZGV4IiwidXBkYXRlZEl0ZW1zIiwic3BsaWNlIiwiaGFuZGxlQWRkSXRlbSIsIm5ld0l0ZW0iLCJwYXJzZUZsb2F0IiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZTJDaGFuZ2UiLCJ0aXRsZSIsImRhdGEiLCJTYXZlUERGQnV0dG9uIiwiaGFuZGxlU2F2ZVBERiIsImJsb2IiLCJwZGYiLCJ0b0Jsb2IiLCJzYXZlQXMiLCJjb2xvclNjaGVtZSIsInZhcmlhbnQiLCJvbkNsaWNrIiwid2luZG93IiwicHJpbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});