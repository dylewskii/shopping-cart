// react
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// styles
import styles from "./CarouselBanner.module.css";

function CarouselBanner({ children }) {
  return <section className={styles.carouselBanner}>{children}</section>;
}

CarouselBanner.Header = ({ children, linkRedirect }) => {
  return (
    <div className={styles.carouselBannerHeader}>
      <Link to={linkRedirect} onClick={() => window.scroll(0, 0)}>
        <h3 onClick={() => window.scroll(0, 0)}>{children}</h3>
      </Link>
      <Link
        to={`/${linkRedirect}`}
        onClick={() => window.scroll(0, 0)}
        className={styles.link}
      >
        See All
      </Link>
    </div>
  );
};

CarouselBanner.Items = ({ children }) => {
  return <div className={styles.carouselBannerItems}>{children}</div>;
};

// Prop Types
CarouselBanner.propTypes = { children: PropTypes.node };
CarouselBanner.Header.propTypes = {
  children: PropTypes.node,
  linkRedirect: PropTypes.string,
};
CarouselBanner.Items.propTypes = { children: PropTypes.node };

// Display Names
CarouselBanner.displayName = "CarouselBanner";
CarouselBanner.Header.displayName = "CarouselBanner.Header";
CarouselBanner.Items.displayName = "CarouselBanner.Items";

export default CarouselBanner;
