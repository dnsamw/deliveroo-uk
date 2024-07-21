import { useState, useEffect } from 'react';
import MenuStickyNavbar from './components/MenuStickyNavbar';
import { sections } from './components/_testdata/fakeData';
import PrimaryNavbar from './components/PrimaryNavbar';
import './App.css';
import MenuHeaderHero from './components/MenuHeaderHero';
import MenuSection from './components/MenuSection';
import FoodItemCard from './components/FoodItemCard';
import Footer from './components/Footer';

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
      <section className="h-auto bg-gray-200">
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
          <FoodItemCard />
          <FoodItemCard />
        </div>
        {sections.map((section) => (
          <MenuSection section={section} />
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default App;