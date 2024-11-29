import React, { useState } from "react";
import "../styles/image-slider.css";

interface ImageSliderProps {
  images: string[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  if (images.length === 0) return null;

  const showNavButtons = images.length > 1;

  return (
    <div className="image-slider">
      <div className="image-wrapper">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Property ${index + 1}`}
            className={`image ${index === currentImageIndex ? "visible" : ""}`}
          />
        ))}
      </div>
      {showNavButtons ? (
        <>
          <button
            onClick={prevImage}
            className="nav-button prev"
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={nextImage}
            className="nav-button next"
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </>
      ) : null}
    </div>
  );
}
