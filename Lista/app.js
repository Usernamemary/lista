document.getElementById('formTask').addEventListener('submit',saveTask);

function saveTask(e) {
  let titulo = document.getElementById('titulo').value;
  let description = document.getElementById('description').value;
  const task = {
    titulo,
    description
  };
  if (localStorage.getItem('tasks')=== null){
    let tasks =[];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else  {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
     localStorage.setItem('tasks',JSON.stringify(tasks));
  }

getTasks();
document.getElementById('formTask').reset();
e.preventDefault();

}

function getTasks() {
  let tasks =JSON.parse(localStorage.getItem('tasks'));
  let tasksView= document.getElementById('tasks');

  tasksView.innerHTML='';

  for(let i=0; i< tasks.length; i++) {
    let titulo = tasks[i].titulo;
    let description = tasks[i].description;
    tasksView.innerHTML+=
    `<div class="card mb-3">
    <div class="card-body">
    <p id="dones">${titulo}-<br>${description}</p>
    <a class="danger" onclick="deleteTask('${titulo}')">Borrar <i class="fas fa-minus-circle"></i></a>
    <a class="done" onclick="doneTask('${titulo}')">Hecho <i class="fas fa-check-circle"></i></a>

    </div>
    </div>`
  }
}


function deleteTask(titulo) {
let tasks= JSON.parse(localStorage.getItem('tasks'));
for(let i=0; i<tasks.length; i++){
if (tasks[i].titulo == titulo){
  tasks.splice(i, 1)

    }

  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();

}




function doneTask() {
  let tasks =JSON.parse(localStorage.getItem('tasks'));
  let tasksView= document.getElementById('tasks');

  tasksView.innerHTML='';

  for(let i=0; i< tasks.length; i++) {
    let titulo = tasks[i].titulo;
    let description = tasks[i].description;
    
    tasksView.innerHTML+=
    `<div class="card mb-3">
    <div class="card-body">
    <p class="checked">${titulo}-<br class="checked">${description}</p>
    <a class="danger" onclick="deleteTask('${titulo}')">Borrar <i class="fas fa-minus-circle"></i></a>
    <a class="done" onclick="doneTask('${titulo}')">Hecho <i class="fas fa-check-circle"></i></a>

    </div>
    </div>`
  }
}