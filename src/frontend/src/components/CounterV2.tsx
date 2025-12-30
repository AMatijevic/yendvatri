//State is lifted to parent component

type CounterProps = {
  children?: React.ReactNode,
  setCount: React.Dispatch<React.SetStateAction<number>>
}
const CounterV2 = ({children, setCount}: CounterProps) => {
  return (
    <>
      <div>CountV2: {children}</div>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
      <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>  
    </>
  )
}
export default CounterV2