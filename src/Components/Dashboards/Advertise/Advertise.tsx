import React, { useState, useEffect } from "react";
import gift1 from "../../../assets/cion1.webp";
import gift2 from "../../../assets/coin3.avif";
import gift3 from "../../../assets/coin4.png";
import gift4 from "../../../assets/coin5.webp";
import gift5 from "../../../assets/cion9.avif";
import gift6 from "../../../assets/coin7.jpg";
import gift7 from "../../../assets/coin8.jpg";
import styles from "./Advertise.module.css";


export const Advertise: React.FC = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  
  const images = [
    gift1,
    gift2,
    gift3,
    gift4,
    gift5,
    gift6,
    gift7,
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSliderIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className={styles.giftCards}>
      <div
        className={styles.slider}
        style={{ transform: `translateX(-${sliderIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} className={styles.sliderImage} />
        ))}
      </div>
    </div>
  );
};

export default Advertise;

