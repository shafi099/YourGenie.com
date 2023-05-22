import React, { useState, useEffect } from 'react';
import Topnav from './topnav';
// import Feedback from './Feedback';
import Cartitemcard from './Cartitemcard'

  const Cart = (props) => {
    const [amount, setAmount] = useState(0);
  
    useEffect(() => {
      let totalAmount = 0;
  
      if (props.cartbox.length > 0) {
        for (let i = 0; i < props.cartbox.length; i++) {
          props.cartbox[i][1]=props.cartbox[i][1].replace(',','')
          totalAmount += Number(props.cartbox[i][1]);
        }
      }
  
      setAmount(totalAmount);
    }, [props.cartbox]);
    const formattedAmount = amount.toLocaleString();
    return (
      <>
        <Topnav />
        <div className='totalamountportion'>
          <span className='amounttext'>Total Amount</span>
          <span className='amount'>₹{formattedAmount}/-</span>
        </div>
        <div className='cartportion'>
        {props.cartbox.map((item, index) => (
            <Cartitemcard name={item[0]} price={item[1]} rating={item[2]} carthandler={props.carthandler}/>))}
     </div>
     {/* <Feedback /> */}
      </>
    );
  };
  
  export default Cart;
  