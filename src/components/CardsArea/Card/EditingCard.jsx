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
  const { register, handleSubmit } = useForm();
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
          <Typography>Choose priority:</Typography>
        </CardContent>
        <CardActions>
          <Typography>High:</Typography>
          <Radio
            checked={newPriority === "High"}
            onChange={handleChange}
            value="High"
          />
          <Typography>Normal:</Typography>
          <Radio
            checked={newPriority === "Normal"}
            onChange={handleChange}
            value="Normal"
          />
          <Typography>Low:</Typography>
          <Radio
            checked={newPriority === "Low"}
            onChange={handleChange}
            value="Low"
          />
        </CardActions>
        <Button type="submit" fullWidth>
          Submit changes
        </Button>
      </Card>
    </form>
  );
};

export default EditingCard;
