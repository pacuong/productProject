import SearchButton from "../Button";
import SearchInput from "../Input";
import { useState } from "react";
import MenuComponent from "../Menu";
import { CartItem } from "../../hook/useCart";

interface HeaderMainProps {
  cart: CartItem[];
  increase: (id: string) => void;
  decrease: (id: string) => void;
  removeFromCart: (id: string) => void;
  total: number;
}

const HeaderMain = ({
  cart,
  increase,
  decrease,
  removeFromCart,
  total,
}: HeaderMainProps) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e?: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e ? e.target.value : "");
  };

  const handleSearchValue = () => {
    handleSearch();
  };

  return (
    <div className="p-2 px-16 bg-blue-25">
      <div className="max-w-[1024] flex items-center justify-between p-4 px-8">
        <img
          className="w-16"
          src="../../../src/assets/img/adidas.avif"
          alt="Logo"
        />
        <div className="flex items-center gap-10">
          <ul className="flex text-lg text-white-25 gap-10">
            <li>Trang chủ</li>
            <li>Sản phẩm</li>
            <li>Liên Hệ</li>
          </ul>
          <div className="flex items-center gap-2 w-full max-w-60 rounded-xl">
            <SearchInput
              onChange={handleSearch}
              value={searchValue}
              placeholder="Tìm kiếm..."
              type="text"
            />
            <SearchButton onSearch={handleSearchValue} />
          </div>
          <MenuComponent
            products={cart}
            increase={increase}
            decrease={decrease}
            removeFromCart={removeFromCart}
            total={total}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
