// ============================================
// Exercise 6.3: Shared Constants
// ============================================

// ============================================
// Chart dimensions
// ============================================

const margin = { top: 40, right: 40, bottom: 80, left: 80 };
const width = 800;
const height = 500;
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

// ============================================
// Colours
// ============================================

const bodyBackgroundColor = "#F0E6D3";
const barColor = "#F7A327";
const barHoverColor = "#81663E";

// ============================================
// Scales (Histogram)
// ============================================

const xScale = d3.scaleLinear();
const yScale = d3.scaleLinear();

// ============================================
// Scales (Scatterplot)
// ============================================

const xScaleS = d3.scaleLinear();
const yScaleS = d3.scaleLinear();

// ============================================
// Inner chart references
// ============================================

let innerChart;        // For histogram
let innerChartS;       // For scatterplot

// ============================================
// Bin generator
// ============================================

const binGenerator = d3.bin()
    .value(d => d.energyConsumption)
    .thresholds(14);

// ============================================
// Filter configuration
// ============================================

const filters = [
    { id: "all", label: "All", isActive: true },
    { id: "lcd", label: "LCD", isActive: false },
    { id: "led", label: "LED", isActive: false },
    { id: "oled", label: "OLED", isActive: false }
];

// ============================================
// Colour scale for screen technology
// ============================================

const colorScale = d3.scaleOrdinal()
    .domain(["lcd", "led", "oled"])
    .range(["#F7A327", "#81663E", "#DCC8A8"]);

// ============================================
// Tooltip dimensions (for Exercise 6.4)
// ============================================

const tooltipWidth = 150;
const tooltipHeight = 60;