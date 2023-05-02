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

class Rook extends Piece {
  type = "Torre";
  get availableMoves() {
    const column = this.position[0];
    const columnIndex = boardColumns.indexOf(column);

    const row = this.position[1];
    const rowIndex = boardRows.indexOf(row);

    let availableSquares: BoardSquare[] = [];

    // Adiciona todas as casas abaixo
    for (let i = rowIndex - 1; i >= 0; i--) {
      const square: BoardSquare = [boardColumns[columnIndex], boardRows[i]];
      if (isBoardSquareInList(square, this.board.occupiedSquares)) break;
      availableSquares.push(square);
    }

    // Adiciona todas as casas acima
    for (let i = rowIndex + 1; i < 8; i++) {
      const square: BoardSquare = [boardColumns[columnIndex], boardRows[i]];
      if (isBoardSquareInList(square, this.board.occupiedSquares)) break;
      if (isBoardSquareInList(square, availableSquares)) continue;
      availableSquares.push(square);
    }

    // Adiciona todas as casas na direita
    for (let i = columnIndex + 1; i < 8; i++) {
      const square: BoardSquare = [boardColumns[i], boardRows[rowIndex]];
      if (isBoardSquareInList(square, this.board.occupiedSquares)) break;
      if (isBoardSquareInList(square, availableSquares)) continue;
      availableSquares.push(square);
    }

    // Adiciona todas as casas na esquerda
    for (let i = columnIndex - 1; i >= 0; i--) {
      const square: BoardSquare = [boardColumns[i], boardRows[rowIndex]];
      if (isBoardSquareInList(square, this.board.occupiedSquares)) break;
      if (isBoardSquareInList(square, availableSquares)) continue;
      availableSquares.push(square);
    }

    return availableSquares;
  }
}

class Board {
  pieces: Piece[] = [];

  constructor() {
    this.addPiece(new Pawn(['C', '2'], this));
    this.addPiece(new Rook(['F', '1'], this));
  }

  private addPiece(piece: Piece) {
    if (isBoardSquareInList(piece.position, this.occupiedSquares))
      return;
    this.pieces.push(piece);
  }
  get occupiedSquares() {
    return this.pieces.map((piece) => piece.position);
  }

}