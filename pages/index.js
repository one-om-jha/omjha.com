import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/utils.module.css'
import homeStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout color="#F1B04F">
      <h4 className={homeStyles.fadeIn}>om jha</h4>
      <h2>
        I&rsquo;m a designer, computationalist, and artist exploring new ways to intersect humanity with technology.
        <br />
        <br />
        Currently, I&rsquo;m studying Computer Science at Georgia Tech (🐝 &rsquo;24) in Atlanta, Georgia.
      </h2>

      <br />

      <div className={homeStyles.fadeIn}>
        Most recently, I&rsquo;ve
        <ul>
          <li>worked with <Link href="https://designbloc.gatech.edu"><a>Design Bloc</a></Link>, a VIP program at GT, with faculty and the ADID on a (super) cool user research project at Woodruff Park in Downtown Atlanta</li>
          <li>designed and developed at <Link href="https://www.indianstar.news"><a>Indian Star News</a></Link>, a news service targeting the Indian Diaspora</li>
          <li>
            am wearing many hats (Inventing, Designing, Advertising, Computing) at <Link href="https://5wh.com/account/homepage"><a>5WH</a></Link>, a platform that&rsquo;s
            aiming to redefine the way journalists find work and the way media organizations find news for the 21st century
          </li>
          <li>desiging and posting art on twitter and instagram</li>
          <li>playing guitar!</li>
        </ul>

        <br />
        I&rsquo;m particularly interested in
        <ul>
          <li><Link href="/"><a>computing and art</a></Link></li>
          <li><Link href="/"><a>building studios, not galleries</a></Link></li>
          <li><Link href="/"><a>tools for thought</a></Link></li>
          <li><Link href="/"><a>designing for human emotion</a></Link></li>
          <li><Link href="/"><a>news and technology</a></Link></li>
        </ul>

        contact me at <a>hello@omjha.com</a>!
      </div>
    </Layout>
  )
}