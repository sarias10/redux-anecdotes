import { useDispatch } from "react-redux"
import { createAnecdote, sortAnecdotes } from "../reducers/anecdoteReducer"
import { createAnecdoteNotification, deleteAnecdoteNotification } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        dispatch(sortAnecdotes())
        dispatch(createAnecdoteNotification(content))
        setTimeout(() => dispatch(deleteAnecdoteNotification(content)), 5000)
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
