function calculateInterest() {
    // Get values from input fields
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let startDate = new Date(document.getElementById("start_date").value);
    let endDate = new Date(document.getElementById("end_date").value);

    // Validate inputs
    if (!principal || !rate || !startDate || !endDate) {
        alert("Please fill in all fields correctly.");
        return;
    }

    // Calculate Duration (in days, months, and years)
    let durationInMillis = endDate - startDate;
    let durationDays = durationInMillis / (1000 * 60 * 60 * 24);
    let durationYears = durationDays / 365;
    let durationMonths = durationDays / 30;

    // Calculate Simple Interest
    let interest = (principal * rate * durationYears) / 100;
    let totalAmount = principal + interest;

    // Display the result
    document.getElementById("duration").textContent = `Duration: ${Math.floor(durationDays)} Days / ${Math.floor(durationMonths)} Months / ${durationYears.toFixed(2)} Years`;
    document.getElementById("interest").textContent = `Interest: ₹${interest.toFixed(2)}`;
    document.getElementById("total_amount").textContent = `Total Amount: ₹${totalAmount.toFixed(2)}`;

    // 👇 Yeh code endDate field ko aaj ki date se auto set karega
const endDateField = document.getElementById("endDate");
const today = new Date().toISOString().split('T')[0];
endDateField.value = today;


}
