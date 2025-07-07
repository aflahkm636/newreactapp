import React from 'react';
import { useEffect } from "react";

function Card({children}){
    useEffect(()=>{
        console.log(" card mounted");
          return()=>{
        console.log(" card unmounted");
    }  
    }
    ,[])
return(
    <React.Fragment>
           {/* <h2>{person.name}</h2>
           <h2>{person.qualification}</h2> */}
{children}
    </React.Fragment>
 
)
}
export default Card