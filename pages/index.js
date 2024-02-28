import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Notions #1 Template Site!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="NotionX" />
        <p className="description">
          <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
