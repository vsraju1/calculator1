let displayBox = document.querySelector(".display");
let button = document.querySelectorAll(".button")
// console.log(button[1].getAttribute('class'))


let string = "";

button.forEach((element) => {
   element.addEventListener('click', (e)=>{
   //  const buttonId = e.target.id;
   //  document.querySelector(".display").innerHTML = buttonId;
    if (e.target.innerHTML == "="){
      string = eval(string);
      displayBox.innerHTML = string;
      }
      else if(e.target.innerHTML == "AC"){
         string = "";
         displayBox.innerHTML = string;
      }
      else if(e.target.innerHTML == "DEL"){
         string = string.substring(0, string.length-1);
         displayBox.innerHTML = string;
      }
      else{
      string += e.target.innerHTML;
      displayBox.innerHTML = string;
      console.log(string)
   }
   })
});
