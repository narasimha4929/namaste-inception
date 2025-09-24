import { useState } from "react";

const Header = () => {
  const[login,setlogin] = useState(true);
  console.log("header rendered");
  return (
    <div className="Header">
      <div className="Logo-container">
        <img
          className="logo"
          src="https://marketplace.canva.com/EAFpeiTrl4c/2/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-a1RYzvS1EFo.jpg"
          height={100}
          width={100}
          alt="logo"
        />
      </div>
      <div className="NavItems">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact</li>
          <li>Cart</li>
          <button className="login" onClick={()=>{setlogin(!login)}}>
            {login?"Login":"Logout"}
            </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
