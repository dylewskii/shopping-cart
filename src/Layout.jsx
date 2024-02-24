import PropTypes from "prop-types";
import Header from "./components/header/Header";
import SignUp from "./components/sign-up/SignUp";
import Footer from "./components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <SignUp />
      <Footer />
    </>
  );
};

// Prop Types
Layout.propTypes = { children: PropTypes.node };

export default Layout;
