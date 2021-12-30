import Layout from '../../components/layout'
import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../lib/1aad'
import styles from '../../styles/utils.module.css'
import albumStyles from '../../styles/1aad.module.css'
import Date from '../../components/date'
import Album from '../../components/album'

export default function Post({ postData }) {
    return (
        <Layout color="#111" theme='dark'>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <div className={albumStyles.pageContainer}>
                <Album
                    image={`/1aad/${postData.image}`}
                    title={postData.title}
                    date={postData.date}
                    description={postData.description}
                    size={400}
                />
                <div className={albumStyles.contentContainer}>
                    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    // return possible id values
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
}