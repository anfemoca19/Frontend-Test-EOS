import clsx from "clsx";
import styles from "./Main.module.css";
import arrow from "../../images/arrow.png";
import Input from "../UI/Input/Input";
import cicleChart from "../../images/circleChartBest.png";
import bar from "../../images/barChart.png";
import days from "../../images/day.png";

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
              <img
                className={clsx(styles["style-arrow-icon"])}
                src={arrow}
                alt="icon-arrow"
              />
            </div>
          </div>
          <div>
            <Input
              className="input-secundary"
              container="container-secundary"
              placeholder="Tuesday"
              classIcon="style-icon-secundary"
              text="215,523 pcs"
            />
          </div>
        </div>
        <div className={clsx(styles["container-chart-best"])}>
          <img
            className={clsx(styles["style-chart-best-circle"])}
            src={cicleChart}
            alt=""
          />
          <div className={clsx(styles["container-bars-month"])}>
            <img className={clsx(styles["img-bars"])} src={bar} alt="" />
            <img className={clsx(styles["img-days"])} src={days} alt="" />
          </div>
        </div>
      </main>
    </>
  );
}
