// ============================================
// Exercise 4.2: Manipulate and Add Elements with D3
// ============================================

// ============================================
// STEP 2: Apply styles using D3
// ============================================

// Select the main heading and change its colour
d3.select("h1")
  .style("color", "#F7A327")
  .style("transition", "color 0.5s ease");

// Select all h2 headings and style them
d3.selectAll("h2")
  .style("color", "#81663E")
  .style("border-bottom", "2px solid #F7A327")
  .style("padding-bottom", "0.5rem");

// Select all paragraph elements and style them
d3.selectAll("p")
  .style("font-size", "1rem")
  .style("line-height", "1.8");

// Select the hero paragraph and style it differently
d3.select(".hero p")
  .style("font-size", "1.2rem")
  .style("color", "#ffffff")
  .style("opacity", "0.9");

// Select navigation links and style them
d3.selectAll(".nav-menu a")
  .style("font-weight", "500")
  .style("transition", "all 0.3s ease");

// ============================================
// STEP 3: Append elements using D3
// ============================================

// Add a new paragraph to the container div
d3.select(".container")
  .append("p")
  .attr("class", "d3-message")
  .style("background-color", "#FBE79C")
  .style("padding", "1rem 1.5rem")
  .style("border-radius", "8px")
  .style("border-left", "4px solid #F7A327")
  .style("margin-top", "1rem")
  .style("font-weight", "500")
  .style("color", "#333")
  .text("💡 Purchasing a low energy consumption TV will help with your energy bills!");

// Add another message about LED TVs
d3.select(".container")
  .append("p")
  .attr("class", "d3-message")
  .style("background-color", "#F0E6D3")
  .style("padding", "0.8rem 1.5rem")
  .style("border-radius", "8px")
  .style("border-left", "4px solid #81663E")
  .style("margin-top", "0.5rem")
  .style("color", "#333")
  .text("📺 LED TVs are the most energy-efficient option available in Australia.");

// ============================================
// STEP 4: Append an SVG using D3
// ============================================

// Select the SVG container and add an SVG
d3.select(".svg-container")
  .append("svg")
  .attr("width", "100%")
  .attr("height", "200")
  .attr("viewBox", "0 0 400 200")
  .style("background-color", "#F5EFE6")
  .style("border-radius", "8px")
  .style("border", "2px solid #E8DCC8")
  .style("margin-top", "1rem")
  .style("display", "block");

// Add a rectangle to the SVG
d3.select(".svg-container svg")
  .append("rect")
  .attr("x", 50)
  .attr("y", 50)
  .attr("width", 80)
  .attr("height", 30)
  .style("fill", "#F7A327")
  .style("stroke", "#81663E")
  .style("stroke-width", "2")
  .style("rx", "4");

// Add another rectangle (representing LED TV bar)
d3.select(".svg-container svg")
  .append("rect")
  .attr("x", 160)
  .attr("y", 30)
  .attr("width", 80)
  .attr("height", 50)
  .style("fill", "#81663E")
  .style("stroke", "#5f321e")
  .style("stroke-width", "2")
  .style("rx", "4");

// Add a third rectangle (representing OLED TV bar)
d3.select(".svg-container svg")
  .append("rect")
  .attr("x", 270)
  .attr("y", 10)
  .attr("width", 80)
  .attr("height", 70)
  .style("fill", "#D28A48")
  .style("stroke", "#6b351d")
  .style("stroke-width", "2")
  .style("rx", "4");

// Add labels to the bars
d3.select(".svg-container svg")
  .append("text")
  .attr("x", 50)
  .attr("y", 100)
  .style("font-size", "12px")
  .style("font-weight", "500")
  .style("fill", "#333")
  .text("LED TV");

d3.select(".svg-container svg")
  .append("text")
  .attr("x", 160)
  .attr("y", 95)
  .style("font-size", "12px")
  .style("font-weight", "500")
  .style("fill", "#333")
  .text("LCD TV");

d3.select(".svg-container svg")
  .append("text")
  .attr("x", 270)
  .attr("y", 95)
  .style("font-size", "12px")
  .style("font-weight", "500")
  .style("fill", "#333")
  .text("OLED TV");

// Add a title to the SVG
d3.select(".svg-container svg")
  .append("text")
  .attr("x", 200)
  .attr("y", 175)
  .style("font-size", "14px")
  .style("font-weight", "600")
  .style("fill", "#81663E")
  .style("text-anchor", "middle")
  .text("Energy Consumption by TV Type");

// ============================================
// Bonus: Add hover effects to the rectangles
// ============================================

d3.selectAll(".svg-container svg rect")
  .on("mouseover", function() {
    d3.select(this)
      .style("opacity", "0.7")
      .style("cursor", "pointer");
  })
  .on("mouseout", function() {
    d3.select(this)
      .style("opacity", "1");
  });