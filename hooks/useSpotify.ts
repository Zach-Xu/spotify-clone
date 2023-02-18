import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import spotifyApi from "../lib/spotify";

const useSpotify = (): SpotifyWebApi => {

    const { data: session, status } = useSession()

    useEffect(() => {
        if (status === 'authenticated') {
            // if refresh access token is expired, redirect user to login
            if (session.error === 'RefreshAccessTokenError') {
                signIn()
            }
            spotifyApi.setAccessToken(session.user.accessToken as string)
        }
    }, [status, session])

    return spotifyApi
}

export default useSpotify