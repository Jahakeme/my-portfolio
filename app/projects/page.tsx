import React from 'react'
import Image from 'next/image'
import { projects } from '../../data/projects'

const Projects = () => {
  return (
    <section id="projects" className=" spacing-clamp-xl">
        <div className="container-clamp">
          <h2 className="text-clamp-4xl font-sans font-bold text-center margin-clamp-lg">Projects</h2>
        
          <div className="flex flex-col items-center">
            <div className="w-full max-width-clamp" style={{gap: 'clamp(3rem, 5vw, 6rem)', display: 'flex', flexDirection: 'column'}}>
              {projects.map((project, index) => {
                // Define rotation patterns for images
                const rotations = [
                  ['rotate-3', '-rotate-2', 'rotate-1'],   // First project rotations
                  ['-rotate-2', 'rotate-3', '-rotate-1']   // Second project rotations
                ];
                const currentRotations = rotations[index] || ['rotate-3', '-rotate-2', 'rotate-1'];
                
                return (
                  <div key={project.id} className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
                      <div className="w-full md:w-1/2 mb-4 md:mb-0">
                        <div className="relative overflow-hidden" style={{height: 'clamp(18rem, 25vw, 30rem)'}}>
                          {project.images.map((image, imgIndex) => (
                            <div 
                              key={imgIndex}
                              className={`absolute transform ${currentRotations[imgIndex]} z-${(imgIndex + 1) * 10}`}
                              style={{
                                top: imgIndex === 0 ? '0' : imgIndex === 1 ? 'clamp(1rem, 3vw, 2.5rem)' : 'clamp(2rem, 6vw, 5rem)',
                                left: imgIndex === 0 ? '0' : imgIndex === 1 ? 'clamp(1.5rem, 4vw, 3.5rem)' : 'clamp(3rem, 8vw, 7rem)',
                                width: 'clamp(10rem, 20vw, 20rem)', 
                                height: 'clamp(7.5rem, 14vw, 14rem)'
                              }}
                            >
                              <Image
                                src={image.src}
                                alt={image.alt}
                                width={352}
                                height={256}
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="w-full md:w-1/2 flex flex-col">
                        <div className="flex items-start gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center margin-clamp-sm" style={{gap: 'clamp(0.75rem, 1.5vw, 1.25rem)'}}>
                              <span className="text-clamp-5xl font-bold text-gray-600 font-sans">{project.id}</span>
                              <h3 className="text-clamp-3xl font-bold text-black font-sans">{project.title}</h3>
                            </div>
                            <p className="font-mono text-clamp-base leading-relaxed text-gray-700">
                              {project.description}
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <a 
                              href={project.link.url}
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:bg-gray-200 hover:scale-110 hover:shadow-lg group"
                              aria-label={project.link.label}
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300"
                              >
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15,3 21,3 21,9" />
                                <line x1="10" x2="21" y1="14" y2="3" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
    </section>
  )
}

export default Projects
