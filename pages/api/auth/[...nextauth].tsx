import NextAuth from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'
import { OAuthConfig } from 'next-auth/providers';
import { LOGIN_URL } from '../../../lib/spotify';

const options = {
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID || '',
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET || '',
            authorization: LOGIN_URL
        }),
    ],
    secret: process.env.JWT_SECRET


};

export default NextAuth(options)
