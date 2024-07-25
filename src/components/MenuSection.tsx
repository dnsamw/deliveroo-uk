import React from "react";
import FoodMenuItemCard from "./FoodMenuItemCard";

type Props = {
  section: any;
};

function MenuSection({ section }: Props) {
  return (
    <div className="bg-gray-50">
      <div key={section.id} id={section.id} className="section">
        <div className="menu-title p-4">
          <h2 className="text-gray-700 text-2xl font-bold">{section.name}</h2>
        </div>
        <div className="food-item-grid grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
          <FoodMenuItemCard />
          <FoodMenuItemCard />
          <FoodMenuItemCard />
          <FoodMenuItemCard />
          <FoodMenuItemCard />
        </div>
      </div>
    </div>
  );
}

export default MenuSection;
