import TaskListItem from "./TaskListItem"

function TaskList({tareas,setNuevasTareas}) {

    const onTareasCompletadasHandler = (checked, id) => {
        const tempTareas = [...tareas];
        const tareaIndex = tempTareas.findIndex(tarea => tarea.id === id);
        
        if (tareaIndex !== -1) {
          tempTareas[tareaIndex].completada = checked;
          setNuevasTareas(tempTareas);
        }
      }

      const onEliminarTarea =  (id) =>{

            const tareasRestantes = tareas.filter(tarea => tarea.id !== id);
            setNuevasTareas(tareasRestantes)
      }

  return (
    <ul>
        {tareas.map( (tarea) => (
            <TaskListItem key={tarea.id} tarea={tarea} onTareaCompletada={onTareasCompletadasHandler}
            onEliminarTarea={onEliminarTarea} />
        )
        )}
    </ul>
  )
}

export default TaskList