

let email = document.forms['form']['email']
let password = document.forms['form']['password']
const form  = document.getElementById('form')
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');


email.addEventListener('textInput', email_verify)
password.addEventListener('textInput', password_verify)

form.addEventListener('submit', (event)=> {
    event.preventDefault()
})

function validate() {
    console.log("hello")
    // const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.value.length < 9){
        email.style.border = "2px solid red"
        emailError.style.display="block"
        emailError.innerText="Something wrong with your email"
        email.focus()
        return false
    }
    if(password.value.length < 8){
        password.style.border = "2px solid red"
        passwordError.style.display="block"
        passwordError.innerText="Something wrong with your password"
        password.focus()
        return false
    }
}

function email_verify(){
    if(email.value.length >=8){
        email.style.border = "2px solid silver";
        emailError.style.display= "none"
        return true
    }
}

function password_verify(){
    if(password.value.length >=5){
       password.style.border = "2px solid silver";
        passwordError.style.display = "none"
        return true
    }
}
