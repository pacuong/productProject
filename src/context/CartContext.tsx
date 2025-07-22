import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  ReactNode,
} from "react";
import {
  fetchCart,
  addNewCartItem,
  updateCartItem,
  deleteCartItem,
} from "@/server/cartService";
import { CartState, ProductProps } from "@/types/cart";
import { cartReducer } from "@/reducers/cartReducer";

const initialState: CartState = {
  items: [],
};

const CartContext = createContext<{
  state: CartState;
  addToCart: (product: ProductProps) => Promise<void>;
  increase: (id: string) => Promise<void>;
  decrease: (id: string) => Promise<void>;
  removeFromCart: (id: string) => Promise<void>;
  total: number;
}>({
  state: initialState,
  addToCart: async () => {},
  increase: async () => {},
  decrease: async () => {},
  removeFromCart: async () => {},
  total: 0,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const refreshCart = async () => {
    const data = await fetchCart();
    dispatch({ type: "SET_CART", payload: data });
  };

  useEffect(() => {
    refreshCart();
  }, []);

  const addToCart = async (product: ProductProps) => {
    const existing = state.items.find((item) => item.id === product.id);
    if (existing) {
      await updateCartItem(product.id, existing.quantity + 1);
    } else {
      await addNewCartItem(product);
    }
    refreshCart();
  };

  const increase = async (id: string) => {
    const item = state.items.find((i) => i.id === id);
    if (item) {
      await updateCartItem(id, item.quantity + 1);
      refreshCart();
    }
  };

  const decrease = async (id: string) => {
    const item = state.items.find((i) => i.id === id);
    if (item && item.quantity > 1) {
      await updateCartItem(id, item.quantity - 1);
      refreshCart();
    }
  };

  const removeFromCart = async (id: string) => {
    await deleteCartItem(id);
    refreshCart();
  };

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ state, addToCart, increase, decrease, removeFromCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
