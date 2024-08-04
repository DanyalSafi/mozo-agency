import React, { useRef, useState, useEffect } from 'react';
import { sumArray } from './helper';
import Card from './card/card';
import { projects } from './data';

const tabs = [
  { name: 'All' },
  { name: 'Web Design' },
  { name: 'App Design' },
  { name: 'Branding' },
  { name: 'Social Marketing Management' },
  { name: '3D Animation' },
];

const Projects = () => {
  const [displayableProjects, setDisplayableProjects] = useState(projects);
  const [activeIndex, setActiveIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const itemsEls = useRef([]);

  useEffect(() => {
    const prevEl = itemsEls.current.filter((_, index) => index < activeIndex);
    setOffset(sumArray(prevEl.map((item) => item.offsetWidth)));
    if (itemsEls.current[activeIndex]) {
      setIndicatorWidth(itemsEls.current[activeIndex].offsetWidth);
    }
  }, [activeIndex]);

  const setProjects = (category) => {
    if (category.toLowerCase() === 'all') {
      setDisplayableProjects(projects);
    } else {
      const pro = projects.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
      setDisplayableProjects(pro);
    }
  };

  return (
    <section id="projects" className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Projects</h2>
        </div>
        
        {/* Navigation Menu */}
        <nav className="relative w-full max-w-max h-12 rounded-lg flex flex-wrap items-center justify-center mx-auto mb-8 md:mb-20 sm:mb-20 select-none transition-all">
          {tabs.map((tab, index) => (
            <button
              ref={(el) => (itemsEls.current[index] = el)}
              onClick={() => {
                setActiveIndex(index);
                setProjects(tab.name);
              }}
              key={index}
              className={`relative inline-block text-sm md:text-base font-medium text-white no-underline px-4 md:px-6 z-10 cursor-pointer bg-transparent transition-all ${
                activeIndex === index ? 'bg-gradient-to-r from-purple-500 to-teal-600 rounded-full transition-all  text-white' : 'text-white'
              }`}
            >
              {tab.name}
            </button>
          ))}
          <span
            className="absolute top-0 left-0 h-full rounded-full z-0 transition-all cursor-pointer sm:transition-none md:transition-all"
            style={{
              left: `${offset}px`,
              width: `${indicatorWidth}px`,
            }}
          />
        </nav>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-center">
          {displayableProjects.map((project, index) => (
            <Card
              title={project.title}
              data={project.data}
              stack={project.stack}
              image={project.image}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;