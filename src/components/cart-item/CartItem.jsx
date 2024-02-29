import PropTypes from "prop-types";
import styles from "./CartItem.module.css";

export default function CartItem({ children }) {
  return <div className={styles.cartItemBox}>{children}</div>;
}

CartItem.ProductImage = ({ src, alt }) => {
  return (
    <div className={styles.imageWrapper}>
      <img src={src} alt={alt} />
    </div>
  );
};

CartItem.Info = ({ children }) => {
  return <div className={styles.info}>{children}</div>;
};

CartItem.Title = ({ children }) => {
  return <p className={styles.title}>{children}</p>;
};

CartItem.Description = ({ children }) => {
  return <p className={styles.description}>{children}</p>;
};

CartItem.Color = ({ children }) => {
  return <p className={styles.color}>{children}</p>;
};

CartItem.Size = ({ children }) => {
  return <p className={styles.size}>{children}</p>;
};

CartItem.Price = ({ children }) => {
  return <p className={styles.price}>{children}</p>;
};

CartItem.RemoveBtn = ({ children }) => {
  return <button className={styles.removeBtn}>{children}</button>;
};

// Prop Types
CartItem.propTypes = { children: PropTypes.node };
CartItem.ProductImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
CartItem.Info.propTypes = { children: PropTypes.node };
CartItem.Title.propTypes = { children: PropTypes.node };
CartItem.Description.propTypes = { children: PropTypes.node };
CartItem.Color.propTypes = { children: PropTypes.node };
CartItem.Size.propTypes = { children: PropTypes.node };
CartItem.Price.propTypes = { children: PropTypes.node };
CartItem.RemoveBtn.propTypes = { children: PropTypes.node };

// Display Names
CartItem.ProductImage.displayName = "CartItem.ProductImage.displayName";
CartItem.Info.displayName = "CartItem.Info.displayName";
CartItem.Title.displayName = "CartItem.Title.displayName";
CartItem.Description.displayName = "CartItem.Description.displayName";
CartItem.Color.displayName = "CartItem.Color.displayName";
CartItem.Size.displayName = "CartItem.Size.displayName";
CartItem.Price.displayName = "CartItem.Price.displayName";
CartItem.RemoveBtn.displayName = "CartItem.RemoveBtn.displayName";
