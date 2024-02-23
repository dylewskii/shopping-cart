import { createContext, useState } from "react";
import PropTypes from "prop-types";

const PageContext = createContext("");

export const PageProvider = ({ children }) => {
  const [selectedPage, setSelectedPage] = useState("");

  return (
    <PageContext.Provider value={{ selectedPage, setSelectedPage }}>
      {children}
    </PageContext.Provider>
  );
};

// Prop Types
PageProvider.propTypes = { children: PropTypes.node };

export default PageContext;
