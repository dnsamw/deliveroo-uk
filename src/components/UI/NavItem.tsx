import React from "react";

type Section = {
  id: string;
  name: string;
};

type Props = {
  section: Section;
  activeSection: string;
};

function NavItem({ section, activeSection }: Props) {
    // Default classes for li element
  const defaultClasses = "font-bold px-4 py-2 rounded-full cursor-pointer";
  return (
    <>
      <li
        key={section.id}
        className={`${defaultClasses} ${activeSection === section.id ? "bg-teal-400 text-white" : "text-teal-400 bg-white hover:text-teal-500"}`}
      >
        <a href={`#${section.id}`}>{section.name}</a>
      </li>
    </>
  );
}

export default NavItem;
