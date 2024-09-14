// Function to fetch price based on the selected crypto pair
function fetchPrice() {
  const symbol = document.getElementById('cryptoSymbol').value;
  fetchLivePrice(symbol);
}

// Fetch live market data (e.g., from Binance API)
function fetchLivePrice(symbol) {
  fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`)
    .then(response => response.json())
    .then(data => {
      // Set the entry price field with the fetched price
      document.getElementById('entryPrice').value = parseFloat(data.price).toFixed(2);
    })
    .catch(error => alert('Error fetching live data'));
}

// Calculate profit function (existing code)
function calculateProfit() {
  // Get values from input fields
  const entryPrice = parseFloat(document.getElementById('entryPrice').value);
  const exitPrice = parseFloat(document.getElementById('exitPrice').value);
  const initialInvestment = parseFloat(document.getElementById('investment').value);
  const leverage = parseFloat(document.getElementById('leverage').value) || 1;  // Default to 1 if no leverage
  const stopLoss = parseFloat(document.getElementById('stopLoss').value);
  const positionType = document.getElementById('positionType').value; // "long" or "short"

  // Check if the inputs are valid
  if (isNaN(entryPrice) || isNaN(exitPrice) || isNaN(initialInvestment)) {
    alert("Please enter valid numbers for all fields.");
    return;
  }

  // Calculate profit or loss
  let priceChangePercentage;
  if (positionType === "long") {
    priceChangePercentage = (exitPrice - entryPrice) / entryPrice;
  } else {
    priceChangePercentage = (entryPrice - exitPrice) / entryPrice; // For short positions
  }

  let profit = initialInvestment * priceChangePercentage * leverage;

  // Calculate potential stop-loss effect if entered
  let potentialLoss = 0;
  if (stopLoss && !isNaN(stopLoss)) {
    let stopLossChangePercentage;
    if (positionType === "long") {
      stopLossChangePercentage = (stopLoss - entryPrice) / entryPrice;
    } else {
      stopLossChangePercentage = (entryPrice - stopLoss) / entryPrice;
    }
    potentialLoss = initialInvestment * stopLossChangePercentage * leverage;
  }

  // Display the result
  document.getElementById('result').innerText = `Profit: $${profit.toFixed(2)} \nPotential Loss: $${potentialLoss.toFixed(2)}`;
}
