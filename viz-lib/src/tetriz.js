/*
  * @file: tetriz.js
  * @description: inserts tetris viz into the parentElement as a playable game (WASD controls)
  * @input: parent - DOM element from the caller to insert the viz into as a child
  * @output: none
*/
const Tetriz = (parent) => {
  const d3 = require('d3');

  d3.select(parent)
    .append("div")
    .text("<Tetriz />")
    .style("font-weight", "bold")
    .style("underline", "bold")
    .style("font-size", "24px")
    .style("margin", 0)
    .style("display", "flex")
    .style("justify-content", "center")

  let svg = d3
    .create("svg")
    .attr("width", '100%')
    .attr("height", '350px')
    .style('background', 'radial-gradient(#fff, #ddd)')

  parent.appendChild(svg.node());
}



module.exports = Tetriz;
