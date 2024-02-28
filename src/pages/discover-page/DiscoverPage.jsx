// components
import BlogEntry from "../../components/blog-entry/BlogEntry";
// data
import blogData from "../../data/blogData.json";
// css
import styles from "./DiscoverPage.module.css";

export default function DiscoverPage() {
  return (
    <>
      <section className={styles.discoverPage}>
        {blogData.map((blogItem) => (
          <BlogEntry key={blogItem.id}>
            <BlogEntry.BlogImage src={blogItem.src} alt={blogItem.alt} />
            <BlogEntry.Content>
              <BlogEntry.Title>{blogItem.title}</BlogEntry.Title>
              <BlogEntry.Description>
                {blogItem.description}
              </BlogEntry.Description>
              <BlogEntry.CallToAction>Read More</BlogEntry.CallToAction>
            </BlogEntry.Content>
          </BlogEntry>
        ))}
      </section>
      <div className={styles.marketingSeperator}>
        <p>
          Beauty, Lifestyle, Fitness, Fashion & All Your Interior Needs. Curated
          By Experts, Sent To You Weekly.
        </p>
      </div>
    </>
  );
}
