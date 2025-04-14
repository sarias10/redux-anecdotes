import axios from 'axios'

const baseUrl = 'http://localhost:3002/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = {content: content, votes: 0}
  const response = await axios.post(baseUrl, object)
  return response.data
}

const updateAnecdote = async (anecdoteId, updatedVotes) => {
  const object = { votes: updatedVotes }
  const response = await axios.patch(`${baseUrl}/${anecdoteId}`,object)
  return response.data
}

// const main = async () => {
//   console.log('hello',await updateAnecdote("35e5", 250))
// }

// main()


export default { getAll, createNew, updateAnecdote }