import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen">
      <Head>
        <title>Spotify 2.0</title>
      </Head>

      <main>
        <Sidebar />
        {/* Center */}
      </main>

      <div>
        {/* Player */}
      </div>
    </div>
  )
}

export default Home
