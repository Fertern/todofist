import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  radio: {
    display: "flex",
    justifyContent: "space-between"
  },
  submit: {
    width: "100%"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));
