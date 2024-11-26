let btn = document.querySelector('#colorChanger');
let body=document.body;

function randomColorGenerator(){
  let red = Math.floor(Math.random()*255);
  let blue = Math.floor(Math.random()*255);
  let green = Math.floor(Math.random()*255);
let randomColor= `rgb(${red},${blue},${green})`;
return randomColor;
 
}




btn.addEventListener('click',  function(){

  let randomColor = randomColorGenerator();
  body.style.backgroundColor= randomColor;
  document.querySelector('#colorValue').textContent=randomColor;
  console.log("you Clicked me");
  console.log(randomColor);
  
}  )

