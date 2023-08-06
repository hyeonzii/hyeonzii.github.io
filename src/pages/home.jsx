import React, { useEffect } from 'react';
import laptop from '../images/laptopshin.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function HomePage() {
    useEffect(() => {
        AOS.init({ duration: 1200 }); // 컴포넌트가 마운트될 때 AOS를 초기화합니다.
    }, []);

    return (
        <>
            <section className="hero">
                <div className="container" data-aos="fade-up">
                    <div className="hero-col hero-image-col">
                        <picture className="hero-image">
                            <source
                                srcset="img/hero-sm.jpg"
                                width="363"
                                height="222"
                                media="(max-width: 768px)"
                                type="image/jpeg"
                            />
                            <source
                                srcset="img/hero-md.jpg"
                                width="608"
                                height="372"
                                media="(max-width: 768px)"
                                type="image/jpeg"
                            />
                            <img src={laptop} width="870" height="532" alt="Me working on a computer" />
                        </picture>
                    </div>

                    <div className="hero-col">
                        <div className="hero-about">
                            <h2 className="hero-about__subheading">Hi 🤚 I'm hyeonji</h2>
                            <h1 className="hero-about__heading">
                                Frontend
                                <br />
                                Developer.
                            </h1>
                            <p className="hero-about__body">성장하는 개발자</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePage;
