import React, { useEffect, useState } from 'react'

const useOnlineStatus = () => {
    //check online status 
    const [onlinestatus,setonlinestatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setonlinestatus(false);
        })
        window.addEventListener("online", () => {
        setonlinestatus(false);
        });
    },[])
  return onlinestatus;
}

export default useOnlineStatus;