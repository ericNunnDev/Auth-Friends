import React, { useState } from 'react'
import { axiosAuth } from '../auth/axiosAuth';
import img from '../images/friends-2.jpg';

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
                <h3>Login</h3>
                <label>
                    Username: 
                  <input 
                    name='username'
                    type='text' 
                    value={creds.username}
                    onChange={handleChange}
                   />
                </label>
                <label>
                    Password: 
                  <input
                    name='password'
                    type='password' 
                    value={creds.password}
                    onChange={handleChange}
                  />
                </label>
                <button className='btn' type='submit'>Submit</button>
            </form>
            <img className='login-img responsive-img' src={img} alt='Friends' />
        </div>
    )
}

export default Login;