import { useDispatch } from "react-redux"
import { appendAnecdote, createAnecdote, sortAnecdotes } from "../reducers/anecdoteReducer"
import { clearNotification, createAnecdoteNotification } from "../reducers/notificationReducer"
import anecdoteService from '../services/anecdotes'
const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        const newAnecdote = await anecdoteService.createNew(content)
        dispatch(createAnecdote(newAnecdote))
        dispatch(sortAnecdotes())
        dispatch(createAnecdoteNotification(content))
        dispatch(clearNotification)
      }
  return (
    <>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
            <div><input name="anecdote"/></div>
            <button type="submit">create</button>
        </form>
    </>
  )
}

export default AnecdoteForm
