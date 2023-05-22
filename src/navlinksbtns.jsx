import React from 'react';
import mobileicon from '../src/pics/mobileicon.png';
import laptopicon from '../src/pics/laptopicon.png';
import clothesicon from '../src/pics/clothesicon.png';
import shoeicon from '../src/pics/shoeicon.png';
import accesoriesicon from '../src/pics/accesoriesicon.png';
import wishilisticonwhite from '../src/pics/wishilisticonwhite.png';
import carticonwhite from '../src/pics/carticonwhite.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link} from 'react-router-dom';

const Navlinksbtns = () => {
  const isMobile = window.innerWidth <= 640;

  const offset = isMobile ? '98' : '52'; 

  return (
    <>
      <p className="whatruText">What are you looking for?</p>
      <div className="navlinks">
        <AnchorLink href="#mobile" offset={offset} className="navLink">
          <span className="navlinkbtn">
            <img src={mobileicon} alt="mobileicon" className="navimg"></img>
            <span className="navtext">Mobiles</span>
          </span>
        </AnchorLink>

        <AnchorLink href="#laptop" offset={offset} className="navLink">
        <span className="navlinkbtn">
          <img src={laptopicon} alt="laptopicon" className="navimg"></img>
          <span className="navtext">Laptop</span>
        </span></AnchorLink>
        <AnchorLink href="#shoes" offset={offset} className="navLink">
        <span className="navlinkbtn">
          <img src={shoeicon} alt="shoesicon" className="navimg"></img>
          <span className="navtext">Shoes</span>
        </span></AnchorLink>
        <br></br>
      </div>
      
      <div className="navlinks">
      <AnchorLink href="#watch" offset={offset} className="navLink">
        <span className="navlinkbtn">
          <img src={accesoriesicon} alt="accesoriesicon" className="navimg"></img>
          <span className="navtext">Accessories</span>
        </span></AnchorLink>

        <AnchorLink href="#clothes" offset={offset} className="navLink">
          <span className="navlinkbtn">
            <img src={clothesicon} alt="clothesicon" className="navimg"></img>
            <span className="navtext">Clothes</span>
          </span>
        </AnchorLink>
      </div>
      
      <div className="viewcart_viewwishlist">
      <Link to='/Cart' className="no-underline">
        <span className="viewbtn">
          <img src={carticonwhite} alt="carticon" className="cartwishlistnimg"></img>
          <span className="carttext">View cart</span>
        </span>
        </Link>
        <Link to='/Wishlist' className="no-underline">
        <span className="viewbtn">
          <img src={wishilisticonwhite} alt="wishlisticon" className="cartwishlistnimg"></img>
          <span className="carttext">Wishlists</span>
        </span>
        </Link>
      </div>
    </>
  );
};

export default Navlinksbtns;
