import '../index.css'
function TaskListItem({tarea,onTareaCompletada,onEliminarTarea}) {

  return (
    
    <li className="para-li">
        <input type="checkbox" checked={tarea.completada}
        onChange={(evento) => onTareaCompletada(evento.target.checked,tarea.id) }/>
           <span className={tarea.completada ? 'tarea-completada' : ''} >
            {tarea.texto}</span>
            {tarea.completada && (<button onClick={() => onEliminarTarea(tarea.id)}>Eliminar tarea</button>)}
            
    </li>


  )
}

export default TaskListItem