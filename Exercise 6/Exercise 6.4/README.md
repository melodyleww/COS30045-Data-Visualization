# Exercise 6.4: Tooltips

## Aim
Build a tooltip to show data values on a scatterplot.

## Purpose
To add interactive tooltips to the scatterplot so users can explore screen size.

---

## What I Did

### Step 1: Set up tooltip functions
- Created `createTooltip()` in interactions.js
- Created `handleMouseEvents()` in interactions.js
- Called both in load-data.js

### Step 2: Create the tooltip
- Appended a `<g>` group to `innerChartS`
- Set opacity to 0 (hidden by default)
- Set pointer-events to none (so it doesn't block interactions)

### Step 3: Add tooltip background
- Appended a rectangle
- Used orange colour (#F7A327) with 90% opacity
- Added rounded corners (rx/ry = 8)

### Step 4: Add tooltip text
- Appended a text element
- Centered with `text-anchor: middle` and `dominant-baseline: middle`
- White bold font

### Step 5: Handle mouse events
- Selected all `.scatter-point` circles
- Attached `mouseenter` event:
  - Updated tooltip text with screen size
  - Positioned tooltip above the circle
  - Faded in with 200ms transition
- Attached `mouseleave` event:
  - Faded out with 200ms transition

---

## AI Declaration

DeepSeek was used to assist with:
- Creating the tooltip structure
- Attaching mouse events to data points
- Positioning the tooltip dynamically
- Smooth fade transitions

All code was reviewed, tested, and modified to meet the requirements of Exercise 6.4.

---

## References
- Dufour, A., & Meeks, E. (2024). D3 for Data Visualization.
- Swinburne University of Technology. (2026). COS30045 Data Visualisation – Week 6 Class Slides.