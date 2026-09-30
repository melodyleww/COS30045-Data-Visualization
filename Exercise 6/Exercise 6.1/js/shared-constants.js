// ============================================
// Exercise 6.1: Shared Constants
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

const bodyBackgroundColor = "#F5EFE6";
const barColor = "#F7A327";
const barHoverColor = "#81663E";

// ============================================
// Scales (declared here, configured in histogram.js)
// ============================================

const xScale = d3.scaleLinear();
const yScale = d3.scaleLinear();

// ============================================
// Bin generator
// ============================================

const binGenerator = d3.bin()
    .value(d => d.energyConsumption)
    .thresholds(14);  // 14 bins