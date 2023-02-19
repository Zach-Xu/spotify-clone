import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AppState {
    selectedList: string | null
    selectedSongId: string | undefined
    isPlaying: boolean
}

const initialState: AppState = {
    selectedList: null,
    selectedSongId: '',
    isPlaying: false
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
        })

    }
})

export const { updateSelectedList, updateSelectedSongId, pauseSong, playSong } = appSlice.actions
export default appSlice.reducer