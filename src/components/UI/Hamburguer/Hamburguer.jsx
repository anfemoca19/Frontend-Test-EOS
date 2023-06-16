import clsx from "clsx";
import styles from "./Hamburguer.module.css";

export default function Hamburguer() {
  return (
    <>
      <div id="icon" className={clsx(styles["container-menu-hamburguer"])}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}
