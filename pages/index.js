import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  // Beispielhafte aktuelle Posts
  const aktuellePosts = [
    { title: 'Neues Template veröffentlicht', date: '28. Februar 2024' },
    { title: 'Tipps für effektive Nutzung von Notion', date: '25. Februar 2024' },
    // Weitere Posts hier einfügen
  ];

  return (
    <div className="container">
      <Head>
        <title>Notions #1 Template Site!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>Willkommen bei NotionX!</h1>
        <section>
          <h2>Aktuelle Posts</h2>
          <ul>
            {aktuellePosts.map((post, index) => (
              <li key={index}>
                <h3>{post.title}</h3>
                <p>Veröffentlicht am: {post.date}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  )
}
