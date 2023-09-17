const MatrixImage = (parent) => {
  const d3 = require("d3");

  const width = 640;
  const height = 400;
  const marginTop = 20;
  const marginRight = 20;
  const marginBottom = 30;
  const marginLeft = 40;

  // Create and append header
  d3.select(parent)
    .append("div")
    .text("<MatrixImage />")
    .style("font-weight", "bold")
    .style("underline", "bold")
    .style("font-size", "24px")
    .style("margin", 0)
    .style("display", "flex")
    .style("justify-content", "center")

  // Declare the x (horizontal position) scale.
  const x = d3.scaleUtc()
    .domain([new Date("2023-01-01"), new Date("2024-01-01")])
    .range([marginLeft, width - marginRight]);

  // Declare the y (vertical position) scale.
  const y = d3.scaleLinear()
    .domain([0, 100])
    .range([height - marginBottom, marginTop]);

  // Create the SVG container.
  const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height);

  // Add the x-axis.
  svg.append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x));

  // Add the y-axis.
  svg.append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y));

  // d3
  //   .select('#demos')
  //   .append(svg.node())
  parent.appendChild(svg.node())
}

module.exports = MatrixImage;
