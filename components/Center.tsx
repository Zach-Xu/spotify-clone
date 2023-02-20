import { ChevronDownIcon, UserCircleIcon } from "@heroicons/react/24/solid"
import { useSession } from "next-auth/react"
import { useSelector } from "react-redux"
import { MenuOptions } from "../lib/constant"
import { AppState } from "../redux/reducers"
import Home from "./home/Home"
import Playlist from "./playlist/Playlist"

const Center: React.FC = () => {

    const selectedOption = useSelector((state: AppState) => state.selectedOption)
    const { data: session } = useSession()
    const { name, image } = session!.user
    return (
        <div className="bg-black overflow-scroll scrollbar-hide w-[100%] md:w-[95%]">
            <div className="absolute flex items-center space-x-2 top-4 right-6 bg-red-400 pl-1 py-1 rounded-full text-white pr-2">
                {
                    image ? <img src={image} className='w-10 h-10 rounded-full' alt="Spotify Profile Picture" /> : <UserCircleIcon className="w-10 h-10 rounded-full" />
                }
                <p className="">{name}</p>
                <ChevronDownIcon className="w-4 h-4" />
            </div>
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