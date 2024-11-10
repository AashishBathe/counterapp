import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TodoApp.css'
import { useAuth } from './security/AuthContext';
export function LoginComponent() {

    const [username, setUsername] = useState("aashish");
    const [password, setPassword] = useState("");
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();
    const authContext = useAuth()

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    async function handleSubmit() {
        if (await authContext.login(username, password)) {
            navigate(`/welcome/${username}`);
        }
        else {
            setShowError(true);
        }
    }

    return (
        <div className="login">
            <h1>Login to the website.</h1>
            {showError && <div className='errorMessage'>Authenticated failed! Please check credentials.</div>}
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    );
}
