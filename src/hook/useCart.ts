// import { useState, useEffect, useCallback, useMemo } from "react";
// import {
//   fetchCart,
//   addNewCartItem,
//   updateCartItem,
//   deleteCartItem,
// } from "../server/cartService";

// export interface ProductProps {
//   id: string;
//   name: string;
//   price: number;
//   titleProduct: string;
//   image: string;
// }

// export type CartItem = ProductProps & { quantity: number };

// export const useCart = () => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   useEffect(() => {
//     refreshCart();
//   }, []);

//   const refreshCart = async () => {
//     const data = await fetchCart();
//     setCartItems(data);
//   };

//   const addToCart = useCallback(
//     async (product: ProductProps) => {
//       const existing = cartItems.find((item) => item.id === product.id);
//       if (existing) {
//         await updateCartItem(product.id, existing.quantity + 1);
//       } else {
//         await addNewCartItem(product);
//       }
//       refreshCart();
//     },
//     [cartItems]
//   );

//   const increase = useCallback(
//     async (id: string) => {
//       const item = cartItems.find((i) => i.id === id);
//       if (item) {
//         await updateCartItem(id, item.quantity + 1);
//         refreshCart();
//       }
//     },
//     [cartItems]
//   );

//   const decrease = useCallback(
//     async (id: string) => {
//       const item = cartItems.find((i) => i.id === id);
//       if (item && item.quantity > 1) {
//         await updateCartItem(id, item.quantity - 1);
//         refreshCart();
//       }
//     },
//     [cartItems]
//   );

//   const removeFromCart = useCallback(async (id: string) => {
//     await deleteCartItem(id);
//     refreshCart();
//   }, []);

//   const total = useMemo(() => {
//     return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   }, [cartItems]);

//   return {
//     cartItems,
//     addToCart,
//     removeFromCart,
//     increase,
//     decrease,
//     total,
//   };
// };
