import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = "Om Jha"
export const siteTitle = "omjha.com"

export default function Layout({ children, home, color, theme }) {
    if (typeof window !== "undefined") {
        let root = document.documentElement;
        if (color) {
            root.style.setProperty('--bg-color', `${ color }`);
        } else {
            root.style.setProperty('--bg-color', '#F1E9DA')
        }

        if (theme == 'dark') {
            root.setAttribute('theme', 'dark');
        } else {
            root.setAttribute('theme', 'light')
        }
    }
    return (
        <div className={styles.body}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={styles.container}>
                {home ? (
                    <nav className={`${styles.nav} ${utilStyles.fadeIn}`}>
                        <Link href="/"><a>home</a></Link>
                        <Link href="/design"><a>design</a></Link>
                        <Link href="/art"><a>art</a></Link>
                        <Link href="/blog"><a>writing</a></Link>
                        <Link href="/1aad"><a>1aad</a></Link>
                    </nav>
                ) : (
                    <nav className={styles.nav}>
                        <Link href="/"><a>home</a></Link>
                        <Link href="/design"><a>design</a></Link>
                        <Link href="/art"><a>art</a></Link>
                        <Link href="/blog"><a>writing</a></Link>
                        <Link href="/1aad"><a>1aad</a></Link>
                    </nav>
                )}
                <div className={styles.content}>
                    <main>
                        {children}
                    </main>
                    <div className={styles.footer}>
                        <hr />
                        <Link href="/"><a>twitter</a></Link>{' | '}
                        <Link href="/"><a>behance</a></Link>{' | '}
                        <Link href="/"><a>instagram</a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}