// ============================================
// Exercise 6.2: Load Data
// ============================================

d3.csv("data/W6_TVdata.csv", d => {
  return {
    brand: d.brand,
    model: d.model,
    star2: +d.star2,
    energyConsumption: +d.energyConsumption,
    screenTech: d.screenTech || d.screen_tech
  };
}).then(data => {
  
  console.log("Data loaded:", data);
  console.log("Number of TVs:", data.length);
  
  // Draw the histogram first
  drawHistogram(data);
  
  // Populate the filter buttons
  populateFilters(data);
});