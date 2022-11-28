import {USERID} from "../keys.js"

let user = JSON.parse(sessionStorage.getItem(USERID));
console.log(user);
$('#resEmail').html(user.email);
$('#resAddress').html(user.restuarantName);

$(document).ready(function () {
    
   
    let obj = {

    }


    $('#foodimg').change(()=>{
        imgurlConvert().then(result=>{
            obj.imgUrl = result;
            console.log(result)
            // $("#test").attr("src", result);
        })
    })
    let imgurlConvert = () => {
        return new Promise((resolve, reject) => {
            let input = document.getElementById('foodimg');
            let file = input.files[0];
            let fr = new FileReader();
            fr.readAsDataURL(file);
            fr.onload =()=> resolve(fr.result)
            fr.onerror = error => reject(error);
        })
    }


    $("#mealdropdown").change(function (e) {
        e.preventDefault();
        console.log(e.target.id);
        let text = $("#mealdropdown option:selected").text();
        obj.mealType = text;
        // category = text;
      });

    
     //JQClick to handle clicks in the button
    $('.nextBtnAdd').click(function (e) { 

        e.preventDefault(); // it cnacels the default action that belongs to the event will not occur.

        obj.name = $('#fname').val();
        obj.time = $('#mtime').val();
        obj.desc = $('#mdesc').val();
        obj.amount = $('#mamount').val();


        console.log(obj)
    

        // let restaurant = $('#rname').val();
        


        // if(name.length <=0){

        //     return
        // }
        
        // if()
        
        // const form = document.getElementById('main-reg');
        // const formData = new FormData(form);
        // console.log(obj)

        //Jquery population to HTML 
        


        $.ajax({
            type: "POST",
            
            contentType: "application/json; charset=utf-8",
            // headers: {
            //     // //     'Access-Control-Allow-Origin': '*',
            //     // enctype : multipart/FormData
            // },
            url: 'http://localhost:8080/meals/createMeals',
            data:JSON.stringify(obj),
            dataType: "json",
            success: function (response) {
                console.log("Uploaded Successfully")

                alert(response)
                window.location = "AddMenu.html"
            },
        
            // error:(error)=>{

            //     alert(error)
            // }
        
        })
      
        
    });

});