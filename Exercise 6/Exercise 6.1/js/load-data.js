// ============================================
// Exercise 6.1: Load Data
// ============================================

d3.csv("data/W6_TVdata.csv", d => {
  return {
    brand: d.brand,
    model: d.model,
    star2: +d.star2,
    energyConsumption: +d.energyConsumption
  };
}).then(data => {
  
  console.log("Data loaded:", data);
  console.log("Number of TVs:", data.length);
  
  // Call the histogram function
  drawHistogram(data);
});