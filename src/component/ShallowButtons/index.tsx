import { useShallow } from "zustand/react/shallow";
import { useCounterStore } from "@/store";

const ShallowButtons = () => {
  const { increase, decrease, count } = useCounterStore(
    useShallow((state) => ({
      increase: state.increase,
      decrease: state.decrease,
      count: state.count,
    }))
  );

  return (
    <div className="mt-4 flex justify-center space-x-4">
      <button
        onClick={increase}
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-200 ease-in-out"
      >
        ➕ Tăng
      </button>
      <button
        onClick={decrease}
        disabled={count === 0}
        className={`${
          count === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-red-500 hover:bg-red-600"
        } text-white font-semibold py-2 px-4 rounded shadow-md transition duration-200 ease-in-out`}
      >
        ➖ Giảm
      </button>
    </div>
  );
};

export default ShallowButtons;
