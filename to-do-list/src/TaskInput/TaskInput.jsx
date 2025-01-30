import { useState } from "react"

function TaskInput({onNuevaTarea}) {
 

    const [texto,setInputTexto] = useState('');
    const manejarEvento = (evento) =>{
        setInputTexto(evento.target.value)
    }

    const manejarEnter = (evento) => {

        if(evento.key == 'Enter' && texto!== ''){ //Cuidado que el Enter tiene que ir en mayúscula
            const nuevoObjTarea = {
                id:Math.random(),
                texto:texto,
                completada:false
            }
            onNuevaTarea(nuevoObjTarea);
            console.log(nuevoObjTarea)
            setInputTexto('')
        }

    }

    return(

    <fieldset>
        <legend> Lista de tareas </legend>
    <input type="text" placeholder="Añade tu nueva tarea"
    value={texto} onChange={manejarEvento}
    onKeyUp={manejarEnter}
     />
    </fieldset>

  )
}

export default TaskInput