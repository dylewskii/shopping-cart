/* eslint-disable react/prop-types */
import styles from "./ProductCard.module.css";

function ProductCard({ children }) {
  return <div className={styles.card}>{children}</div>;
}

ProductCard.ProductImage = ({ src, alt }) => {
  return <img className={styles.cardImages} src={src} alt={alt} />;
};

ProductCard.Title = ({ children }) => {
  return <p className={styles.cardTitle}>{children}</p>;
};

ProductCard.Description = ({ children }) => {
  return <p className={styles.cardDescription}>{children}</p>;
};

ProductCard.Price = ({ children }) => {
  return <p className={styles.cardPrice}>{children}</p>;
};

ProductCard.ProductImage.displayName = "ProductCard.ProductImage";
ProductCard.Title.displayName = "ProductCard.Title";
ProductCard.Description.displayName = "ProductCard.Description";
ProductCard.Price.displayName = "ProductCard.Price";

export default ProductCard;