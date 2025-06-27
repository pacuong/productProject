import { CartItem, ProductProps } from "../hook/useCart";

const CART_API = "http://localhost:3000/cart";

export const addToCart = async (product: ProductProps) => {
  const res = await fetch(`${CART_API}?id=${product.id}`);
  const existing = await res.json();

  if (existing.length > 0) {
    const item = existing[0];
    await fetch(`${CART_API}/${item.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: item.quantity + 1 }),
    });
  } else {
    await fetch(CART_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...product, quantity: 1 }),
    });
  }
};

export const getCart = async (): Promise<CartItem[]> => {
  const res = await fetch(CART_API);
  return res.json();
};
