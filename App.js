import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement(heading) this is an object
//render(heading) - > converts to element

/**
 * header
 *    -LOGO
 *    -Nav Items
 * Body
 *   -Search Component
 *   -Restarunt Container
 *      - Restarunt card
 *          -Image
 *          -Name of Res,star Rating,cusine,delivery time,
 * Footer
 *   -copyright
 *   -Links
 *   -Address
 *   -contaact
 */

//jsx is html like HTML (NOT HTML)
//this jsx transpiled before going to render by parcel,
//with the help of BABEL

const Header=()=>{
  return(
    <div className="Header">
        <div className="Logo-container">
          <img className="logo" src="https://marketplace.canva.com/EAFpeiTrl4c/2/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-a1RYzvS1EFo.jpg" height={100} width={100} alt="logo"/>
        </div>
        <div className="NavItems">
          <ul>
            <li>Home</li>
            <li>About US</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
    </div>
  )
}

const objdata = [
  {
    id: "1688",
    name: "Chaitanya Food Court",
    cloudinaryImageId: "y4nzvmpofaplssjzpghf",
    locality: "Kukatpally",
    areaName: "Kukatpally",
    costForTwo: "₹600 for two",
    cuisines: ["Biryani", "Chinese", "Andhra", "North Indian"],
    avgRating: 4.5,
    parentId: "1865",
    avgRatingString: "4.5",
    totalRatingsString: "251K+",
    sla: {
      deliveryTime: 13,
      lastMileTravel: 1.1,
      serviceability: "SERVICEABLE",
      slaString: "10-15 mins",
      lastMileTravelString: "1.1 km",
      iconType: "ICON_TYPE_EMPTY",
    },
  },
  {
    id: "1689",
    name: "KFC",
    cloudinaryImageId: "y4nzvmpofaplssjzpghf",
    locality: "Kukatpally",
    areaName: "Kukatpally",
    costForTwo: "₹600 for two",
    cuisines: ["Biryani", "Chinese", "Andhra", "North Indian"],
    avgRating: 4.5,
    parentId: "1865",
    avgRatingString: "4.5",
    totalRatingsString: "251K+",
    sla: {
      deliveryTime: 13,
      lastMileTravel: 1.1,
      serviceability: "SERVICEABLE",
      slaString: "10-15 mins",
      lastMileTravelString: "1.1 km",
      iconType: "ICON_TYPE_EMPTY",
    },
  },
  {
    id: "1690",
    name: "NAWABS",
    cloudinaryImageId: "y4nzvmpofaplssjzpghf",
    locality: "Kukatpally",
    areaName: "Kukatpally",
    costForTwo: "₹600 for two",
    cuisines: ["Biryani", "Chinese", "Andhra", "North Indian"],
    avgRating: 4.5,
    parentId: "1865",
    avgRatingString: "4.5",
    totalRatingsString: "251K+",
    sla: {
      deliveryTime: 13,
      lastMileTravel: 1.1,
      serviceability: "SERVICEABLE",
      slaString: "10-15 mins",
      lastMileTravelString: "1.1 km",
      iconType: "ICON_TYPE_EMPTY",
    },
  },
  {
    id: "1691",
    name: "Paradise",
    cloudinaryImageId: "y4nzvmpofaplssjzpghf",
    locality: "Kukatpally",
    areaName: "Kukatpally",
    costForTwo: "₹600 for two",
    cuisines: ["Biryani", "Chinese", "Andhra", "North Indian"],
    avgRating: 4.5,
    parentId: "1865",
    avgRatingString: "4.5",
    totalRatingsString: "251K+",
    sla: {
      deliveryTime: 13,
      lastMileTravel: 1.1,
      serviceability: "SERVICEABLE",
      slaString: "10-15 mins",
      lastMileTravelString: "1.1 km",
      iconType: "ICON_TYPE_EMPTY",
    },
  },
];

const RestaruntCard = (props)=>{
  console.log(props)
  // const {objdata} = props;
  const { name, cuisines, avgRatingString } = props.data;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4CWNITFilpGyPFvghbyZKyGyaXi6bWzN5lg&s"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>5.8</h4>
    </div>
  );
}

const Body =()=>{
  return (
    <div className="Body">
      <div className="search">Search</div>
      <div className="resto-container">
        {/* <RestaruntCard data={objdata[0]} />
        <RestaruntCard data={objdata[1]} />
        <RestaruntCard data={objdata[2]} />
        <RestaruntCard data={objdata[3]} /> */}
        {objdata.map((item)=>(
          <RestaruntCard  key ={item.id}data= {item}/>
        ))}
        //for keys use id it is the best practice rather than index (id index)
      </div>
    </div>
  );
}

const AppLayout =() =>{
  return(
    <div className ="App">
       <Header/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
<AppLayout/>
<Body/>
  </>
);