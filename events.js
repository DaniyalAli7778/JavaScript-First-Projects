var allButtons = document.querySelectorAll('.all-button button');

console.log(allButtons);
 

// for (let i=0; i < allButtons.length; i++) {
//     allButtons[i].addEventListener("click", function(){
//        console.log(this);
       
// //   });
// }
let num=0;
allButtons.forEach(function (buttons){
buttons.addEventListener("click", function(e){
      
        setTimeout(function change (){
            console.log(num);
            
            if(num===0) {
            buttons.style.backgroundColor="yellow";
            buttons.style.color="red";}
           
            
          if(num==0){
            num++;
            console.log(num);
          }
       
         }, ) ;
       
   
    
    });
    buttons.addEventListener("click", function(e){
  if (num===1) {
    --num;
     
  }
  else{
    if(num===0) {
        buttons.style.backgroundColor="white";
        buttons.style.color="blue    ";}
  }
  console.log(num);
      
       
    
    });
    

}
 )
 
