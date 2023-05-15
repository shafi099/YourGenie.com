import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import carticonblack from '../src/pics/carticonblack.png';
import wishlistblackicon from '../src/pics/wishlistblackicon.png';
import './App.css';
import profilepic from './pics/profilepic.jpg';

const Topnav = (props) => {
  const Navigate = useNavigate()

   const NavigateCartPage = () => Navigate('/Cart')

  return (
    <>
      <div className='topnavportion'>
        <div className='topnav'>
          <span className="pagename">
            <Link to="/" className="no-underline">YourGenie.com</Link>
          </span>
          <span className="cartwishlist">
            {/* <Link to='/Cart' className="no-underline"> */}
              <button className="cartbtn" onClick={NavigateCartPage}>
                <img src={carticonblack} alt="carticon"></img>
                <span className="cartcount">{props.Cartvalue}</span>
              </button>
            {/* </Link> */}
            <Link to='/Wishlist' className="no-underline">
              <span className="wishlistbtn">
                <img src={wishlistblackicon} alt="wishlisticon"></img>
                <span className="cartcount">{props.wishlistvalue}</span>
              </span>
            </Link>
            <img src={profilepic} className='contact' alt="profile_pic"></img>
          </span>

        </div>

      </div>
    </>
  );
}

export default Topnav;
