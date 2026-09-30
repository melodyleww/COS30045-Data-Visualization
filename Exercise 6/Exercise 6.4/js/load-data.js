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
  
  // Draw the histogram
  drawHistogram(data);
  
  // Draw the scatterplot
  drawScatterplot(data);
  
  // Populate the filter buttons
  populateFilters(data);
  
  // Create tooltip and attach mouse events
  createTooltip();
  handleMouseEvents();
});