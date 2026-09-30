// ============================================
// Exercise 6.2: Interactions (Filters + Extensions)
// ============================================

// ============================================
// Screen Technology Filter (multi-select)
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
            
            console.log("Filter states:", filters);
            
            filtersContainer
                .selectAll("button")
                .attr("class", d => `filter-button ${d.isActive ? "active" : ""}`);
            
            updateHistogram(data);
        });
};

// ============================================
// Screen Size Filter (single-select) — EXTENSION
// ============================================

const populateSizeFilters = data => {

    const sizeFiltersContainer = d3.select("#filters_size");

    sizeFiltersContainer
        .selectAll("button")
        .data(sizeFilters)
        .join("button")
          .attr("class", d => `filter-button ${d.isActive ? "active" : ""}`)
          .text(d => d.label)
          .on("click", function(event, d) {
            
            // Single-select: only one active at a time
            sizeFilters.forEach(f => f.isActive = false);
            d.isActive = true;
            
            console.log("Size filter states:", sizeFilters);
            
            sizeFiltersContainer
                .selectAll("button")
                .attr("class", d => `filter-button ${d.isActive ? "active" : ""}`);
            
            updateHistogram(data);
        });
};

// ============================================
// Get filtered data (combined filters)
// ============================================

const getFilteredData = data => {

    // ============================================
    // Tech filter (multi-select)
    // ============================================
    
    const allTechActive = filters.find(f => f.id === "all").isActive;
    let filtered = data;
    
    if (!allTechActive) {
        const activeTechIds = filters
            .filter(f => f.id !== "all" && f.isActive)
            .map(f => f.id);
        
        filtered = filtered.filter(d => activeTechIds.includes(d.screenTech));
    }
    
    // ============================================
    // Size filter (single-select)
    // ============================================
    
    const allSizeActive = sizeFilters.find(f => f.id === "all-sizes").isActive;
    
    if (!allSizeActive) {
        const activeSize = sizeFilters.find(f => f.isActive);
        filtered = filtered.filter(d => 
            Math.round(d.screenSize) === activeSize.size
        );
    }
    
    return filtered;
};

// ============================================
// Update histogram
// ============================================

const updateHistogram = data => {

    const filteredData = getFilteredData(data);
    
    console.log("Filtered data length:", filteredData.length);
    
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