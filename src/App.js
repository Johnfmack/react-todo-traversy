import Header from './components/Header'
import './App.css';
import Tasks from './components/Tasks'
import React, {useState} from 'react'
import AddTask from './components/AddTask'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  // add task
const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
  console.log(id, task);

  const newTask = {id, ...task}
  setTasks([...tasks, newTask])

}


  // delete tasks
  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id )
    )
  }

  const toggleReminder = (id) => {
    console.log(id)
    setTasks(tasks.map((task) => task.id === id ?
     { ...task, reminder: !task.reminder } : task
    ))
  }
  
    const [tasks, setTasks] = useState([ {
        id: 1,
        text: 'Doctor',
        day: 'Feb 5th at 3:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'School Meeting',
        day: 'Feb 6th at 1:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Shopping',
        day: 'Feb 5th at 4:30pm',
        reminder: false
    },])
   
  return (
    <div className="container">
     <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask}/>}
     
    {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ("No tasks to show")}
    </div>
  );
}

export default App;
