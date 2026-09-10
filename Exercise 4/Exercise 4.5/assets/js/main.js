// ============================================
// Exercise 4.5: D3 Binding and drawing with data
// ============================================

// ============================================
// STEP 1: Load CSV data with D3
// ============================================

d3.csv("data/tvBrandCount.csv", d => {
  return {
    brand: d.brand,
    count: +d.count
  };
}).then(data => {
  
  console.log("Data loaded:", data);
  console.log("Number of brands:", data.length);
  console.log("Max count:", d3.max(data, d => d.count));
  console.log("Min count:", d3.min(data, d => d.count));
  console.log("Extent (min, max):", d3.extent(data, d => d.count));
  
  // Sort data (descending by count)
  data.sort((a, b) => b.count - a.count);
  console.log("Sorted data:", data);
  
  // ============================================
  // Create SVG (fixed viewBox per exercise instructions)
  // ============================================
  
  const svg = d3.select(".responsive-svg-container")
      .append("svg")
        .attr("viewBox", "0 0 1200 1600")
        .style("border", "1px solid black");
  
  // Call the draw function
  drawBarChart(data, svg);
});

// ============================================
// STEP 1 & 2 & 3: Draw the bar chart
// ============================================

const drawBarChart = (data, svg) => {

    // Constant for bar height and spacing
    const barHeight = 20;
    const barSpacing = 5;
    
    // Bind data to rectangles
    svg
      .selectAll("rect")
      .data(data)
      .join("rect")
        .attr("class", d => `bar bar-${d.count}`)
        .attr("x", 0)
        .attr("y", (d, i) => i * (barHeight + barSpacing))
        .attr("width", d => d.count)
        .attr("height", barHeight)
        .attr("fill", "#F7A327");
};