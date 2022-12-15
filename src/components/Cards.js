import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1></h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                src="images/img_8.jpg" text="This is a testing page, we would write the main text sonner"
                 label="car-Race"
                path="/Events"
                />
             
                <CardItem
                src="images/img_6.jpg" text="This is a testing page, we would write the main text sonner"
                 label="Happy day"
                path="/ContactUs"
                />
             
            </ul>
            <ul className='cards__items'>
                <CardItem
                src="images/img_1.jpg" text="This is a testing page, we would write the main text sonner"
                 label="car-Race"
                path="/SignUp"
                />
             
                <CardItem
                src="images/img_2.jpg" text="This is a testing page, we would write the main text sonner"
                 label="Happy day"
                path="/Login"
                />
             
             
            </ul>
            </div> 

      </div>
    </div>
  )
}

export default Cards
