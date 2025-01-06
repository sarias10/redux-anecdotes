import { useDispatch } from "react-redux"
import { createAnecdote, sortAnecdotes } from "../reducers/anecdoteReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        dispatch(sortAnecdotes())
        
      }
  return (
    <form onSubmit={addAnecdote}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
    </form>
  )
}

export default AnecdoteForm
