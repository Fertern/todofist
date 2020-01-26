import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CardContainer from "./Card/CardContainer";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
import { sortArray } from "../../redux/cards/actions";

const Cards = () => {
  const cardsArray = useSelector(state => state);
  const dispatch = useDispatch();
  const onSortEnd = ({ oldIndex, newIndex }) => {
    dispatch(sortArray(arrayMove(cardsArray, oldIndex, newIndex)));
  };

  const SortableItem = sortableElement(({ card }) => (
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

  const SortableContainer = sortableContainer(({ children }) => {
    return <div>{children}</div>;
  });

  return (
    <SortableContainer pressDelay={200} onSortEnd={onSortEnd}>
      {cardsArray.map((card, index) => (
        <SortableItem key={`item-${index}`} index={index} card={card} />
      ))}
    </SortableContainer>
  );
};

export default Cards;
