//Variables
const sendBtn = document.getElementById('sendBtn');
      email = document.getElementById('email');
      subject = document.getElementById('subject');
      message = document.getElementById('message');

//Event listeners
addEventListeners();

function addEventListeners(){
    //App init
    document.addEventListener('DOMContentLoaded', appInit);

    //Validate the forms
    email = document.addEventListener('blur', validateForm);
    subject = document.addEventListener('blur', validateForm);
    message = document.addEventListener('blur', validateForm);
}

//Functions


//App Initialization
function appInit(){
sendBtn.disabled = true;
}

//Validate Form
function validateForm(){
    let errors;

    //Validate the length of the forms\
    validateLength(this);

    //Validate the email
    if(this.type==='email'){
        validateEmail(this);
    }
    
}

//Validate the forms' lengths
function validateLength(field){
    if(field.value.length > 0){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

//Validate the email
function validateEmail(field){
    let emailText = field.value;
    if(emailText.indexOf('@') !== -1){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}