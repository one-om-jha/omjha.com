import Layout from '../components/layout'
import styles from '../styles/utils.module.css'
import albumStyles from '../styles/1aad.module.css'
import { getSortedPostsData } from '../lib/1aad'
import Link from 'next/link'
import Album from '../components/album'

export default function Blog({ allPostsData }) {
    return (
        <Layout color='#000' theme='dark'>
            <div className={styles.blogList}>
                {allPostsData.map((post) => (
                    <Link href={`1aad/${post.id}`} key={post.id}>
                        <button className={albumStyles.button}>
                        <Album
                            image={`/1aad/${post.image}`}
                            title={post.title}
                            date={post.date}
                            description={post.description}
                            size={200}
                            />
                        </button>
                    </Link>
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