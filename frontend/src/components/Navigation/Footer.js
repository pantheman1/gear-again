import React from 'react';
import './Footer.css';

export default function Footer() {

    return (
        <footer className="footer">
            <div className="footer__text-container">
                <p className="footer__text">Peter Anderson</p>
                <button
                    onClick={() => window.location = 'https://www.linkedin.com/in/peterbanderson1/'}>
                    <i
                        title='https://www.linkedin.com/in/peterbanderson1/'
                        className='fab fa-linkedin fa-lg footer__icon'
                    ></i>
                </button>
                <button
                    onClick={() => (window.location = 'https://github.com/pantheman1')}
                >
                    <i
                        title='https://github.com/pantheman1'
                        className='fab fa-github-square fa-lg footer__icon'
                    ></i>
                </button>
            </div>
        </footer>
    )
}

