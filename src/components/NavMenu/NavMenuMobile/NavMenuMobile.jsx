import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Fab from "@material-ui/core/Fab";

import AddIcon from "@material-ui/icons/Add";

import { useStyles } from "./classes";

const NavMenuMobile = ({ handleClickOpen }) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <Fab
          color="secondary"
          onClick={handleClickOpen}
          className={classes.fabButton}
        >
          <AddIcon />
        </Fab>
        <div className={classes.grow} />
      </Toolbar>
    </AppBar>
  );
};
export default NavMenuMobile;
