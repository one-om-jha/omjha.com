import Layout from '../components/layout'
import styles from '../styles/utils.module.css'
import { getVideos } from '../lib/video'
import Image from 'next/image'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Link from 'next/link'

export default function Art({ videoList }) {
    return (
        <Layout color="#111" theme='dark'>
            <div className={styles.artContainer}>
                <div className={styles.videoContainer}>
                    {videoList.map((video) => (
                        <iframe src={video} height="300"></iframe>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const videoList = getVideos();
    return {
        props: {
            videoList
        }
    }
}