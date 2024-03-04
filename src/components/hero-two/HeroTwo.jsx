import styles from "./HeroTwo.module.css";
import heroTwoImg from "/public/images/homepage/rocky-twins-touch.webp";

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
          Our collection is a testament to luxury, meticulously selected to not
          just follow but set new trends in the realm of high-end streetwear.
          Each piece, crafted from the finest materials, is designed to make a
          statement—be it through a daring fashion choice or captivating detail.
        </p>
        <br></br>
        <p>
          Elevate your wardrobe with our unique selection of colors, patterns,
          and silhouettes, each curated to offer an unparalleled sartorial
          experience.
        </p>
      </div>
    </section>
  );
}

export default HeroTwo;
