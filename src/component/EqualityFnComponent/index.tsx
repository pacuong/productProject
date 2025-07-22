import { useStoreWithEqualityFn } from "zustand/traditional";
import { useCounterStore } from "@/store";

const EqualityFnComponent = () => {
  const count = useStoreWithEqualityFn(
    useCounterStore,
    (state) => state.count,
    Object.is
  );

  return <p>EqualityFn: {count}</p>;
};

export default EqualityFnComponent;
