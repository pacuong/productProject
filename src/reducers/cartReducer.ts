import { Action, CartState } from "@/types/cart";

export const cartReducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case "SET_CART":
      return { ...state, items: action.payload };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    default:
      return state;
  }
};
