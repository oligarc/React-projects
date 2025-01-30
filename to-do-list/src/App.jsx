import { useEffect, useState } from 'react'
import './App.css'
import TaskInput from './TaskInput/TaskInput'
import TaskList from './TaskList/TaskList'

function App() {

  const listaTareasIniciales = [
    {id:0,
      texto:'Limpiar',
      completada:false
    },
    {id:1,
      texto:'Estudiar React',
      completada:true
    },
    {id:2,
      texto:'Ver al Barça',
      completada:false
    }
  ]

  const[tareas,setNuevasTareas] = useState(listaTareasIniciales)
  const[tareasCompletas,setTareasCompletadas] = useState(
    listaTareasIniciales.filter(tarea => tarea.completada).length
  );



  useEffect(() =>{
    /*const tareasCompletadas = tareas.filter(tarea => tarea.completada).length;
    console.log(`Tareas completadas: ${tareasCompletadas}`)*/
    const numeroTareasCompletas = tareas.filter(tarea => tarea.completada).length
    setTareasCompletadas(numeroTareasCompletas)
  }, [tareas])

  const onNewTareaHandler = (nuevaTarea) =>{
    setNuevasTareas((tareasActuales) => [...tareasActuales,nuevaTarea])
  }


  return (
    <>
      <TaskInput onNuevaTarea={onNewTareaHandler} />
      <TaskList tareas={tareas} setNuevasTareas={setNuevasTareas} />
      <h2>Número de tareas completadas : {tareasCompletas}</h2>
    </>
  )
}

export default App
