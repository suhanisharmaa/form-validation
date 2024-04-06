const form = document.querySelector('.form');
const username = document.getElementById('username');
const emailid = document.getElementById('emailid');
const password = document.getElementById('Password');
const Confirm_Password = document.getElementById('Confirm_Password');
const btn = document.querySelector('#btn');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
    if (validateInputs()) {
        form.reset();
    }
})

const validateInputs = () => {
    const uservalue = username.value.trim();
    const mailvalue = emailid.value.trim();
    const pwvalue = password.value.trim();
    const cpwvalue = Confirm_Password.value.trim();

    if(uservalue === ''){
        setError(username,"Username is required");
    }
    else{
        setSuccess(username);
    }

    if(mailvalue === ''){
        setError(emailid,"Email is required");
    }
    else if(!isValidEmail(mailvalue)){
        setError(emailid,"Please provide a valid email id");
    }
    else{
        setSuccess(emailid);
    }

    if(pwvalue === ''){
        setError(password,"Password is required");
    }
    else if(pwvalue.length < 8){
        setError(password,"Password should be 8 or more characters");
    }
    else{
        setSuccess(password);
    }

    if(cpwvalue === ''){
        setError(Confirm_Password,"Please confirm password");
    }
    else if(cpwvalue !== pwvalue){
        setError(Confirm_Password,"Password does not match");
    }
    else{
        setSuccess(Confirm_Password);
    }

}

const setError = (element,message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';

    inputControl.classList.add('success');
    inputControl.classList.remove('error');

}

function isValidEmail(email){
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
