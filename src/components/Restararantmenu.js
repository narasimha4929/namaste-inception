import React from 'react';
import { useEffect } from 'react';

const Restararantmenu = () => {
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async()=>{
            const data = await fetch(
              "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.48869355442385&lng=78.38792726397514&collection=80464&tags=layout_BAU_Contextual%2Cnoodles&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
            );
            const json = await data.json();
            console.log(data);
                return(<></>)
    }
  return (
    <div className='menu'>
        <h1>Name of the Restaurant</h1>
        <h2>Menu</h2>
        <ul>
            <li>Biryani</li>
            <li>Burgers</li>
            <li>Diet Coke</li>
        </ul>
        </div>
  )
}

export default Restararantmenu