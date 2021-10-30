import React from 'react';
import './topbar.scss';
import { GrMail } from 'react-icons/gr';
import { FaGithub, FaGoogleDrive, FaLinkedin } from 'react-icons/fa';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={'topbar ' + (menuOpen && 'active')}>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>
                        [Insert Logo]
                    </a>
                    <a href='mailto:[YOUR EMAIL]'>
                        <div className='itemContainer'>
                            <GrMail className='icon' />
                            <span>[Insert Email]</span>
                        </div>
                    </a>
                    <a
                        // ENTER GITHUB ADDRESS
                        href='https://github.com/'
                        rel='noreferrer'
                        target='_blank'
                    >
                        <div className='itemContainer'>
                            <FaGithub className='icon' />
                            <span>Github</span>
                        </div>
                    </a>
                    <a
                        // ENTER LINKEDIN ADDRESS
                        href='https://www.linkedin.com/'
                        rel='noreferrer'
                        target='_blank'
                    >
                        <div className='itemContainer'>
                            <FaLinkedin className='icon' />
                            <span>LinkedIn</span>
                        </div>
                    </a>
                    <a
                        // ENTER RESUME LINK
                        href='https://www.google.com'
                        rel='noreferrer'
                        target='_blank'
                    >
                        <div className='itemContainer'>
                            <FaGoogleDrive className='icon' />
                            <span>Resume</span>
                        </div>
                    </a>
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
