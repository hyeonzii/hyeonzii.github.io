import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import notebook from '../images/notebook.png';

function MainPage() {
    let introText = 'bg-gradient-to-r from-h-blue to-h-gray text-transparent bg-clip-text font-extrabold text-3xl';

    return (
        <div className="w-full h-screen mt-16 p-10 overflow-y-auto">
            <div className="w-full h-fit">
                <div className="flex">
                    <img src={notebook} className="w-60"></img>
                    <div className="ml-2 flex flex-col justify-center">
                        <p className={introText}>안녕하세요</p>
                        <p className={introText}>FRONTEND DEVELOPER</p>
                        <p className={introText}>이현지 입니다.</p>
                    </div>
                </div>

                <div className="mt-28">
                    <div className=" w-96 border-b-8 border-h-blue"></div>
                    <div className="font-black text-h-blue text-5xl ml-4 -mt-12 ">POSTS</div>
                </div>
                <div className="mt-8">
                    <div className="w-full h-60 p-4 flex flex-col rounded-lg cursor-pointer hover:bg-post-hover-gray">
                        <div className="font-extrabold mt-3 text-2xl flex-none">제목</div>
                        <div className="text-slate-500 mt-3 flex-grow">미리보기</div>
                        <div className="text-slate-500 mt-3 flex-none">2023-08-08</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
