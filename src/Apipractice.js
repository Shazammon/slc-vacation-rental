import fetch from "node-fetch"

// fetch('https://reqres.in/api/users')
//     .then(res => {
//         return res.json()
//     })
//     .then(data => {
//         setBlogs(data)
//         console.log(data)})

fetch('https://reqres.in/api/users')
    .then(res => {
        console.log(res)
    })