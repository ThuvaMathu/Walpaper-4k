import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [imageRes, setImageRes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [headerValue, setheaderValue] = useState("Desktop Wallpaper");
  const [pageValue, setPageValue] = useState(1);
  return (
    <AppContext.Provider
      value={{
        imageRes,
        setImageRes,
        isLoading,
        setIsLoading,
        headerValue,
        setheaderValue,
        pageValue,
        setPageValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useProvider = () => useContext(AppContext);

export default AppProvider;
