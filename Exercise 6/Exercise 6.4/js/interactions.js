// ============================================
// Exercise 6.4: Interactions (Filters + Tooltips)
// ============================================

// ============================================
// FILTERS (Exercise 6.2 & 6.3)
// ============================================

const populateFilters = data => {

    const filtersContainer = d3.select("#filters_screen");

    filtersContainer
        .selectAll("button")
        .data(filters)
        .join("button")
          .attr("class", d => `filter-button ${d.isActive ? "active" : ""}`)
          .text(d => d.label)
          .on("click", function(event, d) {
            
            if (d.id === "all") {
                filters.forEach(f => f.isActive = (f.id === "all"));
            } else {
                d.isActive = !d.isActive;
                const anyActive = filters.some(f => f.id !== "all" && f.isActive);
                filters.find(f => f.id === "all").isActive = !anyActive;
            }
            
            filtersContainer
                .selectAll("button")
                .attr("class", d => `filter-button ${d.isActive ? "active" : ""}`);
            
            updateHistogram(data);
            updateScatterplot(data);
        });
};

const getFilteredData = data => {
    const allActive = filters.find(f => f.id === "all").isActive;
    
    if (allActive) return data;
    
    const activeIds = filters
        .filter(f => f.id !== "all" && f.isActive)
        .map(f => f.id);
    
    return data.filter(d => activeIds.includes(d.screenTech));
};

const updateHistogram = data => {
    const filteredData = getFilteredData(data);
    const updatedBins = binGenerator(filteredData);
    
    d3.select("#histogram")
        .select("svg")
        .select("g")
        .selectAll(".histogram-bar")
        .data(updatedBins)
        .join("rect")
          .attr("class", "histogram-bar")
          .transition()
          .duration(500)
          .ease(d3.easeCubicOut)
          .attr("x", d => xScale(d.x0) + 1)
          .attr("y", d => yScale(d.length))
          .attr("width", d => xScale(d.x1) - xScale(d.x0) - 2)
          .attr("height", d => innerHeight - yScale(d.length))
          .attr("fill", barColor);
};

const updateScatterplot = data => {
    const filteredData = getFilteredData(data);
    
    innerChartS
        .selectAll(".scatter-point")
        .data(filteredData)
        .join("circle")
          .attr("class", "scatter-point")
          .transition()
          .duration(500)
          .ease(d3.easeCubicOut)
          .attr("cx", d => xScaleS(d.star2))
          .attr("cy", d => yScaleS(d.energyConsumption))
          .attr("r", 4)
          .attr("fill", d => colorScale(d.screenTech))
          .attr("opacity", 0.5);
};

// ============================================
// TOOLTIPS (Exercise 6.4)
// ============================================

const createTooltip = () => {

    // ============================================
    // Append tooltip group to scatterplot innerChart
    // ============================================
    
    const tooltip = innerChartS
        .append("g")
          .attr("class", "tooltip")
          .style("opacity", 0)
          .style("pointer-events", "none");

    // ============================================
    // Append tooltip background rectangle
    // ============================================
    
    tooltip
        .append("rect")
          .attr("class", "tooltip-background")
          .attr("width", tooltipWidth)
          .attr("height", tooltipHeight)
          .attr("rx", 8)
          .attr("ry", 8)
          .attr("fill", barColor)
          .attr("opacity", 0.9);

    // ============================================
    // Append tooltip text
    // ============================================
    
    tooltip
        .append("text")
          .attr("class", "tooltip-text")
          .attr("x", tooltipWidth / 2)
          .attr("y", tooltipHeight / 2)
          .attr("text-anchor", "middle")
          .attr("dominant-baseline", "middle")
          .style("font-size", "13px")
          .style("font-weight", "600")
          .style("fill", "#ffffff")
          .text("");
};

// ============================================
// Handle mouse events
// ============================================

const handleMouseEvents = () => {

    d3.selectAll(".scatter-point")
        .on("mouseenter", function(event, d) {
            
            console.log("Mouse entered:", d);
            
            // Get circle position
            const cx = +d3.select(this).attr("cx");
            const cy = +d3.select(this).attr("cy");
            
            // Update tooltip text
            d3.select(".tooltip-text")
                .text(`${d.screenSize} inches`);
            
            // Position and show tooltip
            d3.select(".tooltip")
                .attr("transform", `translate(${cx + 10}, ${cy - tooltipHeight - 5})`)
                .transition()
                .duration(200)
                .style("opacity", 1);
        })
        .on("mouseleave", function(event, d) {
            
            // Hide tooltip
            d3.select(".tooltip")
                .transition()
                .duration(200)
                .style("opacity", 0);
        });
};