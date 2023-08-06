import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import moto from '../images/motogame.png';

function AboutPage() {
    const [text, setText] = useState('이현지.');
    const [text2, setText2] = useState('마우스를 올려 확인하세요');

    function handleMouseEnter() {
        setText('1999.09.10' + '\n' + 'Kwangwoon' + '\n' + 'Univ.');
        setText2('⬇️');
    }

    function handleMouseLeave() {
        setText('이현지.');
        setText2('마우스를 올려 확인하세요');
    }

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section>
            <div className="container">
                <div id="scrollArea" className=" about-col-scroll">
                    <div className="box-margin">
                        <div className="">
                            <div
                                className="about-h1-box"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div>
                                    <h1>{text}</h1>
                                    <br />
                                    <h3 className="blinking">{text2}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="scroll-content" data-aos="fade-left">
                            <h3>🔥 Strength.</h3>
                        </div>

                        <div className="about-content-box content-skill-box">
                            <div className="skill-tag scroll-content" data-aos="fade-right">
                                React
                            </div>
                            <div className="skill-tag scroll-content" data-aos="fade-left">
                                Javscript
                            </div>
                            <div className="skill-tag scroll-content" data-aos="fade-right">
                                Recoil
                            </div>
                            <div className="skill-tag scroll-content" data-aos="fade-left">
                                Styled
                            </div>
                            <div className="skill-tag scroll-content" data-aos="fade-right">
                                Android
                            </div>
                            <div className="skill-tag scroll-content" data-aos="fade-left">
                                Java
                            </div>
                        </div>
                    </div>
                    <div>
                        <div data-aos="fade-left">
                            <h3>📖 Project 모투겜.</h3>
                        </div>

                        <div className="about-content-box">
                            <div className="skill-tag scroll-content" data-aos="fade-right">
                                <strong>모두를 위한 투자 게임</strong>
                            </div>
                            <div className="skill-tag scroll-content" data-aos="fade-left">
                                <strong>React Javascript</strong>
                            </div>
                            <div data-aos="fade-right">
                                <img src={moto} alt="motogame" />
                            </div>
                            <div className="content-inner-box-ho" data-aos="fade-left">
                                <a href="https://battle-cupboard-4cc.notion.site/d228cae50ccf438ab5b9413e320ab86d">
                                    <strong>Page</strong>
                                </a>
                            </div>
                            <div className="content-inner-box-ho" data-aos="fade-right">
                                <a href="https://www.motugame.shop/">
                                    <strong>You can Play!</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutPage;
