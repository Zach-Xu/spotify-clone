import type { GetServerSideProps, GetServerSidePropsResult, NextPage } from 'next'
import { Session } from 'next-auth/core/types'
import { getSession, useSession } from 'next-auth/react'
import Head from 'next/head'
import Center from '../components/Center'
import Sidebar from '../components/Sidebar'

interface ServerProps {
  session: Session | null
}


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

export const getServerSideProps: GetServerSideProps = async (context): Promise<GetServerSidePropsResult<ServerProps>> => {

  const session = await getSession(context)

  return {
    props: {
      session
    }
  }
}



export default Home
