
const Bubbl = () => {
  const d3 = require("d3");

  let nextHue = 0;
  let span = 100;
  let hueIdx = 1;

  let svg = d3
      .select("#demos")
      .append("div")
      .text("<Bubbl />")
      .style("font-size", "22px")
      .style("text-align", "center")
      .style("margin", 0)
      .append("svg")
      .attr("width", '100%')
      .attr("height", '350px')
      .style('background', 'radial-gradient(#fff, #ddd)')
      .on("mousemove", (e) => cursorCircle(e, 30, 400))
      .on("mousedown", (e) => cursorBurst(e, 1000, 2000));

  let hueText = svg
      .append("text")
      .attr("font-size", "28px")
      .attr("x", 20)
      .attr("y", 50)
      .attr('border', '3px solid black')
      .text(`hue range: [${hueIdx}-${hueIdx + span}]`)
      .attr("fill", d3.hsl(hueIdx + span, 1, 0.5));

  let forward = true;
  function cycle() {
      let endHue = forward ? hueIdx + span : hueIdx;
      forward = !forward;
      hueText
          .transition()
          .attr("fill", d3.hsl(1 + endHue, 1, 0.5))
          .duration(1000)
          .on("end", cycle);
  }
  cycle();

  let cursorCircle = (e, radius, duration) => {
      let m = d3.pointer(e);

      svg.insert("circle", "svg")
          .attr("cx", m[0])
          .attr("cy", m[1])
          .attr("r", 1e-6)
          .style(
              "stroke",
              d3.hsl((nextHue = hueIdx + ((nextHue + 1) % span)), 1, 0.5)
          )
          .style("stroke-opacity", 1)
          .transition()
          .duration(duration)
          .ease((x) => 0.5 * +x)
          .attr("r", radius)
          .style("stroke-opacity", 1e-6)
          .remove();
  };

  let cursorBurst = (e, radius, duration) => {
      cursorCircle(e, radius, duration);
      hueIdx = (hueIdx + span) % 360;
      hueText.text(
          `hue range: [${hueIdx}-${
              hueIdx + span > 360 ? 360 : hueIdx + span
          }]`
      );
  };
}

module.exports = Bubbl;
