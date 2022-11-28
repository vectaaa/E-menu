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

$.ajax({
    type: "GET",
    contentType:"application/json",
    url: "url",
    // data: JSON.stringify(),
    // dataType: "dataType",
    success: function (response) {
        alert(response)

    }
});