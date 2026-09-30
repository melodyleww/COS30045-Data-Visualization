// ============================================
// Exercise 6.1: Histogram
// ============================================

const drawHistogram = data => {

    // ============================================
    // Create SVG container
    // ============================================
    
    const svg = d3.select("#histogram")
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
    // Generate bins
    // ============================================
    
    const bins = binGenerator(data);
    console.log("Bins created:", bins);
    console.log("Number of bins:", bins.length);

    // ============================================
    // Calculate scale domains
    // ============================================
    
    const binsMinX = bins[0].x0;
    const binsMaxX = bins[bins.length - 1].x1;
    const binsMaxLength = d3.max(bins, d => d.length);

    console.log("binsMinX:", binsMinX);
    console.log("binsMaxX:", binsMaxX);
    console.log("binsMaxLength:", binsMaxLength);

    // ============================================
    // Configure scales
    // ============================================
    
    xScale
        .domain([binsMinX, binsMaxX])
        .range([0, innerWidth]);

    yScale
        .domain([0, binsMaxLength])
        .range([innerHeight, 0]);

    // ============================================
    // Draw bars
    // ============================================
    
    innerChart
        .selectAll(".histogram-bar")
        .data(bins)
        .join("rect")
          .attr("class", "histogram-bar")
          .attr("x", d => xScale(d.x0) + 1)  // +1 for gap
          .attr("y", d => yScale(d.length))
          .attr("width", d => xScale(d.x1) - xScale(d.x0) - 2)  // -2 for gap
          .attr("height", d => innerHeight - yScale(d.length))
          .attr("fill", barColor);

    // ============================================
    // Add x axis
    // ============================================
    
    const xAxis = d3.axisBottom(xScale);
    
    innerChart
        .append("g")
          .attr("class", "axis x-axis")
          .attr("transform", `translate(0, ${innerHeight})`)
          .call(xAxis);

    // ============================================
    // Add y axis
    // ============================================
    
    const yAxis = d3.axisLeft(yScale);
    
    innerChart
        .append("g")
          .attr("class", "axis y-axis")
          .call(yAxis);

    // ============================================
    // Axis labels
    // ============================================
    
    innerChart
        .append("text")
          .attr("class", "axis-label")
          .attr("x", innerWidth / 2)
          .attr("y", innerHeight + 50)
          .attr("text-anchor", "middle")
          .text("Labelled Energy Consumption (kWh/year)");

    innerChart
        .append("text")
            .attr("class", "axis-label")
            .attr("x", 20)
            .attr("y", -10)
            .attr("text-anchor", "middle")
            .text("Frequency (Number of TVs)");
};