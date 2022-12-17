import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () =>setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else{
            setButton(true);
        }
    };

    useEffect( () => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

  return (
    <>
    <nav className='navbar'>
       <div className='navbar-container'>
        <Link  to='/' className='navebar-logo' onClick={closeMobileMenu}>
        <img src='/images/car_RFS_Logo.png ' alt='logo'></img>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-items'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>

            </li>
            <li className='nav-items'>
                <Link to='/Events' className='nav-links' onClick={closeMobileMenu}>
                    Events
                </Link>

            </li>
            <li className='nav-items'>
                <Link to='/AboutUs' className='nav-links' onClick={closeMobileMenu}>
                    About Us
                </Link>

            </li>
          
            <li className='nav-items'>
                <Link to='/Login' className='nav-links' onClick={closeMobileMenu}>
                    Login
                </Link>

            </li>

            <li className='nav-items'>
                <Link to='/SignUp' className='nav-links' onClick={closeMobileMenu}>
                </Link>

            </li>
           
            
        </ul>
       { button && <Button  buttonStyle='btn--outline'></Button>}
       <Link>
   
       {/* <form action='/' method='get'>
        <input type='search' placeholder='Search'></input>

       </form> */}

       
       </Link>


       <form action="/">

    <div class="relative border-2 border-gray-100 m-4 rounded-lg">
        <div class="absolute top-4 left-3">
            <i
                class="fa fa-search text-gray-400 z-20 hover:text-gray-500"
            ></i>
        </div>
        <input
            type="text"
            name="search"
            class="h-14 w-full pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
            placeholder="Search For a Festival..."
        />
       
            <button
                type="submit"
                class="h-10 w-20 text-white rounded-lg bg-black hover:bg-red-600"
            >
                Search
            </button>
      
    </div>
    </form>
      
    </div>
     </nav>
    </>
  );
}

export default Navbar
