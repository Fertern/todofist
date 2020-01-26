import React from "react";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Typography, Paper } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import {
  CardHeader,
  IconButton,
  Avatar,
  Menu,
  MenuItem
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DoneIcon from "@material-ui/icons/Done";

const DefaultCard = ({
  classes,
  toolbox,
  anchorEl,
  title,
  isDone,
  description,
  priority,
  setShortcutSize
}) => {
  const {
    toggleDone,
    handleClick,
    handleClose,
    editCard,
    deleteCard
  } = toolbox;
  const coverCard = () => {
    setShortcutSize(true);
  };
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar onClick={toggleDone}>{isDone ? <DoneIcon /> : ""}</Avatar>
        }
        action={
          <IconButton onClick={handleClick} aria-label="add">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
      />
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={!!anchorEl}
        onClose={handleClose}
      >
        <MenuItem onClick={coverCard}>Cover</MenuItem>
        <MenuItem onClick={toggleDone}>Done</MenuItem>
        <MenuItem onClick={editCard}>Edit</MenuItem>
        <MenuItem onClick={deleteCard}>Delete</MenuItem>
      </Menu>
      <CardContent>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        <Typography>Priority:</Typography>
        <Paper>{priority}</Paper>
      </CardActions>
    </Card>
  );
};

export default DefaultCard;
