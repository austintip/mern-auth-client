import { useState } from 'react';
import axios from 'axios';

const Signup = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // TODO add form password validation

    const handleSubmit = e => {
        e.preventDefault();

        axios.post(
            `${process.env.REACT_APP_SERVER_URL}/api/signup`,
            { name, email, password }
        ).then(response => {
            console.log(response.data)
            // save the token in local storage
            localStorage.setItem('jwtToken', response.data.token);
            // set the token to auth header
            // set user data
        }).catch(err => console.log(`⛔️ Ruhroh:\n`, err));
    }

    return (
        <section>
            <h2>SIGNUP</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-elem'>
                    <label htmlFor='name'>Name: </label>
                    <input
                        type='text'
                        name='name'
                        placeholder='Display Name'
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className='form-elem'>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="email@email.com"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className='form-elem'>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <input type="submit" value="Signup!" />
            </form>
        </section>
    );
}

export default Signup;