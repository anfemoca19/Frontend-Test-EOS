import styles from "../Picture/Picture.module.css";
import clsx from "clsx";

export default function Picture(prop) {
  return (
    <>
      <img className={clsx(styles["style-photo"])} alt={prop.alr} />
    </>
  );
}
