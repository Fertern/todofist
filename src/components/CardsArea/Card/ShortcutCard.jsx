import React from "react";
import Card from "@material-ui/core/Card";
import { CardHeader, IconButton, Avatar } from "@material-ui/core";

import DoneIcon from "@material-ui/icons/Done";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const ShortcutCard = ({ classes, toolbox, title, isDone, setShortcutSize }) => {
  const { toggleDone, handleClose } = toolbox;
  const showFullCard = e => {
    setShortcutSize(false);
    handleClose();
  };
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar onClick={toggleDone}>{isDone ? <DoneIcon /> : ""}</Avatar>
        }
        action={
          <IconButton onClick={showFullCard}>
            <MoreHorizIcon />
          </IconButton>
        }
        title={title}
      />
    </Card>
  );
};

export default ShortcutCard;
