import { useState, useEffect } from "react";
import MenuStickyNavbar from "./components/MenuStickyNavbar";
import { fakeFoodMenu, fakeFoodMenuSections as foodMenuSections } from "./components/_testdata/fakeData";
import PrimaryNavbar from "./components/PrimaryNavbar";
import "./App.css";
import MenuHeaderHero from "./components/MenuHeaderHero";
import MenuSection from "./components/MenuSection";
import Footer from "./components/Footer";
import BasketPreview from "./components/BasketPreview";
import Carousel from "./components/UI/Carousel";

const App = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // 100px before hitting the section
      let newActiveSection = "";

      foodMenuSections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          newActiveSection = section.id;
        }
      });

      setActiveSection(newActiveSection);
    };

    console.log(fakeFoodMenu);
    

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App bg-gray-50">
      <PrimaryNavbar />
      <section className="h-auto bg-white p-0 sm:p-4">
        <MenuHeaderHero />
      </section>
      <MenuStickyNavbar activeSection={activeSection} />
      <div className="section-container w-[100%] flex md:px-6">
        <section className="h-auto w-[100%] md:w-[60%] xl:w-[70%]">
          <Carousel />
          {foodMenuSections.map((section) => (
            <MenuSection key={section.id} section={section} />
          ))}
        </section>
        <section className="h-auto hidden md:block p-6 w-[40%] xl:w-[30%] relative">
          <BasketPreview />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default App;
