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
          <li>been making Atlanta the next great startup hub as the Associate Director of Design at <Link href="https://www.startup.exchange/">Georgia Tech Startup Exchange</Link></li>
          <li>designed and developed <Link href="https://www.newindiaabroad.com">New India Abroad</Link>, a news service targeting the Indian Diaspora</li>
          <li>
            am wearing many hats (Inventing, Designing, Advertising, Computing) at <Link href="https://5wh.com/account/homepage">5WH</Link>, a platform that&rsquo;s
            aiming to redefine the way journalists find work and the way media organizations find news for the 21st century
          </li>
          <li>worked with <Link href="https://designbloc.gatech.edu">Design Bloc</Link>, a VIP program at GT, with faculty and the ADID on a (super) cool user research project at Woodruff Park in Downtown Atlanta</li>
          <li>been designing and posting art on twitter and instagram</li>
          <li>playing guitar! &#127928;</li>
        </ul>

        <br />
        I&rsquo;m particularly interested in
        <ul>
          <li><Link href="/">computing and art</Link></li>
          <li><Link href="/">building studios, not galleries</Link></li>
          <li><Link href="/">tools for thought</Link></li>
          <li><Link href="/">designing for human emotion</Link></li>
          <li><Link href="/">news and technology</Link></li>
        </ul>

        contact me at <a>hello@omjha.com</a>!
      </div>
    </Layout>
  );
}