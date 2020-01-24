import React from "react";
//import s from "./Cards.module.css";
import CardTask from "./CardTask/CardTask";
import StoreContext from "../../StoreContext";

const Cards = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        let cardsElements = store
          .getState()
          .allCards.map(c => (
            <CardTask
              title={c.title}
              description={c.description}
              priority={c.priority}
            />
          ));
        return <div>{cardsElements}</div>;
      }}
    </StoreContext.Consumer>
  );
};

export default Cards;
