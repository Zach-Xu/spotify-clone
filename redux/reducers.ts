import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AppState {
    selectedList: string | null
}

const initialState: AppState = {
    selectedList: null
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        updateSelectedList: (state, action: PayloadAction<string>) => ({
            ...state,
            selectedList: action.payload,
        })
    }
})

export const { updateSelectedList } = appSlice.actions
export default appSlice.reducer