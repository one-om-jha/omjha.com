import styles from '../styles/utils.module.css'
import designStyles from '../styles/design.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Design({ title, image, description, link }) {
    return (
        <div className={designStyles.container}>
            <Image
                width={600}
                height={450}
                src={image}
                objectFit='cover'
                objectPosition='top'
                className={designStyles.backgroundImage}
                />
            <div className={designStyles.text}>
                <Link href={link}>
                    <a className={designStyles.title}>{title}</a>
                </Link>
                <p className={designStyles.description}>{description}</p>
            </div>
        </div>
    )
}