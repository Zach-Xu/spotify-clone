import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import useSpotify from "../../hooks/useSpotify"
import { MenuOptions } from "../../lib/constant"
import { getDaytime } from "../../lib/helper"
import { AppState, selectItem, updateSelectedList } from "../../redux/reducers"
import MyImage from "../layout/MyImage"

const Home: React.FC = () => {

    const spotifyApi = useSpotify()
    useSelector((state: AppState) => state.selectedOption)
    const [topPlaylists, setTopPlaylists] = useState<SpotifyApi.PlaylistObjectSimplified[]>([])
    const dispatch = useDispatch()

    const playlistClickHandler = (listId: string) => {
        dispatch(updateSelectedList(listId))
        dispatch(selectItem(MenuOptions.Playlist))
    }


    useEffect(() => {
        spotifyApi.getUserPlaylists({
            limit: 4
        }).then(data => {
            setTopPlaylists(data.body.items)
        }).catch(error => {
            console.log('error occured when fetching user playlists', error)
        })
    }, [])
    return (
        <div className="text-white font-bold">
            <header className="p-5">
                <h1 className="text-2xl md:text-3xl lg:text-4xl  text-b my-5">Good {getDaytime()}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {/* Top 5 playlist + Liked Songs */}
                    {
                        topPlaylists.map(playlist => (
                            <div key={playlist.id} className="flex items-center space-x-5 bg-gray-700 opacity-95 rounded-xl overflow-hidden pr-2 cursor-pointer"
                                onClick={() => playlistClickHandler(playlist.id)}>
                                <MyImage src={playlist.images[0].url} className='w-[5rem] h-[5rem] md:w-[6rem] md:h-[6rem]' />
                                <p className="truncate">{playlist.name}</p>
                            </div>
                        ))
                    }

                </div>

            </header>
        </div>
    )
}

export default Home