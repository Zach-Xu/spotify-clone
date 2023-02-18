import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { AppState } from "../redux/reducers"
import useSpotify from "./useSpotify"


const useSongInfo = (): SpotifyApi.TrackObjectFull | undefined => {
    const { data: session } = useSession()
    const selectedSongId = useSelector((state: AppState) => state.selectedSongId)
    const spotifyApi = useSpotify()
    const [songInfo, setSongInfo] = useState<SpotifyApi.TrackObjectFull>()

    useEffect(() => {
        const fetchSongDetail = async () => {
            // if a song is selected, sent a request to spotify api endpoint to fetch the detail information of the song
            if (selectedSongId) {
                const respone = await fetch(`https://api.spotify.com/v1/tracks/${selectedSongId}`, {
                    headers: {
                        Authorization: `Bearer ${spotifyApi.getAccessToken()}`
                    }
                })
                const songDetail = await respone.json()
                setSongInfo(songDetail)
            }
        }
        fetchSongDetail()
    }, [selectedSongId, session, spotifyApi])

    return songInfo
}

export default useSongInfo