import styles from '../styles/utils.module.css'
import designStyles from '../styles/design.module.css'
import Image from "next/image";
import Link from 'next/link'

export default function Design({ title, image, description, link }) {
    return (
        <div className={designStyles.container}>
            <Image
                width={600}
                height={450}
                src={image}
                className={designStyles.backgroundImage}
                style={{
                    maxWidth: "80%",
                    height: "450px",
                    objectFit: "cover",
                    objectPosition: "top"
                }} />
            <div className={designStyles.text}>
                <Link href={link} className={designStyles.title} legacyBehavior>
                    {title}
                </Link>
                <p className={designStyles.description}>{description}</p>
            </div>
        </div>
    );
}