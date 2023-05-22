import { Routes, Route } from "react-router-dom"
import React,{useState, useEffect}  from 'react';
import './App.css';
import Home from './Home'
import Wishlist from './Wishlist'
import Cart from './cart'

function App() {

  const [cartbox, setCartbox] = useState([]);

  const carthandler = (cartitems, add_or_remove) => {
    if (add_or_remove === 'add') {
      if (cartbox.length === 0) { setCartbox([cartitems]);} 
      else {  setCartbox(prevCartbox => [...prevCartbox, cartitems]);}
    } else { setCartbox(prevCartbox => prevCartbox.filter(item => item[0] !== cartitems));}};
  
  // useEffect(() => {console.log(cartbox);  }, [cartbox]);

  const [Cartvalue, setCartvalue] = useState(0)
  const CartNum = (i) => {
    if (i === 'add') { setCartvalue(Cartvalue + 1) }
    else { setCartvalue(Cartvalue - 1) }
  };


  const [wishlistvalue, setwishlistvalue] = useState(0)
  const WishNum = (i) => {
    if (i === 'add') { setwishlistvalue(wishlistvalue + 1) }
    else { setwishlistvalue(wishlistvalue - 1) };
  }
  const [wishbox, setwishbox] = useState([]);

  const wishhandler = (wishitems, add_or_remove) => {
    if (add_or_remove === 'add') {
      if (wishbox.length === 0) { setwishbox([wishitems]);} 
      else {  setCartbox(prevwishbox => [...prevwishbox, wishitems]);}
    } else { setCartbox(prevwishbox => prevwishbox.filter(item => item[0] !== wishitems));}};
  
  // useEffect(() => {console.log(cartbox);  }, [cartbox]);

  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home carthandler={carthandler} wishhandler={wishhandler} CartNum={CartNum} WishNum={WishNum} wishlistvalue={wishlistvalue} Cartvalue={Cartvalue}/> } />
        <Route path="Cart" element={ <Cart cartbox={cartbox} carthandler={carthandler} /> } />
        <Route path="Wishlist" element={ <Wishlist wishbox={wishbox} wishhandler={wishhandler} /> } />
      </Routes>
    </div>
  );
}

export default App;
