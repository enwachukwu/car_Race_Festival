import React from 'react'
import '../../App.css';
import HeaderSection from '../HeaderSection';
import {Button} from '../Button';
import Footer from '../Footer';
import '../Login.css';

function Login() {
    return (
        <>
        <HeaderSection />
        <div className='loginform '>
        <form>
                        <div>
                            <h2>Login to your Acount</h2>
                        <input 
                        type='email'
                        name='email'
                        placeholder='Your Email'
                        className='footer-input'
                        />
                        </div>
                        <div>
                         <input 
                        type='password'
                        name='pasword'
                        placeholder='Your Password'
                        className='footer-input'
                        />
                          </div>
                       <Button buttoStyle='btn-outlin'>Send</Button>

                    </form>
                    </div>
        <Footer />
        </>
    );
}

export default Login
