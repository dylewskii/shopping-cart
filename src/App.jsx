import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import ShopBanner from "./components/shop-banner/ShopBanner";
import DiscoverBanner from "./components/discover-banner/DiscoverBanner";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ShopBanner></ShopBanner>
      <DiscoverBanner />
    </>
  );
}

export default App;
