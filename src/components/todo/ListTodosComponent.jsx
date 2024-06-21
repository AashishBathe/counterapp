

export function ListTodosComponent() {
    const today = new Date();
    const target = new Date(today.getFullYear() + 1, today.getMonth(), today.getDay());

    const todos = [
        { id: 1, description: "Learn SB", done: false, targetDate: target },
        { id: 2, description: "Learn AWS", done: false, targetDate: target },
        { id: 3, description: "Learn React", done: false, targetDate: target },
    ];

    return (
        <div className="container">
            <h1>Things you want to do!</h1>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Target Date</th>
                            <th>Is it done?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.targetDate.toDateString()}</td>
                                    <td>{todo.done.toString()}</td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
