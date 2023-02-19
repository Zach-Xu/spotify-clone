import useSongInfo from "../hooks/useSongInfo"
import { artistsToString } from "../lib/helper"
import { PlayCircleIcon, PauseCircleIcon, ForwardIcon, BackwardIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid'
import { useDispatch, useSelector } from "react-redux"
import { AppState, pauseSong, playSong } from "../redux/reducers"
import { debounce } from 'lodash'
import { useCallback, useState } from "react"
import useSpotify from "../hooks/useSpotify"


const Player: React.FC = () => {

    const isPlaying = useSelector((state: AppState) => state.isPlaying)
    const currentSong = useSelector((state: AppState) => state.selectedSongId)
    const songDetail = useSongInfo()
    const dispatch = useDispatch()
    const spotifyApi = useSpotify()
    const [volumn, setVolumn] = useState<number>(50)


    const pause = () => {
        if (currentSong) {
            spotifyApi.pause()
            dispatch(pauseSong())
        }
    }

    const play = () => {
        if (currentSong) {
            spotifyApi.play()
            dispatch(playSong())
        }
    }

    const adjustVolumn = (v: number) => {
        setVolumn(v)
        // prevent users from spamming volumn api
        debouncedAdjustVolumn(v)
    }

    // useCallback to prevent the createion of new debounce function on every render to prevent potential memory leak
    // use the debounce function to prevent spamming clicks on buttons
    const debouncedPauseSong = useCallback(debounce(pause, 100), [currentSong, spotifyApi])
    const debouncedPlaySong = useCallback(debounce(play, 100), [currentSong, spotifyApi])

    const debouncedAdjustVolumn = useCallback(debounce((v: number) => spotifyApi.setVolume(v), 100), [])

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
                    isPlaying ?
                        <PauseCircleIcon className="button h-10 w-10" onClick={debouncedPauseSong} />
                        :
                        <PlayCircleIcon className="button h-10 w-10" onClick={debouncedPlaySong} />
                }
                <ForwardIcon className="button" />
            </div>
            <div className="flex items-center justify-end mr-20 space-x-2">
                {
                    volumn === 0 ? <SpeakerXMarkIcon className="button w-6 h-6" onClick={() => { adjustVolumn(50) }} /> : <SpeakerWaveIcon onClick={() => adjustVolumn(0)} className="button w-6 h-6" />
                }

                <input type="range" min={0} max={100} value={volumn} onChange={(e) => adjustVolumn(Number(e.target.value))} />
            </div>
        </div>
    )
}

export default Player