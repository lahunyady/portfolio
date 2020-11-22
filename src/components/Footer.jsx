import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            
          </div>
          <div className='social-icons'>
            <Link
              className='social-icon-link linkedin'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
            <Link
              className='social-icon-link github'
              to='/'
              target='_blank'
              aria-label='Github'
            >
              <i className='fas fa-code-branch' />
            </Link>
            <Link
              className='social-icon-link mobile'
              to='/'
              target='_blank'
              aria-label='Mobile'
            >
              <i className='fas fa-mobile'/>
            </Link>
            <Link
              className='social-icon-link mobile'
              to='/'
              target='_blank'
              aria-label='Mobile'
            >
              <i className='fas fa-envelope-open'/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;