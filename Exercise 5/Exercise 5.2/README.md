# Exercise 5.2: Scatter Plot and Line Chart

## Aim
Learn how to add scaled x and y axes with labels for a line chart.

## Purpose
To draw a scatter plot and line chart using D3 with continuous data.

---

## What I Did

### Step 1: Load the data
- Added ARE_Spot_Prices.csv to the data/ folder
- Used d3.csv() to load the data
- Converted year and avgPrice to numbers
- Sorted data by year (ascending)

### Step 2: Set up function and margins
- Created drawLineChart() function
- Used same margins as Exercise 5.1: top 40, right 40, bottom 80, left 80
- Created inner chart group with transform for margins

### Step 3: Set up scales
- xScale: d3.scaleLinear() with d3.extent() for year domain
- yScale: d3.scaleLinear() for average price domain
- Used d3.format("d") to force integer ticks for years

### Step 4: Add axes
- Added x-axis with d3.axisBottom()
- Added y-axis with d3.axisLeft()
- Added x and y axis labels

### Step 5: Draw scatter plot
- Added circles at each data point
- Positioned using xScale and yScale
- Styled with orange fill and brown stroke

### Step 6: Draw line
- Used d3.line() to generate line coordinates
- Used .x() and .y() accessors with scales
- Appended path with d3.line() data
- Styled with brown stroke, no fill

---

## Files
- index.html (updated with line chart div and script)
- css/styles.css (added line chart styles)
- js/line-chart.js (new file)
- data/ARE_Spot_Prices.csv (new file)

---

## AI Declaration

DeepSeek was used to assist with:
- Understanding d3.line() generator
- Axis formatting for years using d3.format("d")
- Scatter plot positioning with scales

All code was reviewed, tested, and modified to meet the requirements of Exercise 5.2.

---

## References
- Dufour, A., & Meeks, E. (2024). D3 for Data Visualization.
- Swinburne University of Technology. (2026). COS30045 Data Visualisation – Week 5 Class Slides.