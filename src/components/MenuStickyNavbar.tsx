import { useEffect, useRef, useState } from "react";
import { MenuCategory, sections } from "./_testdata/fakeData";
import NavItem from "./UI/NavItem";
import { IoChevronDown } from "react-icons/io5";
import ListItem from "./UI/ListItem";

type Props = {
  activeSection: string;
};

function MenuStickyNavbar({ activeSection }: Props) {
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef<HTMLElement | null>(null);

  const [visibleItems, setVisibleItems] = useState<MenuCategory[]>(sections);
  const [hiddenItems, setHiddenItems] = useState<MenuCategory[]>([]);
  const [hiddenActiveItem, setHiddenActiveItem] = useState<MenuCategory>();
  const [showMore, setShowMore] = useState(false);

  // sticky feature
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


  //responsive items feature
  useEffect(() => {
    const updateVisibleItems = (width: number) => {
      const itemWidth = 155; // Approximate width of each item in pixels
      const moreItemWidth = 140; // Width of the "More" item
      const availableWidth = width - moreItemWidth;
      const itemsToShow = Math.floor(availableWidth / itemWidth);

      if (itemsToShow < sections.length) {
        setVisibleItems(sections.slice(0, itemsToShow));
        setHiddenItems(sections.slice(itemsToShow));
      } else {
        setVisibleItems(sections);
        setHiddenItems([]);
      }
    };

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        updateVisibleItems(entry.contentRect.width);
      }
    });

    if (navbarRef.current) {
      resizeObserver.observe(navbarRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const hiddeActiveItem = hiddenItems.find((item: MenuCategory) => item.id === activeSection)
    // console.log({hiddeActiveItem})
    setHiddenActiveItem(hiddeActiveItem);
  }, [activeSection]);

  return (
    <nav
      ref={navbarRef}
      className={`sticky-navbar shadow-lg shadow-gray-300/40 shadow-b-2 py-4 px-6 border h-auto
        ${isSticky ? "fixed top-0 left-0 right-0" : ""}
      `}
    >
      <ul className="flex justify-around">
        {visibleItems.map((section) => (
          <NavItem
            activeSection={activeSection}
            key={section.id}
            section={section}
          />
        ))}

          {hiddenItems.length > 0 && (
          <div className="sticky-nav-item w-[255px] flex items-center justify-end">
            <div onClick={() => setShowMore(!showMore)} className="flex items-center rounded-full cursor-pointer text-teal-400  hover:text-teal-500 text-md">
              {hiddenActiveItem ? <NavItem activeSection={activeSection} key={hiddenActiveItem.id} section={hiddenActiveItem} />: "More"} <IoChevronDown className="w-6 h-6 ml-2 text-teal-400" />
            </div>
            {showMore && <ul className="flex flex-col min-w-72 absolute right-0 top-16 bg-white shadow-md mt-2 rounded-sm">
              {hiddenItems.map((section) => (
                <ListItem
                  activeItem={activeSection}
                  key={section.id}
                  item={section}
                />
              ))}
            </ul>}
          </div>
        )}
      </ul>
    </nav>
  );
}

export default MenuStickyNavbar;
