import Layout from '../components/layout'
import styles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/art'
import Date from '../components/date'
import Link from 'next/link'
import Image from 'next/image'

export default function Art({ allPostsData }) {
    return (
        <Layout color="#111" theme='dark'>
            <div className={styles.artList}>
                {allPostsData.map((post) => (
                    <Image
                        width={300}
                        height={300}
                        src={post.fullPath}
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