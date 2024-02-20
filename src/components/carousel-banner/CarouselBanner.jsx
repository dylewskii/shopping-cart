/* eslint-disable react/prop-types */
import styles from "./CarouselBanner.module.css";

function CarouselBanner({ children }) {
  return <section className={styles.carouselBanner}>{children}</section>;
}

CarouselBanner.Header = ({ children }) => {
  return (
    <div className={styles.carouselBannerHeader}>
      <h3>{children}</h3>
      <a>See All</a>
    </div>
  );
};

CarouselBanner.Items = ({ children }) => {
  return <div className={styles.carouselBannerItems}>{children}</div>;
};

CarouselBanner.displayName = "CarouselBanner";
CarouselBanner.Header.displayName = "CarouselBanner.Header";
CarouselBanner.Items.displayName = "CarouselBanner.Items";

export default CarouselBanner;
