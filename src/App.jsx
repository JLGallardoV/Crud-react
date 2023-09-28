import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"



function ComponentePrincipal() {

  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        {/** las funciones que se pasan como props no se mandan con parametro, el parametro se les define en el componente hijo (dentro)*/}
        <TaskForm />
        <TaskList />
      </div>
    </main>
  )

}

export default ComponentePrincipal;