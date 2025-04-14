import { useDispatch, useSelector } from 'react-redux'
import { updateAnecdote, updateAnecdoteVote } from '../reducers/anecdoteReducer'
import { clearNotification, voteAnecdoteNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(({ anecdotes, filter }) => {
        if (filter === ''){
            return anecdotes
        }
        const newList = anecdotes.filter(anecdote => anecdote.content.includes(filter))
        return newList
    })

    const dispatch = useDispatch()

    const vote = (anecdoteId, content, anecdoteVotes) => {
        dispatch(updateAnecdoteVote(anecdoteId, anecdoteVotes))
        dispatch(voteAnecdoteNotification(content))
        dispatch(clearNotification)
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
                <button onClick={() => vote(anecdote.id, anecdote.content, anecdote.votes)}>vote</button>
            </div>
            </div>
        )}
    </>
  )
}

export default AnecdoteList