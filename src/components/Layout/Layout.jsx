import clsx from "clsx";
import styles from "./Layout.module.css";

const Layout = ({ navBar, children, sideBar }) => {
  return (
    <div className={clsx(styles["container"])}>
      {/* <main className={clsx(styles["container-main"])}>
          <div>
            <div>
              <span>Uno</span>
            </div>
            <div>dos</div>
          </div>
        </main>

        <aside className={clsx(styles["container-sidebar"])}>
          <div className={clsx(styles["grap-sales"])}></div>
          <div>
            <span>Event Galleries</span>
            <div className={clsx(styles["container-galleries"])}></div>
          </div>
        </aside> */}
      <main className={clsx(styles["styles-main"])}>
        <div>
          <span>Best Selling</span>
          <input type="text" />
          <div></div>
        </div>
        <div></div>
      </main>
      <aside className={clsx(styles["styles-sidebar"])}>
        <div className={clsx(styles["grap-sales"])}></div>
        <div>
          <span>Event Galleries</span>
          <div className={clsx(styles["container-galleries"])}></div>
        </div>
      </aside>
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
