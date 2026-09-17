// ============================================
// Exercise 5.1: Vertical Bar Chart with Axis
// ============================================

// ============================================
// STEP 1: Load CSV data with D3
// ============================================

d3.csv("data/Data_exercise 5.1.csv", d => {
  return {
    screenType: d.Screen_Tech,
    energyConsumption: +d["Mean(Labelled energy consumption (kWh/year))"]
  };
}).then(data => {
  
  console.log("Data loaded:", data);
  
  // Sort data by energy consumption (descending)
  data.sort((a, b) => b.energyConsumption - a.energyConsumption);
  console.log("Sorted data:", data);
  
  // Call the draw function
  drawBarChart(data);
});

// ============================================
// Draw the bar chart
// ============================================

const drawBarChart = data => {

    // ============================================
    // Margins and dimensions
    // ============================================
    
    const margin = { top: 40, right: 40, bottom: 80, left: 80 };
    const width = 800;
    const height = 500;
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // ============================================
    // Create SVG container
    // ============================================
    
    const svg = d3.select("#bar-chart")
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
    // Set up Scales
    // ============================================
    
    // X Scale (screen type - categorical)
    const xScale = d3.scaleBand()
        .domain(data.map(d => d.screenType))
        .range([0, innerWidth])
        .padding(0.2);

    // Y Scale (energy consumption - quantitative)
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.energyConsumption) * 1.1])
        .range([innerHeight, 0]);

    // ============================================
    // Add Axes
    // ============================================
    
    // X Axis
    const xAxis = d3.axisBottom(xScale);
    
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
    // Y Axis Label
    // ============================================
    
    innerChart
        .append("text")
          .attr("class", "axis-label")
          .attr("x", -innerHeight / 2)
          .attr("y", -50)
          .attr("transform", "rotate(-90)")
          .attr("text-anchor", "middle")
          .text("Average Energy Consumption (kWh/year)");

    // ============================================
    // Add Bars
    // ============================================
    
    innerChart
        .selectAll(".bar")
        .data(data)
        .join("rect")
          .attr("class", "bar")
          .attr("x", d => xScale(d.screenType))
          .attr("y", d => yScale(d.energyConsumption))
          .attr("width", xScale.bandwidth())
          .attr("height", d => innerHeight - yScale(d.energyConsumption))
          .attr("fill", "#F7A327");

    // ============================================
    // Add value labels on top of bars
    // ============================================
    
    innerChart
        .selectAll(".bar-label")
        .data(data)
        .join("text")
          .attr("class", "bar-label")
          .attr("x", d => xScale(d.screenType) + xScale.bandwidth() / 2)
          .attr("y", d => yScale(d.energyConsumption) - 8)
          .attr("text-anchor", "middle")
          .text(d => d.energyConsumption.toFixed(0));
};