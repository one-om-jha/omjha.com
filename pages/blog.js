import Layout from '../components/layout'
import styles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import Link from 'next/link'

export default function Blog({ allPostsData }) {
    return (
        <Layout>
            <div className={styles.blogList}>
                <h1>Writing</h1>
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