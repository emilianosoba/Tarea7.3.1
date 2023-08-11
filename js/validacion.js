function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

let name = document.getElementById('nombre').value;
let sname = document.getElementById('apellido').value;
let email = document.getElementById('email').value;
let passValidation;

if (getElementById('password1') == getElementById('password2')) {
    passValidation = true;
}

if ( name != '' && sname != '' && email != '' && email.includes('@') && passValidation) {
    showAlertSuccess();
} else {
    showAlertError();
}