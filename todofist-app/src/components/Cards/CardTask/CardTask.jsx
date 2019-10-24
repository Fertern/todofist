import React from "react";
import s from "./CardTask.module.css";

const CardTask = props => {
  return (
    <div className={s.wrapper}>
      <div className={s.text}>
        <div className={s.title}>{props.title}</div>
        <div className={s.description}>{props.description}</div>
      </div>
      <div className={s.down}>
        <span className={s.priority}>{props.priority}</span>
        <span className={s.edit}>...</span>
      </div>
    </div>
  );
};

export default CardTask;
