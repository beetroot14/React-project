import React, {useState, useEffect} from 'react'

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000);

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  function addZero(num) {
    if (num <= 9) {
      return '0' + num;
    } else {
      return num;
    }
  }

  function formatTime() {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`
  }


  return (
    <div className='clock-container'>
      <div className='clock'>
        <span>{formatTime()}</span>
      </div>
      
    </div>
  );
}

export default DigitalClock;
