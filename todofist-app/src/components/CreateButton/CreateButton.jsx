import React from "react";
import s from "./CreateButton.module.css";

const CreateButton = () => {
  return (
    <div className={s.wrapper}>
      <button className={s.btn}>Create</button>
    </div>
  );
};

export default CreateButton;
