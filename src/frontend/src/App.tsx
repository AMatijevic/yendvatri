import Counter from "./components/Counter"
import CounterV2 from "./components/CounterV2"
import Heading from "./components/Heading"
import List from "./components/List"
import { Section } from "./components/Section"
import { useState } from "react"



function App() {
  const [count, setCount] = useState<number>(1);
  return (
    <>
      <Heading title={"Welcome to My App"} />
      <Section title={"Introduction"}>
        This is the introduction section of the app.
      </Section>
      <Counter />
      <CounterV2 setCount={setCount}>
        Count is {count}
      </CounterV2>
      <List items={["Apple", "Banana", "Cherry"]} renderItem={(item) => <span>{item}</span>} />
    </>
  )
}

export default App
