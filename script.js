'use strict'

const btnAdd = document.querySelector('#add');
const prior = document.querySelector('#priority');
const toDo = document.querySelector('#task');
const deadline = document.querySelector('#deadline');
const form = document.querySelector('form');
const table = document.querySelector('table');
const toDoList = document.querySelector('tbody');
let doneArray = [];

btnAdd.addEventListener('click', function (e) {
   e.preventDefault();
   addToDo();
   //toDo.value = ''; clear one input
   form.reset();
});

function addToDo() {
   if (toDo.value && toDo.value.length > 5 && toDo.value.length < 160) {
      table.className = 'visible table mt-3';

      const row = document.createElement('tr');
      toDoList.append(row);

      const toDoItem = document.createElement('td');
      toDoItem.textContent = toDo.value;
      row.append(toDoItem);

      const priorShow = document.createElement('td');
      switch (prior.value) {
         case 'High':
            priorShow.innerHTML = '<p class="btn btn-warning">' + prior.value + '</p>';
            break;
         case 'Medium':
            priorShow.innerHTML = '<p class="btn btn-success">' + prior.value + '</p>';
            break;
         case 'Low':
            priorShow.innerHTML = '<p class="btn btn-secondary">' + prior.value + '</p>';
            break;
      }
      row.append(priorShow);

      const ends = document.createElement('td');
      if (!deadline.value) {
         ends.textContent = 'No deadline';
         row.append(ends);
      } else {
         ends.textContent = `${deadline.value.slice(0, 10)} ${deadline.value.slice(11, 16)}`;
         row.append(ends);
      }


      const done = document.createElement('td');
      const check = document.createElement('input');
      check.setAttribute('type', 'checkbox');
      row.append(done);
      done.append(check);

      check.addEventListener('click', completed);

      function completed() {
         if (check.checked) {
            toDoItem.classList.add('line-through');
            ends.classList.add('line-through');
            row.classList.add('disable');
            //doneArray.push(toDoItem.value);
            console.log(row);
         } else {
            toDoItem.classList.remove('line-through');
            ends.classList.remove('line-through');
            row.classList.remove('disable');
         }
      }

      const remove = document.createElement('td');
      remove.innerHTML = '<button type="button" class="btn btn-danger">Delete</button>';
      row.append(remove);

      remove.addEventListener('click', function (e) {
         e.preventDefault();
         row.remove();
      })

   } else {
      alert('Please enter a new task that contains 5 or more symbols!');
   }
}