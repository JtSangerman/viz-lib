module.exports = class GameEngine {
  constructor() {
    this.grid = new GameGrid();
    this.pieces = [];
    this.isGameOverAsync = false;
    this.score = 0;
  }
};

class GameGrid {
  constructor(SIZE = 32){
    this.SIZE = SIZE;
  }
}

class GamePiece {
  constructor(type) {
    this.type = type;
  }
}

const GamePieceTypes = {
  O: "O",
  L: "L",
  J: "J",
  I: "I",
  S: "S",
  Z: "Z",
  T: "T"
}
