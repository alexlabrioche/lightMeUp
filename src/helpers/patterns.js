const crossPattern = (y, x) => {
  return [[y, x], [y - 1, x], [y + 1, x], [y, x - 1], [y, x + 1]];
};
const XPattern = (y, x) => {
  return [[y, x], [y - 1, x - 1], [y - 1, x + 1], [y + 1, x + 1], [y + 1, x - 1]];
};

export { crossPattern, XPattern };
