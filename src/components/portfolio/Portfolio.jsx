import React from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';

export default function Portfolio() {
    const list = [
        {
            id: 'featured',
            title: 'Featured',
        },
        {
            id: 'web',
            title: 'Web App',
        },
        {
            id: 'mobile',
            title: 'Mobile App',
        },
        {
            id: 'design',
            title: 'Design',
        },
        {
            id: 'content',
            title: 'Content',
        },
    ];
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList title={item.title} />
                ))}
            </ul>
            <div className='container'>
                <div className='item'>
                    <img src='https://via.placeholder.com/150' alt=''></img>
                    <h3>SAMPLE TITLE</h3>
                </div>
                <div className='item'>
                    <img src='https://via.placeholder.com/150' alt=''></img>
                    <h3>SAMPLE TITLE</h3>
                </div>
                <div className='item'>
                    <img src='https://via.placeholder.com/150' alt=''></img>
                    <h3>SAMPLE TITLE</h3>
                </div>
                <div className='item'>
                    <img src='https://via.placeholder.com/150' alt=''></img>
                    <h3>SAMPLE TITLE</h3>
                </div>
                <div className='item'>
                    <img src='https://via.placeholder.com/150' alt=''></img>
                    <h3>SAMPLE TITLE</h3>
                </div>
                <div className='item'>
                    <img src='https://via.placeholder.com/150' alt=''></img>
                    <h3>SAMPLE TITLE</h3>
                </div>
            </div>
        </div>
    );
}
