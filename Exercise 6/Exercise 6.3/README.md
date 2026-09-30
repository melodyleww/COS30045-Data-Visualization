# Exercise 6.3: Scatterplot

## Aim
Build a scatterplot and colour code a variable.

## Purpose
To explore the relationship between energy consumption, star ratings, and screen type.

---

## What I Did

### Step 1: Set up the scatterplot file
- Created a new scatterplot.js file
- Added a scatterplot div in index.html
- Added call to drawScatterplot(data) in load-data.js

### Step 2: Set up shared constants
- Added xScaleS and yScaleS for scatterplot scales
- Added innerChartS for the scatterplot group
- Added colorScale (ordinal) for screen technology

### Step 3: Draw the scatterplot
- Created SVG container with margins
- Set up scales:
  - X: Star rating (from data min/max)
  - Y: Energy consumption (0 to max)
- Drew circles with cx, cy, r, fill, opacity

### Step 4: Add axes
- X-axis: Star Rating
- Y-axis: Energy Consumption (kWh/year)

### Step 5: Add legend
- Created a group for legend items
- Added coloured rectangles and text labels
- Positioned in top-right corner

### Step 6: Update filters
- Updated updateScatterplot() to filter data
- Both histogram and scatterplot update together

---

## AI Declaration

DeepSeek was used to assist with:
- Setting up scatterplot scales
- Drawing circles with colour coding
- Adding a legend to the SVG
- Updating the scatterplot when filters change

All code was reviewed, tested, and modified to meet the requirements of Exercise 6.3.

---

## References
- Dufour, A., & Meeks, E. (2024). D3 for Data Visualization.
- Swinburne University of Technology. (2026). COS30045 Data Visualisation – Week 6 Class Slides.