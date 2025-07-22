export interface ProductProps {
  id: string;
  name: string;
  price: number;
  titleProduct: string;
  image: string;
}

export type CartItem = ProductProps & {
  quantity: number;
};


export type CartState = {
  items: CartItem[];
};

export type Action =
  | { type: "SET_CART"; payload: CartItem[] }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } };
