// components
import BlogEntry from "../../components/blog-entry/BlogEntry";
// data
import blogImgData from "../../data/blogImgData.json";
// css
import styles from "./DiscoverPage.module.css";

export default function DiscoverPage() {
  return (
    <section className={styles.discoverPage}>
      {blogImgData.map((blogItem) => (
        <BlogEntry key={blogItem.id}>
          <BlogEntry.BlogImage src={blogItem.src} alt={blogItem.alt} />
          <BlogEntry.Title>{blogItem.title}</BlogEntry.Title>
          <BlogEntry.Description>{blogItem.description}</BlogEntry.Description>
        </BlogEntry>
      ))}
    </section>
  );
}
