import { useState } from "react"

function App() {
const [user,setUser]=useState({
   name:"aflah",
qualification:"bca"
});
const onUpdate=()=>{
  setUser((x)=>(user2))

;
const user2={
   name:"fasil",
qualification:"bcom"
};
}


  return (
    <div className="App">
    <UserCard user={user} onUpdate={onUpdate}/>

    </div>
  );


function UserCard({user,onUpdate}){
return(
    <div>  
  <h2>{user.name}</h2>
    <h2>{user.qualification}</h2>
    <button onClick={onUpdate}>update</button>
    </div>
 
)

}

}

export default App;
