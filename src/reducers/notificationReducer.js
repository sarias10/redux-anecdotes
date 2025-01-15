import { createSlice } from "@reduxjs/toolkit";

const initialState = 'render here notification...'

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
    }
})

export const { } = notificationSlice.actions
export default notificationSlice.reducer