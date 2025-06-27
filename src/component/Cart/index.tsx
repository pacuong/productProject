import { ShoppingCartIcon } from "@heroicons/react/24/outline";

interface CartProps {
  amount: number;
}

const Cart = ({ amount }: CartProps) => {
  return (
    <button className="absolute focus:outline-none border-none p-2 rounded-full cursor-pointer bg-yellow-golden hover:bg-green-100 transition-colors duration-200 ">
      <ShoppingCartIcon className="w-6 h-6 text-white-100" />  
      {amount > 0 && (
        <span className="absolute -top-3 -right-3 text-white text-xs rounded-full w-7 h-7 bg-primary-red">
          {amount}
        </span>
      )}
    </button>
  );
};

export default Cart;
