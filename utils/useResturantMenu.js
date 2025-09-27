import React, { useState } from 'react'
import { useEffect } from 'react'
const useResturantMenu = (resid) => {

    const[resinfo,setresInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async()=>{
        const data = await fetch(`https://dummyjson.com/recipes/${resid}`);
        const json = await data.json();
        setresInfo(json);
    }

  return resinfo;
}

export default useResturantMenu;