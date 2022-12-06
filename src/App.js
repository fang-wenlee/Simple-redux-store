import "./styles.css";
import Counter from "./Counter";
import { useSelector } from "react-redux";

export default function App() {
  const count = useSelector((state) => state.counter.count);
  return (
    <div className="App">
      <h2>Total:{count}</h2>
      <Counter name="Fang" />
      <Counter name="Emily" />
    </div>
  );
}
