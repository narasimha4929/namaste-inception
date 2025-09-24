import RestaruntCard from "./RestaruntCard";

import { useState } from "react";

import objdata from "../../utils/mockdata";

let objdata1 = objdata;

const Body = () => {
//Local state variable -super Powerful variable

const [listofRest, setListOfRest] = useState(objdata);

  return (
    <div className="Body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
          setListOfRest(objdata.filter((item) => item.avgRatingString > 4));
        }
        }>TOP RATED RESTARUNT</button>
        </div>
      <div className="resto-container">
        {listofRest.map((item) => (
          <RestaruntCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
