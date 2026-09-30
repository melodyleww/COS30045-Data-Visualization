# Exercise 6.2: Filters

## Aim
Add interactive filters to the histogram from Exercise 6.1.

## Purpose
To allow users to explore energy consumption patterns for different screen technologies.

---

## What I Did

### Step 1: Set up the filter div
- Added a `<div id="filters_screen"></div>` to index.html
- Added a call to `populateFilters(data)` in load-data.js

### Step 2: Configure filters in shared-constants.js
- Created a `filters` array with id, label, and isActive properties
- Filters: All, LCD, LED, OLED
- Only "All" is active by default

### Step 3: Build the filter buttons
- Used D3 to create a button for each filter
- Added a class for styling
- Added a `.on("click")` event listener

### Step 4: Add interactivity
- Toggled the `isActive` state on click
- If "All" is clicked, deactivate other filters
- If any specific filter is active, deactivate "All"
- Used `.classed()` to update button styles dynamically

### Step 5: Update the histogram
- Created `updateHistogram()` function
- Filtered data based on active filters
- Regenerated bins using `binGenerator`
- Updated bars with smooth transitions (500ms easeCubicOut)

---

## How the Filters Work

- **All**: Shows all data. Clicking it deactivates other filters.
- **LCD / LED / OLED**: Toggle specific filters. Multiple can be active at once.
- **Active buttons** are styled with a filled brown background.
- **Inactive buttons** are styled with a white background and brown border.

---

## AI Declaration

DeepSeek was used to assist with:
- Filter toggle logic
- Data filtering and bin regeneration
- D3 transitions for smooth updates

All code was reviewed, tested, and modified to meet the requirements of Exercise 6.2.

---

## References
- Dufour, A., & Meeks, E. (2024). D3 for Data Visualization.
- Swinburne University of Technology. (2026). COS30045 Data Visualisation – Week 6 Class Slides.