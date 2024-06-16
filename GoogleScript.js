
const scriptURL = 'https://script.google.com/macros/s/AKfycbyV0sopi72VgS44GNKoyMAT6SDbF44TW6oC3r0nIQlCBpRnmKoHph3Xmh9Ksr-9KkfD/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})
