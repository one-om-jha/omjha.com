import Layout from '../components/layout'
import styles from '../styles/utils.module.css'
import { getImages } from '../lib/art'
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Link from 'next/link'

export default function Art({ imageList }) {
    return (
        <Layout color="#111" theme='dark'>
            <div className={styles.artContainer}>
                <iframe height="600" src="https://www.instagram.com/om.creates/embed"></iframe>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const imageList = getImages();
    return {
        props: {
            imageList
        }
    }
}