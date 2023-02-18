import { useDispatch, useSelector } from "react-redux"
import Song from "./Song"
import { AppState, updateSelectedSongId } from '../redux/reducers'
import { useEffect } from "react"

interface SongsProps {
    songs: SpotifyApi.PlaylistTrackObject[]
}


const Songs: React.FC<SongsProps> = (props) => {

    const dispatch = useDispatch()
    const songId = useSelector((state: AppState) => state.selectedSongId)
    const { songs } = props

    return (
        <div>
            {
                songs.map((song, index) => (
                    <Song key={song.track?.id ?? index} song={song} id={index} onClick={() => dispatch(updateSelectedSongId(song.track?.id))} />
                ))
            }
        </div>
    )
}

export default Songs