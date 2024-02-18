import styles from "./DiscoverBanner.module.css";

function DiscoverBanner() {
  return (
    <section className={styles.discoverBanner}>
      <div className={styles.discoverBannerHeader}>
        <h2>Make a Statement With These Pieces</h2>
        <p>
          This curation of pieces literally makes a statement, whether it be a
          bold fashion sense or eye-catching detail. Elevate your outfit with a
          new color, pattern or silhouette.
        </p>
      </div>
      <div className={styles.discoverBannerImg}>
        <div className={styles.discoverBannerImgWrapper}>
          <img src="" alt="Discover the Latest Fashion Pieces" />
        </div>
      </div>
    </section>
  );
}

export default DiscoverBanner;
