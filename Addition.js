import calculator from "../../add"; 

function Addition() {
  const result = calculator(10, 20, "+");

  return <p>Addition Result: {result}</p>;
}

export default Addition;