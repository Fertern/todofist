import React from "react";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.line}></div>
      <div className={s.text}>by Fertern in 2019</div>
    </div>
  );
};

export default Footer;
