import { tasks as data} from "./tasks"; //lo mando llamar entre llaves ya que no estoy exportando todo el modulo (con del dafault)
import { useState, useEffect } from "react";

console.log(data);


function TaskList(){
    let test = "hello world"


    const [tasks, setTasks] = useState([]);


    useEffect(()=>{
        console.log("START USEEFECT");
        setTasks(data);
    },[]);

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