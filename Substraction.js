import calculator from "../add"; 

function Substraction() {
  const result = calculator(10, 20, "-");

  return <p>Substraction Result: {result}</p>;
}

export default Substraction;