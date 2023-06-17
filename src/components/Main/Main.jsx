import clsx from "clsx";
import styles from "./Main.module.css";
import arrow from "../../images/arrow.png";
import Input from "../UI/Input/Input";
import cicleChart from "../../images/circleChartBest.png";
import GrapBars from "../GrapBars/GrapBars";

export default function Main() {
  return (
    <>
      <main className={clsx(styles["styles-main"])}>
        <div className={clsx(styles["best-selling"])}>
          <div className={clsx(styles["container-header-title"])}>
            <span className={clsx(styles["style-best-text"])}>
              Best Selling
            </span>
            <div className={clsx(styles["container-week-text"])}>
              <span>This Week</span>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div>
            <Input
              className={clsx(styles["input-secundary"])}
              container="container-secundary"
              placeholder="Tuesday"
            />
          </div>
        </div>
        <div className={clsx(styles["container-chart-best"])}>
          <img className="style-chart-best-circle" src={cicleChart} alt="" />
          <GrapBars />
        </div>
      </main>
    </>
  );
}
