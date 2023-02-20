import { signIn, useSession } from "next-auth/react"
import { shuffle } from 'lodash'
import { Fragment, useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import { AppState } from "../../redux/reducers"
import useSpotify from "../../hooks/useSpotify"
import Songs from "./Songs"

const colors: string[] = [
    'from-blue-500',
    'from-purple-500',
    'from-green-500',
    'from-red-500',
    'from-yellow-500',
    'from-pink-500',
]

const Playlist: React.FC = () => {
    const { data: session } = useSession()
    const [color, setColor] = useState<string>('')
    const selectedList = useSelector((state: AppState) => state.selectedList)
    const spotifyApi = useSpotify()
    const [playlist, setPlaylist] = useState<SpotifyApi.SinglePlaylistResponse | undefined>()


    useEffect(() => {

        const getRandomColor = (currentColor: string, colors: string[]): string => {
            const shuffledColor = shuffle(colors)
            const randomColor = shuffledColor.pop()!
            // if random selected color is the same as current color, get the next color instead
            if (currentColor === randomColor) {
                return shuffledColor.pop()!
            }
            // return random color
            return randomColor
        }
        setColor(color => getRandomColor(color, colors))

        const fetchPlaylistDetail = (playlistId: string) => {

            spotifyApi.getPlaylist(playlistId)
                .then(data => setPlaylist(data.body))
                .catch(error => {
                    console.log(error)
                    // potential token expired error
                    signIn()
                })
        }
        if (selectedList) {
            fetchPlaylistDetail(selectedList)
        }
    }, [selectedList])



    return (
        <Fragment>
            <header className={`h-[400px] flex items-end bg-gradient-to-b ${color} to-black p-10`}>
                {
                    playlist &&
                    <div className="flex items-center text-white">
                        <img src={playlist.images[0].url} className='w-[12rem] mr-5' alt="" />
                        <div>
                            <p className="mb-1 text-1xl md:text-2xl lg:3xl">PLAYLIST</p>
                            <h1 className="font-bold text-3xl md:text-4xl  lg:text-5xl">{playlist.name}</h1>
                        </div>

                    </div>
                }

            </header>
            <section className="text-white ">
                {
                    playlist && <Songs songs={playlist.tracks.items} />
                }
            </section>
        </Fragment>
    )
}

export default Playlist