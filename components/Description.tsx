import styles from "../app/page.module.css";
import { images } from "../public/constants";
import left from "../public/left.svg";
import right from "../public/right.svg";
import Image from "next/image";

type Props = {
  activeImage: any;
  clickNext: any;
  clickPrev: any;
};

const Description = ({ activeImage, clickNext, clickPrev }: Props) => {
  return (
    <>
      <div className={styles.content}>
        {images.map((elem, idx) => (
          <div
            key={idx}
            className={`${
              idx === activeImage ? `${styles.comment}` : `${styles.hidden}`
            }`}
          >
            <h3 className={styles.title}>{elem.title}</h3>
            <p className={styles.desc}> {elem.desc}</p>
            <div className={styles.movementElements}>
              <div className={styles.moveleft} onClick={clickPrev}>
                <Image src={left} alt="left" />
              </div>

              <div className={styles.moveright} onClick={clickNext}>
                <Image src={right} alt="right" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Description;

