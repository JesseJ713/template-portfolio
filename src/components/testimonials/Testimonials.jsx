import React from 'react';
import './testimonials.scss';
import { testimonialData } from '../../projectData';
import { BsArrowReturnRight } from 'react-icons/bs';

export default function Testimonials() {
    return (
        <div className='testimonials' id='testimonials'>
            <h1>Testimonials</h1>
            <div className='container'>
                {testimonialData.map((data) => (
                    <div className='card'>
                        <div className='top'>
                            <BsArrowReturnRight className='left' />
                            <img src={data.img} className='user' alt='' />
                            <a
                                href={data.profile}
                                rel='noreferrer'
                                target='_blank'
                            >
                                <img src={data.icon} className='right' alt='' />
                            </a>
                        </div>
                        <div className='center'>
                            <q>{data.desc}</q>
                        </div>
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
