import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [taxOffice, setTaxOffice] = useState("");
  const [taxNumber, setTaxNumber] = useState("");

  const [tcIdentityNumber, setTcIdentityNumber] = useState("");
  const [logo, setLogo] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCurrency, setProductCurrency] = useState("");

  const [invoiceNumber, setInvoiceNumber] = useState(0);
 

  const [items, setItems] = useState([]);

  const calculateTotalPrice = () => {
    return items.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.productPrice;
    }, 0);
  };

  const InvoiceDataContext = () => {
    const [invoiceData, setInvoiceData] = useState({
      receiver: {
        firstName,
        lastName,
        address,
        taxOffice,
        tcIdentityNumber,
        productCurrency,
      },
      items,
      totalPrice: calculateTotalPrice(),
      logo,
      invoiceNumber,
    });

    useEffect(() => {
      setInvoiceData((prevInvoiceData) => ({
        ...prevInvoiceData,
        receiver: {
          firstName,
          lastName,
          address,
          taxOffice,
          taxNumber,
          tcIdentityNumber,
          productCurrency,
        },
        items,
        logo,
        totalPrice: calculateTotalPrice(),
        invoiceNumber,
      }));
    }, [firstName, lastName, address, taxOffice, tcIdentityNumber, taxNumber, logo, productName, productPrice, productCurrency, items, invoiceNumber]);

    return { invoiceData, setInvoiceData };
  };

  const contextValue = {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    address,
    setAddress,
    taxOffice,
    setTaxOffice,
    taxNumber,
    setTaxNumber,
    tcIdentityNumber,
    setTcIdentityNumber,
    logo,
    setLogo,
    productName,
    setProductName,
    productPrice,
    setProductPrice,
    productCurrency,
    setProductCurrency,
    invoiceNumber,
    setInvoiceNumber,
    invoiceType,
    setInvoiceType,
    items,
    setItems,
    InvoiceDataContext,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
