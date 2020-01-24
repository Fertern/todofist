export const mapSetter = (array, id, changedValue) =>
  array.map(element =>
    element.id === id ? { ...element, ...changedValue } : element
  );

export const mapSubmit = (array, id) =>
  array.map(element =>
    element.id === id
      ? {
          ...element,
          isEditing: false,
          title: element.editingTitle,
          description: element.editingDescription,
          primary: element.editingPrimary
        }
      : element
  );

export const mapToggle = (array, id, key) =>
  array.map(element =>
    element.id === id ? { ...element, [key]: !element[key] } : element
  );
