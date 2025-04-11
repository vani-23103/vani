function App() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const position = 2;
    return (
      <div>
        {position} Position value : {numbers[position]}
      </div>
    );
}
export default App;