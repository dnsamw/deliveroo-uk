import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";
import useDebounce from "../../hooks/useDebounce";
import { MoonLoader, PuffLoader } from "react-spinners";

type Props = {
  handleSearch: (inputValue: string) => void;
  resultList?: any[];
};

function IconSearchBar({ handleSearch, resultList = [] }: Props) {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 800); // * miliseconds
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  // console.log("resultList", resultList);

  useEffect(() => {
    if (searchValue === "") return;
    handleSearch(searchValue);
  }, [debouncedSearchValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const resetSearchInput = () => {
    setSearchValue("");
    setIsFocused(false);
  };

  const renderSearchResults = (resultList: any[]) => {
    return (
      resultList?.length > 0 &&
      resultList?.map((item, index) => (
        <div
          className="border-b p-4 bg-white flex gap-2 hover:cursor-pointer hover:bg-gray-50"
          key={index}
        >
          <img className="w-20 h-20 rounded" src={item?.img} alt={item?.name} />
          <div className="flex">
          <div className="flex flex-col gap-1">
            <p className="text-md font-semibold">{item?.name}</p>
            <p className="text-sm text-gray-500">Orange, carrot, ginger & lemon juice and turmeric. - 1 litre: large enough to share!</p>
            <p className="text-sm">318 kcal</p>
            <p className="text-sm">$5-$10</p>
          </div>
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
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={searchValue}
        className="border rounded-md text-md px-4 py-2 pl-12 w-full"
        type="text"
        placeholder="Search Tossed - St Martin's Lane"
      />
      <div className="absolute w-full top-[45px] max-h-[70vh] shadow-lg bg-white flex flex-col overflow-y-scroll">
        {(isFocused && searchValue && resultList?.length === 0) && <div className="w-full flex justify-center py-4">
        <PuffLoader
         color={"#2dd4bf"}
         loading={true}
         size={60}
         aria-label="Loading Spinner"
         data-testid="loader"
        />
        </div>}
        {( resultList?.length > 0 /*&& isFocused && searchValue*/) && renderSearchResults(resultList)}
      </div>
    </div>
  );
}

export default IconSearchBar;
