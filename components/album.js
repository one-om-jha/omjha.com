import styles from '../styles/utils.module.css'
import albumStyles from '../styles/1aad.module.css'
import Date from './date'
import Image from 'next/image'

export default function Album({ image, title, date, description, size }) {
    return (
        <div className={albumStyles.container}>
            <Image
                src={image}
                width={size}
                height={size}
                alt={title}
                className={albumStyles.image}
                />
            <p className={albumStyles.title}>{title}</p>
            <p className={albumStyles.description}>{description}</p>
            <p className={albumStyles.date}><Date dateString={date} /></p>
        </div>
    )
}