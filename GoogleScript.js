
// const scriptURL = 'https://script.google.com/macros/s/AKfycbyV0sopi72VgS44GNKoyMAT6SDbF44TW6oC3r0nIQlCBpRnmKoHph3Xmh9Ksr-9KkfD/exec'

// const form = document.forms['contact-form']

// form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//         .then(response => alert("Thank you! your form is submitted successfully."))
//         .then(() => { window.location.reload(); })
//         .catch(error => console.error('Error!', error.message))
// })


const scriptURL = 'https://script.google.com/macros/s/AKfycbyV0sopi72VgS44GNKoyMAT6SDbF44TW6oC3r0nIQlCBpRnmKoHph3Xmh9Ksr-9KkfD/exec'

        document.addEventListener('DOMContentLoaded', () => {
            const form = document.forms['request-form'];

            form.addEventListener('submit', e => {
                e.preventDefault();

                // Validate mobile number
                const number = form.elements['Number'].value;
                const numberPattern = /^[6-9]\d{9}$/;

                if (!number) {
                    alert("Please enter a mobile number.");
                    return;
                }

                if (!numberPattern.test(number)) {
                    alert("Mobile number should start with 6, 7, 8, or 9 and be 10 digits long.");
                    return;
                }

                // If validation passes, submit the form
                fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                    .then(response => {
                        alert("Thank you! Your request is received successfully.");
                        window.location.reload();
                    })
                    .catch(error => console.error('Error!', error.message));
            });
        });