import { useState } from 'react';
import styles from './Carousel.module.css'

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://placehold.co/600x280',
    'https://placehold.co/601x280',
    'https://placehold.co/602x280',
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.carouselContainer}>
      <button onClick={prevSlide} className={styles.carouselButton}>{"<"}</button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />
      <button onClick={nextSlide} className={styles.carouselButton}>{">"}</button>
      <div className={styles.dotsContainer}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${currentIndex === index ? styles.active : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
export default Carousel;