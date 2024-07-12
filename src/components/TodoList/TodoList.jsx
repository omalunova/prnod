import React, {useEffect, useState} from 'react';
import axios from 'axios'

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    let perPage = 10

    useEffect(() => {
        setLoading(true)
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
            .then(response => {
                const start = (currentPage - 1) * perPage
                const end = start + perPage
                const slicedTodos = response.data.slice(start, end)
                setTodos(slicedTodos)
                setLoading(false)
                console.log('hello')
            })
            .catch(error => {
                console.error(error)
            })
    }, [currentPage])

    const handleChange = () => {
        setLoading(!loading)
    }

    const nextPage = () => {
        setCurrentPage(prevPage => prevPage + 1)
        console.log(currentPage)
    }

    const prevPage = () => {
        setCurrentPage(prevPage => prevPage - 1)
        console.log(currentPage)
    }



    return (
        <div>
            <button onClick={nextPage} disabled={currentPage === 1}> prev </button>
            <button onClick={prevPage} > next </button>
            <button onClick={handleChange}>+</button>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <ul>
                    {todos.map((user) => (
                        <li key={user.id}>
                            <p>{user.id}. {user.title}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TodoList;