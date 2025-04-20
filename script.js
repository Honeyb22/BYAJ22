window.onload = function () {
  const endDateField = document.getElementById("endDate");
  const today = new Date().toISOString().split('T')[0];
  endDateField.value = today;
};

function calculateInterest() {
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value); // per month
  const startDate = new Date(document.getElementById("startDate").value);
  const endDate = new Date(document.getElementById("endDate").value);

  // Time difference in milliseconds
  const timeDiff = endDate.getTime() - startDate.getTime();

  // Duration in days, months, and years
  const durationDays = timeDiff / (1000 * 60 * 60 * 24);
  const durationMonths = durationDays / 30;
  const durationYears = durationDays / 365;

  // Calculate interest (per month)
  const interest = (principal * rate * durationMonths) / 100;
  const totalAmount = principal + interest;

  // Output results
  document.getElementById("duration").textContent = 
    `Duration: ${Math.floor(durationDays)} Days / ${Math.floor(durationMonths)} Months / ${durationYears.toFixed(2)} Years`;

  document.getElementById("interest").textContent = 
    `Interest: ₹${interest.toFixed(2)}`;

  document.getElementById("total_amount").textContent = 
    `Total Amount: ₹${totalAmount.toFixed(2)}`;
}
