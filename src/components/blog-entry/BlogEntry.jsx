import PropTypes from "prop-types";
import styles from "./BlogEntry.module.css";

export default function BlogEntry({ children }) {
  return <div className={styles.blogEntry}>{children}</div>;
}

BlogEntry.BlogImage = ({ src, alt }) => {
  return (
    <div className={styles.blogImgWrapper}>
      <img className={styles.blogImg} src={src} alt={alt} />
    </div>
  );
};

BlogEntry.Content = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};

BlogEntry.Title = ({ children }) => {
  return <h2 className={styles.heading}>{children}</h2>;
};

BlogEntry.Description = ({ children }) => {
  return <p className={styles.description}>{children}</p>;
};

BlogEntry.CallToAction = ({ children }) => {
  return <a className={styles.cta}>{children}</a>;
};

// Prop Types
BlogEntry.propTypes = { children: PropTypes.node };
BlogEntry.BlogImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
BlogEntry.Content.propTypes = { children: PropTypes.node };
BlogEntry.Title.propTypes = { children: PropTypes.node };
BlogEntry.Description.propTypes = { children: PropTypes.node };
BlogEntry.CallToAction.propTypes = { children: PropTypes.node };
// Display Names
BlogEntry.displayName = "BlogEntry";
BlogEntry.BlogImage.displayName = "BlogEntry.BlogImage";
BlogEntry.Content.displayName = "BlogEntry.Content";
BlogEntry.Title.displayName = "BlogEntry.Title";
BlogEntry.Description.displayName = "BlogEntry.Description";
BlogEntry.CallToAction.displayName = "BlogEntry.CallToAction";
