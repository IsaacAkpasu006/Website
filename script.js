document.getElementById('paymentForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get values from the form
    const cardNumber = document.getElementById('cardNumber').value;
    const expirationDate = document.getElementById('expirationDate').value;
    const cvv = document.getElementById('cvv').value;

    // Simple validation
    if (!validateCardNumber(cardNumber)) {
        showMessage('Invalid card number. Please enter a valid 16-digit card number.', 'error');
        return;
    }

    if (!validateExpirationDate(expirationDate)) {
        showMessage('Invalid expiration date. Please enter a valid MM/YY format.', 'error');
        return;
    }

    if (!validateCVV(cvv)) {
        showMessage('Invalid CVV. Please enter a 3-digit CVV number.', 'error');
        return;
    }

    // If all validations pass
    showMessage('Payment submitted successfully!', 'success');
});

// Card number validation (simple check for length)
function validateCardNumber(cardNumber) {
    return /^\d{16}$/.test(cardNumber); // Validates that the card number is exactly 16 digits
}

// Expiration date validation (MM/YY)
function validateExpirationDate(expirationDate) {
    return /^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(expirationDate);
}

// CVV validation (3 digits)
function validateCVV(cvv) {
    return /^\d{3}$/.test(cvv);
}

// Function to display messages
function showMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.color = type === 'error' ? 'red' : 'green';
}