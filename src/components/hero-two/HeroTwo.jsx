import styles from "./HeroTwo.module.css";
import heroTwoImg from "../../assets/images/homepage/rocky-twins-touch.webp";

function HeroTwo() {
  return (
    <section className={styles.heroTwo}>
      <div className={styles.heroTwoImg}>
        <div className={styles.heroTwoImgWrapper}>
          <img src={heroTwoImg} alt="Two men stood touching large rocks" />
        </div>
      </div>
      <div className={styles.heroTwoHeader}>
        <h2>Make a Statement With These Pieces</h2>
        <p>
          This curation of pieces literally makes a statement, whether it be a
          bold fashion sense or eye-catching detail. Elevate your outfit with a
          new color, pattern or silhouette.
        </p>
      </div>
    </section>
  );
}

export default HeroTwo;
