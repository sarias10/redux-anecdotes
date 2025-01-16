import { createSlice } from "@reduxjs/toolkit";

const initialState = 'render here notification...'
const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        createAnecdoteNotification(state, action) {
            const content = action.payload
            return `you created '${content}`
        },
        voteAnecdoteNotification(state, action) {
            const content = action.payload
            return `you voted '${content}`
        },
        deleteAnecdoteNotification(state, action) {
            return ''
        }
    }
})

export const { createAnecdoteNotification, voteAnecdoteNotification, deleteAnecdoteNotification } = notificationSlice.actions
export default notificationSlice.reducer