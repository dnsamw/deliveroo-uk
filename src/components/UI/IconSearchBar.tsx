import React, { useEffect, useState } from "react";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";
import useDebounce from "../../hooks/useDebounce";

type Props = {
  handleSearch: (inputValue: string) => void;
  resultList?: any[];
};

function IconSearchBar({ handleSearch, resultList = [] }: Props) {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 800); // * miliseconds

  console.log("resultList", resultList);

  useEffect(() => {
    if (searchValue === "") return;
    handleSearch(searchValue);
  }, [debouncedSearchValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const resetSearchInput = () => {
    setSearchValue("");
  };

  const renderSearchResults = (resultList: any[]) => {
    return (
      resultList?.length > 0 &&
      resultList?.map((item, index) => (
        <div
          className="border rounded p-4 bg-white flex gap-2 hover:cursor-pointer hover:bg-teal-50"
          key={index}
        >
          <img className="w-16 h-16 rounded" src={item?.img} alt={item?.name} />
          <div>
            <p className="text-md font-semibold">{item?.name}</p>
            <p className="text-sm">Sample Text</p>
            <p className="text-sm">$5-$10</p>
          </div>
        </div>
      ))
    );
  };

  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <IoSearchOutline className="text-2xl text-gray-400" />
      </span>
      <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
        {searchValue && (
          <IoCloseOutline
            onClick={resetSearchInput}
            className="text-3xl text-gray-400 hidden lg:block"
          />
        )}
      </span>
      <input
        onChange={handleChange}
        value={searchValue}
        className="border rounded-md text-md px-4 py-2 pl-12 w-full"
        type="text"
        placeholder="Search Tossed - St Martin's Lane"
      />
      <div className="absolute w-full top-12 h-50 bg-gray-50 flex flex-col gap-2 p-2 rounded">
        {(searchValue && resultList?.length > 0) && renderSearchResults(resultList)}
      </div>
    </div>
  );
}

export default IconSearchBar;
