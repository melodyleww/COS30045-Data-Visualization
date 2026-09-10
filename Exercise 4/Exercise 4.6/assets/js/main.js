// ============================================
// Exercise 4.6: Scaling charts
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
  // Create SVG with smaller viewBox to test scaling
  // ============================================
  
  const svg = d3.select(".responsive-svg-container")
      .append("svg")
        .attr("viewBox", "0 0 500 1600")
        .style("border", "1px solid black");
  
  // Call the draw function
  drawBarChart(data, svg);
});

// ============================================
// STEP 1 & 2 & 3: Draw the bar chart with scales
// ============================================

const drawBarChart = (data, svg) => {

    // ============================================
    // STEP 1: Add Linear scale for count data (x-axis)
    // ============================================
    
    const xScale = d3.scaleLinear()
      .domain([0, 1200])
      .range([0, 400]);
    
    // ============================================
    // STEP 2: Add Band scale for brands (y-axis)
    // ============================================
    
    const yScale = d3.scaleBand()
      .domain(data.map(d => d.brand))
      .range([0, 1600])
      .padding(0.1); // Add padding between bars
    
    // ============================================
    // Bind data to rectangles
    // ============================================
    
    svg
      .selectAll("rect")
      .data(data)
      .join("rect")
        .attr("class", d => `bar bar-${d.count}`)
        .attr("x", 0)
        .attr("y", (d, i) => yScale(d.brand))
        .attr("width", d => xScale(d.count))
        .attr("height", yScale.bandwidth())
        .attr("fill", "#F7A327");
};