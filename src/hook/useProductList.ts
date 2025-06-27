import { useEffect, useState } from "react";
import { fetcher } from "../server/getProduct";
import { ProductProps } from "./useCart";

export const useProductList = () => {
  const [productList, setProductList] = useState<ProductProps[]>([]);
  useEffect(() => {
    const getProductList = async () => {
      const data = await fetcher<ProductProps[]>(
        "http://localhost:3000/product"
      );
      setProductList(data);
    };
    getProductList();
  }, []);
  return { productList };
};
