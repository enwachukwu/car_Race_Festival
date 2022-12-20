import React from 'react'
import {Button} from './Button';
import  './Footer.css';
import {Link} from 'react-router-dom';
function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
               Take Advantage of Our seasonal Festivals
            </p>
            <p className='footer-subscription-text'> 
                Register for the up coming events and take advantage of our yearly festivals
                </p>
                <div className='input-areas'>
                    <form action='/'>
                        <input 
                        type='email'
                        name='email'
                        placeholder='Your Email'
                        className='footer-input'
                        />
                       <Button buttoStyle='btn-outline'>Subscribe</Button>

                    </form>

                </div>
        </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>About Us</h2>
                <Link to='/'>Testimonies</Link>
                <Link to='/'>Organisers</Link>
                <Link to='/'>Past Winners</Link>
                <Link to='/'>Awards</Link>

            </div>
            <div className='footer-link-items'>
                <h2>Contact Us</h2>
                <Link to='/'>Testimonies</Link>
                <Link to='/'>Organisers</Link>
                <Link to='/'>Past Winners</Link>
                <Link to='/'>Awards</Link>

            </div>
            
        </div>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>Our Partners</h2>
                <Link to='/'>Testimonies</Link>
                <Link to='/'>Organisers</Link>
                <Link to='/'>Past Winners</Link>
                <Link to='/'>Awards</Link>

            </div>
            <div className='footer-link-items'>
                <h2>Awards</h2>
                <Link to='/'>Testimonies</Link>
                <Link to='/'>Organisers</Link>
                <Link to='/'>Past Winners</Link>
                <Link to='/'>Awards</Link>

            </div>
            
        </div>

      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
            <Link to='/' className='social-logo'>
            <img src='/images/car_RFS_Logo.png ' alt='logo' width='80px'></img> 
            </Link>
            <small className='website-rights'>Car RFS all right reservered 2022</small>
        </div>
        <div>
          
            <div className='social-icons'>
                <Link className='social-icon-link facebook'
                to='/' target='_blank' area-aria-label='Facebook'>
                    <i className='fab fa-facebook'></i>
                
                </Link>
                <Link className='social-icon-link linkedin'
                to='/' target='_blank' area-aria-label='LinkedIn'>
                    <i className='fab fa-linkedin'></i>
                
                </Link>
                <Link className='social-icon-link instagram'
                to='/' target='_blank' area-aria-label='Instagram'>
                    <i className='fab fa-instagram'></i>
                </Link>

            </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
