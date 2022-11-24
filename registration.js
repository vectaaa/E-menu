$(document).ready(function () {
    
   
    let obj = {

    }


    $('#cacimage').change(()=>{
        imgurlConvert().then(result=>{
            obj.imgUrl = result;
            console.log(result)
            // $("#test").attr("src", result);
        })
    })
    let imgurlConvert = () => {
        return new Promise((resolve, reject) => {
            let input = document.getElementById('cacimage');
            let file = input.files[0];
            let fr = new FileReader();
            fr.readAsDataURL(file);
            fr.onload =()=> resolve(fr.result)
            fr.onerror = error => reject(error);
        })
    }


    $('.nextBtn').click(function (e) { 
        // e.preventDefault();

        obj.name = $('#fname').val();
        obj.email = $('#email').val();
        let restaurant = $('#rname').val();
        


        // if(name.length <=0){

        //     return
        // }
        
        // if()
        
        const form = document.getElementById('reg-form');
        const formData = new FormData(form);
        console.log(obj)


        $.ajax({
            type: "POST",
            url: "http://localhost:8080/restaurant/login",
            data: obj,
            // dataType: "dataType",
            success: function (response) {
                alert(response)
                window.location = "login.html"
            },
            error:(error)=>{

                alert(error)
            }
        
        });
    
      
        
    });

});