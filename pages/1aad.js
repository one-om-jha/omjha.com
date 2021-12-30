import Layout from '../components/layout'
import styles from '../styles/utils.module.css'
import Date from '../components/date'
import Album from '../components/album'
import Link from 'next/link'
import Image from 'next/image'

export default function Albums({ allPostsData }) {
    return (
        <Layout>
            <section className={styles.blogList}>

            </section>
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