import clsx from "clsx";
import styles from "./Layout.module.css";
import Main from "../Main/Main";
import Aside from "../Aside/Aside";
import arrow from "../../images/arrow.png";
import ProgreBar from "../ProgresBar/ProgresBar";
import mask from "../../images/Mask Group.png";
import monthlyChart from "../../images/monthlyChart.png";
import pieChart from "../../images/pieChart.png";
import legend from "../../images/legend.png";

const Layout = ({ navBar, children, sideBar }) => {
  return (
    <div className={clsx(styles["container"])}>
      <Main />
      <Aside />
      <div className={clsx(styles["container-tiket-sold"])}>
        <div className={clsx(styles["container-header-tiket"])}>
          <div className={clsx(styles["tiket-sold"])}>
            <span className={clsx(styles["style-number"])}>456 Pcs</span>
            <span className={clsx(styles["style-text-grey"])}>Ticket Sold</span>
          </div>
          <div className={clsx(styles["container-daily"])}>
            <span className={clsx(styles["style-text-grey"])}>Daily</span>
            <img src={arrow} alt="" />
          </div>
        </div>
        <ProgreBar />
      </div>
      <div className={clsx(styles.soled)}>
        <div className={clsx(styles["container-header-tiket"])}>
          <div className={clsx(styles["tiket-sold"])}>
            <span className={clsx(styles["style-number"])}>451,509</span>
            <span className={clsx(styles["style-text-grey"])}>Sales</span>
          </div>
          <div className={clsx(styles["container-daily"])}>
            <span className={clsx(styles["style-text-grey"])}>This Week</span>
            <img src={arrow} alt="" />
          </div>
        </div>
        <div>
          <img className={clsx(styles["img-line-chart"])} src={mask} alt="" />
        </div>
      </div>
      <div className={clsx(styles.monthly)}>
        <div className={clsx(styles["container-header-tiket"])}>
          <div className={clsx(styles["tiket-sold"])}>
            <span className={clsx(styles["style-number"])}>$456,623</span>
            <span className={clsx(styles["style-text-grey"])}>Income</span>
          </div>
          <div className={clsx(styles["container-daily"])}>
            <span className={clsx(styles["style-text-grey"])}>Monthly</span>
            <img src={arrow} alt="" />
          </div>
        </div>
        <img
          className={clsx(styles["img-monthly"])}
          src={monthlyChart}
          alt="chart"
        />
      </div>
      <div className={clsx(styles["this-week"])}>
        <div className={clsx(styles["container-pie"])}>
          <img className={clsx(styles["styles-pie"])} src={pieChart} alt="" />
          <div className={clsx(styles["container-elements-tiket"])}>
            <div className={clsx(styles["container-daily"])}>
              <span className={clsx(styles["style-text-grey"])}>This Week</span>
              <img src={arrow} alt="" />
            </div>
            <img className={clsx(styles["img-tiket"])} src={legend} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
