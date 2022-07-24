import React from 'react';
import '../../App.css';

import  { Buttone } from '../ButtonLink.js';
import Footer from '../Footer.js';
// import { Button } from '../Button';

 function Contact() {
  return (
    <>
      <div className='hero-container'>
        
        <video src='/videos/video4.mp4' autoPlay loop  />
      <h1>PAULA MANESE</h1>
      <p>Full-Stack Developer</p>
      <p>AWS Cloud Practioner</p>
      <div className='hero-btns'>
        <Buttone
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          <a href='https://drive.google.com/file/d/1CmrSFRAEdfTtDU2eUAPPxuxQvGGF1wuK/view?usp=sharing' alt='cv' className="downloadcv">DOWNLOAD CV</a>
        </Buttone>
        <Buttone
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
       
        >
           <a href='https://linktr.ee/paulamanese' alt='cv' className="linktree">LINKTREE</a>
        </Buttone>
  
      </div>

    </div>
 
 
      <Footer />
    </>
  );
}
export default Contact;