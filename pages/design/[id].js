import Layout from '../../components/layout'
import reactMarkdown from 'react-markdown'
import Head from 'next/head'
import Image from 'next/image'
import { getAllPostIds, getPostData } from '../../lib/design'
import styles from '../../styles/utils.module.css'

export default function Post({ postData }) {
    return (
        <Layout color="#FFF">
            <Head>
                <title>{postData.title}</title>
            </Head>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} className={styles.postContent}/>
        </Layout>
    )
}

const renderers = {
    image: image => {
        return <Image src={image.src} alt={image.alt} height={200} width={355} />
    },
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