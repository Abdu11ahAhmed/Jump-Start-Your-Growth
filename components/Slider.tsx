"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../app/page.module.css";
import { images } from "../public/constants";
import Description from "./Description";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <main className={styles.testimonails}>
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage ? `${styles.userImage}` : `${styles.hidden}`
          }`}
        >
          <Image
            src={elem.src}
            alt=""
            width={400}
            height={400}
            className={styles.testimonailsImage}
          />
        </div>
      ))}
      <Description
        activeImage={activeImage}
        clickNext={clickNext}
        clickPrev={clickPrev}
      />
    </main>
  );
};

export default Slider;

