export const mapSetter = (array, id, changedValue) => {
  return array.map(element =>
    element.id === id ? { ...element, ...changedValue } : element
  );
};

export const mapSubmit = (array, data, id) =>
  array.map(element =>
    element.id === id
      ? {
          ...element,
          isEditing: false,
          title: data.title,
          description: data.description,
          priority: data.priority
        }
      : element
  );

export const mapToggle = (array, id, key) =>
  array.map(element =>
    element.id === id ? { ...element, [key]: !element[key] } : element
  );
