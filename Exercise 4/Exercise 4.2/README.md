# COS30045 – Data Visualisation  
## Exercise 0.2 – Energy Website

Welcome to **Exercise 0.2** for COS30045 Data Visualisation.

In this exercise, you will build a simple **Energy Data Webpage** using **HTML, CSS, and JavaScript**. The purpose of this exercise is to familiarise you with the development workflow using **GitHub and VS Code**, while preparing the foundation for future data visualisation tasks.

---

# Objective

The objectives of this exercise are:

- Understand how to use **GitHub for version control**
- Practice **web development structure**
- Build a **basic website**
- Maintain **regular commits**
- Identify commits that include **GenAI-generated code**

---

# Step 1 – Fork the Repository

1. Open this repository.
2. Click **Fork** at the top right of the page.
3. This will create a copy of the repository in your GitHub account.

Example:

Original repository : "github.com/rishmaf/COS30045-Data-Visualization/energy-webpage"

Your forked repository : "github.com/yourusername/COS30045-Data-Visualization/energy-webpage"


---

# Step 2 – Clone the Repository

Clone your forked repository to your local machine using **VS Code** or the terminal.



# Step 3 – Project Structure


Your project must follow the structure below.

```bash
energy-webpage-v1
│
├── css
│   └── styles.css
│
├── js
│   └── scripts.js
│
├── images
│   └── PowerIcon.png
│
├── data
│   └── data.csv
│
├── index.html
└── README.md

# Generative AI Reflection

Which tool(s) I used:
I used ChatGPT (OpenAI) to assist with writing HTML structure, CSS styling, and JavaScript functionality for this exercise.

What I used GenAI for:
HTML Structure: Generated the basic page layouts for index.html, televisions.html, and about.html

CSS Styling: Created consistent styling with the logo's color scheme and navigation menu design

JavaScript: Assisted with the FAQ accordion functionality and the interactive energy calculator

Debugging: Helped identify and fix syntax errors and logic issues

What I changed or adapted after generation:
Adjusted the color palette to better match the PowerIcon.png logo

Modified the navigation menu to include proper active page highlighting

Restructured the HTML to follow the required folder organization (css/, js/, images/, data/)

Refined the JavaScript to handle edge cases and improve user experience

Changed placeholder content to be more relevant to appliance energy consumption in Australia

What I learned from using GenAI:
Understanding how to structure a multi-page website with consistent navigation

How to implement an accordion FAQ section using vanilla JavaScript

The importance of separating HTML structure, CSS styling, and JavaScript behavior

How to create an interactive calculator that responds to user input in real-time

Best practices for organizing files in a web development project

Limitations or issues I encountered:
The AI-generated code sometimes needed adjustments to work correctly with my specific folder structure

Some generated CSS required tweaking to ensure consistent cross-page styling

The energy calculator logic needed refinement for accurate calculations

Had to ensure the code worked properly after page refresh without losing state