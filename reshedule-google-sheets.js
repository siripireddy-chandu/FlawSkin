
const url = 'https://script.google.com/macros/s/AKfycbxKxURztDzrDw9R_cbvsJ2ctNnvjbvsXlh11coGqU1Gq17ROIylnpkxaQtCSUShGm5waQ/exec';

const form = document.forms['reshedule-form']

form.addEventListener('appointment', e => {
    e.preventDefault()
    fetch(form, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! your order is successfully confirmed."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})

