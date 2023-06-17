import clsx from "clsx";
import styles from "./Aside.module.css";

export default function Aside() {
  return (
    <>
      <aside className={clsx(styles["styles-sidebar"])}>
        <div className={clsx(styles["grap-sales"])}></div>
        <div>
          <span>Event Galleries</span>
          <div className={clsx(styles["container-galleries"])}></div>
        </div>
      </aside>
    </>
  );
}
