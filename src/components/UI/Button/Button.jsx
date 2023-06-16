import styles from "../Button/Button.module.css";
import clsx from "clsx";

export default function Button(prop) {
  return (
    <>
      <button
        className={clsx(styles["style-btn"], styles[`${prop.className}`])}
      >
        <img
          className={clsx(styles["style-icon-pinion"])}
          src={prop.icon}
          alt={prop.alt}
        />
      </button>
    </>
  );
}
