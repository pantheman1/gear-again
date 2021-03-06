import React from 'react';
import './Footer.css';

export default function Footer() {

    return (
        <footer className="main-footer">
            <div className="footer__text-container">
                <div className="footer-row">
                    <p className="footer__text">Check out Peter Anderson's LinkedIn and GitHub!</p>
                    <div className="btn-footer">
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
                </div>
            </div>
        </footer>
    )
}

