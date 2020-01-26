import React from "react";
import { useSelector } from "react-redux";
import CardContainer from "./Card/CardContainer";

const Cards = () => {
  const cards = useSelector(state => state);

  return cards.map(card => (
    <CardContainer
      title={card.title}
      description={card.description}
      priority={card.priority}
      isDone={card.isDone}
      isVisible={card.isVisible}
      isEditing={card.isEditing}
      id={card.id}
      key={card.id}
    />
  ));
};

export default Cards;
