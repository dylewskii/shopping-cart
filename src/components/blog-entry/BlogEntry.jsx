import PropTypes from "prop-types";
import styles from "./BlogEntry.module.css";

export default function BlogEntry({ children }) {
  return <div className={styles.blogEntry}>{children}</div>;
}

BlogEntry.BlogImage = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

BlogEntry.Title = ({ children }) => {
  return <h2 className={styles.heading}>{children}</h2>;
};

BlogEntry.Description = ({ children }) => {
  return <p className={styles.description}>{children}</p>;
};

// Prop Types
BlogEntry.propTypes = { children: PropTypes.node };
BlogEntry.BlogImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
BlogEntry.Title.propTypes = { children: PropTypes.node };
BlogEntry.Description.propTypes = { children: PropTypes.node };
// Display Names
BlogEntry.displayName = "BlogEntry.displayName";
BlogEntry.BlogImage.displayName = "BlogEntry.BlogImage.displayName";
BlogEntry.Title.displayName = "BlogEntry.Title.displayName";
BlogEntry.Description.displayName = "BlogEntry.Description.displayName";
