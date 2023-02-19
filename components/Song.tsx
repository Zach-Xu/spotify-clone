import { artistsToString, millisToMinutesAndSeconds } from "../lib/helper"

interface SongProps {
    song: SpotifyApi.PlaylistTrackObject
    id: number,
    onClick: () => {}
}

const Song: React.FC<SongProps> = ({ song, id, onClick }) => {


    return (
        <div className="grid grid-cols-6 hover:bg-gray-800 items-center px-2 py-3 text-gray-400  gap-1 pl-5
        hover:cursor-pointer" onClick={onClick}>
            <div className="flex items-center space-x-4  col-span-4 md:col-span-3 md:pr-2">
                <p>{id + 1}</p>
                <img src={song.track?.album.images[0]?.url ?? 'https://community.spotify.com/t5/image/serverpage/image-id/55829iC2AD64ADB887E2A5/image-size/large?v=v2&px=999'}
                    className='w-10 h-10'
                    alt="cover page of album on which the track appears" />
                <div className="truncate">
                    <h5 className="text-white truncate">{song.track?.name}</h5>
                    <p className="truncate" >{artistsToString(song.track?.artists)}</p>
                </div>
            </div>
            <p className="col-span-2 hidden md:inline-block truncate pl-5">{song.track?.album.name}</p>
            <p className="justify-self-center col-span-2 md:col-span-1 ">{millisToMinutesAndSeconds(song.track?.duration_ms)}</p>
        </div>
    )
}

export default Song