import clsx from "clsx";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <>
      <main className={clsx(styles["styles-main"])}>
        <div>
          <span>Best Selling</span>
          <input type="text" />
          <div></div>
        </div>
        <div></div>
      </main>
    </>
  );
}
