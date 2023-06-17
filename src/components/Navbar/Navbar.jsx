import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import styles from "../Navbar/Navbar.module.css";
import clsx from "clsx";
import logo from "../../images/logo.png";
import Hamburguer from "../UI/Hamburguer/Hamburguer";

import pinion from "../../images/pinion.png";
import campanaign from "../../images/campaing.png";
import chat from "../../images/chat.png";
import gift from "../../images/gift.png";
import arrow from "../../images/arrow.png";
import Picture from "../Picture/Picture";

export default function Navbar() {
  return (
    <>
      <nav className={clsx(styles["nav-style"])}>
        <div className={clsx(styles["container-grid"])}>
          <div className={clsx(styles["container-menu"])}>
            <Hamburguer />
            <img className="styles-logo" src={logo} alt="logo-test" />
          </div>
          <div className={clsx(styles["container-elements"])}>
            <Input
              className="style-input"
              placeholder="Search here"
              container="container-search"
            />
            <Button
              className={clsx("style-green")}
              icon={pinion}
              alt="icon-pinion"
            />
          </div>
          <div className={clsx(styles["container-notification"])}>
            <Button
              className={clsx("style-grey", styles["style-campain"])}
              icon={campanaign}
              alt="icon-campanaign"
            />
            <Button
              className={clsx("style-grey", styles["style-chat"])}
              icon={chat}
              alt="icon-chat"
            />
            <Button
              className={clsx("style-grey", styles["style-gift"])}
              icon={gift}
              lat="icon-gift"
            />
            <span className={clsx(styles["style-separator"])}></span>
            <Picture className={clsx("style-user")} />
            <div className={clsx(styles["container-profile"])}>
              <span>David</span>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
        <div className={clsx(styles["container-dashboard"])}>
          <span className={clsx(styles["style-font"])}>Dasboard/</span>
        </div>
      </nav>
    </>
  );
}
