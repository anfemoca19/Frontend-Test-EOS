import clsx from "clsx";
import styles from "./ProgreBar.module.css";
export default function ProgreBar() {
  return (
    <>
      <div className={clsx(styles["progress"])}>
        <div className={clsx(styles["progress-done"])}></div>
      </div>
    </>
  );
}
