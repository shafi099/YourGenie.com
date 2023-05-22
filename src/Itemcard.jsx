import wishlistblackicon from '../src/pics/wishlistblackicon.png';
import heartoutline from '../src/pics/heartoutline.png';
import { useRef, useState } from 'react';

const Itemcard = (props) => {
  const addtowishlistRef = useRef(null);
  const [addtowishlistValue, setAddToWishlistValue] = useState("add");
  const [Wishlistchangeval, setWishlistchangeval] = useState('heart-outline');

  const addtowishlistClickHandler = () => {
    if (addtowishlistValue === "add") {
      addtowishlistRef.current.src = wishlistblackicon;
      props.WishNum('add');
      setWishlistchangeval('heart-filled');
      setAddToWishlistValue("remove");
      props.wishhandler([props.itemname,props.itemprice,props.itemrating],'add');
    } else {
      addtowishlistRef.current.src = heartoutline;
      setAddToWishlistValue("add");
      setWishlistchangeval("heart-outline");
      props.WishNum('remove');
      props.wishhandler(props.itemname,'remove');
    }
  };

  const addtocartRef = useRef(null);
  const [addtocartValue, setAddToCartValue] = useState("add");
  const [Addtocartstyle, setAddtocartstyle] = useState('addtocart');

  const addtocartClickHandler = () => {
    if (addtocartValue === "add") {
      addtocartRef.current.innerText = "- remove";
      setAddToCartValue("remove");
      setAddtocartstyle('removefromcart');
      props.carthandler([props.itemname,props.itemprice,props.itemrating],'add');
      props.CartNum('add');
    } else {
      setAddToCartValue("add");
      setAddtocartstyle('addtocart');
      addtocartRef.current.innerText = "+ add to cart";
      props.CartNum('remove');
      props.carthandler(props.itemname,'remove');
    }
  };

  return (
    <>
      <div className="itembox">
        <span className='itemimgprotion'>
          <img src={props.itempic} alt="SamsungPic" className='itemimg' ></img>
        </span>
        <span className='itemname'>{props.itemname}</span>
        <span>
          <span className='itemsymbol'>₹</span>
          <span className='itemprice'>{props.itemprice}</span>
        </span>
        <span className='itemrating'>{props.itemrating}</span>
        <span className='buttonportion'>
          <button type="button" id={Addtocartstyle} ref={addtocartRef} onClick={addtocartClickHandler}>+ add to cart</button>
          <button className='outline-filled'>
            <img src={heartoutline} alt="wishlistblackicon" id={Wishlistchangeval} ref={addtowishlistRef} onClick={addtowishlistClickHandler} />
          </button>
        </span>
      </div>
    </>
  );
};

export default Itemcard;
