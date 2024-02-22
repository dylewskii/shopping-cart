// css
import "./App.css";
// components
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import HeroTwo from "./components/hero-two/HeroTwo";
import CarouselBanner from "./components/carousel-banner/CarouselBanner";
import ProductCard from "./components/product-card/ProductCard";
import Footer from "./components/footer/Footer";
import SignUp from "./components/sign-up/SignUp";
// images
import blackAF1 from "./assets/images/shoes/air-force-1-black-1.webp";
import whiteAF1 from "./assets/images/shoes/air-force-1-white-1.webp";
import dunkLow from "./assets/images/shoes/dunk-low-green-1.webp";
import v2k from "./assets/images/shoes/v2k-white-1.webp";
import upsideDown from "./assets/images/homepage/upside-down-shoes.webp";
import jordansInAir from "./assets/images/homepage/orange-jordans-in-air.webp";
import furCoat from "./assets/images/homepage/fur-coat.webp";
import sideBag from "./assets/images/homepage/side-bag.webp";
import womanWalking from "./assets/images/homepage/woman-walking.webp";

function App() {
  return (
    <>
      <Header />
      <Hero />
      {/* ------ Shop Banner ------ */}
      <CarouselBanner>
        <CarouselBanner.Header>Shop Now</CarouselBanner.Header>
        {/* ------ Banner Items ------ */}
        <CarouselBanner.Items>
          {/* ------ Card One ------ */}
          <ProductCard>
            <ProductCard.ProductImage
              src={blackAF1}
              alt={"Black Air Force One Shoe"}
            />
            <ProductCard.Title>Shop Product 1</ProductCard.Title>
            <ProductCard.Description>Desc 1</ProductCard.Description>
            <ProductCard.Price>£100.00</ProductCard.Price>
          </ProductCard>
          {/* ------ Card Two ------ */}
          <ProductCard>
            <ProductCard.ProductImage
              src={whiteAF1}
              alt={"White Air Force One Shoe"}
            />
            <ProductCard.Title>Shop Product 2</ProductCard.Title>
            <ProductCard.Description>Desc 2</ProductCard.Description>
            <ProductCard.Price>£100.00</ProductCard.Price>
          </ProductCard>
          {/* ------ Card Three ------ */}
          <ProductCard>
            <ProductCard.ProductImage
              src={dunkLow}
              alt={"Green Dunk Low Shoe"}
            />
            <ProductCard.Title>Shop Product 3</ProductCard.Title>
            <ProductCard.Description>Desc 3</ProductCard.Description>
            <ProductCard.Price>£100.00</ProductCard.Price>
          </ProductCard>
          {/* ------ Card Four ------ */}
          <ProductCard>
            <ProductCard.ProductImage src={v2k} alt={"V2K White Shoe"} />
            <ProductCard.Title>Shop Product 4</ProductCard.Title>
            <ProductCard.Description>Desc 4</ProductCard.Description>
            <ProductCard.Price>£100.00</ProductCard.Price>
          </ProductCard>
        </CarouselBanner.Items>
      </CarouselBanner>
      <HeroTwo />
      {/* ------ Discover Banner ------ */}
      <CarouselBanner>
        <CarouselBanner.Header>Discover</CarouselBanner.Header>
        {/* ------ Banner Items ------ */}
        <CarouselBanner.Items>
          {/* ------ Card One ------ */}
          <ProductCard>
            <ProductCard.ProductImage
              src={furCoat}
              alt={"Man with a fur coat"}
            />
            <ProductCard.Title>Fur Coats</ProductCard.Title>
            <ProductCard.Description>
              From the Finest Materials.
            </ProductCard.Description>
          </ProductCard>
          {/* ------ Card Two ------ */}
          <ProductCard>
            <ProductCard.ProductImage
              src={jordansInAir}
              alt={"Shoes tied to an electricity line"}
            />
            <ProductCard.Title>Limited Sneakers</ProductCard.Title>
            <ProductCard.Description>Only the Rarest.</ProductCard.Description>
          </ProductCard>
          {/* ------ Card Three ------ */}
          <ProductCard>
            <ProductCard.ProductImage
              src={upsideDown}
              alt={"A person wearing shoes with their legs up"}
            />
            <ProductCard.Title>Walking Shoes</ProductCard.Title>
            <ProductCard.Description>
              Made for Everyone.
            </ProductCard.Description>
          </ProductCard>
          {/* ------ Card Four ------ */}
          <ProductCard>
            <ProductCard.ProductImage
              src={sideBag}
              alt={"A man wearing a side bag"}
            />
            <ProductCard.Title>BAGS</ProductCard.Title>
            <ProductCard.Description>
              Versatile for All Occassions.
            </ProductCard.Description>
          </ProductCard>
          {/* ------ Card Five ------ */}
          <ProductCard>
            <ProductCard.ProductImage
              src={womanWalking}
              alt={"A woman with sunglasses walking with her head to the side"}
            />
            <ProductCard.Title>Accessories</ProductCard.Title>
            <ProductCard.Description>
              Block Out the Rays.
            </ProductCard.Description>
          </ProductCard>
        </CarouselBanner.Items>
      </CarouselBanner>
      <SignUp />
      <Footer />
    </>
  );
}

export default App;
