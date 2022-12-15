import React from 'react'
import '../../App.css';
import HeaderSection from '../HeaderSection';
import {Button} from '../Button';
import Footer from '../Footer';


function SignUp() {
  return (
    <>
        <HeaderSection />
        <div className='loginform '>
        <form>
        <h2>Create an Account</h2>
        <div>
                         <input 
                        type='text'
                        name='name'
                        placeholder='Your Name'
                        className='footer-input'
                        />
                          </div>
                        <div>
                         
                        <input 
                        type='email'
                        name='email'
                        placeholder='Your Email'
                        className='footer-input'
                        />
                        </div>
                        <div>
                         <input 
                        type='text'
                        name='address'
                        placeholder='Your address'
                        className='footer-input'
                        />
                          </div>
                       
                        <div>
                         <input 
                        type='password'
                        name='pasword'
                        placeholder='Create Password'
                        className='footer-input'
                        />
                          </div>
                        <div>
                         <input 
                        type='password'
                        name='pasword'
                        placeholder='Repeat Password'
                        className='footer-input'
                        />
                          </div>
                       <Button buttoStyle='btn-outlin'>Register</Button>

                    </form>
                    </div>
        <Footer />
        </>
  )
}

export default SignUp
