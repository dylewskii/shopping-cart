// components
import Hero from "../../components/hero/Hero";
import CarouselBanner from "../../components/carousel-banner/CarouselBanner";
import ProductCard from "../../components/product-card/ProductCard";
import HeroTwo from "../../components/hero-two/HeroTwo";
// image data
import shopData from "../../data/shopData.json";
import discoverData from "../../data/discoverData.json";
import formatCurrency from "../../utils/formatCurrency";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* ------ Shop Banner ------ */}
      <CarouselBanner>
        <CarouselBanner.Header linkRedirect="shop">
          Shop Now
        </CarouselBanner.Header>
        <CarouselBanner.Items>
          {shopData.map((shopItem) => (
            <ProductCard key={shopItem.id}>
              <ProductCard.ProductImage
                src={shopItem.src.left}
                alt={shopItem.alt}
              />
              <ProductCard.Title>{shopItem.brand}</ProductCard.Title>
              <ProductCard.Description>
                {shopItem.description} - {shopItem.color}
              </ProductCard.Description>
              <ProductCard.Price>
                {formatCurrency(shopItem.price)}
              </ProductCard.Price>
            </ProductCard>
          ))}
        </CarouselBanner.Items>
      </CarouselBanner>
      <HeroTwo />
      {/* ------ Discover Banner ------ */}
      <CarouselBanner>
        <CarouselBanner.Header linkRedirect="discover">
          Discover
        </CarouselBanner.Header>
        <CarouselBanner.Items>
          {discoverData.map((discoverItem) => (
            <ProductCard key={discoverItem.id}>
              <ProductCard.ProductImage
                src={discoverItem.src}
                alt={discoverItem.alt}
              />
              <ProductCard.Title>{discoverItem.name}</ProductCard.Title>
              <ProductCard.Description>
                {discoverItem.description}
              </ProductCard.Description>
            </ProductCard>
          ))}
        </CarouselBanner.Items>
      </CarouselBanner>
    </>
  );
}
