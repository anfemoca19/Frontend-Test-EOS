import clsx from "clsx";
import styles from "./Aside.module.css";
import Slide from "../Slide/Slide";
import doubleBars from "../../images/bars.png";
import numbersBars from "../../images/numbersBars.png";

export default function Aside() {
  return (
    <>
      <aside className={clsx(styles["styles-sidebar"])}>
        <div className={clsx(styles["grap-sales"])}>
          <div className={clsx(styles["container-title"])}>
            <div className={clsx(styles["container-text"])}>
              <span className={clsx(styles["styles-title-major"])}>
                Sales comparison
              </span>
              <span className={clsx(styles["styles-caption"])}>
                Than last day
              </span>
            </div>
            <span className={clsx(styles["style-number"])}>94%</span>
          </div>
          <div>
            <img className={clsx(styles["img-bars"])} src={doubleBars} alt="" />
            <img
              className={clsx(styles["img-numbers"])}
              src={numbersBars}
              alt=""
            />
          </div>
        </div>
        <div className={clsx(styles["container-slides"])}>
          <span className={clsx(styles["title-event"])}>Event Galleries</span>
          <div className={clsx(styles["container-galleries"])}>
            <Slide />
          </div>
        </div>
      </aside>
    </>
  );
}
