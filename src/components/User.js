import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h1>Count = {count2}</h1>
      <h2>name: {props.name}</h2>
      <h3>Location: USA 🇺🇸</h3>
      <h4>Contact: 9999999999</h4>
    </div>
  );
};

export default User;
