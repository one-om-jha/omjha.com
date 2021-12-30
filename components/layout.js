import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'

const name = "Om Jha"
export const siteTitle = "omjha.com"

export default function Layout({ children, home }) {
    return (
        <div class={styles.body}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div class={styles.container}>
                <nav class={styles.nav}>
                    <Link href="/"><a>home</a></Link>
                    <Link href="/design"><a>design</a></Link>
                    <Link href="/art"><a>art</a></Link>
                    <Link href="/blog"><a>writing</a></Link>
                    <Link href="/1aad"><a>1aad</a></Link>
                </nav>
                <div class={styles.content}>
                    <main>
                        {children}
                    </main>
                    <div class={styles.footer}>
                        <hr/>
                        <Link href="/"><a>twitter</a></Link>{' | '}
                        <Link href="/"><a>behance</a></Link>{' | '}
                        <Link href="/"><a>instagram</a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}