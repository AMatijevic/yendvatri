import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(1);
  return (
    <>
      <div>Count: {count}</div>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
      <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>  
    </>
  )
}
export default Counter