import React from "react";
import s from "./EditMenu.module.css";

const EditMenu = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <div className={s.text}>Title:</div>
        <input
          className={s.inp}
          type="text"
          size="20"
          placeholder="Your title.."
        />
      </div>
      <div className={s.desc}>
        <div className={s.text}>Decription:</div>
        <input
          className={s.inp}
          type="text"
          size="20"
          placeholder="Your description.."
        />
      </div>
      <div className={s.priority}>
        <div className={s.text}>Priority:</div>
        <div className={s.menu}>
          <div className={s.content}></div>
        </div>
      </div>
      <div className={s.buttons}>
        <button className={s.btn}>Save</button>{" "}
        <button className={s.btn}>Cancel</button>
      </div>
    </div>
  );
};

export default EditMenu;
