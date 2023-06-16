import "./Input.css";
import { CiSearch } from "react-icons/ci";

export default function Input() {
  return (
    <>
      <div className="container-search">
        <input className="style-input" type="text" placeholder="Search Here" />
        <CiSearch className="style-icon-search" />
      </div>
    </>
  );
}
