import React from 'react';
import '../../App.css';
// import HeroSection from '../HeroSection.js';
import Footer from '../Footer.js';


function Services() {
  return (
    <>
      <div className='hero-container'>
    <video src='/videos/video-2.mp4?raw=true' autoPlay loop  />
      <h1>PAULA MANESE</h1>
      <p>Full-Stack Developer</p>
      <p>AWS Cloud Practioner</p>
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
 
    </div>
 
 
      <Footer />
    </>
  );
}
export default Services;