import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import { TaskObject } from './Types/interfaces'
import TaskList from './Components/TaskList'
import TaskInput from './Components/TaskInput'

function App() {

  const listaTareas : TaskObject[] = [
    {
      id:0,
      text:'Ver a Leo Messi',
      completed : true
    },

    {
      id:1,
      text:'Ver a Muse',
      completed : true
    },

    {
      id:2,
      text:'Ver a Avatar',
      completed : false
    }
  ]

  const [tareas,setTareas] = useState(listaTareas);
  


  return (
    <>
    <div className="bg-gray-100">
      <div className='max-w-7xl mx-auto'>
        <Header enterpriseName='TDL' />
          <div className="flex">
            <div className="w-1/2 p-4">
            <TaskInput />
            </div>
            <div className="w-1/2 p-4">
            <TaskList tareas={tareas} />
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default App
