import React from 'react';
import './App.css';
import Itemcard from './Itemcard';
import Banner from './Banner';
import Samsung1 from '../src/pics/Samsung1.png'
import iPhonepic from '../src/pics/iPhonepic.png'
import googlepixelpic from '../src/pics/googlepixelpic.png'
import onepluspic from '../src/pics/onepluspic.png'
import virtupic from '../src/pics/virtupic.png'
import samsungzfoldpic from '../src/pics/samsungzfoldpic.jpg'
import nothingphonepic from '../src/pics/nothingphonepic.png'
import shirtpic1 from '../src/pics/shirtpic1.png'
import shirtpic2 from '../src/pics/shirtpic2.png'
import shirtpic3 from '../src/pics/shirtpic3.png'
import jeanspic from '../src/pics/jeanspic.png'
import lambomobilepic from '../src/pics/lambomobilepic.jpg'
import shirtpic4 from '../src/pics/shirtpic4.jpg'
import womendresspic1 from '../src/pics/womendresspic1.jpg'
import womendresspic2 from '../src/pics/womendresspic2.jpg'
import womendresspic3 from '../src/pics/womendresspic3.jpg'
import womendresspic4 from '../src/pics/womendresspic4.jpg'
import womenwearbanner from '../src/pics/womenwearbanner.jpg'
import bluorngbanner from '../src/pics/bluorngbanner.jpg'
import laptopbanner from '../src/pics/laptopbanner.jpg'
import laptoppic1 from '../src/pics/laptoppic1.jpg';
import laptoppic2 from '../src/pics/laptoppic2.jpg';
import laptoppic3 from '../src/pics/laptoppic3.jpg'
import laptoppic4 from '../src/pics/laptoppic4.jpg'
import watchbanner from '../src/pics/watchbanner.jpeg'
import shoebanner from '../src/pics/shoebanner.jpg'
import shoe1 from '../src/pics/shoe1.jpg'
import shoe2 from '../src/pics/shoe2.jpg'
import shoe3 from '../src/pics/shoe3.jpg'
import shoe4 from '../src/pics/shoe4.jpg'
import watchpic1 from '../src/pics/watchpic1.jpg';
import watchpic2 from '../src/pics/watchpic2.jpg'
import watchpic3 from '../src/pics/watchpic3.jpg'
import watchpic4 from '../src/pics/watchpic4.jpg'
import watchpic5 from '../src/pics/watchpic5.jpg'

