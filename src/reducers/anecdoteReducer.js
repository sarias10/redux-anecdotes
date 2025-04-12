// logica de la store
import { createSlice } from "@reduxjs/toolkit"
import { sortUtil } from "../utils"
import anecdoteService from '../services/anecdotes'

//const initialState = anecdotesAtStart.map(asObject)

// const anecdoteReducer = (state = initialState, action) => {
//   switch(action.type) {
//     case 'VOTE_ANECDOTE': {
//       const id = action.payload.id
//       const anecdoteToChange = state.find(n => n.id === id)
//       const changedAnecdote = {
//         ...anecdoteToChange,
//         votes: anecdoteToChange.votes + 1
//       }
//       return state.map(anecdote =>
//         anecdote.id !== id ? anecdote : changedAnecdote) 
//     }
//     case 'NEW_ANECDOTE':
//       return [...state, action.payload]
//     case 'SORT_ANECDOTES': {
//       console.log('antes de ordenar', state);
//       const newList = sortUtil([...state])
//       console.log('despues de ordenar', newList)
//       return newList
//     }
//     default:
//       return state
//   }
// }

// export const voteAnecdote = (id) => {
//   return {
//     type: 'VOTE_ANECDOTE',
//     payload: { id }
//   }
// }

// export const createAnecdote = (content) => {
//   const newNote = asObject(content)
//   return {
//     type: 'NEW_ANECDOTE',
//     payload: newNote
//   }
// }

// export const sortAnecdotes = () => {
//   return {
//     type: 'SORT_ANECDOTES',
//   }
// }

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action){
      state.push(action.payload)
    },
    sortAnecdotes(state){
      return sortUtil([...state])
    },
    voteAnecdote(state, action){
      const id = action.payload
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote) 
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { sortAnecdotes, voteAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializedAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export default anecdoteSlice.reducer