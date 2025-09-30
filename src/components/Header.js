import { useEffect, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";
const Header = () => {
  const[login,setlogin] = useState(true);
  console.log("header rendered");
  const online = useOnlineStatus();


  //if no dependency array =>useEffect called on every render.
  //if the dependency array is empty useeffect called just once.
  //if theere is any value in the depedency array,it will render when the dependency value changes

  useEffect(()=>{
    console.log("useEffect called login");
  },[])

  return (
    <div className="flex">
      <div className="Logo-container">
        <img
          className="w-28"
          src="https://marketplace.canva.com/EAFpeiTrl4c/2/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-a1RYzvS1EFo.jpg"
          height={100}
          width={100}
          alt="logo"
        />
      </div>
      <div className="NavItems">
        <ul className="flex shadow-dark-400">
          <li>online status :{online ? "✅" : "❤️"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About US</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/restarunts/:resid">Menu</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              setlogin(!login);
            }}
          >
            {login ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
