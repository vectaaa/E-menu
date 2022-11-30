import {USERID} from "./keys.js"

$(document).ready(function (){
    let state = false;
    const form = document.getElementById('nextBtnLg');
    const ownersEmail = document.getElementById('lgemail');
    const ownersPassword = document.getElementById('lgpassword');

    // form.addEventListener('submit', e => {
    //     // e.preventDefault();
    
    //     validateInputs();
    // });
    
    // const onFormSubmit = (e)=> {
    //     e.preventDefault();
    //     alert(ownersName.value)
    
    // }
    
    // form.addEventListener('submit', onFormSubmit);
    
    
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
        const ownersEmailValue = ownersEmail.value.trim();
        const ownersPasswordValue = ownersPassword.value.trim();
        
        if(ownersEmailValue === '') {
            setError(ownersEmail, 'Owners Name is required')
            state = false
        } else if(!isValidEmail(ownersEmailValue)){
            setError(ownersEmail, 'Provide a vaild email address');
            state = true
        }
        else{
             setSuccess(ownersEmail);
             state = true
        }
    
        if(ownersPassword === '') {
            setError(ownersPassword, 'Password is required');
            state = false
        } else if (ownersPasswordValue.length < 8){
            setError(ownersPassword, 'Password must be atleast 8 characters')
            state = false
        } else {
            setSuccess(ownersPassword);
            state =true
        }
    }
    
    // $('.nextBtnLg').click(function (e) { 
    //     e.preventDefault();
    //     validateInputs();
    
    //     console.log("validated")
    // });


    let obj = {

    }

    $('.nextBtnLg').click(function (e) {
        e.preventDefault();

        obj.email = $('#lgemail').val();
        obj.password = $('#lgpassword').val();
        console.log(obj)

       validateInputs()
       if(!state)
       return

        $.ajax({
            type: "POST",
            contentType: "application/json",
            // headers: {
            //     'Access-Control-Allow-Origin': '*',
            //     'Content-Type':'application/json'
            // },
            url: "http://localhost:8080/restaurants/login/sendLogin",
            data:JSON.stringify(obj),
            // dataType: "dataType",
            success: function (response) {
                // console.log('accepted')
                console.log(USERID)
                console.log(response);
                

                //I handle the session storage here.
                let userSession = {
                    
                }
                
                userSession.email = response.email;
                userSession.restaurantName = response.restaurantName;
                userSession.restaurantId = response.id;


                console.log(userSession);
                sessionStorage.setItem(USERID,JSON.stringify(userSession));

                //
            window.location = "../dashboardpages/AddMenu.html"
            },
            error: function(response){
                console.log(response)
            }
        })


        
    })
});
