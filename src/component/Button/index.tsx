import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

interface ButtonSearchProps {
  onSearch: () => void;
  name?: string;
}

const SearchButton = ({ name, onSearch }: ButtonSearchProps) => {
  return (
    <button
      onClick={onSearch}
      className="focus:outline-none p-2 hover:bg-green-100 rounded-full transition-colors duration-200"
    >
      {name}
      <MagnifyingGlassCircleIcon className="w-6 h-6 text-blue-25 hover:text-blue-100" />
    </button>
  );
};

export default SearchButton;
