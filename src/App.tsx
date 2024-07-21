import { useState, useEffect } from 'react';
import MenuStickyNavbar from './components/MenuStickyNavbar';
import { sections } from './components/_testdata/fakeData';
import PrimaryNavbar from './components/PrimaryNavbar';
import './App.css';
import MenuHeaderHero from './components/MenuHeaderHero';
import MenuSection from './components/MenuSection';
import FoodItemCard from './components/FoodItemCard';
import Footer from './components/Footer';
import BasketPreview from './components/BasketPreview';

const App = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // 100px before hitting the section
      let newActiveSection = '';

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          newActiveSection = section.id;
        }
      });

      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <PrimaryNavbar />
      <section className="h-[500px] bg-white p-4">
       <MenuHeaderHero />
      </section>
      <MenuStickyNavbar activeSection={activeSection}/>
      <div className="section-container w-[100%] flex">        
      <section className="h-auto bg-gray-200 w-[70%]">
        <div className='flex gap-4 p-4 bg-white'>
          <FoodItemCard />
          <FoodItemCard />
          <FoodItemCard />
          <FoodItemCard />
          <FoodItemCard />
          <FoodItemCard />
          <FoodItemCard />
          <FoodItemCard />
          <FoodItemCard />
        </div>
        {sections.map((section) => (
          <MenuSection section={section} />
        ))}
      </section>
      <section className="h-auto bg-gray-50 p-6 w-[30%] relative">
        <BasketPreview />
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default App;