// ============================================
// Exercise 6.4: Interactions
// ============================================

// ============================================
// HISTOGRAM FILTERS (Screen Technology)
// ============================================

const populateTechFilters = data => {

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
            
            // Only update histogram
            updateHistogram(data);
        });
};

const getTechFilteredData = data => {
    const allActive = filters.find(f => f.id === "all").isActive;
    if (allActive) return data;
    
    const activeIds = filters
        .filter(f => f.id !== "all" && f.isActive)
        .map(f => f.id);
    
    return data.filter(d => activeIds.includes(d.screenTech));
};

// ============================================
// SCATTERPLOT FILTERS (Screen Size)
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
            
            // Single-select for size
            sizeFilters.forEach(f => f.isActive = false);
            d.isActive = true;
            
            sizeFiltersContainer
                .selectAll("button")
                .attr("class", d => `filter-button ${d.isActive ? "active" : ""}`);
            
            // Only update scatterplot
            updateScatterplot(data);
        });
};

const getSizeFilteredData = data => {
    const allActive = sizeFilters.find(f => f.id === "all-sizes").isActive;
    if (allActive) return data;
    
    const activeId = sizeFilters.find(f => f.isActive).id;
    
    if (activeId === "small") {
        return data.filter(d => d.screenSize > 0 && d.screenSize < 43);
    } else if (activeId === "medium") {
        return data.filter(d => d.screenSize >= 43 && d.screenSize <= 65);
    } else if (activeId === "large") {
        return data.filter(d => d.screenSize > 65);
    }
    
    return data;
};

// ============================================
// UPDATE HISTOGRAM
// ============================================

const updateHistogram = data => {

    const filteredData = getTechFilteredData(data);
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
    
    // Reattach hover events to new bars
    handleHistogramMouseEvents();
};

// ============================================
// UPDATE SCATTERPLOT
// ============================================

const updateScatterplot = data => {

    const filteredData = getSizeFilteredData(data);
    
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
    
    // Reattach hover events to new points
    handleMouseEvents();
};

// ============================================
// TOOLTIPS — Scatterplot
// ============================================

const createTooltip = () => {

    const tooltip = innerChartS
        .append("g")
          .attr("class", "tooltip")
          .style("opacity", 0)
          .style("pointer-events", "none");

    tooltip
        .append("rect")
          .attr("class", "tooltip-background")
          .attr("width", tooltipWidth)
          .attr("height", tooltipHeight)
          .attr("rx", 8)
          .attr("ry", 8)
          .attr("fill", barColor)
          .attr("opacity", 0.95);

    // Line 1: Brand
    tooltip
        .append("text")
          .attr("class", "tooltip-brand")
          .attr("x", 15)
          .attr("y", 25)
          .style("font-size", "13px")
          .style("font-weight", "700")
          .style("fill", "#ffffff")
          .text("");

    // Line 2: Model
    tooltip
        .append("text")
          .attr("class", "tooltip-model")
          .attr("x", 15)
          .attr("y", 47)
          .style("font-size", "12px")
          .style("fill", "#ffffff")
          .text("");

    // Line 3: Screen size
    tooltip
        .append("text")
          .attr("class", "tooltip-size")
          .attr("x", 15)
          .attr("y", 67)
          .style("font-size", "12px")
          .style("fill", "#ffffff")
          .text("");
};

const handleMouseEvents = () => {

    d3.selectAll(".scatter-point")
        .on("mouseenter", function(event, d) {
            
            const cx = +d3.select(this).attr("cx");
            const cy = +d3.select(this).attr("cy");
            
            d3.select(".tooltip-brand").text(`📺 ${d.brand}`);
            d3.select(".tooltip-model").text(`Model: ${d.model}`);
            d3.select(".tooltip-size").text(`Size: ${d.screenSize}"`);
            
            d3.select(".tooltip")
                .attr("transform", `translate(${cx + 10}, ${cy - 95})`)
                .transition()
                .duration(200)
                .style("opacity", 1);
        })
        .on("mouseleave", function(event, d) {
            
            d3.select(".tooltip")
                .transition()
                .duration(200)
                .style("opacity", 0);
        });
};

// ============================================
// TOOLTIPS — Histogram
// ============================================

const createHistogramTooltip = () => {

    const tooltip = innerChart
        .append("g")
          .attr("class", "histogram-tooltip")
          .style("opacity", 0)
          .style("pointer-events", "none");

    tooltip
        .append("rect")
          .attr("width", 180)
          .attr("height", 55)
          .attr("rx", 8)
          .attr("ry", 8)
          .attr("fill", barHoverColor)
          .attr("opacity", 0.95);

    tooltip
        .append("text")
          .attr("class", "histogram-tooltip-range")
          .attr("x", 12)
          .attr("y", 22)
          .style("font-size", "12px")
          .style("font-weight", "600")
          .style("fill", "#ffffff")
          .text("");

    tooltip
        .append("text")
          .attr("class", "histogram-tooltip-count")
          .attr("x", 12)
          .attr("y", 42)
          .style("font-size", "12px")
          .style("fill", "#ffffff")
          .text("");
};

const handleHistogramMouseEvents = () => {

    d3.selectAll(".histogram-bar")
        .on("mouseenter", function(event, d) {
            
            const bx = +d3.select(this).attr("x");
            const by = +d3.select(this).attr("y");
            const bw = +d3.select(this).attr("width");
            const bh = +d3.select(this).attr("height");
            
            // Update tooltip text
            d3.select(".histogram-tooltip-range")
                .text(`Range: ${d.x0.toFixed(0)} – ${d.x1.toFixed(0)} kWh`);
            
            d3.select(".histogram-tooltip-count")
                .text(`TVs: ${d.length}`);
            
            // ============================================
            // Smart positioning: flip below if too tall
            // ============================================
            
            const tooltipX = bx + bw / 2 - 90;
            const tooltipH = 55;
            
            let tooltipY;
            
            if (by < tooltipH + 20) {
                // Bar is too tall — place tooltip below the bar top
                tooltipY = by + 15;
            } else {
                // Normal — place tooltip above the bar
                tooltipY = by - tooltipH - 10;
            }
            
            d3.select(".histogram-tooltip")
                .attr("transform", `translate(${tooltipX}, ${tooltipY})`)
                .transition()
                .duration(200)
                .style("opacity", 1);
        })
        .on("mouseleave", function(event, d) {
            
            d3.select(".histogram-tooltip")
                .transition()
                .duration(200)
                .style("opacity", 0);
        });
};