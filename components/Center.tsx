import { useSession } from "next-auth/react"
import { UserCircleIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { shuffle } from 'lodash'
import { useEffect, useState } from "react"

const colors: string[] = [
    'from-blue-500',
    'from-purple-500',
    'from-green-500',
    'from-red-500',
    'from-yellow-500',
    'from-pink-500',
]

const Center: React.FC = () => {
    const { data: session } = useSession()
    const [color, setColor] = useState<string>('')

    useEffect(() => {
        setColor(shuffle(colors).pop()!)
    }, [])



    const { name, image } = session!.user

    return (
        <div className="bg-black flex-grow">
            <header className={`h-[400px] bg-gradient-to-b ${color} to-black`}>
                <div className="absolute flex items-center space-x-2 top-4 right-6 bg-red-400 pl-1 py-1 rounded-full text-white pr-2">
                    {
                        image ? <img src={image} className='w-10 h-10 rounded-full' alt="Spotify Profile Picture" /> : <UserCircleIcon className="w-10 h-10 rounded-full" />
                    }
                    <p className="">{name}</p>
                    <ChevronDownIcon className="w-4 h-4" />
                </div>

            </header>
            <section>
                hello
            </section>
        </div>
    )
}

export default Center