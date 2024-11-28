var todo = [{ id1: "", }, { id: "", }]

const todoForm = document.querySelector('.form-todo');



todoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(e.target.innerHTML);
  const inputValue = document.querySelector('#todo-input');
  let inputvalue = inputValue.value;
  console.log(inputvalue);
  inputValue.value = "";


})


