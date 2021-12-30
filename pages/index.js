import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout>
      <h4>om jha</h4>
      <h2>
        I'm a designer, computationalist, and artist exploring new ways to intersect humanity with technology.
        Currently, I'm studying Computer Science at Georgia Tech (🐝 '24) in Atlanta, Georgia.
      </h2>

      <br />

      <div class={styles.body_text}>
        lately, I've been
        <ul>
          <li>working with <Link href="/"><a>Design Bloc</a></Link>, a VIP program at GT, with faculty and the ADID on a (super) cool user research project at Woodruff Park in Downtown Atlanta</li>
          <li>designing and Developing at <Link href="/"><a>Indian Star News</a></Link>, a news service targeting the Indian Diaspora</li>
          <li>
            wearing many hats (Inventing, Designing, Advertising, Computing) at <Link href="/"><a>5WH</a></Link>, a platform that's
            aiming to redefine the way journalists find work and the way media organizations find news for the 21st century
          </li>
          <li>desiging and posting art on twitter</li>
          <li>playing guitar!</li>
        </ul>

        <br />
        I'm particularly interested in
        <ul>
          <li>computing and art</li>
          <li>building studios, not galleries</li>
          <li>tools for thought</li>
          <li>designing for human emotion</li>
          <li>the media industry</li>
        </ul>

        contact me at <a>hello@omjha.com</a>!
      </div>
    </Layout>
  )
}