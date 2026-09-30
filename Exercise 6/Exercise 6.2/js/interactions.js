// ============================================
// Exercise 6.2: Interactions (Filters)
// ============================================

const populateFilters = data => {

    // ============================================
    // Select the filter container
    // ============================================
    
    const filtersContainer = d3.select("#filters_screen");

    // ============================================
    // Add filter buttons
    // ============================================
    
    filtersContainer
        .selectAll("button")
        .data(filters)
        .join("button")
          .attr("class", d => `filter-button ${d.isActive ? "active" : ""}`)
          .text(d => d.label)
          .on("click", function(event, d) {
            
            // ============================================
            // Toggle the isActive state
            // ============================================
            
            // If "all" is clicked, set it to active and all others to false
            if (d.id === "all") {
                filters.forEach(f => f.isActive = (f.id === "all"));
            } else {
                // Toggle this filter
                d.isActive = !d.isActive;
                
                // If any specific filter is active, deactivate "all"
                const anyActive = filters.some(f => f.id !== "all" && f.isActive);
                filters.find(f => f.id === "all").isActive = !anyActive;
            }
            
            console.log("Filter states:", filters);
            
            // ============================================
            // Update button classes (visual state)
            // ============================================
            
            filtersContainer
                .selectAll("button")
                .attr("class", d => `filter-button ${d.isActive ? "active" : ""}`);
            
            // ============================================
            // Update the histogram
            // ============================================
            
            updateHistogram(data);
        });
};

// ============================================
// Update histogram based on active filters
// ============================================

const updateHistogram = data => {

    // ============================================
    // Filter the data based on active filters
    // ============================================
    
    // Check if "all" is active
    const allActive = filters.find(f => f.id === "all").isActive;
    
    let filteredData;
    
    if (allActive) {
        // No filter - use all data
        filteredData = data;
    } else {
        // Get all active filter ids (excluding "all")
        const activeIds = filters
            .filter(f => f.id !== "all" && f.isActive)
            .map(f => f.id);
        
        // Filter data by active screen techs
        filteredData = data.filter(d => 
            activeIds.includes(d.screenTech.toLowerCase())
        );
    }
    
    console.log("Filtered data length:", filteredData.length);
    
    // ============================================
    // Regenerate bins from filtered data
    // ============================================
    
    const updatedBins = binGenerator(filteredData);
    
    // ============================================
    // Update the bars with transitions
    // ============================================
    
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