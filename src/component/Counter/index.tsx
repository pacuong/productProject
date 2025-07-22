import CountDisplay from "../CountDisplay";
import EqualityFnComponent from "../EqualityFnComponent";
import ShallowButtons from "../ShallowButtons";

const Counter = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-[300px] text-center border border-purple-300 animate-fade-in">
        <h2 className="text-2xl font-bold mb-4 text-purple-600">
          Zustand Counter
        </h2>
        <CountDisplay />
        <EqualityFnComponent />
        <ShallowButtons />
      </div>
    </div>
  );
};

export default Counter;
