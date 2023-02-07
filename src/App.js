import './App.css';
import React, { useState, useRef } from 'react';
import Photos from './Photos';

function App() {
  
  const [ test, setTest ] = useState()
  const ref = useRef(0)
  // setTest("hi")

  return (
    <>
      <Photos test={test} />
    </>
  );
}

export default App;
