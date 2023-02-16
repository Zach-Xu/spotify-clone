import SpotifyWebApi from 'spotify-web-api-node'

const scopes: string = [
    'user-read-email',
    'user-library-read',
    'user-read-private',
    'user-read-playback-state',
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-top-read',
    'user-modify-playback-state',
    'user-follow-read',
    'playlist-read-private',
    'playlist-read-collaborative',
    'streaming'
    // 'user-library-modify'
].join(',')

const params = {
    scopes
}

const queryParamString = new URLSearchParams(params).toString()


const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString}`

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET
})

export default spotifyApi

export { LOGIN_URL }