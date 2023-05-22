import React, { useState, useEffect } from 'react';
import Topnav from './topnav';
import Homeitems from './Homeitems';
import Timer from './Timer';
import Navlinksbtns from './navlinksbtns';
import Scrollcard from './Scrollcards';
import Feedback from './Feedback'
import Contact from './Contact'
import Loading from './Loading'

import './App.css';

const Home = (props) => {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const delay = 4000; // 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, delay);
  }, []);


  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Contact />
          <Topnav wishlistvalue={props.wishlistvalue} Cartvalue={props.Cartvalue} />
          <Timer />
          <Scrollcard />
          <Navlinksbtns />
          <Homeitems CartNum={props.CartNum} WishNum={props.WishNum} carthandler={props.carthandler} wishhandler={props.wishhandler}/>
          <Feedback />
          
        </>
      )}
    </>
  );

}

export default Home;
