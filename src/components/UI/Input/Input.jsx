import "./Input.css";
import { CiSearch } from "react-icons/ci";

export default function Input({
  className,
  container,
  placeholder,
  text,
  classIcon,
}) {
  return (
    <>
      <div className={container}>
        <input className={className} type="text" placeholder={placeholder} />
        <CiSearch className={classIcon} />
        <span className="style-number">{text}</span>
      </div>
    </>
  );
}
