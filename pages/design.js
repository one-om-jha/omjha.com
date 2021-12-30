import Layout from '../components/layout'
import styles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/design'
import Date from '../components/date'
import Link from 'next/link'
import Image from 'next/image'

export default function Blog({ allPostsData }) {
    return (
        <Layout color="#fff" theme='light'>
            <div className={styles.blogList}>
                {allPostsData.map((post) => (
                    <div className={styles.postPreview} key={post.id}>
                        <Image
                            src={post.image}
                            width={300}
                            height={280}
                            objectFit='cover'
                            objectPosition='left top'
                            className={styles.designImage}
                            />
                            <br />
                        <Link href={`/posts/${post.id}`}>
                            <a>{post.title}</a>
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