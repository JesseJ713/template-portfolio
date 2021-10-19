import React from 'react';
import './topbar.scss';
import { GrMail } from 'react-icons/gr';
import { FaPhoneAlt } from 'react-icons/fa';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={'topbar ' + (menuOpen && 'active')}>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>
                        J{<sup className='exponent'>2</sup>}
                    </a>
                    <div className='itemContainer'>
                        <FaPhoneAlt className='icon' />
                        <span>5555555555</span>
                    </div>
                    <div className='itemContainer'>
                        <GrMail className='icon' />
                        <span>jesse.jackson.c@gmail.com</span>
                    </div>
                </div>
                <div className='right'>
                    <div
                        className='hamburger'
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
