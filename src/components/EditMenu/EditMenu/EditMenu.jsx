import React, { Component } from "react";
import s from "./EditMenu.module.css";

export default class EditMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priority: "High",
      title: "",
      description: "",
      isDone: false,
      isVisible: true,
      id: `f${(+new Date()).toString(16)}`
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    let info = this.state;
    this.props.closeMenu();
    //this.props.addCard(this.state);
    debugger;
    this.props.addCard(info);
    this.setState({
      priority: "High",
      title: "",
      description: "",
      isDone: false,
      isVisible: true,
      id: `f${(+new Date()).toString(16)}`
    });
  }
  render(props) {
    if (this.props.state.editMenuIsOpened) {
      return (
        <form onSubmit={this.handleSubmit} className={s.wrapper}>
          <div className={s.title}>
            <div className={s.text}>Title:</div>
            <input
              name="title"
              className={s.inp}
              type="text"
              size="20"
              placeholder="Your title.."
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className={s.desc}>
            <div className={s.text}>Description:</div>
            <input
              name="description"
              className={s.inp}
              type="text"
              size="20"
              placeholder="Your description.."
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <div className={s.priority}>
            <div className={s.text}>Priority:</div>
            <div className={s.menu}>
              <div className={s.content}></div>
            </div>
          </div>
          <select
            name="priority"
            value={this.state.priority}
            onChange={this.handleChange}
          >
            <option priority="High">High</option>
            <option priority="Normal">Normal</option>
            <option priority="Low">Low</option>
          </select>
          <div className={s.buttons}>
            <input type="submit" className={s.btn} value="Save" />
            <div
              onClick={this.props.closeMenu}
              className={s.btn + " " + s.cancel}
            >
              Cancel
            </div>
          </div>
        </form>
      );
    } else {
      return null;
    }
  }
}
