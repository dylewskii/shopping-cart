import ShopContent from "../../components/shop-content/ShopContent";
import shopImgData from "../../data/shopImgData.json";
import ProductCard from "../../components/product-card/ProductCard";
import formatCurrency from "../../utils/formatCurrency";

export default function ShopPage() {
  return (
    <>
      <ShopContent>
        <ShopContent.Title>New Arrivals</ShopContent.Title>
        <ShopContent.SideBar />
        <ShopContent.Products>
          {shopImgData.map((shopItem) => (
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
        </ShopContent.Products>
      </ShopContent>
    </>
  );
}
