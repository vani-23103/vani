function Vani() {
    const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14];
  
    return (
      <div>
        {b.map((num, index) => {
          let a = ""; 
  
          if (index === 0) {
               a= "th"; 
          } else if (index === 1) {
               a= "st"; 
          } else if (index === 2) {
               a= "nd"; 
          } else if (index === 3) {
               a= "rd"; 
          }else{
               a="th"
          }
        
          return<h2>{index}{a} position Value is {num}</h2>;
        })}
      </div>
    );
}
