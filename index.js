function calculateProfit() {
  // Get values from input fields
  const entryPrice = parseFloat(document.getElementById('entryPrice').value);
  const exitPrice = parseFloat(document.getElementById('exitPrice').value);
  const initialInvestment = parseFloat(document.getElementById('investment').value);

  // Validate inputs (ensure they are positive numbers)
  if (isNaN(entryPrice) || entryPrice <= 0) {
    alert("Please enter a valid positive number for the entry price.");
    return;
  }
  if (isNaN(exitPrice) || exitPrice <= 0) {
    alert("Please enter a valid positive number for the exit price.");
    return;
  }
  if (isNaN(initialInvestment) || initialInvestment <= 0) {
    alert("Please enter a valid positive number for the initial investment.");
    return;
  }

  // Calculate percentage price change
  const priceChangePercentage = (exitPrice - entryPrice) / entryPrice;

  // Calculate profit
  const profit = initialInvestment * priceChangePercentage;

  // Display the result, ensuring it's formatted correctly
  document.getElementById('result').innerText = `Profit: $${profit.toFixed(2)}`;
}
