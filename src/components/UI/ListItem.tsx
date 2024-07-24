import React from "react";
import { Section } from "./NavItem";
import { Link } from "react-scroll";

type Props = {
  item: Section;
  activeItem: string;
};

function ListItem({ item, activeItem }: Props) {
  const defaultClasses = "text-xl px-6 py-4 cursor-pointer border-b border-gray-200 rounded-sm hover:bg-gray-100";
  return (
    <>
      <Link
        className="sticky-nav-item"
        to={item.id}
        spy={true}
        smooth={true}
        duration={500}
      >
        <div
          key={item.id}
          className={`${defaultClasses} ${
            activeItem === item.id
              ? "bg-white text-black font-bold"
              : "text-gray-700 bg-white"
          }`}
        >
          <span>{item.name}</span>
        </div>
      </Link>
    </>
  );
}

export default ListItem;
