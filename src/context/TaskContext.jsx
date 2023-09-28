import { createContext } from "react";
import { useState, useEffect } from "react"; //hooks react
import { tasks as data} from "../data/tasks"; //obtenemos la fuente de datos a iterar (lo mando llamar entre llaves ya que NO estoy exportando todo el modulo (con del dafault))


export const taskContext = createContext();




export function TaskContextProvider(props) {
    //controla el estado de la variable tasks, su funcion para dar actualización es setTasks, useState() es el hook de react y el parametro "[]" que recibe es el valor inicial de la variable tasks
    const [tasks, setTasks] = useState([]);
    
        useEffect(()=>{ //cada que existe un cambio en el componente va a realizar una determinada acción
            setTasks(data);
        },[]); // el array vacio se pone (si es que se requiere) como parte de la sintaxis para evitar que el useEffect se ejecute cada que exista un cambio, en su lugar solo se ejecutará una sola vez (al iniciar el componente)
    

    function createTask(task){
        setTasks([...tasks, {
          title: task.title,
          id: tasks.length + 1,
          description: task.description
        }]);
      }
    
    
    
      function deleteTask(taskId){
        setTasks(tasks.filter((item)=> item.id != taskId));
      }


    return (
        <taskContext.Provider value={{
            tasks: tasks,
            deleteTask: deleteTask,
            createTask: createTask
        }}>
            {props.children}
        </taskContext.Provider>


    );
}

