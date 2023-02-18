import type { GetServerSideProps, GetServerSidePropsResult, NextPage } from 'next'
import { Session } from 'next-auth/core/types'
import { getSession, useSession } from 'next-auth/react'
import Head from 'next/head'
import Center from '../components/Center'
import Player from '../components/Player'
import Sidebar from '../components/Sidebar'

interface ServerProps {
  session: Session | null
}


const Home: NextPage = () => {

  const { data, status } = useSession()
  return (
    <div className="bg-black h-screen w-screen overflow-hidden">
      <Head>
        <title>Spotify 2.0</title>
      </Head>

      <main className='flex h-[90%]'>
        <Sidebar />
        <Center />
      </main>

      <footer className=''>
        <Player />
      </footer>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context): Promise<GetServerSidePropsResult<ServerProps>> => {

  const session = await getSession(context)

  return {
    props: {
      session
    }
  }
}



export default Home
