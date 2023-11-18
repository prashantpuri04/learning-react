import {useState} from 'react';



const User = ({name}) => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(2);

    return (
        <div className="user-card">
            <h2>Count: {count}</h2>
            <h2>Count2: {count2}</h2>
            <h1>name: {name}</h1>
            <h2>location: Amritsar</h2>
            <h3>contact: 0000000000</h3>
        </div>
    )
}

export default User;