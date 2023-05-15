import React, { useState , useEffect} from 'react';
import Topnav from './topnav';
import Homeitems from './Homeitems';
import Timer from './Timer';
import Navlinksbtns from './navlinksbtns';
import Scrollcard from './Scrollcards';
import Feedback from './Feedback'
import Contact from './Contact'
import Loading from './Loading'

import './App.css';

const Home = () => {

  const [carted, setCarted] = useState([]);

  const cartbag = (item) => {
    setCarted(item);
    console.log(carted);
  };

  const [Cartvalue, setCartvalue] = useState(0)
  const increcart = () => {
    
    setCartvalue(Cartvalue + 1);

  }
  const decrecart = () => setCartvalue(Cartvalue - 1)

  const [wishlistvalue, setwishlistvalue] = useState(0)
  const increwishlist = () => setwishlistvalue(wishlistvalue + 1)
  const decrewishlist = () => setwishlistvalue(wishlistvalue - 1)

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading delay
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
          <Topnav
            increcart={increcart}
            decrecart={decrecart}
            wishlistvalue={wishlistvalue}
            Cartvalue={Cartvalue}
            // cartbox={cartbox}
          />
          <Timer />
          <Scrollcard />
          <Navlinksbtns />
  
      <Homeitems cartbag={cartbag} increcart={increcart} decrecart={decrecart} increwishlist={increwishlist} decrewishlist={decrewishlist} />
    
          <Feedback />
        </>
      )}
    </>
  );
  
}

export default Home;
