import React from "react";
import EditMenu from "./EditMenu/EditMenu";
import StoreContext from "../../StoreContext";
import {
  switchMenuAction,
  createCardAction
} from "../../redux/editMenuReducer";
import s from "./CreateButton.module.css";

const EditMenuContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState().editMenu;
        let addCard = info => {
          store.dispatch(createCardAction(info));
        };
        let switchMenu = () => {
          store.dispatch(switchMenuAction());
        };
        return (
          <div className="wrapper">
            <button onClick={switchMenu} className={s.btn}>
              Create
            </button>
            <EditMenu addCard={addCard} closeMenu={switchMenu} state={state} />
          </div>
        );
      }}
    </StoreContext.Consumer>
  );
};

export default EditMenuContainer;
