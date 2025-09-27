import RestaruntCard from "./RestaruntCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from '../../utils/useOnlineStatus';

//never create useState outside of the component
//useState is used for creating local state variables inside the functional component
//better used when at the top
//and never create useState in if else block and inside for loop

const Body = () => {
//Local state variable -super Powerful variable

const [listofRest, setListOfRest] = useState([]);
const [filteredrest,setFilteredRest] = useState([]);
const [ searchtext,setSearchText] = useState("");

useEffect(()=>{
  console.log("useeffect called bro");
  fetchdata()
},[])

const fetchdata = async()=>{
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.519421662049204&lng=78.38479444384575&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
  );

  const json = await data.json();
  
  console.log(json.data.cards[3].card.card);
  //setListOfRest(json.data.cards[3].card.card.info);
    const restaurantCards =
      json?.data?.cards?.filter((card) => {
        return (
          card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        );
      }) || [];

    console.log("Filtered restaurant cards:", restaurantCards);
    
        const extractedRestaurants = restaurantCards.map((card) => {
          const restaurant = card.card.card.info;
          return {
            id: restaurant?.id || Math.random(),
            name: restaurant?.name || "Unknown Restaurant",
            avgRating: restaurant?.avgRating || "N/A",
            avgRatingString: restaurant?.avgRatingString || "N/A",
            totalRatingsString: restaurant?.totalRatingsString || "N/A",
            cuisines: restaurant?.cuisines || [],
            areaName: restaurant?.areaName || "Unknown Area",
            locality: restaurant?.locality || "Unknown Locality",
            costForTwo: restaurant?.costForTwo || "N/A",
            deliveryTime: restaurant?.sla?.deliveryTime || "N/A",
            deliveryTimeString: restaurant?.sla?.slaString || "N/A",
            distance: restaurant?.sla?.lastMileTravelString || "N/A",
            cloudinaryImageId: restaurant?.cloudinaryImageId || "",
            isPromoted: restaurant?.promoted || false,
            isOpen: restaurant?.isOpen || false,
            // Extract offers/discounts
            offers: restaurant?.aggregatedDiscountInfoV3
              ? `${restaurant.aggregatedDiscountInfoV3.header || ""} ${
                  restaurant.aggregatedDiscountInfoV3.subHeader || ""
                }`.trim()
              : "No offers",
            // Extract badges
            badges:
              restaurant?.badges?.imageBadges
                ?.map((badge) => badge.description)
                .join(", ") || "No badges",
          };
        });

        console.log("Extracted Restaurants:", extractedRestaurants);
        console.log(`Found ${extractedRestaurants.length} restaurants`);

        setListOfRest(extractedRestaurants);
        setFilteredRest(extractedRestaurants);
    

}

const onlinestatus = useOnlineStatus()
if (!onlinestatus){
  return<h1>You are in offline Bro</h1>
}
  //conditional Rendering

  return listofRest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchtext}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              //Filter the restarunt and update the UI
              //search Text
              const filtered = listofRest.filter((item) =>
                item.name.toLowerCase().includes(searchtext.toLowerCase())
              );

              setFilteredRest(filtered);

              // setListOfRest(filtered):setListOfRest(listofRest);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRest(
              listofRest.filter((item) => item.avgRatingString > 4)
            );
          }}
        >
          TOP RATED RESTARUNT
        </button>
      </div>
      <div className="resto-container">
        {filteredrest.map((item) => (
          <RestaruntCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Body;
