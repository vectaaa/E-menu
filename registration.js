$(document).ready(function () {
   
    const form = document.getElementById('nextBtn');
    const ownersName = document.getElementById('ownersName');
    const ownersEmail = document.getElementById('email');
    const ownersPassword = document.getElementById('password');
    const ownersVPassword = document.getElementById('cpassword');
    const ownersResName = document.getElementById('restaurantName');
    const ownersResAddress = document.getElementById('restaurantAddress');
    const ownersPhoneNumber = document.getElementById('phoneNumber');
    
    
    
    
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
        return false;
    
    }
    
    //Here we set the success method
    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
    
        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
        return true;
    }
    
    //This is for the email validation 
    const isValidEmail = ownersEmail => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(ownersEmail).toLowerCase());
        
    }
    
    const validateInputs = () => {
        const ownersNameValue = ownersName.value.trim();
        const ownersEmailValue = ownersEmail.value.trim();
        const ownersPasswordValue = ownersPassword.value.trim();
        const ownersVPasswordValue = ownersVPassword.value.trim();
        const ownersResNameValue = ownersResName.value.trim();
        const ownersResAddressValue = ownersResAddress.value.trim();
        const ownersPhoneNumberValue = ownersPhoneNumber.value.trim();
        
        let result = false;
    
    
        if(ownersNameValue === '') {
            result = setError(ownersName, 'Owners Name is required')
        } else{
             result = setSuccess(ownersName);
        }
    
        if(ownersEmailValue === '') {
            result = setError(ownersEmail, 'Owners Name is required')
        } else if(!isValidEmail(ownersEmailValue)){
            result = setError(ownersEmail, 'Provide a vaild email address');
        }
        else{
            result = setSuccess(ownersEmail);
        }
    
        if(ownersPasswordValue === '') {
            result = setError(ownersPassword, 'Password is required');
        } else if (ownersPasswordValue.length < 8){
            result = setError(ownersPassword, 'Password must be atleast 8 characters')
        } else {
            result =  setSuccess(ownersPassword);
        }
    
        if(ownersVPasswordValue === '') {
            result = setError(ownersVPassword, 'Password is required');
        } else if (ownersVPasswordValue !== ownersPasswordValue){
            result = setError(ownersVPassword, 'Passwords must be identical')
        } else {
            result = setSuccess(ownersVPassword);
        }   
    
        if(ownersResNameValue === '') {
            result = setError(ownersResName, 'Restuarant Name is required')
        } else{
            result = setSuccess(ownersResName);
        }
    
        if(ownersResAddressValue === '') {
            result = setError(ownersResAddress, 'Restuarant Address is required')
        } else{
            result =  setSuccess(ownersResAddress);
        }
    
        if(ownersPhoneNumberValue === '') {
            result = setError(ownersPhoneNumber, 'PhoneNumber is required')
        } else{
            result = setSuccess(ownersPhoneNumber);
        }
    
        return result;
    }
    
    
    
       
        let obj = {
    
        }
    
        $('#cacFileName').change(()=>{
            imgurlConvert().then(result=>{
                obj.imgUrl = result;
                console.log(result)
                // $("#test").attr("src", result);
            })
        })
        let imgurlConvert = () => {
            return new Promise((resolve, reject) => {
                let input = document.getElementById('cacFileName');
                let file = input.files[0];
                let fr = new FileReader();
                fr.readAsDataURL(file);
                fr.onload =()=> resolve(fr.result)
                fr.onerror = error => reject(error);
            })
        }
    
    
        // $('').attr('src', value);
    
        $('.nextBtn').click(function (e) { 
            e.preventDefault();
    
            let res = validateInputs();
    
            if(res == false){
                console.log('wrong validation')
                return
            }
            console.log("validated")
    
            obj.ownersName = $('#ownersName').val();
            obj.email = $('#email').val();
            obj.password = $('#password').val();
            // obj.cpassword = $('#cpassword').val();
            obj.restaurantName = $('#restaurantName').val();
            obj.restaurantAddress = $('#restaurantAddress').val();
            obj.phoneNumber = $('#phoneNumber').val();
    
            // let restaurant = $('#rname').val();
            
    
    
            // if(name.length <=0){
    
            //     return
            // }
            
            // if()
            
            // const form = document.getElementById('reg-form');
            // const formData = new FormData(form);
        //    + console.log(obj)
    
    
            $.ajax({
                type: "POST",
                contentType: "application/json",
              // headers: {
                //     'Access-Control-Allow-Origin': '*',
                //     'Content-Type':'application/json'
                // },
                url: "http://localhost:8080/restaurants/signup",
                // data:JSON.stringify(obj),
                // dataType: "dataType",
                success: function (response) {
                    console.log(response)
                    window.location = "Login.html"
                },
                // error:(error)=>{
                //     alert(error)
                // }
            
            });
        
          
            
        });
    
    });