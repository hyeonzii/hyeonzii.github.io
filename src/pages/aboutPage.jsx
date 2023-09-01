import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hello from '../images/hello.png';
import Nav from '../components/Nav';

function AboutPage() {
    // contact 버튼 호버 관리
    const [hoveredButton, setHoveredButton] = useState(null);

    //aos animation 초기화
    useEffect(() => {
        AOS.init();
    });

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
    let contactBtn = `rounded-full h-16 p-2 flex justify-center items-center font-extrabold transition-transform duration-500
    bg-h-gray w-16 transform scale-100 hover:transform hover:scale-105  hover:w-fit hover:bg-h-blue hover:text-white hover`;

    //strength 버튼 디자인
    let strengthBtn = `rounded-full h-16 p-2 flex justify-center items-center font-extrabold transition-transform duration-500
    bg-h-gray w-16 transform scale-100 hover:transform hover:scale-105 hover:bg-h-blue hover:text-white hover`;

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
        <div className="w-full h-full flex flex-col">
            <Nav category="about" />
            <div className="overflow-y-auto flex flex-col justify-center items-center mt-24">
                <div className="w-1/2 p-10 h-fit">
                    <div className="flex justify-center items-center">
                        <img src={hello} alt="hello-developer" className="w-60"></img>
                        <div className={infoBox}>
                            <div data-aos="fade-left" data-aos-duration="1000" className={info}>
                                이현지
                            </div>
                            <div data-aos="fade-left" data-aos-duration="1000" className={info}>
                                1999.09.10
                            </div>
                            <div data-aos="fade-left" data-aos-duration="1000" className={info}>
                                KwangWoon Univ
                            </div>
                            <div data-aos="fade-left" data-aos-duration="1000" className={info}>
                                Computer Engineering
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-1/2 h-fit mt-8">
                    <div className="animate-expand-width w-0 border-b-4 border-h-blue"></div>
                    <div className="animate-fade-in font-bold text-h-blue text-5xl ml-4 -mt-11 opacity-0">CONTACT</div>

                    <div className="animate-fade-in mt-4 grid grid-row-3 gap-4 opacity-0">
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
                        <div className="animate-expand-width w-0 border-b-4 border-h-blue"></div>
                        <div className="animate-fade-in font-bold text-h-blue text-5xl ml-4 -mt-11 opacity-0">
                            STRENGTH
                        </div>
                    </div>
                    <div className="animate-fade-in mt-4 flex gap-5 opacity-0">
                        <div className={strengthBtn}>React</div>
                        <div className={strengthBtn}>JS</div>
                        <div className={strengthBtn}>Recoil</div>
                        <div className={strengthBtn}>Android</div>
                        <div className={strengthBtn}>Java</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
