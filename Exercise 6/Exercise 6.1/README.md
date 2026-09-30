# Exercise 6.1: Histogram

## Aim
Build a histogram of TV energy consumption.

## Purpose
To create a histogram that will be used in Exercise 6.2 with interactive filters.

---

## What I Did

### Step 1: Set up folders and files
- Created separate JS files for data loading, shared constants, interactions, and histogram
- Used the existing styles.css from previous exercises

### Step 2: Set up index.html
- Reused layout with header, main, and footer
- Added a histogram section with a responsive SVG container
- Added D3 library and all JS files in the correct order

### Step 3: Load the data
- Used d3.csv() to load the TV data from W6_TVdata.csv
- Converted star2 and energyConsumption to numbers
- Called drawHistogram() with the data

### Step 4: Set up shared constants
- Defined margin, width, height
- Defined colours (background, bar, hover)
- Declared scales (xScale, yScale)
- Created bin generator with d3.bin() and 14 thresholds

### Step 5: Build the histogram
- Created SVG container and inner chart
- Generated bins from data
- Calculated scale domains from bin bounds
- Drew bars for each bin
- Added x and y axes with labels

---

## AI Declaration

DeepSeek was used to assist with:
- Understanding d3.bin() and histogram layout
- Setting up shared constants
- Structuring the code across multiple files

All code was reviewed, tested, and modified to meet the requirements of Exercise 6.1.

---

## References
- Dufour, A., & Meeks, E. (2024). D3 for Data Visualization.
- Swinburne University of Technology. (2026). COS30045 Data Visualisation – Week 6 Class Slides.