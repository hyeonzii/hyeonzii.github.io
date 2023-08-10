import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hello from '../images/hello.png';

function AboutPage() {
    // contact 버튼 호버 관리
    const [hoveredButton, setHoveredButton] = useState(null);

    // contact 버튼
    const buttons = [
        { text: 'Email', hoverText: 'hyun09100407@gmail.com' },
        { text: 'Github', hoverText: "hyeonzii's github" },
        { text: 'Velog', hoverText: "kkorin's velog" },
    ];

    // 정보 레이아웃과 텍스트 설정
    const info = 'flex justify-center items-center font-bold text-lg text-white bg-h-blue rounded-full w-60 p-2 ';
    const infoBox = 'ml-20 mt-2 grid grid-rows-4 gap-4';

    //contact 버튼 디자인 && Strength 디자인
    let contactBtn = `rounded-full h-16 p-2 flex justify-center items-center font-extrabold transition-transform duration-300
    bg-h-gray w-16 transform scale-100 hover:transform hover:scale-105  hover:w-fit hover:bg-h-blue hover:text-white hover`;

    //이메일 수신자 설정
    const recipientEmail = 'hyun09100407@gmail.com';

    function handleMouseEnter(btnIndex) {
        setHoveredButton(btnIndex);
    }

    function handleMouseLeave() {
        setHoveredButton(null);
    }

    // 클릭 시 이메일 보내는 함수
    function handleBtnClick() {
        window.location.href = `mailto:${recipientEmail}?subject=Subject%20Here&body=Body%20Here`;
    }

    // AOS 라이브러리 사용
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="w-full h-screen mt-28 p-10 overflow-y-auto">
            <div className="w-full h-fit ">
                <div className="flex justify-center items-center">
                    <img src={hello} className="w-60"></img>
                    <div className={infoBox}>
                        <div className={info}>이현지</div>
                        <div className={info}>1999.09.10</div>
                        <div className={info}>KwangWoon Univ</div>
                        <div className={info}>Computer Engineering</div>
                    </div>
                </div>
                <div className="mt-28">
                    <div className=" w-96 border-b-4 border-h-blue"></div>
                    <div className="font-bold text-h-blue text-5xl ml-4 -mt-11 ">CONTACT</div>
                </div>

                <div className="mt-8 grid grid-row-3 gap-4">
                    <button
                        className={contactBtn}
                        onMouseEnter={() => handleMouseEnter(0)}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleBtnClick}
                    >
                        {hoveredButton === 0 ? buttons[0].hoverText : buttons[0].text}
                    </button>
                    <a
                        href="https://github.com/hyeonzii"
                        className={contactBtn}
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {hoveredButton === 1 ? buttons[1].hoverText : buttons[1].text}
                    </a>
                    <a
                        href="https://velog.io/@hyeonzii"
                        className={contactBtn}
                        onMouseEnter={() => handleMouseEnter(2)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {hoveredButton === 2 ? buttons[2].hoverText : buttons[2].text}
                    </a>
                </div>
                <div className="mt-28">
                    <div className=" w-96 border-b-4 border-h-blue"></div>
                    <div className="font-bold text-h-blue text-5xl ml-4 -mt-11 ">STRENGTH</div>
                </div>
                <div className="mt-8 flex gap-5">
                    <div className={contactBtn}>React</div>
                    <div className={contactBtn}>JS</div>
                    <div className={contactBtn}>Recoil</div>
                    <div className={contactBtn}>Android</div>
                    <div className={contactBtn}>Java</div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
