'use strict'

const btnAdd = document.querySelector('#add');
const prior = document.querySelector('#priority');
const toDo = document.querySelector('#task');
const deadline = document.querySelector('#deadline');
const form = document.querySelector('form');
const table = document.querySelector('table');
const toDoList = document.querySelector('tbody');

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

      const toDoitem = document.createElement('td');
      toDoitem.textContent = toDo.value;
      row.append(toDoitem);

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
         row.append('No deadline');
      } else {
         ends.textContent = deadline.value;
         row.append(ends);
      }


      const done = document.createElement('td');
      done.innerHTML = '<div class="input-group mb-3"><div class="input-group-prepend"><div class="input-group-text"><input type="checkbox" id="completed"></div></div><label class="form-control">Completed</label></div>'
      row.append(done);

      const remove = document.createElement('td');
      remove.innerHTML = '<button type="button" class="btn btn-danger">Delete</button>';
      row.append(remove);

      remove.addEventListener('click', function (e) {
         e.preventDefault();
         row.remove();
      })

   } else {
      alert('Please enter a new task whick contain 5 or more symbols!');
   }
}