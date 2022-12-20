import React from 'react'
import '../AboutUs.css';
import {Button} from '../Button';
import Footer from '../Footer';
import CardItem from '../CardItem'
import '../Cards.css';



function AboutUs() {
  return (
    <>
    <div className='header-container'>
       {/*  <img src='/images/Background_image.jpg' alt='Background ' className='bg-img'></img>  */}

        <img src='images/img_1.jpg' alt='Background ' className='bg-img'></img> 
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

    <div className='cards'>
      <div>  <h1>All You Need To Know About Car Race Festival</h1></div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
            
             
                <CardItem
                src="images/img_2.jpg"  text="This is a testing page, we would write the main text sonnersed ipsum. 
                Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt 
                tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros
                 faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                 Sed consequat, leo eget bibendum sodales, augue velit cursus nunc  sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
                  hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
                 Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.
                  Duis leo. Sed fringilla mauris sit amet nibh.
                 Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,,"
                 label="The Short History About Car Race Festival "
                path="/"
                />
             
            </ul>
                <p>
                sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
                 Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.
                  Duis leo. Sed fringilla mauris sit amet nibh.
                 Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                </p>
            </div> 

      </div>
    </div>

    <div>
     <Footer />
     </div>
     </>
  )
}

export default AboutUs
