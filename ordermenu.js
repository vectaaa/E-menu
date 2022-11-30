$(document).ready(function () {
    



//The Cart Counter
const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
num =  document.querySelector(".num");

let a = 1;
 plus.addEventListener("click", ()=>{
  a++;
  a = (a < 10) ? "0" + a : a;
  num.innerText = a;
  console.log(a);
 })

 minus.addEventListener("click", ()=>{
  if(a > 1){
  a--;
  a = (a < 10) ? "0" + a : a;
  num.innerText = a;
  console.log(a);
  }
 });

 
function MealData(singleItem) {
    return `
    <div class="menu">
        
          <div class="menu-arrange">
               <div class="main-menu">
                  <p style="margin-left: 21px; margin-top: 10px; margin-bottom: 10px;">Main</p>
                   <img src="imgs/food.jpg" alt="rice and stew" style="width:80px; border-radius: 50%;">
                    </div>
                     <div class="main-menu-text">
                        <p style="font-weight: bold;">${singleItem.name}</p>
                            <p>Delicious Fried rice with glazed brown color and a touch of class</p>
                          </div>
                            <div class="menu-price-button">
                            <p style="font-weight: bold;">₦1,400</p>
                            <br><br>
                            <img src="imgs/addicon.png" alt="add to cart" style="width: 20px;">
                          </div>
                      
          </div>
            
      </div><br><br><br>`
}



// const header = document.querySelector("header");

// window.addEventListener("scroll", function() {
// 	header.classList.toggle("sticky", window.scrollY > 0);
// });

// let menu =  document.querySelector('#menu-icon');
// let navbar =  document.querySelector('.navbar');

// menu.onclick = () => {
// 	menu.classList.toggle('bx-x');
// 	navbar.classList.toggle('open');
// };

// window.onscroll = () => {
// 	menu.classList.remove('bx-x');
// 	navbar.classList.remove('open');
// };

// const sr = ScrollReveal ({
// 	distance: '60px',
// 	duration: 2500,
// 	reset: true
// });

// sr.reveal('.home-text',{delay:200, origin:'left'});
// sr.reveal('.home-img',{delay:200, origin:'right'});

// sr.reveal('.container, .about, .menu, .contact',{delay:200, origin:'bottom'});



  $.ajax({
    type: "GET",
    contentType:"application/json",
    url: "http://localhost:8080/meals",
    //data: JSON.stringify(),
    // dataType: "dataType",
    success: function (response) {
        // alert(response)
        console.log(response.responseJSON
            )
        $.each(response
            , function (indexInArray, valueOfElement) { 

                if(response.mealType == 'Main'){

                    $('.flex-item2').append(
                        MealData(valueOfElement)
                     );

                }else if(response.mealType == 'Sides'){
                    
                    $('.flex-item2').append(
                        MealData(valueOfElement)
                     );

                }else if(response.mealType == 'Soups'){
                    $('.flex-item2').append(
                        MealData(valueOfElement)
                     );
                }else if(response.mealType == 'Proteins'){
                    $('.flex-item2').append(
                        MealData(valueOfElement)
                     );
                }else if(response.mealType == 'Drinks'){
                    $('.flex-item2').append(
                        MealData(valueOfElement)
                     );
                }else if(response.mealType == 'Salads'){
                    $('.flex-item2').append(
                        MealData(valueOfElement)
                     );
                }


            
        });

        console.log(response);
    
    },
    error: function(response){
        console.log(response)
    }
});

});
