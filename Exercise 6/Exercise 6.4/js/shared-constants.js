// ============================================
// Exercise 6.4: Shared Constants
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
// Scales
// ============================================

const xScale = d3.scaleLinear();
const yScale = d3.scaleLinear();
const xScaleS = d3.scaleLinear();
const yScaleS = d3.scaleLinear();

// ============================================
// Inner chart references
// ============================================

let innerChart;
let innerChartS;

// ============================================
// Bin generator
// ============================================

const binGenerator = d3.bin()
    .value(d => d.energyConsumption)
    .thresholds(14);

// ============================================
// Histogram filter (Screen Technology)
// ============================================

const filters = [
    { id: "all", label: "All", isActive: true },
    { id: "lcd", label: "LCD", isActive: false },
    { id: "led", label: "LED", isActive: false },
    { id: "oled", label: "OLED", isActive: false }
];

// ============================================
// Scatterplot filter (Screen Size)
// ============================================

const sizeFilters = [
    { id: "all-sizes", label: "All Sizes", isActive: true },
    { id: "small", label: "Small (<43\")", isActive: false },
    { id: "medium", label: "Medium (43–65\")", isActive: false },
    { id: "large", label: "Large (>65\")", isActive: false }
];

// ============================================
// Colour scale for screen technology
// ============================================

const colorScale = d3.scaleOrdinal()
    .domain(["lcd", "led", "oled"])
    .range(["#F7A327", "#81663E", "#DCC8A8"]);

// ============================================
// Tooltip dimensions
// ============================================

const tooltipWidth = 220;
const tooltipHeight = 85;