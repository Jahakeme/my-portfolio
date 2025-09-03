'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { sections } from "../../data/sections";

const AnimatedNavbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background on scroll
      setIsScrolled(window.scrollY > 50);

      // Find active section
      const sectionElements = sections.map(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: section.id,
            top: rect.top,
            bottom: rect.bottom,
            element
          };
        }
        return null;
      }).filter(Boolean);

      // Find the section that's most in view
      const viewportHeight = window.innerHeight;
      const center = viewportHeight / 2;
      
      let closestSection = sectionElements[0];
      let minDistance = sectionElements[0]
        ? Math.abs(sectionElements[0].top - center)
        : Number.POSITIVE_INFINITY;

      sectionElements.forEach(section => {
        if (section) {
          // Consider a section active if it's in the upper half of viewport
          if (section.top <= center && section.bottom >= 0) {
            const distance = Math.abs(section.top - center);
            if (distance < minDistance) {
              minDistance = distance;
              closestSection = section;
            }
          }
        }
      });

      if (closestSection) {
        setActiveSection(closestSection.id);
      }
    };

    // Initial check
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky-nav ${isScrolled ? 'scrolled' : ''}`}>
      <ul className="flex items-center gap-2">
        {sections.map((section) => (
          <li key={section.id}>
            <Link 
              className={`nav-link text-clamp-base font-mono whitespace-nowrap ${
                activeSection === section.id ? 'active' : ''
              }`} 
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(section.id);
                if (element) {
                  const navHeight = 100; // Account for new navbar position
                  const elementPosition = element.offsetTop - navHeight;
                  window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              {section.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default AnimatedNavbar
