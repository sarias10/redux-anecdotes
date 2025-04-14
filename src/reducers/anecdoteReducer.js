// logica de la store
import { createSlice } from "@reduxjs/toolkit"
import { sortUtil } from "../utils"
import anecdoteService from '../services/anecdotes'


const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
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
    },
    updateAnecdote(state, action) {
      const { anecdoteId, changedAnecdote } = action.payload
      return state.map(anecdote =>
        anecdote.id !== anecdoteId ? anecdote : changedAnecdote) // Si el anecdote.id es diferente a anecdoteId entonces deja la misma anecdota, si coincide el id entonces se cambia por la updatedAnecdote
    }
  }
})

export const { appendAnecdote, setAnecdotes, updateAnecdote } = anecdoteSlice.actions

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

export const updateAnecdoteVote = (anecdoteId, votes) => {
  return async dispatch => {
    const updatedVotes = votes + 1
    const changedAnecdote = await anecdoteService.updateAnecdote(anecdoteId, updatedVotes)
    dispatch(updateAnecdote({anecdoteId, changedAnecdote}))
  }
}

export default anecdoteSlice.reducer