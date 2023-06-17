import styles from "../Picture/Picture.module.css";
import clsx from "clsx";
import photo from "../../images/phto.png";

export default function Picture(prop) {
  return (
    <>
      <img src={photo} className={clsx(styles["style-photo"])} alt={prop.alr} />
    </>
  );
}
