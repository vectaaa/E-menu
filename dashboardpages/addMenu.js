import {USERID} from "../keys.js"

let user = JSON.parse(sessionStorage.getItem(USERID));
console.log(user);
$('#resEmail').html(user.email);
$('#resAddress').html(user.restuarantName);




$(document).ready(function () {
    
   
    let obj = {

    }

    
    function MealData(singleItem) {
        console.log(singleItem, "I am here")
        return `
        <tr>
        <td>${singleItem?.name}</td>
        <td>${singleItem?.amount}</td>
        <td>${singleItem?.description}</td>
        <td></td>
        <td><img src=""/></td>
        <td></td>
        <td>
            <button><i class='bx bxs-edit'></i></button>
            <button><i class='bx bxs-trash-alt'></i></button>
            <button><i class='bx bx-pause-circle'></i></button>
        </td>
    </tr>`
    }

    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: `http://localhost:8080/meals/Mealsbyrestaurant/${user.restaurantId}`,
        // data: "data",
        // dataType: "dataType",
        success: function (response) {
            console.log(response);

            
            $.each(response, function (indexInArray, valueOfElement) { 
                $('#tbody').append(MealData(valueOfElement));
                 
            });
            
        }
    });




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
        obj.description = $('#mdesc').val();
        obj.amount = $('#mamount').val();
        obj.restaurantId = user.restaurantId;


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
            
            contentType: "application/json",
            // headers: {
            //     // //     'Access-Control-Allow-Origin': '*',
            //     // enctype : multipart/FormData
            // },
            url: "http://localhost:8080/meals/createMeals",
            data:JSON.stringify(obj),
            // dataType: "json",
            success: function (response) {
                console.log("Uploaded Successfully")

                // $.each(response, function (indexInArray, valueOfElement) { 
                //     $('#tbody').append(MealData(valueOfElement));
                     
                // });
                alert(response)
                window.location = "AddMenu.html"
            },
            
        
            error:(error)=>{

                console.log(error)
            }
        
        })
      
        
    });

});