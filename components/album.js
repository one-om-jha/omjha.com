import styles from '../styles/utils.module.css'
import albumStyles from '../styles/1aad.module.css'
import Date from './date'
import Image from 'next/image'

export default function Album({ image, title, date, description, size }) {
    return (
        <div class={albumStyles.container}>
            <Image
                src={image}
                width={size}
                height={size}
                alt={title}
                />
            <p class={albumStyles.title}>{title}</p>
            <p class={albumStyles.description}>{description}</p>
            <p class={albumStyles.date}><Date dateString={date} /></p>
        </div>
    )
}