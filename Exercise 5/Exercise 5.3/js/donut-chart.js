// ============================================
// Exercise 5.3: Donut Chart
// ============================================

// ============================================
// STEP 1: Load CSV data with D3
// ============================================

d3.csv("data/Data_exercise 5.3.csv", d => {
  return {
    category: d.Screensize_Category,
    count: +d.Count
  };
}).then(data => {
  
  console.log("Data loaded:", data);
  console.log("Number of categories:", data.length);
  console.log("Total count:", d3.sum(data, d => d.count));
  
  // Call the draw function
  drawDonutChart(data);
});

// ============================================
// Draw the donut chart
// ============================================

const drawDonutChart = data => {

    // ============================================
    // Dimensions and radius
    // ============================================
    
    const width = 800;
    const height = 500;
    const margin = 40;
    
    // Calculate radius based on shortest side
    const radius = Math.min(width, height) / 2 - margin;
    
    // Inner radius (60% of outer)
    const innerRadius = radius * 0.6;

    // ============================================
    // Create SVG container
    // ============================================
    
    const svg = d3.select("#donut-chart")
        .append("svg")
          .attr("viewBox", `0 0 ${width} ${height}`)
          .style("border", "1px solid black");

    // ============================================
    // Create inner chart group (centered)
    // ============================================
    
    const innerChart = svg
        .append("g")
          .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // ============================================
    // Colour scale (ordinal)
    // ============================================
    
    const colorScale = d3.scaleOrdinal()
        .domain(data.map(d => d.category))
        .range(["#F7A327", "#81663E", "#DCC8A8"]);

    // ============================================
    // Pie function (calculate angles)
    // ============================================
    
    const pie = d3.pie()
        .value(d => d.count)
        .sort(null);  // Keep data order

    // ============================================
    // Arc generator (draw arcs)
    // ============================================
    
    const arcGenerator = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(radius)
        .padAngle(0.02)
        .cornerRadius(5);

    // ============================================
    // Draw the arcs
    // ============================================
    
    innerChart
        .selectAll("path")
        .data(pie(data))
        .join("path")
          .attr("class", "donut-arc")
          .attr("d", arcGenerator)
          .attr("fill", d => colorScale(d.data.category))
          .attr("stroke", "#ffffff")
          .attr("stroke-width", 2);

    // ============================================
    // Add labels
    // ============================================
    
    innerChart
        .selectAll("text")
        .data(pie(data))
        .join("text")
          .attr("class", "donut-label")
          .attr("transform", d => `translate(${arcGenerator.centroid(d)})`)
          .attr("text-anchor", "middle")
          .attr("dy", "0.35em")
          .style("font-size", "14px")
          .style("font-weight", "600")
          .style("fill", "#ffffff")
          .text(d => d.data.category);
};