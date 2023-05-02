type BoardColumn = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
type BoardRow = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
type BoardSquare = [BoardColumn, BoardRow];

const boardColumns: BoardColumn[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const boardRows: BoardRow[] = ['1', '2', '3', '4', '5', '6', '7', '8'];

const isBoardSquareInList = (element: BoardSquare, list: BoardSquare[]) =>
  list.some(e => element[0] === e[0] && element[1] === e[1]);

abstract class Piece {
  protected _position: BoardSquare;
  abstract type: string;

  constructor(position: BoardSquare, protected board: Board) {
    this._position = position;
  };

  get position() { return this._position; }
  abstract get availableMoves(): BoardSquare[];

  move(newPosition: BoardSquare) {
    console.log(
      `MOVENDO ${this.type} DA CASA ${this._position} PARA A CASA ${newPosition}`
    );
    if (!isBoardSquareInList(newPosition, this.availableMoves)) return false;
    this._position = newPosition;
    return true;
  }
}

class Pawn extends Piece {
  type = 'Peão';
  get availableMoves() {
    const column = this.position[0];
    const row = this.position[1];
    const rowIndex = boardRows.indexOf(row);
    if (rowIndex === 7)
      return [];

    const nextSquare: BoardSquare = [column, boardRows[rowIndex + 1]];
    if (isBoardSquareInList(nextSquare, this.board.occupiedSquares))
      return [];

    return [nextSquare];
  }
}