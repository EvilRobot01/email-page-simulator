//Variables
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message'),
      resetBtn = document.getElementById('resetBtn'),
      sendEmailForm = document.getElementById('email-form');

// Event Listeners
eventListeners();

function eventListeners() {
     // App Init
     document.addEventListener('DOMContentLoaded', appInit);

     // Validate the forms
     email.addEventListener('blur', validateForm);
     subject.addEventListener('blur', validateForm);
     message.addEventListener('blur', validateForm);

     // Send Email & reset button
     sendEmailForm.addEventListener('submit', sendEmail);
     resetBtn.addEventListener('click', resetForm);
}

//App Initialization
function appInit(){
sendBtn.disabled = true;
}

function sendEmail(e){
    e.preventDefault();

    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'block';

    const sendEmailImg = document.createElement('img');
    sendEmailImg.src = 'img/mail.gif';
    sendEmailImg.style.display = 'block';

    setTimeout(function(){
        spinner.style.display = 'none';
        document.querySelector('#loader').appendChild(sendEmailImg);
        setTimeout(function(){
            sendEmailForm.reset();
            sendEmailImg.remove();
        }, 5000);


    }, 3000);

}

//Validate Form
function validateForm(){
    let errors;

    //Validate the length of the forms
    validateLength(this);

    //Validate the email
    if(this.type==='email'){
        validateEmail(this);
    }

    //Return errors
    errors = document.querySelectorAll('.error');

    //Check for no empty inputs
    if(email.value !=='' && subject.value !=='' && message.value !== ''){
        if(error.length === 0){
            sendBtn.disabled = false;
        }

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

//Reset form
function resetForm(){
    sendEmailForm.reset();

}