import Link from 'next/link';
import { getAllPosts } from './getAllPosts';

import styles from './page.module.css';

const BlogIndex = async () => {
  const posts = await getAllPosts();

  const groupedPosts = posts.reduce((grouped, post) => {
    const year = post.slug[0];
    const yearPosts = grouped[year] || [];
    yearPosts.push(post);
    return {
      ...grouped,
      [year]: yearPosts,
    };
  }, {} as { [year: string]: Post[] });

  return (
    <>
      <h2>Blog</h2>

      <p>
        Sometimes I remember I have a blog and write things. Follow along using
        the <Link href="/atom.xml">RSS feed</Link>.
      </p>

      <div className={styles.wrapper}>
        {Object.entries(groupedPosts)
          .reverse()
          .map(([year, posts]) => (
            <div key={year}>
              <h3 className={styles.year}>{year}</h3>
              <ul className={styles.yearList}>
                {posts.map((post) => {
                  const date = new Date(post.meta.date);

                  const month = date
                    .toLocaleDateString('en-GB', { month: 'short' })
                    .replace('Sept', 'Sep');
                  const day = date.toLocaleDateString('en-GB', {
                    day: '2-digit',
                  });

                  const url = slugToUrl(post.slug);

                  return (
                    <li key={url} className={styles.post}>
                      <span className={styles.date}>
                        {month} {day}
                      </span>
                      <Link href={url} prefetch={false}>
                        {post.meta.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
      </div>
    </>
  );
};

const slugToUrl = (slug: string[]) => {
  const [year, month, day, name] = slug;
  return `/blog/${year}/${month}/${day}/${name}`;
};

export default BlogIndex;