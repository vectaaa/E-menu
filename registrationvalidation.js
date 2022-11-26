const form = document.getElementById('reg-form');
const ownersName = document.getElementById('#ownersName');
const ownersEmail = document.getElementById('#email');
const ownersPassword = document.getElementById('#password');
const ownersVPassword = document.getElementById('#cpassword');
const ownersResName = document.getElementById('#restaurantName');
const ownersResAddress = document.getElementById('#restaurantAddress');
const ownersPhoneNumber = document.getElementById('#phoneNumber');

form.addEventListener('', e => {
    e.preventDefault();

    validateInputs();
});

//Here we set the error method
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}

//Here we set the success method
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

//This is for the email validation 
const isValidEmail = ownersEmail => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(ownersEmail).toLowerCase());
    
}

const validateInputs = () => {
    const ownersNameValue = ownersNameValue.value.trim();
    const ownersEmailValue = ownersEmailValue.value.trim();
    const ownersPasswordValue = ownersPasswordValue.value.trim();
    const ownersVPasswordValue = ownersVPasswordValue.value.trim();
    const ownersResNameValue = ownersResNameValue.value.trim();
    const ownersResAddressValue = ownersResAddressValue.value.trim();
    const ownersPhoneNumberValue = ownersPhoneNumberValue.value.trim();
    

    if(ownersNameValue === '') {
        setError(ownersEmail, 'Owners Name is required')
    } else{
         setSuccess(ownersName);
    }

    if(ownersEmailValue === '') {
        setError(ownersEmail, 'Owners Name is required')
    } else if(!isValidEmail(ownersEmailValue)){
        setError(ownersEmail, 'Provide a vaild email address');
    }
    else{
         setSuccess(ownersEmail);
    }

    if(ownersPassword === '') {
        setError(ownersPassword, 'Password is required');
    } else if (ownersPasswordValue.length < 8){
        setError(ownersPassword, 'Password must be atleast 8 characters')
    } else {
        setSuccess(ownersPassword);
    }

    if(ownersVPassword === '') {
        setError(ownersVPassword, 'Password is required');
    } else if (ownersVPasswordValue !== ownersPassword){
        setError(ownersVPassword, 'Password must be atleast 8 characters')
    } else {
        setSuccess(ownersVPassword);
    }   

}