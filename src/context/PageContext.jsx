/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const PageContext = createContext("");

export const DataProvider = ({ children }) => {
  const [selectedPage, setSelectedPage] = useState("");

  return (
    <PageContext.Provider value={{ selectedPage, setSelectedPage }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageContext;
