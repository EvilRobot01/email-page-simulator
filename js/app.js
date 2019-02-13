//Variables
const sendBtn = document.getElementById('sendBtn');
      email = document.getElementById('email');
      subject = document.getElementById('subjet');


//Event listeners
addEventListeners();

function addEventListeners(){
    //Ap init
    document.addEventListener('DOMContentLoaded', appInit);
}

//Functions


//App Initialization
function appInit(){
sendBtn.disabled = true;
}