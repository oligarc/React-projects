import { TaskObjectList } from "../Types/interfaces"
import Task from "./Task";

function TaskList({tareas} : TaskObjectList) {
  return (
    <>
    <div className="flex flex-col items-center gap-1">
      <h1 className="text-4xl text-black">TAREAS:</h1>
        <ul>
          {tareas.map( (tarea) => {
            return (
              <Task key={tarea.id} tarea={tarea} />
                    )
            })}
        </ul>
    </div>
      </>
    );
}

export default TaskList