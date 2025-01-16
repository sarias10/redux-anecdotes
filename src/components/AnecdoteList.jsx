import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { deleteAnecdoteNotification, voteAnecdoteNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(({ anecdotes, filter }) => {
        if (filter === ''){
            return anecdotes
        }
        const newList = anecdotes.filter(anecdote => anecdote.content.includes(filter))
        return newList


    })

    const dispatch = useDispatch()

    const vote = (id, content) => {
        dispatch(voteAnecdote(id))
        dispatch(voteAnecdoteNotification(content))
        setTimeout(() => dispatch(deleteAnecdoteNotification(content)), 5000)
  }
  return (
    <>
        {anecdotes && anecdotes.map(anecdote =>
            <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
            </div>
            </div>
        )}
    </>
  )
}

export default AnecdoteList