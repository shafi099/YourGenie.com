import React from 'react'

const Cartitemcard = (props) => {
  return (<>
            <div className='Cartbox'>
              <span className='itemname'>{props.name}</span>
              <span className='itemprice'>{props.price}/-</span>
              <span className='itemrating'>{props.rating}</span>
              <span className='buttonportion'>
          <button type="button" id='addtocart' onClick={()=>props.carthandler(props.name,'remove')}>Remove</button>
         
        </span>
            </div>
 </> )
}

export default Cartitemcard