$(document).ready(function () {
    
   
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

        obj.name = $('#ownersName').val();
        obj.email = $('#email').val();
        obj.password = $('#password').val();
        obj.restaurant = $('#restaurantName').val();
        obj.restaurantAddress = $('#restaurantAddress').val();
        obj.phoneNumber = $('#phoneNumber').val();

        // let restaurant = $('#rname').val();
        


        // if(name.length <=0){

        //     return
        // }
        
        // if()
        
        // const form = document.getElementById('reg-form');
        // const formData = new FormData(form);
        console.log(obj)


        $.ajax({
            type: "POST",
            contentType: "application/json",
            // headers: {
            //     'Access-Control-Allow-Origin': '*',
            //     'Content-Type':'application/json'
            // },
            url: "http://localhost:8080/restaurants/signup",
            data:JSON.stringify(obj),
            // dataType: "dataType",
            success: function (response) {
                alert(response)
                window.location = "registration.html"
            },
            // error:(error)=>{

            //     alert(error)
            // }
        
        });
    
      
        
    });

});