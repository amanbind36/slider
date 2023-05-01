import { useState, useEffect } from "react";
import './mycss.css';
import pic1 from './img/1953439.jpg';
import pic2 from './img/2225504.jpg';
import pic3 from './img/2548753.jpg';

const images=[
    
  {
    src: pic1,
    alt: "mera naam aman hai",
    title: "Mahadev react dev Image 1",
    description: "This is an example of a carousel image.",
    thumbnailSrc: pic1,
  },

  {
    src: pic2,
    alt: "Example image 2",
    title: "Bhole Example Image 2",
    description: "This is another example of a carousel image.",
    thumbnailSrc: pic2,
  },

  {
    src: pic3,
    alt: "Example image 3",
    title: "Shiva Example Image 3",
    description: "This is a third example of a carousel image.",
    thumbnailSrc: pic3,
  },
  
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying) {
        setCurrentIndex((currentIndex + 1) % images.length);
      }
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex, isPlaying]);

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };



  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  return (
    <div className="image-carousel">
      <div className="image-container">
      <div>
      <img src={images[currentIndex].src} />
      </div>
        
        <div className="image-details">
          <h2>{images[currentIndex].title}</h2>
          <p>{images[currentIndex].description}</p>
        </div>
      </div>
      <div className="controls">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
        <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
      </div>
     
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.thumbnailSrc}
            alt={image.alt}
            className={index === currentIndex ? "active" : "inactive"}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
