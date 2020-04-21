import React from 'react';
import { Link, Router, Switch } from 'react-router-dom';

const Navigation = () => {


    return (
        <div className='App-header'>
            <nav >
                <Link to='/'>Home</Link>
                <Link to='/create'>Create</Link>
            </nav>
        </div>
    )

}

export default Navigation