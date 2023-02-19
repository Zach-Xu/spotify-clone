import { useDispatch, useSelector } from "react-redux"
import Song from "./Song"
import { AppState, playSong, updateSelectedSongId } from '../redux/reducers'
import useSpotify from "../hooks/useSpotify"

interface SongsProps {
    songs: SpotifyApi.PlaylistTrackObject[]
}


const Songs: React.FC<SongsProps> = (props) => {

    const dispatch = useDispatch()

    const spotifyApi = useSpotify()

    const playlistId = useSelector((state: AppState) => state.selectedList)

    const selectedSongId = useSelector((state: AppState) => state.selectedSongId)

    console.log(playlistId, 'id')

    const play = (song: SpotifyApi.PlaylistTrackObject) => {
        // prevent re playing the same song
        if (song.track?.id === selectedSongId) {
            return
        }
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
                    <Song key={`${song.track?.id}-${playlistId}-${index}`} song={song} id={index} onClick={async () => play(song)} />
                ))
            }
        </div>
    )
}

export default Songs