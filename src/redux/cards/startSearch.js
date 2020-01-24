import { hideCard, showCard } from "./actions";
const all = "All";

export const startSearch = data => (dispatch, getState) => {
  const { title, priority, isDone } = data;
  getState.forEach(card => {
    if (
      card.title.toLowerCase().includes(title) &&
      (priority === all || card.priority === priority) &&
      (isDone === all || card.isDone === isDone)
    ) {
      dispatch(showCard(card.id));
    } else dispatch(hideCard(card.id));
  });
};
