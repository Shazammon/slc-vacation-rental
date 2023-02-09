import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import Photos from './Photos';

function App() {
  
  const [ users, setUsers ] = useState()
  const ref = useRef(0)
  const url = 'https://reqres.in/api/users'

  const getUserData = async () => {
    const response = await fetch('https://reqres.in/api/users')
    const jsonData = await response.json()
    setUsers(jsonData.data)
  }

  const getUserDataTwo = async (url) => {
    const responseData = await fetch(url)
    const jsonDataTwo = await responseData.json()
    setUsers(jsonDataTwo.data)
  }

  useEffect(() => {
    // getUserDataTwo(url)
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
