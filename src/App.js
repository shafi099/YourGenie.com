import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from './Home'
import Wishlist from './Wishlist'
import Cart from './cart'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="Cart" element={ <Cart/> } />
        <Route path="Wishlist" element={ <Wishlist/> } />
      </Routes>
    </div>
  );
}

export default App;
