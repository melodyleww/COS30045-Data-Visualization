# Exercise 4.2: Manipulate and Add Elements with D3

## Aim
Become familiar with using D3 to change appearance and add elements to your webpage.

## Purpose
To learn how D3 works to alter elements and add objects to the DOM.

---

## What I Did

### Step 1: Add a new js file for D3 code
- Created assets/js/main.js for D3 code
- Kept the existing assets/js/scripts.js (Exercise 0.2) separate
- Added D3 library and main.js to index.html

### Step 2: Apply styles using D3
Used D3 to select and style HTML elements:

d3.select("h1").style("color", "#F7A327");
d3.selectAll("h2").style("color", "#81663E").style("border-bottom", "2px solid #F7A327");
d3.selectAll("p").style("font-size", "1rem").style("line-height", "1.8");

### Step 3: Append elements using D3
Added new paragraphs to a container div:

d3.select(".container")
  .append("p")
  .style("background-color", "#FBE79C")
  .text("Purchasing a low energy consumption TV will help with your energy bills!");

### Step 4: Append an SVG using D3
Created an SVG with rectangles:

d3.select(".svg-container")
  .append("svg")
    .attr("width", "100%")
    .attr("height", "200")
    .attr("viewBox", "0 0 400 200");

d3.select(".svg-container svg")
  .append("rect")
    .attr("x", 50)
    .attr("y", 50)
    .attr("width", 100)
    .attr("height", 30)
    .style("fill", "#F7A327");

Added multiple rectangles and text labels to create a simple bar chart.

---

## Files
- assets/js/main.js (new file)
- index.html (updated with D3 library and main.js)
- assets/css/styles.css (added D3 element styles)

---

## AI Declaration

DeepSeek was used to assist with:
- D3 syntax and code structure
- Understanding d3.select(), d3.selectAll(), and .append()

All code was reviewed, tested, and modified to meet the requirements of Exercise 4.2.

---

## References
- Dufour, A., & Meeks, E. (2024). D3 for Data Visualization.
- Swinburne University of Technology. (2026). COS30045 Data Visualisation – Week 4 Class Slides.

---