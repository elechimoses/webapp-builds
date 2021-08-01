import Head from 'next/head'
import Header from '../components/Header'
import Section from '../components/Section'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Docs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header />
    <Section />
      </div>
  )
}
