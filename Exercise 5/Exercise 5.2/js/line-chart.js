// ============================================
// Exercise 5.2: Scatter Plot and Line Chart
// ============================================

// ============================================
// STEP 1: Load CSV data with D3
// ============================================

d3.csv("data/ARE_Spot_Prices.csv", d => {
  return {
    year: +d.Year,
    avgPrice: +d["Average Price (notTas-Snowy)"]
  };
}).then(data => {
  
  console.log("Data loaded:", data);
  console.log("Number of years:", data.length);
  console.log("Year extent:", d3.extent(data, d => d.year));
  console.log("Price extent:", d3.extent(data, d => d.avgPrice));
  
  // Sort data by year (ascending)
  data.sort((a, b) => a.year - b.year);
  console.log("Sorted data:", data);
  
  // Call the draw function
  drawLineChart(data);
});

// ============================================
// Draw the line chart
// ============================================

const drawLineChart = data => {

    // ============================================
    // Margins and dimensions (same as 5.1)
    // ============================================
    
    const margin = { top: 40, right: 40, bottom: 80, left: 80 };
    const width = 800;
    const height = 500;
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // ============================================
    // Create SVG container
    // ============================================
    
    const svg = d3.select("#line-chart")
        .append("svg")
          .attr("viewBox", `0 0 ${width} ${height}`)
          .style("border", "1px solid black");

    // ============================================
    // Create inner chart group with margins
    // ============================================
    
    const innerChart = svg
        .append("g")
          .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // ============================================
    // Set up Scales (both Linear)
    // ============================================
    
    // X Scale (Year - continuous)
    const xScale = d3.scaleLinear()
        .domain(d3.extent(data, d => d.year))
        .range([0, innerWidth]);

    // Y Scale (Average Price - continuous)
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.avgPrice) * 1.1])
        .range([innerHeight, 0]);

    // ============================================
    // Add Axes
    // ============================================
    
    // X Axis (force integer ticks for years)
    const xAxis = d3.axisBottom(xScale)
        .tickFormat(d3.format("d"))
        .ticks(10);  // Limit number of ticks
    
    innerChart
        .append("g")
          .attr("class", "axis x-axis")
          .attr("transform", `translate(0, ${innerHeight})`)
          .call(xAxis);

    // Y Axis
    const yAxis = d3.axisLeft(yScale);
    
    innerChart
        .append("g")
          .attr("class", "axis y-axis")
          .call(yAxis);

    // ============================================
    // Axis Labels
    // ============================================
    
    // Y Axis Label
    innerChart
        .append("text")
          .attr("class", "axis-label")
          .attr("x", -innerHeight / 2)
          .attr("y", -50)
          .attr("transform", "rotate(-90)")
          .attr("text-anchor", "middle")
          .text("Average Spot Price (AUD/MWh)");

    // X Axis Label
    innerChart
        .append("text")
          .attr("class", "axis-label")
          .attr("x", innerWidth / 2)
          .attr("y", innerHeight + 50)
          .attr("text-anchor", "middle")
          .text("Year");

    // ============================================
    // STEP 2: Draw a Scatter Plot
    // ============================================
    
    innerChart
        .selectAll("circle")
        .data(data)
        .join("circle")
          .attr("class", "data-point")
          .attr("cx", d => xScale(d.year))
          .attr("cy", d => yScale(d.avgPrice))
          .attr("r", 4)
          .attr("fill", "#F7A327");

    // ============================================
    // STEP 3: Draw a Line
    // ============================================
    
    // Create the line generator
    const lineGenerator = d3.line()
        .x(d => xScale(d.year))
        .y(d => yScale(d.avgPrice));

    // Draw the line as a path
    innerChart
        .append("path")
          .datum(data)
          .attr("class", "line")
          .attr("d", lineGenerator)
          .attr("fill", "none")
          .attr("stroke", "#81663E")
          .attr("stroke-width", 2.5);
};