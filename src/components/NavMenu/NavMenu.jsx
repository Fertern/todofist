import React from "react";
import { Button } from "@material-ui/core";
import CreateCardMenu from "./CreateCardMenu/CreateCardMenu";

const NavMenu = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <form>
        <Button color="primary" onClick={handleClickOpen}>
          Create new task
        </Button>
      </form>
      <CreateCardMenu open={open} handleClose={handleClose} />
    </div>
  );
};

export default NavMenu;
