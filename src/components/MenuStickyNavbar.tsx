import { useEffect, useRef, useState } from "react";
import { sections } from "./_testdata/fakeData";
import NavItem from "./UI/NavItem";

type Props = {
  activeSection: string;
};

function MenuStickyNavbar({ activeSection }: Props) {
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sticky = navbarRef.current?.offsetTop ?? 0;

      if (window.scrollY >= sticky) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={`sticky-navbar p-6 border h-[90px]
        ${isSticky ? "fixed top-0 left-0 right-0" : ""}
      `}
    >
      <ul className="flex justify-around">
        {sections.map((section) => (
          <NavItem
            activeSection={activeSection}
            key={section.id}
            section={section}
          />
        ))}
      </ul>
    </nav>
  );
}

export default MenuStickyNavbar;
