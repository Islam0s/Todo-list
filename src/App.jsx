import { React, useState, useEffect } from 'react'
import deleteIcon from './assets/delete.png'
import completedIcon from './assets/tick.png'
import notCompleted from './assets/not_tick.png'
export const App = () => {
  
  const [task, setTask] = useState("")
  const [tasks, addTasks] = useState([]);
  

  const handleSetTask = (event) => {
    setTask(event.target.value);
  }

  const handleAddTasks = () => {
    if (task.trim() == "") return 
    addTasks([...tasks, {text: task, completed: false}]);
    localStorage.setItem("todos", JSON.stringify(tasks));  
    setTask('')
  }

  



  
  const handledonebtn = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed; 
    addTasks(newTasks);

  }

  const handleDelete = (index) => {
  const newTasks = tasks.filter((_, i) => i !== index)
  addTasks(newTasks)
}


  

  return (
  <div className="bg-stone-900 h-screen flex-col flex items-center justify-center">
  
    <div className="space-y-8 h-max w-max bg-white rounded-xl py-10 px-15">
      <div className='space-x-6'>
        <input className='p-2 bg-gray-200 rounded-lg' placeholder='Add a new task.' onChange={handleSetTask} value={task}/>
        <button className='bg-amber-400 py-1 px-2 rounded-lg' onClick={handleAddTasks}>Add Task</button>
      </div>
      <div className=''>
        <ul className='space-y-2'>
            {
              tasks.map(
                (t, index) => (<div key={index} className="flex space-x-3 justify-start items-center">
                  <li className='bg-gray-200 pr-8 pl-4 py-2 rounded-xl'>{t.text}</li>
                  <button  onClick={() => handledonebtn(index)}>{t.completed ? <img className='w-5' src={completedIcon}/> : <img className='w-4' src={notCompleted}/>}</button>
                  <button className='w-5' onClick={() => handleDelete(index)}><img src={deleteIcon}/></button>
                </div>)
              )
            }
        </ul>
         
      </div>


    </div>


  </div>
  )
}

export default App
