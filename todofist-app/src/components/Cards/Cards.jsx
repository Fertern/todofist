import React from "react";
//import s from "./Cards.module.css";
import CardTask from "./CardTask/CardTask";

const Cards = props => {
  let allCards = [
    {
      title: "first",
      description: "1111111111",
      priority: "low",
      isOpened: "true",
      isVisible: "true",
      id: "sfsfsf"
    },
    {
      title: "second",
      description: "222222222222",
      priority: "normal",
      isOpened: "true",
      isVisible: "true",
      id: "asd333"
    },
    {
      title: "thirst",
      description: "33333333",
      priority: "High",
      isOpened: "true",
      isVisible: "true",
      id: "sdf34"
    }
  ];

  class Card {
    constructor(info) {
      this.title = info.title;
      this.description = info.description;
      this.priority = info.priority;
      this.isOpened = true;
      this.isVisible = true;
      this.id = `c${(~~(Math.random() * 1e2)).toString()}`;
      this.handleClose = this.handleClose.bind(this);
      this.handleHide = this.handleHide.bind(this);
      this.edit = this.edit.bind(this);
    }
    handleClose() {
      this.isOpened = !this.isOpened;
    }
    handleHide() {
      this.isVisible = !this.isVisible;
    }
    // edit() {
    //   this.title = edited.title;
    //   this.description = edited.description;
    //   this.priority = edited.priority;
    // }
  }
  function addCard(card) {
    allCards.push(new Card(props));
  }
  let cardsElements = allCards.map(c => (
    <CardTask
      title={c.title}
      description={c.description}
      priority={c.priority}
    />
  ));
  return <div>{cardsElements}</div>;
};

export default Cards;
