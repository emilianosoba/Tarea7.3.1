function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

let name = document.getElementById('nombre').value;
let sname = document.getElementById('apellido').value;
let email = document.getElementById('email').value;
let pass1 = document.getElementById('password1').value;
let pass2 = document.getElementById('password2').value;
let passValidation = pass1 === pass2;

function validation() {
    if ( name != '' && sname != '' && email != '' && email.includes('@') && passValidation) {
        showAlertSuccess();
    } else {
        showAlertError();
    }
}
