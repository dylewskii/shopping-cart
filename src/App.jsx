// context
// import PageContext from "./context/PageContext";
// css
import "./App.css";
// pages
import Homepage from "./pages/Homepage";
// components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SignUp from "./components/sign-up/SignUp";

function App() {
  return (
    <>
      <Header />
      <Homepage />
      <SignUp />
      <Footer />
    </>
  );
}

export default App;
