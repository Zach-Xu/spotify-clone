import { useSelector } from "react-redux"
import useSongInfo from "../hooks/useSongInfo"
import { AppState } from "../redux/reducers"

const Player: React.FC = () => {

    const songDetail = useSongInfo()
    console.log('song detail is', songDetail)

    return (
        <div className="bg-gray-900 h-[10vh] text-white">

        </div>
    )
}

export default Player