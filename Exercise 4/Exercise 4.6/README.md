# Exercise 4.6: Scaling Charts

## Aim
Make the chart adaptable to different size SVGs.

## Purpose
To use D3 scales to ensure the chart always fits into the available space.

---

## What I Did

### Step 1: Add a Linear scale for count data (x-axis)
Created a scale to make the bars fit the SVG width:

const xScale = d3.scaleLinear()
  .domain([0, 1200])
  .range([0, 400]);

### Step 2: Add a Band scale for brands (y-axis)
Created a scale to space the bars based on the number of categories:

const yScale = d3.scaleBand()
  .domain(data.map(d => d.brand))
  .range([0, 1600])
  .padding(0.1);

### Step 3: Update bar attributes to use scales
- Width: xScale(d.count)
- Height: yScale.bandwidth()
- Y: yScale(d.brand)

### Step 4: Remove old constants
Removed barHeight and barSpacing as they are no longer needed.

---

## Files
- assets/js/main.js (updated)

---

## AI Declaration

DeepSeek was used to assist with:
- Understanding d3.scaleLinear() and d3.scaleBand()
- Applying scales to bar chart attributes

All code was reviewed, tested, and modified to meet the requirements of Exercise 4.6.

---

## References
- Dufour, A., & Meeks, E. (2024). D3 for Data Visualization.
- Swinburne University of Technology. (2026). COS30045 Data Visualisation – Week 4 Class Slides.

---