import React, { useState, useEffect, useRef } from 'react';
import iphonecard from '../src/pics/iphonecard.jpg';
import hublotcard from '../src/pics/hublotcard.jpg';
import nikecardpic from '../src/pics/nikecardpic.jpg';
import ringcardpic from '../src/pics/ringcardpic.jpg';
import clothescardpic from '../src/pics/clothescardpic.jpg';

const cardImages = [hublotcard, nikecardpic, iphonecard, ringcardpic, clothescardpic];

const Scrollcard = () => {
  const [currentImage, setCurrentImage] = useState(cardImages[0]);
  const intervalIdRef = useRef(null);

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      let temp = cardImages.shift();
      cardImages.push(temp);
      setCurrentImage(cardImages[0]);
    }, 4000);

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, []);

  const next = () => {
    let temp = cardImages.shift();
    cardImages.push(temp);
    setCurrentImage(cardImages[0]);
  };

  const prev = () => {
    let k = cardImages.indexOf(currentImage);
    if (k === 0) {
      k = cardImages.length;
    } else {
      k--;
    }
    setCurrentImage(cardImages[k - 1]);
  };

  return (
    <>
      <div className='Scrollcardportion'>
        <img id='scroll-card-image' src={currentImage} alt='ccsrollcardpic' />
      </div>
      <div className='nextprev'>
        <button id='btnprev' onClick={prev}>{'< Prev'}</button>
        <button id='btnext' onClick={next}>{'Next >'}</button>
      </div>
    </>
  );
};

export default Scrollcard;
