import React, { useState } from 'react';
import { portfolioSlider } from '../../projectData';
import { MdOutlineArrowBack, MdArrowForward } from 'react-icons/md';
import './works.scss';

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClick = (way) => {
        way === 'left'
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(
                  currentSlide < portfolioSlider.length - 1
                      ? currentSlide + 1
                      : 0
              );
    };
    return (
        <div className='works' id='works'>
            <div
                className='slider'
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {portfolioSlider.map((data) => (
                    <div className='container'>
                        <div className='item'>
                            <div className='left'>
                                <div className='leftContainer'>
                                    <div className='imgContainer'>
                                        <img src={data.icon} alt='' />
                                    </div>
                                    <h2>{data.title}</h2>
                                    <p>{data.desc}</p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className='right'>
                                <img src={data.img} alt='' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <MdOutlineArrowBack
                className='arrow left'
                onClick={() => handleClick('left')}
            />
            <MdArrowForward
                className='arrow right'
                onClick={() => handleClick('right')}
            />
        </div>
    );
}
