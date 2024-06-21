import { useParams, Link } from 'react-router-dom';

export function WelcomeComponent() {
    const { username } = useParams();
    return (<div className="welcome">
        <h1>Welcome to the website, {username}.</h1>
        <div>
            Manage your todos. <Link to='/todos'> Go here</Link>
        </div>
    </div>
    );
}
