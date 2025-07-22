import { CartItem } from "@/types/cart";
export const setCart = (items: CartItem[]) => ({
  type: "SET_CART" as const,
  payload: items,
});

export const removeItem = (id: string) => ({
  type: "REMOVE_ITEM" as const,
  payload: id,
});

export const updateQuantity = (id: string, quantity: number) => ({
  type: "UPDATE_QUANTITY" as const,
  payload: { id, quantity },
});
