const newToDoInput = document.querySelector('.input-todo')
const addToDoBtn = document.querySelector('.btn-todo-elaveet')
const todoContainer = document.querySelector('.todo-siyahisi')

addToDoBtn.addEventListener('click', addToDo);
todoContainer.addEventListener('click', deleteOrRemoveTodoList);



function deleteOrRemoveTodoList (e) {
   const kliklenenElement = e.target
   if(kliklenenElement.classList.contains('todo-btn-done')) {
      kliklenenElement.parentElement.classList.toggle('todo-done')
   }

   if(kliklenenElement.classList.contains('todo-btn-sil')) {
      kliklenenElement.parentElement.classList.add('delete')
  }
}

function addToDo (e) {
   e.preventDefault();

   const todoDiv = document.createElement('div');
   todoDiv.classList.add('todo-item');

   const todoLi = document.createElement('li');
   todoLi.classList.add('todo-tanitim');
   todoLi.innerText = newToDoInput.value;
   todoDiv.appendChild(todoLi);

   const editBtn = document.createElement('button');
   editBtn.className = 'todo-btn todo-btn-done';
   editBtn.innerHTML= '<i class="fa fa-check" aria-hidden="true"></i>';
   todoDiv.appendChild(editBtn);

   const todoTrashBtn = document.createElement('button');
   todoTrashBtn.className = 'todo-btn todo-btn-sil';
   todoTrashBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
   todoDiv.appendChild(todoTrashBtn);


   todoContainer.appendChild(todoDiv)
   newToDoInput.value = ''
}

var i=0,text;
text = "Here's my To-Do List"

function typing() {
   if(i<text.length){
      document.getElementById('text').innerHTML += text.charAt(i);
      i++;
      setTimeout(typing,80);
   }
}
typing()


