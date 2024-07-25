import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
export type Section = {
  id: string;
  name: string;
};

type Props = {
  section: Section;
  activeSection: string;
};

function NavItem({ section, activeSection }: Props) {
  // Default classes for li element
  const defaultClasses = "text-md px-4 py-2 rounded-full cursor-pointer";
  return (
    <>
      <Link className="sticky-nav-item" to={section.id} spy={true} smooth={true} duration={500}>
        <div
          key={section.id}
          className={`${defaultClasses} ${
            activeSection === section.id
              ? "bg-teal-400 text-white font-semibold"
              : "text-teal-400 bg-white hover:text-teal-500"
          }`}
        >
          <span>{section.name}</span>
        </div>
      </Link>
    </>
  );
}

export default NavItem;
