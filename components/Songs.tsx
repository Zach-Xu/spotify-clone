import Song from "./Song"

interface SongsProps {
    songs: SpotifyApi.PlaylistTrackObject[]
}


const Songs: React.FC<SongsProps> = (props) => {
    const { songs } = props
    return (
        <div>
            {
                songs.map((song, index) => (
                    <Song key={song.track?.id ?? index} song={song} id={index} />
                ))
            }
        </div>
    )
}

export default Songs