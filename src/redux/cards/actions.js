import {
  ADD_CARD,
  DELETE_CARD,
  START_EDIT_CARD,
  SUBMIT_EDIT_CARD,
  TOGGLE_DONE_STATUS_CARD,
  TOGGLE_VISIBLE_CARD,
  SHOW_CARD,
  HIDE_CARD
} from "./selectors";

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

export const submitEditedCard = id => ({
  type: SUBMIT_EDIT_CARD,
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
