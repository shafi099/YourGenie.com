import React, { useState, useEffect } from 'react';
import './App.css';


const Timer = () => {
  const [hours, setHours] = useState(23);
  const [mins, setMins] = useState(59);
  const [secs, setSecs] = useState(59);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecs((prevSecs) => {
        if (prevSecs === 0) {
          setMins((prevMins) => {
            if (prevMins === 0) {
              setHours((prevHours) => {
                if (prevHours === 0) {
                  clearInterval(intervalId);
                  return 0;
                }
                return prevHours - 1;
              });
              return 59;
            }
            return prevMins - 1;
          });
          return 59;
        }
        return prevSecs - 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
    <p className="offertext">Offer Ends in !!!</p>
    {/* <span className='whatruText'></span> */}
    <div className="timer">
      <span id="hours">{hours.toString().padStart(2, '0')}</span>Hours
      <span id="mins">{mins.toString().padStart(2, '0')}</span>Minutes
      <span id="seconds">{secs.toString().padStart(2, '0')}</span>Seconds
    </div>
 </> );
};

export default Timer;
