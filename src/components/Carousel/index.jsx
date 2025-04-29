import { useState } from 'react';
import styles from './Carousel.module.css'

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/banners/banner1.jpg',
    '/banners/banner2.jpg',
    '/banners/banner3.jpg',
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