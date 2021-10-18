import React from 'react'
import './works.scss'

export default function Works() {
    return (
        <div className='works' id='works'>
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src='https://via.placeholder.com/150' alt="" />
                                </div>
                                <h2>SAMPLE TITLE</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deleniti repellat dicta porro.</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src='https://via.placeholder.com/150' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
