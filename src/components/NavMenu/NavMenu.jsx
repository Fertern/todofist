import React from "react";
import {
  Button
  //MenuItem,
  //Select
} from "@material-ui/core";
import CreateCardMenu from "./CreateCardMenu/CreateCardMenu";
import NavMenuMobile from "./NavMenuMobile/NavMenuMobile";
import styles from "./styles.module.css";
//import { useForm, Controller } from "react-hook-form";
//import { startFilter } from "../../redux/cards/actions";
//import { useDispatch } from "react-redux";

const NavMenu = () => {
  const [open, setOpen] = React.useState(false);
  //  const { register, handleSubmit, control } = useForm();
  //  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const onSubmit = data => {
  //   console.log(data);
  // };

  return (
    <div className={styles.wrapper}>
      <div className={styles.navDefault}>
        <div className={styles.createButton}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleClickOpen}
          >
            Create new task
          </Button>
        </div>
        {/* Filter block will be available in next update*/}
        {/* <form onSubmit={handleSubmit(onSubmit)} className={styles.filters}>
            <div className={styles.byDone}>
              <Select
                defaultValue={"All"}
                onChange={handleSubmit(onSubmit)}
                variant="filled"
                inputRef={register}
                fullWidth
              >
                <MenuItem value="All">All tasks</MenuItem>
                <MenuItem value={true}>Done</MenuItem>
                <MenuItem value={false}>Undone</MenuItem>
              </Select>
            </div>
            <div className={styles.byPriority}>
              <Select
                defaultValue={"All"}
                onChange={handleSubmit(onSubmit)}
                variant="filled"
                fullWidth
                name="priority"
                control={control}
                inputRef={register}
              >
                <MenuItem value="All">All tasks</MenuItem>
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Normal">Normal</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
              </Select>
            </div>
          </form> */}
      </div>
      <div className={styles.navMobile}>
        <NavMenuMobile handleClickOpen={handleClickOpen} />
      </div>
      <CreateCardMenu open={open} handleClose={handleClose} />
    </div>
  );
};

export default NavMenu;
