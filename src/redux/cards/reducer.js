import {
  TOGGLE_DONE_STATUS_CARD,
  ADD_CARD,
  DELETE_CARD,
  START_EDIT_CARD,
  SUBMIT_EDIT_CARD,
  HIDE_CARD,
  SHOW_CARD,
  SORT_ARRAY
} from "./selectors";
import { mapSubmit, mapSetter, mapToggle } from "../../utils/mapHelpers";

const isDone = "isDone";
const initialState = [
  {
    title: "Hi there! Open it -->",
    description:
      "Tip: you can drag and drop any card, just hold and move it. Attention, only covered cards can be dragged!",
    priority: "High",
    isDone: false,
    isVisible: true,
    isEditing: false,
    titleEdited: "",
    descriptionEdited: "",
    priorityEdited: "",
    id: `f19141978`
  },
  {
    title: "And that too -->",
    description:
      "Tip: click on dots right side to open special menu. You can delete, edit, done and cover any card by it.",
    priority: "Normal",
    isDone: false,
    isVisible: true,
    isEditing: false,
    titleEdited: "",
    descriptionEdited: "",
    priorityEdited: "",
    id: `f200020020`
  },
  {
    title: "Last -->",
    description:
      "Tip: click on gray circle to done/undone current card and close all cards. If you want create some new cards, click on '+' button in bottom menu ",
    priority: "Low",
    isDone: false,
    isVisible: true,
    isEditing: false,
    titleEdited: "",
    descriptionEdited: "",
    priorityEdited: "",
    id: `f222222222`
  }
];

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      const { title, description, priority } = action;
      return [
        ...state,
        {
          title,
          description,
          priority,
          isDone: false,
          isVisible: true,
          isEditing: false,
          titleEdited: "",
          descriptionEdited: "",
          priorityEdited: "",
          id: `f${(+new Date()).toString(16)}`
        }
      ];

    case DELETE_CARD:
      return [...state.filter(card => card.id !== action.id)];

    case START_EDIT_CARD:
      return mapSetter(state, action.id, { isEditing: true });

    case SUBMIT_EDIT_CARD:
      return mapSubmit(state, action.data, action.id);

    case TOGGLE_DONE_STATUS_CARD:
      return mapToggle(state, action.id, isDone);

    case HIDE_CARD:
      return mapSetter(state, action.id, { isVisible: false });

    case SHOW_CARD:
      return mapSetter(state, action.id, { isVisible: true });

    case SORT_ARRAY:
      return action.sortedArray;

    default:
      return state;
  }
};

export default cardsReducer;
