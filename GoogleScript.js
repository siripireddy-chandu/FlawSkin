
// const scriptURL = 'https://script.google.com/macros/s/AKfycbyV0sopi72VgS44GNKoyMAT6SDbF44TW6oC3r0nIQlCBpRnmKoHph3Xmh9Ksr-9KkfD/exec'

// const form = document.forms['contact-form']

// form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//         .then(response => alert("Thank you! your order is successfully confirmed."))
//         .then(() => { window.location.reload(); })
//         .catch(error => console.error('Error!', error.message))
// })

const scriptURL = 'https://script.google.com/macros/s/AKfycbyxhOTrUIJKxe-4Q9wz0URt4xKNssCfbfqajPraST5aR0CuPuxfpjNF1hpbJvbgzRCx/exec';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.forms['contact-form'];

    form.addEventListener('submit', e => {
        e.preventDefault();

        // Validate mobile number
        const number = form.elements['number'].value;
        const numberPattern = /^[6-9]\d{9}$/;

        if (!number) {
            alert("Please enter a mobile number.");
            return;
        }

        if (!numberPattern.test(number)) {
            alert("Mobile number should start with 6, 7, 8, or 9 and be 10 digits long.");
            return;
        }

// Validate date
const dateTime = form.elements['Date Time'].value;
const selectedDate = new Date(dateTime);
const today = new Date();
today.setHours(0, 0, 0, 0); // Set time to 00:00:00 for comparison

if (selectedDate < today) {
    alert("The date and time cannot be earlier than today's date.");
    return;
}

// Validate year (ensure it is 4 digits)
const year = selectedDate.getFullYear();
if (year.toString().length !== 4) {
    alert("The year must be exactly 4 digits long.");
    return;
}

// If validation passes, submit the form
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                alert("Thank you! Your order confirmed.");
                window.location.reload();
            })
            .catch(error => console.error('Error!', error.message));
    });
});