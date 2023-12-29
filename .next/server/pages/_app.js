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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/AppContext.js":
/*!********************************!*\
  !*** ./contexts/AppContext.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppContextProvider: () => (/* binding */ AppContextProvider),\n/* harmony export */   useAppContext: () => (/* binding */ useAppContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst useAppContext = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);\n};\nconst AppContextProvider = ({ children })=>{\n    const [firstName, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [lastName, setLastName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [taxOffice, setTaxOffice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [taxNumber, setTaxNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [tcIdentityNumber, setTcIdentityNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [logo, setLogo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [productName, setProductName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [productPrice, setProductPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [productCurrency, setProductCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [invoiceNumber, setInvoiceNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [invoiceType, setInvoiceType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const totalPrice = items.reduce((accumulator, currentItem)=>{\n        return accumulator + currentItem.productPrice;\n    }, 0);\n    const [invoiceData, setInvoiceData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        receiver: {\n            firstName,\n            lastName,\n            address,\n            taxOffice,\n            tcIdentityNumber,\n            productCurrency\n        },\n        items,\n        totalPrice,\n        logo,\n        invoiceNumber\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setInvoiceData((prevInvoiceData)=>({\n                ...prevInvoiceData,\n                receiver: {\n                    firstName,\n                    lastName,\n                    address,\n                    taxOffice,\n                    taxNumber,\n                    tcIdentityNumber,\n                    productCurrency\n                },\n                items,\n                logo,\n                totalPrice,\n                invoiceNumber\n            }));\n    }, [\n        firstName,\n        lastName,\n        address,\n        taxOffice,\n        tcIdentityNumber,\n        taxNumber,\n        logo,\n        productName,\n        productPrice,\n        productCurrency,\n        items,\n        invoiceNumber\n    ]);\n    const contextValue = {\n        firstName,\n        setFirstName,\n        lastName,\n        setLastName,\n        address,\n        setAddress,\n        taxOffice,\n        setTaxOffice,\n        taxNumber,\n        setTaxNumber,\n        tcIdentityNumber,\n        setTcIdentityNumber,\n        logo,\n        setLogo,\n        productName,\n        setProductName,\n        productPrice,\n        setProductPrice,\n        productCurrency,\n        setProductCurrency,\n        invoiceNumber,\n        setInvoiceNumber,\n        invoiceType,\n        setInvoiceType,\n        items,\n        setItems,\n        totalPrice,\n        invoiceData,\n        setInvoiceData\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: contextValue,\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\contexts\\\\AppContext.js\",\n        lineNumber: 111,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9BcHBDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEU7QUFFOUUsTUFBTUssMkJBQWFKLG9EQUFhQTtBQUV6QixNQUFNSyxnQkFBZ0I7SUFDM0IsT0FBT0osaURBQVVBLENBQUNHO0FBQ3BCLEVBQUU7QUFFSyxNQUFNRSxxQkFBcUIsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDN0MsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1EsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNVLFNBQVNDLFdBQVcsR0FBR1gsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDWSxXQUFXQyxhQUFhLEdBQUdiLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2MsV0FBV0MsYUFBYSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNLENBQUNnQixrQkFBa0JDLG9CQUFvQixHQUFHakIsK0NBQVFBLENBQUM7SUFDekQsTUFBTSxDQUFDa0IsTUFBTUMsUUFBUSxHQUFHbkIsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDb0IsYUFBYUMsZUFBZSxHQUFHckIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDc0IsY0FBY0MsZ0JBQWdCLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUN3QixpQkFBaUJDLG1CQUFtQixHQUFHekIsK0NBQVFBLENBQUM7SUFFdkQsTUFBTSxDQUFDMEIsZUFBZUMsaUJBQWlCLEdBQUczQiwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUM0QixhQUFhQyxlQUFlLEdBQUc3QiwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNLENBQUM4QixPQUFPQyxTQUFTLEdBQUcvQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXJDLE1BQU1nQyxhQUFhRixNQUFNRyxNQUFNLENBQUMsQ0FBQ0MsYUFBYUM7UUFDNUMsT0FBT0QsY0FBY0MsWUFBWWIsWUFBWTtJQUMvQyxHQUFHO0lBRUgsTUFBTSxDQUFDYyxhQUFhQyxlQUFlLEdBQUdyQywrQ0FBUUEsQ0FBQztRQUM3Q3NDLFVBQVU7WUFDUmhDO1lBQ0FFO1lBQ0FFO1lBQ0FFO1lBQ0FJO1lBQ0FRO1FBQ0Y7UUFDQU07UUFDQUU7UUFDQWQ7UUFDQVE7SUFDRjtJQUVBekIsZ0RBQVNBLENBQUM7UUFDUm9DLGVBQWUsQ0FBQ0Usa0JBQXFCO2dCQUNuQyxHQUFHQSxlQUFlO2dCQUNsQkQsVUFBVTtvQkFDUmhDO29CQUNBRTtvQkFDQUU7b0JBQ0FFO29CQUNBRTtvQkFDQUU7b0JBQ0FRO2dCQUNGO2dCQUNBTTtnQkFDQVo7Z0JBQ0FjO2dCQUNBTjtZQUNGO0lBQ0YsR0FBRztRQUNEcEI7UUFDQUU7UUFDQUU7UUFDQUU7UUFDQUk7UUFDQUY7UUFDQUk7UUFDQUU7UUFDQUU7UUFDQUU7UUFDQU07UUFDQUo7S0FDRDtJQUVELE1BQU1jLGVBQWU7UUFDbkJsQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBSTtRQUNBQztJQUNGO0lBRUEscUJBQ0UsOERBQUNuQyxXQUFXdUMsUUFBUTtRQUFDQyxPQUFPRjtrQkFBZW5DOzs7Ozs7QUFFL0MsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3BkZi1pbnZvaWNlLWNyZWF0b3IvLi9jb250ZXh0cy9BcHBDb250ZXh0LmpzP2NiMzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXBwQ29udGV4dCA9ICgpID0+IHtcclxuICByZXR1cm4gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBcHBDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW2ZpcnN0TmFtZSwgc2V0Rmlyc3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsYXN0TmFtZSwgc2V0TGFzdE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RheE9mZmljZSwgc2V0VGF4T2ZmaWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0YXhOdW1iZXIsIHNldFRheE51bWJlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgW3RjSWRlbnRpdHlOdW1iZXIsIHNldFRjSWRlbnRpdHlOdW1iZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvZ28sIHNldExvZ29dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Byb2R1Y3ROYW1lLCBzZXRQcm9kdWN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJvZHVjdFByaWNlLCBzZXRQcm9kdWN0UHJpY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Byb2R1Y3RDdXJyZW5jeSwgc2V0UHJvZHVjdEN1cnJlbmN5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBbaW52b2ljZU51bWJlciwgc2V0SW52b2ljZU51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaW52b2ljZVR5cGUsIHNldEludm9pY2VUeXBlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgdG90YWxQcmljZSA9IGl0ZW1zLnJlZHVjZSgoYWNjdW11bGF0b3IsIGN1cnJlbnRJdGVtKSA9PiB7XHJcbiAgICByZXR1cm4gYWNjdW11bGF0b3IgKyBjdXJyZW50SXRlbS5wcm9kdWN0UHJpY2U7XHJcbiAgfSwgMCk7XHJcblxyXG4gIGNvbnN0IFtpbnZvaWNlRGF0YSwgc2V0SW52b2ljZURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgcmVjZWl2ZXI6IHtcclxuICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICBsYXN0TmFtZSxcclxuICAgICAgYWRkcmVzcyxcclxuICAgICAgdGF4T2ZmaWNlLFxyXG4gICAgICB0Y0lkZW50aXR5TnVtYmVyLFxyXG4gICAgICBwcm9kdWN0Q3VycmVuY3ksXHJcbiAgICB9LFxyXG4gICAgaXRlbXMsXHJcbiAgICB0b3RhbFByaWNlLFxyXG4gICAgbG9nbyxcclxuICAgIGludm9pY2VOdW1iZXIsXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRJbnZvaWNlRGF0YSgocHJldkludm9pY2VEYXRhKSA9PiAoe1xyXG4gICAgICAuLi5wcmV2SW52b2ljZURhdGEsXHJcbiAgICAgIHJlY2VpdmVyOiB7XHJcbiAgICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICAgIGxhc3ROYW1lLFxyXG4gICAgICAgIGFkZHJlc3MsXHJcbiAgICAgICAgdGF4T2ZmaWNlLFxyXG4gICAgICAgIHRheE51bWJlcixcclxuICAgICAgICB0Y0lkZW50aXR5TnVtYmVyLFxyXG4gICAgICAgIHByb2R1Y3RDdXJyZW5jeSxcclxuICAgICAgfSxcclxuICAgICAgaXRlbXMsXHJcbiAgICAgIGxvZ28sXHJcbiAgICAgIHRvdGFsUHJpY2UsXHJcbiAgICAgIGludm9pY2VOdW1iZXIsXHJcbiAgICB9KSk7XHJcbiAgfSwgW1xyXG4gICAgZmlyc3ROYW1lLFxyXG4gICAgbGFzdE5hbWUsXHJcbiAgICBhZGRyZXNzLFxyXG4gICAgdGF4T2ZmaWNlLFxyXG4gICAgdGNJZGVudGl0eU51bWJlcixcclxuICAgIHRheE51bWJlcixcclxuICAgIGxvZ28sXHJcbiAgICBwcm9kdWN0TmFtZSxcclxuICAgIHByb2R1Y3RQcmljZSxcclxuICAgIHByb2R1Y3RDdXJyZW5jeSxcclxuICAgIGl0ZW1zLFxyXG4gICAgaW52b2ljZU51bWJlcixcclxuICBdKTtcclxuXHJcbiAgY29uc3QgY29udGV4dFZhbHVlID0ge1xyXG4gICAgZmlyc3ROYW1lLFxyXG4gICAgc2V0Rmlyc3ROYW1lLFxyXG4gICAgbGFzdE5hbWUsXHJcbiAgICBzZXRMYXN0TmFtZSxcclxuICAgIGFkZHJlc3MsXHJcbiAgICBzZXRBZGRyZXNzLFxyXG4gICAgdGF4T2ZmaWNlLFxyXG4gICAgc2V0VGF4T2ZmaWNlLFxyXG4gICAgdGF4TnVtYmVyLFxyXG4gICAgc2V0VGF4TnVtYmVyLFxyXG4gICAgdGNJZGVudGl0eU51bWJlcixcclxuICAgIHNldFRjSWRlbnRpdHlOdW1iZXIsXHJcbiAgICBsb2dvLFxyXG4gICAgc2V0TG9nbyxcclxuICAgIHByb2R1Y3ROYW1lLFxyXG4gICAgc2V0UHJvZHVjdE5hbWUsXHJcbiAgICBwcm9kdWN0UHJpY2UsXHJcbiAgICBzZXRQcm9kdWN0UHJpY2UsXHJcbiAgICBwcm9kdWN0Q3VycmVuY3ksXHJcbiAgICBzZXRQcm9kdWN0Q3VycmVuY3ksXHJcbiAgICBpbnZvaWNlTnVtYmVyLFxyXG4gICAgc2V0SW52b2ljZU51bWJlcixcclxuICAgIGludm9pY2VUeXBlLFxyXG4gICAgc2V0SW52b2ljZVR5cGUsXHJcbiAgICBpdGVtcyxcclxuICAgIHNldEl0ZW1zLFxyXG4gICAgdG90YWxQcmljZSxcclxuICAgIGludm9pY2VEYXRhLFxyXG4gICAgc2V0SW52b2ljZURhdGEsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0VmFsdWV9PntjaGlsZHJlbn08L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFwcENvbnRleHQiLCJ1c2VBcHBDb250ZXh0IiwiQXBwQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJmaXJzdE5hbWUiLCJzZXRGaXJzdE5hbWUiLCJsYXN0TmFtZSIsInNldExhc3ROYW1lIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJ0YXhPZmZpY2UiLCJzZXRUYXhPZmZpY2UiLCJ0YXhOdW1iZXIiLCJzZXRUYXhOdW1iZXIiLCJ0Y0lkZW50aXR5TnVtYmVyIiwic2V0VGNJZGVudGl0eU51bWJlciIsImxvZ28iLCJzZXRMb2dvIiwicHJvZHVjdE5hbWUiLCJzZXRQcm9kdWN0TmFtZSIsInByb2R1Y3RQcmljZSIsInNldFByb2R1Y3RQcmljZSIsInByb2R1Y3RDdXJyZW5jeSIsInNldFByb2R1Y3RDdXJyZW5jeSIsImludm9pY2VOdW1iZXIiLCJzZXRJbnZvaWNlTnVtYmVyIiwiaW52b2ljZVR5cGUiLCJzZXRJbnZvaWNlVHlwZSIsIml0ZW1zIiwic2V0SXRlbXMiLCJ0b3RhbFByaWNlIiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJjdXJyZW50SXRlbSIsImludm9pY2VEYXRhIiwic2V0SW52b2ljZURhdGEiLCJyZWNlaXZlciIsInByZXZJbnZvaWNlRGF0YSIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/AppContext.js\n");

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/contexts/AppContext */ \"./contexts/AppContext.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__]);\n_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst UserLayout = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/next\"), __webpack_require__.e(\"vendor-chunks/@swc\"), __webpack_require__.e(\"vendor-chunks/react-icons\"), __webpack_require__.e(\"layouts_UserLayout_jsx\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../layouts/UserLayout */ \"./layouts/UserLayout.jsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"_app.jsx -> \" + \"../layouts/UserLayout\"\n        ]\n    }\n});\n\nfunction MyApp({ Component, pageProps }) {\n    let Layout = UserLayout;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ChakraProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.CSSReset, {}, void 0, false, {\n                fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\pages\\\\_app.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_1__.AppContextProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Layout, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\pages\\\\_app.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\pages\\\\_app.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\pages\\\\_app.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Github\\\\pdf-invoice-creator\\\\pages\\\\_app.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.appWithTranslation)(MyApp));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFDQztBQUN6QjtBQUNlO0FBQ2xELE1BQU1LLGFBQWFGLG1EQUFPQSxDQUFDLElBQU0sd1VBQStCOzs7Ozs7O0FBQ25DO0FBRTdCLFNBQVNHLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMsSUFBSUMsU0FBU0o7SUFFYixxQkFDRSw4REFBQ0gsNERBQWNBOzswQkFDYiw4REFBQ0Qsc0RBQVFBOzs7OzswQkFDVCw4REFBQ0Qsb0VBQWtCQTswQkFDakIsNEVBQUNTOzhCQUNDLDRFQUFDRjt3QkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xDO0FBRUEsaUVBQWVKLGdFQUFrQkEsQ0FBQ0UsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BkZi1pbnZvaWNlLWNyZWF0b3IvLi9wYWdlcy9fYXBwLmpzeD80Y2IzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcENvbnRleHRQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHRzL0FwcENvbnRleHRcIjtcclxuaW1wb3J0IHsgQ1NTUmVzZXQsIENoYWtyYVByb3ZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgeyBhcHBXaXRoVHJhbnNsYXRpb24gfSBmcm9tIFwibmV4dC1pMThuZXh0XCI7XHJcbmNvbnN0IFVzZXJMYXlvdXQgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uL2xheW91dHMvVXNlckxheW91dFwiKSk7XHJcbmltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBsZXQgTGF5b3V0ID0gVXNlckxheW91dDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDaGFrcmFQcm92aWRlcj5cclxuICAgICAgPENTU1Jlc2V0IC8+XHJcbiAgICAgIDxBcHBDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgPC9BcHBDb250ZXh0UHJvdmlkZXI+XHJcbiAgICA8L0NoYWtyYVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcFdpdGhUcmFuc2xhdGlvbihNeUFwcCk7XHJcbiJdLCJuYW1lcyI6WyJBcHBDb250ZXh0UHJvdmlkZXIiLCJDU1NSZXNldCIsIkNoYWtyYVByb3ZpZGVyIiwiZHluYW1pYyIsImFwcFdpdGhUcmFuc2xhdGlvbiIsIlVzZXJMYXlvdXQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIkxheW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@react-pdf/renderer":
/*!**************************************!*\
  !*** external "@react-pdf/renderer" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@react-pdf/renderer");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@chakra-ui/icons":
/*!***********************************!*\
  !*** external "@chakra-ui/icons" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@chakra-ui/icons");;

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.jsx")));
module.exports = __webpack_exports__;

})();