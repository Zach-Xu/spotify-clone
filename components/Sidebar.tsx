import React from 'react'
import { HomeIcon, MagnifyingGlassIcon, PlusCircleIcon, HeartIcon, RssIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline'
import { signOut } from 'next-auth/react'

const Sidebar: React.FC = () => {
    return (
        <div className='p-5'>
            <div className='space-y-2'>
                <button className='flex space-x-5 text-gray-500 hover:text-white items-center'
                    onClick={() => signOut()}>

                    <p >Logout</p>
                </button>
                <button className='flex space-x-5 text-gray-500 hover:text-white items-center'>
                    <HomeIcon className='w-5 h-5' />
                    <p>Home</p>
                </button>
                <button className='flex space-x-5 text-gray-500 hover:text-white items-center'>
                    <MagnifyingGlassIcon className='w-5 h-5' />
                    <p>Search</p>
                </button>
                <button className='flex space-x-5 text-gray-500 hover:text-white items-center'>
                    <BuildingLibraryIcon className='w-5 h-5' />
                    <p>Your Library</p>
                </button>
                <hr className='border-t-[0.1px] border-t-gray-600' />

                <button className='flex space-x-5 text-gray-500 hover:text-white items-center'>
                    <PlusCircleIcon className='w-5 h-5' />
                    <p>Create Playlist</p>
                </button>
                <button className='flex space-x-5 text-gray-500 hover:text-white items-center'>
                    <HeartIcon className='w-5 h-5' />
                    <p>Liked Songs</p>
                </button>
                <button className='flex space-x-5 text-gray-500 hover:text-white items-center'>
                    <RssIcon className='w-5 h-5' />
                    <p>Your Episodes</p>
                </button>
                <hr className='border-t-[0.1px] border-t-gray-600' />

                {/* ToDo Playlists... */}
                <p className='text-gray-500 hover:text-white cursor-pointer'>My playlist...</p>
                <p className='text-gray-500 hover:text-white cursor-pointer'>My playlist...</p>
                <p className='text-gray-500 hover:text-white cursor-pointer'>My playlist...</p>
                <p className='text-gray-500 hover:text-white cursor-pointer'>My playlist...</p>
                <p className='text-gray-500 hover:text-white cursor-pointer'>My playlist...</p>
                <p className='text-gray-500 hover:text-white cursor-pointer'>My playlist...</p>
                <p className='text-gray-500 hover:text-white cursor-pointer'>My playlist...</p>
                <p className='text-gray-500 hover:text-white cursor-pointer'>My playlist...</p>
                <p className='text-gray-500 hover:text-white cursor-pointer'>My playlist...</p>
                <p className='text-gray-500 hover:text-white cursor-pointer'>My playlist...</p>
                <p className='text-gray-500 hover:text-white cursor-pointer'>My playlist...</p>
                <p className='text-gray-500 hover:text-white cursor-pointer'>My playlist...</p>
            </div>
        </div>
    )
}

export default Sidebar