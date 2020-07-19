import { createSlice, combineReducers, configureStore } from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchTerm: ''
    },
    reducers: {
        searchTermAction: (state, action) => ({
            ...state,
            searchTerm: action.payload,
        }),
    }
})

export const { searchTermAction } = searchSlice.actions

const reducer = combineReducers({
    searchTerm: searchSlice.reducer
})

export const store = configureStore({
    reducer,
})