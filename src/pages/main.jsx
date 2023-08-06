import React, { useState } from 'react';
import 'aos/dist/aos.css';
import tiger from '../images/pngwing.com.png';
import ContactPage from './contact';
import AboutPage from './aboutPage';
import HomePage from './home';

function MainPage() {
    const [curPage, setCurPage] = useState('home');

    return (
        <main>
            <h1 className="offscreen">leehyeonji's website</h1>

            <header className="header">
                <a href="/" className="header-logo">
                    <img src={tiger} alt="tiger picture" />
                </a>

                <a href="/" className="header-talk">
                    Let's Talk
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        width="1.2rem"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                    </svg>
                </a>
                <nav className="header-nav">
                    <h1 class="offscreen">Navigation</h1>
                    <ul class="header-nav-list">
                        <li>
                            <button
                                className="nav-button"
                                onClick={() => {
                                    setCurPage('home');
                                }}
                            >
                                Home
                            </button>
                        </li>
                        <li>
                            <button
                                className="nav-button"
                                onClick={() => {
                                    setCurPage('about');
                                }}
                            >
                                about
                            </button>
                        </li>
                        <li>
                            <button
                                className="nav-button"
                                onClick={() => {
                                    setCurPage('contact');
                                }}
                            >
                                contact
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
            {curPage === 'home' ? <HomePage /> : null}
            {curPage === 'about' ? <AboutPage /> : null}
            {curPage === 'contact' ? <ContactPage /> : null}
            <div>
                <a href="contact.html" className="marquee">
                    <div className="marquee__items">
                        <div>✨ Let's get to work!</div>
                        <div>✨ Have a project in mind?</div>
                        <div>✨ Let's get to work!</div>
                        <div>✨ Have a project in mind?</div>
                        <div>✨ Let's get to work!</div>
                        <div>✨ Have a project in mind?</div>
                    </div>

                    <div className="marquee__items" aria-hidden="true">
                        <div>✨ Let's get to work!</div>
                        <div>✨ Have a project in mind?</div>
                        <div>✨ Let's get to work!</div>
                        <div>✨ Have a project in mind?</div>
                        <div>✨ Let's get to work!</div>
                        <div>✨ Have a project in mind?</div>
                    </div>
                </a>
            </div>
        </main>
    );
}

export default MainPage;
