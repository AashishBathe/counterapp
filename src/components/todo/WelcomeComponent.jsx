import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { retrievePathHelloWorldBean } from './api/HelloWorldApiService';
import { useAuth } from './security/AuthContext';

export function WelcomeComponent() {
    const authContext = useAuth()
    const token = authContext.token
    const [message, setMessage] = useState(null)

    function callHelloWorldRestAPI() {
        console.log('called')
        retrievePathHelloWorldBean('Aashish', token)
        .then( (response) => successfulResponse(response) )
        .catch( (error) => errorResponse(error))
        .finally( () => console.log('cleanup'))
    }

    function successfulResponse(response) {
        console.log(response)
        setMessage(response.data.message)
    }

    function errorResponse(error) {
        console.log(error)
    }

    const { username } = useParams();
    return (<div className="welcome">
        <h1>Welcome to the website, {username}.</h1>
        <div>
            Manage your todos. <Link to='/todos'> Go here</Link>
        </div>
        <div>
            <button className='btn btn-success m-5' onClick={callHelloWorldRestAPI}>
                Call Hello world</button>
        </div>
        <div className='text-info'>{message}</div>
    </div>
    );
}
