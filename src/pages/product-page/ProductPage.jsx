// react
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import CartContext from "../../context/CartContext";
import ProductExpanded from "../../components/product-expanded/ProductExpanded";
// css
import styles from "./ProductPage.module.css";
// data
import shopData from "../../data/shopData.json";
// utils
import formatCurrency from "../../utils/formatCurrency";

export default function ProductPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { handleAddToCart, handleSizeSelection, selectedSize } =
    useContext(CartContext);

  const targetProduct = shopData.find(
    (item) => item.id === parseInt(productId)
  );

  // navigate to NotFound if incorrect productId
  useEffect(() => {
    if (!targetProduct) {
      navigate("/*");
    }
  }, [navigate, productId, targetProduct]);

  if (!targetProduct) {
    return null;
  }

  return (
    <section className={styles.productPage}>
      <ProductExpanded>
        <ProductExpanded.ProductImage
          src={`/${targetProduct.src.front}`}
          alt={targetProduct.alt}
        />
        <div className={styles.detailsBox}>
          <ProductExpanded.Title>{targetProduct.brand}</ProductExpanded.Title>
          <ProductExpanded.Description>
            {targetProduct.description} - {targetProduct.color}
          </ProductExpanded.Description>
          <ProductExpanded.Price>
            {formatCurrency(targetProduct.price)}
          </ProductExpanded.Price>
        </div>
        <ProductExpanded.Sizing
          handleSizeSelection={handleSizeSelection}
          selectedSize={selectedSize}
        />
        <ProductExpanded.AddToCart
          handleAddToCart={() => handleAddToCart(targetProduct)}
          selectedSize={selectedSize}
        />
      </ProductExpanded>
    </section>
  );
}
