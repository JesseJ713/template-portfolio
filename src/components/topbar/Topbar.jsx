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
                        Rev{<sup className='exponent'>Dev</sup>}
                    </a>
                    <a href='mailto:jesse.jackson.c@gmail.com'>
                        <div className='itemContainer'>
                            <GrMail className='icon' />
                            <span>jesse.jackson.c@gmail.com</span>
                        </div>
                    </a>
                    <a
                        href='https://github.com/JesseJ713'
                        rel='noreferrer'
                        target='_blank'
                    >
                        <div className='itemContainer'>
                            <FaGithub className='icon' />
                            <span>Github</span>
                        </div>
                    </a>
                    <a
                        href='https://www.linkedin.com/in/jesse-jackson-atx/'
                        rel='noreferrer'
                        target='_blank'
                    >
                        <div className='itemContainer'>
                            <FaLinkedin className='icon' />
                            <span>LinkedIn</span>
                        </div>
                    </a>
                    <a
                        href='https://docs.google.com/document/d/1OAcNqShun2ll-cHmemCxcgJuECvqdQ0V/edit?usp=sharing&ouid=115416440635836363293&rtpof=true&sd=true'
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
