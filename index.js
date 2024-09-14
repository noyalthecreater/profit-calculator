function calculateProfit() {
  // Get values from input fields
  const entryPrice = parseFloat(document.getElementById('entryPrice').value);
  const exitPrice = parseFloat(document.getElementById('exitPrice').value);
  const initialInvestment = parseFloat(document.getElementById('investment').value);

  // Check if the inputs are valid
  if (isNaN(entryPrice) || isNaN(exitPrice) || isNaN(initialInvestment)) {
    alert("Please enter valid numbers for all fields.");
    return;
  }

  // Calculate percentage price change
  const priceChangePercentage = (exitPrice - entryPrice) / entryPrice;

  // Calculate profit
  const profit = initialInvestment * priceChangePercentage;

  // Display the result
  document.getElementById('result').innerText = `Profit: $${profit.toFixed(2)}`;
}
