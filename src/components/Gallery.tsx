import React, { useState, useEffect, useCallback } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
  IoIosCloseCircle,
} from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

interface GalleryProps {
  images?: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images = [] }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = useCallback((index: number): void => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setCurrentIndex(0);
  }, []);

  const showNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const showPrev = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + images.length - 1) % images.length
    );
  }, [images.length]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") showNext();
      else if (event.key === "ArrowLeft") showPrev();
      else if (event.key === "Escape") closeLightbox();
    },
    [showNext, showPrev, closeLightbox]
  );

  useEffect(() => {
    if (lightboxOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [lightboxOpen, handleKeyDown]);

  return (
    <>
      {/* Gallery Grid */}
      <div
        role="list"
        className="grid grid-cols-1 sm:grid-cols-1 md-lg:grid-cols-2 lg:grid-cols-2 gap-4"
      >
        {images.map((image, index) => (
          <div
            key={index}
            role="listitem"
            className="relative overflow-hidden shadow-md cursor-pointer hover:scale-98 transform transition-transform duration-300 group"
            onClick={() => openLightbox(index)}
          >
            <div className="relative w-full h-0 pb-[109.09%] sm:pb-[94.8%] md:pb-[50%] md-lg:pb-[64.26%] lg:pb-[64.26%]">
              <Image
                width={500}
                height={400}
                src={image}
                alt={`Gallery Image ${index + 1}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-95"
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              <button className="text-white hover:text-gray-800 w-24 h-24 text-sm font-semibold rounded-full bg-transparent transition-all duration-500 transform -translate-y-8 group-hover:translate-y-0 hover:scale-105 hover:bg-gray-200 hover:font-bold">
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 backdrop-blur-sm flex flex-col items-center justify-center z-[9999] p-4 overflow-hidden">
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <Image
              src={images[currentIndex]}
              alt={`Gallery Image ${currentIndex + 1}`}
              width={1920}
              height={1080}
              className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-2xl"
              priority
            />

            <div className="absolute inset-0 flex items-center justify-between px-4">
              <button
                onClick={showPrev}
                className="p-3 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm transition-all duration-200 group"
              >
                <IoIosArrowDropleftCircle className="text-white text-6xl cursor-pointer" />
              </button>

              <button
                onClick={showNext}
                className="p-3 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm transition-all duration-200 group"
              >
                <IoIosArrowDroprightCircle className="text-white text-6xl cursor-pointer" />
              </button>
            </div>

            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-3 rounded-full bg-black/20 hover:bg-black/50 backdrop-blur-sm transition-all duration-200 group"
            >
              <IoIosCloseCircle className="text-white text-6xl cursor-pointer" />
            </button>

            <div className="absolute top-4 left-4 text-white bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm text-sm font-medium">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          <div className="mt-4 flex space-x-2 max-w-full overflow-x-auto px-8 pb-4 scrollbar-hide">
            {images.map((image, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative cursor-pointer transition-transform duration-200 ${
                  currentIndex === idx ? "scale-110" : "hover:scale-105"
                }`}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${idx + 1}`}
                  width={80}
                  height={80}
                  className={`w-20 h-20 object-cover rounded-lg shadow-md ${
                    currentIndex === idx
                      ? "ring-2 ring-white"
                      : "opacity-70 hover:opacity-90"
                  }`}
                />
                {currentIndex === idx && (
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="h-24 w-full flex justify-center items-center">
        <Link
          href="/projects"
          className="relative inline-block cursor-pointer group text-xs tracking-[4px] mt-12"
        >
          <div className="relative z-8 tracking-[3px] leading-tight text-[11px] border-gray-300 uppercase">
            Return to projects
          </div>
          <div className="absolute right-[2px] top-[18px] bottom-0 h-[1px] w-full bg-gray-300 transform scale-x-100"></div>
          <div className="absolute right-[2px] top-[18px] bottom-0 h-[1px] w-full bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right group-hover:origin-left"></div>
        </Link>
      </div>
    </>
  );
};

export default Gallery;
