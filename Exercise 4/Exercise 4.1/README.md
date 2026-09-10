# Exercise 4.1: SVG House and Garden

## Aim
Create a picture of a house and garden demonstrating the use of all the different SVG shapes including text.

## Purpose
To become familiar with the SVG coordinate system, customisation, and the group element.

---

## What I Did

### Step 1: Create a picture with SVG shapes
Created an SVG house and garden using the following shapes:

- Rectangle: House body, door, chimney, windows, fence posts
- Circle: Sun, tree leaves, door knob, flowers
- Ellipse: Cloud
- Polygon: Roof
- Path: Garden path
- Line: Window cross bars, fence rails
- Polyline: Decorative garden border
- Text: "My SVG Garden" label

### Step 2: SVG Coordinate System
- The SVG uses an 800 x 600 coordinate system
- Origin (0, 0) is at the top-left corner
- X-axis increases left to right
- Y-axis increases top to bottom

Coordinate Examples:
- Sun: cx="680" cy="100"
- House: x="270" y="255"
- Roof apex: (435, 100)
- Door: x="410" y="350"
- Path start: (440, 480)
- Text: (620, 555)

### Step 3: Customisation
- Added a chimney with a cap
- Added a curved garden path
- Added a cloud using ellipses
- Added a garden fence with posts and rails
- Added flowers with petals and a centre
- Changed house and roof colours
- Added stroke outlines to the house and roof
- Added text to the garden area
- Added a decorative polyline

### Step 4: Group Element <g>
Used the <g> element to group:

- Cloud: 3 ellipses
- Tree Leaves: 4 circles
- Windows: 2 rectangles
- Window Bars: 4 lines
- Fence: 5 lines
- Flowers: 4 circles

Used transform="translate(0, 0)" on the windows group to demonstrate positioning.

### Before and After Comparison
- Before: Original house with elements in their original positions
- After: Same house with elements moved to opposite sides (left to right)
- Added a comparison table showing coordinate changes

---

## Files
- svg-house.html
- assets/css/styles.css (SVG styles)

---

## AI Declaration

DeepSeek was used to assist with:
- Brainstorming the SVG house and garden design
- Drafting the SVG structure
- Understanding the SVG coordinate system

All code was reviewed, customised, and modified to meet the requirements of Exercise 4.1.

---

## References
- Dufour, A., & Meeks, E. (2024). D3 for Data Visualization.
- Swinburne University of Technology. (2026). COS30045 Data Visualisation – Week 4 Class Slides.

---