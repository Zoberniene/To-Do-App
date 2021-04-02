'use strict'

const btnAdd = document.querySelector('#add');
const prior = document.querySelector('#priority');
const toDo = document.querySelector('#task');

btnAdd.addEventListener('click', function (e) {
   e.preventDefault();
   addToDo();
});

function addToDo() {
   if (toDo.value) {
      console.log(toDo.value);
      console.log(prior.value);
   } else {
      alert('Please enter a new task');
   }
}