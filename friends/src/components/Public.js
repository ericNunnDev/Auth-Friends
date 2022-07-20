import React from 'react';
import img from '../images/friends.jpg';

const Public = () => {
    return (
        <div>
            <h1>Hello, Friends</h1>
            <img className='responsive-img' src={img} alt='Audience' />
        </div>
    )    
}

export default Public;