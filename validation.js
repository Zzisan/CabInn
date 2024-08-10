document.getElementById('contactForm').addEventListener('submit', function(event) {
    let isValid = true;
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const errorElement = document.getElementById('error');

    // Validate name
    if (name === '') {
        isValid = false;
    }

    // Validate phone number (10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        isValid = false;
    }

    if (!isValid) {
        errorElement.style.display = 'block';
        event.preventDefault();  // Prevent form submission
    } else {
        errorElement.style.display = 'none';
    }
});
