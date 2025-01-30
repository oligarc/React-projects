import { useEffect, useState } from 'react'
import './App.css'
import TaskInput from './TaskInput/TaskInput'
import TaskList from './TaskList/TaskList'
import GeneralButton from './GeneralButton/GeneralButton'

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

  const[filtro,setFiltro] = useState('todas');
  const tareasFiltradas = tareas.filter(tarea =>{
    if(filtro === "completadas"){
      return tarea.completada;
    }

    if(filtro === "pendientes"){
      return !tarea.completada;
    }

    return true;
  })

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
      <TaskList tareas={tareasFiltradas} setNuevasTareas={setNuevasTareas} />
      <h2>Número de tareas completadas : {tareasCompletas}</h2>
      <GeneralButton text={'Ver las tareas hechas'} onClick={() => setFiltro("completadas")} />
      <GeneralButton text={'Ver las tareas pendientes'} onClick={() => setFiltro("pendientes")} />
    </>
  )
}

export default App
