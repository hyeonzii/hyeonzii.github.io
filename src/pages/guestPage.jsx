import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import construction from '../images/construction.png';
import Nav from '../Components/Header/Nav';

function ContactPage() {
    useEffect(() => {
        AOS.init({ duration: 1200 }); // 컴포넌트가 마운트될 때 AOS를 초기화합니다.
    }, []);

    return (
        <div className="w-full h-full flex flex-col">
            <Nav category="guest" />
            <div className="w-full h-screen mt-28 p-10 overflow-y-auto">
                <div className="mt-36 flex flex-col justify-center items-center">
                    <img src={construction} />
                    <div className="text-h-gray font-extrabold">공사즁...</div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
