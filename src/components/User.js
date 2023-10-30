import { useState } from "react";

const User=(props)=>{
    const [count] = useState(0);
    const [count2] = useState(1);
    return (
    <div className ="user-card">
        <h2>Name:{props.name}</h2>
        <h1>count ={count}</h1>
        <h1>count2 ={count2}</h1>
        <h3>Location:Bangalore</h3>
        <h4>Contact:xyz@gmail</h4>
    </div>
    );
};
export default User;