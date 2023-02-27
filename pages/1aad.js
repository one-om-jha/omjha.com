import Layout from '../components/layout'
import styles from '../styles/utils.module.css'
import albumStyles from '../styles/1aad.module.css'
import { getSortedPostsData } from '../lib/1aad'
import Link from 'next/link'
import Album from '../components/album'

export default function Blog({ allPostsData }) {
    return (
        <Layout color='#111' theme='dark' size='large'>
            <h4>1aad is a project to listen to 1 album every day of 2022.
                <br />
                I previously did this in 2021. (archive coming soon!)
            </h4>

            <div className={styles.blogList}>
                {allPostsData.map((post) => (
                    <Link href={`1aad/${post.id}`} key={post.id} legacyBehavior>
                        <button className={albumStyles.button}>
                        <Album
                            image={`${post.image}`}
                            title={post.title}
                            date={`${post.date}`}
                            description={post.description}
                            size={200}
                            />
                        </button>
                    </Link>
                ))}
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}