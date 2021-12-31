import Layout from '../components/layout'
import styles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/design'
import DesignPost from '../components/designPost'

export default function Blog({ allPostsData }) {
    return (
        <Layout color="#B6B0D8" theme='light'>
            <div className={styles.blogList}>
                {allPostsData.map((post) => (
                    <DesignPost
                        title={post.title}
                        image={post.image}
                        link={`/design/${post.id}`}
                        description={post.description}
                        key={post.id}
                    />
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