import { useState, useEffect } from 'react';
import MenuStickyNavbar from './components/MenuStickyNavbar';
import { sections } from './components/_testdata/fakeData';
import PrimaryNavbar from './components/PrimaryNavbar';
import './App.css';
import MenuHeaderHero from './components/MenuHeaderHero';

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
        {sections.map((section) => (
          <div key={section.id} id={section.id} className="section">
            <h2>{section.name}</h2>
            <p>Content for {section.name}</p>
          </div>
        ))}
      </section>
      <section className="h-screen bg-gray-300 ">
        FOOTER
      </section>
    </div>
  );
};

export default App;