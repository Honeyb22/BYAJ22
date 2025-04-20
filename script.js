document.getElementById("calculate").addEventListener("click", function () {
    const startDate = new Date(document.getElementById("startDate").value);
    const endDate = new Date(document.getElementById("endDate").value);
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const rateType = document.querySelector('input[name="rateType"]:checked').value;

    if (isNaN(principal) || isNaN(rate) || startDate >= endDate) {
        alert("Please enter valid inputs.");
        return;
    }

    const diffTime = Math.abs(endDate - startDate);
    const durationDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const durationMonths = durationDays / 30.44;
    const durationYears = durationDays / 365;

    // Adjust rate based on selected type
    let effectiveRate = rate;
    if (rateType === "annum") {
        effectiveRate = rate / 12;
    }

    const interest = (principal * effectiveRate * durationMonths) / 100;
    const total = principal + interest;

    document.getElementById("result").innerHTML = `
        <div style="background:#e7f6ff;padding:15px;border-radius:15px;">
            📅 <b>Duration:</b> ${durationDays} days | ${durationMonths.toFixed(2)} months | ${durationYears.toFixed(2)} years<br>
            💸 <b>Interest:</b> ₹${interest.toFixed(2)}<br>
            🧾 <b>Total Amount:</b> ₹${total.toFixed(2)}
        </div>
    `;
});
