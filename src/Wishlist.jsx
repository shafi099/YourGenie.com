import React, { useState, useEffect } from 'react';
import Topnav from './topnav';
import Wishitemcard from './Wishitemcard'
// import Feedback from './Feedback';


const Wishlist = (props) => {

    const [amount, setAmount] = useState(0);
  
    useEffect(() => {
      let totalAmount = 0;
  
      if (props.wishbox.length > 0) {
        for (let i = 0; i < props.wishbox.length; i++) {
          props.wishbox[i][1]=props.wishbox[i][1].replace(',','')
          totalAmount += Number(props.wishbox[i][1]);
        }
      }
  
      setAmount(totalAmount);
    }, [props.wishbox]);
    const formattedAmount = amount.toLocaleString();
    return (
      <>
        <Topnav />
        <div className='totalamountportion'>
          <span className='amounttext'>Total Amount</span>
          <span className='amount'>₹{formattedAmount}/-</span>
        </div>
        <div className='cartportion'>
        {props.wishbox.map((item, index) => (
            <Wishitemcard name={item[0]} price={item[1]} rating={item[2]} wishhandler={props.wishhandler}/>))}
     </div>
     {/* <Feedback/> */}
      </>

    )
}

export default Wishlist;