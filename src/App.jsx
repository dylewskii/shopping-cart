// context
// import PageContext from "./context/PageContext";
// css
import "./App.css";
// pages
import HomePage from "./pages/home-page/HomePage";
import ShopPage from "./pages/shop-page/ShopPage";
import DiscoverPage from "./pages/discover-page/DiscoverPage";
// components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SignUp from "./components/sign-up/SignUp";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <SignUp />
      <Footer />
    </>
  );
}

export default App;
