import { ProductProps } from "@/types/cart";


const API_URL = "http://localhost:3000/cart";

export const fetchCart = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const addNewCartItem = async (product: ProductProps) => {
  return await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...product, quantity: 1 }),
  });
};

export const updateCartItem = async (id: string, quantity: number) => {
  return await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quantity }),
  });
};

export const deleteCartItem = async (id: string) => {
  return await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};
