import "./Input.css";
import { CiSearch } from "react-icons/ci";

export default function Input(prop) {
  return (
    <>
      <div className={prop.container}>
        <input
          className={prop.className}
          type="text"
          placeholder={prop.placeholder}
        />
        <CiSearch className="style-icon-search" />
      </div>
    </>
  );
}
