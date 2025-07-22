import { useStore } from "zustand";
import { useCounterStore } from "@/store";

const CountDisplay = () => {
  const count = useStore(useCounterStore, (state) => state.count);
  return <h1>Count: {count}</h1>;
};

export default CountDisplay;
