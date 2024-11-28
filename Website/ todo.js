 

const todoForm = document.querySelector('.form-todo');
const todoList =document.querySelector('.todo-list');


todoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(e.target.innerHTML);
  const inputValue = document.querySelector('#todo-input');
  let inputvalue = inputValue.value;
  const newLi= document.createElement('li');
 
  const newliInnerHTML=  `<span class="text">${inputvalue}</span>
          <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
          </div> 
` 
if(inputValue.value){
newLi.innerHTML=newliInnerHTML;
todoList.append(newLi);
}
else{
  alert("please describe the name of todo")
}
inputValue.value="";
})


todoList.addEventListener('click',(e)=>{
  if(e.target.classList.contains("done")){
 let liSpan = e.target.parentNode.previousElementSibling;
 liSpan.style.textDecoration="line-through";

  }
 if(e.target.classList.contains("remove")){
     let targetedLi= e.target.parentNode.parentNode;
targetedLi.remove(targetedLi);

 }
})