import Layout from '../components/layout'
import styles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/art'
import Image from 'next/image'

export default function Art({ allPostsData }) {
    return (
        <Layout color="#111" theme='dark'>
            <div className={styles.artList}>
                {allPostsData.map((post) => (
                    <div className={styles.artContainer} key={post.id}>
                        <Image
                            objectFit='contain'
                            width={post.width}
                            height={post.height}
                            src={post.fullPath}
                        />
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