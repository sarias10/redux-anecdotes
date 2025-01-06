const sortUtil = (anecdotesList) => {
    const newList = anecdotesList.sort((a,b) => b.votes - a.votes)
    return newList
}

export {
    sortUtil
}