# Exercise 3 – Data Story: TV Energy Consumption

## Overview

In this exercise, you will develop a **data story** based on the **TV Energy Consumption dataset**. Using the website created in **Exercise 0.2**, you will extend your work to present a meaningful narrative supported by data visualisations.

Your goal is to communicate insights from the dataset in a clear and engaging way through your **website and written explanation**.

You must use the **Exercise 3 folder in your existing forked repository** and reuse the files created in **Exercise 0.2**.

---

## Data Story

### Audience

The target audience for this visualisation includes:

- **Australian consumers** interested in purchasing energy-efficient televisions
- **Policy makers and regulators** interested in energy consumption trends
- **Researchers** studying energy efficiency in consumer electronics

These audiences are interested in understanding how **television energy consumption varies across models, sizes, and technologies**, and how these factors influence overall energy usage.

### What They Want to Know

Based on audience research, the key questions are:

1. **Which brand offers the most choice?** – Consumers want to know which brands have the widest selection of TV models available in Australia.
2. **How does screen size impact energy consumption?** – Consumers want to understand the relationship between screen size and energy usage to make cost-effective decisions.
3. **Which screen technology is most energy-efficient?** – Consumers want to compare LED, LCD, and OLED technologies.

### The Story

#### Storyboard 1: Brand Distribution
- **The Hook:** When buying a TV, which brand gives you the most choice?
- **The Data:** Samsung offers the most TV models (30+) in Australia, followed by Kogan (25+) and Sony (15+). These findings come from data processing and aggregation in KNIME.
- **The Insight:** More models mean more options, but it doesn't necessarily mean better quality. Consumers should consider their specific needs, not just brand availability.
- **The Action:** Look beyond the brand to compare energy efficiency, screen size, and features.

#### Storyboard 2: Screen Size vs Energy
- **The Hook:** Your TV's screen size could be costing you more than you think!
- **The Data:** Large TVs (66"+) use 2-3 times more energy than small TVs (32-43"). Energy consumption increases significantly as screen size grows.
- **The Insight:** Bigger screens mean bigger energy bills. A large TV can cost up to $69 more per year to run than a smaller TV.
- **The Action:** Choose the right screen size for your needs and budget. Consider how far you sit from the TV to determine the optimal size.

### Visualisation Design

| Visualisation | Purpose |
|---------------|---------|
| **Bar Chart (Brand Distribution)** | Compare the number of TV models offered by different brands |
| **Bar Chart (Size vs Energy)** | Show the relationship between screen size and energy consumption |
| **Cost Table** | Display annual running costs for different TV sizes |

---

## About the Data

### Data Source

The dataset used in this project contains information about **television models and their energy consumption characteristics**, including power usage, screen size, technology type, and efficiency ratings.

The dataset was sourced from the **Australian Government's appliance energy consumption database** (`tv_2026_02_15.csv`) and provided as part of the course materials.

### Data Processing

Before creating visualisations, the dataset was processed using **KNIME** to ensure it was suitable for analysis. This included:

- **Data Cleaning:** Fixed inconsistent brand naming (e.g., "Samsung" vs "Samsung Electronics"), handled missing values, filtered out models not sold in Australia, and removed unavailable TV models.
- **Data Transformation:** Converted screen size from centimetres to inches for Australian consumers, created size categories (Small, Medium, Large), and aggregated data by brand and screen size.
- **Data Exploration:** Grouped data to count models per brand, analysed energy consumption patterns by screen size, and explored the relationship between screen technology and energy usage.
- **Exporting:** Exported processed data to CSV format for use in visualisations.

### Privacy

The dataset does not contain any **personal or sensitive information**. It focuses solely on product specifications and energy consumption data related to television devices.

### Accuracy and Limitations

While the dataset provides useful information about TV energy consumption, there are some limitations:

- Energy consumption figures are **estimates** based on typical usage patterns (4 hours/day)
- The dataset may not include **all available television models**
- Some information may be **outdated or incomplete** (data represents a snapshot in time from February 2026)
- Energy consumption varies by brand, model, display settings, viewing habits, and room brightness

These factors should be considered when interpreting the visualisations.

### Ethics

When presenting data visualisations, it is important to ensure that the information is represented **accurately and responsibly**.

This project follows ethical data visualisation practices by:

- Avoiding misleading visual representations
- Clearly explaining the context of the data
- Presenting information transparently so viewers can interpret the results correctly
- Citing data sources for transparency

---

## AI Declaration

Artificial Intelligence (AI) tools were used to assist with aspects of this assignment:

| Tool | Purpose |
|------|---------|
| **ChatGPT** | Structuring the data story, generating HTML/CSS code, and refining content |
| **KNIME AI (K-AI)** | Suggesting nodes for data processing and cleaning |
| **Canva** | Creating the storyboard designs and visual layouts |

All AI-generated assistance was reviewed, modified where necessary, and integrated responsibly into the project. All data insights are based on actual analysis performed in KNIME.

---