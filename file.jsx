import React,{useState,useEffect} from react;
function app(){
const StateMgm=()=>{
const [city,setCity]=useState("Ongole");
useEffect(()=>{
if (city==="Ongole"){
  setCity("hyderabad")
}else{
  setCity("Banglore")
}
},[])
return(
  <div>
    <h>I Live in {city}</h>
  </div>
)
}
}
export default app;