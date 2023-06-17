import clsx from "clsx";
import styles from "./Layout.module.css";
import Main from "../Main/Main";
import Aside from "../Aside/Aside";

const Layout = ({ navBar, children, sideBar }) => {
  return (
    <div className={clsx(styles["container"])}>
      <Main />
      <Aside />
      <div className={clsx(styles["tiket-sold"])}>
        <h3>WIDGET 1</h3>
      </div>
      <div className={clsx(styles.soled)}>
        <h3>WIDGET 2</h3>
      </div>
      <div className={clsx(styles.monthly)}>
        <h3>WIDGET 3</h3>
      </div>
      <div className={clsx(styles["this-week"])}>
        <h3>WIDGET 4</h3>
      </div>
    </div>
  );
};

export default Layout;
