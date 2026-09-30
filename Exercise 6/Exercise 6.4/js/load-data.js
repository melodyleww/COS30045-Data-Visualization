// ============================================
// Exercise 6.4: Load Data
// ============================================

d3.csv("data/W6_TVdata.csv", d => {
  return {
    brand: d.brand,
    model: d.model,
    star2: +d.star,
    energyConsumption: +d.energyConsumption,
    screenTech: (d.screenTech || d.screen_tech || "").toLowerCase(),
    screenSize: +d.screenSize || +d.screen_size || 0
  };
}).then(data => {
  
  console.log("Data loaded:", data);
  console.log("Number of TVs:", data.length);
  
  // Draw charts
  drawHistogram(data);
  drawScatterplot(data);
  
  // Populate filters
  populateTechFilters(data);    // For histogram
  populateSizeFilters(data);    // For scatterplot
  
  // Tooltips
  createTooltip();
  handleMouseEvents();
  createHistogramTooltip();
  handleHistogramMouseEvents();
});