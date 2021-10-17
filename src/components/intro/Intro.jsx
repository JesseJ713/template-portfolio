import React from 'react';
import './intro.scss';
import { FaArrowDown } from 'react-icons/fa';

export default function Intro() {
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
                        Freelance<span></span>
                    </h3>
                </div>
                <a href='#portfolio' alt=''>
                    <FaArrowDown />
                </a>
            </div>
        </div>
    );
}
