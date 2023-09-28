import React from 'react'
import ReactDOM from 'react-dom/client'
import ComponentePrincipal from './App'
import './index.css'
import { TaskContextProvider } from "./context/TaskContext";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContextProvider>
      <ComponentePrincipal />
    </TaskContextProvider>
  </React.StrictMode>,
)
