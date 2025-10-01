import { useEffect, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
  const [login, setlogin] = useState(true);
  console.log("header rendered");
  const online = useOnlineStatus();

  //if no dependency array =>useEffect called on every render.
  //if the dependency array is empty useeffect called just once.
  //if there is any value in the dependency array,it will render when the dependency value changes

  useEffect(() => {
    console.log("useEffect called login");
  }, []);

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <div className="flex items-center">
        <img
          className="w-28 h-28 rounded-lg object-cover"
          src="https://marketplace.canva.com/EAFpeiTrl4c/2/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-a1RYzvS1EFo.jpg"
          alt="logo"
        />
      </div>
      <div className="flex-1 flex justify-end">
        <ul className="flex items-center gap-8 text-lg font-medium">
          <li className="flex items-center gap-2">
            <span className="text-gray-600">Online:</span>
            <span>{online ? "✅" : "❤️"}</span>
          </li>
          <li className="hover:text-orange-500 transition-colors cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-orange-500 transition-colors cursor-pointer">
            <Link to="/about">About Us</Link>
          </li>
          <li className="hover:text-orange-500 transition-colors cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-orange-500 transition-colors cursor-pointer">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="hover:text-orange-500 transition-colors cursor-pointer">
            <Link to="/restarunts/:resid">Menu</Link>
          </li>
          <button
            className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-semibold"
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
