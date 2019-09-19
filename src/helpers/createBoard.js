const createBoard = (yAxis, xAxis) => {
  const getRow = (x) => {
    const isOdd = (n) => n % 2 === 1;
    return [...Array(x)].map(() => {
      return isOdd(Math.ceil(Math.random() * x));
    });
  };
  const board = [...Array(yAxis)].map(() => getRow(xAxis));
  return board;
};

export default createBoard;
