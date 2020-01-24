const CREATE_CARD = "CREATE-CARD";

const SWITCH_MENU = "SWITCH-MENU";

const initialState = {
  allCards: [
    {
      title: "first",
      description: "++++++++++++",
      priority: "low",
      isDone: true,
      isVisible: true,
      id: "sfsfsf"
    },
    {
      title: "second",
      description: "222222222222",
      priority: "normal",
      isDone: true,
      isVisible: true,
      id: "asd333"
    }
  ],
  editMenu: {
    editMenuIsOpened: false,
    currentTitle: "",
    currentDescription: "",
    currentPriority: ""
  }
};

const editMenuReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case CREATE_CARD:
      state.allCards.push(action.newCard);
      return state;
    case SWITCH_MENU:
      state.editMenu.editMenuIsOpened = !state.editMenu.editMenuIsOpened;
      return state;
    default:
      return state;
  }
};

export const createCardAction = info => ({ type: CREATE_CARD, newCard: info }),
  switchMenuAction = () => ({ type: SWITCH_MENU });

export default editMenuReducer;
