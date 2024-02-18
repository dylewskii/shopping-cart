import styles from "./ShopBanner.module.css";

function ShopBanner() {
  return (
    <section className={styles.shopBanner}>
      <div className={styles.shopBannerHeader}>
        <h3>Shop Now</h3>
        <a>See All</a>
      </div>
      <div className={styles.shopBannerItems}>
        <div className={styles.shopItem}>
          <img src="" alt="" />
          <p className={styles.shopItemTitle}>KNIT1</p>
          <p className={styles.shopItemDescription}>Becks Knit Sweater</p>
          <p className={styles.shopItemPrice}>£100.19</p>
        </div>
        <div className={styles.shopItem}>
          <img src="" alt="" />
          <p className={styles.shopItemTitle}>KNIT2</p>
          <p className={styles.shopItemDescription}>Vics Knit Sweater</p>
          <p className={styles.shopItemPrice}>£101.22</p>
        </div>
        <div className={styles.shopItem}>
          <img src="" alt="" />
          <p className={styles.shopItemTitle}>KNIT2</p>
          <p className={styles.shopItemDescription}>Vics Knit Sweater</p>
          <p className={styles.shopItemPrice}>£101.22</p>
        </div>
      </div>
    </section>
  );
}

export default ShopBanner;
