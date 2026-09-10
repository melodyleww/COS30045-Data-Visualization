# Exercise 4.3: D3 Setup

## Aim
Use D3 to generate a simple bar chart from a CSV file to replace a static chart on your Energy Consumption website.

## Purpose
To set up a responsive SVG container and prepare for drawing a bar chart with D3.

---

## What I Did

### Step 1: Delete code from Exercise 4.2
- Removed the D3 code from Exercise 4.2
- Kept the D3 library and main.js file references in index.html

### Step 2: Add a class for the SVG container
Added a .responsive-svg-container class to styles.css:

.responsive-svg-container {
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    max-width: 1200px;
}

Applied the class to a div in index.html:

<div class="responsive-svg-container"></div>

### Step 3: Create an SVG object
Created an SVG inside the responsive container using D3:

const svg = d3.select(".responsive-svg-container")
    .append("svg")
      .attr("viewBox", "0 0 1200 1600")
      .style("border", "1px solid black");

### Step 4: Add a test SVG rectangle
Added a rectangle to verify the setup:

svg
  .append("rect")
    .attr("x", 10)
    .attr("y", 10)
    .attr("width", 414)
    .attr("height", 16)
    .attr("fill", "blue");

---

## Files
- assets/js/main.js (updated)
- index.html (updated with responsive container)
- assets/css/styles.css (added .responsive-svg-container)

---

## AI Declaration

DeepSeek was used to assist with:
- Understanding the responsive SVG container setup
- D3 syntax for creating SVG elements

All code was reviewed, tested, and modified to meet the requirements of Exercise 4.3.

---

## References
- Dufour, A., & Meeks, E. (2024). D3 for Data Visualization.
- Swinburne University of Technology. (2026). COS30045 Data Visualisation – Week 4 Class Slides.

---