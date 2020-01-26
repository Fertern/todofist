import {
  ADD_CARD,
  DELETE_CARD,
  START_EDIT_CARD,
  SUBMIT_EDIT_CARD,
  TOGGLE_DONE_STATUS_CARD,
  SHOW_CARD,
  HIDE_CARD,
  SORT_ARRAY
} from "./selectors";
const all = "All";

export const addCard = data => {
  const { title, description, primary } = data;
  return {
    type: ADD_CARD,
    title,
    description,
    primary
  };
};
export const deleteCard = id => ({
  type: DELETE_CARD,
  id
});

export const editCard = id => ({
  type: START_EDIT_CARD,
  id
});

export const submitEditedCard = (data, id) => ({
  type: SUBMIT_EDIT_CARD,
  data,
  id
});

export const toggleDone = id => ({
  type: TOGGLE_DONE_STATUS_CARD,
  id
});

export const hideCard = id => ({
  type: HIDE_CARD,
  id
});

export const showCard = id => ({
  type: SHOW_CARD,
  id
});

export const sortArray = sortedArray => ({
  type: SORT_ARRAY,
  sortedArray
});

export const startSearchCard = data => (dispatch, getState) => {
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
