import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.label}>
        <span className={s.labelText}>ToDo</span>
        <span className={s.labelLogo}>FIST</span>
      </div>
      <div className={s.line}></div>
    </div>
  );
};

export default Header;
