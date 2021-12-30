import Layout from '../components/layout'
import styles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import Link from 'next/link'

export default function Blog({ allPostsData }) {
    return (
        <Layout>
            <div className={styles.blogList}>
                <hr />
                {allPostsData.map(({ id, title, description }) => (
                    <div className={styles.postPreview} key={id}>
                        <Link href={`/posts/${id}`}>
                            <a>{title}</a>
                        </Link>
                        <br />
                        <p className={styles.description}>{description}</p>
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