import { createSlice } from "@reduxjs/toolkit";

const initialState = 'render here notification...'

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        createAnecdoteNotification(state, action) {
            const content = action.payload
            return `you created '${content}'`
        },
        voteAnecdoteNotification(state, action) {
            const content = action.payload
            return  `you voted '${content}'`
        },
        deleteAnecdoteNotification(state, action) {
            return ''
        }
    }
})

export const { createAnecdoteNotification, voteAnecdoteNotification, deleteAnecdoteNotification } = notificationSlice.actions

let timeoutId

export const clearNotification = () => {
    // toma dispatch como argumento. Esto es un "thunk", una función que puede despachar acciones de Redux de manera asíncrona.
    return dispatch => {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
            dispatch(deleteAnecdoteNotification())
        }, 5000)
    }
}

export default notificationSlice.reducer