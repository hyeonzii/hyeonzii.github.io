import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import construction from '../images/construction.png';

function ContactPage() {
    useEffect(() => {
        AOS.init({ duration: 1200 }); // 컴포넌트가 마운트될 때 AOS를 초기화합니다.
    }, []);

    return (
        <div className="mt-36 flex flex-col justify-center items-center">
            <img src={construction} />
            <div className="text-h-gray font-extrabold">공사즁...</div>
        </div>
    );
}

export default ContactPage;
