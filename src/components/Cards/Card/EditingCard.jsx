import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
  Radio
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
  const { register, handleSubmit, errors } = useForm();
  const [newPriority, setNewPriority] = useState(priority);
  const { submitEditedCard } = toolbox;
  const handleChange = e => {
    setNewPriority(e.target.value);
  };
  const onSubmit = formData => {
    const data = { ...formData };
    data.priority = newPriority;
    submitEditedCard(data, id);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className={classes.card}>
        <CardHeader
          title={
            <TextField
              error={!!errors.title}
              name="title"
              placeholder={title}
              size="small"
              variant="filled"
              fullWidth
              inputRef={register({ required: true, maxLength: 40 })}
              defaultValue={title}
            />
          }
        />
        <CardContent>
          <TextField
            error={!!errors.description}
            multiline
            rows="4"
            size="small"
            variant="filled"
            fullWidth
            name="description"
            placeholder={description}
            inputRef={register({ required: true, maxLength: 300 })}
            defaultValue={description}
          />
          <Typography>Choose priority:</Typography>
        </CardContent>
        <CardActions>
          <Typography>H:</Typography>
          <Radio
            checked={newPriority === "High"}
            onChange={handleChange}
            value="High"
          />
          <Typography>N:</Typography>
          <Radio
            checked={newPriority === "Normal"}
            onChange={handleChange}
            value="Normal"
          />
          <Typography>L:</Typography>
          <Radio
            checked={newPriority === "Low"}
            onChange={handleChange}
            value="Low"
          />
        </CardActions>
        <Button type="submit" variant="contained" fullWidth>
          Submit changes
        </Button>
      </Card>
    </form>
  );
};

export default EditingCard;
