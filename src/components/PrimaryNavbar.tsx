import React, { useState } from "react";
import brandIcon from "./UI/SVGIcons/logo-teal.svg";
import { IconButtonTypes, siteMaterData } from "../Config";
import IconButton from "./UI/IconButton";
import IconSearchBar from "./UI/IconSearchBar";
import useUIMeasurements from "../hooks/useUIMeasurements";
import MobileSearchModal from "./modals/MobileSearchModal";

type Props = {};

const foodMenus = [
  {name:"Breakfast Menu at Cafe",img:"https://placehold.co/100x100/c0192b/ffff/png"},
  {name:"Lunch Menu at Cafe",img:"https://placehold.co/100x100/c0192b/ffff/png"},
  {name:"Dinner Menu at Cafe",img:"https://placehold.co/100x100/c0192b/ffff/png"},
  {name:"Dessert Menu at Cafe",img:"https://placehold.co/100x100/c0192b/ffff/png"},
  {name:"Drinks Menu at Cafe",img:"https://placehold.co/100x100/c0192b/ffff/png"},
  {name:"Coffee Menu at Cafe",img:"https://placehold.co/100x100/c0192b/ffff/png"},
  {name:"Tea Menu at Cafe",img:"https://placehold.co/100x100/c0192b/ffff/png"},
  {name:"Other Menu at Cafe",img:"https://placehold.co/100x100/c0192b/ffff/png"},
];

function PrimaryNavbar({}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { offsetWidth } = useUIMeasurements();
  
  const [searchResutList, setSearchResultList] = useState<any[]>([]);
  const handleSearch = (inputValue: string) => {
    const result = foodMenus.filter((menu) => menu.name.toLowerCase().includes(inputValue.toLowerCase() ));
    setSearchResultList(result);
    console.log("handleSearch",result);
  };

  return (
    <nav className="primary-navbar px-6 border h-[70px] flex gap-4 justify-between items-center relative">
      <div className="brand ">
        <img className="h-12" src={brandIcon} alt={siteMaterData.brandName} />
      </div>
      <div className="search w-[40%] hidden lg:block">
        <IconSearchBar handleSearch={handleSearch} resultList={searchResutList}/>
      </div>
      <div className="actions flex gap-4 w-auto justify-end">
        {offsetWidth <= 1004 && (
          <IconButton
            onClick={() => setIsModalOpen(true)}
            type={IconButtonTypes.SEARCH}
            isResponsive={true}
            isEnableFocus={true}
          />
        )}
        <IconButton
          type={IconButtonTypes.SIGNUP_LOGIN}
          text="Sign up or log in"
          isResponsive={true}
        />
        <IconButton
          type={IconButtonTypes.ACCOUNT}
          text="Account"
          isResponsive={true}
        />
      </div>
      {isModalOpen && (
        <MobileSearchModal onClose={() => setIsModalOpen(false)} />
      )}
    </nav>
  );
}

export default PrimaryNavbar;
