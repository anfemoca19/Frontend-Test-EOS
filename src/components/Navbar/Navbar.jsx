import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import styles from "../Navbar/Navbar.module.css";
import clsx from "clsx";
export default function Navbar() {
  return (
    <>
      <nav className={clsx(styles["nav-style"])}>
        <div className={clsx(styles["container-main"])}>
          <div>
            {/* menu */}
            {/* logo */}
            <img src="" alt="logo-test" />
          </div>
          <div className={clsx(styles["container-elements"])}>
            <Input />
            <Button className={clsx(styles["style-green"])} />
          </div>
          <div></div>
        </div>
        <div className={clsx(styles["container-dashboard"])}>
          <span className={clsx(styles["style-font"])}>Dasboard/</span>
        </div>
      </nav>
    </>
  );
}
