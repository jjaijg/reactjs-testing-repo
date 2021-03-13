const Counter = ({ counter, increment, decrement }) => {
  return (
    <div>
      <button onClick={decrement}>-</button>
      {counter}
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
