import wishlistblackicon from '../src/pics/wishlistblackicon.png'
import heartoutline from '../src/pics/heartoutline.png'
import { useRef, useState } from 'react';

const Itemcard = (props) => {
    const addtowishlistRef = useRef(null);
    const [addtowishlistValue, setAddToWishlistValue] = useState("add");
    const [Wishlistchangeval, setWishlistchangeval] = useState('heart-outline')
    
    // let cartbox=[]

    const addtowishlistClickHandler = () => {
        if (addtowishlistValue === "add") {
            addtowishlistRef.current.src = wishlistblackicon;
            increwishlistclick();
            setWishlistchangeval('heart-filled');
            setAddToWishlistValue("remove");
        }
        else {
            addtowishlistRef.current.src = heartoutline;
            setAddToWishlistValue("add");
            setWishlistchangeval("heart-outline");
            decrewishlistclick();
        }
    }

    const addtocartRef = useRef(null);
    const [addtocartValue, setAddToCartValue] = useState("add");
    const [Addtocartstyle, setAddtocartstyle] = useState('addtocart')
    const addtocartClickHandler = () => {
        if (addtocartValue === "add") {
            addtocartRef.current.innerText = "- remove";
            setAddToCartValue("remove");
            setAddtocartstyle('removefromcart');
            const cartitems=[props.itemname,props.itemprice,props.itemrating]
            // const x=`<Itemcard itemname='${props.itemname}' itemprice='${props.itemprice}' itemrating='${props.itemrating}' />`
            // console.log()
            increcartClick(cartitems);
            cartpass(cartitems,'add')

        }
        else {

            setAddToCartValue("add");
            setAddtocartstyle('addtocart')
            decreClick();
            addtocartRef.current.innerText = "+ add to cart";
            const cartitems=props.itemname;
            cartpass(cartitems,'remove')
        }
    }

    const cartpass = (cartitems,add_or_remove) => props.carthandler(cartitems,add_or_remove);
    const increcartClick = (cartitems) => props.increcart;
    const decreClick = () => props.decrecart();
    const increwishlistclick = () => props.increwishlist();
    const decrewishlistclick = () => props.decrewishlist();



    return (<>
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
    </>);
}

export default Itemcard;
