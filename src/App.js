import './App.css';
import React, { useState, useRef } from 'react';
import Photos from './Photos';

function App() {
  
  const [ test, setTest ] = useState()
  const ref = useRef(0)

  fetch('https://reqres.in/api/users')
    .then(res => {
        return res.json()
    })
    .then(data => {
        setTest(data)
        console.log(data)})
  // setTest("hi")


  return (
    <>
      <Photos test={test} />
    </>
  );
}

export default App;
