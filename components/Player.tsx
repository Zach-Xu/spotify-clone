import useSongInfo from "../hooks/useSongInfo"
import { artistsToString } from "../lib/helper"
import { PlayCircleIcon, PauseCircleIcon, ForwardIcon, BackwardIcon, ArrowPathRoundedSquareIcon } from '@heroicons/react/24/solid'
import { useSelector } from "react-redux"
import { AppState } from "../redux/reducers"

const Player: React.FC = () => {

    const isPlaying = useSelector((state: AppState) => state.isPlaying)
    const songDetail = useSongInfo()
    console.log('song detail is', songDetail)

    return (
        <div className="bg-gray-900 h-[10vh] text-white grid grid-cols-3 ">
            <div className="flex items-center pl-5 md:pl-10 space-x-3 md:space-x-5">
                {
                    songDetail?.album?.images[0] &&
                    <>
                        <img src={songDetail?.album?.images[0].url} alt=""
                            className="w-10 h-10" />
                        <div>
                            <h5>
                                {songDetail.name}
                            </h5>
                            <p className="text-gray-400 text-xs">{artistsToString(songDetail.artists)}</p>
                        </div>
                    </>
                }

            </div>
            <div className="flex justify-evenly items-center">
                <BackwardIcon className="button" />
                {
                    isPlaying ? <PauseCircleIcon className="button" /> : <PlayCircleIcon className="button" />
                }
                <ForwardIcon className="button" />
            </div>
            <div className="flex items-center justify-end mr-20">
                <input type="range" min={0} max={100} value={0} />
            </div>
        </div>
    )
}

export default Player