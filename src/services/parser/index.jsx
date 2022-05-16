// to limit the wording in card
export const cardItemTitleParser = (value = "", length = 200) => {
  if (value.length > length) return `${value.slice(0, length)}...`;

  return value;
};

export const upperCaseFirstLetterParser = (label) => {
  return label.charAt(0).toUpperCase() + label.slice(1);
};
