import calculator from "../../add"; 

function Multiplication() {
  const result = calculator(10, 20, "*");

  return <p>Multiplication Result: {result}</p>;
}

export default Multiplication;