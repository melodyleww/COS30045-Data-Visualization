# Exercise 5.1: Vertical Bar Chart with Axis

## Aim
Learn how to add scaled x and y axis with labels.

## Purpose
To create a vertical bar chart with labeled x and y axes.

---

## What I Did

### Step 1: Prepare the data
- Used KNIME to filter 55-inch TV models only
- Used GroupBy to find average energy consumption per screen type
- Exported to CSV as `Data_exercise 5.1.csv`

### Step 2: Load data with D3
- Used `d3.csv()` to load the data
- Converted `energy_consumption` to a number
- Sorted data by energy consumption (descending)

### Step 3: Set up function and margins
- Created `drawBarChart()` function
- Defined margins: top 40, right 40, bottom 80, left 80
- Created inner chart group with `transform` for margins

### Step 4: Set up scales
- **xScale:** `d3.scaleBand()` for screen types (categorical)
- **yScale:** `d3.scaleLinear()` for energy consumption (quantitative)

### Step 5: Add axes
- Added x-axis with `d3.axisBottom()`
- Added y-axis with `d3.axisLeft()`
- Added y-axis label using `rotate(-90)`

### Step 6: Add bars
- Bound data to rectangles
- Used `xScale` for x position and width
- Used `yScale` for y position and height
- Added `.bar` class for styling

### Step 7: Add value labels
- Added text labels above each bar showing the energy value

---

## Files
- `index.html`
- `css/styles.css`
- `js/main.js`
- `data/Data_exercise 5.1.csv`

---

## AI Declaration

**DeepSeek** was used to assist with:
- D3 axis setup and labeling
- Understanding margins and inner chart positioning
- Scale configurations for vertical bar charts

All code was reviewed, tested, and modified to meet the requirements of Exercise 5.1.

---

## References
- Dufour, A., & Meeks, E. (2024). *D3 for Data Visualization*.
- Swinburne University of Technology. (2026). *COS30045 Data Visualisation – Week 5 Class Slides*.