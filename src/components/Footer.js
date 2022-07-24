

import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
      <p className='footer-subscription-text'>
              JOIN NOW!
        </p>
        <p className='footer-subscription-heading'>
             Receive exclusive monthly updates, stay on top tech trends, and coding tips!
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          {/* <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div> */}
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <a href='https://linktr.ee/paulamanese' alt='linktree'>Contact</a>
            <Link to='/'>Support</Link>
            <Link to='/'>Services</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          {/* <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div> */}
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.instagram.com/paowiicarina/' alt='instagram'>Instagram</a>
            <a href='https://www.facebook.com/paowii.manese/' alt='facebook'>Facebook</a>
            <a href='https://github.com/PaulaManese' alt='github'>Github</a>
            <a href='https://www.linkedin.com/in/paula-manese-b32a64197/' alt='github'>LinkedIn</a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              PAULA MANESE
              <i className='fa-solid fa-terminal' />
            </Link>
          </div>
          <small className='website-rights'>
         All Rights Reserved by PAULA MANESE 
          </small>
          <div className='social-icons'>
            {/* <Link
              className='social-icon-link facebook'
              to='/'
              href='https://www.facebook.com/paowii.manese/'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i  className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i  className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link> */}

        

            <a href='https://www.instagram.com/paowiicarina/' alt='instagram'><i className="fa-brands fa-instagram-square" /></a>
            <a href='https://www.facebook.com/paowii.manese/' alt='facebook'><i className="fa-brands fa-facebook-square"/></a>
            <a href='https://github.com/PaulaManese' alt='github'><i className="fa-brands fa-github-square"/></a>
            <a href='https://gitlab.com/paowiicarina' alt='gitlab'><i className="fa-brands fa-gitlab"/></a>   
            <a href='https://www.linkedin.com/in/paula-manese-b32a64197/' alt='linkedin'><i className="fa-brands fa-linkedin"/></a>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;