import React, { useState } from 'react'

export default function Photos({users}) {
    const [photos, setPhotos] = useState()

    // function handleClick() {
    //     const data = current.
    // }

    // this is just a practice

    return (
        <>
            <h2>This is a title</h2>
            <div>Hello everyone</div>
            <div className="users">
                {users.map((user) => (
                    <div className="user-children" key={user.id}>
                        <h3>{user.first_name} {user.last_name}</h3>
                        <img src={user.avatar}/>
                    </div>
                ))}
            </div>

        </>
    )
}

