import React from 'react'
import CardItem from '../CardItem'
import '../Cards.css';
import Footer from '../Footer';

function Events() {
  return (
    <>
    <div className='cards'>
    <h1>Check Out The up Coming Events </h1>
  <div className='cards__container'>
    <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
            src="images/img_8.jpg" text="This is a testing page, we would write the main text sonner"
             label="car-Race"
            path="/"
            />
         
            <CardItem
            src="images/img_6.jpg" text="This is a testing page, we would write the main text sonner"
             label="Happy day"
            path="/"
            />
         
            <CardItem
            src="images/img_6.jpg" text="This is a testing page, we would write the main text sonner"
             label="Happy day"
            path="/"
            />
         
        </ul>
        <ul className='cards__items'>
            <CardItem
            src="images/img_1.jpg" text="This is a testing page, we would write the main text sonner"
             label="car-Race"
            path="/"
            />
         
            <CardItem
            src="images/img_2.jpg" text="This is a testing page, we would write the main text sonner"
             label="Happy day"
            path="/Login"
            />
         
            <CardItem
            src="images/img_4.jpg" text="This is a testing page, we would write the main text sonner"
             label="Happy day"
            path="/"
            />
         
        </ul>
        </div> 

  </div>
</div>

<Footer />
    </>

  )
}

export default Events
