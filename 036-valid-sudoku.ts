function isValidSudoku(board: string[][]): boolean {
  const rows = Array.from({ length: 90 }, () => false);
  const cols = Array.from({ length: 90 }, () => false);
  const squares = Array.from({ length: 90 }, () => false);

  let cell: string;
  let cellValue: number;
  let rowIndex: number, colIndex: number, squareIndex: number;

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      cell = board[row][col];

      if (cell === ".") continue;

      cellValue = Number(cell);
      rowIndex = row * 10 + cellValue;
      colIndex = col * 10 + cellValue;
      squareIndex =
        (Math.floor(row / 3) * 3 + Math.floor(col / 3)) * 10 + cellValue;
      if (rows[rowIndex] || cols[colIndex] || squares[squareIndex]) {
        return false;
      }

      rows[rowIndex] = true;
      cols[colIndex] = true;
      squares[squareIndex] = true;
    }
  }

  return true;
}

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
);

console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
);
