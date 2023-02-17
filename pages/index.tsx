import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Center from '../components/Center'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {

  const { data, status } = useSession()
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify 2.0</title>
      </Head>

      <main className='flex'>
        <Sidebar />
        <Center />
      </main>

      <div>
        {/* Player */}
      </div>
    </div>
  )
}

export default Home
