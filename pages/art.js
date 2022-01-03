import Layout from '../components/layout'
import styles from '../styles/utils.module.css'
import { getImages } from '../lib/art'
import Image from 'next/image'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Link from 'next/link'

export default function Art({ imageList }) {
    return (
        <Layout color="#111" theme='dark' size='large'>
            <div className={styles.artContainer}>
                <ResponsiveMasonry>
                    <Masonry
                        columnsCount={2}
                        gutter={4}
                        >
                        {imageList.map((image) => (
                            <Link href={image} key={image}>
                                <img src={image} className={styles.artImage} />
                            </Link>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
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