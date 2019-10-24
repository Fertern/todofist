import React, { Component } from "react";

import s from "./CreateButton.module.css";
import EditMenu from "./EditMenu/EditMenu";

export default class CreateButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWork: false
    };
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  closeMenu() {
    this.setState(state => ({
      isWork: false
    }));
  }
  openMenu() {
    this.setState(state => ({
      isWork: true
    }));
    console.log("now im " + this.state.isWork);
  }
  render() {
    return (
      <div>
        <button onClick={this.openMenu} className={s.btn}>
          Create
        </button>
        <EditMenu isWork={this.state.isWork} closeMenu={this.closeMenu} />
      </div>
    );
  }
}
