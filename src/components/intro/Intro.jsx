import React, { useEffect, useRef } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { init } from 'ityped';
import './intro.scss';

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        console.log(textRef);
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            strings: ['Full Stack Developer', 'Designer', 'Musician']
        })
    }, []);

    return (
        <div className='intro' id='intro'>
            <div className='left'>
                <div className='imgContainer'>
                    <img src='assets/thinking-man.png' alt='' />
                </div>
            </div>
            <div className='right'>
                <div className='wrapper'>
                    <h2>Hi there, I'm</h2>
                    <h1>Jesse Jackson</h1>
                    <h3>
                        Freelance <span ref={textRef}></span>
                    </h3>
                </div>
                <a href='#portfolio' alt=''>
                    <FaArrowDown />
                </a>
            </div>
        </div>
    );
}
