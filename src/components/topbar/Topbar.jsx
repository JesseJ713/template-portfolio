import React from 'react';
import './topbar.scss';
import { GrMail } from 'react-icons/gr';
import { FaPhoneAlt } from 'react-icons/fa';

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>
                        SAMPLE LOGO
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
                <div className='right'></div>
            </div>
        </div>
    );
}
