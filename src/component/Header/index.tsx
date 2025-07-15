import SearchButton from "@/component/Button/";
import SearchInput from "@/component/Input";
import MenuComponent from "@/component/MenuComponent";
import { useState } from "react";

const HeaderMain = () => {
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
        <nav className="flex items-center gap-10">
          <ul className="flex text-lg text-white-25 gap-10">
            <li>
              <a href="#1">Trang chủ</a>
            </li>
            <li>
              <a href="#2">Sản phẩm</a>
            </li>
            <li>
              <a href="#3">Liên Hệ</a>
            </li>
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
          <MenuComponent />
        </nav>
      </div>
    </div>
  );
};

export default HeaderMain;
