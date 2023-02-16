import NextAuth, { AuthOptions } from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'
import spotifyApi, { LOGIN_URL } from '../../../lib/spotify';
import { JWT } from 'next-auth/jwt'


const refreshAccessToken = async (token: JWT) => {
    try {
        spotifyApi.setAccessToken(token.accessToken as string)
        spotifyApi.setRefreshToken(token.refreshToekn as string)

        const { body } = await spotifyApi.refreshAccessToken()
        return {
            ...token,
            accessToken: body.access_token,
            accessTokenExpires: Date.now() + body.expires_in * 1000,
            refreshToekn: body.refresh_token ?? token.refreshToekn
        }
    } catch (error) {
        console.log(error)

        return {
            ...token,
            error: 'RefreshAccessTokenError'
        }
    }
}


const options: AuthOptions = {
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID || '',
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET || '',
            authorization: LOGIN_URL
        }),
    ],
    secret: process.env.JWT_SECRET,
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async jwt({ token, user, account }) {
            // initial sign in 
            if (account && user) {
                return {
                    ...token,
                    accessToken: account.access_token,
                    refreshToekn: account.refresh_token,
                    username: account.providerAccountId,
                    accessTokenExpires: (account.expires_at || 3600) * 1000,
                }
            }

            // returen previous token if the access token is not expired yet
            if (Date.now() < (token.accessTokenExpires as number)) {
                console.log('Access Token is expired')
                return token
            }

            // acess token has expired, so refresh it
            return await refreshAccessToken(token)
        },
        async session({ session, token }) {
            session.user.accessToken = token.accessToken
            session.user.refreshToken = token.refreshToekn
            session.user.username = token.username

            return session
        }

    }
};

export default NextAuth(options)
