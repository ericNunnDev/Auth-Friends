import React, { useState } from 'react'

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [input, setInput] = useState('');

    return (
        <div>
            <form>
                <input 
                    name='username'
                    type='text' 
                    placeholder='username'
                />
                <input
                     name='password'
                     type='password' 
                     placeholder='password'
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Login;