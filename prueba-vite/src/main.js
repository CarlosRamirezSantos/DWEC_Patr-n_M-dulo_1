import './style.css';
import { TaskManager } from './taskManager.js';

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

const actualizarLista = () => {
    taskList.innerHTML = '';
    TaskManager.tareas.forEach((tarea, index) => {
        const li = document.createElement('li');
        li.textContent = tarea.texto;

        if (tarea.completada) {
            li.classList.add('task-completed');
        }

        const btnCompletar = document.createElement('button');
        btnCompletar.textContent = 'Hecho';
        btnCompletar.onclick = () => {
            TaskManager.marcarCompletada(index);
            actualizarLista();
        };

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.onclick = () => {
            TaskManager.eliminarTarea(index);
            actualizarLista();
        };

        const acciones = document.createElement('div');
        acciones.className = 'task-actions';
        acciones.appendChild(btnCompletar);
        acciones.appendChild(btnEliminar);

        li.appendChild(acciones);
        taskList.appendChild(li);
    });
};

taskForm.addEventListener('submit', e => {
    e.preventDefault();
    const texto = taskInput.value.trim();
    if (texto === '') return;
    TaskManager.agregarTarea({ texto, completada: false });
    taskInput.value = '';
    actualizarLista();
});


actualizarLista();
