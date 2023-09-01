import React from 'react';
import construction from '../images/construction.png';
import Nav from '../components/Nav';

function GuestPage() {
    return (
        <div className="w-full h-full flex flex-col">
            <Nav category="guest" />
            <div className="w-full h-screen mt-28 p-10 overflow-y-auto">
                <div className="mt-36 flex flex-col justify-center items-center">
                    <img src={construction} alt="construction" />
                    <div className="text-h-gray font-extrabold">공사즁...</div>
                </div>
            </div>
        </div>
    );
}

export default GuestPage;
