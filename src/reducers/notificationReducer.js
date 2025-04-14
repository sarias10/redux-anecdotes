import { createSlice } from "@reduxjs/toolkit";

const initialState = 'render here notification...'

let timeoutId

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        setMessage(state, action){
            const content = action.payload
            return `${content}`
        },
        deleteAnecdoteNotification(state, action) {
            return ''
        }
    }
})

export const { setMessage, deleteAnecdoteNotification } = notificationSlice.actions



export const setNotification = (message, time) => { //tiempo en segundos
    return dispatch => {
        dispatch(setMessage(message))
        if (timeoutId) { // si hay un timeoutId, lo elimina
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => { // cada que se ejecuta setNotification cuando se vota, se establece un nuevo timeoutId, el anterior lo borra y este establece uno nuevo
            dispatch(deleteAnecdoteNotification())
        }, time*1000)
    }
}

export default notificationSlice.reducer