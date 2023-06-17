import clsx from "clsx";
import styles from "./Aside.module.css";
import GrapBars from "../GrapBars/GrapBars";

export default function Aside() {
  return (
    <>
      <aside className={clsx(styles["styles-sidebar"])}>
        <div className={clsx(styles["grap-sales"])}>
          <GrapBars />
        </div>
        <div>
          <span>Event Galleries</span>
          <div className={clsx(styles["container-galleries"])}></div>
        </div>
      </aside>
    </>
  );
}
