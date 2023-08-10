import React, { useState } from 'react';
import 'aos/dist/aos.css';
import GusetPage from './guestPage';
import AboutPage from './aboutPage';
import MainPage from './mainPage';

function IndexPage() {
    const [curPage, setCurPage] = useState('main');

    const buttons = [
        { page: 'main', text: 'home' },
        { page: 'about', text: 'about' },
        { page: 'guest', text: 'guest' },
    ];

    return (
        <>
            <div className="w-full h-full flex justify-center bg-slate-500">
                <div className="w-[65rem] bg-white">
                    <header className="w-[65rem] pt-4 pl-12 pr-12 bg-white h-content fixed ">
                        <div className="w-full flex">
                            <div className="w-fit m-2 h-16 flex justify-center items-center">
                                <a
                                    href="https://github.com/hyeonzii"
                                    className="flex-none text-h-blue text-xl font-bold transition-all duration-300 hover:scale-105 hover:underline underline-offset-1 hover:font-extrabold hover:text-4xl"
                                >
                                    hyeonzii
                                </a>
                            </div>
                            <div className="grow"></div>
                            <div className="flex-none flex">
                                {buttons.map((button, index) => (
                                    <button
                                        key={index}
                                        className={`cursor-pointer rounded-full m-4 w-16 h-16  flex justify-center items-center transition-all duration-300 ${
                                            curPage === button.page
                                                ? 'bg-h-gray text-3xl font-extrabold'
                                                : 'bg-h-blue font-bold hover:bg-h-gray hover:text-3xl hover:font-extrabold hover:scale-105'
                                        }`}
                                        onClick={() => {
                                            setCurPage(button.page);
                                        }}
                                    >
                                        {button.text}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </header>

                    <div className="mt-2">
                        {curPage === 'main' ? <MainPage /> : null}
                        {curPage === 'about' ? <AboutPage /> : null}
                        {curPage === 'guest' ? <GusetPage /> : null}
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndexPage;
