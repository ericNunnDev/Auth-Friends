import React, { useState } from 'react'

const Login = props => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div>
            <form>
                <input type='text' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Login;