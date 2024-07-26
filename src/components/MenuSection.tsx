import React from "react";
import FoodMenuItemCard from "./FoodMenuItemCard";

type Props = {
  section: any;
};

function MenuSection({ section }: Props) {
  return (
    <div className="bg-gray-50 sm:py-4 sm:pl-4">
      <div key={section.id} id={section.id} className="section">
        <div className="menu-title p-4">
          <h2 className="text-gray-700 text-2xl font-bold">{section.name}</h2>
        </div>
        <div className="food-item-grid grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 md:gap-4">
          <FoodMenuItemCard key={1} />
          <FoodMenuItemCard key={2}/>
          <FoodMenuItemCard key={3} />
          <FoodMenuItemCard key={4} />
          <FoodMenuItemCard key={5} />
        </div>
      </div>
    </div>
  );
}

export default MenuSection;
