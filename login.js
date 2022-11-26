$(document).ready(function (){
    let obj = {

    }

    $('.nextBtnLg').click(function (e) {
        e.preventDefault();

        obj.email = $('#lgemail').val();
        obj.password = $('#lgpassword').val();
        console.log(obj)

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
                console.log('accepted')
                // window.location = "login.html"
            },
            error: function(response){
                console.log(response)
            }
        })


        
    })
});