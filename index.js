var readlineSync = require('readline-sync');

const tasks = [];

function displayTasks() {
  if (tasks.length === 0) {
    console.log('No hay tareas en la lista');
  } else {
    console.log('Tareas:');
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. [${task.completed ? 'X' : ' '}] ${task.description}`);
    });
  }
}

function addTask(description) {
  tasks.push({
    description,
    completed: false
  });
  console.log(`Tarea "${description}" agregada.`);
}

function removeTask(index) {
  if (index >= 0 && index < tasks.length) {
    const removedTask = tasks.splice(index, 1)[0];
    console.log(`Tarea "${removedTask.description}" eliminada.`);
  } else {
    console.log('Índice de tarea no válido.');
  }
}

function completeTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = true;
    console.log(`Tarea "${tasks[index].description}" marcada como completada.`);
  } else {
    console.log(' Tarea no válido.');
  }
}

function main() {
  console.log(' Lista de tareas');
  while (true) {
    const command = readlineSync.question('Opciones: mostrar, agregar, eliminar, completar');

    switch (command.toLowerCase()) {
      case 'mostrar':
        displayTasks();
        break;
      case 'agregar':
        const description = readlineSync.question('Ingrese la tarea: ');
        addTask(description);
        break;
      case 'eliminar':
        const indexToRemove = parseInt(readlineSync.question('Ingrese el número de tarea a eliminar: '), 10) - 1;
        removeTask(indexToRemove);
        break;
      case 'completar':
        const indexToComplete = parseInt(readlineSync.question('Ingrese el número de tarea a completar: '), 10) - 1;
        completeTask(indexToComplete);
        break;

      default:
        console.log('Ingrese un comando válido.');
    }
  }
}

main();
