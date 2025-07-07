import { useEffect } from "react"
import Card from "./card.jsx"

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
      {/* <Card person={{ name:"aflah",qualification:"bca"}}/>
      <Card person={{ name:"fasil",qualification:"bca"}}/> */}
      <Card>

        <h1>aflah</h1>
        <p>bca</p>
      </Card>
     </>
  
)

}

export default DashBoard