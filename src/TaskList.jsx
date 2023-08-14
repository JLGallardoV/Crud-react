import { tasks as data} from "./tasks"; //obtenemos la fuente de datos a iterar (lo mando llamar entre llaves ya que NO estoy exportando todo el modulo (con del dafault))
import { useState, useEffect } from "react"; //hooks react


function TaskList(){
    let test = "hello world"

    //controla el estado de la variable tasks, su funcion para dar actualización es setTasks, useState() es el hook de react y el parametro "[]" que recibe es el valor inicial de la variable tasks
    const [tasks, setTasks] = useState([]);

    useEffect(()=>{ //cada que existe un cambio en el componente va a realizar una determinada acción
        setTasks(data);
    },[]); // el array vacio se pone (si es que se requiere) como parte de la sintaxis para evitar que el useEffect se ejecute cada que exista un cambio, en su lugar solo se ejecutará una sola vez (al iniciar el componente)

    if(tasks.length === 0)
        return <div>No hay tareas asignadas</div>

    return(
        <div>
            <p>{test}</p>
            {   

                tasks.map((task)=>(
                    <div key={task.id}>
                        <h1>task.name</h1>
                        <h2>task.description</h2>
                    </div>
                ))
            }

        </div>
    );
}

export default TaskList;