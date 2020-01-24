import {
  TOGGLE_DONE_STATUS_CARD,
  ADD_CARD,
  DELETE_CARD,
  START_EDIT_CARD,
  SUBMIT_EDIT_CARD,
  HIDE_CARD,
  SHOW_CARD
} from "./selectors";
import { mapSubmit, mapSetter, mapToggle } from "../../utils/mapHelpers";

const isDone = "isDone";
const initialState = [
  {
    title: "first",
    description: "++++++++++++",
    priority: "low",
    isDone: true,
    isVisible: true,
    isEditing: false,
    editingTitle: "",
    editingDescription: "",
    editingPriority: "",
    id: `10`
  },
  {
    title: "second",
    description: "222222222222",
    priority: "normal",
    isDone: true,
    isVisible: true,
    isEditing: false,
    editingTitle: "",
    editingDescription: "",
    editingPriority: "",
    id: `11`
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
          editingTitle: "",
          editingDescription: "",
          editingPriority: "",
          id: `f${(+new Date()).toString(16)}`
        }
      ];

    case DELETE_CARD:
      return [...state.filter(card => card.id === action.id)];

    case START_EDIT_CARD:
      return mapSetter(...state, action.id, { isEditing: true });

    case SUBMIT_EDIT_CARD:
      return mapSubmit(...state, action.id);

    case TOGGLE_DONE_STATUS_CARD:
      return mapToggle(...state, action.id, isDone);

    case HIDE_CARD:
      return mapSetter(...state, action.id, { isVisible: false });

    case SHOW_CARD:
      return mapSetter(...state, action.id, { isVisible: true });

    default:
      return state;
  }
};

export default cardsReducer;
