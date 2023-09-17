/*
  * @file: tetriz.js
  * @description: inserts tetris viz into the parentElement as a playable game (WASD controls)
  * @input: parent - DOM element from the caller to insert the viz into as a child
  * @output: none
*/
const Tetriz = (parent) => {
  const d3 = require('d3');
  const GameEngine = require('./game-engine');
  const CONTAINER_ID = "tetriz";


  const CONTEXT_DIMENSIONS = {
    board: {
      width: 219.5,
      height: 350,
    },
    offset: 15
  }

  // HEADER TEXT
  d3.select(parent)
    .append("p")
    .text("<Tetriz />")
    .style("font-weight", "bold")
    .style("underline", "bold")
    .style("font-size", "24px")
    .style("margin", 0)
    .style("text-align", "center")

  // CONTAINER AND SVG CONTEXT
  d3.select(parent)
    .insert("div")
    .attr("id", CONTAINER_ID)
    .style("display", "flex")
    .style("justify-content", "center")

  d3.select('#' + CONTAINER_ID)
    .insert("svg")
    .attr("id", "tetriz-context")
    .attr("width", 45 +CONTEXT_DIMENSIONS.board.width)
    .attr("height", CONTEXT_DIMENSIONS.board.height)
    .style('background', 'radial-gradient(#fff, #ddd)')

  const context = d3.select('#tetriz-context');

  // DRAW GAME BOARD BOX
  context.append("rect", context)
    .attr("id", "game-board")
    .attr("x", CONTEXT_DIMENSIONS.offset)
    .attr("y", CONTEXT_DIMENSIONS.offset * 2)
    .attr("width", (CONTEXT_DIMENSIONS.board.width - CONTEXT_DIMENSIONS.offset) * .75 )
    .attr("height", (CONTEXT_DIMENSIONS.board.height - CONTEXT_DIMENSIONS.offset * 3))
    .style("fill", "darkgrey")
    .style("stroke", "black")
    .style("stroke-width", 2)

  // DRAW SCORE TEXT
  context.append("text")
    .attr("id", "score")
    .attr("x", CONTEXT_DIMENSIONS.offset)
    .attr("y", (CONTEXT_DIMENSIONS.offset * 2) - (CONTEXT_DIMENSIONS.offset / 2))
    .text(`> SCORE: ${0}`)
    .style("font-size", "16px")
    .style("font-weight", "bold")
    .style("font-family", "monospace")
    .style("fill", "black")

  // DRAW NEXT PIECE BOX
  context.append("rect", context)
    .attr("id", "next-piece")
    .attr("x", CONTEXT_DIMENSIONS.offset * 2 + (CONTEXT_DIMENSIONS.board.width - CONTEXT_DIMENSIONS.offset) * .75)
    .attr("y", CONTEXT_DIMENSIONS.offset * 2)
    .attr("width", 45 + CONTEXT_DIMENSIONS.board.width - (CONTEXT_DIMENSIONS.offset * 3) - ((CONTEXT_DIMENSIONS.board.width - CONTEXT_DIMENSIONS.offset) * .75))
    .attr("height", (CONTEXT_DIMENSIONS.board.height - CONTEXT_DIMENSIONS.offset * 2) / 4)
    .style("fill", "darkgrey")
    .style("stroke", "black")
    .style("stroke-width", 2)

  // DRAW NEXT PIECE TEXT
  context.append("text")
    .attr("id", "score")
    .attr("x",  CONTEXT_DIMENSIONS.offset * 2 + (CONTEXT_DIMENSIONS.board.width - CONTEXT_DIMENSIONS.offset) * .75)
    .attr("y", (CONTEXT_DIMENSIONS.offset * 2) - (CONTEXT_DIMENSIONS.offset / 2))
    .text(`> NEXT`)
    .style("font-size", "16px")
    .style("font-weight", "bold")
    .style("font-family", "monospace")
    .style("fill", "black")


  // DRAW GAME BOARD BOX GRID
  let gameBoardWidth = (CONTEXT_DIMENSIONS.board.width - CONTEXT_DIMENSIONS.offset) * .75;
  let boxWidth = (gameBoardWidth) / 10;
  for (let i = 0; i < 10; i++) {
    context.append("line")
      .attr("x1", CONTEXT_DIMENSIONS.offset + (boxWidth)*(i))
      .attr("y1", CONTEXT_DIMENSIONS.offset * 2)
      .attr("x2", CONTEXT_DIMENSIONS.offset + boxWidth*(i))
      .attr("y2", CONTEXT_DIMENSIONS.board.height - CONTEXT_DIMENSIONS.offset)
      .style("stroke", "black")
      .style("stroke-width", 1)
  }

  let gameBoardHeight = (CONTEXT_DIMENSIONS.board.height - CONTEXT_DIMENSIONS.offset * 3);
  let boxHeight = (gameBoardHeight) / 20;
  for (let i = 0; i < 20; i++) {
    context.append("line")
      .attr("x1", CONTEXT_DIMENSIONS.offset)
      .attr("y1", CONTEXT_DIMENSIONS.offset * 2 + boxHeight*(i))
      .attr("x2", CONTEXT_DIMENSIONS.offset + gameBoardWidth)
      .attr("y2", CONTEXT_DIMENSIONS.offset * 2 + boxHeight*(i))
      .style("stroke", "black")
      .style("stroke-width", 1)

  }

  // FILL BOX COORDINATE WITH SQUARE
  context.append("rect", context)
    .attr("x", 2 + CONTEXT_DIMENSIONS.offset)
    .attr("y", 2 + CONTEXT_DIMENSIONS.offset * 2)
    .attr("width", boxWidth- 4)
    .attr("height", boxHeight-4)
    .attr("fill", "red")
}

module.exports = Tetriz;
