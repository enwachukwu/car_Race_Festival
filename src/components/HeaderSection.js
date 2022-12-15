import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeaderSection.css'

function HeaderSection() {
  return (
    <div className='header-container'>
        <img src='/images/Background_image.jpg' alt='Background ' className='bg-img'></img>
      <h1>Car Race Festival</h1>
      <p>Check out the Latest!</p>
    <div className='header-btns'>
        <Button className='btns' 
        buttonStyle='btn--outline'
         buttonSize='btn--large'>
            Sign Up 
        </Button>
        <Button className='btns'
         buttonStyle='btn--primary'
          buttonSize='btn--large'>
            You can be the Winner
        </Button>

        </div>      
    </div>
  )
}

export default HeaderSection
