/* eslint-disable react-hooks/rules-of-hooks */
// react
import PropTypes from "prop-types";
// css
import styles from "./ProductExpanded.module.css";
import { useState } from "react";

export default function ProductExpanded({ children }) {
  return <div>{children}</div>;
}

ProductExpanded.ProductImage = ({ src, alt }) => {
  return (
    <div className={styles.productImageWrapper}>
      <img src={src} alt={alt} />
    </div>
  );
};

ProductExpanded.Title = ({ children }) => {
  return <p className={styles.title}>{children}</p>;
};

ProductExpanded.Description = ({ children }) => {
  return <p className={styles.description}>{children}</p>;
};

ProductExpanded.Price = ({ children }) => {
  return <p className={styles.price}>{children}</p>;
};

ProductExpanded.Sizing = () => {
  const sizes = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeSelection = (size) => {
    console.log(selectedSize);
    setSelectedSize(size);
  };

  return (
    <>
      <div className={styles.sizingBoxHeader}>
        <p>Size (UK)</p>
        <p className={styles.sizeGuide}>Size Guide</p>
      </div>
      <div className={styles.sizingBox}>
        {sizes.map((size) => (
          <div
            key={size}
            className={
              selectedSize === size
                ? `${styles.sizeCell} ${styles.selected}`
                : `${styles.sizeCell}`
            }
            onClick={() => handleSizeSelection(size)}
          >
            {size}
          </div>
        ))}
      </div>
    </>
  );
};

ProductExpanded.AddToCart = () => {
  return (
    <div className={styles.addToCartBox}>
      <button className={styles.addToCartBtn}>Add To Cart</button>
    </div>
  );
};

// Prop Types
ProductExpanded.propTypes = { children: PropTypes.node };
ProductExpanded.ProductImage.propTypes = {
  children: PropTypes.node,
  src: PropTypes.string,
  alt: PropTypes.string,
};
ProductExpanded.Title.propTypes = { children: PropTypes.node };
ProductExpanded.Description.propTypes = { children: PropTypes.node };
ProductExpanded.Price.propTypes = { children: PropTypes.node };
ProductExpanded.Sizing.propTypes = { children: PropTypes.node };
ProductExpanded.AddToCart.propTypes = { children: PropTypes.node };

// Display Names
ProductExpanded.displayName = "ProductExpanded";
ProductExpanded.ProductImage.displayName = "ProductExpanded.ProductImage";
ProductExpanded.Title.displayName = "ProductExpanded.Title";
ProductExpanded.Description.displayName = "ProductExpanded.Description";
ProductExpanded.Price.displayName = "ProductExpanded.Price";
ProductExpanded.Sizing.displayName = "ProductExpanded.Sizing";
ProductExpanded.AddToCart.displayName = "ProductExpanded.AddToCart";
