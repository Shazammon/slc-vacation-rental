import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import Photos from './Photos';

function App() {
  
  const [ users, setUsers ] = useState()
  const ref = useRef(0)

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => {
          return res.json()
      })
      .then(data => {
          setUsers(data.data)
          console.log(data)})
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          console.log(err.message)
        }
      })

  }, [])
  // setTest("hi")


  return (
    <>
      {users && <Photos users={users} />}
      {/* {test && <Photos test={test} />} */}
    </>
  );
}

export default App;
