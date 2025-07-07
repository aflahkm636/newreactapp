import React from 'react';
import { useEffect } from "react"

function DashBoard(){
    useEffect(()=>{
        console.log("mounted");
          return()=>{
        console.log("unmounted");
    }  
    }
    ,[])
return (
    <>
      <Card person={{ name:"aflah",qualification:"bca"}}/>
      <Card person={{ name:"fasil",qualification:"bca"}}/>
 
    </>
  
)
}
function Card({person}){
    useEffect(()=>{
        console.log(" card mounted");
          return()=>{
        console.log(" card unmounted");
    }  
    }
    ,[])
return(
    <React.Fragment>
           <h2>{person.name}</h2>
           <h2>{person.qualification}</h2>
    </React.Fragment>
 
)
}
export default DashBoard