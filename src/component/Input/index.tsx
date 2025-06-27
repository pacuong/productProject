
interface InputSearchProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  type: string;
}

const SearchInput = ({ onChange, value, placeholder, type }: InputSearchProps) => {

  return (
    <input
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      value={value}
      className="p-2 text-blue-25 bg-transparent outline-none rounded-xl placeholder-gray-400"
    />
  );
};

export default SearchInput;
