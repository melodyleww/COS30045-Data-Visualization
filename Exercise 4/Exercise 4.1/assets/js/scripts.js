// ============================================
// FAQ Accordion Functionality
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', function() {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').classList.remove('open');
                    otherItem.querySelector('.faq-question').classList.remove('active');
                }
            });
            
            // Toggle this item
            item.classList.toggle('active');
            answer.classList.toggle('open');
            question.classList.toggle('active');
        });
    });
});

// ============================================
// Energy Calculator
// ============================================

function calculateEnergy() {
    // Get input values
    const wattage = parseFloat(document.getElementById('wattage').value);
    const hours = parseFloat(document.getElementById('hours').value);
    const price = parseFloat(document.getElementById('price').value);
    
    const resultsDiv = document.getElementById('results');
    
    // Validation
    if (isNaN(wattage) || wattage <= 0) {
        resultsDiv.innerHTML = '<p class="error">⚠️ Please enter a valid power usage (watts).</p>';
        resultsDiv.className = 'show';
        return;
    }
    
    if (isNaN(hours) || hours <= 0) {
        resultsDiv.innerHTML = '<p class="error">⚠️ Please enter valid hours of use per day.</p>';
        resultsDiv.className = 'show';
        return;
    }
    
    if (isNaN(price) || price <= 0) {
        resultsDiv.innerHTML = '<p class="error">⚠️ Please enter a valid electricity price.</p>';
        resultsDiv.className = 'show';
        return;
    }
    
    // Calculations
    const dailyKWh = (wattage * hours) / 1000;
    const monthlyKWh = dailyKWh * 30;
    const yearlyKWh = dailyKWh * 365;
    const dailyCost = dailyKWh * (price / 100);
    const monthlyCost = monthlyKWh * (price / 100);
    const yearlyCost = yearlyKWh * (price / 100);
    
    // Display results
    resultsDiv.innerHTML = `
        <h3>📊 Energy Consumption Results</h3>
        <p><strong>Daily Energy Consumption:</strong> ${dailyKWh.toFixed(2)} kWh</p>
        <p><strong>Monthly Energy Consumption:</strong> ${monthlyKWh.toFixed(2)} kWh</p>
        <p><strong>Yearly Energy Consumption:</strong> ${yearlyKWh.toFixed(2)} kWh</p>
        <hr>
        <p><strong>Daily Cost:</strong> $${dailyCost.toFixed(2)}</p>
        <p><strong>Monthly Cost:</strong> $${monthlyCost.toFixed(2)}</p>
        <p><strong>Yearly Cost:</strong> $${yearlyCost.toFixed(2)}</p>
    `;
    
    resultsDiv.className = 'show';
}

// Allow Enter key to trigger calculation
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('#energy-calculator input');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateEnergy();
            }
        });
    });
});