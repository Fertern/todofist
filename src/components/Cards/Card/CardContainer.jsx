import React, { useState, useLayoutEffect } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { mobileStyles, desktopStyles } from "./classes";
import { useDispatch } from "react-redux";
import {
  toggleDone as toggleDoneActionCreator,
  editCard as editCardActionCreator,
  deleteCard as deleteCardActionCreator,
  submitEditedCard as submitEditedCardActionCreator
} from "../../../redux/cards/actions";
import DefaultCard from "./DefaultCard";
import EditingCard from "./EditingCard";
import ShortcutCard from "./ShortcutCard";

const CardContainer = ({ isEditing, id, ...props }) => {
  const [isPhoneView, setIsPhoneView] = useState(
    useMediaQuery(`(max-width: 425px)`)
  );
  const [anchorEl, setAnchorEl] = useState(null);
  const [shortcutSize, setShortcutSize] = useState(true);
  const dispatch = useDispatch();
  const toolbox = {
    toggleDone() {
      dispatch(toggleDoneActionCreator(id));
      setAnchorEl(null);
    },
    editCard() {
      dispatch(editCardActionCreator(id));
      setAnchorEl(null);
    },
    deleteCard() {
      dispatch(deleteCardActionCreator(id));
      setAnchorEl(null);
    },
    submitEditedCard(data, id) {
      dispatch(submitEditedCardActionCreator(data, id));
    },

    handleClick(event) {
      setAnchorEl(event.currentTarget);
    },

    handleClose() {
      setAnchorEl(null);
    }
  };
  useLayoutEffect(() => {
    const updateView = () => {
      setIsPhoneView(window.matchMedia(`(max-width: 425px)`).matches);
    };
    window.addEventListener("resize", updateView);
    updateView();
    return () => window.removeEventListener("resize", updateView);
  }, []);
  let classes;
  if (isPhoneView) {
    classes = mobileStyles();
  } else {
    classes = desktopStyles();
  }

  if (isEditing) {
    return (
      <EditingCard
        anchorEl={anchorEl}
        classes={classes}
        toolbox={toolbox}
        id={id}
        {...props}
      />
    );
  }

  if (shortcutSize) {
    return (
      <ShortcutCard
        classes={classes}
        setShortcutSize={setShortcutSize}
        toolbox={toolbox}
        id={id}
        {...props}
      />
    );
  }
  return (
    <DefaultCard
      setShortcutSize={setShortcutSize}
      anchorEl={anchorEl}
      classes={classes}
      toolbox={toolbox}
      {...props}
    />
  );
};

export default CardContainer;
