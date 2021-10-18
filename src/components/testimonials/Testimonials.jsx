import React from 'react';
import './testimonials.scss';
import { testimonialData } from '../../projectData';
import { MdOutlineArrowBack, MdArrowForward } from 'react-icons/md';

export default function Testimonials() {
    return (
        <div className='testimonials' id='testimonials'>
            <h1>Testimonials</h1>
            <div className='container'>
                {testimonialData.map((data) => (
                    <div className='card'>
                        <div className='top'>
                            <MdArrowForward className='left' />
                            <img src={data.img} className='user' alt='' />
                            <img src={data.icon} className='right' alt='' />
                        </div>
                        <div className='center'>{data.desc}</div>
                        <div className='bottom'>
                            <h3>{data.name}</h3>
                            <h4>{data.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
