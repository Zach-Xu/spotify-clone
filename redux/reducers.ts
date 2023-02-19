import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuOptions } from '../lib/constant'

export interface AppState {
    selectedList: string | null
    selectedSongId: string | undefined
    isPlaying: boolean
    selectedOption: MenuOptions
}

const initialState: AppState = {
    selectedList: null,
    selectedSongId: '',
    isPlaying: false,
    selectedOption: MenuOptions.Home
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        updateSelectedList: (state, action: PayloadAction<string>) => ({
            ...state,
            selectedList: action.payload,
        }),
        updateSelectedSongId: (state, action: PayloadAction<string | undefined>) => ({
            ...state,
            selectedSongId: action.payload
        }),
        playSong: (state) => ({
            ...state,
            isPlaying: true
        }),
        pauseSong: (state) => ({
            ...state,
            isPlaying: false
        }),
        selectItem: (state, action: PayloadAction<MenuOptions>) => ({
            ...state,
            selectedOption: action.payload
        })

    }
})

export const { updateSelectedList, updateSelectedSongId, pauseSong, playSong, selectItem } = appSlice.actions
export default appSlice.reducer