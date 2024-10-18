import React, { useState, useEffect } from "react";
import gift1 from "../../../assets/Slide1.png";
import gift2 from "../../../assets/Sider2.png";
import gift3 from "../../../assets/Sider3.png";
import styles from "./Advertise.module.css";


export const Advertise: React.FC = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  
  const images = [
    gift1,
    gift2,
    gift3,
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

