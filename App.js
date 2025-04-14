// function Vani() {
//   const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14];

//   return (
//     <div>
//       {b.map((num, index) => {
//         let a = ""; 

//         if (index === 0) {
//              a= "th"; 
//         } else if (index === 1) {
//              a= "st"; 
//         } else if (index === 2) {
//              a= "nd"; 
//         } else if (index === 3) {
//              a= "rd"; 
//         } else {
//               a="th";
//         }
//         return<h2>{index}{a} position Value is {num}</h2>;
//       })}
//     </div>
//   );
// }
// export default Vani;
// function vani(){
//   const b="name 1, name 2, name 3";
//   const c=",";
//   const names=b.split(c);
//   let trimmedNames=names.map(a => a.trim());

//   console.log(trimmedNames);
    
//    console.log(names);
//   }

// export default vani;
// function app(){
//   const array=[64,60,55,76,38,50,72];
//   const a=array.find(vani);
//   function vani(value,index,array){
//     return value>60;
//   } 
//    console.log(a);

// }
// export default app;
// function app(){
//   const Marks=[64,60,55,76,38,50,72];
//   for(let i=0;i<Marks.length;i++){
//     if(Marks[i]>60){
//         console.log(Marks[i]);
//     }
//   }
// }
// export default app;
// function app(){
//   const Marks=[64,60,55,76,38,50,72];
//   const a=Marks.map((names) =>{
//      if(names>60){
//      console.log(names);
//      }
      
  // const a=Marks.filter(vani);
  // function vani(value,index,array){
  //   return value>60;
//   } )
  
// }
// // export default app;
//sort the marks and find the marks that is greater tham 60
// function app(){
//   const Marks=[64,60,55,76,38,50,72];
//   const sorted=Marks.sort();
//   const greater=sorted.find(mark => mark>60);
//   console.log(sorted);
//   console.log(greater);

// function app(){
// const string="hello all";
// const substr=string.slice(0,4);
// console.log(substr);
// }
// export default app;

// import Addition from "./Addition";
// import Multiplication from "./Multplication";
// import Subtraction from "./Subtraction";
// import Division from "./Division";
// function App() {
//   return (
//     <div>
//       <h1>Calculator Operations</h1>
//     </div>
//   );
// }
// export default App;
// import  "./App.css";
// import {useState} from "react";
// function App(){
//   const [name, setName] = useState(1);
//   const print1=()=>{
//     console.log("print1 is clicked");
//     setName(1);
//   }
//  const print2=()=>{
//     console.log("print2 is clicked");
//     setName(2);
//   }
//   return(
//     <div className="wrapper">
//     {
//       name===1 ? <p>Paragraph 1</p> : <p>Paragraph 2</p>
//     }
//     <button onClick={print1}>want to see 1</button>
//     <button onClick={print2}>want to see 2</button>
//     </div>
//   )
// }
// export default App;
// import React, { useState } from 'react';
// import Fullname from './component/Fullname';

// function App() {
//   const [firstName] = useState('Vani');
//   const [lastName] = useState('Nelakurthi');

//   return (
//     <div>
//      < Fullname firstName={firstName} lastName={lastName} />
//     </div>
//   );
// }
// export default App;
import React,{useState,useEffect} from react;
function app(){
const [city,setCity]=useState("Ongole");
if (city==="Ongole"){
  setCity("hyderabad")
}else{
  setCity("Banglore")
}
return(
  <div>
    <h>I Live in {city}</h>
  </div>
)
}
export default app;