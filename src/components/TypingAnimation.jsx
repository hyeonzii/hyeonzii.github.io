import React, { useState, useEffect } from 'react';

function TypingAnimation({ text, typingSpeed }) {
    const [currentText, setCurrentText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(text);

        if (count < text.length) {
            const typingTimer = setTimeout(() => {
                setCurrentText((prev) => prev + text[count]);
                setCount((prevIndex) => prevIndex + 1);
            }, 200);
            return () => {
                setIsTyping(false);
                clearTimeout(typingTimer);
                console.log(isTyping);
            };
        }
    }, [count, isTyping, currentText]);

    return (
        <p className="bg-gradient-to-r from-h-blue to-h-gray text-transparent bg-clip-text font-extrabold text-3xl">
            {currentText}
            {isTyping ? <div>|</div> : <div className="animate-blink-effect">|dddddd</div>}
        </p>
    );
}

export default TypingAnimation;
