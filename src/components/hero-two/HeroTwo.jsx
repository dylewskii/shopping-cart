import styles from "./HeroTwo.module.css";

function HeroTwo() {
  return (
    <section className={styles.heroTwo}>
      <div className={styles.heroTwoHeader}>
        <h2>Make a Statement With These Pieces</h2>
        <p>
          This curation of pieces literally makes a statement, whether it be a
          bold fashion sense or eye-catching detail. Elevate your outfit with a
          new color, pattern or silhouette.
        </p>
      </div>
      <div className={styles.heroTwoImg}>
        <div className={styles.heroTwoImgWrapper}>
          <img src="" alt="Discover the Latest Fashion Pieces" />
        </div>
      </div>
    </section>
  );
}

export default HeroTwo;
