import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";

function ProductCard({ children }) {
  return <div className={styles.card}>{children}</div>;
}

ProductCard.ProductImage = ({ src, alt }) => {
  return (
    <div className={styles.cardImageWrapper}>
      <img className={styles.cardImage} src={src} alt={alt} />
    </div>
  );
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

// --- Prop Types ---
ProductCard.propTypes = { children: PropTypes.node };
ProductCard.ProductImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
ProductCard.Title.propTypes = { children: PropTypes.node };
ProductCard.Description.propTypes = { children: PropTypes.node };
ProductCard.Price.propTypes = { children: PropTypes.node };

// --- Display Names ---
ProductCard.ProductImage.displayName = "ProductCard.ProductImage";
ProductCard.Title.displayName = "ProductCard.Title";
ProductCard.Description.displayName = "ProductCard.Description";
ProductCard.Price.displayName = "ProductCard.Price";

export default ProductCard;
