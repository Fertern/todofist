import React, { useState, useLayoutEffect } from "react";
//import MobileHeader from "./MobileHeader";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useStylesHeader } from "./classes";
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
  // const [isPhoneView, setIsPhoneView] = useState(
  //   window.matchMedia(`(max-width: 425px)`).matches
  // );
  // useLayoutEffect(() => {
  //   const updateView = () => {
  //     setIsPhoneView(window.matchMedia(`(max-width: 425px)`).matches);
  //   };
  //   window.addEventListener("resize", updateView);
  //   updateView();
  //   return () => window.removeEventListener("resize", updateView);
  // }, []);
  const classes = useStylesHeader();

  // if (isPhoneView) {
  //   return <MobileHeader />;
  // }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            ToDoGist v2.0
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
