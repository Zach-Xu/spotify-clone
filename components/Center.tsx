import { useSelector } from "react-redux"
import { MenuOptions } from "../lib/constant"
import { AppState } from "../redux/reducers"
import Home from "./home/Home"
import Playlist from "./playlist/Playlist"

const Center: React.FC = () => {

    const selectedOption = useSelector((state: AppState) => state.selectedOption)
    console.log('option is', selectedOption)
    return (
        <div className="bg-black overflow-scroll scrollbar-hide w-[95%]">
            {/* Conditional render */}
            {
                (() => {
                    switch (selectedOption) {
                        case MenuOptions.Home:
                            return <Home />
                        case MenuOptions.Playlist:
                            return <Playlist />
                        default:
                            return <Home />
                    }
                })()
            }
        </div>
    )
}

export default Center