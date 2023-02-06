import './App.css';
import React, { useState, useRef } from 'react';
import Photos from './Photos';

function App() {
  const ref = useRef(0)

  const [ test, setTest ] = useState()
  setTest("hi")

  return (
    <>
      <Photos test={test} />
    </>
  );
}

export default App;
