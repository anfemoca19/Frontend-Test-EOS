import styles from "../Button/Button.module.css";
import clsx from "clsx";

export default function Button(prop) {
  return (
    <>
      <button className={clsx(styles[prop.className])}></button>
    </>
  );
}
