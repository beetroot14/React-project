import React, {useState, useEffect} from 'react'

function MyComponent() { 
  
  const [width, setWidth] = useState(window.innerWidth);
  const [hight, setHight] = useState(window.innerHeight);
  
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    console.log('eventListener');

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);


  useEffect(() => {
    document.title = `Size ${width} x ${hight}`
  }, [width, hight])
  


  function handleResize() {
    setWidth(window.innerWidth)
    setHight(window.innerHeight)
  }



  return <>
  <p>window width: {width}px</p>
  <p>window hight: {hight}px</p>
  </>
  
}

export default MyComponent;
