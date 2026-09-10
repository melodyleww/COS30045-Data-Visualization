# Exercise 4.4: Load Data from CSV

## Aim
Learn how to load and format data so it is ready for D3.

## Purpose
To load data from a CSV file into D3 and prepare it for charting.

---

## What I Did

### Step 1: Prepare the CSV data
- Exported the TV brand count data from KNIME as tvBrandCount.csv
- Added the CSV to the data/ folder in the repository

### Step 2: Load the CSV data with D3
Used d3.csv() to load the data:

d3.csv("data/tvBrandCount.csv", d => {
  return {
    brand: d.brand,
    count: +d.count
  };
}).then(data => {
  console.log(data);
});

### Step 3: Check the data in the browser console
Logged the following information:
- Data loaded: The array of objects
- Number of brands: 25
- Max count: 1096
- Min count: 24
- Extent (min, max): [24, 1096]

### Step 4: Sort the data
Used JavaScript sort() to sort the data in descending order:

data.sort((a, b) => b.count - a.count);

### Step 5: Pass data to drawBarChart()
Created a placeholder function and called it with the loaded data:

function drawBarChart(data) {
  console.log("drawBarChart called with:", data);
}

---

## Files
- assets/js/main.js (updated)
- data/tvBrandCount.csv (new file)

---

## AI Declaration

DeepSeek was used to assist with:
- D3 CSV loading syntax
- Data formatting and conversion
- Understanding d3.max(), d3.min(), and d3.extent()

All code was reviewed, tested, and modified to meet the requirements of Exercise 4.4.

---

## References
- Dufour, A., & Meeks, E. (2024). D3 for Data Visualization.
- Swinburne University of Technology. (2026). COS30045 Data Visualisation – Week 4 Class Slides.

---