const Homeitems = (props) => {

    return (
        <>
            <p className="whatruText" id="watch">Accesories for Men & Women</p>
            <Banner img={watchbanner}></Banner>
            <div className='itemdisplayportion'>
                <Itemcard carthandler={props.carthandler} wishhandler={props.wishhandler} itemname="RADO Premium Black & Gold" itemprice="58,999" itemrating="Black | 14K GOLD" itempic={watchpic1} CartNum={props.CartNum} WishNum ={props.WishNum}  />
                <Itemcard carthandler={props.carthandler} wishhandler={props.wishhandler} itemname="Tissot PRS516" itemprice="20,799" itemrating="Black Leather" itempic={watchpic2} CartNum={props.CartNum} WishNum ={props.WishNum}  />
                <Itemcard carthandler={props.carthandler} wishhandler={props.wishhandler} itemname="Gucci Luxury Handbag" itemprice="89,999" itemrating="Onion Pink Color" itempic={watchpic3} CartNum={props.CartNum} WishNum ={props.WishNum}  />
                <Itemcard carthandler={props.carthandler} wishhandler={props.wishhandler} itemname="Chanel Leather Handbag" itemprice="55,799" itemrating="Brown Leather" itempic={watchpic4} CartNum={props.CartNum} WishNum ={props.WishNum}  />
                <Itemcard carthandler={props.carthandler} wishhandler={props.wishhandler} itemname="Men Accessories Hand Barcelets" itemprice="399" itemrating="Black Leather" itempic={watchpic5} CartNum={props.CartNum} WishNum ={props.WishNum}  />
               </div>
            <p className="whatruText" id="shoes">Latest Collections on Shoes</p> 
            <Banner img={shoebanner}></Banner>
            <div className='itemdisplayportion'>
                <Itemcard carthandler={props.carthandler} wishhandler={props.wishhandler}itemname="WoodLand Hiking Shoes" itemprice="9,999" itemrating="Brown & Black Color" itempic={shoe1} CartNum={props.CartNum} WishNum ={props.WishNum}  />
                <Itemcard carthandler={props.carthandler} wishhandler={props.wishhandler}itemname="Sparx Pink Shoes Women" itemprice="1,199" itemrating="Pink & White Color" itempic={shoe2} CartNum={props.CartNum} WishNum ={props.WishNum}  />
                <Itemcard carthandler={props.carthandler} wishhandler={props.wishhandler}itemname="Embroided Women Shoes" itemprice="6,299" itemrating="Pink & Black Color" itempic={shoe3} CartNum={props.CartNum} WishNum ={props.WishNum}  />
                <Itemcard carthandler={props.carthandler} wishhandler={props.wishhandler}itemname="Nike Air Jordan" itemprice="16,000" itemrating="Red,Black & White" itempic={shoe4} CartNum={props.CartNum} WishNum ={props.WishNum}  />
            </div>
            <p className="whatruText" id="women">Women's Wear, New collections</p>
            <Banner img={womenwearbanner} />
            <div className='itemdisplayportion'>
                <Itemcard carthandler={props.carthandler} wishhandler={props.wishhandler}itemname="Cotton Red Saree" itemprice="2,699" itemrating="XL" itempic={womendresspic4} CartNum={props.CartNum} WishNum ={props.WishNum}  />
                <Itemcard carthandler={props.carthandler} wishhandler={props.wishhandler}itemname="Floral Design Skirt" itemprice="2,674" itemrating="M | L | XL" itempic={womendresspic1} CartNum={props.CartNum} WishNum ={props.WishNum}  />
                <Itemcard carthandler={props.carthandler} wishhandler={props.wishhandler}itemname="Red Dress Casual Wear" itemprice="999" itemrating="M | L | XL" itempic={womendresspic2} CartNum={props.CartNum} WishNum ={props.WishNum}  />
                <Itemcard carthandler={props.carthandler} wishhandler={props.wishhandler}itemname="Wedding Dress Red Color Diamond Design" itemprice="14,999" itemrating="XL" itempic={womendresspic3} CartNum={props.CartNum} WishNum ={props.WishNum}  />
            </div>
            <p className="whatruText">Hot Deals on Mobiles !</p>
            <div className='itemdisplayportion' id="mobile">
                <Itemcard carthandler={props.carthandler} wishhandler={props.wishhandler}itemname="Samsung S23 Ultra" itemprice="93,000" itemrating="12GB RAM/256GB ROM" itempic={Samsung1} CartNum={props.CartNum} WishNum ={props.WishNum}  />
                <Itemcard carthandler={props.carthandler} wishhandler={props.wishhandler}itemname="iPhone 14 Pro" itemprice="1,20,999" itemrating="8GB RAM/512GB ROM" itempic={iPhonepic} CartNum={props.CartNum} WishNum ={props.WishNum}  />
                <Itemcard carthandler={props.carthandler} wishhandler={props.wishhandler}itemname="Google Pixel 7 Pro" itemprice="45,000" itemrating="8GB RAM/128GB ROM" itempic={googlepixelpic} CartNum={props.CartNum} WishNum ={props.WishNum}  />
                <Itemcard carthandler={props.carthandler} wishhandler={props.wishhandler}itemname="One Plus 11" itemprice="66,799" itemrating="12GB RAM/256GB ROM" itempic={onepluspic} CartNum={props.CartNum} WishNum ={props.WishNum}  />
                <Itemcard carthandler={props.carthandler} wishhandler={props.wishhandler}itemname="Virtu Luxury Version" itemprice="1,99,999" itemrating="512 RAM/8GB ROM" itempic={virtupic} CartNum={props.CartNum} WishNum ={props.WishNum}  />
                <Itemcard carthandler={props.carthandler} wishhandler={props.wishhandler}itemname="Samsung Z Fold" itemprice="77,777" itemrating="12GB RAM/256GB ROM" itempic={samsungzfoldpic} CartNum={props.CartNum} WishNum ={props.WishNum}  />
                <Itemcard carthandler={props.carthandler} wishhandler={props.wishhandler}itemname="Nothing 1" itemprice="27,999" itemrating="12GB RAM/218GB ROM" itempic={nothingphonepic} CartNum={props.CartNum} WishNum ={props.WishNum}  />
                <Itemcard carthandler={props.carthandler} wishhandler={props.wishhandler}itemname="Lamborgini Mobile" itemprice="1,69,999" itemrating="6GB RAM/64GB ROM" itempic={lambomobilepic} CartNum={props.CartNum} WishNum ={props.WishNum}  />
            </div>
            <p className="whatruText" id="clothes">Men's Summer Collection, Grab Now!</p>
            <Banner img={bluorngbanner} />
            <div className='itemdisplayportion'>
                <Itemcard carthandler={props.carthandler} wishhandler={props.wishhandler}itemname="Indian Garage Violet Color Shirt" itemprice="1,999" itemrating="M | L | XL" itempic={shirtpic1} CartNum={props.CartNum} WishNum ={props.WishNum}  />
                <Itemcard carthandler={props.carthandler} wishhandler={props.wishhandler}itemname="Indian Garage Green Blue Checks Shirt" itemprice="2,399" itemrating="M | L | XL" itempic={shirtpic2} CartNum={props.CartNum} WishNum ={props.WishNum}  />
                <Itemcard carthandler={props.carthandler} wishhandler={props.wishhandler}itemname="Yellow Kurtha Festival Shirt" itemprice="4,999" itemrating="M | L | XL | XXL" itempic={shirtpic3} CartNum={props.CartNum} WishNum ={props.WishNum}  />
                <Itemcard carthandler={props.carthandler} wishhandler={props.wishhandler}itemname="Denim Sky Blue Jeans" itemprice="1,299" itemrating="S | M | L | XL" itempic={jeanspic} CartNum={props.CartNum} WishNum ={props.WishNum}  />
                <Itemcard carthandler={props.carthandler} wishhandler={props.wishhandler}itemname="Blurong Tiger T-Shirt" itemprice="3,699" itemrating="S | M | L | XL | XXL" itempic={shirtpic4} CartNum={props.CartNum} WishNum ={props.WishNum}  />
            </div>


            <p className="whatruText" id="laptop">Grab your Dream Laptop !</p>
            <Banner img={laptopbanner}></Banner>
            <div className='itemdisplayportion'>
                <Itemcard carthandler={props.carthandler} wishhandler={props.wishhandler}itemname="MacBook Air 2" itemprice="1,10,999" itemrating="16GB RAM | 512GB SSD" itempic={laptoppic3} CartNum={props.CartNum} WishNum ={props.WishNum}  />
                <Itemcard carthandler={props.carthandler} wishhandler={props.wishhandler}itemname="Samsung Galaxy Notebook 3" itemprice="1,19,999" itemrating="16GB RAM | 1TB SSD" itempic={laptoppic1} CartNum={props.CartNum} WishNum ={props.WishNum}  />
                <Itemcard carthandler={props.carthandler} wishhandler={props.wishhandler}itemname="HP Pavilivion X Series" itemprice="79,299" itemrating="16GB RAM | 512GB SSD" itempic={laptoppic2} CartNum={props.CartNum} WishNum ={props.WishNum}  />
                <Itemcard carthandler={props.carthandler} wishhandler={props.wishhandler}itemname="Dell Inspiron 3520" itemprice="65,299" itemrating="8GB RAM | 512GB SSD" itempic={laptoppic4} CartNum={props.CartNum} WishNum ={props.WishNum}  />
            </div>


        </>
    )
}

export default Homeitems;