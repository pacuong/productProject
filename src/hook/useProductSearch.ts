import { ProductProps } from "@/types/cart";
import { useState } from "react";

export const useProductSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [product, setProduct] = useState<ProductProps[]>([]);

  const handleSearch = (e?: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e ? e.target.value : "");
  };

  const handleSearchValue = async () => {
    if (!searchValue.trim()) return;

    try {
      const response = await fetch(
        `http://localhost:3000/product?name=${searchValue}`
      );
      const data = await response.json();
      console.log("Kết quả tìm được:", data);
      setProduct(data);
    } catch (error) {
      console.error("Lỗi khi tìm kiếm:", error);
    }
  };

  return {
    searchValue,
    setSearchValue,
    product,
    handleSearch,
    handleSearchValue,
  };
};
