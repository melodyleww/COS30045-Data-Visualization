// ============================================
// Exercise 4.7: Adding labels
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
  // Create SVG
  // ============================================
  
  const svg = d3.select(".responsive-svg-container")
      .append("svg")
        .attr("viewBox", "0 0 600 700")
        .style("border", "1px solid black");
  
  // Call the draw function
  drawBarChart(data, svg);
});

// ============================================
// Draw the bar chart with labels
// ============================================

const drawBarChart = (data, svg) => {

    // ============================================
    // STEP 1: Add Linear scale for count data (x-axis)
    // ============================================
    
    const xScale = d3.scaleLinear()
      .domain([0, 1200])
      .range([100, 500]);  // Start at 100 to make room for labels
    
    // ============================================
    // STEP 2: Add Band scale for brands (y-axis)
    // ============================================
    
    const yScale = d3.scaleBand()
      .domain(data.map(d => d.brand))
      .range([0, 700])
      .padding(0.1);
    
    // ============================================
    // STEP 2: Create group container for bars AND labels
    // ============================================
    
    const barAndLabel = svg
      .selectAll("g")
      .data(data)
      .join("g")
        .attr("transform", d => `translate(0, ${yScale(d.brand)})`);
    
    // ============================================
    // STEP 3: Add rectangles inside the group
    // ============================================
    
    barAndLabel
      .append("rect")
        .attr("class", d => `bar bar-${d.count}`)
        .attr("x", 100)
        .attr("y", 0)
        .attr("width", d => xScale(d.count) - 100)
        .attr("height", yScale.bandwidth())
        .attr("fill", "#F7A327");
    
    // ============================================
    // STEP 4: Add brand name labels
    // ============================================
    
    barAndLabel
      .append("text")
        .text(d => d.brand)
        .attr("x", 90)
        .attr("y", yScale.bandwidth() / 2 + 5)
        .attr("text-anchor", "end")
        .style("font-size", "13px")
        .style("fill", "#333");
    
    // ============================================
    // STEP 5: Add count value labels
    // ============================================
    
    barAndLabel
      .append("text")
        .text(d => d.count)
        .attr("x", d => xScale(d.count) + 5)
        .attr("y", yScale.bandwidth() / 2 + 5)
        .style("font-size", "13px")
        .style("fill", "#81663E")
        .style("font-weight", "500");
};