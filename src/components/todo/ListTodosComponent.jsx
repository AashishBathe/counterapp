import { useEffect, useState } from "react";
import { deleteTodoApi, retrieveAllTodosForUsernameApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";


export function ListTodosComponent() {
    const authContext = useAuth()
    const today = new Date();
    const target = new Date(today.getFullYear() + 1, today.getMonth(), today.getDay());
    const navigate = useNavigate()
    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState(null)

    function refreshTodos() {
        retrieveAllTodosForUsernameApi(authContext.username)
            .then(response => setTodos(response.data))
            .catch(error => console.log(error))
    }
    
    function deleteTodo(id) {
        console.log('deleted ' + id)
        deleteTodoApi(authContext.username, id)
            .then(() => {
                setMessage(`Delete of todo successful`)
                refreshTodos()
            })
            .catch(error => console.log(error))
    }

    function updateTodo(id) {
        console.log('clicked ' + id)
        navigate(`/todo/${id}`)
    }

    function addNewTodo() {
        navigate(`/todo/-1`)

    }

    useEffect( () => refreshTodos(), [] )
    return (
        <div className="container">
            <h1>Things you want to do!</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Target Date</th>
                            <th>Is it done?</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td><button className="btn btn-warning" 
                                    onClick={() => deleteTodo(todo.id)}>
                                        Delete</button></td>
                                    <td><button className="btn btn-success" 
                                    onClick={() => updateTodo(todo.id)}>
                                        Update</button></td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
            <div className="btn btn-success m-3" onClick={addNewTodo}>Add New Todo</div>
        </div>
    );
}
