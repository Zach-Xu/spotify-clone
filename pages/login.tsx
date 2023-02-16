import type { GetServerSideProps, GetServerSidePropsResult, } from 'next'
import { BuiltInProviderType } from 'next-auth/providers'
import { getProviders, signIn, ClientSafeProvider, } from 'next-auth/react'

interface Props {
    providers: {
        [propName in BuiltInProviderType]?: ClientSafeProvider
    } | null
}

const LoginPage: React.FC<Props> = (props) => {

    const { providers } = props

    return (
        <div className='bg-black h-screen min-w-full flex flex-col items-center justify-center '>
            <img className='w-44 h-44 mb-5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png' />
            {
                providers && Object.values(providers).map(provider => (
                    <button key={provider.id} className='bg-green-500 rounded-lg px-4 py-3 text-white'
                        onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                    >
                        {`sign in with ${provider.id}`}
                    </button>
                ))
            }

        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (): Promise<GetServerSidePropsResult<Props>> => {

    const providers = await getProviders()

    return {
        props: {
            providers
        }
    }
}

export default LoginPage