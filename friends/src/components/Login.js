import React, { useState } from 'react'
import { axiosAuth } from '../auth/axiosAuth';

const Login = props => {
    const [creds, setCreds] = useState('');

    const login = e => {
        e.preventDefault();
        axiosAuth().post('/login', creds)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            props.history.push('/');
        })
    }

    const handleChange = e => {
        setCreds({[e.target.name]: e.target.value}); 
    }

    return (
        <div>
            <form onSubmit={login}>
                <h2>Login</h2>
                <input 
                    name='username'
                    type='text' 
                    placeholder='username'
                    value={creds.username}
                    onChange={handleChange}
                />
                <input
                     name='password'
                     type='password' 
                     placeholder='password'
                     value={creds.password}
                     onChange={handleChange}
                />
                <button className='btn' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Login;