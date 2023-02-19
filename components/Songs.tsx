import { useDispatch, useSelector } from "react-redux"
import Song from "./Song"
import { AppState, playSong, updateSelectedSongId } from '../redux/reducers'
import useSpotify from "../hooks/useSpotify"
import { useEffect } from "react"

interface SongsProps {
    songs: SpotifyApi.PlaylistTrackObject[]
}


const Songs: React.FC<SongsProps> = (props) => {

    const dispatch = useDispatch()

    const spotifyApi = useSpotify()

    const play = (song: SpotifyApi.PlaylistTrackObject) => {
        console.log(song)
        dispatch(updateSelectedSongId(song.track?.id))
        dispatch(playSong())
        spotifyApi.play({
            uris: [song.track?.uri as string]
        })
    }
    const { songs } = props

    return (
        <div>
            {
                songs.map((song, index) => (
                    <Song key={song.track?.id ?? index} song={song} id={index} onClick={async () => play(song)} />
                ))
            }
        </div>
    )
}

export default Songs