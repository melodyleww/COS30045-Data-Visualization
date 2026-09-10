# Exercise 4.7: Adding Labels

## Aim
Add labels to the chart.

## Purpose
To make the bar chart more useful by adding brand names and count values.

---

## What I Did

### Step 1: Make room for labels
Adjusted the xScale range to make room for labels:

const xScale = d3.scaleLinear()
  .domain([0, 1200])
  .range([100, 500]);

### Step 2: Create a group container for labels
Replaced the rectangle selection with a group container:

const barAndLabel = svg
  .selectAll("g")
  .data(data)
  .join("g")
    .attr("transform", d => `translate(0, ${yScale(d.brand)})`);

### Step 3: Add back the rectangles
Appended rectangles to the group:

barAndLabel
  .append("rect")
    .attr("x", 100)
    .attr("y", 0)
    .attr("width", d => xScale(d.count) - 100)
    .attr("height", yScale.bandwidth())
    .attr("fill", "#F7A327");

### Step 4: Add brand name labels
Added text elements for brand names:

barAndLabel
  .append("text")
    .text(d => d.brand)
    .attr("x", 90)
    .attr("y", yScale.bandwidth() / 2 + 5)
    .attr("text-anchor", "end")
    .style("font-size", "13px");

### Step 5: Add count value labels
Added text elements for count values:

barAndLabel
  .append("text")
    .text(d => d.count)
    .attr("x", d => xScale(d.count) + 5)
    .attr("y", yScale.bandwidth() / 2 + 5)
    .style("font-size", "13px")
    .style("fill", "#81663E");

---

## Files
- assets/js/main.js (updated)

---

## AI Declaration

DeepSeek was used to assist with:
- Creating group containers for bars and labels
- Adding text labels with proper positioning
- Understanding text-anchor and transform

All code was reviewed, tested, and modified to meet the requirements of Exercise 4.7.

---

## References
- Dufour, A., & Meeks, E. (2024). D3 for Data Visualization.
- Swinburne University of Technology. (2026). COS30045 Data Visualisation – Week 4 Class Slides.

---