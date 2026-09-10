// ============================================
// Exercise 4.4: Load data from CSV
// ============================================

// ============================================
// STEP 1 & 2: Load CSV data with D3
// ============================================

d3.csv("data/tvBrandCount.csv", d => {
  return {
    brand: d.brand,
    count: +d.count // Convert to number
  };
}).then(data => {
  
  // ============================================
  // STEP 3: Finding information about the data set
  // ============================================
  
  console.log("Data loaded:", data);
  console.log("Number of brands:", data.length);
  console.log("Max count:", d3.max(data, d => d.count));
  console.log("Min count:", d3.min(data, d => d.count));
  console.log("Extent (min, max):", d3.extent(data, d => d.count));
  
  // ============================================
  // Sort data (descending by count)
  // ============================================
  
  data.sort((a, b) => b.count - a.count);
  console.log("Sorted data:", data);
  
  // ============================================
  // Call drawBarChart function (to be built in Exercise 4.5)
  // ============================================
  
  drawBarChart(data);
});

// ============================================
// Placeholder for drawBarChart (will build in Exercise 4.5)
// ============================================

function drawBarChart(data) {
  // This will be built in the next exercise
  console.log("drawBarChart called with:", data);
}