# Exercise 4.5: D3 Binding and Drawing with Data

## Aim
Use the data in the dataset to draw SVGs for visualisation.

## Purpose
To bind data to rectangles and create the bars for a bar chart.

---

## What I Did

### Step 1: Bind data to DOM elements
Created a function to bind data to rectangles:

const drawBarChart = (data, svg) => {
  svg
    .selectAll("rect")
    .data(data)
    .join("rect")
      .attr("class", d => `bar bar-${d.count}`)
      .attr("x", 0)
      .attr("y", (d, i) => i * (barHeight + barSpacing))
      .attr("width", d => d.count)
      .attr("height", barHeight)
      .attr("fill", "#F7A327");
};

### Step 2: Add attributes for width, height, and fill
- Width: Based on count (d.count)
- Height: Fixed at 20px
- Fill: Orange (#F7A327)
- Added a class attribute for styling

### Step 3: Space out the bars
- X: Set to 0 (all bars start at the left)
- Y: Calculated based on index (i * (barHeight + barSpacing))

---

## Files
- assets/js/main.js (updated)

---

## AI Declaration

DeepSeek was used to assist with:
- D3 data binding syntax
- Understanding .data() and .join()
- Attribute calculations for bar positioning

All code was reviewed, tested, and modified to meet the requirements of Exercise 4.5.

---

## References
- Dufour, A., & Meeks, E. (2024). D3 for Data Visualization.
- Swinburne University of Technology. (2026). COS30045 Data Visualisation – Week 4 Class Slides.

---