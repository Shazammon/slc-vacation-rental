import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import Photos from './Photos';

function App() {
  
  const [ test, setTest ] = useState()
  const ref = useRef(0)

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => {
          return res.json()
      })
      .then(data => {
          setTest(data)
          console.log(data)})

  }, [])
  // setTest("hi")


  return (
    <>
      <Photos test={test} />
      {/* {test && <Photos test={test} />} */}
    </>
  );
}

export default App;
