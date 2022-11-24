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

    

    $('.nextBtn').click(function (e) { 
        e.preventDefault();

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


        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "http://localhost:8080/meals/createMeals",
            data: obj,
            // dataType: "dataType",
            success: function (response) {
                alert(response)
                window.location = "AddMenu.html"
            },
            // error:(error)=>{

            //     alert(error)
            // }
        
        });
    
      
        
    });

});