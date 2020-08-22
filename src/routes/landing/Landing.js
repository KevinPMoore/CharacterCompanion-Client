import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

export default class Landing extends React.Component {
    state = {

    };

    render() {
        return(
            <div
                className='landing'
            >
                <Link
                    to='/home'
                >
                    <button
                        className='landing-button'
                    >
                        Home
                    </button>
                </Link>
            </div>
        );
    };
};