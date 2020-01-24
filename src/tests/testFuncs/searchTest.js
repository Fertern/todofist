const all = "All";
export const startSearchTest = (data, array) => {
  const { title, priority, isDone } = data;
  array.forEach(card => {
    if (
      card.title.toLowerCase().includes(title) ||
      (priority !== all && card.priority === priority) ||
      (isDone !== all && card.isDone === isDone)
    ) {
      card.isVisible = true;
    } else {
      card.isVisible = false;
    }
  });
};

export const startNewSearchTest = (data, array) => {
  const { title, priority, isDone } = data;
  array.forEach(card => {
    if (
      card.title.toLowerCase().includes(title) &&
      (priority === all || card.priority === priority) &&
      (isDone === all || card.isDone === isDone)
    ) {
      card.isVisible = true;
    } else {
      card.isVisible = false;
    }
  });
};
