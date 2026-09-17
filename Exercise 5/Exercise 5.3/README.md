# Exercise 5.3: Donut Chart

## Aim
Learn how to draw arcs for pie and donut charts.

## Purpose
To create a donut chart showing the proportion of small, medium and large TV models.

---

## What I Did

### Step 1: Load the data
- Added Data_exercise 5.3.csv to the data/ folder
- Used d3.csv() to load the data
- Converted count to a number

### Step 2: Set up function and dimensions
- Created drawDonutChart() function
- Calculated radius based on the shortest side of the SVG
- Set innerRadius to 60% of outer radius

### Step 3: Create a colour scale
- Used d3.scaleOrdinal() to map each category to a colour
- Colours: #F7A327 (large), #81663E (medium), #DCC8A8 (small)

### Step 4: Calculate angles with pie function
- Used d3.pie().value(d => d.count) to calculate arc angles
- Used .sort(null) to keep the data order

### Step 5: Set up the arc generator
- Used d3.arc() with innerRadius and outerRadius
- Added padAngle(0.02) and cornerRadius(5)

### Step 6: Create SVG containers
- Created SVG with viewBox
- Centered the donut using translate(width/2, height/2)

### Step 7: Draw the arcs
- Bound pie data to path elements
- Used arcGenerator to draw each slice
- Applied colour scale to each slice

### Step 8: Add labels
- Added text labels at the centroid of each arc
- Used arcGenerator.centroid(d) for positioning

---

## Files
- index.html (updated with donut chart div and script)
- css/styles.css (added donut chart styles)
- js/donut-chart.js (new file)
- data/Data_exercise 5.3.csv (new file)

---

## AI Declaration

DeepSeek was used to assist with:
- Understanding d3.pie() and d3.arc() generators
- Donut chart layout and label positioning
- Colour scale configuration

All code was reviewed, tested, and modified to meet the requirements of Exercise 5.3.

---

## References
- Dufour, A., & Meeks, E. (2024). D3 for Data Visualization.
- Swinburne University of Technology. (2026). COS30045 Data Visualisation – Week 5 Class Slides.

---

End of README.md