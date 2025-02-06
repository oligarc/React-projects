export interface HeaderProps{
    enterpriseName: string
}

export interface ButtonProps{
    buttonText: string
}

export interface TaskObject{
    id: number,
    text: string,
    completed: boolean
}

export interface TaskObjectList{
    tareas: TaskObject[]
}

export interface TaskProps{
    tarea : TaskObject
}