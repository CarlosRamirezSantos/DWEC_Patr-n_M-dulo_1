export const TaskManager = (() => {
    const tareas = [];

    const agregarTarea = (tarea) => {
        tareas.push(tarea);
    };

    const listarTareas = () => {
        tareas.forEach((tarea, i) => {
            console.log(`${i + 1}: ${tarea.texto} (completada: ${tarea.completada})`);
        });
    };

    const marcarCompletada = (indice) => {
        if (tareas[indice]) {
            tareas[indice].completada = true;
        }
    };

    const eliminarTarea = (indice) => {
        if (tareas[indice]) {
            tareas.splice(indice, 1);
        }
    };

    return {
        agregarTarea,
        listarTareas,
        marcarCompletada,
        eliminarTarea,
        get tareas() { return tareas; }
    };
})();
