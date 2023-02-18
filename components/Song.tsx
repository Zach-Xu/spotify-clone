import { artistsToString, millisToMinutesAndSeconds } from "../lib/helper"

interface SongProps {
    song: SpotifyApi.PlaylistTrackObject
    id: number,
    onClick: () => {}
}

const Song: React.FC<SongProps> = ({ song, id, onClick }) => {


    return (
        <div className="grid md:grid-cols-3 hover:bg-gray-800 items-center px-2 py-3 text-gray-400 grid-cols-2 gap-2 pl-5
        hover:cursor-pointer" onClick={onClick}>
            <div className="flex items-center space-x-4">
                <p>{id + 1}</p>
                <img src={song.track?.album.images[0].url}
                    className='w-10 h-10'
                    alt="cover page of album on which the track appears" />
                <div className="min-w[25rem] md:max-w-[12rem] lg:max-w-[20rem] truncate ">
                    <h5 className="text-white truncate">{song.track?.name}</h5>
                    <p >{artistsToString(song.track?.artists)}</p>
                </div>
            </div>
            <p className="max-w-[15rem] lg:max-w-[25rem] hidden md:inline-block truncate">{song.track?.album.name}</p>
            <p className="justify-self-center">{millisToMinutesAndSeconds(song.track?.duration_ms)}</p>
        </div>
    )
}

export default Song