import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {


  return (
    <div className='hero-container'>
      <video src='/videos/video3.mp4' autoPlay loop  />
      <h1>PAULA MANESE</h1>
      <p>Full-Stack Developer</p>
      <p>AWS Cloud Practioner</p>
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          DOWNLOAD CV
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div> */}
    </div>
  );
}

export default HeroSection;