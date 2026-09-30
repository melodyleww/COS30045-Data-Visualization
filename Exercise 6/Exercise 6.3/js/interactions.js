// ============================================
// Exercise 6.3: Interactions (Filters)
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
            
            // ============================================
            // MULTI-SELECT: toggle each filter independently
            // ============================================
            
            if (d.id === "all") {
                // If "all" is clicked, deactivate all specific filters
                filters.forEach(f => f.isActive = (f.id === "all"));
            } else {
                // Toggle this specific filter
                d.isActive = !d.isActive;
                
                // If any specific filter is active, deactivate "all"
                const anyActive = filters.some(f => f.id !== "all" && f.isActive);
                filters.find(f => f.id === "all").isActive = !anyActive;
            }
            
            console.log("Filter states:", filters);
            
            // ============================================
            // Update button classes
            // ============================================
            
            filtersContainer
                .selectAll("button")
                .attr("class", d => `filter-button ${d.isActive ? "active" : ""}`);
            
            // ============================================
            // Update both charts
            // ============================================
            
            updateHistogram(data);
            updateScatterplot(data);
        });
};

// ============================================
// Get filtered data based on active filters
// ============================================

const getFilteredData = data => {
    const allActive = filters.find(f => f.id === "all").isActive;
    
    if (allActive) {
        return data;
    }
    
    const activeIds = filters
        .filter(f => f.id !== "all" && f.isActive)
        .map(f => f.id);
    
    return data.filter(d => activeIds.includes(d.screenTech));
};

// ============================================
// Update histogram
// ============================================

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

// ============================================
// Update scatterplot
// ============================================

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
// Tooltip and mouse events (Exercise 6.4)
// ============================================

const createTooltip = () => {
    console.log("Tooltip created - to be built in Exercise 6.4");
};

const handleMouseEvents = () => {
    console.log("Mouse events handled - to be built in Exercise 6.4");
};