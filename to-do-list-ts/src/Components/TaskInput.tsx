function TaskInput() {
  return (
    <>
    <div className="flex flex-col items-center gap-3">
            <h1 className="text-2xl text-black text-center">Agrega una nueva tarea:</h1>
            <input type="text"
             placeholder="Tarea..." 
             className="placeholder:text-black w-48 p-2 text-black border-1">
            </input>
    </div>
    </>
  )
}

export default TaskInput