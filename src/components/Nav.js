import React from 'react';
import './Nav.css'

export default function Nav(){
    return(
        <div className='nav'>
            <img src={require('../images/person.jpg')} alt="react logo" />
            <div className='headings'>
                <h3><b>James Clarke</b></h3>
                <h4>Front End Developer</h4>
                <h5>Toronto, Canada</h5>
            </div>
            <div className='social'>
                <div className='email'>
                    <a href="#"><img src={require('../images/email.png')} alt="email" /></a>
                </div>
                <div className='linkedin'>
                    <a href="#"><img src={require('../images/linkedin.png')} alt="linkedin" /></a>
                </div>
            </div>
        </div>
    );
}