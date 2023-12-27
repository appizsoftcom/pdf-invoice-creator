import React, { createContext, useContext } from "react";


const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = ({ children }) => {

  const contextValue = {

  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
