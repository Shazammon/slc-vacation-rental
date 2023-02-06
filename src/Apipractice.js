import fetch from "node-fetch"

fetch('https://reqres.in/api/users')
    .then(res => console.log(res))