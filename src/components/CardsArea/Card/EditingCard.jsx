import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Card,
  CardHeader,
  MenuItem,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
  Select
} from "@material-ui/core";

const EditingCard = ({
  classes,
  toolbox,
  anchorEl,
  title,
  description,
  priority,
  id
}) => {
  const { register, handleSubmit, control } = useForm();
  const { submitEditedCard } = toolbox;
  const onSubmit = data => {
    console.log(data);
    submitEditedCard(data, id);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className={classes.card}>
        <CardHeader
          title={
            <TextField
              name="title"
              placeholder={title}
              size="small"
              variant="filled"
              rows="4"
              fullWidth
              inputRef={register}
              defaultValue={title}
            />
          }
        />
        <CardContent>
          <TextField
            multiline
            rows="4"
            size="small"
            variant="filled"
            fullWidth
            name="description"
            placeholder={description}
            inputRef={register}
            defaultValue={description}
          />
        </CardContent>
        <CardActions>
          <Typography>Priority:</Typography>

          <Controller
            as={<Select fullWidth />}
            name="priority"
            control={control}
            defaultValue={priority}
          >
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Normal">Normal</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
          </Controller>
        </CardActions>
        <Button type="submit" fullWidth>
          Submit changes
        </Button>
      </Card>
    </form>
  );
};

export default EditingCard;
