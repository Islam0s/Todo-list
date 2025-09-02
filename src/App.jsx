import { React, useState } from 'react'
export const App = () => {
  
  const [task, setTask] = useState("")
  const [tasks, addTasks] = useState([]);
  
  const handleSetTask = (event) => {
    setTask(event.target.value);
  }

  const handleAddTasks = () => {
    if (task.trim() == "") return 
    addTasks([...tasks, {text: task, completed: false}]);
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
        <button className='bg-blue-400 py-1 px-2 rounded-lg' onClick={handleAddTasks}>Add Task</button>
      </div>
      <div className=''>
        <ul className='space-y-2'>
            {
              tasks.map(
                (t, index) => (<div key={index} className="flex space-x-3 justify-start items-center">
                  <li>{t.text}</li>
                  <button className='bg-green-400 p-2 rounded-lg' onClick={() => handledonebtn(index)}>{t.completed ? "Completed" : "Done"}</button>
                  <button className='rounded-lg bg-red-600 p-2' onClick={() => handleDelete(index)}>Delete</button>
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
