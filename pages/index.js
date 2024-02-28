import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Navigation from '@components/Navigation' // Import der Navigation

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Notions #1 Template Site!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="NotionX" />
        <Navigation /> {/* Hier wird die Navigation eingefügt */}
      </main>

      <Footer />
    </div>
  )
}
