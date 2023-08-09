import React from 'react';
import'./footer.css';

export default function Footer() {
  return (
    <div className='footer'>
        <a href="#"><img src={require('../images/facebook.png')} alt="facebook" /></a>
        <a href="#"><img src={require('../images/instagram.png')} alt="instagram" /></a>
        <a href="#"><img src={require('../images/twitter.png')} alt="twitter" /></a>
        <a href="#"><img src={require('../images/github.png')} alt="github" /></a>
    </div>
  );
}
