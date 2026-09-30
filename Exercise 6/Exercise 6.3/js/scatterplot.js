// ============================================
// Exercise 6.3: Scatterplot
// ============================================

const drawScatterplot = data => {

    // ============================================
    // Create SVG container
    // ============================================
    
    const svg = d3.select("#scatterplot")
        .append("svg")
          .attr("viewBox", `0 0 ${width} ${height}`)
          .style("border", "1px solid black");

    // ============================================
    // Create inner chart group with margins
    // ============================================
    
    innerChartS = svg
        .append("g")
          .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // ============================================
    // Set up scales
    // ============================================
    
    // X Scale (Star Rating)
    const maxStar = d3.max(data, d => d.star2);
    const minStar = d3.min(data, d => d.star2);
    
    xScaleS
        .domain([minStar, maxStar])
        .range([0, innerWidth]);

    // Y Scale (Energy Consumption)
    const maxEnergy = d3.max(data, d => d.energyConsumption);
    
    yScaleS
        .domain([0, maxEnergy])
        .range([innerHeight, 0]);

    // ============================================
    // Draw circles (data points)
    // ============================================
    
    innerChartS
        .selectAll(".scatter-point")
        .data(data)
        .join("circle")
          .attr("class", "scatter-point")
          .attr("cx", d => xScaleS(d.star2))
          .attr("cy", d => yScaleS(d.energyConsumption))
          .attr("r", 4)
          .attr("fill", d => colorScale(d.screenTech))
          .attr("opacity", 0.5);

    // ============================================
    // Add x axis
    // ============================================
    
    const xAxis = d3.axisBottom(xScaleS);
    
    innerChartS
        .append("g")
          .attr("class", "axis x-axis")
          .attr("transform", `translate(0, ${innerHeight})`)
          .call(xAxis);

    // ============================================
    // Add y axis
    // ============================================
    
    const yAxis = d3.axisLeft(yScaleS);
    
    innerChartS
        .append("g")
          .attr("class", "axis y-axis")
          .call(yAxis);

    // ============================================
    // Axis labels
    // ============================================
    
    // X Axis Label
    innerChartS
        .append("text")
          .attr("class", "axis-label")
          .attr("x", innerWidth / 2)
          .attr("y", innerHeight + 50)
          .attr("text-anchor", "middle")
          .text("Star Rating");

    // Y Axis Label (rotated vertically)
    innerChartS
        .append("text")
            .attr("class", "axis-label")
            .attr("x", -55)
            .attr("y", -10)
            .attr("text-anchor", "start")
            .text("Labelled Energy Consumption (kWh/year)");

    // ============================================
    // Add legend
    // ============================================
    
    const legend = innerChartS
        .append("g")
          .attr("class", "legend")
          .attr("transform", `translate(${innerWidth - 150}, 20)`);

    const legendItems = legend
        .selectAll(".legend-item")
        .data(colorScale.domain())
        .join("g")
          .attr("class", "legend-item")
          .attr("transform", (d, i) => `translate(0, ${i * 25})`);

    // Coloured rectangle
    legendItems
        .append("rect")
          .attr("width", 16)
          .attr("height", 16)
          .attr("rx", 3)
          .attr("fill", d => colorScale(d));

    // Label text
    legendItems
        .append("text")
          .attr("x", 24)
          .attr("y", 13)
          .style("font-size", "12px")
          .style("fill", "#333")
          .text(d => d.charAt(0).toUpperCase() + d.slice(1));
};