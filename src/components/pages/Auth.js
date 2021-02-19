import Login from '../partials/Login';
import Signup from '../partials/Signup';

const Auth = (props) => {
    return (
        <div>
            <Signup handleAuth={props.handleAuth}/>
            <Login handleAuth={props.handleAuth}/>
        </div>
    );
}

export default Auth;