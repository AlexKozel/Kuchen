'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Gallery() {
  const t = useTranslations('Gallery');
  const [activeProject, setActiveProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const galleryRef = useRef(null);

  const projects = [
    {
      id: 1,
      titleKey: 'classicKitchen',
      images: ['/images/projects/kit-1-1.jpg', '/images/projects/kit-1-2.jpg'],
    },
    {
      id: 2,
      titleKey: 'modernWardrobe',
      images: [
        '/images/projects/kit-2-1.jpg',
        '/images/projects/kit-2-2.jpg',
        '/images/projects/kit-2-3.jpg',
        '/images/projects/kit-2-4.jpg',
      ],
    },
    {
      id: 3,
      titleKey: 'modernKitchen',
      images: [
        '/images/projects/k10.jpg',
        '/images/projects/k11.jpg',
        '/images/projects/k12.jpg',
      ],
    },
    {
      id: 4,
      titleKey: 'scandiLiving',
      images: ['/images/projects/kit-3-1.jpg', '/images/projects/kit-3-2.jpg'],
    },
  ];

  const visibleProjects = projects.slice(startIndex, startIndex + 3);

  const openProject = (project) => {
    setActiveProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = (e) => {
    if (e.target === e.currentTarget) {
      setActiveProject(null);
      document.body.style.overflow = 'auto';
    }
  };

  const nextProjectSet = () => {
    if (startIndex + 3 < projects.length) setStartIndex(startIndex + 1);
  };

  const prevProjectSet = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % activeProject.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
        (prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveProject(null);
        document.body.style.overflow = 'auto';
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
      <section className="py-16 bg-gray-50" id="portfolio">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">{t('title')}</h2>

          <div className="relative">
            {startIndex > 0 && (
                <button
                    onClick={prevProjectSet}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition text-black"
                >
                  &larr;
                </button>
            )}

            <div
                ref={galleryRef}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-transform duration-300"
            >
              {visibleProjects.map((project) => (
                  <div
                      key={project.id}
                      className="group relative cursor-pointer"
                      onClick={() => openProject(project)}
                  >
                    <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                      <Image
                          src={project.images[0]}
                          alt={t(`projects.${project.titleKey}`)}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-lg font-medium">
                      {t('photoCount', { count: project.images.length })}
                    </span>
                      </div>
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-black">
                      {t(`projects.${project.titleKey}`)}
                    </h3>
                  </div>
              ))}
            </div>

            {startIndex + 3 < projects.length && (
                <button
                    onClick={nextProjectSet}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition text-black"
                >
                  &rarr;
                </button>
            )}
          </div>

          {activeProject && (
              <div
                  className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                  onClick={closeProject}
              >
                <button
                    onClick={closeProject}
                    className="absolute top-4 right-4 text-white text-4xl z-50 hover:text-gray-300 transition"
                >
                  &times;
                </button>

                <div className="relative w-full max-w-6xl h-full max-h-[90vh]">
                  <Image
                      src={activeProject.images[currentImageIndex]}
                      alt={t(`projects.${activeProject.titleKey}`)}
                      fill
                      className="object-contain"
                  />

                  {activeProject.images.length > 1 && (
                      <>
                        <button
                            onClick={(e) => {
                              e.stopPropagation();
                              prevImage();
                            }}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-3 rounded-full z-50 hover:bg-white/50 transition"
                        >
                          &larr;
                        </button>
                        <button
                            onClick={(e) => {
                              e.stopPropagation();
                              nextImage();
                            }}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-3 rounded-full z-50 hover:bg-white/50 transition"
                        >
                          &rarr;
                        </button>

                        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                          {activeProject.images.map((_, index) => (
                              <button
                                  key={index}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentImageIndex(index);
                                  }}
                                  className={`w-3 h-3 rounded-full transition ${
                                      currentImageIndex === index
                                          ? 'bg-white scale-125'
                                          : 'bg-white/50 hover:bg-white/70'
                                  }`}
                              />
                          ))}
                        </div>
                      </>
                  )}

                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{t(`projects.${activeProject.titleKey}`)}</h3>
                    <p>
                      {currentImageIndex + 1} / {activeProject.images.length}
                    </p>
                  </div>
                </div>
              </div>
          )}
        </div>
      </section>
  );
}
