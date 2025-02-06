import { TaskProps } from "../Types/interfaces"

function Task({tarea} : TaskProps) {

  return (
    <>
    <li>
    <input type="checkbox" checked={tarea.completed}></input>
    <span className="text-black mx-1">{tarea.text}</span>
    </li>
    
    </>
  )
}

export default Task