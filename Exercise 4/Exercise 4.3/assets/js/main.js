// ============================================
// Exercise 4.3: D3 Setup
// ============================================

// ============================================
// STEP 2: Create SVG object in responsive container
// ============================================

const svg = d3.select(".responsive-svg-container")
    .append("svg")
      .attr("viewBox", "0 0 1200 1600")
      .style("border", "1px solid black");

// ============================================
// STEP 3: Add a test SVG rectangle
// ============================================

svg
  .append("rect")
    .attr("x", 10)
    .attr("y", 10)
    .attr("width", 414)
    .attr("height", 16)
    .attr("fill", "blue");