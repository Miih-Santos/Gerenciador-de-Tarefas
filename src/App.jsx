import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import AddTasks from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 as uuidv4 } from "uuid";
import TaskPage from "./pages/TaskPage";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(() => {
    console.log("mudouuu")
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]);

  useEffect(()=>{
    /*async function fetchTasks() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    const data = await response.json()
    setTasks(data)
    }
    //fetchTasks()*/

    
  }, [])

  function onTaskClick(taskid) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskid) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskid) {
    const newTasks = tasks.filter((task) => task.id != taskid);
    setTasks(newTasks);
  }

  function onAddTaskSubimit(title, description) {
    const newTask = {
      id: uuidv4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
      <div className="w-125 space-y-4">
        <h1 className="text-slate-100 font-black text-center text-3xl">
          Gerenciador de Tarefas
        </h1>
        <AddTasks onAddTaskSubimit={onAddTaskSubimit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
