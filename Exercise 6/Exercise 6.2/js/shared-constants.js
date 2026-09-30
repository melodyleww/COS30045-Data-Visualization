// ============================================
// Exercise 6.2: Shared Constants
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
// Screen size filter configuration (Extension)
// ============================================

const sizeFilters = [
    { id: "all-sizes", label: "All", size: null, isActive: true },
    { id: "24", label: "24\"", size: 24, isActive: false },
    { id: "32", label: "32\"", size: 32, isActive: false },
    { id: "55", label: "55\"", size: 55, isActive: false },
    { id: "65", label: "65\"", size: 65, isActive: false },
    { id: "98", label: "98\"", size: 98, isActive: false }
];