import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(({ anecdotes, filter }) => {
        if (filter === ''){
            return anecdotes
        }
        console.log(filter);
        console.log(anecdotes);
        const newList = anecdotes.filter(anecdote => anecdote.content.includes(filter))
        return newList


    })

    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(voteAnecdote(id))
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
                <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
            </div>
        )}
    </>
  )
}

export default AnecdoteList