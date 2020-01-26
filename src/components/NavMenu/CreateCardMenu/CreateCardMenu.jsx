import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { TextField, MenuItem, Select } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addCard } from "../../../redux/cards/actions";
import Slide from "@material-ui/core/Slide";
import { useStyles } from "./classes";
import AddIcon from "@material-ui/icons/Add";
import styles from "./styles.module.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateCardMenu = ({ handleClose, open }) => {
  const { register, handleSubmit, control, errors } = useForm();

  const dispatch = useDispatch();
  const classes = useStyles();

  const onSubmit = data => {
    dispatch(addCard(data));
    handleClose();
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Add task
            </Button>
          </Toolbar>
        </AppBar>
        <div className={styles.formWrapper}>
          <TextField
            error={!!errors.title}
            inputRef={register({ required: true, maxLength: 40 })}
            name="title"
            placeholder={"Write new task"}
            size="small"
            variant="filled"
            fullWidth
          />

          <TextField
            error={!!errors.description}
            inputRef={register({ required: true, maxLength: 300 })}
            multiline
            rows="4"
            size="small"
            variant="filled"
            fullWidth
            name="description"
            placeholder={"Additional info about new task"}
          />

          <Controller
            as={<Select variant="filled" fullWidth />}
            name="priority"
            control={control}
            defaultValue={"High"}
          >
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Normal">Normal</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
          </Controller>

          <Button
            fullWidth
            variant="contained"
            startIcon={<AddIcon />}
            type="submit"
          >
            Add new task
          </Button>
        </div>
      </form>
    </Dialog>
  );
};

export default CreateCardMenu;
