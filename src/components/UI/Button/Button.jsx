import styles from "../Button/Button.module.css";
import clsx from "clsx";

export default function Button({ className, icon, alt, id }) {
  return (
    <>
      <button className={clsx(styles["style-btn"], styles[className])} id={id}>
        <img className={clsx(styles["style-icon"])} src={icon} alt={alt} />
      </button>
    </>
  );
}
