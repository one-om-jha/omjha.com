import Layout from '../components/layout'
import styles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import Link from 'next/link'

export default function Blog({ allPostsData }) {
    return (
        <Layout>
            <div className={styles.blogList}>
                <h3>These pages and notes are <i>evolving</i> ideas and concepts that I keep coming back to.
                </h3>
                {allPostsData.map((post) => (
                    <div className={styles.designPreview} key={post.id}>
                        <Link href={`/posts/${post.id}`}>
                            <a>{post.title} →</a>
                        </Link>
                        <br />
                        <p className={`${styles.description} ${styles.postDescription}`}>{post.description}</p>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}